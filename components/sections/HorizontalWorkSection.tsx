'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import CaseStudyCard from '../ui/CaseStudyCard';
import ScrollReveal from '../ui/ScrollReveal';
import { PROJECTS } from '@/lib/projects-data';
import { Layers } from 'lucide-react';

export default function HorizontalWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Transform vertical scroll progress into horizontal translation on desktop (6 projects)
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-83%']);

  return (
    <section id="work" className="relative bg-background border-t border-borderColor py-24 md:py-32">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 mb-12">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-borderColor">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3 font-tnum">
                <Layers className="w-4 h-4" />
                CHAPTER · 02 // SELECTED WORK (PINNED HORIZONTAL SCROLL)
              </div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-textPrimary tracking-tight">
                Production Case Studies
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-mono text-xs text-accent hover:underline uppercase tracking-wider font-tnum"
              >
                <span>VIEW CATEGORIZED DIRECTORY (06 REPOS)</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Desktop Viewport Pinned Horizontal Scroll Container (>1024px) */}
      <div ref={containerRef} className="hidden lg:block h-[500vh] relative">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-10 pl-16 pr-16">
            {PROJECTS.map((project, idx) => (
              <div key={project.slug} className="w-[680px] shrink-0">
                <CaseStudyCard project={project} index={idx} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile & Tablet Vertical Cards Stack (<1024px) */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 space-y-10">
        {PROJECTS.map((project, idx) => (
          <ScrollReveal key={project.slug} delay={idx * 0.1}>
            <CaseStudyCard project={project} index={idx} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
