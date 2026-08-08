import { motion } from 'framer-motion'
import {
  Github, Linkedin, Download, Mail,
  ChevronDown, MousePointer2,
  Code2, Zap, Cpu, Database,
  Terminal, Globe, Layers
} from 'lucide-react'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import BentoGrid from './components/BentoGrid'
import ExperienceTimeline from './components/ExperienceTimeline'
import GitHubFeed from './components/GitHubFeed'
import Footer from './components/Footer'
import BackgroundOrbs from './components/BackgroundOrbs'
import NavBar from './components/NavBar'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

export default function App() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen relative overflow-x-hidden"
    >
      {/* Background Orbs */}
      <BackgroundOrbs />

      {/* Navigation */}
      <NavBar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <TechStack />
        <BentoGrid />
        <ExperienceTimeline />
        <GitHubFeed />
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  )
}