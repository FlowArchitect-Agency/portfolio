'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-canvas border-t border-borderMuted py-8 px-6 md:px-12 font-mono text-xs text-mutedText select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span>© {new Date().getFullYear()} MEHDI MECHKAK // APPLIED AI</span>
        </div>

        {/* Center: Paris Location */}
        <div className="hidden md:block text-[11px] tracking-wider uppercase">
          PARIS, FRANCE (CET // UTC+01:00)
        </div>

        {/* Right: Back to Top button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 hover:text-accent transition-colors uppercase tracking-wider group py-1"
        >
          <span>[BACK TO TOP]</span>
          <ArrowUp className="w-3.5 h-3.5 text-mutedText group-hover:text-accent group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
