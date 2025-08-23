import Nav from "@/components/Nav";
import Checkout from "@/components/Checkout/Checkout";

// Example JSON for the order
const orderData = {
  products: [
    { name: "Ailya Chair", price: 168, quantity: 1 },
    { name: "Lumi Table", price: 199, quantity: 2 },
    { name: "Modern Sofa", price: 300, quantity: 3 },
  ],
  deliveryFee: 10.0,
  VATRate: 0,
};

// Calculate subtotal
orderData.subtotal = orderData.products.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);

// Calculate VAT
orderData.VAT = orderData.subtotal * orderData.VATRate;

// Calculate total
orderData.total = orderData.subtotal + orderData.VAT + orderData.deliveryFee;

export default function CheckoutPage() {
  return (
    <div className="flex justify-center bg-[#F5F5F5]">
      <div className="text-black bg-[#F5F5F5] min-h-screen max-w-md min-w-xs md:pt-2 pb-5">
        <Nav title="Checkout" link="/light-theme/cart" />
        <Checkout orderData={orderData} />
      </div>
    </div>
  );
}
