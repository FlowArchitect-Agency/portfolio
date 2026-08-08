'use client';

import { useState } from 'react';
import { DESIGN_TOKENS } from '@/lib/design-tokens';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const { author } = DESIGN_TOKENS;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(author.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-surface/50 border-t border-borderColor px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div>
        <div className="font-mono text-xs text-accent uppercase tracking-widest mb-2 font-tnum">
          CHAPTER · 04 // SAY HI 👋
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-textPrimary">
          Initiate Contact
        </h2>
      </div>

      <div className="bg-surface border border-borderColor rounded-2xl p-8 sm:p-12 space-y-8 shadow-sm">
        <div className="max-w-2xl space-y-4">
          <h3 className="font-display font-bold text-2xl text-textPrimary">
            Let&apos;s discuss an AI architecture or engineering role.
          </h3>
          <p className="font-sans text-base text-textSecondary leading-relaxed">
            I am based in Paris, France and open for high-impact Applied AI roles, technical advisory, and system architecture contracts.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          {/* Email Copy Box */}
          <div className="flex items-center gap-3 p-3 bg-surfaceElevated border border-borderColor rounded-xl font-mono text-xs text-textPrimary">
            <Mail className="w-4 h-4 text-accent" />
            <span>{author.email}</span>
            <button
              onClick={handleCopy}
              className="p-1.5 hover:bg-borderColor/40 rounded transition-colors text-textMuted hover:text-textPrimary ml-2"
              title="Copy email to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Mailto CTA Button */}
          <a
            href={`mailto:${author.email}`}
            className="inline-flex items-center gap-2 bg-accent text-white font-sans font-semibold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            <span>SEND DIRECT EMAIL</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Social Links */}
          <a
            href={author.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-surface border border-borderColor text-textPrimary font-sans text-xs px-4 py-3.5 rounded-xl hover:border-borderColorHover transition-colors font-medium"
          >
            <Github className="w-4 h-4 text-accent" />
            <span>GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-textMuted" />
          </a>

          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-surface border border-borderColor text-textPrimary font-sans text-xs px-4 py-3.5 rounded-xl hover:border-borderColorHover transition-colors font-medium"
          >
            <Linkedin className="w-4 h-4 text-accent" />
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-textMuted" />
          </a>
        </div>
      </div>
    </section>
  );
}
