"use client";

import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import CartCard from "./CartCard";
import Spinner from "../Spinner";
import Total from "../Total";
import CheckoutButton from "./CheckoutButton";

import { useState } from "react";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "700"],
});

export default function Cart({ products: initialProducts, loading, dark = false }) {
  const [products, setProducts] = useState(initialProducts);

  // Calculate total products count
  const totalProducts = products.reduce((sum, product) => sum + product.quantity, 0);

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setProducts(products.filter((p) => p.id !== id));
    } else {
      setProducts(products.map((p) => (p.id === id ? { ...p, quantity: newQuantity } : p)));
    }
  };

  if (loading) {
    return <Spinner dark={dark} />; // show spinner while loading
  }

  // Dark mode classes
  const textPrimary = dark ? "text-white" : "text-black";
  const textSecondary = dark ? "text-gray-400" : "text-[#76777C]";
  const bg = dark ? "bg-[#212121]" : "bg-white";

  return (
    <div className="flex justify-center mt-5 mx-5">
      <div className={`w-full ${bg} p-5 rounded-xl`}>
        {/* Total products count */}
        <span className={`${plusJakartaSans.className} ${textSecondary} font-[400] text-sm`}>
          Total product ({totalProducts})
        </span>

        {totalProducts > 0 ? (
          <>
            {/* Render all cart items */}
            {products.map((product) => (
              <div key={product.id} className="my-5">
                <CartCard
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                  image={product.image}
                  color={product.color}
                  onQuantityChange={(newQty) => handleQuantityChange(product.id, newQty)}
                  dark={dark}
                />
              </div>
            ))}

            {/* Dynamic total */}
            <Total products={products} dark={dark} />

            {/* Checkout button */}
            <div className="mx-5 mt-10">
              <CheckoutButton products={products} dark={dark} />
            </div>
          </>
        ) : (
          <p className={`${textSecondary} text-center mt-5`}>Your cart is empty.</p>
        )}
      </div>

    </div>
  );
}
