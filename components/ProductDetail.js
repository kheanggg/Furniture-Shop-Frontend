"use client";

import ProductMedia from "./ProductMedia";
import ProductDescription from "./ProductDescription";
import AddToCart from "./AddToCartButton";
import Nav from "./Nav";

export default function ProductDetail({ product }) {
    return (
        <div className="relative text-black bg-white min-h-screen max-w-md min-w-xs">
            {/* Nav overlay on top of media */}
            <div className="absolute top-4 left-0 w-full z-10">
                <Nav title="" link="/light-theme" />
            </div>

            {/* Media */}
            <ProductMedia product={product} />

            {/* Description */}
            <ProductDescription product={product} />

            {/* Add to Cart Button */}
            <div className="mx-5 mt-5">
                <AddToCart product={product} />
            </div>
        </div>
    );
}