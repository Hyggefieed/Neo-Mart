import React from 'react';
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center group">
            <div className="w-8 h-8 bg-[#2F3F50] rounded-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <ShoppingCart className="w-4 h-4 text-white" />
            </div>
            <span className="ml-3 text-xl font-semibold text-gray-900 tracking-tight">
              NeoMart
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-[#2F3F50] font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2F3F50] after:transition-all after:duration-300 hover:after:w-full">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-[#2F3F50] font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2F3F50] after:transition-all after:duration-300 hover:after:w-full">
              Catalog
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-[#2F3F50] font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2F3F50] after:transition-all after:duration-300 hover:after:w-full">
              About
            </Link>
            <Link to="/register" className="text-gray-600 hover:text-[#2F3F50] font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2F3F50] after:transition-all after:duration-300 hover:after:w-full">
              Register
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-[#2F3F50] font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2F3F50] after:transition-all after:duration-300 hover:after:w-full">
              Sign in
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-[#2F3F50] transition-all duration-200 hover:scale-110">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#2F3F50] rounded-full text-xs text-white flex items-center justify-center font-medium">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;