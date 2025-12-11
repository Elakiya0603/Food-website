"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20 px-6 md:px-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-orange-600"
      >
        Welcome to Foodie
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-gray-700 text-lg mt-4"
      >
        Delicious food delivered to your doorstep.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 cursor-pointer"
      >
        Order Now
      </motion.button>
    </section>
  );
}
