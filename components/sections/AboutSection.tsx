'use client';

import ScrollReveal from '../ui/ScrollReveal';
import MagneticButton from '../ui/MagneticButton';
import { DESIGN_TOKENS } from '@/lib/design-tokens';
import { Download, FileText, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const { author } = DESIGN_TOKENS;

  return (
    <section id="about" className="py-28 md:py-36 bg-background border-t border-borderColor px-8 md:px-16 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <ScrollReveal>
        <div>
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3 font-tnum">
            CHAPTER · 04 // ABOUT & RESUME
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-textPrimary">
            AI Engineering Philosophy
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: AI Engineer Positioning */}
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

        {/* Right Column: Download Resume Box */}
        <ScrollReveal delay={0.2} className="lg:col-span-5 bg-surface border border-borderColor rounded-3xl p-8 sm:p-10 space-y-8 shadow-sm">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-surfaceElevated border border-borderColor flex items-center justify-center text-accent">
              <FileText className="w-6 h-6" />
            </div>
            <h4 className="font-display font-bold text-2xl text-textPrimary">
              Curriculum Vitae
            </h4>
            <p className="font-sans text-sm text-textSecondary leading-relaxed">
              Download the official PDF resume highlighting production AI systems, RAG architecture, vector search, and cloud infrastructure experience.
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs text-textMuted">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Production AI Systems & RAG Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>FastAPI, Airflow, PostgreSQL, pgvector</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>AWS ECS, Terraform, Docker Infrastructure</span>
            </div>
          </div>

          <MagneticButton strength={0.2} className="w-full">
            <a
              href="/Mehdi_Mechkak_AI_Engineer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-textPrimary text-background font-sans font-semibold text-xs uppercase tracking-wider py-4 px-6 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
            >
              <Download className="w-4 h-4 text-accent" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
