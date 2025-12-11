"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-16 px-6 md:px-20 bg-orange-50"
    >
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-bold text-orange-600">Foodie</span> — 
          your go-to place for delicious meals made fresh with love.
        </p>

        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          Every dish is crafted with care using high-quality ingredients.
        </p>
      </motion.div>
    </motion.section>
  );
}
