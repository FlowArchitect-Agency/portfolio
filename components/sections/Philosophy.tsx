'use client';

import { motion } from 'framer-motion';
import StatusBadge from '../ui/StatusBadge';
import { ShieldCheck, Database, GitPullRequest, Cpu } from 'lucide-react';

const PRINCIPLES = [
  {
    code: 'GROUND',
    number: '01',
    ruleId: 'SYS-RULE-GROUND-01',
    icon: Database,
    headline: 'Retrieval before reasoning.',
    manifesto: 'Answers come from real, verifiable data — not parametric memory or speculative completions.',
    details: 'In production systems, hallucinatory output is an application bug. Every LLM synthesis step is bounded by vector retrieval, deterministic database queries, and strict schema validation.',
  },
  {
    code: 'GATE',
    number: '02',
    ruleId: 'SYS-RULE-GATE-02',
    icon: GitPullRequest,
    headline: 'Uncertain output escalates to a human.',
    manifesto: 'Systems never ship a guess when confidence is below threshold.',
    details: 'Autonomous execution requires clear boundaries. Low-confidence classifications, policy exceptions, or destructive state mutations automatically trigger human-in-the-loop validation queues.',
  },
  {
    code: 'TEST',
    number: '03',
    ruleId: 'SYS-RULE-TEST-03',
    icon: ShieldCheck,
    headline: 'Regression checks run before users see drift.',
    manifesto: 'Continuous evaluation on ground-truth datasets, every single release.',
    details: 'Prompt tweaks and model updates are treated like code refactors. Synthetic eval suites, latency benchmarks, and retrieval accuracy metrics run automatically before deployment.',
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 md:py-28 bg-surface/50 border-t border-borderMuted relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3">
              <Cpu className="w-4 h-4" />
              SYSTEMS MANIFESTO // ENGINEERING PRINCIPLES
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-darkText uppercase">
              PHILOSOPHY & CONSTRAINTS
            </h2>
          </div>
          <p className="font-mono text-xs text-mutedText max-w-md">
            Three non-negotiable architectural rules governing every AI agent and data system I build.
          </p>
        </div>

        {/* 3 Principles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRINCIPLES.map((principle, idx) => {
            const IconComponent = principle.icon;
            return (
              <motion.div
                key={principle.code}
                className="bg-card border border-borderMuted rounded-xl p-8 flex flex-col justify-between shadow-sm hover:border-darkText/40 transition-all duration-300 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                {/* Accent top border highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-borderMuted group-hover:bg-accent transition-colors duration-300" />

                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between gap-2 pb-6 border-b border-borderMuted/80 font-mono text-xs">
                    <span className="text-accent font-extrabold text-lg">[{principle.number}]</span>
                    <StatusBadge idCode={principle.ruleId} status="ENFORCED" />
                  </div>

                  {/* Icon & Title */}
                  <div className="mt-6 space-y-3">
                    <div className="w-10 h-10 rounded-md bg-surface border border-borderMuted flex items-center justify-center text-accent">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-darkText uppercase">
                      {principle.code}
                    </h3>
                    <div className="font-sans text-base font-semibold text-darkText">
                      {principle.headline}
                    </div>
                  </div>

                  {/* Manifesto */}
                  <div className="mt-4 p-3 bg-surface/70 border-l-2 border-accent rounded-r font-sans text-sm text-darkText/90 font-medium">
                    {principle.manifesto}
                  </div>

                  <p className="mt-4 font-sans text-xs text-mutedText leading-relaxed">
                    {principle.details}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-borderMuted/60 font-mono text-[10px] text-mutedText uppercase flex justify-between">
                  <span>MEHDI MECHKAK</span>
                  <span>PARIS CET</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
