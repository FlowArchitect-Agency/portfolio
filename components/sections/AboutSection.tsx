'use client';

import ScrollReveal from '../ui/ScrollReveal';
import { DESIGN_TOKENS } from '@/lib/design-tokens';

export default function AboutSection() {
  const { author } = DESIGN_TOKENS;

  return (
    <section id="about" className="py-28 md:py-36 bg-background border-t border-borderColor px-8 md:px-16 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <ScrollReveal>
        <div>
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3 font-tnum">
            CHAPTER · 03 // ABOUT & PHILOSOPHY
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-textPrimary">
            Engineering Mindset
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text-based logo identity & Bio */}
        <ScrollReveal className="lg:col-span-7 space-y-8">
          <div className="space-y-2">
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-textPrimary">
              <span className="text-accent">✦</span> {author.name}
            </h3>
            <div className="font-sans text-base text-textSecondary font-semibold">{author.title}</div>
            <div className="font-mono text-xs text-textMuted">{author.location}</div>
          </div>

          <p className="font-sans text-lg sm:text-xl text-textSecondary leading-relaxed">
            I specialize in architecting evidence-first artificial intelligence systems. My work focuses on bounded retrieval-augmented generation (RAG), deterministic data engineering, and human-in-the-loop workflow guardrails.
          </p>

          <div className="p-6 bg-surface border-l-2 border-accent rounded-r-2xl font-sans text-base sm:text-lg text-textPrimary font-medium leading-relaxed shadow-sm">
            &ldquo;{author.bioPOV}&rdquo;
          </div>
        </ScrollReveal>

        {/* Right Column: 4 Emoji Stats Grid */}
        <ScrollReveal delay={0.2} className="lg:col-span-5 bg-surface border border-borderColor rounded-2xl p-8 sm:p-10 space-y-8 shadow-sm">
          <div className="font-mono text-xs text-textMuted uppercase tracking-wider font-tnum">
            AT A GLANCE // SYSTEM CREDENTIALS
          </div>

          <div className="space-y-4">
            {author.emojiStats.map((stat) => (
              <div
                key={stat.text}
                className="flex items-center gap-4 p-4 bg-surfaceElevated border border-borderColor rounded-xl font-sans text-sm sm:text-base text-textPrimary font-medium"
              >
                <span className="text-2xl">{stat.emoji}</span>
                <span>{stat.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
