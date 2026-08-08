'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import StatusBadge from '../ui/StatusBadge';
import { ArrowDown, Code2, Terminal } from 'lucide-react';

// Lazy load 3D scene to ensure fast initial render & performance
const DynamicHeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center bg-surface/30 border border-dashed border-borderMuted rounded-lg p-6 font-mono text-xs text-mutedText">
      <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin mb-3" />
      <span>INITIALIZING 3D KNOWLEDGE GRAPH...</span>
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-tech-dots">
      {/* Top Metadata Row */}
      <motion.div
        className="flex flex-wrap items-center justify-between gap-4 mb-6"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <StatusBadge idCode="SYS-MEHDI-PARIS" status="AVAILABLE FOR HIGH-IMPACT AI ROLES" />

        <div className="flex items-center gap-4 font-mono text-xs text-mutedText">
          <span className="inline-flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-accent" />
            EVIDENCE-FIRST AI ARCHITECTURE
          </span>
        </div>
      </motion.div>

      {/* Main Grid: Left Headline & Subtitle, Right 3D Scene */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
        {/* Left Column: Fragmented Headline & Core Manifesto */}
        <motion.div
          className="lg:col-span-7 space-y-6 z-10"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Fragmented/Layered Display Headline */}
          <div className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-darkText select-none uppercase">
            <div>SYSTEMS THAT</div>
            <div className="relative inline-block mt-1">
              {/* Layered Accent Glow & Offset Signature */}
              <span className="relative z-10 text-accent font-extrabold">
                SHIP<span className="text-darkText">.</span>
              </span>
              <span className="absolute top-[0.04em] left-[0.04em] text-darkText/15 z-0 font-extrabold pointer-events-none select-none">
                SHIP.
              </span>
            </div>
          </div>

          <p className="font-sans text-lg md:text-xl text-darkText/80 max-w-2xl font-normal leading-relaxed">
            I am <strong className="font-semibold text-darkText">Mehdi Mechkak</strong>, an Applied AI Engineer based in Paris. I build deterministic RAG pipelines, human-in-the-loop workflows, and robust automated BI systems.
          </p>

          {/* Quick Technical Credential Pills */}
          <div className="flex flex-wrap gap-2 font-mono text-xs pt-2">
            <span className="bg-surface border border-borderMuted px-3 py-1.5 rounded-sm text-darkText font-medium">
              Python / RAG Architecture
            </span>
            <span className="bg-surface border border-borderMuted px-3 py-1.5 rounded-sm text-darkText font-medium">
              TypeScript / Agent Tools
            </span>
            <span className="bg-surface border border-borderMuted px-3 py-1.5 rounded-sm text-darkText font-medium">
              PostgreSQL / pgvector
            </span>
            <span className="bg-surface border border-borderMuted px-3 py-1.5 rounded-sm text-darkText font-medium">
              Airflow / ETL Pipelines
            </span>
          </div>

          {/* CTA Row */}
          <div className="flex items-center gap-4 pt-4">
            <a
              href="#modules"
              className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-wider bg-darkText text-canvas px-6 py-3.5 rounded-sm font-semibold hover:bg-accent transition-colors group"
            >
              <span>EXPLORE MODULES</span>
              <ArrowDown className="w-4 h-4 text-canvas group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://github.com/FlowArchitect-Agency"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider bg-surface border border-borderMuted px-5 py-3.5 rounded-sm font-medium hover:border-darkText transition-colors"
            >
              <Code2 className="w-4 h-4 text-accent" />
              <span>GITHUB</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Canvas */}
        <motion.div
          className="lg:col-span-5 h-[340px] sm:h-[420px] lg:h-[480px] relative rounded-xl border border-borderMuted/80 bg-surface/40 backdrop-blur-sm overflow-hidden p-2 shadow-sm"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Overlay Corner Coordinates Label */}
          <div className="absolute top-4 left-4 z-10 font-mono text-[10px] text-mutedText tracking-widest uppercase bg-canvas/80 px-2.5 py-1 border border-borderMuted rounded">
            SYS_GRAPH // 3D_NODES [CURSOR_INTERACTIVE]
          </div>

          {/* Interactive R3F Node Graph */}
          <DynamicHeroScene />

          {/* Bottom Coordinates Overlay */}
          <div className="absolute bottom-4 right-4 z-10 font-mono text-[10px] text-mutedText tracking-widest uppercase bg-canvas/80 px-2.5 py-1 border border-borderMuted rounded">
            PARIS 48.8566° N, 2.3522° E
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Cue */}
      <motion.div
        className="flex items-center justify-between pt-8 border-t border-borderMuted/60 font-mono text-xs text-mutedText"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="uppercase tracking-widest">[SCROLL TO EXPLORE MODULES]</span>
        <span className="hidden sm:inline-block">SECTION 01 / HERO</span>
      </motion.div>
    </section>
  );
}
