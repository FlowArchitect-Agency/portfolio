'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [parisTime, setParisTime] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Function to calculate and update Paris time
    const updateTime = () => {
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now);

      setParisTime(`${timeStr} (UTC+01:00)`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-canvas/85 backdrop-blur-md border-b border-borderMuted py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Wordmark Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-mono text-sm font-bold tracking-tight text-darkText"
        >
          <span className="w-2.5 h-2.5 bg-darkText group-hover:bg-accent transition-colors duration-200" />
          <span>MEHDI MECHKAK</span>
          <span className="hidden sm:inline-block text-xs font-normal text-mutedText border-l border-borderMuted pl-2.5">
            APPLIED AI
          </span>
        </Link>

        {/* Live Paris CET Time Indicator */}
        <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-mutedText bg-surface/60 border border-borderMuted px-3 py-1.5 rounded-full select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-darkText font-medium">PARIS</span>
          <span className="text-borderMuted">|</span>
          <span>{parisTime || '17:07:36 (UTC+01:00)'}</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider uppercase">
          <a
            href="#modules"
            className="text-mutedText hover:text-accent transition-colors relative group py-1"
          >
            [01] WORK
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-200 group-hover:w-full" />
          </a>
          <a
            href="#philosophy"
            className="text-mutedText hover:text-accent transition-colors relative group py-1"
          >
            [02] PHILOSOPHY
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-200 group-hover:w-full" />
          </a>
          <a
            href="#contact"
            className="text-darkText hover:text-accent font-semibold transition-colors relative group py-1 border-b border-darkText group-hover:border-accent"
          >
            [03] CONTACT
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden font-mono text-xs uppercase px-3 py-1.5 bg-surface border border-borderMuted rounded text-darkText focus:outline-none"
        >
          {mobileMenuOpen ? '[CLOSE]' : '[MENU]'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-borderMuted bg-canvas/95 backdrop-blur-lg px-6 py-6 font-mono text-sm space-y-4">
          {parisTime && (
            <div className="flex items-center gap-2 text-xs text-mutedText pb-3 border-b border-borderMuted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>PARIS CET: {parisTime}</span>
            </div>
          )}
          <a
            href="#modules"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-darkText hover:text-accent transition-colors py-1"
          >
            [01] WORK / MODULES
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-darkText hover:text-accent transition-colors py-1"
          >
            [02] PHILOSOPHY
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-accent font-semibold py-1"
          >
            [03] CONTACT ME
          </a>
        </div>
      )}
    </header>
  );
}
