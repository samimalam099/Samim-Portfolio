import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiMoon, HiOutlineSun, HiX } from 'react-icons/hi'
import { NAVIGATION } from '../constants/data'

const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')
  const [darkMode, setDarkMode] = useState(true)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  useEffect(() => {
    const sectionMap = NAVIGATION.map(item => document.querySelector(item.href)).filter(Boolean)

    const handleActiveLink = () => {
      const scrollPosition = window.scrollY + 160
      let currentActive = '#home'
      sectionMap.forEach(section => {
        if (section.offsetTop <= scrollPosition) {
          currentActive = `#${section.id}`
        }
      })
      setActiveLink(currentActive)
    }

    handleActiveLink()
    window.addEventListener('scroll', handleActiveLink)
    return () => window.removeEventListener('scroll', handleActiveLink)
  }, [])

  return (
    <motion.nav
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 border-b border-red-500/10 shadow-[0_25px_80px_rgba(239,68,68,0.16)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between rounded-full border border-white/5 bg-slate-950/40 px-4 shadow-xl shadow-red-500/5 backdrop-blur-xl">
          <motion.a
            href="#home"
            className="text-lg font-bold tracking-[0.24em] text-red-300 uppercase"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Samim
          </motion.a>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-2 shadow-[0_20px_60px_rgba(15,23,42,0.4)]">
              {NAVIGATION.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeLink === item.href
                      ? 'bg-red-500/18 text-red-200 shadow-[0_0_30px_rgba(239,68,68,0.18)]'
                      : 'text-slate-300 hover:text-red-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-red-500/15 bg-slate-900/80 text-red-300 shadow-[0_10px_30px_rgba(239,68,68,0.12)] hover:bg-red-500/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <HiMoon className="text-lg" /> : <HiOutlineSun className="text-lg" />}
            </motion.button>

            <motion.button
              onClick={toggleMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-red-500/15 bg-slate-900/80 text-red-300 shadow-[0_10px_30px_rgba(239,68,68,0.12)] hover:bg-red-500/10 md:hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-4 top-full mt-3 overflow-hidden rounded-3xl border border-red-500/10 bg-slate-950/95 p-4 shadow-2xl shadow-red-500/10 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAVIGATION.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 6 }}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    activeLink === item.href
                      ? 'bg-red-500/18 text-red-200'
                      : 'text-slate-200 hover:bg-white/5 hover:text-red-300'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
