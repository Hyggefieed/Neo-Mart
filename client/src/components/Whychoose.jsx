import React from 'react';
import { Truck, Shield, Headphones, Award } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $100",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure checkout",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here to help",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the best products",
  },
];

const Whychoose = () => {
  return (
    <section className="py-20 bg-[#2f3f50]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Why Choose NeoMart?
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Experience excellence with our commitment to quality and service
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-xl border border-[#e3e6e9] shadow-sm px-6 py-10 transition duration-200 hover:shadow-md"
            >
              <div className="w-14 h-14 mb-5 flex items-center justify-center rounded-full border-2 border-[#2f3f50] bg-white">
                <feature.icon className="w-7 h-7 text-[#2f3f50]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2f3f50] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
