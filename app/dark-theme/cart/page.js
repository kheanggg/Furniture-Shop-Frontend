import Nav from "@/components/Nav";
import Cart from "@/components/Cart/Cart";
import CheckoutButton from "@/components/Cart/CheckoutButton";

export default function CartPage() {

    // JSON data
  const products = [
    {
      id: 1,
      title: "Ailya Chair",
      price: 168,
      quantity: 1,
      image: "/table.png",
      color: "Cream",
    },
    {
      id: 2,
      title: "Lumi Table",
      price: 199,
      quantity: 3,
      image: "/table2.png",
      color: "Black",
    },
    {
      id: 3,
      title: "Modern Sofa",
      price: 300,
      quantity: 2,
      image: "/table.png",
      color: "Brown",
    },
  ];

  return (
    <div className="flex justify-center bg-[#2A2A2A]">
      <div className="text-black bg-[#2A2A2A] min-h-screen max-w-md min-w-xs w-full md:pt-2 pb-5">
        <Nav title="Your Cart" link="/dark-theme" dark/>
        <Cart products={products} dark/>
      </div>
    </div>
  );
}
