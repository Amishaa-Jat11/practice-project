import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaCogs } from 'react-icons/fa';

const Hero = () => {
  const features = [
    {
      icon: <FaRocket className="text-4xl text-primary-500" />,
      title: "Innovation",
      description: "Cutting-edge technology solutions"
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary-500" />,
      title: "Creativity",
      description: "Creative problem-solving approach"
    },
    {
      icon: <FaCogs className="text-4xl text-primary-500" />,
      title: "Efficiency",
      description: "Streamlined business processes"
    }
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-700 to-secondary-600 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Next-Gen Tech
            <span className="block text-primary-200">Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto"
          >
            Empowering businesses with innovative software solutions, AI tools, and cutting-edge technology
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button className="bg-white text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-colors">
              Learn More
            </button>
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
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-200">
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