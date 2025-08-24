'use client';

import Link from "next/link";
import SeeMore from "./SeeMore";
import Card from "../Product/Card";
import Spinner from "../Spinner"; // import the reusable spinner

export default function Collection({ products = [], loading = false }) {
    return (
        <div className="mx-5 pt-5">
            {/* Collection */}
            <SeeMore title="Collection" link="/light-theme/collection" />

            {/* Show spinner while loading */}
            {loading ? (
                <Spinner />
            ) : (
                products && products.length > 0 && (
                    <Link href={`/light-theme//product/${products[0].id}`}>
                        <Card
                            title={products[0].title}
                            price={products[0].price}
                            rating={products[0].rating}
                            reviews={products[0].reviews}
                            image={products[0].image}
                            type="horizontal"
                        />
                    </Link>
                )
            )}
        </div>
    );
}
