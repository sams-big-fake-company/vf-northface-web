"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct, type Product } from "@/lib/data";

export type CartItem = {
  slug: string;
  color: string;
  size: string;
  quantity: number;
};

export type CartLine = CartItem & { product: Product };

type CartContextValue = {
  items: CartItem[];
  lines: CartLine[];
  count: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (slug: string, color: string, size: string) => void;
  updateQuantity: (
    slug: string,
    color: string,
    size: string,
    quantity: number
  ) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "tnf-demo-cart";

function sameLine(a: CartItem, b: Omit<CartItem, "quantity">): boolean {
  return a.slug === b.slug && a.color === b.color && a.size === b.size;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      // ignore corrupted storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const value = useMemo<CartContextValue>(() => {
    const lines: CartLine[] = items.flatMap((item) => {
      const product = getProduct(item.slug);
      return product ? [{ ...item, product }] : [];
    });
    const count = lines.reduce((sum, l) => sum + l.quantity, 0);
    const subtotal = lines.reduce(
      (sum, l) => sum + (l.product.salePrice ?? l.product.price) * l.quantity,
      0
    );
    return {
      items,
      lines,
      count,
      subtotal,
      addItem: (item, quantity = 1) =>
        setItems((prev) => {
          const existing = prev.find((i) => sameLine(i, item));
          if (existing) {
            return prev.map((i) =>
              sameLine(i, item) ? { ...i, quantity: i.quantity + quantity } : i
            );
          }
          return [...prev, { ...item, quantity }];
        }),
      removeItem: (slug, color, size) =>
        setItems((prev) =>
          prev.filter((i) => !sameLine(i, { slug, color, size }))
        ),
      updateQuantity: (slug, color, size, quantity) =>
        setItems((prev) =>
          quantity <= 0
            ? prev.filter((i) => !sameLine(i, { slug, color, size }))
            : prev.map((i) =>
                sameLine(i, { slug, color, size }) ? { ...i, quantity } : i
              )
        ),
      clearCart: () => setItems([]),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
