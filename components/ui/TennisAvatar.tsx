'use client';

import Image from 'next/image';
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

      {/* Orbiting Tennis Ball Energy Pulse */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-accent shadow-[0_0_15px_#6E56CF] z-20 flex items-center justify-center pointer-events-none"
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
        <div className="w-4 h-4 border border-white/60 rounded-full border-dashed" />
      </motion.div>

      {/* Generated Photo-backed Tennis Character Image with Animated Sway Loop */}
      <motion.div
        className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-accent/60 shadow-[0_0_40px_rgba(110,86,207,0.4)]"
        animate={{ y: [-8, 8, -8], rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/mehdi_tennis_character.jpg"
          alt="Mehdi Mechkak — Stylized Tennis Character"
          fill
          priority
          sizes="(max-width: 768px) 256px, 320px"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Character Badge */}
      <div className="absolute -bottom-2 bg-surfaceElevated border border-borderColor px-3 py-1 rounded-full font-mono text-[10px] text-textSecondary uppercase tracking-widest flex items-center gap-1.5 shadow-md z-30">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span>MEHDI MECHKAK // TENNIS CHARACTER</span>
      </div>
    </div>
  );
}
