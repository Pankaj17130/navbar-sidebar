import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ImageWithFallback from "../Components/ImageWithFallback";

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-blue-50 to-purple-50">
            <h2 className="text-2xl font-bold text-gray-800 font-serif">
              Your Cart
            </h2>
            <span className="text-gray-600 bg-white px-3 py-1 rounded-full text-sm shadow-sm">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </span>
          </div>

          <AnimatePresence mode="wait">
            {cartItems.length === 0 ? (
              <motion.div
                key="empty-cart"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-8 text-center"
              >
                <div className="inline-block mb-6 animate-float">
                  <svg
                    className="w-32 h-32 text-gray-300 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 mb-6 text-lg">
                  Your cart feels lonely...
                </p>
                <Link
                  to="/products"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 inline-block shadow-md hover:shadow-lg"
                >
                  Start Shopping
                </Link>
              </motion.div>
            ) : (
              <>
                <div className="divide-y divide-gray-100">
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        layout
                        className="p-4 flex items-center hover:bg-gray-50/50 transition-colors group"
                      >
                        {/* Updated Image Section in Cart Items */}
                        <div className="w-24 h-24 flex-shrink-0 mr-4 relative">
                          <ImageWithFallback
                            src={
                              item.images?.[0] ||
                              "/assets/placeholder-image.jpg"
                            }
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg bg-gray-100"
                            fallbackSrc="/assets/placeholder-image.jpg"
                          />
                        </div>

                        <div className="flex-1 min-w-0 mr-4">
                          <h3 className="font-semibold text-gray-800 truncate">
                            {item.name}
                          </h3>
                          <p className="text-gray-500 text-sm">
                            ₹{item.price.toFixed(2)}
                          </p>
                        </div>

                        <div className="flex items-center gap-4 flex-shrink-0">
                          <div className="flex items-center border border-gray-200 rounded-lg bg-white shadow-sm">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-2 hover:bg-gray-50 disabled:opacity-30 transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <MinusIcon className="w-4 h-4 text-gray-600" />
                            </button>
                            <span className="px-4 w-12 text-center select-none text-gray-700 font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-2 hover:bg-gray-50 transition-colors"
                            >
                              <PlusIcon className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>

                          <p className="w-24 text-right font-semibold text-gray-800">
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </p>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-300 hover:text-red-500 ml-2 transition-colors"
                            aria-label="Remove item"
                          >
                            <XMarkIcon className="w-6 h-6" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                <div className="p-6 bg-gray-50/50 border-t border-gray-100">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">
                        Subtotal
                      </span>
                      <span className="font-bold text-xl text-gray-900">
                        ₹{total.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500 text-sm">
                      <span>Shipping & Taxes</span>
                      <span className="text-gray-400">
                        Calculated at checkout
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] font-semibold shadow-md">
                      Checkout Now
                    </button>
                    <div className="flex gap-4">
                      <Link
                        to="/products"
                        className="flex-1 text-center bg-white text-gray-700 py-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm hover:shadow-md"
                      >
                        Continue Shopping
                      </Link>
                      <button
                        onClick={clearCart}
                        className="flex-1 bg-white text-red-600 py-3 rounded-lg hover:bg-red-50 transition-colors border border-red-200 shadow-sm hover:shadow-md"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Cart;
