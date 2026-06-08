import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiStar, FiGitBranch, FiCode, FiUsers, FiBook, FiExternalLink } from 'react-icons/fi'

const USERNAME = 'Ayub-Adil'

function StatBox({ icon: Icon, label, value, color = '#00F5D4', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="glass-card rounded-xl p-5 flex items-center gap-4"
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
        <Icon size={18} style={{ color }} />
      </div>
      <div>
        <p className="font-display font-black text-2xl text-white">{value ?? '—'}</p>
        <p className="font-body text-xs" style={{ color: '#94A3B8' }}>{label}</p>
      </div>
    </motion.div>
  )
}

function RepoCard({ repo, index }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="glass-card rounded-xl p-5 flex flex-col gap-3 group"
      whileHover={{ y: -3 }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <FiBook size={14} style={{ color: '#00F5D4' }} />
          <span className="font-display font-bold text-sm text-white group-hover:text-[#00F5D4] transition-colors truncate max-w-[140px]">
            {repo.name}
          </span>
        </div>
        <FiExternalLink size={12} style={{ color: '#94A3B8' }} className="flex-shrink-0 group-hover:text-[#00F5D4] transition-colors" />
      </div>

      <p className="font-body text-xs leading-relaxed flex-1" style={{ color: '#94A3B8' }}>
        {repo.description || 'No description provided.'}
      </p>

      <div className="flex items-center gap-4">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: langColor(repo.language) }} />
            <span className="font-mono text-xs" style={{ color: '#94A3B8' }}>{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-1 ml-auto">
          <FiStar size={11} style={{ color: '#94A3B8' }} />
          <span className="font-mono text-xs" style={{ color: '#94A3B8' }}>{repo.stargazers_count}</span>
        </div>
        <div className="flex items-center gap-1">
          <FiGitBranch size={11} style={{ color: '#94A3B8' }} />
          <span className="font-mono text-xs" style={{ color: '#94A3B8' }}>{repo.forks_count}</span>
        </div>
      </div>
    </motion.a>
  )
}

function langColor(lang) {
  const colors = {
    JavaScript: '#f7df1e', Python: '#3572A5', HTML: '#e34c26',
    CSS: '#563d7c', TypeScript: '#2b7489', Java: '#b07219',
    C: '#555555', 'Jupyter Notebook': '#DA5B0B',
  }
  return colors[lang] || '#00F5D4'
}

export default function GitHubStats() {
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`),
        ])
        if (!profileRes.ok) throw new Error('GitHub API error')
        const profileData = await profileRes.json()
        const reposData = await reposRes.json()
        setProfile(profileData)
        setRepos(Array.isArray(reposData) ? reposData.slice(0, 6) : [])
      } catch (e) {
        setError('Unable to load GitHub data.')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id="github" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(124,58,237,0.06), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-sm tracking-widest mb-3" style={{ color: '#00F5D4' }}>07 / github</p>
          <h2 className="section-heading text-white">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
        </motion.div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="flex gap-2">
              {[0,1,2].map(i => (
                <motion.div key={i} className="w-2 h-2 rounded-full" style={{ background: '#00F5D4' }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }} />
              ))}
            </div>
          </div>
        )}

        {error && (
          <div className="glass-card rounded-2xl p-8 text-center">
            <FiGithub size={32} style={{ color: '#94A3B8' }} className="mx-auto mb-3" />
            <p className="font-body text-sm" style={{ color: '#94A3B8' }}>{error}</p>
            <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer"
              className="btn-outline inline-flex items-center gap-2 mt-4 text-sm">
              <FiGithub size={16} /> View on GitHub
            </a>
          </div>
        )}

        {!loading && !error && profile && (
          <>
            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6"
            >
              <img
                src={profile.avatar_url}
                alt={profile.name}
                className="w-20 h-20 rounded-2xl object-cover"
                style={{ border: '2px solid rgba(0,245,212,0.2)' }}
              />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-display font-black text-xl text-white">{profile.name || USERNAME}</h3>
                <p className="font-mono text-sm mb-2" style={{ color: '#00F5D4' }}>@{profile.login}</p>
                {profile.bio && <p className="font-body text-sm" style={{ color: '#94A3B8' }}>{profile.bio}</p>}
              </div>
              <a
                href={profile.html_url}
                target="_blank"
                rel="noreferrer"
                className="btn-outline flex items-center gap-2 text-sm flex-shrink-0"
              >
                <FiGithub size={16} /> View Profile
              </a>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatBox icon={FiBook} label="Public Repos" value={profile.public_repos} delay={0.1} />
              <StatBox icon={FiUsers} label="Followers" value={profile.followers} color="#7C3AED" delay={0.2} />
              <StatBox icon={FiCode} label="Following" value={profile.following} color="#10b981" delay={0.3} />
              <StatBox icon={FiGitBranch} label="Gists" value={profile.public_gists} color="#f97316" delay={0.4} />
            </div>

            {/* Contribution graph (using shields.io badge as fallback) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 mb-8 overflow-hidden"
            >
              <p className="font-mono text-xs mb-4" style={{ color: '#94A3B8' }}>// contribution graph</p>
              <img
                src={`https://ghchart.rshah.org/00F5D4/${USERNAME}`}
                alt="GitHub contribution chart"
                className="w-full rounded-lg"
                style={{ filter: 'brightness(1.1)' }}
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <div className="mt-4 flex flex-wrap gap-3">
                <img src={`https://img.shields.io/github/followers/${USERNAME}?style=flat&color=00F5D4&labelColor=0D1224&label=Followers`} alt="followers" onError={(e) => e.target.style.display='none'} />
                <img src={`https://img.shields.io/badge/Focus-Web%20Dev%20%26%20UI%2FUX-7C3AED?style=flat&labelColor=0D1224`} alt="focus" />
              </div>
            </motion.div>

            {/* Repos grid */}
            {repos.length > 0 && (
              <>
                <p className="font-mono text-xs mb-4" style={{ color: '#94A3B8' }}>// recent repositories</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {repos.map((repo, i) => (
                    <RepoCard key={repo.id} repo={repo} index={i} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
  )
}
