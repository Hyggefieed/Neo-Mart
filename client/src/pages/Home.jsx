import React from "react";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";
import ProductCard from "../components/ProductCard";
import HeroSection from "../components/HeroSection";
import FlippingProductGrid from "../components/ProductGrid";
import Whychoose from "../components/Whychoose";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProductCard />
      <FlippingProductGrid />
      <Whychoose />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;