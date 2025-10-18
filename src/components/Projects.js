import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise HR Platform",
      description: "Complete HR management system for a Fortune 500 company with 10,000+ employees",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      category: "HR Software"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time business intelligence platform with machine learning insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      category: "AI Tools"
    },
    {
      title: "Automated Accounting Suite",
      description: "Cloud-based accounting solution with automated invoice processing and tax compliance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
      category: "Accounting"
    },
    {
      title: "Drone Fleet Management",
      description: "Comprehensive drone monitoring and control system for logistics company",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=300&fit=crop",
      technologies: ["IoT", "React Native", "Firebase", "GPS"],
      category: "Drones"
    },
    {
      title: "Smart City Infrastructure",
      description: "IoT-based city management platform with real-time monitoring and analytics",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=500&h=300&fit=crop",
      technologies: ["IoT", "Angular", "Node.js", "InfluxDB"],
      category: "Smart Solutions"
    },
    {
      title: "E-commerce AI Assistant",
      description: "Intelligent chatbot and recommendation system for online retail platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["NLP", "React", "Python", "Redis"],
      category: "AI Tools"
    }
  ];

  const clients = [
    { name: "TechCorp", logo: "https://via.placeholder.com/150x80/3B82F6/FFFFFF?text=TechCorp" },
    { name: "InnovateLab", logo: "https://via.placeholder.com/150x80/6366F1/FFFFFF?text=InnovateLab" },
    { name: "DataSystems", logo: "https://via.placeholder.com/150x80/8B5CF6/FFFFFF?text=DataSystems" },
    { name: "CloudTech", logo: "https://via.placeholder.com/150x80/06B6D4/FFFFFF?text=CloudTech" },
    { name: "AI Solutions", logo: "https://via.placeholder.com/150x80/10B981/FFFFFF?text=AI+Solutions" },
    { name: "SmartCity", logo: "https://via.placeholder.com/150x80/F59E0B/FFFFFF?text=SmartCity" }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our successful implementations and innovative solutions across various industries
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
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  View Details <FaExternalLinkAlt className="ml-2" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-center mb-12">Trusted by Leading Companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;