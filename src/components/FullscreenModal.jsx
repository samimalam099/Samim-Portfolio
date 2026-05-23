import React from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import ResumeViewer from './ResumeViewer'
import ResumeControls from './ResumeControls'

const FullscreenModal = ({ isOpen, onClose, resumeLink, zoom, onZoomIn, onZoomOut, onResetZoom }) => {
  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-start justify-center bg-slate-950/98 backdrop-blur-xl px-4 py-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-6xl my-auto overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950 shadow-[0_50px_120px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-6 top-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-slate-100 transition-all duration-300 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/30 active:scale-95 shadow-lg"
            >
              <HiX className="text-xl" />
            </button>

            <div className="bg-gradient-to-br from-slate-900/40 via-slate-950/60 to-slate-900/40 p-6 sm:p-8">
              <div className="flex flex-col gap-4 pr-16 sm:pr-0">
                <p className="text-xs uppercase tracking-[0.3em] text-sky-400 font-semibold">Fullscreen mode</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Immersive Resume Review</h3>
                <p className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
                  Inspect every detail in a distraction-free layout with fluid zoom controls and cinematic preview.
                </p>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] items-start">
                {/* PDF Viewer Container */}
                <div className="w-full">
                  <ResumeViewer resumeLink={resumeLink} zoom={zoom} />
                </div>

                {/* Sidebar Controls */}
                <div className="space-y-6">
                  <ResumeControls
                    zoom={zoom}
                    onZoomIn={onZoomIn}
                    onZoomOut={onZoomOut}
                    onResetZoom={onResetZoom}
                    onFullscreen={() => {}}
                  />
                  <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-6 text-slate-400 shadow-inner">
                    <p className="text-sm uppercase tracking-[0.2em] text-sky-300 font-semibold">Full-screen notes</p>
                    <p className="mt-3 text-sm leading-relaxed">
                      Use the controls to zoom and reset the document. Close this modal whenever you are ready to return to the portfolio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}

export default FullscreenModal
