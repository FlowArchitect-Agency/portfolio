'use client';

import { useState } from 'react';
import Image from 'next/image';
import StatusBadge from '../ui/StatusBadge';
import { ExternalLink, Github, Terminal, Layers, Globe } from 'lucide-react';

export interface ModuleData {
  indexNumber: string;
  title: string;
  idCode: string;
  status: string;
  manifesto: string;
  stack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  imagePath: string;
  description?: string;
}

export default function ModuleCard({ module }: { module: ModuleData }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="w-full lg:w-[760px] shrink-0 bg-card border border-borderMuted rounded-xl p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-sm hover:border-darkText/30 transition-all duration-300 group">
      {/* Top Header Row */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-borderMuted/80">
          <div className="flex items-center gap-4">
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-accent">
              [{module.indexNumber}]
            </span>
            <StatusBadge idCode={module.idCode} status={module.status} />
          </div>
          <span className="font-mono text-xs text-mutedText uppercase tracking-widest hidden sm:inline-block">
            MODULE // PROJECT
          </span>
        </div>

        {/* Project Title & Manifesto */}
        <div className="mt-6 space-y-4">
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-darkText group-hover:text-accent transition-colors">
            {module.title}
          </h3>

          <div className="p-4 bg-surface/70 border-l-2 border-accent rounded-r-md font-sans text-base sm:text-lg text-darkText font-medium italic">
            &ldquo;{module.manifesto}&rdquo;
          </div>
        </div>

        {/* Stack Tags */}
        <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="text-mutedText uppercase tracking-wider mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-accent" /> TECH:
          </span>
          {module.stack.map((tech) => (
            <span
              key={tech}
              className="bg-canvas border border-borderMuted px-3 py-1 rounded-sm text-darkText font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Screenshot / Technical Wireframe Fallback Container */}
      <div className="my-6 relative w-full h-[220px] sm:h-[260px] rounded-lg overflow-hidden bg-surface border border-borderMuted/80 flex items-center justify-center">
        {!imageError ? (
          <Image
            src={module.imagePath}
            alt={module.title}
            fill
            sizes="(max-width: 768px) 100vw, 760px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            onError={() => setImageError(true)}
          />
        ) : (
          /* Sleek Technical Placeholder Fallback */
          <div className="w-full h-full p-6 flex flex-col justify-between bg-tech-grid relative select-none">
            <div className="flex justify-between items-center font-mono text-[10px] text-mutedText uppercase">
              <span>PLACEHOLDER // SCREENSHOT</span>
              <span>PATH: /public{module.imagePath}</span>
            </div>

            <div className="my-auto text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs font-bold text-darkText uppercase">
                {module.title}
              </div>
              <div className="font-mono text-[11px] text-mutedText">
                Drop real screenshot to <code className="text-accent">{module.imagePath}</code>
              </div>
            </div>

            <div className="flex justify-between items-center font-mono text-[10px] text-mutedText uppercase">
              <span>STATUS: READY_FOR_IMAGE</span>
              <span>FLOWARCHITECT AGENCY</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Footer */}
      <div className="pt-4 border-t border-borderMuted/80 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
        <span className="text-mutedText">PROJECT LINKS</span>
        <div className="flex items-center gap-3">
          {module.liveDemoUrl && (
            <a
              href={module.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white px-4 py-2.5 rounded-sm uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
            >
              <Globe className="w-4 h-4" />
              <span>LIVE DEMO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <a
            href={module.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-darkText text-canvas px-4 py-2.5 rounded-sm uppercase tracking-wider font-semibold hover:bg-accent transition-colors group/link"
          >
            <Github className="w-4 h-4" />
            <span>VIEW CODE</span>
            <ExternalLink className="w-3.5 h-3.5 text-canvas group-hover/link:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </article>
  );
}
