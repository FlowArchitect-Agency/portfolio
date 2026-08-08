'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import StatusBadge from '../ui/StatusBadge';
import { Mail, Github, Linkedin, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'flowarchitect.agency@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface/70 border-t border-borderMuted relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-card border border-borderMuted rounded-2xl p-8 sm:p-12 md:p-16 shadow-sm relative overflow-hidden">
          {/* Top metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-borderMuted">
            <StatusBadge idCode="CONTACT-MEHDI-PARIS" status="OPEN FOR COLLABORATION" />
            <div className="font-mono text-xs text-mutedText flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>PARIS, FRANCE (CET // UTC+01:00)</span>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10 items-center">
            {/* Left: Display Header & Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono text-xs text-accent uppercase tracking-widest">
                [03] DIRECT CONTACT // DISCUSS AN AI ARCHITECTURE
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-darkText uppercase">
                LET&apos;S BUILD SOMETHING RELIABLE.
              </h2>
              <p className="font-sans text-base text-darkText/80 max-w-xl leading-relaxed">
                Whether you need a custom RAG agent, an automated ETL pipeline, or human-in-the-loop AI internal tools, I am available for high-impact engineering roles and technical advisory.
              </p>

              {/* Direct Links */}
              <div className="flex flex-wrap gap-4 pt-4 font-mono text-xs">
                <a
                  href="https://github.com/FlowArchitect-Agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-surface border border-borderMuted px-4 py-2.5 rounded-sm hover:border-darkText transition-colors font-medium text-darkText"
                >
                  <Github className="w-4 h-4 text-accent" />
                  <span>GITHUB: FlowArchitect-Agency</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-mutedText" />
                </a>

                <a
                  href="https://linkedin.com/in/mehdi-mechkak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-surface border border-borderMuted px-4 py-2.5 rounded-sm hover:border-darkText transition-colors font-medium text-darkText"
                >
                  <Linkedin className="w-4 h-4 text-accent" />
                  <span>LINKEDIN: mehdi-mechkak</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-mutedText" />
                </a>
              </div>
            </div>

            {/* Right: Email Action Box */}
            <div className="lg:col-span-5 bg-canvas border border-borderMuted rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="font-mono text-xs text-mutedText uppercase tracking-wider">
                PRIMARY EMAIL ADDRESS
              </div>

              {/* Copyable Email Box */}
              <div className="flex items-center justify-between p-3.5 bg-surface border border-borderMuted rounded font-mono text-xs sm:text-sm text-darkText font-semibold break-all">
                <span>{email}</span>
                <button
                  onClick={handleCopy}
                  title="Copy email to clipboard"
                  className="ml-2 p-2 hover:bg-borderMuted/40 rounded transition-colors text-mutedText hover:text-darkText shrink-0"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Main Mailto CTA Button */}
              <a
                href={`mailto:${email}`}
                className="w-full inline-flex items-center justify-center gap-3 bg-darkText text-canvas font-mono text-xs uppercase tracking-wider py-4 px-6 rounded-sm font-semibold hover:bg-accent transition-colors group"
              >
                <Mail className="w-4 h-4 text-canvas" />
                <span>SEND DIRECT EMAIL</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="font-mono text-[10px] text-mutedText text-center uppercase">
                TYPICAL RESPONSE TIME: WITHIN 24 HOURS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
