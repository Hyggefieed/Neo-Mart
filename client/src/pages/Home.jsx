import React from "react";
import Testimonial from "../components/Testimonial";
import ProductCard from "../components/ProductCard";
import HeroSection from "../components/HeroSection";
import FlippingProductGrid from "../components/ProductGrid";
import Whychoose from "../components/Whychoose";
import Newsletter from "../components/Newsletter";


const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      
      <HeroSection />
      <ProductCard />
      <FlippingProductGrid />
      <ProductCard />
      <Whychoose />
      <Testimonial />
      <Newsletter />
      
    </div>
  );
};

export default Home;