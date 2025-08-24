'use client';

import Link from "next/link";
import SeeMore from "@/components/Home/SeeMore";
import Card from "@/components/Product/Card";
import Spinner from "@/components/Spinner";

export default function Favorite({ products = [], loading = false, dark = false }) {
    return (
        <div className="mx-5 pt-5">
            {/* Favorite */}
            <SeeMore 
                title="Favorite" 
                link={dark ? "/dark-theme/favorite" : "/light-theme/favorite"} 
                dark={dark}
            />

            {loading ? (
                <Spinner dark={dark} />
            ) : (
                <div className="w-full overflow-x-auto">
                    <div className="flex space-x-4 min-w-max scroll-smooth">
                        {products.map((product, index) => (
                            <div key={index} className="flex-shrink-0">
                                <Link href={`/${dark ? "dark-theme" : "light-theme"}/product/${product.id}`}>
                                    <Card
                                        title={product.title}
                                        price={product.price}
                                        rating={product.rating}
                                        reviews={product.reviews}
                                        image={product.image}
                                        variant={product.variant || "vertical"}
                                        type="vertical small"
                                        dark={dark}
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
