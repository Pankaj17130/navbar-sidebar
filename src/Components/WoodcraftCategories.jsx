

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WoodcraftCategories = () => {
   const categories = [
    { 
      name: 'Home Decor',
      image: '/assets/item1.jpg',
      description: 'Hand-carved wall art, decorative pieces & sculptures'
    },
    { 
      name: 'Kitchenware',
      image: '/assets/item2.jpg',
      description: 'Wooden utensils, cutting boards & serving trays'
    },
    { 
      name: 'Furniture',
      image: '/assets/item4.jpg',
      description: 'Artisanal tables, chairs & storage solutions'
    },
    { 
      name: 'Religious & Spiritual',
      image: '/assets/item16.jpg',
      description: 'Prayer beads, deity sculptures & meditation tools'
    },
    { 
      name: 'Wedding & Festive',
      image: '/assets/item5.jpg',
      description: 'Custom mandaps, gift boxes & ceremonial items'
    },
    { 
      name: 'Office & Study',
      image: '/assets/item9.jpg',
      description: 'Desk organizers, pen stands & bookends'
    }
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02 }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 bg-amber-50/50">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-amber-900 mb-4">
          Qincrarf Woodcraft Collections
        </h2>
        <p className="text-lg md:text-xl text-amber-700/90 max-w-2xl mx-auto">
          Hand-carved Masterpieces for Every Aspect of Life
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            whileHover="hover"
            className="group relative"
          >
            <Link 
              to={`/collections/${category.name.toLowerCase().replace(/ & /g, '-')}`}
              className="block h-80 sm:h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-amber-900/30 to-transparent">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                <motion.div
                  variants={textVariants}
                  className="mb-4"
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-amber-100/90 font-light text-sm md:text-base">
                    {category.description}
                  </p>
                </motion.div>

                {/* Hover Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hidden group-hover:block"
                >
                  <span className="inline-block px-6 py-2 bg-amber-600 text-white rounded-full text-sm font-medium hover:bg-amber-700 transition-colors">
                    Explore Collection
                  </span>
                </motion.div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WoodcraftCategories;