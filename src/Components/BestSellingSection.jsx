import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const BestSellingSection = ({ products }) => {
  return (
    <div className="container mx-auto px-2 sm:px-4 md:px-6 py-6 md:py-12">
      <div className="mb-8 md:mb-12">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 text-center mb-2 md:mb-3">
          Best Selling Gifts
        </h2>
        <p className="text-sm md:text-base text-gray-600 text-center mb-4 md:mb-6">
          Packed with love
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-6 md:mt-8">
          <Link
            to="/best-selling"
            className="text-purple-600 hover:text-purple-700 font-medium text-base md:text-lg"
          >
            View More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestSellingSection;