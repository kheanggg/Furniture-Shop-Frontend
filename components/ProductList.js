import Link from "next/link";
import Card from "./Card";
import Spinner from "./Spinner";

export default function ProductList({ cards, loading, type }) {
  if (loading) {
    return <Spinner />; // show spinner while loading
  }

  if (!cards || cards.length === 0) {
    return <p className="text-center text-gray-500">No products available.</p>;
  }

  return (
    <div className="max-w-md min-w-xs grid grid-cols-2 gap-5 mx-5">
      {cards.map((card, index) => (
        <Link key={index} href={`/light-theme/product/${card.id}`}>
          <Card
            title={card.title}
            price={card.price}
            rating={card.rating}
            reviews={card.reviews}
            image={card.image}
            type={type || "favorite"} // keep type flexible
            isFavorite={card.isFavorite}
          />
        </Link>
      ))}
    </div>
  );
}
