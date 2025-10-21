import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCalculator, FaRobot, FaPlane } from 'react-icons/fa';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop', // Office team
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop', // Analytics dashboard
    'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1920&h=1080&fit=crop', // AI technology
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=1080&fit=crop', // Agriculture drone
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop'  // Digital innovation
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  const features = [
    {
      icon: <FaUsers className="text-4xl text-blue-400" />,
      title: "Smart HR",
      description: "AI-powered HR Automation Platform"
    },
    {
      icon: <FaCalculator className="text-4xl text-emerald-400" />,
      title: "NextBook",
      description: "AI-powered Accounting Solution"
    },
    {
      icon: <FaRobot className="text-4xl text-slate-400" />,
      title: "AI & Analytics",
      description: "Smart Decision-Making with AI Insights"
    },
    {
      icon: <FaPlane className="text-4xl text-blue-500" />,
      title: "AgriTech Drone",
      description: "Empowering Farmers with Smart AgriTech"
    }
  ];

  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Hero Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1.05 : 1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img 
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover blur-sm"
            />
          </motion.div>
        ))}
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-emerald-800/60"></div>
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-56 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
          >
            Next Sphere Product &{' '}
            <span className="block text-blue-300">
              Technology
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium"
          >
            Empowering Businesses with Intelligent Automation — From Human to AI. We are a next-generation technology company building integrated solutions in AI and ML — helping organizations automate operations, boost efficiency, and scale smartly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button 
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                background: "linear-gradient(135deg, #3B82F6 0%, #10B981 50%, #06B6D4 100%)"
              }}
              whileTap={{ scale: 0.92 }}
              animate={{
                boxShadow: [
                  "0 10px 25px rgba(59, 130, 246, 0.3)",
                  "0 15px 35px rgba(16, 185, 129, 0.4)",
                  "0 10px 25px rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Our Solutions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            <motion.button 
              whileHover={{ 
                scale: 1.08, 
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderColor: "rgba(255, 255, 255, 1)",
                boxShadow: "0 15px 30px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.92 }}
              className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 relative group overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-blue-900 transition-colors duration-300">Request a Demo</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-4 gap-6 mt-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderColor: "rgba(59, 130, 246, 1)",
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.15, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  delay: 1.2 + index * 0.15, 
                  duration: 0.15,
                  ease: "easeOut"
                }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center border border-white/20 shadow-xl cursor-pointer group"
              >
                <motion.div 
                  className="flex justify-center mb-4"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300 drop-shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 + index * 0.15 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-200 group-hover:text-white transition-colors duration-300 drop-shadow-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 + index * 0.15 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, staggerChildren: 0.2 }}
            >
              {[
                { number: "10+", label: "Clients" },
                { number: "5+", label: "Farmers Network" },
                { number: "15+", label: "Business Teams" },
                { number: "3", label: "Smart Platforms" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 2.4 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group cursor-pointer"
                >
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg group-hover:text-emerald-300 transition-colors duration-300"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(16, 185, 129, 0.5)",
                        "0 0 20px rgba(16, 185, 129, 0.8)",
                        "0 0 10px rgba(16, 185, 129, 0.5)"
                      ]
                    }}
                    transition={{
                      textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors duration-300 drop-shadow-md">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;