import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCalculator, FaRobot, FaPlane } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaUsers className="text-5xl text-primary-500" />,
      title: "HR Software",
      description: "Comprehensive human resource management solutions with employee tracking, payroll, and performance analytics.",
      features: ["Employee Management", "Payroll Processing", "Performance Tracking", "Leave Management"]
    },
    {
      icon: <FaCalculator className="text-5xl text-primary-500" />,
      title: "Accounting App",
      description: "Advanced accounting software for financial management, invoicing, and real-time business insights.",
      features: ["Financial Reporting", "Invoice Management", "Tax Compliance", "Budget Planning"]
    },
    {
      icon: <FaRobot className="text-5xl text-primary-500" />,
      title: "AI Tools",
      description: "Cutting-edge artificial intelligence solutions for automation, data analysis, and predictive modeling.",
      features: ["Machine Learning", "Data Analytics", "Process Automation", "Predictive Insights"]
    },
    {
      icon: <FaPlane className="text-5xl text-primary-500" />,
      title: "Drones",
      description: "Professional drone solutions for surveillance, mapping, delivery, and industrial applications.",
      features: ["Aerial Surveillance", "Mapping & Survey", "Delivery Services", "Industrial Inspection"]
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
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
              className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
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
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
              >
                Learn More
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
            className="bg-secondary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors"
          >
            Contact Us for Custom Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;