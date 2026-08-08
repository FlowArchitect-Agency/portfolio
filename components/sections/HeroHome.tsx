'use client';

import Link from 'next/link';
import StylizedAvatar from '../ui/StylizedAvatar';
import { DESIGN_TOKENS } from '@/lib/design-tokens';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function HeroHome() {
  const { author } = DESIGN_TOKENS;

  return (
    <section className="pt-36 pb-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto space-y-8">
      {/* Avatar & Location Badge */}
      <div className="flex flex-wrap items-center gap-6">
        <StylizedAvatar size="lg" />
        <div className="space-y-1 font-mono text-xs text-textMuted">
          <div className="inline-flex items-center gap-2 bg-surface border border-borderColor px-3 py-1.5 rounded-full text-textSecondary font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>AVAILABLE FOR HIGH-IMPACT AI ROLES</span>
          </div>
          <div>{author.location}</div>
        </div>
      </div>

      {/* Main Title & Subtitle */}
      <div className="space-y-4 max-w-4xl">
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-textPrimary leading-[1.05]">
          {author.name}.<br />
          <span className="text-textSecondary font-bold">{author.title}.</span>
        </h1>

        <p className="font-sans text-lg sm:text-xl md:text-2xl text-textSecondary font-normal leading-relaxed pt-2">
          Specializing in <span className="text-textPrimary font-semibold">{author.specialty}</span>.
        </p>

        {/* Verbatim Bio POV */}
        <div className="p-5 bg-surface border-l-2 border-accent border-y border-r border-borderColor rounded-r-xl font-sans text-base sm:text-lg text-textPrimary leading-relaxed my-6 font-medium">
          &ldquo;{author.bioPOV}&rdquo;
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Link
          href="/work"
          className="inline-flex items-center gap-3 bg-accent text-white font-sans font-semibold text-sm px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-sm group"
        >
          <span>View my work</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <a
          href="#about"
          className="inline-flex items-center gap-2 bg-surface border border-borderColor text-textPrimary font-sans font-medium text-sm px-6 py-3.5 rounded-xl hover:border-borderColorHover transition-colors"
        >
          <span>About me</span>
          <ArrowDown className="w-4 h-4 text-textMuted" />
        </a>
      </div>
    </section>
  );
}
