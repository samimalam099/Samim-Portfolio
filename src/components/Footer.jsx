import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowNarrowUp } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-bg/90 py-16 px-4 border-t border-red-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] border border-red-500/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(239,68,68,0.14)]">
          <div className="pointer-events-none absolute -top-12 right-10 h-52 w-52 rounded-full bg-red-500/10 blur-3xl" />
          <div className="grid gap-10 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <h3 className="text-2xl font-bold text-red-500 mb-2">Samim Alam</h3>
              <p className="text-slate-400 text-sm">Building amazing digital experiences</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3 text-slate-400 text-sm">
                {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-red-300 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="md:col-span-2"
            >
              <h4 className="font-semibold text-white mb-4">Follow</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { Icon: FiGithub, href: 'https://github.com/samimalam099' },
                  { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/samimalam099' },
                  { Icon: FiTwitter, href: 'https://x.com/SamimAk93555172' },
                  { Icon: FiInstagram, href: 'https://www.instagram.com/samim.akhtar099' },
                  { Icon: FiMail, href: 'mailto:samimbth000@gmail.com' },
                ].map(({ Icon, href }, idx) => (
                  <motion.a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111217]/90 text-red-300 transition hover:bg-red-500/15 hover:text-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <motion.p
            className="text-slate-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Samim Alam. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-red-500/20 bg-[#111217]/90 text-red-300 transition hover:bg-red-500/15 hover:text-white"
            whileHover={{ scale: 1.05 }}
          >
            <HiArrowNarrowUp className="text-lg" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
