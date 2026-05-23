import React from 'react'
import { motion } from 'framer-motion'
import { HiDocumentText, HiDownload, HiArrowRight } from 'react-icons/hi'
import { itemVariants } from '../utils/animations'

const ResumePreviewCard = ({ resumeLink, onOpen }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_rgba(14,165,233,0.16)] transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400" />
      <div className="relative">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-[0_18px_40px_rgba(56,189,248,0.24)]">
            <HiDocumentText className="text-2xl" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Resume preview</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Premium Resume Card</h3>
          </div>
        </div>

        <div className="mt-8 rounded-[1.75rem] bg-slate-950/70 p-5 ring-1 ring-white/5">
          <div className="flex items-center gap-3 text-slate-300 text-sm">
            <div className="h-2.5 w-2.5 rounded-full bg-sky-400" />
            <span>Modern layout</span>
          </div>
          <div className="mt-4 space-y-3">
            <div className="h-3 w-full rounded-full bg-slate-800" />
            <div className="h-3 w-5/6 rounded-full bg-slate-800" />
            <div className="h-3 w-3/4 rounded-full bg-slate-800" />
            <div className="h-3 w-2/3 rounded-full bg-slate-800" />
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Open Resume
            <HiArrowRight className="ml-2 text-base" />
          </button>
          <a
            href={resumeLink}
            download
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:bg-white/10"
          >
            <HiDownload className="mr-2 text-base" />
            Download PDF
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ResumePreviewCard
