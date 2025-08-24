"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "500"],
});

export default function CheckoutButton() {
  return (
    <Link
      href="/light-theme/checkout"
      className={`${plusJakartaSans.className} block w-full bg-black text-white py-3 rounded-xl font-[500] hover:bg-gray-800 transition text-center`}
    >
      Proceed to checkout
    </Link>
  );
}
