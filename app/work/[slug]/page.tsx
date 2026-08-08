import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS, Project } from '@/lib/projects-data';
import StickyChapterNav from '@/components/ui/StickyChapterNav';
import MetricCounter from '@/components/ui/MetricCounter';
import PhoneMockup from '@/components/ui/PhoneMockup';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const chapterList = project.chapters.map((ch) => ({
    id: ch.id,
    number: ch.number,
    title: ch.title,
  }));

  return (
    <main className="min-h-screen bg-background text-textPrimary pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Top Breadcrumb & Header Navigation */}
      <div className="flex items-center justify-between border-b border-borderColor pb-6">
        <div className="flex items-center gap-2 font-mono text-xs text-textMuted">
          <Link href="/work" className="hover:text-accent transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ALL WORK</span>
          </Link>
          <span>/</span>
          <span className="text-textSecondary uppercase font-medium truncate max-w-[200px] sm:max-w-none">
            {project.title}
          </span>
        </div>

        <span className="font-mono text-xs text-accent font-bold font-tnum">
          {project.year} // CASE STUDY
        </span>
      </div>

      {/* Hero Header Block */}
      <div className="space-y-6 max-w-4xl">
        {/* Category Tag Row */}
        <div className="inline-flex items-center gap-2 bg-surface border border-borderColor px-3 py-1.5 rounded-full font-mono text-xs text-textSecondary uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5 text-accent" />
          <span>{project.category}</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-textPrimary tracking-tight leading-[1.08]">
          {project.title}
        </h1>

        <p className="font-sans text-xl sm:text-2xl text-textSecondary font-normal leading-relaxed">
          {project.tagline}
        </p>

        {/* External Links Row */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white font-sans font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
            >
              <span>LIVE DEMO — OPEN</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-surface border border-borderColor text-textPrimary font-sans font-medium text-xs uppercase tracking-wider px-5 py-3 rounded-xl hover:border-borderColorHover transition-colors"
          >
            <Github className="w-4 h-4 text-accent" />
            <span>GITHUB REPO — OPEN</span>
            <ExternalLink className="w-3.5 h-3.5 text-textMuted" />
          </a>
        </div>
      </div>

      {/* Special Showcase: Interactive Phone Mockup (if enabled, e.g. Polylingual) */}
      {project.hasInteractivePhoneDemo && project.liveDemoUrl && (
        <section className="bg-surface border border-borderColor rounded-2xl p-6 sm:p-10 text-center space-y-4">
          <div className="font-mono text-xs text-accent uppercase tracking-widest font-tnum">
            LIVE EMBEDDED DEMO // INTERACTIVE SHOWCASE
          </div>
          <h2 className="font-display font-bold text-2xl text-textPrimary">
            Test the Grounded Support Agent Live
          </h2>
          <PhoneMockup demoUrl={project.liveDemoUrl} title={project.title} />
        </section>
      )}

      {/* Overview & Metadata Block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-surface border border-borderColor rounded-2xl p-8 sm:p-12 shadow-sm">
        {/* Left: The Story & Contributions */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-3">
            <h3 className="font-mono text-xs text-textMuted uppercase tracking-widest font-tnum">
              THE STORY
            </h3>
            <p className="font-sans text-base sm:text-lg text-textPrimary leading-relaxed">
              {project.story}
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-borderColor">
            <h3 className="font-mono text-xs text-textMuted uppercase tracking-widest font-tnum">
              MY CONTRIBUTIONS
            </h3>
            <ul className="space-y-3">
              {project.contributions.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 font-sans text-sm text-textSecondary">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Metadata Details */}
        <div className="lg:col-span-4 bg-surfaceElevated border border-borderColor rounded-xl p-6 space-y-6 font-sans text-xs">
          <div className="font-mono text-xs text-textMuted uppercase tracking-widest border-b border-borderColor pb-3 font-tnum">
            PROJECT METADATA
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-textMuted uppercase tracking-wider mb-1">ROLE</div>
              <div className="font-semibold text-textPrimary">{project.role}</div>
            </div>
            <div>
              <div className="text-textMuted uppercase tracking-wider mb-1">DISCIPLINE</div>
              <div className="font-semibold text-textPrimary">{project.discipline}</div>
            </div>
            <div>
              <div className="text-textMuted uppercase tracking-wider mb-1">YEAR</div>
              <div className="font-semibold text-textPrimary font-tnum">{project.year}</div>
            </div>
            <div>
              <div className="text-textMuted uppercase tracking-wider mb-1">SCOPE</div>
              <div className="font-semibold text-textPrimary">{project.scope}</div>
            </div>
            <div>
              <div className="text-textMuted uppercase tracking-wider mb-2">TECH STACK</div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {project.stack.map((tech) => (
                  <span key={tech} className="bg-surface border border-borderColor px-2 py-0.5 rounded text-textSecondary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Callouts Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {project.metrics.map((m) => (
          <MetricCounter key={m.label} value={m.value} label={m.label} subtext={m.subtext} />
        ))}
      </div>

      {/* Main Narrative & Sticky Chapter Navigation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-borderColor">
        {/* Sticky Chapter Sidebar (Desktop) */}
        <div className="lg:col-span-3">
          <StickyChapterNav chapters={chapterList} />
        </div>

        {/* Chaptered Narrative Content */}
        <div className="lg:col-span-9 space-y-16">
          {project.chapters.map((ch) => (
            <section id={ch.id} key={ch.id} className="space-y-6 scroll-mt-28">
              {/* Chapter Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-borderColor">
                <span className="font-mono text-xs font-bold text-accent font-tnum">
                  CHAPTER · {ch.number}
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-textPrimary">
                  {ch.title}
                </h2>
              </div>

              {/* Main Chapter Content */}
              <p className="font-sans text-base sm:text-lg text-textSecondary leading-relaxed">
                {ch.content}
              </p>

              {/* Bullets (if any) */}
              {ch.bullets && ch.bullets.length > 0 && (
                <ul className="space-y-2 pt-2">
                  {ch.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 font-sans text-sm text-textSecondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Code Snippet (if any) */}
              {ch.codeSnippet && (
                <div className="my-6 rounded-xl border border-borderColor overflow-hidden bg-[#0D0D11] text-xs font-mono">
                  <div className="bg-[#16161D] border-b border-white/10 px-4 py-2 text-textMuted flex justify-between">
                    <span>{ch.codeSnippet.filename}</span>
                    <span className="uppercase text-accent">{ch.codeSnippet.language}</span>
                  </div>
                  <pre className="p-4 text-emerald-400 overflow-x-auto leading-relaxed">
                    <code>{ch.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

              {/* Artifact Screenshots (if any) */}
              {ch.artifacts && ch.artifacts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  {ch.artifacts.map((art, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="relative w-full h-[240px] rounded-xl overflow-hidden bg-surface border border-borderColor">
                        <Image
                          src={art.imageUrl}
                          alt={art.caption}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover object-top"
                        />
                      </div>
                      <p className="font-mono text-[11px] text-textMuted text-center">
                        {art.caption}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
