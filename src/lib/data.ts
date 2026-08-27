export type Color = {
  name: string;
  hex: string;
  accent?: string;
};

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  subcategory: string;
  price: number;
  salePrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  flag?: string;
  colors: Color[];
  sizes: string[];
  description: string;
  features: string[];
  icon: ProductIcon;
};

export type ProductIcon =
  | "jacket"
  | "fleece"
  | "backpack"
  | "shoe"
  | "tent"
  | "beanie"
  | "pants"
  | "duffel";

export type CategorySlug =
  | "mens"
  | "womens"
  | "kids"
  | "footwear"
  | "bags-gear"
  | "sale";

export type Category = {
  slug: CategorySlug;
  name: string;
  tagline: string;
  subcategories: string[];
};

export const categories: Category[] = [
  {
    slug: "mens",
    name: "Men's",
    tagline: "Jackets, fleece, and gear built for exploration.",
    subcategories: ["Jackets & Vests", "Tops", "Bottoms", "Accessories"],
  },
  {
    slug: "womens",
    name: "Women's",
    tagline: "Performance apparel for every adventure.",
    subcategories: ["Jackets & Vests", "Tops", "Bottoms", "Accessories"],
  },
  {
    slug: "kids",
    name: "Kids'",
    tagline: "Durable gear for the youngest explorers.",
    subcategories: ["Jackets", "Tops", "Bottoms"],
  },
  {
    slug: "footwear",
    name: "Footwear",
    tagline: "On-trail traction. All-day comfort.",
    subcategories: ["Hiking", "Trail Run", "Lifestyle"],
  },
  {
    slug: "bags-gear",
    name: "Bags & Gear",
    tagline: "Backpacks, duffels, and tents packed for adventure.",
    subcategories: ["Backpacks", "Duffels", "Tents", "Camp"],
  },
  {
    slug: "sale",
    name: "Sale",
    tagline: "New sale styles + up to 30% off.",
    subcategories: [],
  },
];

const black = { name: "TNF Black", hex: "#1a1a1a" };
const white = { name: "TNF White", hex: "#f4f4f4" };
const navy = { name: "Summit Navy", hex: "#1f2a44" };
const red = { name: "TNF Red", hex: "#ef3340" };
const copper = { name: "Copper Silt", hex: "#a9674b" };
const olive = { name: "Forest Olive", hex: "#565a3c" };
const stone = { name: "Gravel Stone", hex: "#b3aa99" };
const blue = { name: "Optic Blue", hex: "#174fbf" };
const pine = { name: "Pine Needle", hex: "#2e4436" };
const rose = { name: "Fawn Rose", hex: "#c69a94" };

const apparelSizes = ["XS", "S", "M", "L", "XL", "XXL"];
const kidSizes = ["XS", "S", "M", "L", "XL"];
const shoeSizes = ["7", "8", "9", "10", "11", "12", "13"];
const oneSize = ["One Size"];

