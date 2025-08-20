'use client';

import { useEffect, useState } from "react";
import SeeMore from "./SeeMore";
import Card from "./Card";
import Spinner from "./Spinner"; // import the reusable spinner

export default function Collection() {

    // State to hold the collection cards and loading state
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch collection cards data
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
                setLoading(false); // stop loading after fetch
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mx-5 pt-5">
            {/* Collection */}
            <SeeMore title="Collection" link="#" />

            {/* Show spinner while loading */}
            {loading ? (
                <Spinner />
            ) : (
                cards && cards.length > 0 && (
                <Card
                    title={cards[0].title}
                    price={cards[0].price}
                    rating={cards[0].rating}
                    reviews={cards[0].reviews}
                    image={cards[0].image}
                    variant={"horizontal"}
                />
                )
            )}
        </div>
    );
}
