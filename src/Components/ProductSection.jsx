import React from "react";
import { motion } from "framer-motion";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useCart } from "../context/CartContext";
import { Link } from 'react-router-dom';
import { products } from "../data/products"; // Ensure correct path casing
import ImageWithFallback from "./ImageWithFallback"; // Import if needed

const ProductSection = ({ title, subtitle, category }) => {
  const sectionProducts = products.filter(product => product.category === category);

  return (
    <div className="mb-8 md:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
          {title}
        </h2>
        <p className="text-base text-gray-600 text-center mb-2">{subtitle}</p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {sectionProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {sectionProducts.length > 4 && (
        <div className="text-center mt-5">
          <Link 
            to={`/products`}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            View More →
          </Link>
        </div>
      )}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <div className="relative aspect-square bg-gray-100">
          <ImageWithFallback
            src={product.images?.[0]}
            alt={product.name}
            className="w-full h-full object-cover"
            fallbackSrc="/assets/placeholder-image.jpg"
          />
          {product.discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded-full">
              {product.discount}
            </div>
          )}
        </div>
      </div>

      <div className="p-4 md:p-5">
        <h3 className="text-base font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-gray-500 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {product.rating && (
          <div className="flex items-center mb-2">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
        )}

        {product.features && (
          <div className="flex flex-wrap gap-2 mt-2">
            {product.features.map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-col gap-2">
          <Link
            to={`/product/${product.id}`}
            className="w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md text-sm transition-colors"
          >
            View Details
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center text-sm transition-colors"
          >
            <ShoppingBagIcon className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const BestSellingGifts = () => {
  return (
    <div className="container mx-auto px-2 sm:px-6 py-2 md:py-4">
      <ProductSection
        title="Best Selling Gifts"
        subtitle="Packed with love"
        category="best-selling"
      />

      <ProductSection
        title="Time Favorites"
        subtitle="Eternal moments crafted in wood"
        category="time-favorites"
      />
    </div>
  );
};

export default BestSellingGifts;