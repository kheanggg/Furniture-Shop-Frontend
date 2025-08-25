import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchIcon from '@mui/icons-material/Search';
import { Playfair_Display } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
});

export default function Nav({ title, link = "", dark = false, search = false }) {
  // choose colors based on dark mode
  const textColor = dark ? "text-white" : "text-black";

  return (
    <div className="py-3 mx-5">
      <nav className="relative flex items-center justify-center">
        {/* Back Button */}
        <Link href={link} className="absolute left-0">
          <KeyboardBackspaceIcon
            sx={{ fontSize: 30 }}
            className={`${textColor} cursor-pointer`}
          />
        </Link>

        {/* Title */}
        <h3 className={`${playfairDisplay.className} text-2xl ${textColor}`}>
          {title}
        </h3>

        {search && (
          <SearchIcon
            sx={{ fontSize: 30 }}
            className={`${textColor} cursor-pointer absolute right-0`}
          />
        )}
      </nav>
    </div>
  );
}
