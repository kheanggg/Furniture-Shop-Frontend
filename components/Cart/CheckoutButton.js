"use client";

import { Plus_Jakarta_Sans } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "500"],
});

export default function CheckoutButton({ dark = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${plusJakartaSans.className} w-full py-3 rounded-xl font-[500] transition
        ${dark ? "bg-[#3A3A3A] text-white hover:bg-[#212121]" : "bg-black text-white hover:bg-gray-800"}`}
    >
      Proceed to checkout
    </button>
  );
}
