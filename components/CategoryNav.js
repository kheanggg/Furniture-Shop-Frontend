'use client';

import { useState } from "react";
import Image from "next/image";
import ChairIcon from "./icons/chair.svg";
import SofaIcon from "./icons/sofa.svg";
import LampIcon from "./icons/lamp.svg";
import CabinetIcon from "./icons/cabinet.svg";

export default function CategoryNav() {

    // Array of icons for the categories
    const icons = [SofaIcon, CabinetIcon, LampIcon, ChairIcon];

    // Create an array of items to display
    const items = Array.from({ length: 6 });

    // State to track selected index
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="w-full overflow-x-auto py-5 mx-5">
            
            {/* Horizontal scrollable container for category items */}
            <div className="flex space-x-4 min-w-max scroll-smooth">

                {/* Map through items and display each icon */}
                {items.map((_, index) => {
                    const Icon = icons[index % icons.length];
                    const isSelected = index === selectedIndex;
                    
                    return (
                        <div
                            key={index}
                            className={`w-20 h-20 bg-[#FEFEFE] rounded-lg flex items-center justify-center flex-shrink-0 p-5
                                ${isSelected ? "shadow-md" : "shadow-none"}`}
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
