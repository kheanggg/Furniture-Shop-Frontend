import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "500"],
});


export default function Card({ title, price, rating, reviews, image, type = "vertical", isFavorite}) {
    // Horizontal card
    if (type === "horizontal") {
    // Horizontal card
    return (
        <div className="flex p-2 rounded-xl shadow-md items-center gap-4">
            <img
                src={image}
                alt={title}
                className="w-24 h-24 aspect-square object-cover rounded-xl"
            />
            <div className="flex w-full justify-between items-center">
                {/* Left: Title & Reviews */}
                <div>
                    <h3 className={`${playfairDisplay.className} text-xl text-black`}>
                        {title}
                    </h3>
                    {/* Rating and Reviews */}
                    <div className="mt-2 flex items-center space-x-2">
                        <Rating
                            name="text-feedback"
                            value={rating}
                            readOnly
                            precision={0.5}
                            max={5}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        <span className={`${plusJakartaSans.className} text-[#76777C] font-[400] text-sm`}>{reviews} Reviews</span>
                    </div>
                </div>
                {/* Price */}
                <span className={`${plusJakartaSans.className} text-[#76777C] font-[500] text-md`}>
                    ${price}
                </span>
            </div>
        </div>
    );

    }

    // Favorite card
    if (type ==="favorite") {

        return (
            <div className="p-2 rounded-xl shadow-md w-45">
                <img src={image} alt={title} className="w-45 h-45 aspect-square object-cover rounded-xl" />

                {/* Title and Price */}
                <div className="mt-2 flex items-center justify-between">
                    <h3 className={`${playfairDisplay.className} text-xl text-black`}>{title}</h3>
                    {isFavorite ? (
                        <FavoriteIcon className="text-[#E5613E]" fontSize="small" />
                    ) : (
                        <FavoriteIcon className="text-gray-400" fontSize="small" />
                    )}
                </div>

                <span className={`${plusJakartaSans.className} text-[#76777C] font-[500] text-sm`}>
                    ${price}
                </span>
            </div>
        )
    }

    // Vertical card lg
    if (type === "vertical") {

        // Vertical card lg (default)
        return (
            <div className="p-2 rounded-xl shadow-md w-60 my-1">
                <img src={image} alt={title} className="w-full h-60 object-cover rounded-xl" />

                {/* Badge */}
                <div className="mt-2">
                    <Chip
                        label="NEW"
                        size="small"
                        sx={{ 
                            backgroundColor: '#59B168', 
                            color: 'white', 
                            fontSize: '11px',
                            fontWeight: 300,
                            px: 0.3,
                        }}
                    />
                </div>

                {/* Title and Price */}
                <div className="mt-2 flex items-center justify-between">
                    <h3 className={`${playfairDisplay.className} text-xl text-black`}>{title}</h3>
                    <div className="flex flex-col items-end">
                        <span className={`${plusJakartaSans.className} text-[#76777C] font-[400] text-sm`}>
                            Price
                        </span>
                        <span className={`${plusJakartaSans.className} text-[#76777C] font-[500] text-md`}>
                            ${price}
                        </span>
                    </div>
                </div>

                {/* Rating and Reviews */}
                <div className="mt-2 flex items-center space-x-2">
                    <Rating
                        name="text-feedback"
                        value={rating}
                        readOnly
                        precision={0.5}
                        max={5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <span className={`${plusJakartaSans.className} text-[#76777C] font-[400] text-sm`}>{reviews} Reviews</span>
                </div>
            </div>
        );
    }

    // Vertical card sm
    if (type === "vertical small") {

        return (
            <div className="p-2 rounded-xl shadow-md w-45 my-1">
                <img src={image} alt={title} className="w-45 h-45 aspect-square object-cover rounded-xl" />

                {/* Title and Price */}
                <div className="mt-2 flex items-center justify-between">
                    <h3 className={`${playfairDisplay.className} text-xl text-black`}>{title}</h3>
                    <div className="flex flex-col items-end">
                        <span className={`${plusJakartaSans.className} text-[#76777C] font-[400] text-xs`}>
                            Price
                        </span>
                        <span className={`${plusJakartaSans.className} text-[#76777C] font-[500] text-sm`}>
                            ${price}
                        </span>
                    </div>
                </div>
            </div>
        )
    }

}