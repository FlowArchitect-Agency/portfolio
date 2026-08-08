import { motion } from 'framer-motion'
import {
  FileCode, Terminal, Cpu, Database,
  Zap, Globe, Layers, Settings,
  Github, Bot, Brain
} from 'lucide-react'

const techStack = [
  // Core Languages
  { name: 'Python', icon: FileCode, color: 'from-blue-500 to-cyan-500', category: 'Languages', proficiency: 95 },
  { name: 'JavaScript', icon: FileCode, color: 'from-yellow-500 to-orange-500', category: 'Languages', proficiency: 90 },
  { name: 'TypeScript', icon: FileCode, color: 'from-blue-600 to-indigo-600', category: 'Languages', proficiency: 88 },
  { name: 'C', icon: Terminal, color: 'from-slate-500 to-blue-600', category: 'Languages', proficiency: 85 },
  { name: 'C++', icon: Terminal, color: 'from-purple-600 to-blue-700', category: 'Languages', proficiency: 85 },

  // AI & Automation
  { name: 'n8n', icon: Layers, color: 'from-orange-500 to-red-500', category: 'AI & Automation', proficiency: 92 },
  { name: 'Make.com', icon: Settings, color: 'from-purple-500 to-pink-500', category: 'AI & Automation', proficiency: 88 },
  { name: 'LangChain', icon: Bot, color: 'from-green-500 to-teal-500', category: 'AI & Automation', proficiency: 85 },
  { name: 'LLMs', icon: Brain, color: 'from-pink-500 to-purple-500', category: 'AI & Automation', proficiency: 80 },

  // Web Scraping & Data
  { name: 'Crawlee', icon: Globe, color: 'from-teal-500 to-cyan-500', category: 'Data & Scraping', proficiency: 90 },
  { name: 'Playwright', icon: Globe, color: 'from-green-500 to-emerald-500', category: 'Data & Scraping', proficiency: 92 },
  { name: 'Airtable', icon: Database, color: 'from-orange-500 to-amber-500', category: 'Data & Scraping', proficiency: 85 },
  { name: 'ETL Pipelines', icon: Database, color: 'from-blue-500 to-indigo-500', category: 'Data & Scraping', proficiency: 88 },

  // Embedded & Hardware
  { name: 'MATLAB', icon: Cpu, color: 'from-orange-600 to-red-600', category: 'Embedded', proficiency: 85 },
  { name: 'Simulink', icon: Cpu, color: 'from-amber-600 to-orange-700', category: 'Embedded', proficiency: 82 },
  { name: 'VHDL', icon: Cpu, color: 'from-purple-700 to-indigo-700', category: 'Embedded', proficiency: 78 },
  { name: 'LTSpice', icon: Cpu, color: 'from-green-600 to-teal-600', category: 'Embedded', proficiency: 80 },
]

const categories = ['All', 'Languages', 'AI & Automation', 'Data & Scraping', 'Embedded']

export default function TechStack() {
  return (
    <section id="tech" className="relative py-24 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-sm font-medium text-primary-400 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Technical Expertise
          </span>
          <h2 className="section-title text-gradient mb-4">Tech Stack & Skills</h2>
          <p className="section-subtitle mx-auto">
            A versatile toolkit spanning full-stack development, AI automation, data engineering, and embedded systems
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-dark-950 shadow-lg shadow-primary-500/30'
                  : 'glass border-white/10 text-dark-300 hover:border-primary-500/50 hover:text-primary-400 hover:bg-primary-500/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          role="list"
          aria-label="Technical skills"
        >
          {techStack.map((tech, index) => (
            <motion.article
              key={tech.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.03, type: 'spring', stiffness: 100 }}
              className="group relative glass-strong rounded-2xl p-5 hover:border-primary-500/30 hover:bg-primary-500/5 transition-all duration-300"
              whileHover={{ y: -4, scale: 1.02 }}
              role="listitem"
            >
              {/* Icon */}
              <motion.div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${tech.color}`}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <tech.icon className="w-6 h-6 text-dark-950" aria-hidden="true" />
              </motion.div>

              {/* Name & Category */}
              <h3 className="font-semibold text-dark-100 mb-1">{tech.name}</h3>
              <span className="text-xs text-dark-500 capitalize">{tech.category}</span>

              {/* Proficiency Bar */}
              <motion.div
                className="mt-4 h-2 bg-white/5 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: `${tech.proficiency}%` }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.3 + index * 0.03, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                  initial={{ width: 0 }}
                />
              </motion.div>

              {/* Proficiency Text */}
              <span className="absolute top-4 right-4 text-xs font-mono font-bold text-primary-400/70">
                {tech.proficiency}%
              </span>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}