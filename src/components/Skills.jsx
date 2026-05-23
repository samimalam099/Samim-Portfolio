import React from 'react'
import { motion } from 'framer-motion'
import { SKILLS } from '../constants/data'
import { containerVariants, itemVariants, scaleIn } from '../utils/animations'

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
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
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-accent mx-auto" />
          <motion.p variants={itemVariants} className="text-slate-400 mt-6 text-lg">
            Technologies and tools I've mastered over the years
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 rounded-xl hover:border-accent transition-all duration-300"
              whileHover={{
                borderColor: 'rgb(14, 165, 233)',
                boxShadow: '0 0 30px rgba(14, 165, 233, 0.2)',
              }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {skillGroup.category}
              </h3>

              <div className="space-y-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={scaleIn}
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-accent rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-slate-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Skill progress bars for visual appeal */}
              <motion.div
                className="mt-6 pt-6 border-t border-slate-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span>Proficiency</span>
                  <motion.div
                    className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden"
                    whileInView={{
                      background: 'linear-gradient(90deg, rgb(14, 165, 233), rgb(99, 102, 241))',
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold mb-8 text-center text-slate-300"
          >
            Other Competencies
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              'RESTful APIs',
              'GraphQL',
              'CI/CD',
              'Responsive Design',
              'Performance Optimization',
              'Testing & QA',
              'Agile Methodology',
              'Cloud Deployment',
            ].map((skill, index) => (
              <motion.span
                key={index}
                variants={scaleIn}
                className="px-4 py-2 glass rounded-full text-sm font-medium text-accent border border-accent"
                whileHover={{
                  backgroundColor: 'rgba(14, 165, 233, 0.1)',
                  scale: 1.05,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
