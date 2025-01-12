import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import PortfolioTracker from "./Components/PortfolioTracker";
import Visualizer from "./Components/Visualizer";
import Navbar from "./Components/Navbar";
import NftLoan from "./Components/NftLoan";
import NftMint from "./Components/NftMint";
import { LoanSection } from './loan/components/LoanSection'; // Import the new LoanSection component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar for the route-based navigation */}
        <div className="py-4 bg-white dark:bg-[#001938]">
          <Navbar />
        </div>

        {/* Routes for different pages */}
        <Routes>
          <Route path="/portfoliotracker" element={<PortfolioTracker />} />
          <Route path="/nftmint" element={<NftMint />} />
          <Route path="/" element={<Visualizer />} />
          <Route path="/visualizer/:txHash" element={<Visualizer />} />
          <Route path="/visualizer" element={<Visualizer />} />
          
          {/* Route for loan section */}
          <Route path="/nftloan" element={<LoanSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
