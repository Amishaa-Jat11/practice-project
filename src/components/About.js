import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye, FaUsers } from 'react-icons/fa';

const About = () => {
  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About NSPT</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a forward-thinking technology company dedicated to transforming businesses through innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <FaEye className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Vision</h3>
            <p className="text-gray-600">
              To be the leading provider of innovative technology solutions that empower businesses to achieve their full potential in the digital age.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <FaBullseye className="text-5xl text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Mission</h3>
            <p className="text-gray-600">
              To deliver cutting-edge software solutions, AI tools, and technology services that drive efficiency, innovation, and growth for our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center p-6"
          >
            <FaUsers className="text-5xl text-slate-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Values</h3>
            <p className="text-gray-600">
              Innovation, integrity, excellence, and customer-centricity guide everything we do as we build lasting partnerships with our clients.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-8 mb-16"
        >
          <h3 className="text-3xl font-semibold text-center mb-6">Founder's Message</h3>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            "At NSPT, we believe technology should be a catalyst for positive change. Our journey began with a simple vision: 
            to create solutions that not only meet today's challenges but anticipate tomorrow's opportunities. 
            Every line of code we write, every solution we design, is crafted with our clients' success in mind."
          </p>
          <p className="text-center mt-4 font-semibold text-blue-600">- John Smith, CEO & Founder</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold text-center mb-12">Our Team</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white rounded-lg p-6 shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                <p className="text-emerald-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;