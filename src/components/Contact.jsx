import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from 'react-icons/fi'

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'mdayubadil786@gmail.com', href: 'mailto:mdayubadil786@gmail.com', color: '#00F5D4' },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/Ayub-Adil', href: 'https://github.com/Ayub-Adil', color: '#7C3AED' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'md-ayub-adil-usmani', href: 'https://www.linkedin.com/in/md-ayub-adil-usmani', color: '#0077B5' },
  { icon: FiMapPin, label: 'Location', value: 'Kulti, West Bengal, India', href: null, color: '#f97316' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')

    // Using mailto as a simple fallback (replace with Formspree/EmailJS for production)
    const mailto = `mailto:mdayubadil786@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailto, '_blank')

    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 800)
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(124,58,237,0.08), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm tracking-widest mb-3" style={{ color: '#00F5D4' }}>08 / contact</p>
          <h2 className="section-heading text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="font-body max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
            Have a project in mind, want to collaborate, or just say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: info cards */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-5 flex items-center gap-4 group"
                whileHover={item.href ? { x: 4 } : {}}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                >
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs mb-0.5" style={{ color: '#94A3B8' }}>{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="font-body text-sm font-medium text-white truncate block hover:underline"
                      style={{ color: '#e2e8f0' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body text-sm" style={{ color: '#e2e8f0' }}>{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.div
              className="glass-card rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-2xl mb-3">🚀</div>
              <h3 className="font-display font-bold text-white mb-2">Open to Opportunities</h3>
              <p className="font-body text-xs leading-relaxed" style={{ color: '#94A3B8' }}>
                Looking for internships, freelance projects, or collaborative work in Web Development and UI/UX Design.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs" style={{ color: '#00F5D4' }}>Available now</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card rounded-2xl p-8">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.1 }}
                  >
                    <FiCheckCircle size={48} style={{ color: '#00F5D4' }} />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl text-white">Message Sent!</h3>
                  <p className="font-body text-sm" style={{ color: '#94A3B8' }}>
                    Your email client should open. I'll get back to you soon!
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-outline text-sm mt-2">
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block font-mono text-xs mb-2" style={{ color: '#94A3B8' }}>Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none transition-all duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: errors.name ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.08)',
                          color: '#fff',
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(0,245,212,0.4)'}
                        onBlur={(e) => e.target.style.borderColor = errors.name ? '#ef4444' : 'rgba(255,255,255,0.08)'}
                      />
                      {errors.name && <p className="font-mono text-xs mt-1 text-red-400">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-mono text-xs mb-2" style={{ color: '#94A3B8' }}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none transition-all duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: errors.email ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.08)',
                          color: '#fff',
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(0,245,212,0.4)'}
                        onBlur={(e) => e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(255,255,255,0.08)'}
                      />
                      {errors.email && <p className="font-mono text-xs mt-1 text-red-400">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block font-mono text-xs mb-2" style={{ color: '#94A3B8' }}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                      className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none transition-all"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#fff',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(0,245,212,0.4)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-xs mb-2" style={{ color: '#94A3B8' }}>Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none transition-all resize-none"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: errors.message ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.08)',
                        color: '#fff',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'rgba(0,245,212,0.4)'}
                      onBlur={(e) => e.target.style.borderColor = errors.message ? '#ef4444' : 'rgba(255,255,255,0.08)'}
                    />
                    {errors.message && <p className="font-mono text-xs mt-1 text-red-400">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {status === 'loading' ? (
                      <><span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> Sending...</>
                    ) : (
                      <><FiSend size={16} /> Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
