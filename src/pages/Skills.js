import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../utils/constants';
import SkillBar from '../components/SkillBar';

const Skills = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and competencies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programming Languages */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
              Programming Languages
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              Languages I use to bring ideas to life
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {skills.languages.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
              Frameworks & Libraries
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              Modern frameworks for building scalable applications
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {skills.frameworks.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Databases */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
              Databases
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              Database systems for efficient data management
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {skills.databases.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
              Tools & Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              Development tools I use daily
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {skills.tools.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Competencies */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 text-center">
              Core Competencies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
              Key areas of expertise and professional skills
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {skills.competencies.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section-padding bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              Continuous Learning
            </h2>
            <p className="text-xl text-cyan-50 mb-8">
              I'm constantly expanding my skill set and staying up-to-date with the latest 
              technologies and best practices in software development. My passion for learning 
              drives me to explore new areas like machine learning, robotics, and cryptography.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="glass-card bg-white/10 backdrop-blur-md">
                <div className="text-4xl mb-2">🎯</div>
                <h3 className="font-bold mb-1">Problem Solving</h3>
                <p className="text-sm text-cyan-50">Analytical thinking</p>
              </div>
              <div className="glass-card bg-white/10 backdrop-blur-md">
                <div className="text-4xl mb-2">🚀</div>
                <h3 className="font-bold mb-1">Innovation</h3>
                <p className="text-sm text-cyan-50">Creative solutions</p>
              </div>
              <div className="glass-card bg-white/10 backdrop-blur-md">
                <div className="text-4xl mb-2">🤝</div>
                <h3 className="font-bold mb-1">Collaboration</h3>
                <p className="text-sm text-cyan-50">Team player</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;