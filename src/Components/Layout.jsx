import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from "./Footer";

const Layout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const location = useLocation();

  // Only hide sidebar for product detail pages like /product/123
  const isProductPage = /^\/product\/[^/]+$/.test(location.pathname);

  return (
    <div className="min-h-screen flex bg-amber-50">
      {/* Sidebar - hidden only on product detail pages */}
      {!isProductPage && (
        <Sidebar sidebarToggle={sidebarToggle} />
      )}

      <div className={`flex-1 transition-all duration-300 ${
        !isProductPage && !sidebarToggle ? 'ml-64' : 'ml-0'
      }`}>
        {/* Navbar - hidden only on product detail pages */}
        {!isProductPage && (
          <Navbar 
            sidebarToggle={sidebarToggle} 
            setSidebarToggle={setSidebarToggle} 
          />
        )}
        
        {/* Main Content */}
        <main className={`p-4 ${!isProductPage ? 'pt-20' : 'pt-4'}`}>
          <Outlet />
        </main>
        
        {/* Footer - hidden only on product detail pages */}
        {!isProductPage && <Footer />}
      </div>
    </div>
  );
};

export default Layout;
