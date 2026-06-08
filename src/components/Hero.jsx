import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi'
import { useTypingEffect } from '../hooks/useTypingEffect'

const roles = ['Web Developer', 'UI/UX Designer', 'Flask Developer','Problem Solver', 'Tech Enthusiast']

export default function Hero({ isDark }) {
  console.log("isDark =", isDark)
  const typedText = useTypingEffect(roles, 80, 50, 2200)

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124, 58, 237, 0.25), transparent)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 20% 80%, rgba(0, 245, 212, 0.08), transparent)',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 245, 212, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono"
                style={{
                  background: 'rgba(0, 245, 212, 0.08)',
                  border: '1px solid rgba(0, 245, 212, 0.2)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span style={{ color: '#00F5D4' }}>Available for opportunities</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <p className="font-mono text-sm tracking-widest mb-2" style={{ color: '#00F5D4' }}>
                &lt; Hello, Welcome to my Portfolio! /&gt;
              </p>
              <h1
                className="font-display font-black leading-none mb-2"
                style={{
                  fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
                }}
              >
                <span
                  style={{
                    color: isDark ? '#ffffff' : '#0f172a',
                  }}
                >
                  Hello I'm
                </span>
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #00F5D4 0%, #7C3AED 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Ayub
                </span>
              </h1>
            </motion.div>

            {/* Typed role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-6"
              style={{ minHeight: '2rem' }}
            >
              <span className="font-body text-lg" style={{ color: '#94A3B8' }}>I'm a</span>
              <span className="font-display font-bold text-lg" style={{ color: '#00F5D4' }}>
                {typedText}
                <span className="typing-cursor" />
              </span>
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-body text-base leading-relaxed mb-8 max-w-lg"
              style={{ color: '#94A3B8' }}
            >
              Computer Science & Engineering (Design Specialization) undergraduate with internship experience in Web Development and UI/UX Design.
              Skilled in Python, Java, C, C++, Canva and Figma — building digital products that are both functional and beautiful.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="public/Ayub_s_resume.pdf"
                download
                className="btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload size={16} />
                Resume
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-outline"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: FiGithub, href: 'https://github.com/Ayub-Adil', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/md-ayub-adil-usmani', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:mdayubadil786@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#94A3B8',
                  }}
                  whileHover={{ scale: 1.1, color: '#00F5D4', borderColor: 'rgba(0,245,212,0.4)', backgroundColor: 'rgba(0,245,212,0.05)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
              <div className="w-px h-6 bg-white/10 mx-1" />
              <span className="font-mono text-xs" style={{ color: '#94A3B8' }}>Kulti, WB, India</span>
            </motion.div>
          </div>

          {/* Right: Avatar placeholder */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="relative">
              {/* Outer decorative ring */}
              <motion.div
                className="absolute -inset-4 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #00F5D4, #7C3AED, #00F5D4)',
                  padding: '1px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full" style={{ background: '#050816' }} />
              </motion.div>

              {/* Inner ring */}
              <motion.div
                className="absolute -inset-2 rounded-full"
                style={{
                  border: '1px solid rgba(0, 245, 212, 0.15)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                {[0, 90, 180, 270].map(deg => (
                  <div
                    key={deg}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: '#7C3AED',
                      boxShadow: '0 0 6px #7C3AED',
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${deg}deg) translateX(calc(50% + 1px)) translateY(-50%)`,
                    }}
                  />
                ))}
              </motion.div>

              {/* Avatar container */}
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden"
                style={{
                  border: '2px solid rgba(0, 245, 212, 0.2)',
                  boxShadow: '0 0 60px rgba(0, 245, 212, 0.15), 0 0 120px rgba(124, 58, 237, 0.1)',
                }}
              >
                {/* Replace src with actual photo path: /ayub-photo.jpg */}
                <img
                  src="public/ayub-photo.png"
                  alt="MD Ayub Adil Usmani"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback avatar */}
                <div
                  className="w-full h-full items-center justify-center flex-col gap-2"
                  style={{
                    display: 'none',
                    background: 'linear-gradient(135deg, rgba(0,245,212,0.1), rgba(124,58,237,0.1))',
                  }}
                >
                  <span className="font-display text-6xl font-black gradient-text">AA</span>
                  <span className="font-mono text-xs text-muted">Add your photo</span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎨</span>
                  <div>
                    <p className="font-display text-xs font-bold text-white">UI/UX</p>
                    <p className="font-mono text-xs" style={{ color: '#94A3B8' }}>Designer</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-xl"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚡</span>
                  <div>
                    <p className="font-display text-xs font-bold text-white">Flask</p>
                    <p className="font-mono text-xs" style={{ color: '#94A3B8' }}>Developer</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="font-mono text-xs" style={{ color: '#94A3B8' }}>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown size={16} style={{ color: '#00F5D4' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
