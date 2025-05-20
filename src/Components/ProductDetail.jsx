import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { StarIcon, ShoppingBagIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import ProductCard from "./ProductCard";
import ImageWithFallback from "./ImageWithFallback";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [showMessage, setShowMessage] = useState(false);
  const [mainImage, setMainImage] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    // Simulate loading delay for images
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!product) return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
      <Link to="/" className="text-purple-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );

  const suggestions = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = (product) => {
    addToCart(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded shadow-lg z-50 flex items-center"
          >
            <ShoppingBagIcon className="w-5 h-5 mr-2" />
            Added to cart successfully!
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        to="/"
        className="mb-6 inline-flex items-center text-purple-600 hover:text-purple-800"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Image Gallery */}
        <div className="sticky top-4">
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            {loading ? (
              <div className="animate-pulse bg-gray-200 w-full h-full" />
            ) : (
              <ImageWithFallback
                src={product.images[mainImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          
          <div className="grid grid-cols-4 gap-2 mt-4">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImage(i)}
                className={`aspect-square rounded overflow-hidden border-2 ${
                  mainImage === i ? "border-purple-500" : "border-transparent"
                }`}
              >
                <ImageWithFallback
                  src={img}
                  alt={`${product.name} thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              {discountPercentage > 0 && (
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                  {discountPercentage}% OFF
                </span>
              )}
              <span className="text-2xl font-bold">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            {product.rating && (
              <div className="flex items-center mb-4">
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <span className="ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {product.features.map((feature, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>

            <button
              onClick={() => handleAddToCart(product)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition flex items-center disabled:opacity-50"
              disabled={loading}
            >
              <ShoppingBagIcon className="w-5 h-5 mr-2" />
              Add to Cart
            </button>

            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold">Product Details</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {suggestions.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {suggestions.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;