'use client';

import Link from 'next/link';
import MagneticButton from '../ui/MagneticButton';
import ScrollReveal from '../ui/ScrollReveal';
import { DESIGN_TOKENS } from '@/lib/design-tokens';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function HeroHome() {
  const { author } = DESIGN_TOKENS;

  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-36 px-8 md:px-16 max-w-7xl mx-auto space-y-12">
      <ScrollReveal delay={0.1}>
        <div className="space-y-6 max-w-4xl">
          {/* Main Title: ✦ Mehdi. / Applied AI Engineer. */}
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight text-textPrimary leading-[1.02]">
            <span className="text-accent">✦</span> {author.name}.<br />
            <span className="text-textSecondary font-bold">{author.title}.</span>
          </h1>

          <p className="font-sans text-xl sm:text-2xl md:text-3xl text-textSecondary font-normal leading-relaxed pt-2">
            Specializing in <span className="text-textPrimary font-semibold">{author.specialty}</span>.
          </p>

          {/* Verbatim Bio POV Quote */}
          <div className="p-6 md:p-8 bg-surface border-l-2 border-accent border-y border-r border-borderColor rounded-r-2xl font-sans text-lg sm:text-xl text-textPrimary leading-relaxed my-8 font-medium shadow-sm">
            &ldquo;{author.bioPOV}&rdquo;
          </div>
        </div>
      </ScrollReveal>

      {/* Magnetic CTAs */}
      <ScrollReveal delay={0.25}>
        <div className="flex flex-wrap items-center gap-5 pt-4">
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
              href="#about"
              className="inline-flex items-center gap-2 bg-surface border border-borderColor text-textPrimary font-sans font-medium text-sm px-8 py-4 rounded-xl hover:border-borderColorHover transition-colors"
            >
              <span>About me</span>
              <ArrowDown className="w-4 h-4 text-textMuted" />
            </a>
          </MagneticButton>
        </div>
      </ScrollReveal>
    </section>
  );
}
