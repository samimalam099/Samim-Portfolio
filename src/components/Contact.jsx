import React from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'
import { containerVariants, itemVariants } from '../utils/animations'

const contactCards = [
  {
    icon: HiPhone,
    title: 'WhatsApp',
    value: '+91 9934394191',
    action: 'Chat on WhatsApp',
    href: 'https://wa.me/919934394191',
  },
  {
    icon: HiMail,
    title: 'Email',
    value: 'samimbth000@gmail.com',
    action: 'Send Email',
    href: 'mailto:samimbth000@gmail.com',
  },
  {
    icon: FiGithub,
    title: 'GitHub',
    value: 'github.com/samimalam099',
    action: 'View Profile',
    href: 'https://github.com/samimalam099',
  },
  {
    icon: FiLinkedin,
    title: 'LinkedIn',
    value: 'linkedin.com/in/samimalam099',
    action: 'Open Profile',
    href: 'https://www.linkedin.com/in/samimalam099',
  },
  {
    icon: FiTwitter,
    title: 'Twitter / X',
    value: 'x.com/SamimAk93555172',
    action: 'Open X',
    href: 'https://x.com/SamimAk93555172',
  },
  {
    icon: FiInstagram,
    title: 'Instagram',
    value: 'instagram.com/samim.akhtar099',
    action: 'Open Instagram',
    href: 'https://www.instagram.com/samim.akhtar099',
  },
]

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-dark-bg/90">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Let's <span className="text-red-500">Connect</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-400 mt-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            I am always open to new opportunities and interesting projects. Reach out through any of these channels.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative overflow-hidden rounded-[2rem] border border-red-500/10 bg-white/5 shadow-[0_30px_60px_rgba(239,68,68,0.16)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.18),_transparent_30%)] opacity-70" />
          <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl" />
          <div className="relative px-6 py-8 md:px-10 md:py-10">
            <div className="max-w-3xl">
              <h3 className="text-3xl font-semibold text-white">Get in Touch</h3>
              <p className="text-slate-400 mt-3 text-base md:text-lg">
                Choose the best way to contact me — whether it is WhatsApp, email, social media, or GitHub.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {contactCards.map((card, idx) => {
                const Icon = card.icon
                return (
                  <motion.a
                    key={idx}
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    variants={itemVariants}
                    className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0f1015]/90 p-4 shadow-[0_14px_40px_rgba(239,68,68,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 via-[#f97373] to-[#7f1d1d] text-white shadow-[0_12px_24px_rgba(239,68,68,0.16)]">
                      <Icon className="text-lg" />
                    </div>
                    <div className="mt-4">
                      <h4 className="text-base font-semibold text-white">{card.title}</h4>
                      <p className="text-slate-400 mt-1 text-sm leading-snug">{card.value}</p>
                    </div>
                    <p className="mt-4 text-[10px] font-semibold tracking-[0.3em] uppercase text-red-300">
                      {card.action}
                    </p>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
