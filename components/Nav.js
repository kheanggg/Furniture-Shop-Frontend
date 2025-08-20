import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Playfair_Display } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
});

export default function Nav({title, link=""}) {
  return (
    <div className="py-3 mx-5">
      <nav className="relative flex items-center justify-center">

        {/* Back Button */}
        <Link href={link} className="absolute left-0">
          <KeyboardBackspaceIcon sx={{ fontSize: 30 }} className="text-black cursor-pointer"/>
        </Link>

        {/* Welcome Text */}
        <h3 className={`${playfairDisplay.className} text-2xl text-black`}>
          {title}
        </h3>
      </nav>
    </div>
  );
}