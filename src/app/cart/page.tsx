"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPrice, productImage } from "@/lib/data";
import { useCart } from "@/lib/cart";

export default function CartPage() {
  const { lines, subtotal, count, removeItem, updateQuantity } = useCart();
  const shipping = subtotal >= 100 || subtotal === 0 ? 0 : 7.99;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-extrabold">
        Your Cart{" "}
        <span className="text-lg font-normal text-zinc-500">
          ({count} {count === 1 ? "item" : "items"})
        </span>
      </h1>

      {lines.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-zinc-600">Your cart is empty.</p>
          <Link
            href="/"
            className="mt-6 inline-block bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-tnf-red-dark"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {lines.map((line) => {
              const unit = line.product.salePrice ?? line.product.price;
              return (
                <div
                  key={`${line.slug}-${line.color}-${line.size}`}
                  className="flex gap-4 border-b border-zinc-200 py-6"
                >
                  <Link
                    href={`/p/${line.slug}`}
                    className="relative aspect-square w-28 shrink-0 overflow-hidden bg-zinc-100"
                  >
                    <Image
                      src={productImage(line.product)}
                      alt={line.product.name}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-4">
                      <Link
                        href={`/p/${line.slug}`}
                        className="font-semibold hover:underline"
                      >
                        {line.product.name}
                      </Link>
                      <p className="font-semibold">
                        {formatPrice(unit * line.quantity)}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-zinc-600">
                      {line.color} / {line.size}
                    </p>
                    <div className="mt-auto flex items-center gap-4 pt-3">
                      <div className="flex items-center border border-zinc-300">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            updateQuantity(
                              line.slug,
                              line.color,
                              line.size,
                              line.quantity - 1
                            )
                          }
                          className="px-3 py-1 hover:bg-zinc-100"
                        >
                          −
                        </button>
                        <span className="min-w-8 text-center text-sm">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() =>
                            updateQuantity(
                              line.slug,
                              line.color,
                              line.size,
                              line.quantity + 1
                            )
                          }
                          className="px-3 py-1 hover:bg-zinc-100"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          removeItem(line.slug, line.color, line.size)
                        }
                        className="text-sm text-zinc-500 underline hover:text-tnf-red"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="h-fit border border-zinc-200 p-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              Order Summary
            </h2>
            <dl className="mt-4 space-y-2 text-sm">
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
                <dd>{formatPrice(subtotal + shipping)}</dd>
              </div>
            </dl>
            <Link
              href="/checkout"
              className="mt-6 block w-full bg-black py-3.5 text-center text-sm font-bold uppercase tracking-widest text-white hover:bg-tnf-red-dark"
            >
              Checkout
            </Link>
            <p className="mt-3 text-center text-xs text-zinc-500">
              Free shipping on orders over $100
            </p>
          </aside>
        </div>
      )}
    </div>
  );
}
