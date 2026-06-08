import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi'
import { featuredProjects, additionalProjects, projectCategories } from '../data/projects'

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="glass-card rounded-2xl overflow-hidden group flex flex-col"
      whileHover={{ y: -4 }}
    >
      {/* Card top accent */}
      <div
        className="h-1"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon & links */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{
              background: `${project.accentColor}12`,
              border: `1px solid ${project.accentColor}20`,
            }}
          >
            {project.icon}
          </div>
          <div className="flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#94A3B8',
                }}
                whileHover={{ scale: 1.1, color: '#00F5D4', borderColor: 'rgba(0,245,212,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub size={14} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#94A3B8',
                }}
                whileHover={{ scale: 1.1, color: '#00F5D4', borderColor: 'rgba(0,245,212,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink size={14} />
              </motion.a>
            )}
          </div>
        </div>

        <h3 className="font-display font-bold text-white mb-2 group-hover:text-[#00F5D4] transition-colors">
          {project.title}
        </h3>
        <p className="font-body text-sm leading-relaxed mb-4 flex-1" style={{ color: '#94A3B8' }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span
              key={t}
              className="font-mono text-xs px-2.5 py-1 rounded-full"
              style={{
                background: `${project.accentColor}08`,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}20`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function MiniCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass-card rounded-xl p-4 flex items-center gap-4 group"
      whileHover={{ y: -2 }}
    >
      <span className="text-xl">{project.icon}</span>
      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-sm text-white truncate group-hover:text-[#00F5D4] transition-colors">
          {project.title}
        </p>
        <div className="flex flex-wrap gap-1 mt-1">
          {project.tech.map(t => (
            <span key={t} className="font-mono text-xs" style={{ color: '#94A3B8' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* GitHub + Live buttons */}
      <div className="flex gap-2">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            <FiGithub size={14} style={{ color: '#94A3B8' }} className="hover:text-[#00F5D4] transition-colors" />
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer">
            <FiExternalLink size={14} style={{ color: '#94A3B8' }} className="hover:text-[#00F5D4] transition-colors" />
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 60% 30%, rgba(124,58,237,0.06), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-sm tracking-widest mb-3" style={{ color: '#00F5D4' }}>05 / projects</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-heading text-white">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <a
              href="https://github.com/Ayub-Adil"
              target="_blank"
              rel="noreferrer"
              aria-label="View all projects on GitHub"
              className="btn-outline flex items-center gap-2 text-sm relative z-20"
              style={{ pointerEvents: "auto" }}
            >
              <FiGithub size={16} />
              View All on GitHub
            </a>
          </div>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-8 flex-wrap relative z-10"
        >
          <FiFilter size={14} style={{ color: '#94A3B8' }} />
          {projectCategories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="font-mono text-xs px-4 py-2 rounded-full transition-all duration-200 cursor-pointer relative z-20"
              style={{
                pointerEvents: "auto",
                background: activeFilter === cat ? 'rgba(0,245,212,0.12)' : 'rgba(255,255,255,0.04)',
                border: activeFilter === cat ? '1px solid rgba(0,245,212,0.35)' : '1px solid rgba(255,255,255,0.08)',
                color: activeFilter === cat ? '#00F5D4' : '#94A3B8',
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured projects grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Additional projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
            <p className="font-mono text-xs" style={{ color: '#94A3B8' }}>other noteworthy projects</p>
            <div className="h-px flex-1" style={{ background: 'rgba(255,255,255,0.06)' }} />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {additionalProjects.map((p) => (
              <MiniCard key={p.id} project={p} />
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  )
}
