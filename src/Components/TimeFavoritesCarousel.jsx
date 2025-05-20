import React, { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const TimeFavoritesCarousel = ({ products }) => {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateVisibleItems = () => {
    const containerWidth = containerRef.current?.offsetWidth;
    if (!containerWidth) return;

    if (containerWidth >= 1024) setVisibleItems(4);
    else if (containerWidth >= 768) setVisibleItems(3);
    else setVisibleItems(2);
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const scrollTo = (direction) => {
    const itemsCount = products.length;
    let newIndex = currentIndex + (direction === "next" ? visibleItems : -visibleItems);
    newIndex = Math.max(0, Math.min(newIndex, itemsCount - visibleItems));
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div className="flex transition-transform duration-300"
           style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}>
        {products.map((product) => (
          <div key={product.id} className={`flex-shrink-0 w-1/${visibleItems}`}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <button
        onClick={() => scrollTo("prev")}
        disabled={currentIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white disabled:opacity-50"
      >
        ←
      </button>
      <button
        onClick={() => scrollTo("next")}
        disabled={currentIndex >= products.length - visibleItems}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white disabled:opacity-50"
      >
        →
      </button>
    </div>
  );
};

export default TimeFavoritesCarousel;