import React from 'react';
import { motion } from 'framer-motion';

const Career = () => {
  const departments = [
    "Tech",
    "HR", 
    "Accounts",
    "Operations",
    "Agri Research"
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">We're building the future — Join us!</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encourage visitors to become part of the Next Sphere journey by joining a forward-thinking, AI-driven tech company.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg mb-12"
        >
          <h3 className="text-3xl font-semibold text-center mb-8">Current Openings</h3>
          <p className="text-center text-gray-600 mb-8">(can link to HR email or a form)</p>
          
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-6 text-center">Departments:</h4>
            <div className="grid md:grid-cols-5 gap-6">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.08,
                    y: -5,
                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)"
                  }}
                  className="relative bg-gradient-to-br from-white via-blue-50 to-emerald-50 text-center py-6 px-6 rounded-xl border border-gray-200 shadow-lg overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-200/30 to-emerald-200/30 rounded-full blur-xl transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-500"></div>
                  <span className="relative z-10 font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 text-lg">{dept}</span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Future Talent Pipeline</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            "Even if we're not hiring right now, drop your resume — we'll reach out when roles open."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Submit Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Join Talent Pool
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Career;