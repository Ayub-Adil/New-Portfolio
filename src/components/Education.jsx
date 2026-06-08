import { motion } from 'framer-motion'
import { FiBook, FiAward } from 'react-icons/fi'

const education = [
  {
    id: 1,
    degree: 'B.Tech — Computer Science & Design',
    institution: 'Dr. B.C. Roy Engineering College',
    period: '2024 – 2028',
    status: 'Ongoing',
    grade: null,
    color: '#00F5D4',
    icon: '🎓',
    highlights: ['Computer Science fundamentals', 'UI/UX Design principles', 'Software Engineering', 'Data Structures & Algorithms'],
  },
  {
    id: 2,
    degree: 'Class XII — CBSE Science',
    institution: 'Senior Secondary School',
    period: '2022 – 2024',
    status: 'Completed',
    grade: '78.2%',
    color: '#7C3AED',
    icon: '📚',
    highlights: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
  },
  {
    id: 3,
    degree: 'Class X — CBSE',
    institution: 'Secondary School',
    period: '2021 – 2022',
    status: 'Completed',
    grade: '80%',
    color: '#10b981',
    icon: '📖',
    highlights: ['Mathematics', 'Science', 'English', 'Social Studies'],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 40% at 30% 70%, rgba(0,245,212,0.05), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm tracking-widest mb-3" style={{ color: '#00F5D4' }}>04 / education</p>
          <h2 className="section-heading text-white">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 flex flex-col"
              whileHover={{ scale: 1.02 }}
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${edu.color}12`, border: `1px solid ${edu.color}25` }}
                >
                  {edu.icon}
                </div>
                <div className="text-right">
                  {edu.grade && (
                    <div className="flex items-center gap-1.5 justify-end">
                      <FiAward size={12} style={{ color: edu.color }} />
                      <span className="font-display font-black text-lg" style={{ color: edu.color }}>{edu.grade}</span>
                    </div>
                  )}
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: edu.status === 'Ongoing' ? 'rgba(0,245,212,0.1)' : 'rgba(255,255,255,0.05)',
                      color: edu.status === 'Ongoing' ? '#00F5D4' : '#94A3B8',
                      border: `1px solid ${edu.status === 'Ongoing' ? 'rgba(0,245,212,0.2)' : 'rgba(255,255,255,0.08)'}`,
                    }}
                  >
                    {edu.status === 'Ongoing' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />}
                    {edu.status}
                  </span>
                </div>
              </div>

              <h3 className="font-display font-bold text-white mb-1 leading-snug">{edu.degree}</h3>
              <div className="flex items-center gap-1.5 mb-2">
                <FiBook size={12} style={{ color: edu.color }} />
                <p className="font-body text-sm" style={{ color: edu.color }}>{edu.institution}</p>
              </div>
              <p className="font-mono text-xs mb-5" style={{ color: '#94A3B8' }}>{edu.period}</p>

              {/* Highlights */}
              <div className="mt-auto">
                <p className="font-mono text-xs mb-3" style={{ color: '#94A3B8' }}>// subjects</p>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map(h => (
                    <span
                      key={h}
                      className="font-mono text-xs px-2 py-1 rounded-lg"
                      style={{
                        background: `${edu.color}08`,
                        color: '#cbd5e1',
                        border: `1px solid ${edu.color}15`,
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
