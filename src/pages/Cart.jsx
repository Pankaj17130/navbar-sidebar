import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
            <span className="text-gray-500">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </span>
          </div>

          <AnimatePresence>
            {cartItems.length === 0 ? (
              <motion.div
                key="empty-cart"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 text-center"
              >
                <div className="inline-block mb-4 animate-fade-in-up">
                  <svg
                    className="w-24 h-24 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 mb-6">Your cart is empty</p>
                <Link
                  to="/products"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors inline-block"
                >
                  Continue Shopping
                </Link>
              </motion.div>
            ) : (
              <>
                <div className="divide-y divide-gray-200">
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        layout // Add layout animation
                        className="p-6 flex items-center hover:bg-gray-50 transition-colors"
                      >
                        {/* Product Image */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md mr-4"
                        />

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          {" "}
                          {/* Prevent text overflow */}
                          <h3 className="font-medium text-gray-800 truncate">
                            {item.name}
                          </h3>
                          <p className="text-gray-500">
                          ₹{item.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4 flex-shrink-0">
                          <div className="flex items-center border rounded-md bg-white">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-2 hover:bg-gray-100 disabled:opacity-50"
                              disabled={item.quantity <= 1}
                            >
                              <MinusIcon className="w-4 h-4" />
                            </button>
                            <span className="px-4 w-12 text-center select-none">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-2 hover:bg-gray-100"
                            >
                              <PlusIcon className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Total Price */}
                          <p className="w-24 text-right font-medium">
                          ₹{(item.price * item.quantity).toFixed(2)}
                          </p>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 ml-4"
                            aria-label="Remove item"
                          >
                            <XMarkIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="p-6 border-t border-gray-200">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Subtotal</span>
                      <span className="font-bold text-lg">
                      ₹{total.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500">
                      <span>Shipping</span>
                      <span>Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500">
                      <span>Taxes</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
                      Proceed to Checkout
                    </button>
                    <div className="flex gap-4">
                      <Link
                        to="/products"
                        className="flex-1 text-center bg-gray-100 text-gray-700 py-3 rounded-md hover:bg-gray-200 transition-colors"
                      >
                        Continue Shopping
                      </Link>
                      <button
                        onClick={clearCart}
                        classNmukame="flex-1 bg-red-100 text-red-600 py-3 rounded-md hover:bg-red-200 transition-colors"
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
