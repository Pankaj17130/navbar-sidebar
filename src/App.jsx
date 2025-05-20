import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout";
import ProductSection from './Components/ProductSection';
import { CartProvider } from './context/CartContext';
import HomePage from "./pages/HomePage";
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage';
import ProductDetail from './Components/ProductDetail';
import ProductsPage from './pages/ProductsPage'; // Add this import
import { products } from './data/products';


// Pages
const Settings = () => <h2 className="p-4">Craft Settings Page</h2>;
const Orders = () => <h2 className="p-4">Orders Page</h2>;
const Blog = () => <h2 className="p-4">Artisan Blog Page</h2>;

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Product Categories */}
          <Route 
            path="/best" 
            element={
              <ProductSection 
                title="Best Selling Gifts"
                subtitle="Packed with love"
                category="best-selling"
              />
            } 
          />
          
          {/* Product Detail Route */}
          <Route 
            path="/product/:id" 
            element={<ProductDetail products={products} />} 
          />
          
          {/* Shopping Cart */}
          <Route path="/cart" element={<CartPage />} />
          
          {/* Products Page */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/category/:category" element={<ProductSection />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          
          {/* Other Pages */}
          <Route path="/settings" element={<Settings />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />

          
          {/* Dynamic Category Route */}
          <Route 
            path="/category/:category" 
            element={<ProductSection />} 
          />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;


