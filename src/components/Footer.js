import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#careers' }
  ];

  const services = [
    'Smart HR Automation',
    'NextBook Accounting',
    'NextSphere AI',
    'AgriDrone / AgriTech',
    'AI & Analytics Solutions',
    'Intelligent Automation'
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
    { icon: FaLinkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: FaYoutube, href: '#', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.h3 
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
            >
              Next Sphere Product & Technology
            </motion.h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Empowering Businesses with Intelligent Automation — From Human to AI. 
              We are a next-generation technology company building integrated solutions in AI and ML.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  <social.icon size={20} className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-blue-300">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-emerald-300">Contact Info</h4>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center group"
              >
                <div className="bg-blue-600 p-2 rounded-lg mr-3 group-hover:bg-blue-500 transition-colors">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <span className="text-gray-300">info@nextsphere.co.in</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center group"
              >
                <div className="bg-emerald-600 p-2 rounded-lg mr-3 group-hover:bg-emerald-500 transition-colors">
                  <FaPhone className="text-white text-sm" />
                </div>
                <span className="text-gray-300">+91-90780 27948</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start group"
              >
                <div className="bg-slate-600 p-2 rounded-lg mr-3 mt-0.5 group-hover:bg-slate-500 transition-colors">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <span className="text-gray-300">
                  Gurgaon, Haryana, India
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>



        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0 font-medium">
              © 2025 Next Sphere Product & Technology. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <motion.a 
                whileHover={{ y: -2 }}
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                whileHover={{ y: -2 }}
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;