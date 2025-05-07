import React from 'react';
import { motion } from "framer-motion";
import {
  TruckIcon,
  SparklesIcon,
  ScissorsIcon,
  CubeIcon,
  FireIcon,
 
  GiftIcon,
  HomeIcon,
  
  WrenchIcon
} from '@heroicons/react/24/outline';

const MainCategoriesRow = () => {
  const mainCategories = [
    { name: 'Fast Shipping', icon: TruckIcon },
    { name: 'Wood Carvings', icon: ScissorsIcon },
    { name: 'Handcrafted Furniture', icon: WrenchIcon },
    { name: 'Wooden Decor', icon: HomeIcon },
    { name: 'Seasonal Collections', icon:CubeIcon, },
    // { name: 'Fire Orders', icon:  FireIcon },
    { name: 'Custom Gifts', icon: GiftIcon }
  ];

  return (
    <div className="mx-auto px-4 py-8 bg-[#f4e9d8]">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 max-w-7xl mx-auto">
        {mainCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <motion.div 
              key={category.name}
              className="group flex flex-col items-center p-2 border-2 rounded-xl hover:bg-[#e2d5c5] transition-all cursor-pointer bg-white border-[#d6c8ae] shadow-sm hover:shadow-md"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-2 bg-[#e2d5c5] rounded-full mb-2 group-hover:bg-[#c4a986] transition-colors shadow-inner">
                <IconComponent 
                  className="w-6 h-8 text-[#5a3e26]"
                  strokeWidth={1.8}
                />
              </div>
              <span className="text-xs font-medium text-center text-[#5a3e26] group-hover:text-[#7a5c38] leading-tight px-1">
                {category.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MainCategoriesRow;