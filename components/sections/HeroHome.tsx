'use client';

import Link from 'next/link';
import MagneticButton from '../ui/MagneticButton';
import ScrollReveal from '../ui/ScrollReveal';
import HeroAvatarVideo from '../ui/HeroAvatarVideo';
import { DESIGN_TOKENS } from '@/lib/design-tokens';
import { ArrowRight, Download } from 'lucide-react';

export default function HeroHome() {
  const { author } = DESIGN_TOKENS;

  return (
    <section className="relative min-h-[92vh] flex items-center pt-32 pb-24 md:pt-40 md:pb-32 px-8 md:px-16 max-w-7xl mx-auto overflow-hidden bg-[#FAFAF7]">
      {/* Background Hero Video Layer */}
      <HeroAvatarVideo />

      {/* Hero Content Layer on Top (relative z-10) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <ScrollReveal className="lg:col-span-8 space-y-8">
          <div className="space-y-5">
            {/* Location Pill Badge - High Contrast Light Theme */}
            <div className="inline-flex items-center gap-2.5 bg-black/5 border border-black/10 px-4 py-2 rounded-full font-mono text-xs font-semibold text-[#0A0A0B] uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{author.location}</span>
            </div>

            {/* 2 Wide Horizontal Lines (Matching Michael Tsirakis Layout) */}
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-[#0A0A0B] leading-[0.98]">
              <span className="text-accent font-bold">✦</span> {author.name}.<br />
              <span className="text-[#0A0A0B]/75 font-bold">{author.title}.</span>
            </h1>

            {/* Subhead with High-Contrast Typography */}
            <p className="font-sans text-xl sm:text-2xl md:text-3xl text-[#6B6B6B] font-normal leading-relaxed pt-2 max-w-2xl">
              Specializing in <span className="text-[#0A0A0B] font-bold">{author.specialty}</span>.
            </p>

            {/* Verbatim Bio POV Quote - Clean Light Glassmorphism Card */}
            <div className="p-6 md:p-8 bg-white/80 backdrop-blur-md border-l-4 border-accent border-y border-r border-black/10 rounded-r-2xl font-sans text-lg sm:text-xl text-[#0A0A0B] leading-relaxed my-6 font-medium shadow-sm max-w-2xl">
              &ldquo;{author.bioPOV}&rdquo;
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <MagneticButton strength={0.2}>
              <Link
                href="/work"
                className="inline-flex items-center gap-3 bg-[#0A0A0B] text-[#FAFAF7] font-sans font-semibold text-sm px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-200 shadow-md group"
              >
                <span>View my work</span>
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a
                href="/Mehdi_Mechkak_AI_Engineer_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-black/15 text-[#0A0A0B] font-sans font-semibold text-sm px-8 py-4 rounded-xl hover:border-black/30 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
