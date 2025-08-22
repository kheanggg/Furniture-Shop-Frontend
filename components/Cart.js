"use client";

import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import CartCard from "./CartCard";
import Spinner from "./Spinner";
import Total from "./Total";
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

export default function Cart({ products: initialProducts , loading}) {

  // Initialize state with initial products
  const [products, setProducts] = useState(initialProducts);

  // Calculate total products count
  const totalProducts = products.reduce((sum, product) => sum + product.quantity, 0);

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      // Remove item
      setProducts(products.filter((p) => p.id !== id));
    } else {
      // Update quantity
      setProducts(products.map((p) => (p.id === id ? { ...p, quantity: newQuantity } : p)));
    }
  };

  if (loading) {
    return <Spinner />; // show spinner while loading
  }

  return (
    <div className="relative min-w-sm max-w-md mx-5 mt-5">
      {/* Total products count */}
      <span className={`${plusJakartaSans.className} text-[#76777C] font-[400] text-sm`}>
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
              />
            </div>
          ))}

          {/* Dynamic total */}
          <Total products={products} />

          {/* Checkout button */}
          <div className="mx-5 mt-10">
            <CheckoutButton products={products} />
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 mt-5">Your cart is empty.</p>
      )}
    </div>
  );
}