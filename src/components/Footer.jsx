import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'

const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'GitHub', 'Contact']
const socials = [
  { icon: FiGithub, href: 'https://github.com/Ayub-Adil', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/md-ayub-adil-usmani', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:mdayubadil786@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,212,0.4), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-sm"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,245,212,0.15), rgba(124,58,237,0.15))',
                  border: '1px solid rgba(0,245,212,0.2)',
                  color: '#00F5D4',
                }}
              >
                AA
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">MD Ayub Adil Usmani</p>
                <p className="font-mono text-xs" style={{ color: '#00F5D4' }}>Web Dev · UI/UX · Flask</p>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
              Computer Science & Design undergraduate passionate about building beautiful, functional digital products.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-display font-bold text-sm text-white mb-4">Quick Links</p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navLinks.map(link => (
                <button
                  key={link}
                  onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-body text-sm text-left transition-colors duration-200 hover:text-[#00F5D4]"
                  style={{ color: '#94A3B8' }}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-bold text-sm text-white mb-4">Get In Touch</p>
            <div className="space-y-2 mb-5">
              <a href="mailto:mdayubadil786@gmail.com" className="font-body text-sm block hover:text-[#00F5D4] transition-colors" style={{ color: '#94A3B8' }}>
                mdayubadil786@gmail.com
              </a>
              <p className="font-body text-sm" style={{ color: '#94A3B8' }}>Kulti, West Bengal, India</p>
            </div>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#94A3B8' }}
                  whileHover={{ scale: 1.1, color: '#00F5D4', borderColor: 'rgba(0,245,212,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="font-body text-xs flex items-center gap-1.5" style={{ color: '#94A3B8' }}>
            © {new Date().getFullYear()} Ayub Adil · Built with
            <FiHeart size={12} style={{ color: '#7C3AED' }} />
            using React & Tailwind
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-xs transition-colors"
            style={{ color: '#94A3B8' }}
            whileHover={{ color: '#00F5D4', y: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top <FiArrowUp size={12} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
