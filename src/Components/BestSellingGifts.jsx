import React from "react";
import { motion } from "framer-motion";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useCart } from "../context/CartContext";

const BestSellingGifts = () => {
  const { addToCart } = useCart();

  // Product data array with unique IDs
  const bestSellingGifts = [
    {
      id: 1,
      name: "Handcrafted Wooden Bloom Keepsake",
      price: 745,
      rating: 4.5,
      reviews: 1,
      features: ["Natural Wood Finish", "Eco-Friendly Materials"],
      image: "/IMG-20250427-WA0035.jpg",
    },
    {
      id: 2,
      name: "Artisanal Wooden Mother's Day Memory",
      price: 1225,
      rating: 4.3,
      features: ["Personalized Engraving", "Hand-carve Details"],
      image: "/IMG-20250427-WA0033.jpg",
    },
    {
      id: 3,
      name: "Carved Wooden Floral Wall Art",
      price: 895,
      rating: 4.5,
      reviews: 30,
      features: ["Sustainable Teak Wood", "Ready to Hang Any Where"],
      image: "/IMG-20250427-WA0044.jpg",
    },
    {
      id: 4,
      name: "Personalized Wooden Birthday Treasure Chest",
      price: 1225,
      originalPrice: 1425,
      discount: "14% OFF",
      rating: 4.5,
      features: ["Custom Monogram", "Hand-rubbed Finish"],
      image: "/IMG-20250427-WA0048.jpg",
    },
    {
      id: 5,
      name: "Rustic Wooden Photo Display Stand",
      price: 1225,
      originalPrice: 1425,
      discount: "14% OFF",
      features: ["Vintage Distressed Look", "Multi-photo Capacity"],
      image: "/IMG-20250427-WA0051.jpg",
    },
    {
      id: 6,
      name: "Hand-turned Wooden Jewelry Organizer",
      price: 1225,
      originalPrice: 1425,
      discount: "14% OFF",
      features: ["Compartmentalized Design", "Natural Wood Grains"],
      image: "/IMG-20250427-WA0051.jpg",
    },
    {
      id: 7,
      name: "Artisan Wooden Seasonal Decoration Set",
      price: 1225,
      originalPrice: 1425,
      discount: "14% OFF",
      features: ["4-Piece Collection", "Hand-painted Details"],
      image: "/IMG-20250427-WA0051.jpg",
    }, 
    {
      id: 8,
      name: "Custom Wooden Family Tree Wall Hanging",
      price: 1225,
      originalPrice: 1425,
      discount: "14% OFF",
      features: ["Branch Design", "Custom Name Plaques"],
      image: "/IMG-20250427-WA0051.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-2 sm:px-6 py-4 md:py-8">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3 md:mb-4">
      Best Selling Gifts
    </h1>
    <p className="text-base md:text-lg text-gray-600 text-center mb-6 md:mb-8">
      Packed with love
    </p>
  </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
    {bestSellingGifts.map((gift) => (
      <motion.div
        key={gift.id}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        whileHover={{ y: -5 }}
      >
        <div className="relative">
          <div className="relative aspect-square bg-gray-100">
            <img
              src={gift.image}
              alt={gift.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder-image.jpg";
              }}
            />
            {gift.discount && (
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs md:px-3 md:py-1 md:text-sm rounded-full">
                {gift.discount}
              </div>
            )}
          </div>
        </div>

        <div className="p-4 md:p-5">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
            {gift.name}
          </h3>

          <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-gray-900">
                  ₹{gift.price}
                  </span>
                  {gift.originalPrice && (
                    <span className="ml-2 text-gray-500 line-through">
                      ₹{gift.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {gift.rating && (
                <div className="flex items-center mb-2">
                  <StarIcon className="w-5 h-5 text-yellow-400" />
                  <span className="ml-1 text-sm text-gray-600">
                    {gift.rating} ({gift.reviews} reviews)
                  </span>
                </div>
              )}
              

          <div className="flex flex-wrap gap-2 mt-2">
            {gift.features.map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs md:text-xs font-medium"
              >
                {feature}
              </span>
            ))}
          </div>

          <button
            onClick={() => addToCart(gift)}
            className="w-full mt-4 md:mt-5 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center transition-colors text-sm md:text-base"
          >
            <ShoppingBagIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </motion.div>
    ))}
  </div>
</div>
  );
};

export default BestSellingGifts;




{/* <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3 md:mb-4">
      Best Selling Gifts
    </h1>
    <p className="text-base md:text-lg text-gray-600 text-center mb-6 md:mb-8">
      Packed with love
    </p>
  </motion.div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
    {bestSellingGifts.map((gift) => (
      <motion.div
        key={gift.id}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        whileHover={{ y: -5 }}
      >
        <div className="relative">
          <div className="relative aspect-square bg-gray-100">
            <img
              src={gift.image}
              alt={gift.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder-image.jpg";
              }}
            />
            {gift.discount && (
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs md:px-3 md:py-1 md:text-sm rounded-full">
                {gift.discount}
              </div>
            )}
          </div>
        </div>

        <div className="p-4 md:p-5">
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
            {gift.name}
          </h3>

          <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-gray-900">
                  ₹{gift.price}
                  </span>
                  {gift.originalPrice && (
                    <span className="ml-2 text-gray-500 line-through">
                      ₹{gift.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {gift.rating && (
                <div className="flex items-center mb-2">
                  <StarIcon className="w-5 h-5 text-yellow-400" />
                  <span className="ml-1 text-sm text-gray-600">
                    {gift.rating} ({gift.reviews} reviews)
                  </span>
                </div>
              )}
              

          <div className="flex flex-wrap gap-2 mt-2">
            {gift.features.map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs md:text-xs font-medium"
              >
                {feature}
              </span>
            ))}
          </div>

          <button
            onClick={() => addToCart(gift)}
            className="w-full mt-4 md:mt-5 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center transition-colors text-sm md:text-base"
          >
            <ShoppingBagIcon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </motion.div>
    ))}
  </div>
</div> */}