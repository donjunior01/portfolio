import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { personalInfo, education, experience, activities, interests, spokenLanguages } from '../utils/constants';

const About = () => {
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
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get to know more about my journey, experience, and passion for software development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur-3xl opacity-20"></div>
                <div className="relative glass-card rounded-2xl p-8 flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="text-8xl mb-4">👨‍💻</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {personalInfo.name}
                    </h3>
                    <p className="text-cyan-500 font-semibold">{personalInfo.role.split('|')[0].trim()}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I'm a passionate 4th-year Software Engineering student at {personalInfo.school}, 
                  with a strong foundation in full-stack development and a keen interest in emerging technologies.
                </p>
                <p>
                  My journey in software development has been driven by curiosity and a desire to create 
                  impactful solutions. With hands-on experience in IT support and commercial operations, 
                  I bring a unique perspective that combines technical expertise with business understanding.
                </p>
                <p>
                  I'm particularly interested in machine learning, robotics, and cryptography, and I'm 
                  constantly expanding my knowledge in these areas. My goal is to leverage technology to 
                  solve real-world problems and contribute to innovative projects that make a difference.
                </p>
              </div>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary mt-6"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Education
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                    🎓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-500 font-semibold mb-1">{edu.institution}</p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Experience
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-cyan-500 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-cyan-500/10 text-cyan-500">
                      {exp.type}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Interests */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Activities */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Activities
              </h2>
              <div className="space-y-3">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="glass-card flex items-center space-x-3"
                  >
                    <span className="text-2xl">🏆</span>
                    <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Interests
              </h2>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 glass-card text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Languages
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {spokenLanguages.map((lang, index) => (
                <div
                  key={index}
                  className="glass-card text-center min-w-[150px]"
                >
                  <div className="text-3xl mb-2">🗣️</div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    {lang.name}
                  </h3>
                  <p className="text-cyan-500 text-sm font-semibold">{lang.level}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;