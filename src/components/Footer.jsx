import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10 px-[40px] py-[40px] ">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold">🌍 Travel Planner</h4>
          <p className="text-sm text-gray-400">Plan your days, your way.</p>
        </div>

        
        <div className="flex gap-4">
          <Link to="/" className="text-gray-400 hover:text-white transition">Home</Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition">About</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link>
        </div>

        <div className="text-sm text-gray-400 text-center sm:text-right">
          © {new Date().getFullYear()} All rights reserved by Shiva
        </div>

      </div>
    </footer>
  );
};
