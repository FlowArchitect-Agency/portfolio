'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Globe } from 'lucide-react';
import { Project } from '@/lib/projects-data';

export default function CaseStudyCard({ project, index }: { project: Project; index: number }) {
  const chapterNumber = (index + 1).toString().padStart(2, '0');
  const mainThumbnail = project.screenshots[0]?.url || '/project-screenshots/polylingual-1.png';

  return (
    <article className="group bg-surface border border-borderColor rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-borderColorHover transition-all duration-300 shadow-sm">
      <div>
        {/* Card Header: Chapter marker & Category */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-borderColor font-mono text-xs text-textMuted">
          <div className="flex items-center gap-2">
            <span className="text-accent font-tnum font-bold">CHAPTER · {chapterNumber}</span>
            <span>//</span>
            <span className="text-textSecondary uppercase tracking-wider">{project.year}</span>
          </div>
          <span className="bg-surfaceElevated border border-borderColor px-2.5 py-1 rounded text-[11px] font-medium text-textSecondary uppercase tracking-wider">
            {project.category.split('·')[0].trim()}
          </span>
        </div>

        {/* Project Thumbnail Image */}
        <Link href={`/work/${project.slug}`} className="block my-6 relative w-full h-[220px] sm:h-[260px] rounded-xl overflow-hidden bg-surfaceElevated border border-borderColor group/img">
          <Image
            src={mainThumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-background/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-background/90 text-textPrimary px-4 py-2 rounded-full font-mono text-xs font-semibold flex items-center gap-2 border border-borderColor">
              <span>VIEW CASE STUDY</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent" />
            </span>
          </div>
        </Link>

        {/* Title & Tagline */}
        <div className="space-y-3">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-textPrimary group-hover:text-accent transition-colors">
            <Link href={`/work/${project.slug}`}>{project.title}</Link>
          </h3>
          <p className="font-sans text-base text-textSecondary leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Stack Pills */}
        <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="bg-surfaceElevated border border-borderColor px-2.5 py-1 rounded text-textSecondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Link & Action Buttons */}
      <div className="mt-8 pt-6 border-t border-borderColor flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
        {project.liveDemoUrl ? (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white px-4 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            <Globe className="w-4 h-4" />
            <span>OPEN LIVE DEMO</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-textMuted uppercase tracking-wider">FULL CASE STUDY</span>
        )}

        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 text-textPrimary font-semibold hover:text-accent transition-colors group/link"
        >
          <span>VIEW CASE STUDY</span>
          <ArrowRight className="w-4 h-4 text-accent group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
