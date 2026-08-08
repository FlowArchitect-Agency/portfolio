'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const handleSkip = () => {
    setProgress(100);
    setIsDone(true);
    if (onComplete) onComplete();
  };

  useEffect(() => {
    // Check if already loaded in session to save time
    const hasLoaded = sessionStorage.getItem('mm_preloader_seen');
    if (hasLoaded) {
      handleSkip();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            sessionStorage.setItem('mm_preloader_seen', 'true');
            if (onComplete) onComplete();
          }, 150);
          return 100;
        }
        // Accelerating counter
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return next > 100 ? 100 : next;
      });
    }, 28);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleSkip();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col justify-between bg-canvas text-darkText p-6 md:p-12 select-none border-b border-darkText/10"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleSkip}
        >
          {/* Header row */}
          <div className="flex justify-between items-center font-mono text-xs text-mutedText tracking-wider uppercase">
            <span>MEHDI MECHKAK / APPLIED AI</span>
            <span>PARIS, FR (UTC+01:00)</span>
          </div>

          {/* Center progress indicator */}
          <div className="my-auto max-w-xl">
            <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              SYSTEM INITIALIZING
            </div>

            <div className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-darkText">
              {progress.toString().padStart(3, '0')}
              <span className="text-accent font-light">%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-[2px] bg-borderMuted mt-6 relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-accent"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>

          {/* Footer skip instruction */}
          <div className="flex justify-between items-end font-mono text-xs text-mutedText">
            <div className="hidden sm:block">
              [AGENTS // RAG // ETL // AUTOMATION]
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSkip();
              }}
              className="text-darkText hover:text-accent underline underline-offset-4 tracking-wider uppercase transition-colors"
            >
              SKIP INTRO [ESC]
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
