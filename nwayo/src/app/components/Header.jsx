

"use client";

import React, { useState } from 'react';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update the state based on window resize
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Add event listener on component mount
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full p-4 text-black bg-white shadow-md z-50">
    {isMobile ? (
      // Mobile Header Design
      <div className="flex justify-between items-center">
        <button className="text-black">Menu</button>
        <a href="/" className="text-lg font-bold">Logo</a>
        <button className="text-black">Search</button>
      </div>
    ) : (
      // Desktop Header Design
      <nav className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <a href="/" className="text-lg font-bold">Logo</a>
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-4">
            <a href="/about" className="text-black">About</a>
            <a href="/services" className="text-black">Services</a>
            <a href="/contact" className="text-black">Contact</a>
            
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 text-white rounded-md" style={{ backgroundColor: '#001aa0' }}>
            Search
          </button>
        </div>
      </nav>
    )}
  </header>
  );
};

export default Header;