"use client";

/**
 * EngineeringJourney.tsx — Light Theme Conversion (#FAFAF7 / #F5F5F3)
 *
 * Full-bleed, scroll-driven sequence for the engineering background.
 * Light theme background (#FAFAF7), dark text (#0A0A0B), mid-gray labels (#6B6B6B),
 * abstract SVG motifs, and signature left throughline.
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Phase = {
  index: string;
  eyebrow: string;
  role: string;
  org: string;
  years: string;
  summary: string;
  details: string[];
  accent: string;
  motif: "grid" | "pharma" | "hydrogen";
};

const PHASES: Phase[] = [
  {
    index: "01",
    eyebrow: "OIL & GAS FIELD ENGINEERING",
    role: "Power Systems, High-Voltage & SCADA Instrumentation",
    org: "SONATRACH · Equinor · ENI · CEPSA — Algeria",
    years: "2023 – 2025",
    summary:
      "Two engineering internships across joint-venture Oil & Gas sites, working on the electrical backbone of live energy infrastructure.",
    details: [
      "Analyzed Gas Turbine Generators (GTG) and their electrical subsystems",
      "Inspected 10kV motor high-voltage protection systems, ran Megger relay testing",
      "Supervised DCS and PLC logic across heavy energy infrastructure",
      "Maintained UPS units, transformers, and rotating machinery on critical circuits",
    ],
    accent: "#D97706", // Amber / Industrial Orange accent
    motif: "grid",
  },
  {
    index: "02",
    eyebrow: "PHARMACEUTICAL FACILITIES ENGINEERING",
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
    accent: "#0D9488", // Clinical Teal accent
    motif: "pharma",
  },
  {
    index: "03",
    eyebrow: "ACADEMIC FOUNDATION",
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
    accent: "#6E56CF", // Electric Indigo accent
    motif: "hydrogen",
  },
];

export default function EngineeringJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="journey"
      aria-label="Engineering background and journey"
      className="relative overflow-hidden bg-[#FAFAF7] border-t border-borderColor"
    >
      {/* textured background — warm light theme grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(217,119,6,0.05),transparent_40%),radial-gradient(circle_at_85%_60%,rgba(110,86,207,0.06),transparent_40%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(10,10,11,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative px-6 pt-28 pb-8 md:px-16 max-w-7xl mx-auto">
        <p className="font-mono text-xs tracking-[0.25em] text-[#6B6B6B] font-tnum">
          CHAPTER · 04 // ENGINEERING BACKGROUND
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-[#0A0A0B] md:text-6xl font-display">
          Before the AI systems, there was the physical infrastructure.
        </h2>
      </div>

      {/* signature throughline — draws down as you scroll the whole section */}
      <div className="pointer-events-none absolute left-8 top-0 hidden h-full w-px bg-[#0A0A0B]/10 md:left-16 md:block">
        <motion.div
          style={{ height: lineHeight }}
          className="w-px bg-gradient-to-b from-[#D97706] via-[#0D9488] to-[#6E56CF]"
        />
      </div>

      {PHASES.map((phase) => (
        <PhaseSection key={phase.role} phase={phase} />
      ))}
    </section>
  );
}

