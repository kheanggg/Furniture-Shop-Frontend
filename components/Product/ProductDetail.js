"use client";

import ProductMedia from "./ProductMedia";
import ProductDescription from "./ProductDescription";
import AddToCart from "../Cart/AddToCartButton";
import Nav from "../Nav";

export default function ProductDetail({ product, dark = false }) {
    return (
        <div className={`relative min-h-screen max-w-md min-w-xs ${dark ? "bg-[#212121] text-white" : "bg-white text-black"}`}>
            {/* Nav overlay on top of media */}
            <div className="absolute top-4 left-0 w-full z-10">
                <Nav title="" link={dark ? "/dark-theme" : "/light-theme"} dark={dark} />
            </div>

            {/* Media */}
            <ProductMedia product={product} />

            {/* Description */}
            <ProductDescription product={product} dark={dark} />

            {/* Add to Cart Button */}
            <div className="mx-5 mt-5">
                <AddToCart product={product} dark={dark} />
            </div>
        </div>
    );
}
