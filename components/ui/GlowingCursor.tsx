'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function GlowingCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices (> 768px) and non-touch pointers
    const isMobile = window.innerWidth < 768 || matchMedia('(pointer: coarse)').matches;
    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.getAttribute('role') === 'button' ||
          target.closest('a') ||
          target.closest('button') ||
          target.dataset.cursorHover === 'true')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precision Glowing Dot */}
      <motion.div
        className="fixed w-2.5 h-2.5 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_rgba(110,86,207,0.9)]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 0.6 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />
      {/* Expanding Electric Aura Ring */}
      <motion.div
        className="fixed w-10 h-10 border border-accent/40 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(110,86,207,0.3)]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? '#6E56CF' : 'rgba(110, 86, 207, 0.3)',
          backgroundColor: isHovered ? 'rgba(110, 86, 207, 0.08)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      />
    </div>
  );
}
