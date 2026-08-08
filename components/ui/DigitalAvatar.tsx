'use client';

import { motion } from 'framer-motion';

export default function DigitalAvatar({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-64 h-64 sm:w-80 sm:h-80 select-none flex items-center justify-center ${className}`}>
      {/* Outer Glowing Circuit Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-accent/40 bg-accent/5 shadow-[0_0_50px_rgba(110,86,207,0.25)]"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.9, 0.6],
          rotate: 360,
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 45, repeat: Infinity, ease: 'linear' },
        }}
      />

      {/* Counter-rotating Inner Tech Ring */}
      <motion.div
        className="absolute inset-4 rounded-full border border-dashed border-accent/60"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Central SVG Animated Circuit & Neural Node Graph */}
      <svg
        viewBox="0 0 200 200"
        className="w-48 h-48 sm:w-60 sm:h-60 relative z-10 overflow-visible"
      >
        <defs>
          <radialGradient id="avatarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6E56CF" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#2E6FF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6E56CF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6E56CF" />
            <stop offset="100%" stopColor="#2E6FF6" />
          </linearGradient>
        </defs>

        {/* Central Core Pulse */}
        <circle cx="100" cy="100" r="38" fill="url(#avatarGlow)" />

        {/* Outer Orbiting Data Nodes */}
        <g>
          {/* Circuit Lines connecting center to nodes */}
          <line x1="100" y1="100" x2="50" y2="50" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="100" y1="100" x2="150" y2="50" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="100" y1="100" x2="160" y2="120" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="100" y1="100" x2="40" y2="130" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="100" y1="100" x2="100" y2="170" stroke="url(#circuitGrad)" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Node 1: High Voltage Circuit */}
          <motion.g
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <circle cx="50" cy="50" r="6" fill="#6E56CF" />
            <circle cx="50" cy="50" r="11" stroke="#6E56CF" strokeWidth="1" fill="none" opacity="0.6" />
          </motion.g>

          {/* Node 2: SCADA Telemetry */}
          <motion.g
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <circle cx="150" cy="50" r="7" fill="#2E6FF6" />
            <circle cx="150" cy="50" r="13" stroke="#2E6FF6" strokeWidth="1" fill="none" opacity="0.6" />
          </motion.g>

          {/* Node 3: Vector Embeddings / pgvector */}
          <motion.g
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <circle cx="160" cy="120" r="6" fill="#6E56CF" />
            <circle cx="160" cy="120" r="10" stroke="#6E56CF" strokeWidth="1" fill="none" opacity="0.5" />
          </motion.g>

          {/* Node 4: FastAPI / Python Service */}
          <motion.g
            animate={{ y: [3, -3, 3] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <circle cx="40" cy="130" r="8" fill="#2E6FF6" />
            <circle cx="40" cy="130" r="14" stroke="#2E6FF6" strokeWidth="1" fill="none" opacity="0.6" />
          </motion.g>

          {/* Node 5: AWS Cloud Infrastructure */}
          <motion.g
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <circle cx="100" cy="170" r="7" fill="#6E56CF" />
            <circle cx="100" cy="170" r="12" stroke="#6E56CF" strokeWidth="1" fill="none" opacity="0.6" />
          </motion.g>
        </g>

        {/* Central Core Emblem: High Voltage to AI Symbol */}
        <g transform="translate(84, 84)">
          <path
            d="M16 2L6 18H16L14 30L26 14H16L18 2Z"
            fill="none"
            stroke="#F5F5F3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>

      {/* Floating Status Label */}
      <div className="absolute -bottom-2 bg-surfaceElevated border border-borderColor px-3 py-1 rounded-full font-mono text-[10px] text-textSecondary uppercase tracking-widest flex items-center gap-1.5 shadow-md">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span>SCADA // NEURAL NODE GRAPH</span>
      </div>
    </div>
  );
}
