# vf-northface-web

A demo e-commerce website inspired by the visual style of outdoor retail
sites, built for **internal sales demonstration purposes only**.

> **Disclaimer:** This project is a demo and is **not affiliated with,
> endorsed by, or connected to The North Face or VF Corporation**. All
> products, prices, reviews, and branding elements are fictitious and exist
> solely to demonstrate a working e-commerce experience. No assets were
> copied from thenorthface.com; the logo is an original stylized SVG.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- ESLint 9 with `eslint-config-next`

## Features

- Home page with hero, promo tiles, featured products, and brand sections
- Category listing pages (`/c/mens`, `/c/womens`, `/c/kids`, `/c/footwear`,
  `/c/bags-gear`, `/c/sale`)
- Product detail pages with color and size selection (`/p/<slug>`)
- Working cart: add / remove / update quantities, persisted in
  `localStorage`
- Mock checkout flow (shipping → payment → confirmation, no real backend)
- Product search (`/search?q=...`)
- Mock login with XPLR Pass branding (`/login`, any credentials work)
- Catch-all route so unknown links render a friendly placeholder page
- Fully responsive layout

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Structure

```
src/
  app/           # App Router pages
  components/    # Header, Footer, Logo, ProductCard, ProductDetail, ...
  lib/data.ts    # Mock product catalog
  lib/cart.tsx   # Cart context (localStorage-persisted)
```
