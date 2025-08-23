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

export default function CustomerInformation({ includeDelivery }) {
    return (
        <div className="p-5 bg-white rounded-lg shadow-lg">
            {/* Title + More icon */}
            <div className="flex items-center">
                <MoreVertIcon sx={{ fontSize: 22, color: "#BDBDBD", cursor: "pointer"}}/>
                <h2  className={`${playfairDisplay.className} text-xl font-bold ml-2`}>Delivery Address</h2>
            </div>
            {/* Add form or address fields here */}


            {/* Delivery Address */}
            {includeDelivery && (
                <div className="w=full bg-[#D8E2DA] h-[150px] rounded-xl mt-2"></div>
            )}


            {/* Line */}
            <div className="h-[1px] w-full bg-gray-300 rounded-full my-4"></div>

            <p className={`${plusJakartaSans.className} text-sm text-[#76777C]`}>Contact Name <span className="text-red-500">*</span></p>
            <input
                type="text"
                className="w-full p-2 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F1F23]"/>

            <p className={`${plusJakartaSans.className} text-sm text-[#76777C]`}>Phone Number <span className="text-red-500">*</span></p>
            <input
                type="tel"
                className="w-full p-2 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F1F23]"/>

            <p className={`${plusJakartaSans.className} text-sm text-[#76777C]`}>Note</p>
            <textarea
                rows="3"
                className="w-full p-2 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1F1F23]"
            ></textarea>

        </div>
    );
}