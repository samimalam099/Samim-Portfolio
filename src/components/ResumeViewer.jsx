import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { itemVariants } from '../utils/animations'

const ResumeViewer = ({ resumeLink, zoom }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      id="resume-viewer"
      variants={itemVariants}
      className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-4 shadow-[0_30px_90px_rgba(14,165,233,0.12)]"
    >
      <div className="relative h-[28rem] sm:h-[32rem] md:h-[38rem] overflow-hidden rounded-[1.75rem] bg-black/70">
        {!isLoaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/80 text-slate-300">
            <div className="flex flex-col items-center gap-3">
              <div className="h-3 w-24 animate-pulse rounded-full bg-slate-700" />
              <p className="text-sm text-slate-400">Loading resume preview...</p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 overflow-auto">
          <div
            className="h-full w-full origin-top transition-transform duration-300"
            style={{ transform: `scale(${zoom})`, transformOrigin: 'top center', height: `${100 / zoom}%` }}
          >
            <iframe
              title="Resume Preview"
              src={resumeLink}
              className="h-full w-full border-0 bg-transparent"
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ResumeViewer
