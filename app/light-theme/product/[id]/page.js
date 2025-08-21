export default function Product({ params }) {
  // params.id comes from the URL -> /product/1
  const { id } = params;

  // Example: later you can fetch your JSON or database here
  // For now, we’ll just display the product id
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Product Detail</h1>
      <p>Showing details for product ID: {id}</p>
    </div>
  );
}
