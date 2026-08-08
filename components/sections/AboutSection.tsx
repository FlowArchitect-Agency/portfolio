'use client';

import StylizedAvatar from '../ui/StylizedAvatar';
import { DESIGN_TOKENS } from '@/lib/design-tokens';

export default function AboutSection() {
  const { author } = DESIGN_TOKENS;

  return (
    <section id="about" className="py-20 bg-background border-t border-borderColor px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div>
        <div className="font-mono text-xs text-accent uppercase tracking-widest mb-2 font-tnum">
          CHAPTER · 03 // ABOUT & PHILOSOPHY
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-textPrimary">
          Engineering Mindset
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Avatar & Bio */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-6">
            <StylizedAvatar size="lg" />
            <div>
              <h3 className="font-display font-bold text-2xl text-textPrimary">{author.name}</h3>
              <div className="font-sans text-sm text-textSecondary">{author.title}</div>
              <div className="font-mono text-xs text-textMuted">{author.location}</div>
            </div>
          </div>

          <p className="font-sans text-base sm:text-lg text-textSecondary leading-relaxed pt-2">
            I specialize in architecting evidence-first artificial intelligence systems. My work focuses on bounded retrieval-augmented generation (RAG), deterministic data engineering, and human-in-the-loop workflow guardrails.
          </p>

          <div className="p-4 bg-surface border-l-2 border-accent rounded-r-lg font-sans text-sm text-textPrimary font-medium italic">
            &ldquo;{author.bioPOV}&rdquo;
          </div>
        </div>

        {/* Right Column: 4 Emoji Stats Grid */}
        <div className="lg:col-span-5 bg-surface border border-borderColor rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="font-mono text-xs text-textMuted uppercase tracking-wider">
            AT A GLANCE // SYSTEM CREDENTIALS
          </div>

          <div className="space-y-4">
            {author.emojiStats.map((stat) => (
              <div
                key={stat.text}
                className="flex items-center gap-4 p-3.5 bg-surfaceElevated border border-borderColor rounded-xl font-sans text-sm text-textPrimary font-medium"
              >
                <span className="text-2xl">{stat.emoji}</span>
                <span>{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
