'use client';

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
    <section id="lab" className="py-20 bg-surface/50 border-t border-borderColor px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div>
        <div className="font-mono text-xs text-accent uppercase tracking-widest mb-2 font-tnum">
          CHAPTER · 02 // LAB & EXPERIMENTS
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-textPrimary">
          Experiments & Tooling
        </h2>
      </div>

      {/* Grid of 3 Experiments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {LAB_EXPERIMENTS.map((lab) => {
          const IconComp = lab.icon;
          return (
            <div
              key={lab.title}
              className="bg-surface border border-borderColor rounded-xl p-6 flex flex-col justify-between hover:border-borderColorHover transition-all duration-300 space-y-6 shadow-sm group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-surfaceElevated border border-borderColor flex items-center justify-center text-accent">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-textMuted uppercase tracking-wider">
                    {lab.platform}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-textPrimary group-hover:text-accent transition-colors">
                  {lab.title}
                </h3>

                <p className="font-sans text-xs text-textSecondary leading-relaxed">
                  {lab.description}
                </p>
              </div>

              <a
                href={lab.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-textPrimary font-semibold hover:text-accent transition-colors pt-2 border-t border-borderColor"
              >
                <span>INSPECT REPO</span>
                <ExternalLink className="w-3.5 h-3.5 text-accent" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
