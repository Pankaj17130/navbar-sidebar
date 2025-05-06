import './App.css';
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import { useState } from 'react';

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div>
      <Sidebar sidebarToggle={sidebarToggle} />
      <Dashboard 
        sidebarToggle={sidebarToggle} 
        setSidebarToggle={setSidebarToggle} 
      />
    </div>
  );
}

export default App;
