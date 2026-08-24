'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CreatorFlowDemo from '@/components/demos/CreatorFlowDemo';
import LexIntakeDemo from '@/components/demos/LexIntakeDemo';
import StudioPulseDemo from '@/components/demos/StudioPulseDemo';
import { Sparkles, Video, Scale, Music, ArrowLeft, ExternalLink, Mail, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

type DemoTab = 'creatorflow' | 'lexintake' | 'studiopulse';

const TABS = [
  {
    id: 'creatorflow' as DemoTab,
    label: '1. CreatorFlow AI Studio',
    target: 'Nothing Nice (Content Producer)',
    icon: Video,
    tag: '$3,000–$3,500/mo Workflow',
  },
  {
    id: 'lexintake' as DemoTab,
    label: '2. LexIntake AI Triage',
    target: 'Law Offices of Matthew Cohan',
    icon: Scale,
    tag: 'Meta Ad & Legal Intake Funnel',
  },
  {
    id: 'studiopulse' as DemoTab,
    label: '3. StudioPulse Hub',
    target: 'The Dancenter Guatemala',
    icon: Music,
    tag: 'Class Booking & Social Engine',
  },
];

export default function DemosPage() {
  const [activeTab, setActiveTab] = useState<DemoTab>('creatorflow');

  return (
    <main className="min-h-screen bg-background text-textPrimary py-28 md:py-36 px-6 sm:px-8 md:px-16 max-w-7xl mx-auto space-y-12">
      {/* Header & Back Link */}
      <div className="space-y-6 pb-6 border-b border-borderColor">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-textMuted hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO MAIN PORTFOLIO</span>
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-3 font-tnum">
              <Sparkles className="w-4 h-4" />
              <span>INTERACTIVE CLIENT SOLUTIONS // CONTRA OFFERS SUITE</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-textPrimary tracking-tight">
              Production Client Demos
            </h1>
          </div>
          <p className="font-sans text-base text-textSecondary max-w-xl leading-relaxed">
            Live, interactive prototypes architected specifically for Contra client briefs. Engineered with Apple fluid motion, deterministic prompt guardrails, and automated visual workflows.
          </p>
        </div>
      </div>

      {/* Apple-Style Segmented Pill Switcher */}
      <div className="flex flex-wrap items-center gap-3 p-1.5 rounded-2xl bg-surface border border-borderColor shadow-sm">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative flex-1 min-w-[240px] py-3.5 px-5 rounded-xl font-sans text-left transition-colors flex items-center justify-between gap-3 select-none"
            >
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-surfaceElevated border border-borderColor rounded-xl shadow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <div className="relative z-10 flex items-center gap-3">
                <div className={`p-2 rounded-lg ${isActive ? 'bg-accent text-white' : 'bg-surface border border-borderColor text-textMuted'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className={`block text-xs sm:text-sm font-bold ${isActive ? 'text-textPrimary' : 'text-textSecondary'}`}>
                    {tab.label}
                  </span>
                  <span className="block font-mono text-[10px] text-textMuted mt-0.5">
                    {tab.target}
                  </span>
                </div>
              </div>

              <span className={`relative z-10 hidden sm:inline-block font-mono text-[10px] px-2 py-0.5 rounded ${
                isActive ? 'bg-accent/15 text-accent font-semibold' : 'text-textMuted'
              }`}>
                {tab.tag}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Prototype Display */}
      <div className="pt-4">
        <AnimatePresence mode="wait">
          {activeTab === 'creatorflow' && (
            <motion.div
              key="creatorflow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <CreatorFlowDemo />
            </motion.div>
          )}

          {activeTab === 'lexintake' && (
            <motion.div
              key="lexintake"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <LexIntakeDemo />
            </motion.div>
          )}

          {activeTab === 'studiopulse' && (
            <motion.div
              key="studiopulse"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <StudioPulseDemo />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Conversion Banner */}
      <div className="mt-16 pt-12 border-t border-borderColor flex flex-col md:flex-row md:items-center justify-between gap-6 bg-surface p-8 sm:p-10 rounded-3xl border shadow-sm">
        <div className="space-y-2">
          <h3 className="font-display font-bold text-2xl text-textPrimary">
            Want an automated system engineered for your business?
          </h3>
          <p className="font-sans text-sm text-textSecondary max-w-xl">
            Available for remote contract engagements (20–25 hrs/week) at $50/hr. Fast delivery with working proof in days, not months.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 shrink-0 font-sans">
          <a
            href="mailto:mehdimechkak2025@gmail.com"
            className="inline-flex items-center gap-2 bg-textPrimary text-background font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
          >
            <Mail className="w-4 h-4 text-accent" />
            <span>Contact Mehdi</span>
          </a>

          <a
            href="https://contra.com/mehdi_mechkak_gmf5vcxj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-surfaceElevated border border-borderColor text-textPrimary font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl hover:border-borderColorHover transition-colors shadow-sm"
          >
            <span>Hire on Contra</span>
            <ExternalLink className="w-3.5 h-3.5 text-accent" />
          </a>
        </div>
      </div>
    </main>
  );
}
