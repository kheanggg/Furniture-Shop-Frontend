'use client';

import { useEffect, useState } from "react";
import SeeMore from "@/components/SeeMore";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";

export default function Favorite() {

    // State to hold the favorite cards and loading state
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch favorite cards data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://tableprogear.s3.ap-southeast-1.amazonaws.com/tables.json");
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
        <div className="mx-5 pt-5">
            {/* Favorite */}
            <SeeMore title="Favorite" link="#" />

            {loading ? (
                <Spinner />
            ) : (
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
                            size="sm"
                            />
                        </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
