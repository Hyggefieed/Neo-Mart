import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  ShoppingCart,
  Star,
  Truck,
  Shield,
  Headphones,
  Award,
  ArrowRight,
  Mail,
} from "lucide-react";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import ProductCard from "./components/ProductCard";
import HeroSection from "./components/HeroSection";
import Products from "./pages/Products";
import FlippingProductGrid from "./components/ProductGrid";
import About from "./pages/About";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/products" element={<Products />} />
        <Route path="/flipping-product-grid" element={<FlippingProductGrid />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      {/* Navbar */}
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
              <a href="#" className="text-gray-600 hover:text-[#2F3F50] font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2F3F50] after:transition-all after:duration-300 hover:after:w-full">
                Home
              </a>
              <a href="/Products" className="text-gray-600 hover:text-[#2F3F50] font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2F3F50] after:transition-all after:duration-300 hover:after:w-full">
                Catalog
              </a>
              <a href="/About" className="text-gray-600 hover:text-[#2F3F50] font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2F3F50] after:transition-all after:duration-300 hover:after:w-full">
                About
              </a>
              <a href="/register" className="text-gray-600 hover:text-[#2F3F50] font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2F3F50] after:transition-all after:duration-300 hover:after:w-full">
                Contact
              </a>
              <Link to="/Login" className="text-gray-600 hover:text-[#2F3F50] font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2F3F50] after:transition-all after:duration-300 hover:after:w-full">
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

      <HeroSection />
      <ProductCard />
      <FlippingProductGrid />

      

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
              Why Choose NeoMart?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience excellence with our commitment to quality and service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                // description: "On orders over $100",
              },
              {
                icon: Shield,
                title: "Secure Payment",
                // description: "100% secure checkout",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                // description: "Always here to help",
              },
              {
                icon: Award,
                title: "Premium Quality",
                // description: "Only the best products",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group ">
                <div className="w-16 h-16 bg-[#2F3F50] rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-[#2F3F50] transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonial />

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get the latest deals and product updates delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2F3F50] focus:border-transparent transition-all duration-200 bg-white"
              />
            </div>
            <button className="px-6 py-3 bg-[#2F3F50] text-white rounded-lg hover:bg-[#253241] transition-all duration-200 flex items-center justify-center font-medium hover:shadow-lg hover:scale-105">
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Shipping
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-6">Categories</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Fashion
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Home & Garden
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Sports
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-6">Customer Service</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Support
                  </a>
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
    </div>
  );
};

export default App;