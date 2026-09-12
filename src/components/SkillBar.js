import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`mb-6 ${skill.inProgress ? 'opacity-70' : ''}`}
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
          {skill.name}
          {skill.inProgress && (
            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30">
              In Progress
            </span>
          )}
        </span>
        <span className="text-cyan-500 font-semibold">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
          className={`h-full rounded-full ${
            skill.inProgress
              ? 'bg-gradient-to-r from-amber-400 to-amber-500'
              : 'bg-gradient-to-r from-cyan-500 to-blue-600'
          }`}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;