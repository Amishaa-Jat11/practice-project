import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaCogs } from 'react-icons/fa';

const Hero = () => {
  const features = [
    {
      icon: <FaRocket className="text-4xl text-blue-400" />,
      title: "Innovation",
      description: "Cutting-edge technology solutions"
    },
    {
      icon: <FaLightbulb className="text-4xl text-emerald-400" />,
      title: "Creativity",
      description: "Creative problem-solving approach"
    },
    {
      icon: <FaCogs className="text-4xl text-slate-400" />,
      title: "Efficiency",
      description: "Streamlined business processes"
    }
  ];

  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-700 flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
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
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
             Empowering businesses with innovative software solutions, AI tools, and cutting-edge technology that transforms ideas into reality
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
               Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm hover:border-white transition-all duration-300"
            >
               Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
               
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderColor: "rgba(59, 130, 246, 0.8)",
                  transition: { duration: 0 }
                }}
                transition={{ delay: 0 + index * 0.2, duration: 0 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center border border-white/20 shadow-xl"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-blue-200">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;