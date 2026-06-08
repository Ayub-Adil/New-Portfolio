import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    id: 1,
    role: 'Web Development Intern',
    company: 'Pinnacle Labs',
    period: 'Apr 2026 – May 2026',
    location: 'Remote',
    type: 'Internship',
    color: '#00F5D4',
    icon: '💻',
    responsibilities: [
      'Developed responsive web applications with clean, maintainable code',
      'Built interactive UI components with smooth user interactions',
      'Optimized layouts for mobile devices and cross-browser compatibility',
      'Collaborated with senior developers on real-world project features',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    id: 2,
    role: 'UI/UX Design Intern',
    company: 'Future Interns',
    period: 'May 2026 – June 2026',
    location: 'Remote',
    type: 'Internship',
    color: '#7C3AED',
    icon: '🎨',
    responsibilities: [
      'Designed responsive dashboards and analytics interfaces in Figma',
      'Crafted mobile-first interfaces with intuitive user flows',
      'Built detailed wireframes and high-fidelity prototypes',
      'Created comprehensive user workflows for complex app features',
      'Applied design thinking principles to real product challenges',
    ],
    skills: ['Figma', 'Wireframing', 'Prototyping', 'User Flows', 'UI Design'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 50% at 70% 40%, rgba(124,58,237,0.07), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm tracking-widest mb-3" style={{ color: '#00F5D4' }}>03 / experience</p>
          <h2 className="section-heading text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline spine */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,245,212,0.3), rgba(124,58,237,0.3), transparent)' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content card */}
                <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                  <motion.div
                    className="glass-card rounded-2xl p-6 ml-12 md:ml-0"
                    whileHover={{ scale: 1.01 }}
                  >
                    {/* Header */}
                    <div className={`flex items-start gap-3 mb-4 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: `${exp.color}15`, border: `1px solid ${exp.color}30` }}
                      >
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-white">{exp.role}</h3>
                        <p className="font-body font-semibold text-sm" style={{ color: exp.color }}>{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className={`flex flex-wrap gap-3 mb-5 ${i % 2 === 1 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center gap-1.5 font-mono text-xs" style={{ color: '#94A3B8' }}>
                        <FiCalendar size={12} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-xs" style={{ color: '#94A3B8' }}>
                        <FiMapPin size={12} />
                        {exp.location}
                      </div>
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded-full"
                        style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}25` }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <ul className={`space-y-2 mb-5 ${i % 2 === 1 ? 'md:list-none' : ''}`}>
                      {exp.responsibilities.map((r, ri) => (
                        <li key={ri} className={`flex items-start gap-2 font-body text-sm ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`} style={{ color: '#94A3B8' }}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                          {r}
                        </li>
                      ))}
                    </ul>

                    {/* Skills used */}
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 1 ? 'md:justify-end' : ''}`}>
                      {exp.skills.map(s => (
                        <span
                          key={s}
                          className="font-mono text-xs px-3 py-1 rounded-full"
                          style={{
                            background: `${exp.color}08`,
                            border: `1px solid ${exp.color}20`,
                            color: exp.color,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 top-8 -translate-x-1/2 flex flex-col items-center">
                  <motion.div
                    className="w-4 h-4 rounded-full z-10"
                    style={{
                      background: exp.color,
                      boxShadow: `0 0 12px ${exp.color}`,
                      border: '2px solid #050816',
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, type: 'spring' }}
                  />
                </div>

                {/* Empty spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
