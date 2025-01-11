import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import PortfolioTracker from "./Components/PortfolioTracker";
import Visualizer from "./Components/Visualizer";

import Navbar from "./Components/Navbar";


// import SecureTransaction from "./Components/SecureTransaction";


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className='py-4 bg-white dark:bg-[#001938]'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfoliotracker" element={<PortfolioTracker />} />
        <Route path="/visualizer/:txHash" component={<Visualizer />} />
        <Route path="/visualizer" element={<Visualizer />} />
      
      </Routes>
    </Router>
  );
}

export default App;
