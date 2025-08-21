import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Chip from '@mui/material/Chip';

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

export default function ProductDescription({ product }) {
  if (!product) return null; // safety check

  return (
    <div className="bg-white rounded-t-2xl -mt-4 p-5 relative z-20 flex flex-col">

      {/* Line */}
      <div className="h-1 w-16 bg-gray-300 rounded-full my-2 mx-auto"></div>

      {/* Badge */}
      <div className="mt-2 mb-2">
        <Chip
          label="NEW"
          size="small"
          sx={{ 
            backgroundColor: '#59B168', 
            color: 'white', 
            fontSize: '12px',
            fontWeight: 300,
            px: 0.5,
          }}
        />
      </div>

      {/* Product Name & Review */}
      <div className="flex justify-between items-start items-stretch">
        <div>
          {/* Product Name */}
          <h1 className={`${playfairDisplay.className} text-4xl font-bold mb-2`}>
            {product.title}
          </h1>

          {/* Review */}
          <div className="flex items-center space-x-2">
            <Rating
              name="text-feedback"
              value={product.rating}
              readOnly
              precision={0.5}
              max={5}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <span className={`${plusJakartaSans.className} text-[#76777C] font-[400] text-sm`}>
              {product.reviews} Reviews
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="text-right flex flex-col justify-end items-end">
          <span className={`${plusJakartaSans.className} text-[#76777C] font-[400] text-lg`}>
            Price
          </span>
          <span className={`${plusJakartaSans.className} text-[#76777C] font-[700] text-xl`}>
            ${product.price}
          </span>
        </div>
      </div>

      {/* Line */}
      <div className="h-[1px] w-full bg-gray-300 rounded-full my-4"></div>

      {/* Description */}
      <div>
        <h3 className={`${playfairDisplay.className} text-2xl font-bold mb-2`}>
          Description
        </h3>
        <p className={`${plusJakartaSans.className} text-[#76777C] font-[400] text-sm`}>
          {product.description}
        </p>
      </div>
    </div>
  );
}
