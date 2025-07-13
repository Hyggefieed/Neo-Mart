import React from 'react';
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
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
  );
};

export default Newsletter;