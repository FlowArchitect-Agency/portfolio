'use client';

import Link from 'next/link';
import CaseStudyCard from '../ui/CaseStudyCard';
import ScrollReveal from '../ui/ScrollReveal';
import MagneticButton from '../ui/MagneticButton';
import { PROJECTS } from '@/lib/projects-data';
import { ArrowRight } from 'lucide-react';

export default function SelectedWork() {
  return (
    <section id="work" className="py-28 md:py-36 bg-background border-t border-borderColor px-8 md:px-16 max-w-7xl mx-auto space-y-16">
      {/* Section Header */}
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-borderColor">
          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3 font-tnum">
              CHAPTER · 01 // SELECTED WORK
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-textPrimary">
              Featured Case Studies
            </h2>
          </div>
          <MagneticButton strength={0.15}>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-textSecondary hover:text-accent transition-colors uppercase tracking-wider py-2"
            >
              <span>VIEW ALL 4 PROJECTS</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </Link>
          </MagneticButton>
        </div>
      </ScrollReveal>

      {/* Grid of 4 Case Study Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {PROJECTS.map((project, idx) => (
          <ScrollReveal key={project.slug} delay={idx * 0.1}>
            <CaseStudyCard project={project} index={idx} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
