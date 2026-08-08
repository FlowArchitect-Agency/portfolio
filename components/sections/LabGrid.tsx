"use client";

/**
 * LabGrid.tsx (ExperimentsSection — v2)
 *
 * Cards enter the viewport with real motion (rise + scale) and carry small custom SVG
 * diagrams specific to what each project actually does.
 * Textured near-black background (#0B0B0E) with radial glow and faint dot grid.
 */

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Experiment = {
  title: string;
  tag: string;
  stack: string[];
  summary: string;
  metric: string;
  repoUrl: string;
  diagram: "rag" | "webhook" | "statemachine";
  accent: string;
};

const EXPERIMENTS: Experiment[] = [
  {
    title: "RAG Retrieval Benchmark & Hybrid Search Engine",
    tag: "Python · 2025",
    stack: ["FastAPI", "pgvector", "BM25"],
    summary:
      "Hybrid RAG search evaluating pgvector cosine similarity vs BM25 lexical matching to prevent weak vector ranking on domain knowledge bases.",
    metric: "2 retrieval methods, 1 ranked hybrid score",
    repoUrl: "https://github.com/FlowArchitect-Agency/polylingual-ai-support-agent",
    diagram: "rag",
    accent: "#6E56CF",
  },
  {
    title: "n8n & Cloudflare Webhook Regression Test Harness",
    tag: "Python / pytest · 2026",
    stack: ["Cloudflare Workers", "pytest", "n8n"],
    summary:
      "Two-layer automated regression harness asserting sub-2-second response latency, cuisine-matching follow-ups, and schema integrity.",
    metric: "< 2s asserted latency, every deploy",
    repoUrl: "https://github.com/FlowArchitect-Agency/hotel-concierge-ai",
    diagram: "webhook",
    accent: "#2E6FF6",
  },
  {
    title: "Prisma 7 PostgreSQL Approval State Machine",
    tag: "TypeScript · 2025",
    stack: ["Next.js 14", "Prisma 7", "PostgreSQL"],
    summary:
      "Server-side execution state machine validating human-in-the-loop workflow executions with atomic 409 conflict handling.",
    metric: "PENDING → APPROVED → RUNNING",
    repoUrl: "https://github.com/FlowArchitect-Agency/ai-internal-tool-builder",
    diagram: "statemachine",
    accent: "#2FB6A3",
  },
];

export default function LabGrid() {
  return (
    <section id="lab" className="relative overflow-hidden bg-[#0B0B0E] border-t border-white/10 px-6 py-28 md:px-16">
      {/* textured background: radial glow + faint dot grid, not flat black */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(110,86,207,0.12),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(46,111,246,0.1),transparent_40%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <p className="font-mono text-xs tracking-[0.25em] text-white/40 font-tnum">
          CHAPTER · 03 // LAB &amp; EXPERIMENTS
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-6xl font-display">
          Experiments &amp; Tooling
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {EXPERIMENTS.map((exp, i) => (
            <ExperimentCard key={exp.title} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperimentCard({ exp, index }: { exp: Experiment; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm flex flex-col justify-between"
    >
      {/* accent glow on hover */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ backgroundColor: exp.accent }}
      />

      <div>
        <div className="relative flex items-center justify-between">
          <span className="font-mono text-[11px] text-white/40">{exp.tag}</span>
          <div className="flex flex-wrap justify-end gap-1.5">
            {exp.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border px-2 py-0.5 font-mono text-[10px]"
                style={{ borderColor: `${exp.accent}55`, color: exp.accent }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <h3 className="relative mt-4 text-lg font-bold leading-snug text-white font-display">
          {exp.title}
        </h3>

        {/* diagram — draws itself in as the card enters view */}
        <div className="relative my-5 h-28 w-full">
          <Diagram type={exp.diagram} accent={exp.accent} />
        </div>

        <p className="relative text-sm leading-relaxed text-white/55 font-sans">{exp.summary}</p>
      </div>

      <div>
        <p
          className="relative mt-4 border-t border-white/10 pt-4 font-mono text-xs font-tnum"
          style={{ color: exp.accent }}
        >
          {exp.metric}
        </p>

        <a
          href={exp.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-4 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-white/60 transition-colors hover:text-white"
        >
          <span>Inspect Repo</span> <ExternalLink size={12} />
        </a>
      </div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------------- */
/* Per-project diagrams — small, specific, animated on scroll-into-view.  */
/* ---------------------------------------------------------------------- */

function Diagram({ type, accent }: { type: Experiment["diagram"]; accent: string }) {
  if (type === "rag") return <RagDiagram accent={accent} />;
  if (type === "webhook") return <WebhookDiagram accent={accent} />;
  return <StateMachineDiagram accent={accent} />;
}

function RagDiagram({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 320 110" className="h-full w-full">
      <motion.path
        d="M10 20 C 80 20, 100 55, 170 55"
        stroke={accent}
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.path
        d="M10 90 C 80 90, 100 55, 170 55"
        stroke={accent}
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.35 }}
      />
      <text x="12" y="15" fontSize="8" fill={accent} opacity="0.7" fontFamily="monospace">
        BM25
      </text>
      <text x="12" y="98" fontSize="8" fill={accent} opacity="0.7" fontFamily="monospace">
        pgvector
      </text>
      {[0, 1, 2, 3].map((i) => (
        <motion.rect
          key={i}
          x={190 + i * 28}
          width="18"
          rx="3"
          fill={accent}
          initial={{ height: 0, y: 90 }}
          whileInView={{ height: 20 + (3 - i) * 14, y: 90 - (20 + (3 - i) * 14) }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
          opacity={0.9 - i * 0.15}
        />
      ))}
    </svg>
  );
}

function WebhookDiagram({ accent }: { accent: string }) {
  const nodes = [
    { x: 20, y: 55 },
    { x: 110, y: 20 },
    { x: 200, y: 80 },
    { x: 300, y: 55 },
  ];
  const path = `M${nodes[0].x} ${nodes[0].y} L${nodes[1].x} ${nodes[1].y} L${nodes[2].x} ${nodes[2].y} L${nodes[3].x} ${nodes[3].y}`;

  return (
    <svg viewBox="0 0 320 110" className="h-full w-full">
      <path d={path} stroke={accent} strokeWidth="1" fill="none" opacity="0.25" />
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="4" fill={accent} opacity="0.5" />
      ))}
      <motion.circle
        r="5"
        fill={accent}
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: "100%" }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ offsetPath: `path("${path}")`, filter: `drop-shadow(0 0 4px ${accent})` }}
      />
    </svg>
  );
}

function StateMachineDiagram({ accent }: { accent: string }) {
  const states = ["PENDING", "APPROVED", "RUNNING"];
  return (
    <svg viewBox="0 0 320 110" className="h-full w-full">
      {states.map((s, i) => {
        const cx = 50 + i * 110;
        return (
          <g key={s}>
            {i < 2 && (
              <motion.line
                x1={cx + 40}
                y1={55}
                x2={cx + 70}
                y2={55}
                stroke={accent}
                strokeWidth="1.5"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.3 }}
              />
            )}
            <motion.rect
              x={cx - 34}
              y={38}
              width="68"
              height="34"
              rx="8"
              fill="none"
              stroke={accent}
              strokeWidth="1.5"
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: [0.3, 1, 0.6] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
            />
            <text
              x={cx}
              y={58}
              fontSize="8"
              textAnchor="middle"
              fill={accent}
              fontFamily="monospace"
            >
              {s}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
