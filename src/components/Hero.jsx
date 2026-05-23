import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { SiGithub, SiLinkedin, SiTwitter, SiInstagram } from 'react-icons/si'
import profile from '../assets/profile.jpeg'
import { containerVariants, fadeInUp, floatingAnimation, itemVariants } from '../utils/animations'

const SOCIAL_LINKS = [
  { icon: SiGithub, url: 'https://github.com/samimalam099', label: 'GitHub' },
  { icon: SiLinkedin, url: 'https://www.linkedin.com/in/samimalam099', label: 'LinkedIn' },
  { icon: SiTwitter, url: 'https://x.com/SamimAk93555172', label: 'Twitter' },
  { icon: SiInstagram, url: 'https://www.instagram.com/samim.akhtar099', label: 'Instagram' },
]

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[78vh] overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.16),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(251,146,60,0.12),_transparent_20%)]" />
      <div className="absolute left-10 top-20 h-44 w-44 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute right-0 top-24 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute inset-x-0 top-36 h-20 bg-[radial-gradient(circle_at_center,_rgba(248,113,113,0.08),_transparent_56%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-red-300 shadow-[0_10px_40px_rgba(239,68,68,0.08)]"
          >
            Welcome Back
          </motion.span>

          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-5xl"
            >
              Hi, I’m <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">Samim Alam</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl font-semibold text-red-300/90"
            >
              Data Science and AI Developer
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-slate-300/90 text-sm leading-relaxed sm:text-base"
            >
              Building premium developer experiences with modern UI, data-driven design, and smooth motion. I craft interfaces that feel high-end, futuristic, and polished across every screen.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_50px_rgba(239,68,68,0.22)] transition-all duration-300"
            >
              View Projects
              <HiArrowNarrowRight className="text-lg" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-red-500/20 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(15,23,42,0.32)] hover:border-red-400/50 hover:bg-slate-900/95 transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3"
          >
            {SOCIAL_LINKS.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/75 text-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.22)] transition-all duration-300 hover:border-red-500/30 hover:text-red-300"
                >
                  <Icon className="text-lg" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative self-start overflow-hidden rounded-[2rem] border border-red-500/10 bg-slate-950/75 p-1 shadow-[0_40px_80px_rgba(239,68,68,0.16)] lg:pl-6"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0c0f18]">
            <motion.div
              animate={floatingAnimation}
              className="absolute -left-10 -top-10 h-44 w-44 rounded-full bg-red-500/10 blur-3xl"
            />
            <motion.div
              animate={floatingAnimation}
              className="absolute right-8 top-8 h-28 w-28 rounded-full border border-red-500/20 bg-red-500/5 blur-xl"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -right-10 bottom-10 h-56 w-56 rounded-full border border-red-500/15 opacity-40"
            />
            <motion.img
              src={profile}
              alt="Samim Alam"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative h-[360px] w-full object-cover object-top transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
