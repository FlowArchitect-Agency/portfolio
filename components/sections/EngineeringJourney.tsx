"use client";

/**
 * EngineeringJourney.tsx
 *
 * Full-bleed, scroll-driven sequence for the engineering background.
 * Each phase gets its OWN section (min-h-[90vh]), its own animated background motif,
 * and detail copy fades/slides in on enter.
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Phase = {
  eyebrow: string;
  role: string;
  org: string;
  years: string;
  summary: string;
  details: string[];
  accent: string; // hex, used for glow/particles specific to this phase
  motif: "industrial" | "pharma" | "hydrogen";
};

const PHASES: Phase[] = [
  {
    eyebrow: "PHASE 01 // OIL & GAS FIELD ENGINEERING",
    role: "Power Systems, High-Voltage & SCADA Instrumentation",
    org: "SONATRACH · Equinor · ENI · CEPSA — Algeria",
    years: "2023 – 2025",
    summary:
      "Two engineering internships across joint-venture Oil & Gas sites, working on the electrical backbone of live energy infrastructure.",
    details: [
      "Analyzed Gas Turbine Generators (GTG) and their electrical subsystems",
      "Inspected 10kV motor high-voltage protection systems, ran Megger relay testing",
      "Supervised DCS (Distributed Control Systems) and PLC logic across heavy energy infrastructure",
      "Maintained UPS units, transformers, and rotating machinery on critical circuits",
    ],
    accent: "#F4762A", // industrial flare orange
    motif: "industrial",
  },
  {
    eyebrow: "PHASE 02 // PHARMACEUTICAL FACILITIES ENGINEERING",
    role: "Process Supervision & Facilities Quality Control",
    org: "Al-Hikmah Pharmaceuticals — Algeria",
    years: "2023",
    summary:
      "Automation and quality-control engineering inside a regulated pharmaceutical production environment.",
    details: [
      "Managed air treatment systems (CTA, chillers, dehumidifiers) to pharmacopeia spec",
      "Supervised purified-water stations — reverse osmosis & EDI — via HMI/PLC interfaces",
      "Maintained automated production lines (blistering, counting) under strict SOPs",
      "Ran physicochemical quality checks (pH, conductivity) against pharmacopeia standards",
    ],
    accent: "#2FB6A3", // clinical teal
    motif: "pharma",
  },
  {
    eyebrow: "PHASE 03 // ACADEMIC FOUNDATION",
    role: "MSc Electrical Engineering & Green Hydrogen",
    org: "ENP Algiers · University of Rostock",
    years: "2021 – 2026",
    summary:
      "Five-year engineering degree plus a specialized green-energy certification — the control-theory foundation everything after it builds on.",
    details: [
      "High-voltage protection schemes, signal processing, automated control theory",
      "Simulated hydrogen fuel-cell dynamics in MATLAB/Simulink (static & dynamic behavior, Bode analysis)",
      "Studied matrix converters and thermal sensors for offshore wind-to-hydrogen systems",
      "Wind Energy & Green Hydrogen certification — University of Rostock (Prof. Uwe Ritschel)",
    ],
    accent: "#6E56CF", // electric indigo
    motif: "hydrogen",
  },
];

export default function EngineeringJourney() {
  return (
    <section id="journey" aria-label="Engineering background and journey" className="relative bg-[#0A0A0B]">
      <div className="px-6 pt-24 pb-4 md:px-16 max-w-7xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] text-white/40">
          CHAPTER · 04 // ENGINEERING BACKGROUND
        </p>
        <h2 className="mt-3 max-w-xl text-3xl font-bold text-white md:text-5xl">
          Before the AI systems, there was the physical infrastructure.
        </h2>
      </div>

      {PHASES.map((phase, i) => (
        <PhaseSection key={phase.role} phase={phase} index={i} />
      ))}
    </section>
  );
}

function PhaseSection({ phase }: { phase: Phase; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Motif drifts slower than scroll (parallax); copy rises in as it enters.
  const motifY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const copyOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.75, 1], [0, 1, 1, 0.3]);
  const copyY = useTransform(scrollYProgress, [0.15, 0.4], [40, 0]);

  return (
    <div
      ref={ref}
      className="relative flex min-h-[90vh] items-center overflow-hidden border-t border-white/5 px-6 md:px-16"
    >
      {/* Background motif layer — unique per phase */}
      <motion.div
        style={{ y: motifY }}
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
      >
        {phase.motif === "industrial" && <IndustrialMotif accent={phase.accent} />}
        {phase.motif === "pharma" && <PharmaMotif accent={phase.accent} />}
        {phase.motif === "hydrogen" && <HydrogenMotif accent={phase.accent} />}
      </motion.div>

      {/* Vignette so copy stays readable over the motif */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/70 to-[#0A0A0B]/20" />

      <motion.div
        style={{ opacity: copyOpacity, y: copyY }}
        className="relative z-10 max-w-xl mx-auto md:mx-0"
      >
        <span
          className="font-mono text-xs tracking-[0.2em]"
          style={{ color: phase.accent }}
        >
          {phase.eyebrow}
        </span>
        <h3 className="mt-3 text-2xl font-bold text-white md:text-4xl">{phase.role}</h3>
        <p className="mt-2 text-sm text-white/50">
          {phase.org} · {phase.years}
        </p>
        <p className="mt-5 text-base leading-relaxed text-white/70">{phase.summary}</p>

        <ul className="mt-6 space-y-3">
          {phase.details.map((d, i) => (
            <motion.li
              key={d}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-start gap-3 text-sm text-white/60"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: phase.accent }}
              />
              {d}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Motifs — lightweight animated SVG, no external image assets required.  */
/* ---------------------------------------------------------------------- */

function IndustrialMotif({ accent }: { accent: string }) {
  // Flare + pipeline silhouette with a flickering flame glow
  return (
    <svg viewBox="0 0 1200 800" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <g stroke={accent} strokeWidth="1.5" fill="none" opacity="0.5">
        <path d="M0 620 L300 620 L340 560 L420 560 L460 620 L1200 620" />
        <path d="M200 620 L200 500 L260 500 L260 620" />
        <path d="M700 620 L700 480 L760 480 L760 620" />
      </g>
      <motion.circle
        cx="740"
        cy="440"
        r="22"
        fill={accent}
        animate={{ opacity: [0.3, 0.9, 0.4, 0.8, 0.3], scale: [1, 1.15, 0.95, 1.1, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(6px)" }}
      />
      <motion.path
        d="M740 470 C 730 440, 750 420, 740 390 C 760 415, 770 440, 745 470 Z"
        fill={accent}
        animate={{ opacity: [0.6, 1, 0.7, 1, 0.6] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

function PharmaMotif({ accent }: { accent: string }) {
  // Rising purification bubbles + capsule silhouette
  return (
    <svg viewBox="0 0 1200 800" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect x="560" y="300" width="80" height="200" rx="40" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.4" />
      <line x1="560" y1="400" x2="640" y2="400" stroke={accent} strokeWidth="1.5" opacity="0.4" />
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.circle
          key={i}
          cx={550 + ((i * 73) % 500)}
          r={3 + (i % 3)}
          fill={accent}
          initial={{ cy: 700, opacity: 0 }}
          animate={{ cy: 60, opacity: [0, 0.7, 0] }}
          transition={{
            duration: 6 + (i % 4),
            repeat: Infinity,
            delay: i * 0.7,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

function HydrogenMotif({ accent }: { accent: string }) {
  // Wind-turbine blade sweep + circuit/H2 molecule pulses (ties to green hydrogen)
  return (
    <svg viewBox="0 0 1200 800" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <g transform="translate(300,260)">
        <line x1="0" y1="0" x2="0" y2="260" stroke={accent} strokeWidth="1.5" opacity="0.4" />
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ originX: "0px", originY: "0px" }}
        >
          <line x1="0" y1="0" x2="0" y2="-90" stroke={accent} strokeWidth="2" opacity="0.6" />
          <line x1="0" y1="0" x2="78" y2="45" stroke={accent} strokeWidth="2" opacity="0.6" />
          <line x1="0" y1="0" x2="-78" y2="45" stroke={accent} strokeWidth="2" opacity="0.6" />
        </motion.g>
      </g>
      {/* simple H2 molecule pulse */}
      <motion.g
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <circle cx="820" cy="500" r="10" fill={accent} opacity="0.5" />
        <circle cx="870" cy="500" r="10" fill={accent} opacity="0.5" />
        <line x1="830" y1="500" x2="860" y2="500" stroke={accent} strokeWidth="2" opacity="0.5" />
      </motion.g>
    </svg>
  );
}
