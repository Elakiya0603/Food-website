"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type FoodItem = {
  id?: string | number;
  name: string;
  price: string; // keep string for display (₹ or $). We'll also store numeric for calc.
  priceNum?: number;
  image?: string;
};

type CartItem = FoodItem & {
  qty: number;
};

type CartContextType = {
  cart: CartItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  addToCart: (item: FoodItem, qty?: number) => void;
  removeFromCart: (nameOrId: string | number) => void;
  updateQty: (nameOrId: string | number, qty: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  // load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("foodie_cart");
      if (raw) setCart(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem("foodie_cart", JSON.stringify(cart));
    } catch (e) {
      // ignore
    }
  }, [cart]);

  function normalizePrice(p?: string | number) {
    if (typeof p === "number") return p;
    if (!p) return 0;
    // Remove non-digits except decimal
    const s = String(p).replace(/[^\d.]/g, "");
    return parseFloat(s) || 0;
  }

  const addToCart = (item: FoodItem, qty = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (i) => (i.id !== undefined ? i.id === item.id : i.name === item.name)
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          qty: next[existingIndex].qty + qty,
        };
        return next;
      }
      const priceNum = normalizePrice(item.price || item.priceNum || 0);
      return [...prev, { ...item, qty, priceNum }];
    });
    setOpen(true); // open cart after adding
  };

  const removeFromCart = (nameOrId: string | number) => {
    setCart((prev) =>
      prev.filter((i) =>
        typeof i.id !== "undefined" ? i.id !== nameOrId : i.name !== nameOrId
      )
    );
  };

  const updateQty = (nameOrId: string | number, qty: number) => {
    if (qty <= 0) {
      removeFromCart(nameOrId);
      return;
    }
    setCart((prev) =>
      prev.map((i) =>
        (typeof i.id !== "undefined" ? i.id === nameOrId : i.name === nameOrId)
          ? { ...i, qty }
          : i
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const itemCount = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + (i.priceNum ?? normalizePrice(i.price)) * i.qty, 0);

  const value: CartContextType = {
    cart,
    open,
    setOpen,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    total,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
