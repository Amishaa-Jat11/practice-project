import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaGraduationCap, FaHeart } from 'react-icons/fa';

const Career = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    experience: '',
    resume: null
  });

  const benefits = [
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: "Collaborative Environment",
      description: "Work with talented professionals in a supportive team atmosphere"
    },
    {
      icon: <FaLightbulb className="text-4xl text-emerald-600" />,
      title: "Innovation Focus",
      description: "Be part of cutting-edge projects and emerging technologies"
    },
    {
      icon: <FaGraduationCap className="text-4xl text-slate-600" />,
      title: "Continuous Learning",
      description: "Professional development opportunities and skill enhancement programs"
    },
    {
      icon: <FaHeart className="text-4xl text-blue-500" />,
      title: "Work-Life Balance",
      description: "Flexible schedules, remote work options, and comprehensive benefits"
    }
  ];

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time"
    },
    {
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "San Francisco",
      type: "Full-time"
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "San Francisco",
      type: "Full-time"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will review it and get back to you soon.');
    setFormData({ name: '', email: '', position: '', experience: '', resume: null });
    setShowForm(false);
  };

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of an innovative team that's shaping the future of technology. We're always looking for talented individuals who share our passion for excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg p-6 text-center shadow-lg"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg mb-12"
        >
          <h3 className="text-3xl font-semibold text-center mb-8">Open Positions</h3>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="border border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {position.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>📍 {position.location}</span>
                      <span>🏢 {position.department}</span>
                      <span>⏰ {position.type}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowForm(true)}
                    className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Don't see the right position?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always interested in meeting talented individuals. Send us your resume and let us know how you'd like to contribute to our team.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Send General Application
          </motion.button>
        </motion.div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
            >
              <h3 className="text-2xl font-semibold mb-6">Apply for Position</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position of Interest
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    {openPositions.map((pos, index) => (
                      <option key={index} value={pos.title}>{pos.title}</option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g., 3-5 years"
                  />
                </div>
                
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Career;