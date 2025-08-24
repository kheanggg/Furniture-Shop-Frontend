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

export default function CustomerInformation({ includeDelivery, dark = false }) {
  return (
    <div
      className={`p-5 rounded-lg shadow-lg ${
        dark ? "bg-[#212121] text-white" : "bg-white text-black"
      }`}
    >
      {/* Title + More icon */}
      <div className="flex items-center">
        <MoreVertIcon
          sx={{
            fontSize: 22,
            color: dark ? "#BDBDBD" : "#BDBDBD",
            cursor: "pointer",
          }}
        />
        <h2 className={`${playfairDisplay.className} text-xl font-bold ml-2`}>
          Delivery Address
        </h2>
      </div>

      {/* Delivery Address */}
      {includeDelivery && (
        <div
          className={`w-full h-[150px] rounded-xl mt-2 ${
            dark ? "bg-[#3A3A3A]" : "bg-[#D8E2DA]"
          }`}
        ></div>
      )}

      {/* Line */}
      <div
        className={`h-[1px] w-full rounded-full my-4 ${
          dark ? "bg-gray-600" : "bg-gray-300"
        }`}
      ></div>

      <p className={`${plusJakartaSans.className} text-sm ${dark ? "text-gray-300" : "text-[#76777C]"}`}>
        Contact Name <span className="text-red-500">*</span>
      </p>
      <input
        type="text"
        className={`w-full p-2 mb-3 rounded-lg border focus:outline-none focus:ring-2 ${
          dark
            ? "bg-[#212121] border-gray-600 text-white focus:ring-[#59B168]"
            : "border-gray-300 focus:ring-[#1F1F23]"
        }`}
      />

      <p className={`${plusJakartaSans.className} text-sm ${dark ? "text-gray-300" : "text-[#76777C]"}`}>
        Phone Number <span className="text-red-500">*</span>
      </p>
      <input
        type="tel"
        className={`w-full p-2 mb-3 rounded-lg border focus:outline-none focus:ring-2 ${
          dark
            ? "bg-[#212121] border-gray-600 text-white focus:ring-[#59B168]"
            : "border-gray-300 focus:ring-[#1F1F23]"
        }`}
      />

      <p className={`${plusJakartaSans.className} text-sm ${dark ? "text-gray-300" : "text-[#76777C]"}`}>
        Note
      </p>
      <textarea
        rows="3"
        className={`w-full p-2 mb-3 rounded-lg border focus:outline-none focus:ring-2 ${
          dark
            ? "bg-[#212121] border-gray-600 text-white focus:ring-[#59B168]"
            : "border-gray-300 focus:ring-[#1F1F23]"
        }`}
      ></textarea>
    </div>
  );
}
