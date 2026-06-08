import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 600)
          return 100
        }
        return prev + 2
      })
    }, 30)
    return () => clearInterval(timer)
  }, [onComplete])

  useEffect(() => {
    if (progress > 33) setPhase(1)
    if (progress > 66) setPhase(2)
    if (progress > 90) setPhase(3)
  }, [progress])

  const phases = ['Initializing...', 'Loading assets...', 'Building UI...', 'Ready.']

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#050816' }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #00F5D4, transparent)' }}
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Logo animation */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Orbit rings */}
          <motion.div
            className="absolute inset-0 m-auto"
            style={{
              width: 120,
              height: 120,
              border: '1px solid rgba(0, 245, 212, 0.15)',
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
              style={{ background: '#00F5D4', boxShadow: '0 0 8px #00F5D4' }}
            />
          </motion.div>

          <motion.div
            className="absolute"
            style={{
              width: 160,
              height: 160,
              border: '1px solid rgba(124, 58, 237, 0.15)',
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full"
              style={{ background: '#7C3AED', boxShadow: '0 0 8px #7C3AED' }}
            />
          </motion.div>

          {/* Logo hex */}
          <div
            className="relative w-20 h-20 flex items-center justify-center rounded-2xl"
            style={{
              background: 'rgba(13, 18, 36, 0.9)',
              border: '1px solid rgba(0, 245, 212, 0.3)',
              boxShadow: '0 0 40px rgba(0, 245, 212, 0.2), inset 0 0 40px rgba(0, 245, 212, 0.05)',
            }}
          >
            <span
              className="font-display text-3xl font-black"
              style={{
                background: 'linear-gradient(135deg, #00F5D4, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <img
              src="/ayub-logo.png"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h1 className="font-display text-2xl font-bold text-white tracking-widest uppercase">
            MD Ayub Adil
          </h1>
          <p className="font-mono text-xs tracking-[0.3em] mt-1" style={{ color: '#00F5D4' }}>
            USMANI
          </p>
        </motion.div>

        {/* Progress */}
        <motion.div
          className="w-64 flex flex-col gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs text-muted">{phases[phase]}</span>
            <span className="font-mono text-xs" style={{ color: '#00F5D4' }}>{progress}%</span>
          </div>
          <div className="h-px bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #00F5D4, #7C3AED)',
                width: `${progress}%`,
                boxShadow: '0 0 10px rgba(0, 245, 212, 0.5)',
              }}
            />
          </div>
          <div className="flex gap-1">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="flex-1 h-1 rounded-full"
                style={{
                  background: i < Math.floor(progress / 5)
                    ? 'rgba(0, 245, 212, 0.6)'
                    : 'rgba(255, 255, 255, 0.05)',
                }}
                animate={{ opacity: i < Math.floor(progress / 5) ? [0.5, 1] : 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
