'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import ThemeToggle from '../ui/ThemeToggle';
import { DESIGN_TOKENS } from '@/lib/design-tokens';
import { Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { author, navLinks } = DESIGN_TOKENS;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF7]/85 backdrop-blur-md border-b border-borderColor transition-colors duration-200">
      <nav className="max-w-7xl mx-auto px-8 md:px-16 h-20 flex items-center justify-between font-sans select-none">
        {/* Brand Text Wordmark with ✦ Sparkle Icon */}
        <Link href="/" className="font-display font-bold text-2xl tracking-tight text-[#0A0A0B] hover:opacity-80 transition-opacity flex items-center gap-1.5">
          <span className="text-accent font-bold">✦</span>
          <span>{author.name}.</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-textSecondary">
          {navLinks.map((link) => (
            <MagneticButton key={link.label} strength={0.15}>
              <Link
                href={link.href}
                className="hover:text-[#0A0A0B] transition-colors relative py-1"
              >
                {link.label}
              </Link>
            </MagneticButton>
          ))}

          {/* Download Resume Button */}
          <MagneticButton strength={0.2}>
            <a
              href="/Mehdi_Mechkak_AI_Engineer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0A0A0B] text-[#FAFAF7] font-semibold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-accent" />
              <span>RESUME</span>
            </a>
          </MagneticButton>

          {/* Theme Switcher */}
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0A0A0B] hover:bg-surface border border-borderColor rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Drawer Menu with Apple Spring Physics */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
            className="md:hidden bg-[#FAFAF7]/95 backdrop-blur-lg border-b border-borderColor px-8 py-6 space-y-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-display font-medium text-lg text-[#0A0A0B] hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Mehdi_Mechkak_AI_Engineer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 bg-[#0A0A0B] text-[#FAFAF7] font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-lg w-full justify-center mt-2 active:scale-[0.98] transition-transform"
            >
              <Download className="w-4 h-4 text-accent" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
