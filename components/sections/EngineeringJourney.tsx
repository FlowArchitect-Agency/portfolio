'use client';

import ScrollReveal from '../ui/ScrollReveal';
import { Flame, FlaskConical, Zap, ShieldCheck } from 'lucide-react';

const JOURNEY_CARDS = [
  {
    number: '01',
    category: 'ENERGY & OIL & GAS',
    title: 'Power Systems, High-Voltage & SCADA Instrumentation',
    organizations: 'SONATRACH · Equinor · ENI · CEPSA',
    period: 'Industrial Engineering',
    icon: Flame,
    accentColor: '#E05638',
    summary:
      'Inspected 10 kV motor protection systems, conducted relay testing with Megger equipment, and supervised Distributed Control Systems (DCS) and PLC logic across heavy energy infrastructure.',
    highlights: [
      'Gas Turbine Generators (GTG) electrical component analysis',
      '10 kV motor high-voltage protection relays & UPS systems',
      'SCADA telemetry & PLC process troubleshooting',
    ],
    // Subtle background visual motif
    svgMotif: (
      <svg className="absolute right-4 bottom-4 w-40 h-40 opacity-10 pointer-events-none" viewBox="0 0 100 100">
        <path d="M50 10 L60 40 L80 45 L65 65 L70 90 L50 75 L30 90 L35 65 L20 45 L40 40 Z" stroke="#E05638" strokeWidth="2" fill="none" />
        <line x1="50" y1="10" x2="50" y2="75" stroke="#E05638" strokeWidth="1.5" strokeDasharray="2 2" />
        <circle cx="50" cy="10" r="4" fill="#E05638" />
      </svg>
    ),
  },
  {
    number: '02',
    category: 'PHARMACEUTICAL AUTOMATION',
    title: 'Process Supervision & Facilities Quality Control',
    organizations: 'Al-Hikmah Pharmaceuticals',
    period: 'Facilities Engineering',
    icon: FlaskConical,
    accentColor: '#2E6FF6',
    summary:
      'Maintained automated production lines and supervised purified water stations (Reverse Osmosis / EDI) via HMI/PLC interfaces under strict pharmacopeia quality standards.',
    highlights: [
      'AHU air treatment systems, chillers & dehumidifiers',
      'Automated blistering & counting machine HMI/PLC supervision',
      'Physicochemical quality analysis (pH, EDI conductivity)',
    ],
    // Subtle background visual motif
    svgMotif: (
      <svg className="absolute right-4 bottom-4 w-40 h-40 opacity-10 pointer-events-none" viewBox="0 0 100 100">
        <rect x="35" y="20" width="30" height="60" rx="15" stroke="#2E6FF6" strokeWidth="2" fill="none" />
        <line x1="35" y1="50" x2="65" y2="50" stroke="#2E6FF6" strokeWidth="2" />
        <circle cx="50" cy="35" r="5" fill="#2E6FF6" opacity="0.5" />
      </svg>
    ),
  },
  {
    number: '03',
    category: 'ACADEMIC FOUNDATION',
    title: 'MSc Electrical Engineering & Green Hydrogen',
    organizations: 'ENP Algiers · University of Rostock',
    period: 'Master of Science',
    icon: Zap,
    accentColor: '#6E56CF',
    summary:
      'Mastered control theory, high-voltage protection schemes, signal processing, and numerical modeling. Completed Wind Energy & Green Hydrogen training with Rostock University.',
    highlights: [
      'High-voltage protection, LTSpice & Simulink modeling',
      'Green hydrogen fuel cell energy simulation',
      'C, C++, MATLAB, SQL & signal analysis',
    ],
    // Subtle background visual motif
    svgMotif: (
      <svg className="absolute right-4 bottom-4 w-40 h-40 opacity-10 pointer-events-none" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="35" stroke="#6E56CF" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        <line x1="50" y1="15" x2="50" y2="85" stroke="#6E56CF" strokeWidth="1.5" />
        <line x1="15" y1="50" x2="85" y2="50" stroke="#6E56CF" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function EngineeringJourney() {
  return (
    <section id="journey" className="py-28 md:py-36 bg-surface/30 border-t border-borderColor px-8 md:px-16 max-w-7xl mx-auto space-y-16">
      {/* Section Header */}
      <ScrollReveal>
        <div className="space-y-4 max-w-3xl">
          <div className="font-mono text-xs text-accent uppercase tracking-widest font-tnum">
            BACKGROUND & FOUNDATION // PHYSICAL CONTROL LOOPS
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-textPrimary tracking-tight">
            Engineering Background & Journey
          </h2>
          <p className="font-sans text-lg text-textSecondary leading-relaxed">
            Before specializing in software & AI, I spent years working on high-voltage substations, SCADA telemetry, and automated process control. This rigorous engineering discipline shapes how I build deterministic, failure-resistant AI architectures.
          </p>
        </div>
      </ScrollReveal>

      {/* Grid of 3 Experience Cards with Visual Line-Art Motifs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {JOURNEY_CARDS.map((card, idx) => {
          const IconComp = card.icon;
          return (
            <ScrollReveal key={card.number} delay={idx * 0.15}>
              <div className="relative bg-surface border border-borderColor rounded-2xl p-8 flex flex-col justify-between hover:border-borderColorHover transition-all duration-300 shadow-sm space-y-6 overflow-hidden group">
                {/* Visual Line Art Motif */}
                {card.svgMotif}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-borderColor font-mono text-xs">
                    <span className="font-bold font-tnum text-accent">[{card.number}]</span>
                    <span className="bg-surfaceElevated border border-borderColor px-2.5 py-1 rounded text-textMuted uppercase">
                      {card.period}
                    </span>
                  </div>

                  {/* Icon & Category */}
                  <div className="mt-6 space-y-3">
                    <div
                      className="w-10 h-10 rounded-xl bg-surfaceElevated border border-borderColor flex items-center justify-center"
                      style={{ color: card.accentColor }}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="font-mono text-[11px] text-textMuted uppercase tracking-wider">
                      {card.category}
                    </div>
                    <h3 className="font-display font-bold text-xl text-textPrimary group-hover:text-accent transition-colors">
                      {card.title}
                    </h3>
                    <div className="font-sans text-xs font-semibold text-textSecondary">
                      {card.organizations}
                    </div>
                  </div>

                  <p className="mt-4 font-sans text-xs text-textSecondary leading-relaxed">
                    {card.summary}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-borderColor space-y-2 font-mono text-[11px] text-textMuted">
                  {card.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
