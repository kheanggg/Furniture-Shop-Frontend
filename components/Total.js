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

export default function Total({ products, dark = false }) {
  // Calculate total price dynamically
  const totalPrice = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const lineColor = dark ? "bg-[#212121]" : "bg-gray-300";
  const textPrimary = dark ? "text-white" : "text-black";
  const textHighlight = dark ? "text-[#59B168]" : "text-[#59B168]";

  return (
    <div className="w-full">
      {/* Line */}
      <div className={`h-[1px] w-full ${lineColor} rounded-full my-4`}></div>

      {/* Total */}
      <div className="flex justify-between items-center text-lg font-semibold">
        <span className={`${playfairDisplay.className} text-xl ${textPrimary}`}>Total</span>
        <span className={`${plusJakartaSans.className} text-xl ${textHighlight}`}>
          ${totalPrice}
        </span>
      </div>
    </div>
  );
}
