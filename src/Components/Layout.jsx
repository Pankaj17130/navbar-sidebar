import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from "../pages/Footer";

const Layout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div className="min-h-screen flex bg-amber-50">
      <Sidebar sidebarToggle={sidebarToggle} />
      <div className={`flex-1 transition-all duration-300 ${sidebarToggle ? 'ml-0' : 'ml-64'}`}>
        <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
        <main className="p-4 pt-20">
          <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
