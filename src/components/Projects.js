import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "NextBook Accounting",
      description: "Automated accounting platform for MSMEs",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=300&fit=crop", // Accounting/finance dashboard
      technologies: ["Python", "Django", "Power BI"],
      category: "Live"
    },
    {
      title: "HR Portal",
      description: "Attendance + Payroll Automation",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=300&fit=crop", // HR/team management
      technologies: ["Flutter", "Node.js"],
      category: "In Testing"
    },
    {
      title: "AgriDrone Project",
      description: "Drone-based crop monitoring in Odisha",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=300&fit=crop", // Agricultural drone/farming
      technologies: ["AI", "IoT"],
      category: "Pilot Phase"
    }
  ];



  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-emerald-50 relative overflow-hidden scroll-mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-16 w-64 h-64 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-80 h-80 bg-emerald-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-slate-300 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our AI-powered solutions: 10+ Clients | 5+ Farmers Network | 15+ Business Teams | 3 Smart Platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0 }
              }}
              className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group cursor-pointer"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-200/30 to-emerald-200/30 rounded-full blur-xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div 
                  className="absolute top-4 right-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                    {project.category}
                  </span>
                </motion.div>
                {/* Floating icon */}
                <motion.div 
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                    <FaExternalLinkAlt className="text-blue-600" />
                  </div>
                </motion.div>
              </div>
              
              <div className="relative z-10 p-6">
                <motion.h3 
                  className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 group-hover:border-blue-300 transition-colors duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: (index * 0.1) + (techIndex * 0.1) }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    x: 5,
                    color: "#059669"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors duration-300"
                >
                  View Details 
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="ml-2"
                  >
                    <FaExternalLinkAlt />
                  </motion.div>
                </motion.button>
              </div>
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;