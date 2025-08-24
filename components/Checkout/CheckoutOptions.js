"use client";

import { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "700"],
});

export default function CheckoutOptions({ onSelect, dark = false }) {
  const [selected, setSelected] = useState("Delivery");

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option); // send selected option back to parent
  };

  return (
    <div className="flex gap-2 mx-5 min-w-sm max-w-md">
      {["Delivery", "Pick Up"].map((option) => (
        <button
          key={option}
          onClick={() => handleSelect(option)}
          className={`${plusJakartaSans.className} py-2 rounded-lg w-full h-12 transition-colors ${
            selected === option
              ? dark
                ? "bg-[#3A3A3A] text-white"   // selected in dark mode
                : "bg-[#1F1F23] text-white"   // selected in light mode
              : dark
              ? "bg-[#212121] text-gray-300 hover:bg-[#212121] hover:text-white" // unselected dark
              : "bg-[#F5F5F5] text-black hover:bg-[#1F1F23] hover:text-white"    // unselected light
          }`}
        >
          {option}
        </button>

      ))}
    </div>
  );
}
