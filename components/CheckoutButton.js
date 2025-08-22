"use client";

import { Plus_Jakarta_Sans } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "500"],
});

export default function CheckoutButton({ product }) {
  const handleClick = () => {
    console.log(`Added ${product?.title} to cart`);
    // You can add further logic here, e.g., navigate to checkout page
  };

  return (
    <button
      className={`${plusJakartaSans.className} w-full bg-black text-white py-3 rounded-xl font-[500] hover:bg-gray-800 transition`}
      onClick={handleClick}
    >
      Proceed to checkout
    </button>
  );
}