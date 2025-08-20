import Card from "./Card";
import Spinner from "./Spinner";

export default function ProductList({ cards, loading }) {
  if (loading) {
    return <Spinner />; // show spinner while loading
  }

  if (!cards || cards.length === 0) {
    return <p className="text-center text-gray-500">No products available.</p>;
  }

  return (
    <div className="mx-5 grid grid-cols-2 gap-5">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          price={card.price}
          rating={card.rating}
          reviews={card.reviews}
          image={card.image}
          variant={card.variant || "vertical"}
          size="sm"
        />
      ))}
    </div>
  );
}
