import React from 'react';
import { ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="py-16 bg-[#2F3F50]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-[#2F3F50]" />
                </div>
                <span className="ml-3 text-xl font-semibold text-white tracking-tight">
                  NeoMart
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your premium destination for quality products and exceptional service.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Shipping
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-6">Categories</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Home & Garden
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Sports
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-6">Customer Service</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-12 pt-8 text-center">
            <p className="text-gray-300">
              &copy; 2025 NeoMart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;