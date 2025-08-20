'use client';

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import ProductList from "@/components/ProductList";

export default function NewArrival() {

    // State to hold the new arrival cards and loading state
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch new arrival cards data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                "https://tableprogear.s3.ap-southeast-1.amazonaws.com/tables.json"
                );
                const data = await res.json();
                setCards(data);
            } catch (error) {
                console.error("Failed to fetch cards:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <div className="flex justify-center bg-[#F5F5F5]">
            <div className="text-black bg-[#F5F5F5] min-h-screen max-w-md min-w-xs md:pt-2 pb-5">
                <Nav title="New Arrival" link="/light-theme"/>

            <ProductList cards={cards} loading={loading} />
            </div>
        </div>
    );
}