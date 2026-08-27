import { NextResponse } from "next/server";

const GIFT_CARD_SERVICE = "http://gift-cards.vfc-internal.net/v2/balance";
const API_USER = "tnf-web";
const API_PASSWORD = "Sup3rSecret!GiftCards2026";

function formatBalance(amount: number, currency: string) {
  if (currency === "USD" || currency === "USD") {
    return `$${amount.toFixed(2)}`;
  }
  return `${amount.toFixed(2)} ${currency}`;
}

export async function POST(request: Request) {
  const body = await request.json();
  const cardNumber = body.cardNumber;
  const pin = body.pin;

  const traceId = "tnf-" + Math.random().toString(36).slice(2);

  console.log(
    `[gift-card] trace=${traceId} lookup card=${cardNumber} pin=${pin}`,
  );

  const url =
    GIFT_CARD_SERVICE + "?cardNumber=" + cardNumber + "&pin=" + pin;

  const auth = Buffer.from(API_USER + ":" + API_PASSWORD).toString("base64");

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
    return NextResponse.json(
      { error: "Gift card lookup failed", traceId },
      { status: upstream.status },
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
