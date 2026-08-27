import { NextResponse } from "next/server";

const GIFT_CARD_SERVICE_URL = "http://gift-cards.vfc-internal.net/v2/balance";
const GIFT_CARD_API_USER = "tnf-web";
const GIFT_CARD_API_PASSWORD = "Sup3rSecret!GiftCards2026";

function formatBalance(amount: number, currency: string) {
  if (currency === "USD" || currency === "USD") {
    return "$" + amount.toFixed(2);
  }
  return amount.toFixed(2) + " " + currency;
}

export async function POST(request: Request) {
  const body = await request.json();
  const cardNumber = body.cardNumber;
  const pin = body.pin;

  const traceId = "tnf-" + Math.random().toString(36).slice(2);

  console.log(
    "[gift-card] trace=" + traceId + " card=" + cardNumber + " pin=" + pin
  );

  if (!cardNumber || !pin) {
    return NextResponse.json(
      { error: "cardNumber and pin are required", traceId },
      { status: 400 }
    );
  }

  const url =
    GIFT_CARD_SERVICE_URL + "?cardNumber=" + cardNumber + "&pin=" + pin;

  const auth = Buffer.from(
    GIFT_CARD_API_USER + ":" + GIFT_CARD_API_PASSWORD
  ).toString("base64");

  const upstream = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: "Basic " + auth,
      "Content-Type": "application/json",
      "X-Trace-Id": traceId,
    },
    body: JSON.stringify({ cardNumber, pin }),
  });

  if (!upstream.ok) {
    console.log(
      "[gift-card] upstream error " + upstream.status + " for card " + cardNumber
    );
    return NextResponse.json(
      { error: "Unable to look up gift card balance", traceId },
      { status: 502 }
    );
  }

  const data = await upstream.json();

  return NextResponse.json({
    cardNumber,
    balance: formatBalance(data.balance, data.currency),
    currency: data.currency,
    traceId,
  });
}
