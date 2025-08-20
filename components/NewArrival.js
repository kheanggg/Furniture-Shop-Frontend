'use client';

import SeeMore from "@/components/SeeMore";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";

export default function NewArrival({ cards = [], loading = false }) {
    return (
        <div className="mx-5">
            {/* New Arrival */}
            <SeeMore title="New Arrival" link="/light-theme/new-arrival" />

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
                                    type="vertical"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
