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

export default function CartCard({ title, price, quantity, image, color, onQuantityChange }) {
  return (
    <div className="w-full bg-white shadow-lg rounded-2xl shadow-md p-2 flex gap-4">
      {/* Media */}
      <img src={image} alt="Product" className="w-28 h-28 aspect-square object-cover rounded-lg" />

      {/* Right side */}
      <div className="flex flex-col justify-between flex-1">
        {/* Title + More icon */}
        <div className="flex items-start justify-between">
          <h3 className={`${playfairDisplay.className} text-black text-xl`}>{title}</h3>
          <MoreVertIcon sx={{ fontSize: 22, color: "#BDBDBD", cursor: "pointer" }} />
        </div>

        {/* Color */}
        <span className={`${plusJakartaSans.className} text-[#76777C] font-[600] text-sm`}>
          {color}
        </span>

        <div className="flex flex-row justify-between flex-1 mt-2">
          {/* Price */}
          <div className="flex flex-col gap-2">
            <h3 className={`${plusJakartaSans.className} font-[500] text-[#76777C] text-sm`}>Price</h3>
            <span className={`${plusJakartaSans.className} font-[600] text-black text-sm`}>
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
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: 1,
                fontWeight: "bold",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                '&:hover': { boxShadow: "0 3px 8px rgba(0,0,0,0.15)" },
              }}
              onClick={() => onQuantityChange(quantity - 1)}
            >
              -
            </Button>

            <span className={`${plusJakartaSans.className} font-[600] text-black text-sm`}>
              {quantity}
            </span>

            <Button
              variant="contained"
              sx={{
                minWidth: 32,
                height: 32,
                padding: 0,
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: 1,
                fontWeight: "bold",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                '&:hover': { boxShadow: "0 3px 8px rgba(0,0,0,0.15)" },
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
