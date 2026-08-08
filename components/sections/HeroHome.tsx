'use client';

import Link from 'next/link';
import MagneticButton from '../ui/MagneticButton';
import ScrollReveal from '../ui/ScrollReveal';
import TennisAvatar from '../ui/TennisAvatar';
import { DESIGN_TOKENS } from '@/lib/design-tokens';
import { ArrowRight, Download } from 'lucide-react';

export default function HeroHome() {
  const { author } = DESIGN_TOKENS;

  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-36 px-8 md:px-16 max-w-7xl mx-auto space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: AI Engineer Headline & Verbatim Bio POV */}
        <ScrollReveal className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-surface border border-borderColor px-4 py-2 rounded-full font-mono text-xs text-textSecondary uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{author.location}</span>
            </div>

            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-textPrimary leading-[1.02]">
              <span className="text-accent">✦</span> {author.name}.<br />
              <span className="text-textSecondary font-bold">{author.title}.</span>
            </h1>

            <p className="font-sans text-xl sm:text-2xl text-textSecondary font-normal leading-relaxed pt-2">
              Specializing in <span className="text-textPrimary font-semibold">{author.specialty}</span>.
            </p>

            {/* Verbatim Bio POV Quote */}
            <div className="p-6 md:p-8 bg-surface border-l-2 border-accent border-y border-r border-borderColor rounded-r-2xl font-sans text-lg sm:text-xl text-textPrimary leading-relaxed my-6 font-medium shadow-sm">
              &ldquo;{author.bioPOV}&rdquo;
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <MagneticButton strength={0.2}>
              <Link
                href="/work"
                className="inline-flex items-center gap-3 bg-textPrimary text-background font-sans font-semibold text-sm px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-200 shadow-sm group"
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
                className="inline-flex items-center gap-2 bg-surface border border-borderColor text-textPrimary font-sans font-medium text-sm px-8 py-4 rounded-xl hover:border-borderColorHover transition-colors"
              >
                <Download className="w-4 h-4 text-accent" />
                <span>Download Resume</span>
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* Right Column: Animated Stylized Tennis Character Avatar */}
        <ScrollReveal delay={0.2} className="lg:col-span-5 flex justify-center lg:justify-end">
          <TennisAvatar />
        </ScrollReveal>
      </div>
    </section>
  );
}
