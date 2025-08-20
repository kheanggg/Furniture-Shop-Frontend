'use client';

import { useState } from "react";
import Nav from "@/components/Nav";
import ProductList from "@/components/ProductList";

export default function Collection() {
    // Example JSON data (replace with your own products)
    const sampleCards = [
        {
            id: 1,
            title: "Ailya Chair",
            price: 168,
            rating: 5,
            reviews: 32,
            image: "/table.png",
            isFavorite: true
        },
        {
            id: 2,
            title: "Lumi Table",
            price: 249,
            rating: 4,
            reviews: 18,
            image: "/table2.png",
            isFavorite: false
        },
        {
            id: 3,
            title: "Modern Sofa",
            price: 499,
            rating: 5,
            reviews: 41,
            image: "/table.png",
            isFavorite: false
        },
        {
            id: 4,
            title: "Ailya Chair",
            price: 168,
            rating: 5,
            reviews: 32,
            image: "/table.png",
            isFavorite: true
        },
        {
            id: 5,
            title: "Lumi Table",
            price: 249,
            rating: 4,
            reviews: 18,
            image: "/table2.png",
            isFavorite: false
        },
        {
            id: 6,
            title: "Modern Sofa",
            price: 499,
            rating: 5,
            reviews: 41,
            image: "/table.png",
            isFavorite: true
        },
        {
            id: 7,
            title: "Ailya Chair",
            price: 168,
            rating: 5,
            reviews: 32,
            image: "/table.png",
            isFavorite: false
        }
    ];

    const [cards] = useState(sampleCards);

    return (
        <div className="flex justify-center bg-[#F5F5F5]">
            <div className="text-black bg-[#F5F5F5] min-h-screen max-w-md min-w-xs md:pt-2 pb-5">
                <Nav title="Collection" link="/light-theme"/>
                <ProductList cards={cards} loading={false}/>
            </div>
        </div>
    );
}