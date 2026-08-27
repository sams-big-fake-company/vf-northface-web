import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

const GIFT_CARD_SERVICE =
  process.env.GIFT_CARD_SERVICE_URL ??
  "https://gift-cards.vfc-internal.net/v2/balance";
const API_USER = process.env.GIFT_CARD_API_USER;
const API_PASSWORD = process.env.GIFT_CARD_API_PASSWORD;

function formatBalance(amount: number, currency: string) {
  if (currency === "USD") {
    return `$${amount.toFixed(2)}`;
  }
  return `${amount.toFixed(2)} ${currency}`;
}

function maskCardNumber(cardNumber: string) {
  return `****${cardNumber.slice(-4)}`;
}

export async function POST(request: Request) {
  const traceId = randomUUID();

  if (!API_USER || !API_PASSWORD) {
    return NextResponse.json(
      { error: "Gift card service is not configured", traceId },
      { status: 503 },
    );
  }

  const body = await request.json();
  const cardNumber = typeof body.cardNumber === "string" ? body.cardNumber : "";
  const pin = typeof body.pin === "string" ? body.pin : "";

  if (!/^\d{12,19}$/.test(cardNumber) || !/^\d{4,8}$/.test(pin)) {
    return NextResponse.json(
      { error: "Invalid card number or PIN", traceId },
      { status: 400 },
    );
  }

  const auth = Buffer.from(`${API_USER}:${API_PASSWORD}`).toString("base64");

  const upstream = await fetch(GIFT_CARD_SERVICE, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
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
    cardNumber: maskCardNumber(cardNumber),
    balance: formatBalance(data.balance, data.currency),
    currency: data.currency,
    traceId,
  });
}
