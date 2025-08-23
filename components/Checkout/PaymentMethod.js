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

export default function PaymentMethod() {
  return (
    <div className="p-5 bg-white rounded-lg shadow-lg">
      {/* Title + More icon */}
      <div className="flex items-center mb-4">
        <MoreVertIcon sx={{ fontSize: 22, color: "#BDBDBD", cursor: "pointer" }} />
        <h2 className={`${playfairDisplay.className} text-xl font-bold ml-2`}>
          Payment Method
        </h2>
      </div>

      {/* QR + Text */}
      <div className="flex items-center">
        {/* QR Image */}
        <img
          src="/QR_code.png" // replace with your QR image path
          alt="QR Code"
          className="w-40 h-40 object-contain"
        />

        {/* Text on the right */}
        <div className="ml-4">
          <p className={`${plusJakartaSans.className} text-gray-600`}>
            Open your banking app and scan the QR code to complete your payment.
          </p>
        </div>
      </div>
    </div>
  );
}
