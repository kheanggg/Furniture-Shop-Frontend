import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Button } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "600", "700"],
});

export default function CartCard({ title, price, quantity, image, color, onQuantityChange, dark = false }) {
  const bg = dark ? "bg-[#3A3A3A]" : "bg-white";
  const textPrimary = dark ? "text-white" : "text-black";
  const textSecondary = dark ? "text-gray-400" : "text-[#76777C]";
  const iconColor = dark ? "#BDBDBD" : "#BDBDBD";
  const buttonBg = dark ? "#3A3A3A" : "#fff";
  const buttonColor = dark ? "#fff" : "#000";

  return (
    <div className={`w-full ${bg} shadow-lg rounded-2xl p-2 flex gap-4`}>
      {/* Media */}
      <img src={image} alt="Product" className="w-28 h-28 aspect-square object-cover rounded-lg" />

      {/* Right side */}
      <div className="flex flex-col justify-between flex-1">
        {/* Title + More icon */}
        <div className="flex items-start justify-between">
          <h3 className={`${playfairDisplay.className} ${textPrimary} text-xl`}>{title}</h3>
          <MoreVertIcon sx={{ fontSize: 22, color: iconColor, cursor: "pointer" }} />
        </div>

        {/* Color */}
        <span className={`${plusJakartaSans.className} ${textSecondary} font-[600] text-sm`}>
          {color}
        </span>

        <div className="flex flex-row justify-between flex-1 mt-2">
          {/* Price */}
          <div className="flex flex-col gap-2">
            <h3 className={`${plusJakartaSans.className} font-[500] ${textSecondary} text-sm`}>Price</h3>
            <span className={`${plusJakartaSans.className} font-[600] ${textPrimary} text-sm`}>
              ${price * quantity}
            </span>
          </div>

          {/* Quantity */}
          <div className="flex justify-end items-center gap-2">
            <Button
              variant="contained"
              sx={{
                minWidth: 32,
                height: 32,
                padding: 0,
                backgroundColor: buttonBg,
                color: buttonColor,
                borderRadius: 1,
                fontWeight: "bold",
                boxShadow: dark ? "0 1px 4px rgba(0,0,0,0.5)" : "0 2px 6px rgba(0,0,0,0.1)",
                '&:hover': { boxShadow: dark ? "0 2px 6px rgba(0,0,0,0.7)" : "0 3px 8px rgba(0,0,0,0.15)" },
              }}
              onClick={() => onQuantityChange(quantity - 1)}
            >
              -
            </Button>

            <span className={`${plusJakartaSans.className} font-[600] ${textPrimary} text-sm`}>
              {quantity}
            </span>

            <Button
              variant="contained"
              sx={{
                minWidth: 32,
                height: 32,
                padding: 0,
                backgroundColor: buttonBg,
                color: buttonColor,
                borderRadius: 1,
                fontWeight: "bold",
                boxShadow: dark ? "0 1px 4px rgba(0,0,0,0.5)" : "0 2px 6px rgba(0,0,0,0.1)",
                '&:hover': { boxShadow: dark ? "0 2px 6px rgba(0,0,0,0.7)" : "0 3px 8px rgba(0,0,0,0.15)" },
              }}
              onClick={() => onQuantityChange(quantity + 1)}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
