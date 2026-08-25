'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import CaseStudyCard from '@/components/ui/CaseStudyCard';
import { PROJECTS, PROJECT_CATEGORIES, CategoryGroupId } from '@/lib/projects-data';
import { ArrowLeft, Layers, Brain, Palette, TrendingUp, Database, Sparkles } from 'lucide-react';

export default function WorkIndexPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryGroupId>('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.categoryGroup === activeCategory);

  const activeCategoryMeta = PROJECT_CATEGORIES.find((c) => c.id === activeCategory) || PROJECT_CATEGORIES[0];

  const getCategoryIcon = (id: CategoryGroupId) => {
    switch (id) {
      case 'ai-engineering':
        return <Brain className="w-4 h-4" />;
      case 'design-systems':
        return <Palette className="w-4 h-4" />;
      case 'growth-marketing':
        return <TrendingUp className="w-4 h-4" />;
      case 'data-engineering':
        return <Database className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <main className="min-h-screen bg-background text-textPrimary pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
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
          INDEX // 06 PRODUCTION SYSTEMS
        </span>
      </div>

      {/* Page Title & Intro */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest font-tnum">
          <Sparkles className="w-4 h-4" />
          <span>PORTFOLIO DIRECTORY · CATEGORIZED WORK</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-textPrimary tracking-tight">
          Production Systems &amp; Case Studies
        </h1>
        <p className="font-sans text-lg text-textSecondary leading-relaxed">
          Comprehensive architecture breakdowns, production metrics, and technical deep dives organized across AI Systems, UI/UX Design Engineering, Growth Automation, and Data Pipelines.
        </p>
      </div>

      {/* Recruiter Category Filter Tabs */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-wrap items-center gap-2.5 pb-3 border-b border-borderColor">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = cat.id === 'all'
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.categoryGroup === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-sans text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-textPrimary text-background shadow-sm'
                    : 'bg-surface border border-borderColor text-textSecondary hover:text-textPrimary hover:border-borderHover'
                }`}
              >
                <span className={isActive ? 'text-accent' : 'text-textMuted group-hover:text-accent transition-colors'}>
                  {getCategoryIcon(cat.id)}
                </span>
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md font-mono text-[10px] font-tnum ${
                    isActive
                      ? 'bg-background/20 text-background'
                      : 'bg-background text-textMuted border border-borderColor'
                  }`}
                >
                  {count.toString().padStart(2, '0')}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Category Context Description */}
        <div className="flex items-center justify-between text-xs font-mono text-textMuted px-1">
          <span>{activeCategoryMeta.description}</span>
          <span className="font-tnum">SHOWING {filteredProjects.length} OF {PROJECTS.length} REPOS</span>
        </div>
      </div>

      {/* Animated Grid of Filtered Case Study Cards */}
      <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <CaseStudyCard project={project} index={idx} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}
