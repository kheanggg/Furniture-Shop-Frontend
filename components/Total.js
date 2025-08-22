import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

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

export default function Total({ products }) {
  // Calculate total price dynamically
  const totalPrice = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="min-w-sm max-w-md">
      {/* Line */}
      <div className="h-[1px] w-full bg-gray-300 rounded-full my-4"></div>

      {/* Total */}
      <div className="flex justify-between items-center text-lg font-semibold">
        <span className={`${playfairDisplay.className} text-xl`}>Total</span>
        <span className={`${plusJakartaSans.className} text-xl text-[#59B168]`}>
          ${totalPrice}
        </span>
      </div>
    </div>
  );
}
