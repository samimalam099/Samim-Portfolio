import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'
import { itemVariants } from '../utils/animations'

const education = [
  {
    level: 'B.Sc. in Computer Science',
    institution: 'University of Technology',
    period: '2017 - 2021',
    detail: 'Focused on AI, data systems, and full-stack application design with modern toolchains.',
  },
  {
    level: 'Data Science Bootcamp',
    institution: 'Future Labs Academy',
    period: '2022',
    detail: 'Advanced machine learning, NLP, and product-grade dashboard development.',
  },
  {
    level: 'AI Certification',
    institution: 'Cloud Developer Institute',
    period: '2023',
    detail: 'Specialization in AI model integration, MLOps pipelines, and predictive analytics.',
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
          <h2 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl">Academic credentials & certifications</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            A concise overview of the training and credentials that power premium developer work.
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
