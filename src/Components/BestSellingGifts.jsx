
import React from "react";
import { motion } from "framer-motion";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useCart } from "../context/CartContext";

const ProductSection = ({ title, subtitle, products }) => (
  <div className="mb-1 md:mb-3">
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

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

    <div className="text-center mt-5">
      <button className="text-purple-600 hover:text-purple-700 font-medium">
        View More →
      </button>
    </div>
  </div>
);

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <div className="relative aspect-square bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder-image.jpg";
            }}
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

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center transition-colors text-sm"
        >
          <ShoppingBagIcon className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

const BestSellingGifts = () => {
   const bestSellingGifts = [
        {
          id: 1,
          name: "Handcrafted Wooden Bloom Keepsake",
          price: 745,
          rating: 4.5,
          reviews: 1,
          features: ["Natural Wood Finish", "Eco-Friendly Materials"],
          image: "/item1.jpg",
        },
        {
          id: 2,
          name: "Artisanal Wooden Mother's Day Memory",
          price: 1225,
          rating: 4.3,
          features: ["Personalized Engraving", "Hand-carve Details"],
          image: "/item2.jpg",
        },
        {
          id: 3,
          name: "Carved Wooden Floral Wall Art Best Of All",
          price: 895,
          rating: 4.5,
          reviews: 30,
          features: ["Sustainable Teak Wood", "Ready to Hang Any Where"],
          image: "/item3.jpg",
        },
        {
          id: 4,
          name: "Personalized Wooden Birthday Treasure Chest",
          price: 1225,
          originalPrice: 1425,
          discount: "14% OFF",
          rating: 4.5,
          features: ["Custom Monogram", "Hand-rubbed Finish"],
          image: "/item4.jpg",
        },
        {
          id: 5,
          name: "Rustic Wooden Photo Display Stand",
          price: 1225,
          originalPrice: 1425,
          discount: "14% OFF",
          features: ["Vintage Distressed Look", "Multi-photo Capacity"],
          image: "/item5.jpg",
        },
        {
          id: 6,
          name: "Hand-turned Wooden Jewelry Organizer",
          price: 1225,
          originalPrice: 1425,
          discount: "14% OFF",
          features: ["Compartmentalized Design", "Natural Wood Grains"],
          image: "/item6.jpg",
        },
        {
          id: 7,
          name: "Artisan Wooden Seasonal Decoration Set",
          price: 1225,
          originalPrice: 1425,
          discount: "14% OFF",
          features: ["4-Piece Collection", "Hand-painted Details"],
          image: "/item7.jpg",
        }, 
        {
          id: 8,
          name: "Custom Wooden Family Tree Wall Hanging",
          price: 1225,
          originalPrice: 1425,
          discount: "14% OFF",
          features: ["Branch Design", "Custom Name Plaques"],
          image: "/item8.jpg",
        },
      ];
  
  const timeFavorites = [
    {
      id: 9,
      name: "Vintage Wooden Clock",
      price: 1699,
      rating: 4.8,
      reviews: 45,
      features: ["Antique Finish", "Silent Movement"],
      image: "/item9.jpg"
    },
    {
      id: 10,
      name: "Modern Wall Chronograph",
      price: 2299,
      originalPrice: 2899,
      discount: "20% OFF",
      features: ["LED Display", "Smart Connectivity"],
      image: "/item10.jpg"
    },
    {
      id: 11,
      name: "Modern Wall Chronograph",
      price: 2299,
      originalPrice: 2899,
      discount: "20% OFF",
      features: ["LED Display", "Smart Connectivity"],
      image: "/item11.jpg"
    },
    {
      id: 12,
      name: "Modern Wall Chronograph",
      price: 2299,
      originalPrice: 2899,
      discount: "20% OFF",
      features: ["LED Display", "Smart Connectivity"],
      image: "/item12.jpg"
    },
    // Add more time favorites...
  ];

  return (
    <div className="container mx-auto px-2 sm:px-6 py-2 md:py-4">
      <ProductSection
        title="Best Selling Gifts"
        subtitle="Packed with love"
        products={bestSellingGifts}
      />

      <ProductSection
        title="Time Favorites"
        subtitle="Eternal moments crafted in wood"
        products={timeFavorites}
      />

      {/* Add more sections as needed */}
    </div>
  );
};

export default BestSellingGifts;