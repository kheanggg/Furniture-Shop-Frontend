'use client';

import Link from "next/link";
import SeeMore from "@/components/Home/SeeMore";
import Card from "@/components/Product/Card";
import Spinner from "@/components/Spinner";

export default function NewArrival({ products = [], loading = false }) {
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
                        {products.map((product, index) => (
                            <div key={index} className="flex-shrink-0">
                                <Link href={`/light-theme/product/${product.id}`}>
                                    <Card
                                        title={product.title}
                                        price={product.price}
                                        rating={product.rating}
                                        reviews={product.reviews}
                                        image={product.image}
                                        type="vertical"
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
