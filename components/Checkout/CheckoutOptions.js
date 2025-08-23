"use client";

import { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "700"],
});

export default function CheckoutOptions({ onSelect }) {
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
          className={`${plusJakartaSans.className} py-2 rounded-lg w-full h-12 text-white transition-colors ${
            selected === option
              ? "bg-[#1F1F23]"
              : "bg-[#1F1F2324] hover:bg-[#1F1F23] hover:text-white"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
