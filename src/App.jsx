import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from "./Components/Layout";
import BestSellingGifts from './Components/BestSellingGifts';
import { CartProvider } from './context/CartContext';
import Workshop from './pages/Workshop';
import HomeCarouselPage from './Components/HomeCarouselPage';
import Cart from './pages/Cart';

// Pages

const Settings = () => <h2 className="p-4">Craft Settings Page</h2>;
const Orders = () => <h2 className="p-4">Orders Page</h2>;
const Blog = () => <h2 className="p-4">Artisan Blog Page</h2>;

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
     
        <Route path="/settings" element={<Settings />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Workshop />} /> 
        <Route path='/best' element={<BestSellingGifts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
      </Route>
    </Routes>
  );
}

export default App;
