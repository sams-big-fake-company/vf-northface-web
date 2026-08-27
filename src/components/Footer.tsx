import Link from "next/link";
import Logo from "@/components/Logo";

const columns = [
  {
    title: "Shop",
    links: [
      ["Women's", "/c/womens"],
      ["Men's", "/c/mens"],
      ["Kids'", "/c/kids"],
      ["Footwear", "/c/footwear"],
      ["Bags & Gear", "/c/bags-gear"],
      ["Sale", "/c/sale"],
      ["Gift Cards", "/more/gift-card"],
    ],
  },
  {
    title: "Help",
    links: [
      ["Help Center", "/help"],
      ["Order Status", "/order-status"],
      ["Size Chart", "/help/size-charts"],
      ["Returns & Warranty", "/help/returns-policy"],
      ["Contact Us", "/help/contact-us"],
    ],
  },
  {
    title: "About Us",
    links: [
      ["Who We Are", "/about-us"],
      ["Sustainability", "/sustainability"],
      ["Technology & Innovation", "/about-us/technology"],
      ["Athletes", "/about-us/athletes"],
      ["Careers", "/about-us/careers"],
    ],
  },
  {
    title: "Explore",
    links: [
      ["XPLR Pass", "/login"],
      ["Events", "/events"],
      ["Student Discount", "/help/discounts/student"],
      ["Military Discount", "/help/discounts/military"],
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-400">
                {col.title}
              </h2>
              <ul className="space-y-2">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-zinc-200 hover:text-white hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-400">
              Never Stop Exploring
            </h2>
            <p className="text-sm text-zinc-300">
              Sign up for XPLR Pass rewards, early access, and member-only
              field testing.
            </p>
            <Link
              href="/login"
              className="mt-4 inline-block border border-white px-5 py-2 text-sm font-semibold hover:bg-white hover:text-black"
            >
              Join XPLR Pass
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-zinc-800 pt-8 md:flex-row md:items-center">
          <div className="text-white [--logo-contrast:#000000]">
            <Logo className="h-9 w-auto" />
          </div>
          <p className="max-w-xl text-xs leading-relaxed text-zinc-500">
            Demo website for internal sales presentation purposes only. Not
            affiliated with, endorsed by, or connected to The North Face or VF
            Corporation. All products, prices, and reviews are fictitious.
          </p>
          <div className="flex gap-4 font-mono text-[11px] uppercase tracking-widest text-zinc-400">
            <Link href="/help/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/help/terms" className="hover:text-white">Terms</Link>
            <span>US · EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
