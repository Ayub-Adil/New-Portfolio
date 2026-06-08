import { useState, Suspense, lazy } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrollProgress } from './hooks/useScrollProgress'
import { useTheme } from './hooks/useTheme'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy load below-the-fold sections
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Experience = lazy(() => import('./components/Experience'))
const Education = lazy(() => import('./components/Education'))
const Projects = lazy(() => import('./components/Projects'))
const Achievements = lazy(() => import('./components/Achievements'))
const GitHubStats = lazy(() => import('./components/GitHubStats'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex gap-2">
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ background: '#00F5D4' }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const { isDark, toggleTheme } = useTheme()
  const scrollProgress = useScrollProgress()

  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* Loading screen */}
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main content */}
      {!loading && (
        <div
          className="relative min-h-screen"
          style={{
            background: isDark ? '#050816' : '#f8fafc',
            color: isDark ? '#ffffff' : '#0f172a',
            transition: 'all 0.35s ease',
          }}
        >
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />

          <main>
            <Hero isDark={isDark} />

            <Suspense fallback={<SectionLoader />}>
              <About />
              <Skills />
              <Experience />
              <Education />
              <Projects />
              <Achievements />
              <GitHubStats />
              <Contact />
              <Footer />
            </Suspense>
          </main>
        </div>
      )}
    </>
  )
}
