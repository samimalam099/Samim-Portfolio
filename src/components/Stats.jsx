import React from 'react'
import { motion } from 'framer-motion'
import { HiSparkles, HiCode, HiClock, HiUsers } from 'react-icons/hi'
import { containerVariants, itemVariants } from '../utils/animations'

const stats = [
  {
    title: 'Projects Completed',
    value: '65+',
    icon: HiSparkles,
    description: 'High-performance products shipped with modern interfaces and clean code.',
  },
  {
    title: 'Technologies',
    value: '28+',
    icon: HiCode,
    description: 'React, Tailwind, AI tooling, data pipelines, and modern frontend/backends.',
  },
  {
    title: 'Years of Experience',
    value: '1+',
    icon: HiClock,
    description: 'End-to-end product experience across startups, agencies, and enterprise teams.',
  },
  {
    title: 'Happy Clients',
    value: '18+',
    icon: HiUsers,
    description: 'Trusted by clients for polished, futuristic interfaces and reliable delivery.',
  },
]

const Stats = () => {
  return (
    <section id="stats" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.12),_transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-7 shadow-[0_30px_80px_rgba(15,23,42,0.4)] transition-transform duration-300 hover:-translate-y-2 hover:border-red-500/20 hover:bg-slate-900/90"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-red-500/10 text-red-300 shadow-[0_20px_50px_rgba(239,68,68,0.12)] transition-all duration-300 group-hover:shadow-[0_25px_60px_rgba(239,68,68,0.22)]">
                  <Icon className="text-2xl" />
                </div>
                <p className="text-5xl font-semibold text-white">{item.value}</p>
                <h3 className="mt-3 text-lg font-semibold text-slate-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
