"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { useCart } from "@/lib/cart";

const navItems = [
  { name: "Men's", href: "/c/mens" },
  { name: "Women's", href: "/c/womens" },
  { name: "Kids'", href: "/c/kids" },
  { name: "Footwear", href: "/c/footwear" },
  { name: "Bags & Gear", href: "/c/bags-gear" },
  { name: "Sale", href: "/c/sale", accent: true },
  { name: "About Us", href: "/about-us" },
] as const;

const activities = ["Hike", "Climb", "Ski", "Trail Run", "Camp"];

export default function Header() {
  const { count } = useCart();
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setSearchOpen(false);
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <div className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-black text-white text-[11px] tracking-widest">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5">
          <div className="flex gap-4 font-mono">
            <span className="hidden sm:inline">RESALE</span>
            <span className="hidden sm:inline">SUMMIT SERIES</span>
          </div>
          <p className="font-semibold">
            New Sale Styles + Up to 30% Off{" "}
            <Link href="/c/sale" className="underline">
              Shop Sale
            </Link>
          </p>
          <div className="hidden gap-4 sm:flex font-mono">
            <span>US · EN</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" aria-label="Home" className="shrink-0 text-black">
            <Logo className="h-10 w-auto" />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Site Main">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold hover:underline underline-offset-8 decoration-2 ${
                  "accent" in item && item.accent
                    ? "text-tnf-red-dark"
                    : "text-zinc-900"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Open search"
              onClick={() => setSearchOpen((v) => !v)}
              className="text-zinc-900 hover:text-tnf-red-dark"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" />
              </svg>
            </button>
            <Link href="/login" aria-label="My Account" className="text-zinc-900 hover:text-tnf-red-dark">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
              </svg>
            </Link>
            <Link href="/cart" aria-label={`Cart - ${count} items`} className="relative text-zinc-900 hover:text-tnf-red-dark">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 7h12l1.5 13h-15L6 7Z" />
                <path d="M9 7a3 3 0 0 1 6 0" />
              </svg>
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-tnf-red-dark text-[10px] font-bold text-white">
                  {count}
                </span>
              )}
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="text-zinc-900 lg:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Activity nav */}
        <div className="hidden border-t border-zinc-100 lg:block">
          <div className="mx-auto flex max-w-7xl gap-6 px-4 py-1.5">
            {activities.map((a) => (
              <Link
                key={a}
                href={`/activity/${a.toLowerCase().replace(" ", "-")}`}
                className="font-mono text-[11px] uppercase tracking-widest text-zinc-500 hover:text-black"
              >
                {a}
              </Link>
            ))}
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-zinc-200 bg-white">
            <form onSubmit={submitSearch} className="mx-auto flex max-w-7xl gap-2 px-4 py-3">
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products (e.g. Nuptse, Borealis)"
                className="flex-1 border border-zinc-300 px-4 py-2 text-sm outline-none focus:border-black"
              />
              <button
                type="submit"
                className="bg-black px-6 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {mobileOpen && (
          <nav className="border-t border-zinc-200 bg-white lg:hidden" aria-label="Mobile">
            <div className="flex flex-col px-4 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`border-b border-zinc-100 py-3 text-sm font-semibold ${
                    "accent" in item && item.accent ? "text-tnf-red-dark" : "text-zinc-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </div>
  );
}
