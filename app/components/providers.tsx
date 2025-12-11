"use client";
import { ReactNode } from "react";
import { CartProvider } from "./cartContext";

export default function Providers({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
