export default function ProductMedia({ product }) {
  if (!product) return null;

  return (
    <div className="flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-full aspect-square object-cover"
      />
    </div>
  );
}
