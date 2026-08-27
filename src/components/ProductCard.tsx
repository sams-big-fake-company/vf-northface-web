import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { formatPrice, type Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/p/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-zinc-100">
        <ProductImage
          icon={product.icon}
          color={product.colors[0]}
          className="aspect-square w-full transition-transform duration-300 group-hover:scale-105"
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
