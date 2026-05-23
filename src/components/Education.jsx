import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'
import { itemVariants } from '../utils/animations'

const education = [
  {
    level: 'Matriculation',
    institution: 'Adersh High School, Jagdishpur, Bihar',
    period: '2021 - 2022',
    detail: 'Completed secondary school education with a strong foundation in core subjects.',
  },
  {
    level: 'Intermediate (12th)',
    institution: 'T.P. Varma College, Narkatiaganj, Bihar',
    period: '2022 - 2024',
    detail: 'Completed senior secondary education focusing on the Science stream.',
  },
  {
    level: 'Bachelor of Technology (B.Tech)',
    institution: 'Vivekananda Global University, Jaipur, Rajasthan',
    period: '2024 - Present',
    detail: 'Currently pursuing Bachelor of Computer Science and Engineering, building expertise in software development.',
  },
]

const Education = () => {
  return (
    <section id="education" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-dark-bg/30">
      {/* Background radial glow */}
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.08),_transparent_60%)] pointer-events-none" />
      
      <div className="relative mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="inline-flex rounded-full border border-red-500/10 bg-red-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-red-300 font-semibold shadow-inner">
            My Journey
          </span>
          <h2 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
            Academic <span className="gradient-text">Credentials</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            My academic & professional learning timeline
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-800/60 ml-4 md:ml-32 py-4 space-y-12">
          {/* Vertical line glow indicator */}
          <div className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-500/50 via-red-500/10 to-transparent pointer-events-none" />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full border-2 border-red-500 bg-dark-bg group-hover:bg-red-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(239,68,68,0.4)]" />
              
              {/* Left Side Period Label (Visible only on md screens and above) */}
              <div className="hidden md:block absolute -left-32 top-2 w-24 text-right text-sm font-semibold tracking-wider text-red-400 group-hover:text-red-300 transition-colors duration-300">
                {item.period}
              </div>

              {/* Glassmorphic Premium Card */}
              <div className="relative rounded-2xl border border-white/5 bg-slate-950/40 p-6 md:p-8 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1.5 hover:border-red-500/30 hover:bg-slate-900/30 hover:shadow-[0_20px_45px_rgba(239,68,68,0.06)] overflow-hidden">
                {/* Background ambient light inside card */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors duration-500" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    {/* Period Label (Visible only on mobile/small screens) */}
                    <span className="inline-block md:hidden text-xs font-semibold tracking-widest text-red-400 mb-2">
                      {item.period}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                      {item.level}
                    </h3>
                  </div>

                  {/* Academic Cap Icon with rotation hover effect */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 shadow-[0_10px_30px_rgba(239,68,68,0.1)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <HiAcademicCap className="text-2xl" />
                  </div>
                </div>

                <p className="text-slate-300 font-semibold text-base mb-3 group-hover:text-white transition-colors duration-300">
                  {item.institution}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed max-w-3xl group-hover:text-slate-300 transition-colors duration-300">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
