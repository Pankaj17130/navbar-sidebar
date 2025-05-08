import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaShoppingCart, FaSearch, FaUserCircle } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  const { cartItems } = useCart();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <nav className="bg-white px-4 py-3 flex justify-between items-center border-b border-[#d6c8ae] shadow-sm">
      {/* Left - Logo and Sidebar Toggle */}
      <div className="flex items-center text-xl">
        <FaBars
          className="text-[#7a5c38] me-4 cursor-pointer hover:text-[#a1744f]"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
        <div className="flex items-center space-x-2">
          <img
            src="./navlogo.png"
            alt="Qincrarf Logo"
            className="w-16 h-12 object-contain"
          />
          <span className="text-[#5a3e26] font-bold tracking-wide text-lg"></span>
        </div>
      </div>

      {/* Middle - Search */}
      <div className="hidden md:flex w-1/3">
        <div className="flex items-center border border-amber-300 rounded-full px-4 py-2 bg-amber-100 w-full">
          <input
            type="text"
            placeholder="Search handmade treasures..."
            className="flex-grow bg-transparent outline-none text-sm text-amber-900"
          />
          <FaSearch className="text-amber-600" />
        </div>
      </div>

      {/* Right - Cart & User */}
      <div className="flex items-center gap-x-5">
        <div className="relative">
          <FaShoppingCart
            className="text-xl cursor-pointer hover:text-amber-300"
            onClick={() => toggleDropdown("cart")}
          />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          )}

          {/* Cart Dropdown */}
          {activeDropdown === "cart" && (
            <div className="absolute right-0 mt-2 w-80 bg-amber-100 border border-amber-200 rounded-lg shadow-xl z-50">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4 text-amber-900">
                  Woodcraft Cart
                </h3>
                {cartItems.length === 0 ? (
                  <p className="text-amber-700 text-center py-4">
                    Your cart is empty
                  </p>
                ) : (
                  <>
                    <div className="max-h-96 overflow-y-auto space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-14 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-sm truncate text-amber-900">
                              {item.name}
                            </h4>
                            <div className="flex items-center justify-between text-sm text-amber-700">
                              <span>Qty: {item.quantity}</span>
                              <span>
                                ₹{(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-amber-200">
                      <div className="flex justify-between mb-4 text-amber-900">
                        <span className="font-semibold">Subtotal:</span>
                        <span className="font-semibold">
                          ₹{cartTotal.toFixed(2)}
                        </span>
                      </div>
                      <Link
                        to="/Cart"
                        className="w-full block text-center bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700"
                      >
                        View Cart & Checkout
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button className="text-[#7a5c38] hover:text-[#a1744f] group">
            <FaUserCircle className="w-7 h-7" />
            <div className="z-10 hidden absolute bg-white rounded-lg shadow-lg w-32 group-hover:block right-0 mt-2 border border-[#d6c8ae]">
              <ul className="py-2 text-sm text-[#5a3e26]">
                <li className="hover:bg-[#f4e9d8] px-4 py-2">
                  <a href="#">Profile</a>
                </li>
                <li className="hover:bg-[#f4e9d8] px-4 py-2">
                  <a href="#">Log IN</a>
                </li>
                <li className="hover:bg-[#f4e9d8] px-4 py-2 ">
                  <a href="#">Sign Up</a>
                </li>
                {/* <li className="hover:bg-[#f4e9d8] px-4 py-2 border-t border-[#d6c8ae]">
                  <a href="#">Log Out</a>
                </li> */}
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
