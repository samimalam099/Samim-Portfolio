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
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.1),_transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full border border-red-500/10 bg-red-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-red-300">
            Education
          </span>
          <h2 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl">Academic credentials</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            My academic & professional learning timeline
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:-translate-y-2 hover:border-red-500/20"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-red-500/10 text-red-300 shadow-[0_20px_50px_rgba(239,68,68,0.12)]">
                <HiAcademicCap className="text-2xl" />
              </div>
              <p className="text-sm uppercase tracking-[0.28em] text-red-300/80">{item.period}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.level}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.detail}</p>
              <p className="mt-4 text-sm font-medium text-slate-300">{item.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
