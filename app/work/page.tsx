'use client';

import Link from 'next/link';
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import { PROJECTS } from '@/lib/projects-data';
import { ArrowLeft } from 'lucide-react';

export default function WorkIndexPage() {
  return (
    <main className="min-h-screen bg-background text-textPrimary pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      {/* Breadcrumb / Top Navigation */}
      <div className="flex items-center justify-between border-b border-borderColor pb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-textMuted hover:text-accent transition-colors uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4 text-accent" />
          <span>BACK TO HOME</span>
        </Link>
        <span className="font-mono text-xs text-textMuted uppercase tracking-wider font-tnum">
          INDEX // 04 PRODUCTION REPOS
        </span>
      </div>

      {/* Page Title & Intro */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-textPrimary tracking-tight">
          Selected Work & Case Studies
        </h1>
        <p className="font-sans text-lg text-textSecondary leading-relaxed">
          Comprehensive architecture breakdowns, metrics, and technical deep dives for 4 production AI and data engineering systems.
        </p>
      </div>

      {/* Grid of 4 Case Study Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        {PROJECTS.map((project, idx) => (
          <CaseStudyCard key={project.slug} project={project} index={idx} />
        ))}
      </div>
    </main>
  );
}
