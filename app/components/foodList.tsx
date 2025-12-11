"use client";
import { useCart } from "./cartContext";

const foods = [
  { name: "Cheese Burger", price: 8.99, image: "/burger.jpg" },
  { name: "Pepperoni Pizza", price: 12.5, image: "/pizza.jpg" },
  { name: "Pasta Alfredo", price: 10.2, image: "/pasta.jpg" },
];

export default function FoodList() {
  const { addToCart } = useCart();

  return (
    <section id="menu" className="px-10 py-16">
      <h2 className="text-3xl font-bold mb-6">Popular Foods</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {foods.map((food) => (
          <div
            key={food.name}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img src={food.image} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{food.name}</h3>
              <p className="text-orange-600 font-bold">₹{food.price}</p>
              <button
                onClick={() => addToCart({ ...food, quantity: 1 })}
                className="mt-3 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
