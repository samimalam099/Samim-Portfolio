import React from 'react'
import { motion } from 'framer-motion'
import { HiCode, HiServer, HiDatabase, HiTerminal, HiDocumentText } from 'react-icons/hi'
import { SKILLS } from '../constants/data'

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Frontend':
      return HiCode
    case 'Backend':
      return HiServer
    case 'Database':
      return HiDatabase
    case 'Development Tools':
      return HiTerminal
    case 'MS Office Packages':
      return HiDocumentText
    default:
      return HiCode
  }
}

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-dark-bg/20">
      {/* Background radial glow */}
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.06),_transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-20 text-center">
          <span className="inline-flex rounded-full border border-red-500/10 bg-red-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-red-300 font-semibold shadow-inner">
            Abilities
          </span>
          <h2 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            Professional technologies and tools I have mastered over my developer journey
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {SKILLS.map((skillGroup, index) => {
            const CategoryIcon = getCategoryIcon(skillGroup.category)
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-2xl border border-white/5 bg-slate-950/40 p-8 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1.5 hover:border-red-500/30 hover:bg-slate-900/30 hover:shadow-[0_20px_45px_rgba(239,68,68,0.06)] overflow-hidden"
              >
                {/* Ambient background light inside card */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors duration-500 pointer-events-none" />
                
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 shadow-[0_10px_30px_rgba(239,68,68,0.1)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <CategoryIcon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skills Badges Container */}
                <div className="flex flex-wrap gap-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-4 py-2 text-sm font-semibold rounded-xl border border-white/5 bg-slate-900/50 text-slate-300 hover:text-white hover:border-red-500/35 hover:bg-slate-900/90 transition-all duration-300 shadow-sm cursor-default"
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative glowing gradient border */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

        {/* Methodologies & Values Tag Showcase */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-300">
            Professional Values & Methodologies
          </h3>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'Responsive Web Design',
              'SEO Optimization',
              'Clean Code Architecture',
              'Creative Graphic Design',
              'Database Management',
              'Professional Documentation',
              'Analytical Thinking',
              'Problem Solving',
            ].map((competency, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border border-red-500/10 bg-red-500/5 text-red-300 hover:bg-red-500/10 hover:border-red-500/30 hover:text-white transition-all duration-300 cursor-default"
                whileHover={{ y: -3, scale: 1.05 }}
              >
                {competency}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
