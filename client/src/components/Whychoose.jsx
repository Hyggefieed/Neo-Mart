import React from 'react';
import { Truck, Shield, Headphones, Award } from "lucide-react";

const Whychoose = () => {
  return (
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
          ].map((feature, index) => (
            <div key={index} className="text-center group">
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
  );
};

export default Whychoose;