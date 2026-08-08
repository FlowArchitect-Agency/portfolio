'use client';

import { DESIGN_TOKENS } from '@/lib/design-tokens';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { author } = DESIGN_TOKENS;

  return (
    <footer className="bg-surface border-t border-borderColor py-16 px-8 md:px-16 font-sans text-xs text-textMuted select-none">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Grid */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-borderColor">
          <div>
            <div className="font-display font-bold text-xl text-textPrimary flex items-center gap-1.5">
              <span className="text-accent">✦</span>
              <span>{author.name}</span>
            </div>
            <div className="text-textSecondary mt-1">{author.title} · {author.location}</div>
          </div>

          <div className="flex flex-wrap items-center gap-8 font-medium text-textSecondary text-sm">
            <a
              href={`mailto:${author.email}`}
              className="hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              <span>Email</span>
              <ArrowUpRight className="w-4 h-4 text-textMuted" />
            </a>
            <a
              href={author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-textMuted" />
            </a>
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-textMuted" />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div>Based in Paris, France</div>
          <div>© {new Date().getFullYear()} Mehdi Mechkak — Designed and built in Paris.</div>
        </div>
      </div>
    </footer>
  );
}
