"use client";

import Link from "next/link";
import { useState } from "react";
import { formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart";

type Step = "shipping" | "payment" | "confirmation";

export default function CheckoutPage() {
  const { lines, subtotal, clearCart } = useCart();
  const [step, setStep] = useState<Step>("shipping");
  const [orderNumber, setOrderNumber] = useState("");
  const shipping = subtotal >= 100 || subtotal === 0 ? 0 : 7.99;
  const total = subtotal + shipping;

  function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    setOrderNumber(`TNF-${Math.floor(100000 + Math.random() * 900000)}`);
    clearCart();
    setStep("confirmation");
  }

  if (step === "confirmation") {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-3xl text-white">
          ✓
        </div>
        <h1 className="mt-6 text-3xl font-extrabold">Order Confirmed</h1>
        <p className="mt-3 text-zinc-600">
          Thanks for exploring with us. Your demo order{" "}
          <span className="font-mono font-semibold text-black">{orderNumber}</span>{" "}
          has been placed. A confirmation email would be sent in a real store.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-tnf-red"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="text-3xl font-extrabold">Checkout</h1>
        <p className="mt-3 text-zinc-600">Your cart is empty.</p>
        <Link
          href="/"
          className="mt-8 inline-block bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-tnf-red"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const inputClass =
    "w-full border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-black";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-extrabold">Checkout</h1>
      <div className="mt-2 flex gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
        <span className={step === "shipping" ? "text-black" : ""}>1. Shipping</span>
        <span>/</span>
        <span className={(step as Step) === "payment" ? "text-black" : ""}>2. Payment</span>
        <span>/</span>
        <span>3. Confirmation</span>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {step === "shipping" ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep("payment");
              }}
              className="space-y-4"
            >
              <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Shipping Address
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="First name" className={inputClass} />
                <input required placeholder="Last name" className={inputClass} />
              </div>
              <input required type="email" placeholder="Email" className={inputClass} />
              <input required placeholder="Street address" className={inputClass} />
              <div className="grid gap-4 sm:grid-cols-3">
                <input required placeholder="City" className={inputClass} />
                <input required placeholder="State" className={inputClass} />
                <input required placeholder="ZIP code" className={inputClass} />
              </div>
              <button
                type="submit"
                className="w-full bg-black py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-tnf-red sm:w-auto sm:px-10"
              >
                Continue to Payment
              </button>
            </form>
          ) : (
            <form onSubmit={placeOrder} className="space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Payment (Demo — no real charge)
              </h2>
              <input
                required
                placeholder="Card number (e.g. 4242 4242 4242 4242)"
                className={inputClass}
              />
              <div className="grid gap-4 sm:grid-cols-3">
                <input required placeholder="MM/YY" className={inputClass} />
                <input required placeholder="CVC" className={inputClass} />
                <input required placeholder="ZIP code" className={inputClass} />
              </div>
              <input required placeholder="Name on card" className={inputClass} />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep("shipping")}
                  className="border border-black px-8 py-3.5 text-sm font-bold uppercase tracking-widest hover:bg-zinc-100"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-black py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-tnf-red sm:flex-none sm:px-10"
                >
                  Place Order — {formatPrice(total)}
                </button>
              </div>
            </form>
          )}
        </div>

        <aside className="h-fit border border-zinc-200 p-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Order Summary
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {lines.map((line) => (
              <li
                key={`${line.slug}-${line.color}-${line.size}`}
                className="flex justify-between gap-4"
              >
                <span>
                  {line.product.name}{" "}
                  <span className="text-zinc-500">
                    ({line.color}/{line.size}) × {line.quantity}
                  </span>
                </span>
                <span>
                  {formatPrice(
                    (line.product.salePrice ?? line.product.price) *
                      line.quantity
                  )}
                </span>
              </li>
            ))}
          </ul>
          <dl className="mt-4 space-y-2 border-t border-zinc-200 pt-4 text-sm">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Shipping</dt>
              <dd>{shipping === 0 ? "FREE" : formatPrice(shipping)}</dd>
            </div>
            <div className="flex justify-between border-t border-zinc-200 pt-2 text-base font-bold">
              <dt>Total</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
