import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Playfair_Display } from "next/font/google";
import CategoryNav from "./CategoryNav";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600","700"],
});

export default function HomeNav() {
  return (
    <div className="py-3 mx-5">
      <nav className="relative flex items-center justify-center">

        {/* Back Button */}
        <Link href="#" className="absolute left-0">
          <KeyboardBackspaceIcon sx={{ fontSize: 30 }} className="text-black cursor-pointer"/>
        </Link>

        {/* Welcome Text */}
        <h3 className={`${playfairDisplay.className} text-2xl font-[600] text-black`}>
          Welcome
        </h3>
      </nav>
      
      {/* Category Navigation */}
      <CategoryNav/>
    </div>
  );
}