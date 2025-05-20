import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StarIcon, Squares2X2Icon, FunnelIcon } from '@heroicons/react/24/outline';
import ProductCard from '../Components/ProductCard';
import { products } from '../data/products';
import ImageWithFallback from '../Components/ImageWithFallback';

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Available categories from your data
  const categories = ['all', 'best-selling', 'time-favorites', 'new-arrivals', 'seasonal'];

  // Filter and sort products
  useEffect(() => {
    let results = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sorting logic
    switch(sortBy) {
      case 'price-asc':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        results.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // Featured sorting (default order)
        break;
    }

    setFilteredProducts(results);
  }, [selectedCategory, priceRange, sortBy, searchQuery]);

  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      <div className={`fixed inset-0 z-40 lg:hidden ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-25" />
      </div>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-12 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Handcrafted Treasures</h1>
          
          <div className="flex items-center">
            <div className="relative inline-block text-left">
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  className="lg:hidden -m-2 ml-4 p-2 text-gray-400 hover:text-gray-500"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <FunnelIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 pb-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <div className="hidden lg:block">
              <div className="sticky top-20 space-y-8">
                {/* Category filter */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="-my-3 flow-root">
                    <span className="font-medium text-gray-900">Categories</span>
                  </h3>
                  <div className="pt-4 space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-2 py-1 rounded-md ${
                          selectedCategory === category 
                            ? 'bg-purple-100 text-purple-700' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {category.replace(/-/g, ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price filter */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="-my-3 flow-root">
                    <span className="font-medium text-gray-900">Price Range</span>
                  </h3>
                  <div className="pt-4">
                    <input
                      type="range"
                      className="w-full"
                      min="0"
                      max="10000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>₹0</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Sort by */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="-my-3 flow-root">
                    <span className="font-medium text-gray-900">Sort By</span>
                  </h3>
                  <div className="pt-4 space-y-2">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="rating">Rating</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div className="lg:col-span-3">
              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search handmade treasures..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute right-3 top-3">
                    <Squares2X2Icon className="h-6 w-6 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Empty state */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <ImageWithFallback
                    src="/assets/empty-state.png"
                    alt="No products found"
                    className="mx-auto h-48 w-48"
                    fallbackSrc="/assets/placeholder-image.jpg"
                  />
                  <h2 className="mt-4 text-2xl font-bold text-gray-900">No Treasures Found</h2>
                  <p className="mt-2 text-gray-500">Try adjusting your filters or search terms</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;