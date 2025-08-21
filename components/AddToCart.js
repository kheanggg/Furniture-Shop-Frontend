"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";


export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "500"],
});

export default function AddToCart({ product }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log(`Added ${product?.title} to cart`);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <>
      <button
        className={`${plusJakartaSans.className} w-full bg-black text-white py-3 rounded-xl font-[500] hover:bg-gray-800 transition`}
        onClick={handleClick}
      >
        Add to Cart
      </button>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // 👈 moved to top
      >
        <MuiAlert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {product?.title || "Product"} added to cart!
        </MuiAlert>
      </Snackbar>
    </>
  );
}
