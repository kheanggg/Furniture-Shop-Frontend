'use client';

import Link from "next/link";
import SeeMore from "./SeeMore";
import Card from "./Card";
import Spinner from "./Spinner"; // import the reusable spinner

export default function Collection({ cards = [], loading = false }) {
    return (
        <div className="mx-5 pt-5">
            {/* Collection */}
            <SeeMore title="Collection" link="/light-theme/collection" />

            {/* Show spinner while loading */}
            {loading ? (
                <Spinner />
            ) : (
                cards && cards.length > 0 && (
                    <Link href={`/light-theme//product/${cards[0].id}`}>
                        <Card
                            title={cards[0].title}
                            price={cards[0].price}
                            rating={cards[0].rating}
                            reviews={cards[0].reviews}
                            image={cards[0].image}
                            type="horizontal"
                        />
                    </Link>
                )
            )}
        </div>
    );
}
