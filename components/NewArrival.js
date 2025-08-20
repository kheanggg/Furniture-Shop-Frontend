'use client';

import { useEffect, useState } from "react";
import SeeMore from "@/components/SeeMore";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";

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
        <div className="mx-5">
            {/* New Arrival */}
            <SeeMore title="New Arrival" link="#" />

            {/* Show spinner while loading */}
            {loading ? (
                <Spinner />
            ) : (
                <div className="w-full overflow-x-auto">
                    {/* Horizontal scrollable container for cards */}
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
            )}
        </div>
    );
}