export const products: Product[] = [
  {
    slug: "mens-1996-retro-nuptse-jacket",
    name: "Men's 1996 Retro Nuptse Jacket",
    category: "mens",
    subcategory: "Jackets & Vests",
    price: 380,
    rating: 4.8,
    reviews: 2659,
    flag: "NEW",
    colors: [copper, black, navy, olive, stone],
    sizes: apparelSizes,
    description:
      "An icon reborn. The boxy silhouette of our classic 1996 down jacket returns with 700-fill recycled down insulation and a durable, water-repellent ripstop shell.",
    features: [
      "700-fill recycled goose down",
      "DWR-finished recycled nylon ripstop",
      "Stowable hood zips into collar",
      "Packs into its own pocket",
    ],
    icon: "jacket",
  },
  {
    slug: "womens-1996-retro-nuptse-jacket",
    name: "Women's 1996 Retro Nuptse Jacket",
    category: "womens",
    subcategory: "Jackets & Vests",
    price: 380,
    rating: 4.7,
    reviews: 1874,
    flag: "NEW",
    colors: [black, white, rose, pine],
    sizes: apparelSizes,
    description:
      "The legendary high-loft silhouette, tailored for women. Warm, packable 700-fill recycled down in a water-repellent shell for everyday cold-weather exploration.",
    features: [
      "700-fill recycled goose down",
      "Relaxed retro fit",
      "Secure-zip hand pockets",
      "Packs into its own pocket",
    ],
    icon: "jacket",
  },
  {
    slug: "mens-thermoball-eco-jacket",
    name: "Men's ThermoBall™ Eco Jacket 2.0",
    category: "mens",
    subcategory: "Jackets & Vests",
    price: 240,
    salePrice: 168,
    rating: 4.6,
    reviews: 1432,
    badge: "PACKABLE WARMTH",
    colors: [black, navy, olive],
    sizes: apparelSizes,
    description:
      "Lightweight, packable warmth that performs even when wet. ThermoBall™ Eco insulation is made from 100% post-consumer recycled materials.",
    features: [
      "ThermoBall™ Eco recycled insulation",
      "Warm even when wet",
      "Stows in its own pocket",
      "Zip-in compatible with shells",
    ],
    icon: "jacket",
  },
  {
    slug: "womens-thermoball-eco-jacket",
    name: "Women's ThermoBall™ Eco Jacket 2.0",
    category: "womens",
    subcategory: "Jackets & Vests",
    price: 240,
    salePrice: 168,
    rating: 4.6,
    reviews: 1201,
    badge: "PACKABLE WARMTH",
    colors: [black, rose, blue],
    sizes: apparelSizes,
    description:
      "Round-baffle warmth in a sleek, packable layer. ThermoBall™ Eco insulation keeps you warm in wet and cold conditions.",
    features: [
      "ThermoBall™ Eco recycled insulation",
      "Warm even when wet",
      "Stows in its own pocket",
      "Zip-in compatible with shells",
    ],
    icon: "jacket",
  },
  {
    slug: "mens-gore-tex-mountain-jacket",
    name: "Men's GTX Alpine Mountain Jacket",
    category: "mens",
    subcategory: "Jackets & Vests",
    price: 450,
    rating: 4.9,
    reviews: 512,
    badge: "WATERPROOF",
    colors: [red, black, pine, blue],
    sizes: apparelSizes,
    description:
      "Our most storm-ready mountain shell. A fully seam-sealed waterproof-breathable membrane and helmet-compatible hood for serious alpine days.",
    features: [
      "Waterproof, breathable 3L shell",
      "Helmet-compatible adjustable hood",
      "Pit-zip venting",
      "Adjustable hem and cuffs",
    ],
    icon: "jacket",
  },
  {
    slug: "mens-tka-100-glacier-fleece",
    name: "Men's TKA 100 Glacier Full-Zip Fleece",
    category: "mens",
    subcategory: "Tops",
    price: 80,
    rating: 4.7,
    reviews: 2210,
    colors: [black, stone, navy, olive],
    sizes: apparelSizes,
    description:
      "The classic lightweight fleece. Soft, quick-drying TKA 100 recycled fleece for cool mornings on the trail or around town.",
    features: [
      "Recycled TKA 100 fleece",
      "Full-zip with chin guard",
      "Secure-zip hand pockets",
      "Lightweight and quick-drying",
    ],
    icon: "fleece",
  },
  {
    slug: "womens-osito-fleece-jacket",
    name: "Women's Osito Fleece Jacket",
    category: "womens",
    subcategory: "Tops",
    price: 115,
    rating: 4.8,
    reviews: 3345,
    badge: "BESTSELLER",
    colors: [white, black, rose, pine],
    sizes: apparelSizes,
    description:
      "Irresistibly soft high-pile raschel fleece with a flattering seamed silhouette. A cozy favorite for everyday cold weather.",
    features: [
      "Ultra-soft raschel fleece",
      "Stretch binding at cuffs",
      "Secure-zip hand pockets",
      "Standard fit",
    ],
    icon: "fleece",
  },
  {
    slug: "mens-dynamic-pants",
    name: "Men's Dynamic Trail Pants",
    category: "mens",
    subcategory: "Bottoms",
    price: 110,
    rating: 4.5,
    reviews: 689,
    badge: "ADVANCED DURABILITY",
    colors: [stone, black, olive],
    sizes: ["28", "30", "32", "34", "36", "38"],
    description:
      "Move-with-you stretch-woven pants with a tapered fit, ready for scrambles, approaches, and everything in between.",
    features: [
      "4-way stretch woven fabric",
      "Water-repellent finish",
      "Zippered thigh pocket",
      "Tapered fit",
    ],
    icon: "pants",
  },
  {
    slug: "womens-aphrodite-joggers",
    name: "Women's Aphrodite 2.0 Joggers",
    category: "womens",
    subcategory: "Bottoms",
    price: 70,
    salePrice: 49,
    rating: 4.6,
    reviews: 1523,
    colors: [black, stone, navy],
    sizes: apparelSizes,
    description:
      "Lightweight, quick-drying joggers with a relaxed fit and adjustable waist — comfortable on the trail and at camp.",
    features: [
      "Quick-dry woven fabric",
      "Adjustable drawcord waist",
      "Secure-zip pocket",
      "Relaxed fit",
    ],
    icon: "pants",
  },
  {
    slug: "kids-reversible-perrito-jacket",
    name: "Kids' Reversible Perrito Hooded Jacket",
    category: "kids",
    subcategory: "Jackets",
    price: 120,
    rating: 4.8,
    reviews: 845,
    flag: "NEW",
    colors: [blue, red, pine],
    sizes: kidSizes,
    description:
      "Two jackets in one: cozy fleece on one side, water-repellent taffeta on the other. Built to survive recess and the sledding hill.",
    features: [
      "Reversible design",
      "Heatseeker™ Eco insulation",
      "Water-repellent finish",
      "Elastic-bound cuffs",
    ],
    icon: "jacket",
  },
  {
    slug: "kids-glacier-full-zip-hoodie",
    name: "Kids' Glacier Full-Zip Hoodie",
    category: "kids",
    subcategory: "Tops",
    price: 60,
    salePrice: 42,
    rating: 4.7,
    reviews: 612,
    colors: [rose, navy, olive],
    sizes: kidSizes,
    description:
      "Soft recycled fleece with a snug hood — the everyday layer for young adventurers.",
    features: [
      "Recycled TKA fleece",
      "Full-zip with hood",
      "Kangaroo pockets",
      "Machine washable",
    ],
    icon: "fleece",
  },
  {
    slug: "borealis-backpack",
    name: "Borealis Backpack — 28L",
    category: "bags-gear",
    subcategory: "Backpacks",
    price: 115,
    rating: 4.8,
    reviews: 4120,
    badge: "MULTIPLE ORGANIZATION POCKETS",
    colors: [black, stone, blue, red],
    sizes: oneSize,
    description:
      "The do-everything daypack. A padded laptop sleeve, FlexVent™ suspension, and a front bungee system for quick storage.",
    features: [
      "28L capacity",
      "Padded 15\" laptop sleeve",
      "FlexVent™ suspension system",
      "Front elastic bungee storage",
    ],
    icon: "backpack",
  },
  {
    slug: "recon-backpack",
    name: "Recon Backpack — 30L",
    category: "bags-gear",
    subcategory: "Backpacks",
    price: 125,
    rating: 4.7,
    reviews: 2984,
    colors: [black, navy, olive],
    sizes: oneSize,
    description:
      "A commute-to-crag classic with dedicated laptop protection, a fleece-lined tablet sleeve, and plenty of organization.",
    features: [
      "30L capacity",
      "Padded laptop compartment",
      "Fleece-lined tablet sleeve",
      "Sternum strap with whistle buckle",
    ],
    icon: "backpack",
  },
  {
    slug: "base-camp-duffel-m",
    name: "Base Camp Duffel — M",
    category: "bags-gear",
    subcategory: "Duffels",
    price: 169,
    rating: 4.9,
    reviews: 5230,
    badge: "EXPEDITION PROVEN",
    colors: [black, red, stone],
    sizes: oneSize,
    description:
      "The legendary expedition duffel. Ultra-durable laminate fabric, water-resistant construction, and alpine-cut shoulder straps.",
    features: [
      "71L capacity",
      "Water-resistant laminate fabric",
      "Detachable alpine-cut shoulder straps",
      "Lockable zipper",
    ],
    icon: "duffel",
  },
  {
    slug: "stormbreak-2-tent",
    name: "Stormbreak 2 Tent",
    category: "bags-gear",
    subcategory: "Tents",
    price: 185,
    salePrice: 139,
    rating: 4.6,
    reviews: 934,
    colors: [{ name: "Golden Oak", hex: "#c98a3b" }],
    sizes: oneSize,
    description:
      "A roomy two-person shelter with large doors, easy setup, and full-coverage fly for three-season backcountry trips.",
    features: [
      "2-person, 3-season",
      "Two large doors and vestibules",
      "Full-coverage fly",
      "Easy color-coded setup",
    ],
    icon: "tent",
  },
  {
    slug: "vectiv-exploris-2-futurelight",
    name: "VECTIV Exploris 2 Hiking Shoes",
    category: "footwear",
    subcategory: "Hiking",
    price: 169,
    rating: 4.5,
    reviews: 782,
    flag: "NEW",
    badge: "WATERPROOF",
    colors: [black, stone, blue],
    sizes: shoeSizes,
    description:
      "Waterproof-breathable hikers with a propulsive VECTIV rocker midsole and all-terrain grip for fast miles on rough trails.",
    features: [
      "Waterproof-breathable membrane",
      "VECTIV rocker midsole",
      "Surface Control™ rubber outsole",
      "Protective toe cap",
    ],
    icon: "shoe",
  },
  {
    slug: "mens-back-to-berkeley-iv",
    name: "Men's Back-To-Berkeley IV Boots",
    category: "footwear",
    subcategory: "Lifestyle",
    price: 149,
    salePrice: 104,
    rating: 4.7,
    reviews: 1310,
    colors: [copper, black, olive],
    sizes: shoeSizes,
    description:
      "Heritage mountain style meets modern waterproof comfort. Premium leather upper with heat-retaining insulation.",
    features: [
      "Waterproof full-grain leather",
      "Heatseeker™ Eco insulation",
      "Rugged lugged outsole",
      "Heritage 1978 styling",
    ],
    icon: "shoe",
  },
  {
    slug: "oxeye-trail-runners",
    name: "Oxeye Trail Running Shoes",
    category: "footwear",
    subcategory: "Trail Run",
    price: 125,
    rating: 4.4,
    reviews: 421,
    colors: [white, black, red],
    sizes: shoeSizes,
    description:
      "Light, responsive trail runners with a cushioned dual-density midsole and grippy outsole for daily miles on mixed terrain.",
    features: [
      "Dual-density EVA midsole",
      "All-terrain rubber outsole",
      "Breathable engineered mesh",
      "Reflective details",
    ],
    icon: "shoe",
  },
  {
    slug: "tnf-logo-box-cuffed-beanie",
    name: "Logo Box Cuffed Beanie",
    category: "mens",
    subcategory: "Accessories",
    price: 30,
    rating: 4.8,
    reviews: 1873,
    colors: [black, red, stone, pine],
    sizes: oneSize,
    description:
      "A classic rib-knit beanie with an embroidered logo patch. Warm, stretchy, and ready for the lift line or the sidewalk.",
    features: [
      "Soft rib-knit acrylic",
      "Embroidered logo patch",
      "Cuffed design",
      "One size fits most",
    ],
    icon: "beanie",
  },
  {
    slug: "womens-summit-breithorn-hoodie",
    name: "Women's Summit Series Breithorn Hoodie",
    category: "womens",
    subcategory: "Jackets & Vests",
    price: 320,
    rating: 4.9,
    reviews: 256,
    badge: "SUMMIT SERIES",
    colors: [black, blue, white],
    sizes: apparelSizes,
    description:
      "Expedition-grade 800-fill down warmth in a climbing-focused design, with a helmet-compatible hood and harness-friendly pockets.",
    features: [
      "800-fill ProDown™",
      "Helmet-compatible hood",
      "Harness-compatible pockets",
      "Ultralight ripstop shell",
    ],
    icon: "jacket",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function productsForCategory(slug: CategorySlug): Product[] {
  if (slug === "sale") return products.filter((p) => p.salePrice != null);
  return products.filter((p) => p.category === slug);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.subcategory.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}

export function productImage(product: Product): string {
  return `/images/products/${product.slug}.jpg`;
}

export function formatPrice(n: number): string {
  return `$${n.toFixed(2)}`;
}
