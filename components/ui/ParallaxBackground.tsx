'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBackground() {
  const { scrollY } = useScroll();
  const yCircuit = useTransform(scrollY, [0, 3000], [0, -400]);
  const yNodes = useTransform(scrollY, [0, 3000], [0, -200]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-40">
      {/* Circuit Board Trace Parallax Grid Layer */}
      <motion.div
        style={{ y: yCircuit }}
        className="absolute inset-0 bg-tech-dots"
      />

      {/* Radial Industrial to AI Glow Layer */}
      <motion.div
        style={{ y: yNodes }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-radial-gradient bg-accent/5 blur-[120px]"
      />
    </div>
  );
}
