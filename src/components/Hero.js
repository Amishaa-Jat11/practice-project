import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCalculator, FaRobot, FaPlane } from 'react-icons/fa';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Partner logos for trusted by section
  const partnerLogos = [
    { name: "TechCorp", logo: "🏢" },
    { name: "InnovateLab", logo: "🔬" },
    { name: "AgriTech Solutions", logo: "🌱" },
    { name: "DataFlow Systems", logo: "📊" },
    { name: "CloudSync", logo: "☁️" },
    { name: "AI Dynamics", logo: "🤖" }
  ];
  const features = [
    {
      icon: "✅",
      title: "Smart HR",
      description: "AI-powered HR Automation Platform"
    },
    {
      icon: "💼",
      title: "NextBook",
      description: "Intelligent Accounting Solution"
    },
    {
      icon: "🤖",
      title: "AI & Analytics Solutions",
      description: "Smart Decision-Making with AI Insights"
    },
    {
      icon: "🌾",
      title: "AgriTech Drone Innovation",
      description: "Empowering Farmers with Smart AgriTech"
    },
    {
      icon: "🔒",
      title: "Data Security & Compliance",
      description: "Enterprise-grade Protection"
    }
  ];

  return (
    <>
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Hero Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1920&h=1080&fit=crop"
        >
          <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/6153354/6153354-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
        {/* Video Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-emerald-800/70"></div>
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-56 relative z-10">
        <div className="text-center">
          {/* Main Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl text-center"
          >
            Empowering Businesses with{' '}
            <span className="block bg-gradient-to-r from-blue-300 to-emerald-300 bg-clip-text text-transparent">
              Intelligent Automation
            </span>
            <span className="block text-2xl md:text-3xl font-medium mt-2 text-blue-200">
              From Human to AI
            </span>
          </motion.h1>
          
          {/* Company Name */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-emerald-300 mb-8 font-semibold tracking-wide drop-shadow-lg"
          >
            Next Sphere Product and Technology
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl border-2 border-white/20"
            >
              🚀 Explore Our Solutions
            </motion.button>
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/60 text-white px-10 py-4 rounded-full font-semibold text-lg backdrop-blur-sm"
            >
              💬 Request a Demo
            </motion.button>
          </motion.div>

          {/* Company Intro */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-blue-100 mb-16 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light text-center"
          >
            We are a next-generation technology company building integrated solutions in AI and ML — helping organizations automate operations, boost efficiency, and scale smartly.
          </motion.p>


          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-white/70 cursor-pointer"
            >
              <span className="text-sm font-medium mb-2">Enter Website</span>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-3 bg-white/70 rounded-full mt-2"
                ></motion.div>
              </div>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-2xl mt-2"
              >
                ↓
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Key Features Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Key Features & Highlights
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)"
              }}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-lg cursor-pointer hover:border-blue-200 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos Slider Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-200 overflow-hidden"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Trusted By / Partner Companies</h3>
          <div className="relative">
            <div className="flex animate-scroll space-x-8">
              {/* First set of logos */}
              {partnerLogos.map((partner, index) => (
                <motion.div
                  key={`first-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 flex flex-col items-center p-4 bg-white rounded-xl shadow-md cursor-pointer border border-gray-100 hover:border-blue-200 transition-all duration-300 min-w-[120px]"
                >
                  <span className="text-3xl mb-2">{partner.logo}</span>
                  <span className="text-sm font-medium text-gray-600 text-center">{partner.name}</span>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partnerLogos.map((partner, index) => (
                <motion.div
                  key={`second-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 flex flex-col items-center p-4 bg-white rounded-xl shadow-md cursor-pointer border border-gray-100 hover:border-blue-200 transition-all duration-300 min-w-[120px]"
                >
                  <span className="text-3xl mb-2">{partner.logo}</span>
                  <span className="text-sm font-medium text-gray-600 text-center">{partner.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Quick Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "10+", label: "Clients" },
              { number: "5+", label: "Farmers Network" },
              { number: "15+", label: "Business Teams" },
              { number: "3", label: "Smart Platforms" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
              >
                <h4 className="text-3xl font-bold mb-2">{stat.number}</h4>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Hero;