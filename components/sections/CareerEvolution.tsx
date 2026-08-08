'use client';

import ScrollReveal from '../ui/ScrollReveal';
import { Cpu, Zap, Activity, GitCommit } from 'lucide-react';

const TIMELINE_PHASES = [
  {
    phase: 'PHASE 01',
    title: 'High-Voltage & Power Systems Engineering',
    context: 'ENP Algiers (École Nationale Polytechnique)',
    icon: Zap,
    badge: 'INDUSTRIAL FOUNDATION',
    period: 'MSc / Engineer Degree',
    color: '#E05638', // Steel / High-Voltage Industrial Orange
    description:
      'Mastered high-voltage protection schemes, automated control theory, signal processing, and hydrogen power grid dynamics.',
    bulletPoints: [
      'High-Voltage Protection & Industrial Power Grids',
      'SCADA Telemetry & Signal Processing Theory',
      'Hydrogen Tech & Automated Control Loops',
    ],
  },
  {
    phase: 'PHASE 02',
    title: 'Industrial SCADA & Safety Automation',
    context: 'Sonatrach / Equinor Joint Ventures (Oil & Gas / Energy)',
    icon: Activity,
    badge: 'FIELD TELEMETRY',
    period: 'Industrial Operations',
    color: '#D97706', // Industrial Automation Amber
    description:
      'Supervised SCADA telemetry, high-voltage distribution networks, and PLC automated safety shutoff systems across heavy energy infrastructure.',
    bulletPoints: [
      'PLC Logic Programming & Industrial Automation',
      'Real-Time SCADA Monitoring & Telemetry',
      'High-Voltage Substation Safety Systems',
    ],
  },
  {
    phase: 'PHASE 03',
    title: 'Applied AI & Production RAG Systems',
    context: 'FlowArchitect Agency // Applied AI Engineer',
    icon: Cpu,
    badge: 'SOFTWARE & AI SYNTHESIS',
    period: 'Current Focus',
    color: '#6E56CF', // Electric Indigo Accent
    description:
      'Transitioned from physical industrial automation to software-driven AI systems. Architecting evidence-first RAG pipelines, pgvector vector search, FastAPI services, and AWS infrastructure.',
    bulletPoints: [
      'Bilingual Evidence-First RAG (pgvector / GLM 5.2)',
      'FastAPI & Apache Airflow ETL Orchestration',
      'Prisma 7 State Machines & LLM Confidence Gating',
    ],
  },
];

export default function CareerEvolution() {
  return (
    <section id="evolution" className="py-28 md:py-36 bg-surface/50 border-t border-borderColor px-8 md:px-16 max-w-7xl mx-auto space-y-16">
      {/* Section Header */}
      <ScrollReveal>
        <div className="space-y-4">
          <div className="font-mono text-xs text-accent uppercase tracking-widest font-tnum">
            THE EVOLUTION // INDUSTRIAL TO ARTIFICIAL INTELLIGENCE
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-textPrimary tracking-tight">
            From High-Voltage Power Grids to Applied AI
          </h2>
          <p className="font-sans text-lg text-textSecondary max-w-2xl leading-relaxed">
            My career began in heavy industrial electrical engineering and energy SCADA telemetry, building a foundation in deterministic control loops that now informs how I design reliable AI architectures.
          </p>
        </div>
      </ScrollReveal>

      {/* 3-Phase Interactive Timeline Stack */}
      <div className="space-y-8 relative">
        {/* Connecting Vertical Circuit Line */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#E05638] via-[#D97706] to-[#6E56CF] hidden md:block" />

        {TIMELINE_PHASES.map((phase, idx) => {
          const IconComp = phase.icon;
          return (
            <ScrollReveal key={phase.phase} delay={idx * 0.15}>
              <div className="relative bg-surface border border-borderColor rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row gap-8 items-start hover:border-borderColorHover transition-all duration-300 shadow-sm group">
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-surfaceElevated border border-borderColor flex items-center justify-center shrink-0 z-10" style={{ color: phase.color }}>
                  <IconComp className="w-6 h-6" />
                </div>

                {/* Phase Content */}
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold font-tnum" style={{ color: phase.color }}>
                        [{phase.phase}]
                      </span>
                      <span className="text-textMuted">//</span>
                      <span className="text-textSecondary uppercase tracking-wider">{phase.badge}</span>
                    </div>
                    <span className="bg-surfaceElevated border border-borderColor px-3 py-1 rounded-full text-textMuted font-tnum">
                      {phase.period}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-2xl text-textPrimary group-hover:text-accent transition-colors">
                      {phase.title}
                    </h3>
                    <div className="font-sans text-sm font-semibold text-textSecondary">
                      {phase.context}
                    </div>
                  </div>

                  <p className="font-sans text-base text-textSecondary leading-relaxed">
                    {phase.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                    {phase.bulletPoints.map((bullet) => (
                      <li key={bullet} className="bg-surfaceElevated border border-borderColor p-2.5 rounded text-textSecondary flex items-center gap-2">
                        <GitCommit className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span className="truncate">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
