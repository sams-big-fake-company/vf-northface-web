"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatPrice, getCategory, productImage, type Product } from "@/lib/data";
import { useCart } from "@/lib/cart";

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState<string | null>(
    product.sizes.length === 1 ? product.sizes[0] : null
  );
  const [error, setError] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const category = getCategory(product.category);

  function addToCart() {
    if (!size) {
      setError("Please select a size.");
      return;
    }
    setError(null);
    addItem({ slug: product.slug, color: color.name, size });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <nav className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href={`/c/${product.category}`} className="hover:underline">
          {category?.name}
        </Link>{" "}
        / <span className="text-zinc-900">{product.subcategory}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square bg-zinc-100">
          <Image
            src={productImage(product)}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover"
          />
          {product.flag && (
            <span className="absolute left-3 top-3 bg-white px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest">
              {product.flag}
            </span>
          )}
        </div>

        <div>
          {product.badge && (
            <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              {product.badge}
            </p>
          )}
          <h1 className="mt-1 text-2xl font-extrabold lg:text-3xl">
            {product.name}
          </h1>
          <p className="mt-1 text-sm text-zinc-600">
            {product.rating.toFixed(1)} ★ ({product.reviews.toLocaleString()}{" "}
            reviews)
          </p>

          <p className="mt-4 text-xl">
            {product.salePrice != null ? (
              <>
                <span className="text-zinc-500 line-through">
                  {formatPrice(product.price)}
                </span>{" "}
                <span className="font-bold text-tnf-red-dark">
                  {formatPrice(product.salePrice)}
                </span>
              </>
            ) : (
              <span className="font-bold">{formatPrice(product.price)}</span>
            )}
          </p>

          <div className="mt-6">
            <p className="text-sm font-semibold">
              Color: <span className="font-normal">{color.name}</span>
            </p>
            <div className="mt-2 flex gap-2">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  aria-label={c.name}
                  onClick={() => setColor(c)}
                  className={`h-9 w-12 border-2 ${
                    c.name === color.name
                      ? "border-black"
                      : "border-zinc-200 hover:border-zinc-400"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold">Size:</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setSize(s);
                    setError(null);
                  }}
                  className={`min-w-12 border px-3 py-2 text-sm font-semibold ${
                    s === size
                      ? "border-black bg-black text-white"
                      : "border-zinc-300 hover:border-black"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {error && <p className="mt-2 text-sm text-tnf-red-dark">{error}</p>}
          </div>

          <button
            type="button"
            onClick={addToCart}
            className="mt-8 w-full bg-black py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-tnf-red"
          >
            {added ? "Added to Cart ✓" : "Add to Cart"}
          </button>
          <Link
            href="/cart"
            className="mt-3 block w-full border border-black py-3.5 text-center text-sm font-bold uppercase tracking-widest hover:bg-zinc-100"
          >
            View Cart
          </Link>

          <div className="mt-8 border-t border-zinc-200 pt-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              Overview
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700">
              {product.description}
            </p>
            <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-zinc-700">
              {product.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
