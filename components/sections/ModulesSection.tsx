'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ModuleCard, { ModuleData } from './ModuleCard';
import StatusBadge from '../ui/StatusBadge';
import { Layers } from 'lucide-react';

const MODULES_DATA: ModuleData[] = [
  {
    indexNumber: '01',
    title: 'Polylingual AI Support Agent',
    idCode: 'RAG-SUPPORT-A01',
    status: 'ACTIVE',
    manifesto: 'Evidence-first. Escalates instead of guessing.',
    stack: ['Python', 'RAG', 'pgvector', 'GLM 5.2'],
    githubUrl: 'https://github.com/FlowArchitect-Agency/polylingual-ai-support-agent',
    imagePath: '/projects/rag-support.png',
  },
  {
    indexNumber: '02',
    title: 'AI Internal Tool Builder',
    idCode: 'WORKFLOW-BUILD-B02',
    status: 'ACTIVE',
    manifesto: 'Nothing executes without a human signing off.',
    stack: ['TypeScript', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/FlowArchitect-Agency/ai-internal-tool-builder',
    imagePath: '/projects/workflow-builder.png',
  },
  {
    indexNumber: '03',
    title: 'Automated BI Pipeline',
    idCode: 'BI-PIPELINE-C03',
    status: 'ACTIVE',
    manifesto: 'Enrichment is automatic. Trust is not.',
    stack: ['Python', 'Airflow', 'Postgres', 'Streamlit'],
    githubUrl: 'https://github.com/FlowArchitect-Agency/automated-bi-pipeline',
    imagePath: '/projects/bi-pipeline.png',
  },
  {
    indexNumber: '04',
    title: 'Hotel Concierge AI',
    idCode: 'CONCIERGE-MULTI-D04',
    status: 'ACTIVE',
    manifesto: 'Grounded answers, tested automatically, every release.',
    stack: ['JavaScript', 'n8n', 'Airtable'],
    githubUrl: 'https://github.com/FlowArchitect-Agency/hotel-concierge-ai',
    imagePath: '/projects/concierge.png',
  },
];

export default function ModulesSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate transform for desktop horizontal scroll sequence
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-72%']);

  return (
    <section id="modules" className="relative bg-canvas py-16 md:py-24 border-t border-borderMuted">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
              <Layers className="w-4 h-4" />
              SYSTEM MODULES // 04 PRODUCTION REPOS
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-darkText uppercase">
              WORK & DEPLOYMENTS
            </h2>
          </div>
          <p className="font-mono text-xs text-mutedText max-w-md">
            MODULE SCROLL SEQUENCE inspired by pensatori-irrazionali structural language. Each module is a verified production architecture.
          </p>
        </div>
      </div>

      {/* Desktop Horizontal Scroll Sequence Container */}
      <div ref={targetRef} className="hidden lg:block h-[300vh] relative">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 pl-12 pr-12">
            {MODULES_DATA.map((module) => (
              <ModuleCard key={module.idCode} module={module} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile & Tablet Vertical Cards Stack (Degrades gracefully <1024px) */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 space-y-8">
        {MODULES_DATA.map((module) => (
          <ModuleCard key={module.idCode} module={module} />
        ))}
      </div>
    </section>
  );
}
