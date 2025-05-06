import React from 'react';
import Navbar from './Navbar';

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    // In Dashboard component
<div className={`transition-all duration-300 ${
  sidebarToggle ? '' : ' ml-64 '
}  `}> 
      <Navbar 
        sidebarToggle={sidebarToggle} 
        setSidebarToggle={setSidebarToggle} 
      />

      {/* Add your main content here */}
      
    </div>
  );
};

export default Dashboard;
