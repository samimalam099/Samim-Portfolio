import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, containerVariants, itemVariants } from '../utils/animations'
import profileImage from '../assets/profile.jpeg'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-dark-bg/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-indigo-600 rounded-2xl opacity-20 blur-2xl" />
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-full h-full object-cover rounded-2xl glass"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a full-stack developer with a passion for creating beautiful and functional web applications. 
              With over 5 years of experience in web development, I've had the opportunity to work with various 
              technologies and collaborate with talented teams.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              My journey in tech started with curiosity and a desire to solve real-world problems through code. 
              I'm constantly learning new technologies and best practices to stay ahead in this ever-evolving field.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Years Experience', value: '5+' },
                { label: 'Projects Completed', value: '30+' },
                { label: 'Happy Clients', value: '20+' },
                { label: 'Technologies', value: '15+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass p-4 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="inline-block px-8 py-3 bg-accent hover:bg-accent-dark text-slate-900 font-bold rounded-lg transition-colors mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
