import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiLock, FiExternalLink, FiX } from 'react-icons/fi'

const achievements = [
  {
    id: 1,
    title: 'Web Development Internship',
    issuer: 'Pinnacle Labs',
    type: 'Certificate',
    color: '#00F5D4',
    icon: '💻',
    year: '2026',
    comingSoon: false,
    certificateImage: '/Pinnacle-Lab-Certificate.jpg'
  },
  {
    id: 2,
    title: 'UI/UX Design Internship',
    issuer: 'Future Interns',
    type: 'Certificate',
    color: '#7C3AED',
    icon: '🎨',
    year: '2026',
    comingSoon: false,
    certificateImage: '/future-intern-certificate.jpg'
  },
  {
    id: 3,
    title: 'CDAC Finishing School Program',
    issuer: 'CDAC India',
    subtitle: '3D Printing & Additive Manufacturing',
    type: 'Certification',
    color: '#f97316',
    icon: '🖨️',
    year: '2025',
    comingSoon: true,
    certificateImage: '/certificates/cdac.png'
  },
  {
    id: 4,
    title: 'Augmented Reality & Virtual Reality',
    issuer: 'Workshop Certificate',
    type: 'Workshop',
    color: '#10b981',
    icon: '🥽',
    year: '2025',
    comingSoon: false,
    certificateImage: '/AR_VR_cert.jpeg'
  },
  {
    id: 5,
    title: 'Letter of Recommendation',
    issuer: 'Future Interns',
    type: 'LOR',
    color: '#94A3B8',
    icon: '📜',
    year: '2026',
    comingSoon: false,
    certificateImage: '/LoR.jpg',
  },
]

export default function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 80%, rgba(0,245,212,0.05), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm tracking-widest mb-3" style={{ color: '#00F5D4' }}>06 / achievements</p>
          <h2 className="section-heading text-white">
            Certifications &amp; <span className="gradient-text">Awards</span>
          </h2>
          <p className="font-body mt-4 max-w-xl" style={{ color: '#94A3B8' }}>
            Recognition and credentials earned through dedication and hands-on learning.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`glass-card rounded-2xl p-6 relative overflow-hidden group ${item.comingSoon ? 'opacity-70' : ''}`}
              whileHover={!item.comingSoon ? { scale: 1.02 } : {}}
            >
              {/* Accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${item.color}, transparent)`,
                  transform: 'translate(30%, -30%)',
                }}
              />

              {/* Coming soon overlay */}
              {item.comingSoon && (
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl z-10"
                  style={{ background: 'rgba(5,8,22,0.6)', backdropFilter: 'blur(2px)' }}>
                  <FiLock size={24} style={{ color: '#94A3B8' }} className="mb-2" />
                  <span className="font-mono text-xs font-bold tracking-widest" style={{ color: '#94A3B8' }}>COMING SOON</span>
                </div>
              )}

              {/* Content */}
              <div className={item.comingSoon ? 'blur-sm' : ''}>
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                  >
                    {item.icon}
                  </div>
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: `${item.color}10`,
                      color: item.color,
                      border: `1px solid ${item.color}25`,
                    }}
                  >
                    {item.type}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white mb-1 leading-snug">{item.title}</h3>
                {item.subtitle && (
                  <p className="font-body text-xs mb-1" style={{ color: '#94A3B8' }}>{item.subtitle}</p>
                )}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1.5">
                    <FiAward size={12} style={{ color: item.color }} />
                    <p className="font-body text-sm font-medium" style={{ color: item.color }}>{item.issuer}</p>
                  </div>
                  <span className="font-mono text-xs" style={{ color: '#94A3B8' }}>{item.year}</span>
                </div>

                {/* Certificate preview */}
                {item.certificateImage && !item.comingSoon && (
                  <div className="mt-4">
                    <img
                      src={item.certificateImage}
                      alt={`${item.title} Certificate`}
                      className="rounded-lg border border-gray-700 shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                      onClick={() => setSelectedCertificate(item.certificateImage)}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-w-3xl w-full p-4">
            <button
              className="absolute top-2 right-2 text-white hover:text-[#00F5D4]"
              onClick={() => setSelectedCertificate(null)}
            >
              <FiX size={24} />
            </button>
            <img
              src={selectedCertificate}
              alt="Certificate"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      )}
    </section>
  )
}
