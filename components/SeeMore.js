import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Playfair_Display } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
});

export default function SeeMore({ title, link }) {
  return (
    <div className="flex items-center justify-between pb-3">

        {/* Title */}
        <h3 className={`${playfairDisplay.className} text-2xl text-black`}>
            {title}
        </h3>

        {/* See More Link */}
        {link && (
            <Link href={link} className="text-sm text-gray-500 hover:text-black">
                <KeyboardBackspaceIcon className="transform scale-x-[-1]" />
            </Link>
        )}
    </div>
  );
}
