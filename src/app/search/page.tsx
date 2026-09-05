import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { searchProducts } from "@/lib/data";

export default async function SearchPage({
  searchParams,
}: PageProps<"/search">) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const results = searchProducts(q);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-extrabold">
        {q ? (
          <>
            Search results for &ldquo;{q}&rdquo;{" "}
            <span className="text-lg font-normal text-zinc-500">
              ({results.length} {results.length === 1 ? "product" : "products"})
            </span>
          </>
        ) : (
          "Search"
        )}
      </h1>

      {q && results.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-zinc-600">
            No products found. Try &ldquo;Nuptse&rdquo;, &ldquo;fleece&rdquo;,
            or &ldquo;backpack&rdquo;.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-tnf-red-dark"
          >
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {results.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
