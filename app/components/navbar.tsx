"use client";
import { useState } from "react";
import { useCart } from "./cartContext";
import CartDrawer from "./cartDrawer";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount, setOpen } = useCart();

  return (
    <>
      <nav className="w-full bg-white shadow-sm py-4 px-6 md:px-8 flex items-center justify-between sticky top-0 z-40">
        <h1 className="text-2xl font-bold text-orange-600">Foodie</h1>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-orange-600 cursor-pointer">Home</a></li>
          <li><a href="#menu" className="hover:text-orange-600 cursor-pointer">Menu</a></li>
          <li><a href="#about" className="hover:text-orange-600 cursor-pointer">About</a></li>
          <li><a href="#contact" className="hover:text-orange-600 cursor-pointer">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            aria-label="Open cart"
            onClick={() => setOpen(true)}
              className="relative cursor-pointer hover:scale-110 transition"

          >
            <svg className="w-6 h-6 text-gray-700 hover:text-orange-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5h13" />
            </svg>

            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                {itemCount}
              </span>
            )}
          </button>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-30 flex flex-col items-center gap-4 py-4 cursor-pointer">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      <CartDrawer />
    </>
  );
}
