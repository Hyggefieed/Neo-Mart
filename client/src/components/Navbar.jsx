// src/components/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b" style={{ borderColor: "#656565" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <ShoppingCart className="w-8 h-8" style={{ color: "#A6D3A0" }} />
            <span className="ml-2 text-xl font-bold" style={{ color: "#656565" }}>
              NeoMart
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-gray-900">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link to="/register" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-gray-900">
              Sign in
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-gray-900">
              <ShoppingCart className="w-6 h-6" />
              <span
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs text-white flex items-center justify-center"
                style={{ backgroundColor: "#A6D3A0" }}
              >
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
