import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "700"],
});

export default function OrderSummary({ orderData }) {
  return (
    <div className="p-5 bg-white rounded-lg shadow-lg">
      {/* Title + More icon */}
      <div className="flex items-center mb-4">
        <MoreVertIcon
          sx={{ fontSize: 22, color: "#BDBDBD", cursor: "pointer" }}
        />
        <h2 className={`${playfairDisplay.className} text-xl font-bold ml-2`}>
          Order Summary
        </h2>
      </div>

      {/* Product List */}
      <div className="space-y-3">
        {orderData.products.map((product, index) => (
          <div
            key={index}
            className={`${plusJakartaSans.className} text-[#76777C] flex justify-between`}
          >
            <h3>
              {product.name} x {product.quantity}
            </h3>
            <p>${(product.price * product.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Line */}
      <div className="h-[1px] w-full bg-gray-300 rounded-full my-4"></div>

      {/* Summary Details */}
      <div className="space-y-3">
        <div
          className={`${plusJakartaSans.className} text-[#76777C] flex justify-between`}
        >
          <h3>Subtotal</h3>
          <p>${orderData.subtotal.toFixed(2)}</p>
        </div>
        <div
          className={`${plusJakartaSans.className} text-[#76777C] flex justify-between`}
        >
          <h3>Delivery Fee</h3>
          <p>${orderData.deliveryFee.toFixed(2)}</p>
        </div>
        <div
          className={`${plusJakartaSans.className} text-[#76777C] flex justify-between`}
        >
          <h3>VAT</h3>
          <p>${orderData.VAT.toFixed(2)}</p>
        </div>
        <div
          className={`${plusJakartaSans.className} text-[#76777C] flex justify-between font-bold`}
        >
          <h3>Total (incl. VAT)</h3>
          <p>${orderData.total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}