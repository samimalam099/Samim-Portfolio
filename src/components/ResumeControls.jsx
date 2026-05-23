import React from 'react'
import { motion } from 'framer-motion'
import { HiMinus, HiPlus, HiRefresh, HiArrowsExpand } from 'react-icons/hi'
import { hoverScale } from '../utils/animations'

const ResumeControls = ({ zoom, onZoomIn, onZoomOut, onResetZoom, onFullscreen }) => {
  return (
    <motion.div
      className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-5 shadow-[0_30px_90px_rgba(14,165,233,0.1)]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Zoom controls</p>
          <p className="mt-2 text-slate-400 text-sm">Adjust the PDF preview to inspect every section with clarity.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <motion.button
            whileHover={hoverScale.whileHover}
            whileTap={hoverScale.whileTap}
            transition={hoverScale.transition}
            onClick={onZoomOut}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-all duration-300 hover:bg-sky-500/15"
            type="button"
          >
            <HiMinus className="text-xl" />
          </motion.button>
          <motion.button
            whileHover={hoverScale.whileHover}
            whileTap={hoverScale.whileTap}
            transition={hoverScale.transition}
            onClick={onResetZoom}
            className="inline-flex h-12 min-w-[5rem] items-center justify-center rounded-full border border-white/10 bg-gradient-to-r from-sky-500 to-indigo-500 text-white transition-all duration-300 hover:shadow-[0_18px_50px_rgba(56,189,248,0.25)]"
            type="button"
          >
            <HiRefresh className="mr-2 text-base" /> Reset
          </motion.button>
          <motion.button
            whileHover={hoverScale.whileHover}
            whileTap={hoverScale.whileTap}
            transition={hoverScale.transition}
            onClick={onZoomIn}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-all duration-300 hover:bg-sky-500/15"
            type="button"
          >
            <HiPlus className="text-xl" />
          </motion.button>
          <motion.button
            whileHover={hoverScale.whileHover}
            whileTap={hoverScale.whileTap}
            transition={hoverScale.transition}
            onClick={onFullscreen}
            className="inline-flex h-12 rounded-full bg-slate-800/90 px-4 py-2 text-slate-100 transition-all duration-300 hover:bg-slate-700"
            type="button"
          >
            <HiArrowsExpand className="mr-2 text-base" /> Fullscreen
          </motion.button>
        </div>
      </div>
      <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-400">
        Zoom level: <span className="font-semibold text-white">{Math.round(zoom * 100)}%</span>
      </div>
    </motion.div>
  )
}

export default ResumeControls
