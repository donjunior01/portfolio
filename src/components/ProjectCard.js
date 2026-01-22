import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">
            {project.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
        <span className="ml-4 px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-500 flex-shrink-0">
          {project.source}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.language && (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-500">
            {project.language}
          </span>
        )}
        {project.topics && project.topics.slice(0, 3).map((topic, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-500"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{project.stars}</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{project.forks}</span>
          </span>
        </div>
        <span className="text-xs">
          Updated {formatDate(project.updated)}
        </span>
      </div>

      <div className="flex space-x-3">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2 px-4 bg-cyan-500/10 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 font-medium"
        >
          View Code
        </a>
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 px-4 bg-blue-500/10 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;