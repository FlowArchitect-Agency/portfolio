'use client';

import ScrollReveal from '../ui/ScrollReveal';
import { Terminal, GitBranch, Database, ExternalLink } from 'lucide-react';

const LAB_EXPERIMENTS = [
  {
    title: 'RAG Retrieval Benchmark Suite',
    platform: 'Python · 2025',
    description: 'Synthetic evaluation harness testing BM25 vs pgvector similarity precision on ground-truth customer support datasets.',
    icon: Terminal,
    link: 'https://github.com/FlowArchitect-Agency/polylingual-ai-support-agent',
  },
  {
    title: 'n8n Regression Test Harness',
    platform: 'Python / pytest · 2026',
    description: 'Automated test suite asserting sub-2-second response latency and schema validity across n8n webhook nodes.',
    icon: GitBranch,
    link: 'https://github.com/FlowArchitect-Agency/hotel-concierge-ai',
  },
  {
    title: 'Prisma 7 PostgreSQL Approval State Machine',
    platform: 'TypeScript · 2025',
    description: 'Server-side state machine validating human-in-the-loop workflow executions with atomic 409 conflict handles.',
    icon: Database,
    link: 'https://github.com/FlowArchitect-Agency/ai-internal-tool-builder',
  },
];

export default function LabGrid() {
  return (
    <section id="lab" className="py-28 md:py-36 bg-surface/40 border-t border-borderColor px-8 md:px-16 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <ScrollReveal>
        <div>
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3 font-tnum">
            CHAPTER · 02 // LAB & EXPERIMENTS
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-textPrimary">
            Experiments & Tooling
          </h2>
        </div>
      </ScrollReveal>

      {/* Grid of 3 Experiments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {LAB_EXPERIMENTS.map((lab, idx) => {
          const IconComp = lab.icon;
          return (
            <ScrollReveal key={lab.title} delay={idx * 0.1}>
              <div className="bg-surface border border-borderColor rounded-2xl p-8 flex flex-col justify-between hover:border-borderColorHover transition-all duration-300 space-y-6 shadow-sm group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-surfaceElevated border border-borderColor flex items-center justify-center text-accent">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-textMuted uppercase tracking-wider">
                      {lab.platform}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-textPrimary group-hover:text-accent transition-colors">
                    {lab.title}
                  </h3>

                  <p className="font-sans text-sm text-textSecondary leading-relaxed">
                    {lab.description}
                  </p>
                </div>

                <a
                  href={lab.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-textPrimary font-semibold hover:text-accent transition-colors pt-4 border-t border-borderColor"
                >
                  <span>INSPECT REPO</span>
                  <ExternalLink className="w-4 h-4 text-accent" />
                </a>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
