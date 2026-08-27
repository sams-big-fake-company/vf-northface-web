import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import {
  categories,
  getCategory,
  productsForCategory,
  type CategorySlug,
} from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default async function CategoryPage({
  params,
}: PageProps<"/c/[category]">) {
  const { category } = await params;
  const cat = getCategory(category as CategorySlug);
  if (!cat) notFound();
  const items = productsForCategory(cat.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <nav className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        / <span className="text-zinc-900">{cat.name}</span>
      </nav>
      <h1 className="mt-2 text-3xl font-extrabold">{cat.name}</h1>
      <p className="mt-1 text-zinc-600">{cat.tagline}</p>

      {cat.subcategories.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {cat.subcategories.map((s) => (
            <span
              key={s}
              className="border border-zinc-300 px-4 py-1.5 text-sm font-semibold"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      <div className="mt-8 flex items-center justify-between border-y border-zinc-200 py-3">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
          {items.length} Products
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
          Filter + Sort
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
