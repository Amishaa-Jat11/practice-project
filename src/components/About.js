import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye, FaUsers } from 'react-icons/fa';

const About = () => {
  const team = [
    {
      name: "Tushar Rout",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emily Davis",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-900 via-slate-900 to-emerald-900 relative overflow-hidden scroll-mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-400 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We are a next-generation technology company building integrated solutions in AI and ML — helping organizations automate operations, boost efficiency, and scale smartly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="relative text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg border border-blue-200 overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <FaEye className="text-6xl text-blue-600 mx-auto mb-6 drop-shadow-lg" />
            </motion.div>
            <h3 className="relative z-10 text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
            <p className="relative z-10 text-gray-700 leading-relaxed">
              To revolutionize business operations with smart, automated, and data-driven solutions accessible to everyone — from startups to enterprises.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.05,
              rotateY: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-100 rounded-2xl shadow-lg border border-emerald-200 overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <FaBullseye className="text-6xl text-emerald-600 mx-auto mb-6 drop-shadow-lg" />
            </motion.div>
            <h3 className="relative z-10 text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
            <p className="relative z-10 text-gray-700 leading-relaxed">
              We aim to bridge the gap between technology and real-world challenges — empowering businesses, innovators, and industries through intelligent ecosystems.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-10 mb-16 shadow-xl border border-gray-100 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h3 className="relative z-10 text-3xl font-bold text-center mb-8 text-gray-800">Founder's Message</h3>
          <p className="relative z-10 text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed mb-6">
            "At Next Sphere, we believe technology should be a catalyst for positive change. Our journey began with a simple vision: 
            to create intelligent automation solutions that not only meet today's challenges but anticipate tomorrow's opportunities. 
            Every AI model we build, every automation we design, is crafted with our clients' success in mind."
          </p>
          <p className="relative z-10 text-center font-bold text-blue-600 text-lg">-Tushar Rout, CEO & Founder</p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-center mb-12 text-white">Our Team</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: 10,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative text-center bg-white rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg group-hover:border-emerald-200 transition-colors duration-300"
                  />
                </motion.div>
                <h4 className="relative z-10 text-xl font-bold mb-2 text-gray-800">{member.name}</h4>
                <p className="relative z-10 text-emerald-600 font-medium">{member.role}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;