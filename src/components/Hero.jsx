import { motion } from 'framer-motion'
import { Github, Linkedin, Download, Mail, MousePointer2, Code2, Zap, Cpu, Database } from 'lucide-react'

const skills = [
  { icon: Code2, label: 'Full-Stack Dev', color: 'from-blue-500 to-cyan-500' },
  { icon: Zap, label: 'AI Automation', color: 'from-yellow-500 to-orange-500' },
  { icon: Cpu, label: 'Embedded Systems', color: 'from-purple-500 to-pink-500' },
  { icon: Database, label: 'Data Engineering', color: 'from-green-500 to-teal-500' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      <div className="section-container relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-sm font-medium text-primary-400">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" aria-hidden="true" />
                Available for Remote Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight mb-6"
            >
              Hi, I'm <span className="text-gradient">Mohamed Mehdi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg sm:text-xl lg:text-2xl text-dark-300 font-medium mb-4"
            >
              Independent Developer & EEA Student
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-dark-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              I specialize in <span className="text-primary-400 font-medium">full-stack AI automation</span>, <span className="text-accent-400 font-medium">web scraping</span>, and <span className="text-purple-400 font-medium">embedded systems</span>. Building intelligent systems that bridge software and hardware.
            </motion.p>

            {/* Skill Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.08, type: 'spring', stiffness: 200 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass border-white/10 hover:border-white/20 transition-all"
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${skill.color} text-dark-950`}>
                    <skill.icon className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-dark-200 hidden sm:inline">{skill.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <a
                href="#"
                className="btn-primary group w-full sm:w-auto flex items-center justify-center gap-2"
                download
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" aria-hidden="true" />
                Download Resume
              </a>
              <a
                href="mailto:flowarchitect.agency@gmail.com"
                className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              <a
                href="https://github.com/FlowArchitect-Agency"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl glass border-white/10 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Github className="w-6 h-6 text-dark-400 group-hover:text-primary-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl glass border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Linkedin className="w-6 h-6 text-dark-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="mailto:flowarchitect.agency@gmail.com"
                className="group p-3 rounded-xl glass border-white/10 hover:border-accent-500/50 hover:bg-accent-500/10 transition-all duration-300"
                aria-label="Email"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Mail className="w-6 h-6 text-dark-400 group-hover:text-accent-400 transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative perspective-1000">
              {/* Floating Code Card */}
              <motion.div
                className="absolute -top-6 -right-6 w-72 h-72 glass-strong rounded-2xl p-6 font-mono text-xs leading-relaxed text-dark-300 hidden lg:block"
                animate={{ y: [0, -15, 0], rotateX: [0, 2, 0], rotateY: [0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="text-dark-400"><code>{`const engineer = {
  name: "Mohamed Mehdi",
  role: "AI Engineer",
  stack: ["Python", "JS", "C++", "n8n",
          "Playwright", "MATLAB"],
  focus: ["AI Automation",
          "Web Scraping",
          "Embedded Systems"],
  status: "Building..."
}`}</code></pre>
              </motion.div>

              {/* Main Visual Card */}
              <motion.div
                className="relative w-full max-w-md mx-auto glass-strong rounded-3xl p-8 md:p-12 border-white/20 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 glass rounded-xl border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-100">Full-Stack Development</h3>
                      <p className="text-sm text-dark-400">React, Node.js, Python, TypeScript</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 glass rounded-xl border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-dark-950" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-100">AI Automation</h3>
                      <p className="text-sm text-dark-400">n8n, Make.com, LangChain, LLMs</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 glass rounded-xl border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-100">Embedded Systems</h3>
                      <p className="text-sm text-dark-400">C, C++, VHDL, MATLAB, Simulink</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 glass rounded-xl border-white/10 border-accent-500/30 bg-accent-500/5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-pink-500 flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-100">Data Engineering</h3>
                      <p className="text-sm text-dark-400">Crawlee, Playwright, Airtable, ETL</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Orb Accents */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-primary-500/30 to-accent-500/30 blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute top-12 right-12 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/30 to-orange-500/30 blur-2xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-500 hidden lg:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <MousePointer2 className="w-5 h-5" />
              <span className="text-xs font-medium">Scroll</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}