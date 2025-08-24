import ProductDetail from "@/components/Product/ProductDetail";

export default function Product({ params }) {
  const { id } = params;

  const products = [
    {
      id: 1,
      title: "Ailya Chair",
      price: 168,
      rating: 5,
      reviews: 32,
      image: "/table2.png",
      description: "High-quality engineered wood, manufactured to stringent BIS norms.",
      isFavorite: true,
    },
    {
      id: 2,
      title: "Lumi Table",
      price: 249,
      rating: 4,
      reviews: 18,
      image: "/table.png",
      description: "A beautiful and modern table perfect for any room",
      isFavorite: false,
    },
    {
      id: 3,
      title: "Modern Sofa",
      price: 499,
      rating: 5,
      reviews: 41,
      image: "/table2.png",
      description: "Comfortable and stylish sofa for your living space",
      isFavorite: true,
    },
  ];

  // Find the product by id
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center text-gray-500">Product not found</p>;
  }

  return (
    <div className="flex justify-center bg-[#212121]">
      <div className="text-black min-h-screen max-w-md min-w-xs pb-5">
        <ProductDetail product={product} dark/>
      </div>
    </div>
  );
}