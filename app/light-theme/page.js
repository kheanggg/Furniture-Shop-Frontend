import Nav from "@/components/Nav";
import NewArrival from "@/components/Home/NewArrival";
import Collection from "@/components/Home/Collection";
import Favorite from "@/components/Home/Favorite";
import CategoryNav from "@/components/Home/CategoryNav";

export default function Home() {
  // JSON data
  const products = [
    {
      id: 1,
      title: "Ailya Chair",
      price: 168,
      rating: 5,
      reviews: 32,
      image: "/table2.png",
      isFavorite: true,
    },
    {
      id: 2,
      title: "Lumi Table",
      price: 249,
      rating: 4,
      reviews: 18,
      image: "/table.png",
      isFavorite: false,
    },
    {
      id: 3,
      title: "Modern Sofa",
      price: 499,
      rating: 5,
      reviews: 41,
      image: "/table2.png",
      isFavorite: true,
    },
  ];


  return (
    <div className="flex justify-center bg-[#F5F5F5]">
      <div className="text-black bg-[#F5F5F5] min-h-screen max-w-md min-w-xs md:pt-2 pb-5">
        <Nav title="Welcome" />
        <div className="mx-5">
          <CategoryNav />
        </div>
        <NewArrival products={products} loading={false} />
        <Collection products={products} loading={false} />
        <Favorite products={products} loading={false} />
      </div>
    </div>
  );
}
