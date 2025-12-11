"use client";
import { motion } from "framer-motion";
import { useCart } from "./cartContext";
import { X } from "lucide-react";

export default function CartDrawer() {
  const {
    cart,
    removeFromCart,
    updateQty,
    total,
    open,
    setOpen,
    clearCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* Drawer */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed right-0 top-0 h-full w-[360px] bg-white/80 backdrop-blur-xl shadow-2xl z-50 flex flex-col rounded-l-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6 text-gray-700 hover:text-black hover:text-orange-600 transition cursor-pointer" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-600 text-center mt-10">Your cart is empty 🛒</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-xl shadow-md p-3 flex gap-4 border border-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-orange-600 font-bold">₹{item.price}</p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.name, item?.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300"
                      >
                        -
                      </button>

                      <span className="font-medium">{item?.quantity}</span>

                      <button
                        onClick={() => updateQty(item?.name, item?.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-md hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t p-5 bg-white/60 backdrop-blur-lg rounded-l-2xl">
            <div className="flex justify-between text-lg font-semibold mb-3">
              <span>Total</span>
              <span className="text-orange-600">₹{total}</span>
            </div>

            <button
              onClick={clearCart}
              className="w-full bg-red-500 text-white py-2 rounded-xl mb-2 hover:bg-red-600"
            >
              Clear Cart
            </button>

            <button className="w-full bg-orange-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-orange-700 shadow-md">
              Checkout
            </button>
          </div>
        )}
      </motion.aside>
    </>
  );
}
