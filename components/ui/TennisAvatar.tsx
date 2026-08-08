'use client';

import { motion } from 'framer-motion';

export default function TennisAvatar({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-72 h-72 sm:w-96 sm:h-96 select-none flex items-center justify-center ${className}`}>
      {/* Outer Indigo Energy Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-accent/40 bg-accent/5 shadow-[0_0_60px_rgba(110,86,207,0.25)]"
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.5, 0.8, 0.5],
          rotate: 360,
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
        }}
      />

      {/* Orbiting Tennis Ball Aura */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-accent shadow-[0_0_15px_#6E56CF] z-20 flex items-center justify-center"
        animate={{
          x: [100, 0, -100, 0, 100],
          y: [-50, -110, -50, 40, -50],
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Tennis Ball Seam lines */}
        <div className="w-4 h-4 border border-white/60 rounded-full border-dashed" />
      </motion.div>

      {/* Main Vector Tennis Player Character Canvas */}
      <motion.div
        className="relative z-10 w-64 h-64 sm:w-80 sm:h-80"
        animate={{ y: [-6, 6, -6], rotate: [-1, 1, -1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 240 240" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="racketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6E56CF" />
              <stop offset="100%" stopColor="#2E6FF6" />
            </linearGradient>
            <radialGradient id="characterGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6E56CF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0A0A0B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Character Glow */}
          <circle cx="120" cy="120" r="90" fill="url(#characterGlow)" />

          {/* Tennis Player Silhouette / Vector Art (Mehdi Mid-Swing) */}
          <g transform="translate(10, 10)">
            {/* Shadows */}
            <ellipse cx="110" cy="205" rx="55" ry="12" fill="#000000" opacity="0.4" />

            {/* Legs / Athletic Stance */}
            <path d="M85 160L70 200M125 160L145 200" stroke="#F5F5F3" strokeWidth="8" strokeLinecap="round" />
            {/* Shoes */}
            <ellipse cx="65" cy="200" rx="10" ry="5" fill="#6E56CF" />
            <ellipse cx="150" cy="200" rx="10" ry="5" fill="#6E56CF" />

            {/* Torso & Athletic Shirt */}
            <path d="M85 110L125 110L130 160L80 160Z" fill="#18181C" stroke="#6E56CF" strokeWidth="2" />
            {/* Accent Shirt Stripes */}
            <line x1="85" y1="125" x2="127" y2="125" stroke="#6E56CF" strokeWidth="3" />

            {/* Left Arm (Balancing) */}
            <path d="M85 115L55 135L40 120" stroke="#F5F5F3" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />

            {/* Head & Short Dark Hair */}
            <circle cx="105" cy="82" r="18" fill="#F5F5F3" />
            {/* Stylized Hair */}
            <path d="M88 80C88 65 100 62 115 64C124 66 125 76 123 80Z" fill="#0A0A0B" />
            {/* Face outline / Beard detail */}
            <path d="M96 90C100 96 112 96 116 90" stroke="#0A0A0B" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Animated Swung Right Arm & Tennis Racket */}
            <motion.g
              animate={{ rotate: [-6, 12, -6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '125px 115px' }}
            >
              {/* Arm holding racket */}
              <path d="M125 115L160 95L190 75" stroke="#F5F5F3" strokeWidth="6" strokeLinecap="round" />

              {/* Racket Handle */}
              <line x1="185" y1="78" x2="202" y2="65" stroke="#18181C" strokeWidth="6" strokeLinecap="round" />

              {/* Racket Head Frame */}
              <ellipse cx="218" cy="52" rx="18" ry="24" fill="none" stroke="url(#racketGrad)" strokeWidth="3.5" transform="rotate(-30 218 52)" />

              {/* Racket Strings */}
              <line x1="206" y1="40" x2="230" y2="64" stroke="#F5F5F3" strokeWidth="0.8" opacity="0.7" />
              <line x1="206" y1="64" x2="230" y2="40" stroke="#F5F5F3" strokeWidth="0.8" opacity="0.7" />
              <line x1="218" y1="32" x2="218" y2="72" stroke="#F5F5F3" strokeWidth="0.8" opacity="0.7" />
              <line x1="198" y1="52" x2="238" y2="52" stroke="#F5F5F3" strokeWidth="0.8" opacity="0.7" />
            </motion.g>
          </g>
        </svg>
      </motion.div>

      {/* Floating Character Badge */}
      <div className="absolute -bottom-2 bg-surfaceElevated border border-borderColor px-3 py-1 rounded-full font-mono text-[10px] text-textSecondary uppercase tracking-widest flex items-center gap-1.5 shadow-md">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span>MEHDI MECHKAK // ATHLETIC CHARACTER</span>
      </div>
    </div>
  );
}
