'use client';

import { DESIGN_TOKENS } from '@/lib/design-tokens';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { author } = DESIGN_TOKENS;

  return (
    <footer className="bg-surface border-t border-borderColor py-12 px-6 md:px-12 font-sans text-xs text-textMuted select-none">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Grid */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-borderColor">
          <div>
            <div className="font-display font-bold text-lg text-textPrimary">
              {author.name}
            </div>
            <div className="text-textSecondary">{author.title} · {author.location}</div>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-medium text-textSecondary">
            <a
              href={`mailto:${author.email}`}
              className="hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-textMuted" />
            </a>
            <a
              href={author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-textMuted" />
            </a>
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-textMuted" />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>Based in Paris, France</div>
          <div>© {new Date().getFullYear()} Mehdi Mechkak — Designed and built in Paris.</div>
        </div>
      </div>
    </footer>
  );
}
