import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiEye, HiDownload, HiArrowsExpand, HiSparkles, HiMail } from 'react-icons/hi'
import ResumePreviewCard from './ResumePreviewCard'
import ResumeViewer from './ResumeViewer'
import ResumeControls from './ResumeControls'
import FullscreenModal from './FullscreenModal'
import { containerVariants, itemVariants, fadeInUp } from '../utils/animations'

const resumeLink = 'resume.pdf'

const stats = [
  { label: 'Years Experience', value: '5+', description: 'Building premium digital products.' },
  { label: 'Projects Delivered', value: '2+', description: 'Web apps, dashboards, and portfolios.' },
  { label: 'Technical Skills', value: '30+', description: 'React, Tailwind, Node.js and design systems.' },
]

const highlights = [
  'Strategic product thinking with polished execution.',
  'High-impact resume presentation for recruiters.',
  'Responsive layout optimized for desktop and mobile.',
]

const contactCTA = [
  { label: 'Email', value: 'samimbth000@gmail.com' },
  { label: 'Availability', value: 'Open for projects & collaborations' },
]

const ResumePage = () => {
  const [zoom, setZoom] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 2))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.7))
  const handleResetZoom = () => setZoom(1)

  return (
    <section id="resume" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.14),_transparent_26%)]" />
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-sky-300"
          >
            Resume Experience
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            My <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Professional Resume</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-3xl text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Explore my experience, technical skills, projects, and achievements through an interactive resume experience crafted for premium SaaS portfolios.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center sm:items-center">
            <a
              href="#resume-viewer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_80px_rgba(56,189,248,0.24)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_25px_90px_rgba(56,189,248,0.32)]"
            >
              <HiEye className="mr-2 text-lg" /> View Resume
            </a>
            <a
              href={resumeLink}
              download
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-sky-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              <HiDownload className="mr-2 text-lg" /> Download Resume
            </a>
            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              className="inline-flex items-center justify-center rounded-full bg-slate-800/90 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1 hover:bg-slate-700"
            >
              <HiArrowsExpand className="mr-2 text-lg" /> Fullscreen
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] items-start"
        >
          <ResumePreviewCard
            resumeLink={resumeLink}
            onOpen={() => setIsFullscreen(true)}
          />

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_30px_90px_rgba(14,165,233,0.15)] backdrop-blur-xl">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Resume Viewer</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Interactive PDF Preview</h3>
                  <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                    Scroll through the document, zoom in on sections, and open the resume in fullscreen for a cinematic review.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-slate-300 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                  <HiSparkles className="text-xl text-sky-300" /> Premium Quality
                </div>
              </div>
            </div>

            <ResumeViewer resumeLink={resumeLink} zoom={zoom} />
            <ResumeControls
              zoom={zoom}
              onZoomIn={handleZoomIn}
              onZoomOut={handleZoomOut}
              onResetZoom={handleResetZoom}
              onFullscreen={() => setIsFullscreen(true)}
            />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(14,165,233,0.12)]"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">{stat.label}</p>
              <p className="mt-4 text-4xl font-extrabold text-white">{stat.value}</p>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(14,165,233,0.12)] backdrop-blur-xl"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Need a direct introduction?</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">Let’s connect and start your next digital project.</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactCTA.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                  <p className="mt-2 text-white text-base font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <FullscreenModal
        isOpen={isFullscreen}
        onClose={() => setIsFullscreen(false)}
        resumeLink={resumeLink}
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetZoom={handleResetZoom}
      />
    </section>
  )
}

export default ResumePage
