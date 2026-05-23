import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import ResumeViewer from './ResumeViewer'
import ResumeControls from './ResumeControls'

const FullscreenModal = ({ isOpen, onClose, resumeLink, zoom, onZoomIn, onZoomOut, onResetZoom }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 shadow-[0_50px_120px_rgba(0,0,0,0.65)]"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-slate-100 transition-all duration-300 hover:bg-slate-800"
            >
              <HiX className="text-xl" />
            </button>
            <div className="rounded-[2rem] bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 p-6">
              <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Fullscreen mode</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">Immersive resume review</h3>
                  <p className="mt-3 max-w-2xl text-slate-400 leading-relaxed">
                    Inspect every detail in a distraction-free layout with fluid zoom controls and cinematic view.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                    {Math.round(zoom * 100)}% zoom
                  </span>
                </div>
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_0.75fr] xl:items-start">
                <ResumeViewer resumeLink={resumeLink} zoom={zoom} />
                <div className="space-y-6">
                  <ResumeControls
                    zoom={zoom}
                    onZoomIn={onZoomIn}
                    onZoomOut={onZoomOut}
                    onResetZoom={onResetZoom}
                    onFullscreen={() => {}}
                  />
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 text-slate-400">
                    <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Full-screen notes</p>
                    <p className="mt-4 leading-relaxed">
                      Use the controls to zoom and reset the document. Close the modal whenever you’re ready to continue browsing the rest of the portfolio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FullscreenModal
