import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'

function SkillBar({ name, level, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-body text-sm font-medium text-white group-hover:text-[#00F5D4] transition-colors">{name}</span>
        <span className="font-mono text-xs" style={{ color: '#94A3B8' }}>{level}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="h-full rounded-full relative"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: index * 0.08 + 0.2 }}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        >
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
            style={{ background: color, boxShadow: `0 0 8px ${color}` }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + 1.2 }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

const techBadges = [
  'Python', 'JavaScript', 'C', 'Java', 'HTML5', 'CSS3',
  'React', 'Tailwind CSS', 'Flask', 'SQLite', 'Figma',
  'Git', 'GitHub', 'VS Code', 'Canva', 'Wireframing',
  'Prototyping', 'OOP', 'DSA', 'REST APIs',
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 20% 60%, rgba(0,245,212,0.05), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm tracking-widest mb-3" style={{ color: '#00F5D4' }}>02 / skills</p>
          <h2 className="section-heading text-white">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="font-body mt-4 max-w-xl" style={{ color: '#94A3B8' }}>
            A toolkit built through hands-on projects, internships, and continuous learning.
          </p>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}25` }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-white">{cat.title}</h3>
                  <p className="font-mono text-xs" style={{ color: cat.color }}>{cat.skills.length} skills</p>
                </div>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} color={cat.color} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8"
        >
          <p className="font-mono text-xs mb-6 text-center" style={{ color: '#94A3B8' }}>// full tech stack</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                className="tag cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.08 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
