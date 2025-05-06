import React from "react";
import { FaHome, FaCog, FaRegEnvelope, FaRegFileAlt, FaTree } from "react-icons/fa";

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? "hidden" : "block"} transition-transform duration-300 fixed h-full w-64 bg-amber-900 px-4 py-2 border-r border-amber-700`}>
      <div className="my-2 mb-4 flex items-center">
        <FaTree className="text-amber-300 w-8 h-8 mr-2" />
        <h1 className="text-2xl text-amber-100 font-bold">Qincrarf Dashboard</h1>
      </div>
      <hr className="border-amber-700 mb-4" />
      <ul className="mt-3 text-amber-100 font-medium">
        <li className="mb-2 rounded hover:bg-amber-800 transition-colors py-3 px-3">
          <a href="#" className="flex items-center">
            <FaHome className="w-6 h-6 mr-3 text-amber-400" />
            Workshop
          </a>
        </li>
        <li className="mb-2 rounded hover:bg-amber-800 transition-colors py-3 px-3">
          <a href="#" className="flex items-center">
            <FaCog className="w-6 h-6 mr-3 text-amber-400" />
            Craft Settings
          </a>
        </li>
        <li className="mb-2 rounded hover:bg-amber-800 transition-colors py-3 px-3">
          <a href="#" className="flex items-center">
            <FaRegEnvelope className="w-6 h-6 mr-3 text-amber-400" />
            Orders
          </a>
        </li>
        <li className="mb-2 rounded hover:bg-amber-800 transition-colors py-3 px-3">
          <a href="#" className="flex items-center">
            <FaRegFileAlt className="w-6 h-6 mr-3 text-amber-400" />
            Artisan Blog
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;