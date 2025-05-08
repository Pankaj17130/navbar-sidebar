import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
import { ArrowRightIcon } from '@heroicons/react/24/solid';

// Custom carousel image component
const CarouselImage = ({ text, imageSrc }) => {
  return (
    <div className="carousel-image-container h-full w-full overflow-hidden"> {/* Fixed height */}
      <img
        className="w-full h-full object-contain object-center" // Changed to object-contain
        src={imageSrc}
        alt={text}
        loading="lazy"
      />
    </div>
  );
};;

// Animation variants
const bannerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

function SixSlideCarousel() {
  return (
    <div className="container mx-auto px-1">
      {/* Animated Banner */}
      <motion.div 
        className="mb-8 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-4 md:p-6 shadow-lg"
        initial="hidden"
        whileInView="visible"
        variants={bannerVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <motion.h2 
              className="text-xl md:text-2xl font-bold text-white mb-2"
              variants={childVariants}
            >
              Summer Sale Special!
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-purple-100"
              variants={childVariants}
            >
              Get 30% OFF on all personalized gifts
            </motion.p>
          </div>
          <motion.div variants={childVariants}>
            <button className="flex items-center gap-2 bg-white text-purple-600 px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
              Shop Now
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Responsive Carousel */}
      <Carousel fade indicators controls className="shadow-xl rounded-lg overflow-hidden">
        {[
          { 
            image: "/image.png",
            title: "Summer Collection",
            text: "Explore our new summer arrivals"
          },
          { 
            image: "/cake.webp",
            title: "Festive Offers",
            text: "Special discounts for festival season"
          },
          { 
            image: "/image.png",
            title: "International Delivery",
            text: "We ship to over 100 countries"
          },
          { 
            image: "/corporate.jpg",
            title: "Premium Gifts",
            text: "Find the perfect gift for your loved ones"
          },
          { 
            image: "/maincake.webp",
            title: "Corporate Gifts",
            text: "Bulk ordering available for businesses"
          }
        ].map((slide, index) => (
          <Carousel.Item key={index} interval={3000}>
            <CarouselImage 
              text={slide.title}
              imageSrc={slide.image}
            />
            <Carousel.Caption className="bg-black bg-opacity-50 p-3 md:p-4">
              <h3 className="text-sm md:text-base lg:text-lg font-semibold">{slide.title}</h3>
              <p className="text-xs md:text-sm">{slide.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default SixSlideCarousel;