import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCalculator, FaRobot, FaPlane } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaUsers className="text-5xl text-blue-600" />,
      title: "HR Software (Cloud + App)",
      description: "AI-powered HR Automation Platform with attendance automation, punch-in/out sync, payroll, leave tracker, performance reports.",
      features: ["Attendance Automation", "Punch-in/out Sync", "Payroll Processing", "Performance Reports"],
      cta: "View Demo / Request Access"
    },
    {
      icon: <FaCalculator className="text-5xl text-emerald-600" />,
      title: "Accounting App (NextBook)",
      description: "Automatic End to End Bookkeeping Using AI, GST Filing, TDS Return, Auto Reconciliation, Balance Sheet Finalise.",
      features: ["GST Filing", "TDS Return", "Auto Reconciliation", "Balance Sheet Finalise"],
      cta: "View Dashboard / Learn More"
    },
    {
      icon: <FaRobot className="text-5xl text-slate-600" />,
      title: "AI Tools (NextSphere AI)",
      description: "Predictive analytics, chatbot automation, AI forecasting, sentiment analysis.",
      features: ["Predictive Analytics", "Chatbot Automation", "AI Forecasting", "Sentiment Analysis"],
      cta: "Explore AI Suite"
    },
    {
      icon: <FaPlane className="text-5xl text-blue-500" />,
      title: "AgriTech / Drone Solutions",
      description: "Drone mapping, soil analysis, crop tracking, smart irrigation.",
      features: ["Drone Mapping", "Soil Analysis", "Crop Tracking", "Smart Irrigation"],
      cta: "Explore Agri Innovation"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50 relative overflow-hidden scroll-mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-200 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0 }
              }}
              className="relative bg-gradient-to-br from-white via-blue-50 to-emerald-50 rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden group cursor-pointer"
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200/30 to-emerald-200/30 rounded-full blur-xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-xl transform -translate-x-8 translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              <motion.div 
                className="relative z-10 flex justify-center mb-6"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-4 bg-white rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {service.icon}
                </div>
              </motion.div>
              <h3 className="relative z-10 text-2xl font-bold text-center mb-4 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative z-10 text-gray-600 text-center mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
              <div className="relative z-10 space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex} 
                    className="flex items-center p-2 rounded-lg group-hover:bg-white/50 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (featureIndex * 0.1) }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mr-3 shadow-sm"
                      whileHover={{ scale: 1.5 }}
                    ></motion.div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
                  background: "linear-gradient(135deg, #3B82F6 0%, #10B981 100%)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 rounded-xl font-semibold shadow-lg overflow-hidden group/btn"
              >
                <span className="relative z-10">{service.cta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Services;