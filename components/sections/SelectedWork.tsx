'use client';

import Link from 'next/link';
import CaseStudyCard from '../ui/CaseStudyCard';
import { PROJECTS } from '@/lib/projects-data';
import { ArrowRight } from 'lucide-react';

export default function SelectedWork() {
  return (
    <section id="work" className="py-20 bg-background border-t border-borderColor px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-borderColor">
        <div>
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-2 font-tnum">
            CHAPTER · 01 // SELECTED WORK
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-textPrimary">
            Featured Case Studies
          </h2>
        </div>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-textSecondary hover:text-accent transition-colors uppercase tracking-wider"
        >
          <span>VIEW ALL 4 PROJECTS</span>
          <ArrowRight className="w-4 h-4 text-accent" />
        </Link>
      </div>

      {/* Grid of 4 Case Study Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <CaseStudyCard key={project.slug} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
