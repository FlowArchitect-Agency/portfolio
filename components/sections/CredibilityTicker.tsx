'use client';

import { Terminal, CheckCircle2, GitBranch, Cpu, Database, Server, Zap } from 'lucide-react';

const TECH_ITEMS = [
  { label: 'PYTHON 3.12', icon: Terminal },
  { label: 'FASTAPI', icon: Zap },
  { label: 'APACHE AIRFLOW', icon: Server },
  { label: 'POSTGRESQL + PGVECTOR', icon: Database },
  { label: 'AWS CLOUD', icon: Cpu },
  { label: 'N8N WORKFLOWS', icon: GitBranch },
  { label: 'DOCKER ARCHITECTURE', icon: Server },
  { label: 'NEXT.JS 14 APP ROUTER', icon: CheckCircle2 },
  { label: 'EVALS & BENCHMARKS', icon: CheckCircle2 },
];

export default function CredibilityTicker() {
  return (
    <div className="bg-darkText text-canvas py-4 border-y border-darkText overflow-hidden select-none">
      <div className="flex w-max animate-ticker">
        {/* Render twice for seamless looping ticker */}
        {[...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 mx-6 font-mono text-xs tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <IconComp className="w-3.5 h-3.5 text-accent" />
              <span className="font-semibold text-canvas">{item.label}</span>
              <span className="text-canvas/30 ml-4">//</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