function PhaseSection({ phase }: { phase: Phase }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const motifY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const copyOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.75, 1], [0, 1, 1, 0.35]);
  const copyY = useTransform(scrollYProgress, [0.15, 0.4], [30, 0]);

  return (
    <div
      ref={ref}
      className="relative flex min-h-[90vh] items-center overflow-hidden border-t border-[#0A0A0B]/10 pl-8 pr-6 md:pl-24 md:pr-16 max-w-7xl mx-auto"
    >
      <motion.div style={{ y: motifY }} className="pointer-events-none absolute inset-0">
        {phase.motif === "grid" && <GridMotif accent={phase.accent} />}
        {phase.motif === "pharma" && <VialMotif accent={phase.accent} />}
        {phase.motif === "hydrogen" && <TurbineMotif accent={phase.accent} />}
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FAFAF7] via-[#FAFAF7]/85 to-[#FAFAF7]/20" />

      <motion.div style={{ opacity: copyOpacity, y: copyY }} className="relative z-10 max-w-xl">
        <div className="flex items-baseline gap-4">
          <span
            className="font-mono text-6xl font-bold leading-none opacity-25 font-tnum"
            style={{ color: phase.accent }}
          >
            {phase.index}
          </span>
          <span className="font-mono text-xs tracking-[0.25em] text-[#6B6B6B]">
            {phase.eyebrow}
          </span>
        </div>

        <h3 className="mt-4 text-3xl font-bold leading-tight text-[#0A0A0B] md:text-5xl font-display">
          {phase.role}
        </h3>
        <p className="mt-3 text-sm text-[#6B6B6B] font-medium">
          {phase.org} · {phase.years}
        </p>
        <p className="mt-5 text-base leading-relaxed text-[#333333] font-sans font-normal">{phase.summary}</p>

        <ul className="mt-6 space-y-3">
          {phase.details.map((d, i) => (
            <motion.li
              key={d}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-start gap-3 text-sm text-[#4A4A4A] font-sans"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: phase.accent }}
              />
              <span>{d}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Motifs — light-theme compliant SVG line art diagrams                   */
/* ---------------------------------------------------------------------- */

function GridMotif({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 1200 800" className="h-full w-full opacity-40" preserveAspectRatio="xMidYMid slice">
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={700 + i * 70}
          y1="150"
          x2={700 + i * 70}
          y2="650"
          stroke={accent}
          strokeWidth="1"
          opacity="0.15"
        />
      ))}
      <motion.path
        d="M650 400 L720 400 L740 300 L770 500 L800 250 L830 400 L1150 400"
        stroke={accent}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      <motion.circle
        cx="770"
        cy="500"
        r="6"
        fill={accent}
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 1.4, repeat: Infinity }}
      />
    </svg>
  );
}

function VialMotif({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 1200 800" className="h-full w-full opacity-40" preserveAspectRatio="xMidYMid slice">
      <rect
        x="780"
        y="220"
        width="140"
        height="340"
        rx="16"
        fill="none"
        stroke={accent}
        strokeWidth="2"
        opacity="0.4"
      />
      <clipPath id="vialClip">
        <rect x="784" y="224" width="132" height="332" rx="14" />
      </clipPath>
      <motion.rect
        x="784"
        width="132"
        fill={accent}
        opacity="0.2"
        clipPath="url(#vialClip)"
        initial={{ y: 556, height: 0 }}
        whileInView={{ y: 340, height: 216 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      <motion.line
        x1="784"
        x2="916"
        stroke={accent}
        strokeWidth="2"
        clipPath="url(#vialClip)"
        initial={{ y1: 556, y2: 556 }}
        animate={{ y1: [340, 348, 340], y2: [340, 332, 340] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      />
      {[0, 1, 2].map((i) => (
        <line
          key={i}
          x1="770"
          x2="780"
          y1={280 + i * 90}
          y2={280 + i * 90}
          stroke={accent}
          strokeWidth="1.5"
          opacity="0.4"
        />
      ))}
    </svg>
  );
}

function TurbineMotif({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 1200 800" className="h-full w-full opacity-40" preserveAspectRatio="xMidYMid slice">
      <g transform="translate(820,420)">
        <line x1="0" y1="0" x2="0" y2="220" stroke={accent} strokeWidth="2" opacity="0.4" />
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          style={{ originX: "0px", originY: "0px" }}
        >
          <line x1="0" y1="0" x2="0" y2="-110" stroke={accent} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          <line x1="0" y1="0" x2="95" y2="55" stroke={accent} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          <line x1="0" y1="0" x2="-95" y2="55" stroke={accent} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        </motion.g>
        <circle r="8" fill={accent} />
      </g>

      <g transform="translate(300,300)">
        <ellipse cx="0" cy="0" rx="90" ry="34" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.3" />
        <motion.circle
          r="6"
          fill={accent}
          animate={{ offsetDistance: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ offsetPath: "path('M -90 0 A 90 34 0 1 1 90 0 A 90 34 0 1 1 -90 0')" }}
        />
        <circle r="14" fill={accent} opacity="0.8" />
      </g>
    </svg>
  );
}
