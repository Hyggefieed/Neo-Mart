import React, { useState, useEffect } from 'react';
import { ShoppingCart, Users, Target, Heart, CheckCircle, Star, TrendingUp, Award, Zap, Globe, ArrowRight, Eye, Shield } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '50K+', label: 'Happy Customers', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Shield },
    { number: '24/7', label: 'Support', icon: Heart },
    { number: '1M+', label: 'Products', icon: ShoppingCart }
  ];

  const features = [
    {
      icon: Eye,
      title: 'Customer Vision',
      description: 'We see through our customers\' eyes to understand their true needs and pain points.',
      color: '#2f3f50'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance ensures your shopping experience is smooth and efficient.',
      color: '#4a90e2'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers worldwide with localized experiences and fast shipping.',
      color: '#7b68ee'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Every product goes through rigorous quality checks before reaching you.',
      color: '#ff6b6b'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We hit the mark every time by understanding exactly what our customers need.',
      stat: '98%',
      statLabel: 'Accuracy Rate'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We grow by helping our customers achieve their goals and exceed expectations.',
      stat: '150%',
      statLabel: 'Year-over-Year'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We set the gold standard for e-commerce through continuous improvement.',
      stat: '4.9/5',
      statLabel: 'Customer Rating'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-green-300 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-red-300 rounded-full opacity-30 animate-ping"></div>
      </div>

      {/* Hero Section with Parallax Effect */}
      <section className="relative py-20 px-4 overflow-hidden" style={{ backgroundColor: '#2f3f50' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/3 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div 
            id="animate-hero"
            className={`transition-all duration-1000 ${isVisible['animate-hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              About <span className="relative">
                <span className="text-white">NeoMart</span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-8">
              We're not just revolutionizing e-commerce – we're reimagining what it means to 
              truly serve our customers with innovation, precision, and care.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[120px] hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <stat.icon className="w-6 h-6 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div 
            id="animate-features"
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['animate-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes Us <span style={{ color: '#2f3f50' }}>Different</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built our platform around four core principles that drive everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${isVisible['animate-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl transform group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Mission Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div 
              id="animate-mission"
              className={`transition-all duration-1000 ${isVisible['animate-mission'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our <span style={{ color: '#2f3f50' }}>Mission</span> & Vision
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl" style={{ backgroundColor: '#2f3f50' }}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Client-Centric Innovation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Every feature and decision is made with our customers' success in mind, 
                      ensuring their needs are not just met, but exceeded.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl" style={{ backgroundColor: '#4a90e2' }}>
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Genuine Care</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We treat every customer interaction as an opportunity to build 
                      lasting relationships based on trust and mutual respect.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl" style={{ backgroundColor: '#7b68ee' }}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Promise</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our commitment to excellence means you can shop with confidence, 
                      knowing every product meets our high standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              id="animate-visual"
              className={`transition-all duration-1000 ${isVisible['animate-visual'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <div className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#2f3f50' }}>
                      <ShoppingCart className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Meeting Needs Better</h3>
                    <p className="text-gray-600">Our guiding principle in every decision</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-xl" style={{ backgroundColor: '#f8f9fa' }}>
                      <div className="text-2xl font-bold" style={{ color: '#2f3f50' }}>500+</div>
                      <div className="text-sm text-gray-600">Daily Orders</div>
                    </div>
                    <div className="text-center p-4 rounded-xl" style={{ backgroundColor: '#f8f9fa' }}>
                      <div className="text-2xl font-bold" style={{ color: '#2f3f50' }}>24h</div>
                      <div className="text-sm text-gray-600">Avg. Delivery</div>
                    </div>
                    <div className="text-center p-4 rounded-xl" style={{ backgroundColor: '#f8f9fa' }}>
                      <div className="text-2xl font-bold" style={{ color: '#2f3f50' }}>4.9★</div>
                      <div className="text-sm text-gray-600">Customer Rating</div>
                    </div>
                    <div className="text-center p-4 rounded-xl" style={{ backgroundColor: '#f8f9fa' }}>
                      <div className="text-2xl font-bold" style={{ color: '#2f3f50' }}>95%</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 blur-xl" style={{ backgroundColor: '#2f3f50' }}></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-10 blur-2xl" style={{ backgroundColor: '#2f3f50' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values with Statistics */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div 
            id="animate-values"
            className={`text-center mb-16 transition-all duration-1000 ${isVisible['animate-values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core <span style={{ color: '#2f3f50' }}>Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide our daily operations and long-term vision
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`relative group p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 ${isVisible['animate-values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: '#2f3f50' }}>{value.stat}</div>
                    <div className="text-sm text-gray-500">{value.statLabel}</div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-2xl mb-4" style={{ backgroundColor: '#2f3f50' }}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#2f3f50' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/3 rounded-full blur-2xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div 
            id="animate-cta"
            className={`transition-all duration-1000 ${isVisible['animate-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience the <span className="relative">
                <span className="text-white">Future</span>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 rounded-full"></div>
              </span>?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who've discovered what it means 
              to shop with a platform that truly understands their needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="group relative px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Shopping
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-gray-900"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4" style={{ backgroundColor: '#2f3f50' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">NeoMart</h3>
            <p className="text-gray-300 text-lg mb-6">Where innovation meets customer care</p>
            <div className="flex justify-center gap-8 text-gray-400">
              <span>Premium Quality</span>
              <span>•</span>
              <span>Fast Delivery</span>
              <span>•</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;