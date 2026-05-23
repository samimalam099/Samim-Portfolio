import React from 'react'
import { motion } from 'framer-motion'
import { EXPERIENCE } from '../constants/data'
import { containerVariants, itemVariants, slideInFromLeft, slideInFromRight } from '../utils/animations'

const ExperienceCard = ({ experience, index }) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      variants={isEven ? slideInFromLeft : slideInFromRight}
      className={`flex gap-6 ${isEven ? 'flex-row' : 'flex-row-reverse'} items-start`}
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-4 h-4 bg-accent rounded-full mt-2 relative z-10"
          whileHover={{ scale: 1.5 }}
          animate={{ boxShadow: ['0 0 0 0 rgba(14, 165, 233, 0.7)', '0 0 0 10px rgba(14, 165, 233, 0)'] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        {index < EXPERIENCE.length - 1 && (
          <motion.div
            className="w-1 h-24 bg-gradient-to-b from-accent to-transparent mt-2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        )}
      </div>

      {/* Content Card */}
      <motion.div
        className="glass p-6 rounded-lg flex-1 mb-8"
        whileHover={{
          boxShadow: '0 0 30px rgba(14, 165, 233, 0.2)',
          borderColor: 'rgb(14, 165, 233)',
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <h3 className="text-xl font-bold gradient-text">{experience.position}</h3>
          <span className="text-sm text-accent font-semibold">{experience.duration}</span>
        </div>

        <p className="text-slate-400 font-medium mb-3">{experience.company}</p>
        <p className="text-slate-300 mb-4">{experience.description}</p>

        {/* Achievements */}
        <div className="space-y-2">
          {experience.achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-2 text-slate-400 text-sm"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <span className="text-accent mt-1">✓</span>
              <span>{achievement}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-accent mx-auto" />
          <motion.p variants={itemVariants} className="text-slate-400 mt-6 text-lg">
            Professional journey and career milestones
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4"
        >
          {EXPERIENCE.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: '📚', title: 'Continuous Learning', desc: 'Always updating skills with latest tech' },
            { icon: '🤝', title: 'Team Player', desc: 'Collaborated with diverse teams' },
            { icon: '🚀', title: 'Results Driven', desc: 'Focused on delivering impact' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass p-6 rounded-lg text-center"
              whileHover={{ y: -5, boxShadow: '0 0 30px rgba(14, 165, 233, 0.2)' }}
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
