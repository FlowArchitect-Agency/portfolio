"use client";

/**
 * LabGrid.tsx (Experiments & Tooling)
 *
 * Replaces flat static cards with expandable cards that surface REAL technical depth
 * pulled directly from each project's README — architecture decisions, performance numbers,
 * and automated test methodologies.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

type Experiment = {
  title: string;
  tag: string;
  stack: string[];
  summary: string;
  deepDive: string[];
  repoUrl: string;
};

const EXPERIMENTS: Experiment[] = [
  {
    title: "RAG Retrieval Benchmark & Hybrid Search Engine",
    tag: "Python · 2025",
    stack: ["FastAPI", "pgvector", "BM25"],
    summary:
      "Hybrid RAG search engine evaluating pgvector cosine similarity vs BM25 lexical policy matching to prevent weak vector ranking on domain knowledge bases.",
    deepDive: [
      "Hybrid RAG ranker combining pgvector similarity search with lexical policy keyword matches to prevent hallucinated citations.",
      "Configurable 78% confidence ceiling with 35-second zero-retry ceilings auto-escalating uncertain cases to human support queues.",
      "Prometheus metric scrape exporter (/metrics) & Grafana dashboard tracking auto-resolution rate, token cost, trace ID, and p95 latency.",
    ],
    repoUrl: "https://github.com/FlowArchitect-Agency/polylingual-ai-support-agent",
  },
  {
    title: "n8n & Cloudflare Webhook Regression Test Harness",
    tag: "Python / pytest · 2026",
    stack: ["Cloudflare Workers", "pytest", "n8n Webhooks"],
    summary:
      "Two-layer automated regression harness asserting sub-2-second response latency, strict cuisine-matching follow-ups, and schema integrity.",
    deepDive: [
      "Two-layer automated test architecture executing contract validations (npm test) and isolated live smoke tests (npm run test:live).",
      "Hard constraint checks enforcing named cuisine follow-ups and blocking stale directory/listicle recommendation fallbacks.",
      "Zero-pollution test lifecycle executing isolated Airtable writes, field assertions, and automatic record cleanup on completion.",
    ],
    repoUrl: "https://github.com/FlowArchitect-Agency/hotel-concierge-ai",
  },
  {
    title: "Prisma 7 PostgreSQL Approval State Machine",
    tag: "TypeScript · 2025",
    stack: ["Next.js 14", "Prisma 7", "PostgreSQL"],
    summary:
      "Server-side execution state machine validating human-in-the-loop workflow executions with atomic 409 conflict handling.",
    deepDive: [
      "Strict execution pipeline backing Prisma ExecutionStatus enum (PENDING → APPROVED → RUNNING → SUCCESS / FAILED).",
      "Atomic 409 conflict handling preventing concurrent approval race conditions on live workflow execution triggers.",
      "Server-enforced execution policies (ALLOW_LIVE_EXECUTION) blocking unsanctioned connector calls, returning HTTP 403 while dynamically exposing state to UI.",
    ],
    repoUrl: "https://github.com/FlowArchitect-Agency/ai-internal-tool-builder",
  },
];

export default function LabGrid() {
  return (
    <section id="lab" className="bg-[#0A0A0B] border-t border-white/10 px-6 py-24 md:px-16 max-w-7xl mx-auto space-y-10">
      <div>
        <p className="font-mono text-xs tracking-[0.2em] text-white/40 font-tnum">
          CHAPTER · 03 // LAB &amp; EXPERIMENTS
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl font-display">
          Experiments &amp; Tooling
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {EXPERIMENTS.map((exp) => (
          <ExperimentCard key={exp.title} exp={exp} />
        ))}
      </div>
    </section>
  );
}

function ExperimentCard({ exp }: { exp: Experiment }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between hover:border-white/20 transition-colors shadow-sm"
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-xs text-white/40">{exp.tag}</span>
          <div className="flex flex-wrap gap-1.5">
            {exp.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#6E56CF]/40 px-2 py-0.5 font-mono text-[10px] text-[#6E56CF]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <h3 className="mt-4 text-lg font-bold text-white font-display">{exp.title}</h3>
        <p className="mt-2 text-sm text-white/60 leading-relaxed">{exp.summary}</p>
      </div>

      <div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="mt-6 flex items-center gap-1.5 font-mono text-xs text-white/50 hover:text-white transition-colors"
        >
          <span>{open ? "HIDE TECHNICAL DETAIL" : "TECHNICAL DETAIL"}</span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={14} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-3 space-y-2.5 overflow-hidden border-t border-white/10 pt-3"
            >
              {exp.deepDive.map((point, idx) => (
                <li key={idx} className="flex gap-2 text-xs text-white/60 leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6E56CF]" />
                  <span>{point}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <a
          href={exp.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center gap-1.5 border-t border-white/10 pt-4 font-mono text-xs uppercase tracking-wide text-white/70 hover:text-white transition-colors"
        >
          <span>Inspect Repo</span> <ExternalLink size={12} />
        </a>
      </div>
    </motion.div>
  );
}
