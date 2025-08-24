import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Playfair_Display } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
});

export default function SeeMore({ title, link, dark = false }) {
  const textColor = dark ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-black";
  const titleColor = dark ? "text-white" : "text-black";

  return (
    <>
      {link && (
        <Link href={link} className={`text-sm ${textColor}`}>
          <div className="flex items-center justify-between pb-3">
            {/* Title */}
            <h3 className={`${playfairDisplay.className} text-2xl ${titleColor}`}>
              {title}
            </h3>

            {/* See More Icon */}
            <KeyboardBackspaceIcon
              className={`transform scale-x-[-1] ${dark ? "text-white" : "text-black"}`}
            />
          </div>
        </Link>
      )}
    </>
  );
}
