import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiMail, FiExternalLink } from 'react-icons/fi'
import { useCounter } from '../hooks/useCounter'

function StatCard({ value, label, suffix = '+', delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const { count, startCounting } = useCounter(value, 1800)

  const started = useRef(false)

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true
      startCounting()
    }
  }, [inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="glass-card rounded-2xl p-5 text-center"
    >
      <p className="font-display font-black text-3xl gradient-text">
        {count}{suffix}
      </p>
      <p
        className="font-body text-xs mt-1"
        style={{ color: '#94A3B8' }}
      >
        {label}
      </p>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 80% 50%, rgba(124,58,237,0.06), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p
            className="font-mono text-sm tracking-widest mb-3"
            style={{ color: '#00F5D4' }}
          >
            01 / about
          </p>

          <h2 className="section-heading text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-8 space-y-4">
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: '#cbd5e1' }}
              >
                Hi, I'm{' '}
                <span
                  style={{ color: '#00F5D4' }}
                  className="font-semibold"
                >
                  Ayub Adil
                </span>{' '}
                — a Computer Science and Design undergraduate passionate
                about building meaningful digital experiences.
              </p>

              <p
                className="font-body text-base leading-relaxed"
                style={{ color: '#94A3B8' }}
              >
                I bridge the gap between design and development — equally
                comfortable crafting interfaces in Figma and bringing them
                to life with code.
              </p>

              <p
                className="font-body text-base leading-relaxed"
                style={{ color: '#94A3B8' }}
              >
                Beyond code, I'm deeply interested in UI/UX, design
                systems, frontend engineering, and creating software that
                feels intuitive and enjoyable.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 tag">
                  <FiMapPin size={12} />
                  Kulti, West Bengal, India
                </div>

                <div className="flex items-center gap-2 tag">
                  <FiMail size={12} />
                  mdayubadil786@gmail.com
                </div>

                <a
                  href="https://www.linkedin.com/in/md-ayub-adil-usmani"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 tag tag-purple"
                >
                  <FiExternalLink size={12} />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="glass-card rounded-2xl p-5"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-2xl mb-2">🎓</div>
                <p className="font-display font-bold text-sm text-white">
                  B.Tech CS & Design
                </p>
                <p
                  className="font-body text-xs mt-1"
                  style={{ color: '#94A3B8' }}
                >
                  2024–2028
                </p>
              </motion.div>

              <motion.div
                className="glass-card rounded-2xl p-5"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-2xl mb-2">💼</div>
                <p className="font-display font-bold text-sm text-white">
                  2 Internships
                </p>
                <p
                  className="font-body text-xs mt-1"
                  style={{ color: '#94A3B8' }}
                >
                  Web Development & UI/UX
                </p>
              </motion.div>

              <motion.div
                className="glass-card rounded-2xl p-5"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-2xl mb-2">🎨</div>
                <p className="font-display font-bold text-sm text-white">
                  Design First
                </p>
                <p
                  className="font-body text-xs mt-1"
                  style={{ color: '#94A3B8' }}
                >
                  Figma · Wireframes · Prototypes
                </p>
              </motion.div>

              <motion.div
                className="glass-card rounded-2xl p-5"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-2xl mb-2">🐍</div>
                <p className="font-display font-bold text-sm text-white">
                  Python & Flask
                </p>
                <p
                  className="font-body text-xs mt-1"
                  style={{ color: '#94A3B8' }}
                >
                  APIs & Backend Development
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <StatCard value={10} label="Projects Built" />
              <StatCard value={2} suffix="" label="Internships" />
              <StatCard value={5} label="Certifications" />
              <StatCard value={4} label="Technologies" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}