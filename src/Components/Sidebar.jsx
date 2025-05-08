import React from "react";
import {
  FaHome,
  FaCog,
  FaRegEnvelope,
  FaRegFileAlt,

} from "react-icons/fa";

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div
      className={`${
        sidebarToggle ? "hidden" : "block"
      } transition-transform duration-300 fixed h-full w-64 bg-[#efe7dd] px-4 py-4 border-r border-[#d6c8ae] shadow-md`}
    >
      {/* Header */}
      <div className="mb-6 flex items-center">
        <div className="mr-2">
          <img src="logoImage.png" alt="Logo" className="w-20 h-15" />
        </div>
      </div>

      <hr className="border-[#d6c8ae] mb-4" />

      {/* Menu Items */}
      <ul className="text-[#5a3e26] font-medium">
        <li className="mb-2 rounded hover:bg-[#e0d4c1] transition-colors py-3 px-3">
          <a href="#" className="flex items-center">
            <FaHome className="w-5 h-5 mr-3 text-[#a1744f]" />
            Workshop
          </a>
        </li>
        <li className="mb-2 rounded hover:bg-[#e0d4c1] transition-colors py-3 px-3">
          <a href="#" className="flex items-center">
            <FaCog className="w-5 h-5 mr-3 text-[#a1744f]" />
            Craft Settings
          </a>
        </li>
        <li className="mb-2 rounded hover:bg-[#e0d4c1] transition-colors py-3 px-3">
          <a href="#" className="flex items-center">
            <FaRegEnvelope className="w-5 h-5 mr-3 text-[#a1744f]" />
            Orders
          </a>
        </li>
        <li className="mb-2 rounded hover:bg-[#e0d4c1] transition-colors py-3 px-3">
          <a href="#" className="flex items-center">
            <FaRegFileAlt className="w-5 h-5 mr-3 text-[#a1744f]" />
            Artisan Blog
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
