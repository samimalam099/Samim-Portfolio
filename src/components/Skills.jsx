import React from 'react'
import { motion } from 'framer-motion'
import { HiCode, HiServer, HiDatabase, HiTerminal, HiDocumentText } from 'react-icons/hi'
import { SKILLS } from '../constants/data'

const getCategoryTheme = (category) => {
  switch (category) {
    case 'Frontend':
      return {
        icon: HiCode,
        textColor: 'text-sky-400',
        hoverBorder: 'hover:border-sky-500/30',
        hoverShadow: 'hover:shadow-[0_20px_50px_rgba(56,189,248,0.06)]',
        iconBg: 'bg-sky-500/10 text-sky-400 shadow-[0_10px_30px_rgba(56,189,248,0.15)]',
        gradient: 'from-sky-500 to-blue-600',
        accentLine: 'from-sky-500/0 via-sky-500/30 to-sky-500/0',
        proficiencies: [95, 90, 88, 85]
      }
    case 'Backend':
      return {
        icon: HiServer,
        textColor: 'text-emerald-400',
        hoverBorder: 'hover:border-emerald-500/30',
        hoverShadow: 'hover:shadow-[0_20px_50px_rgba(16,185,129,0.06)]',
        iconBg: 'bg-emerald-500/10 text-emerald-400 shadow-[0_10px_30px_rgba(16,185,129,0.15)]',
        gradient: 'from-emerald-500 to-teal-600',
        accentLine: 'from-emerald-500/0 via-emerald-500/30 to-emerald-500/0',
        proficiencies: [82, 78, 70]
      }
    case 'Database':
      return {
        icon: HiDatabase,
        textColor: 'text-indigo-400',
        hoverBorder: 'hover:border-indigo-500/30',
        hoverShadow: 'hover:shadow-[0_20px_50px_rgba(99,102,241,0.06)]',
        iconBg: 'bg-indigo-500/10 text-indigo-400 shadow-[0_10px_30px_rgba(99,102,241,0.15)]',
        gradient: 'from-indigo-500 to-violet-600',
        accentLine: 'from-indigo-500/0 via-indigo-500/30 to-indigo-500/0',
        proficiencies: [85, 80]
      }
    case 'Development Tools':
      return {
        icon: HiTerminal,
        textColor: 'text-purple-400',
        hoverBorder: 'hover:border-purple-500/30',
        hoverShadow: 'hover:shadow-[0_20px_50px_rgba(139,92,246,0.06)]',
        iconBg: 'bg-purple-500/10 text-purple-400 shadow-[0_10px_30px_rgba(139,92,246,0.15)]',
        gradient: 'from-purple-500 to-fuchsia-600',
        accentLine: 'from-purple-500/0 via-purple-500/30 to-purple-500/0',
        proficiencies: [92, 90, 95, 85]
      }
    case 'MS Office Packages':
      return {
        icon: HiDocumentText,
        textColor: 'text-rose-400',
        hoverBorder: 'hover:border-rose-500/30',
        hoverShadow: 'hover:shadow-[0_20px_50px_rgba(244,63,94,0.06)]',
        iconBg: 'bg-rose-500/10 text-rose-400 shadow-[0_10px_30px_rgba(244,63,94,0.15)]',
        gradient: 'from-rose-500 to-red-600',
        accentLine: 'from-rose-500/0 via-rose-500/30 to-rose-500/0',
        proficiencies: [95, 88, 90]
      }
    default:
      return {
        icon: HiCode,
        textColor: 'text-red-400',
        hoverBorder: 'hover:border-red-500/30',
        hoverShadow: 'hover:shadow-[0_20px_50px_rgba(239,68,68,0.06)]',
        iconBg: 'bg-red-500/10 text-red-400 shadow-[0_10px_30px_rgba(239,68,68,0.15)]',
        gradient: 'from-red-500 to-rose-600',
        accentLine: 'from-red-500/0 via-red-500/30 to-red-500/0',
        proficiencies: [80, 80, 80, 80]
      }
  }
}

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-dark-bg/25">
      {/* Background radial glow */}
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.05),_transparent_60%)] pointer-events-none" />

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
            const theme = getCategoryTheme(skillGroup.category)
            const CategoryIcon = theme.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative rounded-2xl border border-white/5 bg-slate-950/40 p-8 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1.5 ${theme.hoverBorder} hover:bg-slate-900/20 ${theme.hoverShadow} overflow-hidden`}
              >
                {/* Ambient background light inside card */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors duration-500 pointer-events-none" />
                
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${theme.iconBg} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <CategoryIcon className="text-2xl" />
                  </div>
                  <h3 className={`text-xl font-bold text-white group-hover:${theme.textColor} transition-colors duration-300`}>
                    {skillGroup.category}
                  </h3>
                </div>

                {/* Skills Progress Bars */}
                <div className="space-y-5">
                  {skillGroup.skills.map((skill, skillIndex) => {
                    const proficiency = theme.proficiencies[skillIndex] || 80
                    return (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center text-sm font-semibold">
                          <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                            {skill}
                          </span>
                          <span className={`${theme.textColor} opacity-85 text-xs font-bold`}>
                            {proficiency}%
                          </span>
                        </div>
                        <div className="h-2 w-full bg-slate-900/90 rounded-full overflow-hidden border border-white/5 shadow-inner">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${theme.gradient}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${proficiency}%` }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Decorative glowing gradient border */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${theme.accentLine} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
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
