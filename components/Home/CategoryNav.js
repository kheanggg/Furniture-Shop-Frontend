'use client';

import { useState } from "react";
import Image from "next/image";
import ChairIcon from "../icons/chair.svg";
import SofaIcon from "../icons/sofa.svg";
import LampIcon from "../icons/lamp.svg";
import CabinetIcon from "../icons/cabinet.svg";

export default function CategoryNav({ dark = false }) {
  // Array of icons for the categories
  const icons = [SofaIcon, CabinetIcon, LampIcon, ChairIcon];

  // Create an array of items to display
  const items = Array.from({ length: 6 });

  // State to track selected index
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Background colors for light / dark
  const cardBg = dark ? "bg-[#2A2A2A]" : "bg-[#FEFEFE]";
  const shadow = dark ? "shadow-md shadow-black/40" : "shadow-md";

  return (
    <div className="w-full overflow-x-auto py-5">
      {/* Horizontal scrollable container for category items */}
      <div className="flex space-x-4 min-w-max scroll-smooth">
        {items.map((_, index) => {
          const Icon = icons[index % icons.length];
          const isSelected = index === selectedIndex;

          return (
            <div
              key={index}
              className={`w-20 h-20 ${cardBg} rounded-lg flex items-center justify-center flex-shrink-0 p-5
                ${isSelected ? shadow : "shadow-none"}`}
              onClick={() => setSelectedIndex(index)}
            >
              {/* Icon */}
              <Image src={Icon} alt={`Item ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
