'use client';

import Link from "next/link";
import SeeMore from "@/components/SeeMore";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";

export default function Favorite({ cards = [], loading = false }) {
    return (
        <div className="mx-5 pt-5">
            {/* Favorite */}
            <SeeMore title="Favorite" link="/light-theme/favorite" />

            {loading ? (
                <Spinner />
            ) : (
                <div className="w-full overflow-x-auto">
                    <div className="flex space-x-4 min-w-max scroll-smooth">
                        {cards.map((card, index) => (
                            <div key={index} className="flex-shrink-0">
                                <Link href={`/light-theme/product/${card.id}`}>
                                    <Card
                                        title={card.title}
                                        price={card.price}
                                        rating={card.rating}
                                        reviews={card.reviews}
                                        image={card.image}
                                        variant={card.variant || "vertical"}
                                        type="vertical small"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
