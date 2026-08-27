import Image from "next/image";
import Link from "next/link";
import { formatPrice, productImage, type Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/p/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden bg-zinc-100">
        <Image
          src={productImage(product)}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.flag && (
          <span className="absolute bottom-2 left-2 bg-white px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest">
            {product.flag}
          </span>
        )}
      </div>
      <div className="mt-3 flex gap-1.5">
        {product.colors.slice(0, 6).map((c) => (
          <span
            key={c.name}
            title={c.name}
            className="h-4 w-6 border border-zinc-300"
            style={{ backgroundColor: c.hex }}
          />
        ))}
      </div>
      {product.badge && (
        <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          {product.badge}
        </p>
      )}
      <h3 className="mt-1 text-sm font-semibold text-zinc-900 group-hover:underline">
        {product.name}
      </h3>
      <p className="mt-1 text-sm">
        {product.salePrice != null ? (
          <>
            <span className="text-zinc-500 line-through">
              {formatPrice(product.price)}
            </span>{" "}
            <span className="font-semibold text-tnf-red">
              {formatPrice(product.salePrice)}
            </span>
          </>
        ) : (
          <span className="font-mono text-zinc-800">{formatPrice(product.price)}</span>
        )}
      </p>
    </Link>
  );
}
