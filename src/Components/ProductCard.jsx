import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

const ImageWithFallback = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc("/placeholder.jpg")}
      loading="lazy"
    />
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-square bg-gray-100">
          <ImageWithFallback
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded-full">
              {product.discount}%
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <h3 className="text-base font-semibold mb-2">
          <Link to={`/product/${product.id}`} className="hover:text-purple-600">
            {product.name}
          </Link>
        </h3>

        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-sm">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingBagIcon className="w-4 h-4" />
          </button>
        </div>

        {product.rating && (
          <div className="flex items-center text-sm mb-2">
            <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{product.rating}</span>
            <span className="text-gray-500 ml-2">
              ({product.reviews} reviews)
            </span>
          </div>
        )}

        <Link
          to={`/product/${product.id}`}
          className="group w-full mt-3 px-4 py-2 flex items-center justify-center gap-2 border border-purple-600 text-purple-600 rounded-md transition-all duration-300 hover:bg-purple-600 hover:text-white text-sm font-medium"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;