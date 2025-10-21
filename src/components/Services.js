import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCalculator, FaRobot, FaPlane } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaUsers className="text-5xl text-blue-600" />,
      title: "HR Software",
      description: "AI-powered HR Automation Platform with attendance automation, punch-in/out sync, payroll, leave tracker, performance reports.",
      features: ["Attendance Automation", "Punch-in/out Sync", "Payroll Processing", "Leave Tracker"],
      cta: "View Demo / Request Access"
    },
    {
      icon: <FaCalculator className="text-5xl text-emerald-600" />,
      title: "NextBook (Accounting App)",
      description: "Automatic End to End Bookkeeping Using AI with GST Filing, TDS Return, Auto Reconciliation, Balance Sheet Finalise.",
      features: ["GST Filing", "TDS Return", "Auto Reconciliation", "Balance Sheet Finalise"],
      cta: "Get Free Trial"
    },
    {
      icon: <FaRobot className="text-5xl text-slate-600" />,
      title: "NextSphere AI",
      description: "AI & Analytics Solutions with predictive analytics, chatbot automation, AI forecasting, sentiment analysis.",
      features: ["Predictive Analytics", "Chatbot Automation", "AI Forecasting", "Sentiment Analysis"],
      cta: "Explore AI Solutions"
    },
    {
      icon: <FaPlane className="text-5xl text-blue-500" />,
      title: "AgriDrone / AgriTech",
      description: "Drone-based AgriTech Solutions with drone mapping, soil analysis, crop tracking, smart irrigation.",
      features: ["Drone Mapping", "Soil Analysis", "Crop Tracking", "Smart Irrigation"],
      cta: "Learn AgriTech"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {service.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-600 mb-6">
            We specialize in creating tailored technology solutions that fit your unique business requirements.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Contact Us for Custom Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;