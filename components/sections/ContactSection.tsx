'use client';

import { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import MagneticButton from '../ui/MagneticButton';
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
    <section id="contact" className="py-28 md:py-36 bg-surface/40 border-t border-borderColor px-8 md:px-16 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <ScrollReveal>
        <div>
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3 font-tnum">
            CHAPTER · 04 // SAY HI 👋
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-textPrimary">
            Initiate Contact
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="bg-surface border border-borderColor rounded-3xl p-8 sm:p-14 space-y-10 shadow-sm">
          <div className="max-w-2xl space-y-4">
            <h3 className="font-display font-bold text-3xl text-textPrimary">
              Let&apos;s discuss an AI architecture or engineering role.
            </h3>
            <p className="font-sans text-base sm:text-lg text-textSecondary leading-relaxed">
              I am based in Paris, France and open for high-impact Applied AI roles, technical advisory, and system architecture contracts.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 items-center">
            {/* Email Copy Box */}
            <div className="flex items-center gap-3 p-4 bg-surfaceElevated border border-borderColor rounded-xl font-mono text-xs sm:text-sm text-textPrimary">
              <Mail className="w-4 h-4 text-accent" />
              <span>{author.email}</span>
              <button
                onClick={handleCopy}
                className="p-1.5 hover:bg-borderColor/40 rounded transition-colors text-textMuted hover:text-textPrimary ml-2"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Mailto CTA Button */}
            <MagneticButton strength={0.2}>
              <a
                href={`mailto:${author.email}`}
                className="inline-flex items-center gap-2 bg-textPrimary text-background font-sans font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
              >
                <span>SEND DIRECT EMAIL</span>
                <ArrowUpRight className="w-4 h-4 text-accent" />
              </a>
            </MagneticButton>

            {/* Social Links */}
            <MagneticButton strength={0.15}>
              <a
                href={author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface border border-borderColor text-textPrimary font-sans text-xs px-5 py-4 rounded-xl hover:border-borderColorHover transition-colors font-medium"
              >
                <Github className="w-4 h-4 text-accent" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-textMuted" />
              </a>
            </MagneticButton>

            <MagneticButton strength={0.15}>
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface border border-borderColor text-textPrimary font-sans text-xs px-5 py-4 rounded-xl hover:border-borderColorHover transition-colors font-medium"
              >
                <Linkedin className="w-4 h-4 text-accent" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-textMuted" />
              </a>
            </MagneticButton>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
