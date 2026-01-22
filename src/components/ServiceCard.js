import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
    >
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-500 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {service.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {service.technologies.slice(0, 4).map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/10 text-cyan-500"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        to="/contact"
        className="inline-flex items-center text-cyan-500 hover:text-cyan-600 font-medium transition-colors"
      >
        Get Started
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;