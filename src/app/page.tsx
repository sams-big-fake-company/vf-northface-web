import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { productImage, products } from "@/lib/data";

const promoTiles = [
  { label: "Women's Sale", href: "/c/womens", slug: "womens-1996-retro-nuptse-jacket" },
  { label: "Men's Sale", href: "/c/mens", slug: "mens-thermoball-eco-jacket" },
  { label: "Kids' Sale", href: "/c/kids", slug: "kids-reversible-perrito-jacket" },
  { label: "Bags & Gear Sale", href: "/c/bags-gear", slug: "base-camp-duffel-m" },
] as const;

const quickLinks = [
  { label: "Top Backpacks", href: "/c/bags-gear" },
  { label: "Easy Layers", href: "/c/womens" },
  { label: "Puffer Jackets", href: "/c/mens" },
  { label: "New Arrivals", href: "/c/footwear" },
];

export default function Home() {
  const featured = products.filter((p) => p.flag === "NEW").slice(0, 4);
  const gear = products
    .filter((p) => p.category === "bags-gear")
    .slice(0, 4);

  return (
    <>
      {/* Hero + promo tiles */}
      <section className="grid gap-1 lg:grid-cols-2">
        <Link
          href="/c/sale"
          className="relative flex min-h-[420px] items-center overflow-hidden bg-zinc-800 lg:min-h-[560px]"
        >
          <Image
            src="/images/hero.jpg"
            alt="Hikers heading toward snow-capped mountains"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
          <div className="relative z-10 px-8 py-16 lg:px-16">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-white">
              End of Summer Sale
            </p>
            <h1 className="mt-3 max-w-md text-4xl font-extrabold leading-tight text-white lg:text-5xl">
              New Sale Styles + Up to 30% Off
            </h1>
            <span className="mt-6 inline-block border border-white bg-black/40 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white hover:text-black">
              Shop Sale
            </span>
          </div>
        </Link>

        <div className="grid grid-cols-2 gap-1">
          {promoTiles.map((tile) => {
            const product = products.find((p) => p.slug === tile.slug)!;
            return (
              <Link key={tile.label} href={tile.href} className="group relative min-h-[200px] overflow-hidden bg-zinc-100">
                <Image
                  src={productImage(product)}
                  alt={tile.label}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap border border-zinc-300 bg-white px-4 py-1.5 text-sm font-semibold group-hover:bg-black group-hover:text-white">
                  {tile.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick links */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-4 py-6">
          {quickLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="border border-zinc-300 px-5 py-2 text-sm font-semibold hover:border-black"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      {/* New arrivals */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-extrabold lg:text-3xl">
            Move into something new.
          </h2>
          <Link href="/c/mens" className="text-sm font-semibold underline underline-offset-4">
            Shop New Arrivals
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Backpacks banner */}
      <section className="bg-black text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
              Backpacks
            </p>
            <h2 className="mt-3 text-3xl font-extrabold lg:text-4xl">
              Packed for adventure.
            </h2>
            <p className="mt-4 max-w-md text-zinc-300">
              From lecture halls to alpine walls — daypacks, technical packs,
              and expedition duffels built to outlast the journey.
            </p>
            <Link
              href="/c/bags-gear"
              className="mt-6 inline-block bg-white px-6 py-2.5 text-sm font-semibold text-black hover:bg-tnf-red hover:text-white"
            >
              All Backpacks
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {gear.map((p) => (
              <Link key={p.slug} href={`/p/${p.slug}`} className="group bg-zinc-900 p-3">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={productImage(p)}
                    alt={p.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-sm font-semibold group-hover:underline">{p.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* XPLR Pass */}
      <section className="mx-auto max-w-7xl px-4 py-16 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-tnf-red">
          XPLR Pass
        </p>
        <h2 className="mt-3 text-3xl font-extrabold">Never Stop Exploring.</h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600">
          Join XPLR Pass for member rewards, early access to limited drops,
          field testing opportunities, and a birthday gift each year.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-block bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-tnf-red"
        >
          Sign Up for Free
        </Link>
      </section>
    </>
  );
}
