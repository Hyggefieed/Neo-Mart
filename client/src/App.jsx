import React from 'react';
import { ShoppingCart, Star, Truck, Shield, Headphones, Award, ArrowRight, Mail } from 'lucide-react';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b" style={{ borderColor: '#656565' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ShoppingCart className="w-8 h-8" style={{ color: '#A6D3A0' }} />
              <span className="ml-2 text-xl font-bold" style={{ color: '#656565' }}>NeoMart</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Products</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Categories</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-700 hover:text-gray-900">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs text-white flex items-center justify-center" style={{ backgroundColor: '#A6D3A0' }}>3</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20" style={{ backgroundColor: '#D1FFD7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#656565' }}>
              Discover Premium Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: '#808782' }}>
              Curated collection of exceptional items for your modern lifestyle
            </p>
            <button className="px-8 py-4 text-lg font-semibold text-white rounded-lg hover:opacity-90 transition-opacity flex items-center mx-auto" style={{ backgroundColor: '#A6D3A0' }}>
              Shop Now <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#656565' }}>Featured Products</h2>
            <p className="text-xl" style={{ color: '#808782' }}>Handpicked favorites from our collection</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Premium Wireless Headphones', price: '$299', rating: 4.9, image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Smart Fitness Watch', price: '$199', rating: 4.8, image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Eco-Friendly Water Bottle', price: '$49', rating: 4.7, image: 'https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg?auto=compress&cs=tinysrgb&w=400' }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow" style={{ borderColor: '#808782' }}>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#656565' }}>{product.name}</h3>
                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 fill-current" style={{ color: '#A6D3A0' }} />
                    <span className="ml-1 text-sm" style={{ color: '#808782' }}>{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold" style={{ color: '#656565' }}>{product.price}</span>
                    <button className="px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#B3FFB3' }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20" style={{ backgroundColor: '#D1FFD7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#656565' }}>Shop by Category</h2>
            <p className="text-xl" style={{ color: '#808782' }}>Find exactly what you're looking for</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Electronics', icon: '📱', count: '120+ items' },
              { name: 'Fashion', icon: '👔', count: '85+ items' },
              { name: 'Home & Garden', icon: '🏠', count: '200+ items' },
              { name: 'Sports', icon: '⚽', count: '150+ items' }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#656565' }}>{category.name}</h3>
                <p className="text-sm" style={{ color: '#808782' }}>{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#656565' }}>Why Choose NeoMart?</h2>
            <p className="text-xl" style={{ color: '#808782' }}>Experience the difference with our premium service</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Free Shipping', description: 'On orders over $100' },
              { icon: Shield, title: 'Secure Payment', description: '100% secure checkout' },
              { icon: Headphones, title: '24/7 Support', description: 'Always here to help' },
              { icon: Award, title: 'Premium Quality', description: 'Only the best products' }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#A6D3A0' }}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#656565' }}>{feature.title}</h3>
                <p style={{ color: '#808782' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20" style={{ backgroundColor: '#B3FFB3' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#656565' }}>Stay Updated</h2>
          <p className="text-xl mb-8" style={{ color: '#808782' }}>Get the latest deals and product updates delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ borderColor: '#808782', focusRingColor: '#A6D3A0' }}
              />
            </div>
            <button className="px-6 py-3 bg-white text-black rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center" style={{ color: '#656565' }}>
              <Mail className="w-5 h-5 mr-2" />
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#656565' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <ShoppingCart className="w-8 h-8" style={{ color: '#A6D3A0' }} />
                <span className="ml-2 text-xl font-bold text-white">NeoMart</span>
              </div>
              <p className="text-gray-300">Your premium destination for quality products and exceptional service.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Electronics</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Fashion</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Home & Garden</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Sports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Return Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-300">&copy; 2025 NeoMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;