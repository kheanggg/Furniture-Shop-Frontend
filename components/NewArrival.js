'use client';

import { useEffect, useState } from "react";
import SeeMore from "@/components/SeeMore";
import Card from "@/components/Card";

export default function NewArrival() {

    // State to hold the fetched card data
    const [cards, setCards] = useState([]);

    // Fetch card data from the API
    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await fetch("https://tableprogear.s3.ap-southeast-1.amazonaws.com/tables.json");
            const data = await res.json();
            setCards(data);
        } catch (error) {
            console.error("Failed to fetch cards:", error);
        }
        };

        fetchData();
    }, []);

    return (
        <div className="mx-5">

            {/* New Arrival */}
            <SeeMore title="New Arrival" link="#" />

            {/* Horizontal scrollable container for cards */}
            <div className="w-full overflow-x-auto">
                <div className="flex space-x-4 min-w-max scroll-smooth">
                    {cards.map((card, index) => (
                        <div key={index} className="flex-shrink-0">
                            <Card
                                title={card.title}
                                price={card.price}
                                rating={card.rating}
                                reviews={card.reviews}
                                image={card.image}
                                variant={card.variant || "vertical"}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
