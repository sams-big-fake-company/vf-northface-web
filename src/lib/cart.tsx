"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
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

const STORAGE_KEY = "tnf-demo-cart";
const EMPTY: CartItem[] = [];

let cache: CartItem[] | null = null;
const listeners = new Set<() => void>();

function readStorage(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : EMPTY;
  } catch {
    return EMPTY;
  }
}

function getSnapshot(): CartItem[] {
  if (cache === null) cache = readStorage();
  return cache;
}

function getServerSnapshot(): CartItem[] {
  return EMPTY;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function setItems(next: CartItem[]) {
  cache = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // storage unavailable; keep in-memory cart
  }
  listeners.forEach((l) => l());
}

function sameLine(a: CartItem, b: Omit<CartItem, "quantity">): boolean {
  return a.slug === b.slug && a.color === b.color && a.size === b.size;
}

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

export function CartProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

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
      addItem: (item, quantity = 1) => {
        const existing = items.find((i) => sameLine(i, item));
        setItems(
          existing
            ? items.map((i) =>
                sameLine(i, item)
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              )
            : [...items, { ...item, quantity }]
        );
      },
      removeItem: (slug, color, size) =>
        setItems(items.filter((i) => !sameLine(i, { slug, color, size }))),
      updateQuantity: (slug, color, size, quantity) =>
        setItems(
          quantity <= 0
            ? items.filter((i) => !sameLine(i, { slug, color, size }))
            : items.map((i) =>
                sameLine(i, { slug, color, size }) ? { ...i, quantity } : i
              )
        ),
      clearCart: () => setItems(EMPTY),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
