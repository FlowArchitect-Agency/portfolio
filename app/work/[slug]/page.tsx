import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/lib/projects-data';
import StickyChapterNav from '@/components/ui/StickyChapterNav';
import MetricCounter from '@/components/ui/MetricCounter';
import IphoneMockup from '@/components/ui/iPhoneMockup';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MagneticButton from '@/components/ui/MagneticButton';
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
    <main className="min-h-screen bg-background text-textPrimary pt-40 pb-32 px-8 md:px-16 max-w-7xl mx-auto space-y-20">
      {/* Top Breadcrumb & Header Navigation */}
      <div className="flex items-center justify-between border-b border-borderColor pb-8">
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
      <ScrollReveal>
        <div className="space-y-8 max-w-4xl">
          {/* Category Tag Row */}
          <div className="inline-flex items-center gap-2 bg-surface border border-borderColor px-4 py-2 rounded-full font-mono text-xs text-textSecondary uppercase tracking-wider">
            <Layers className="w-4 h-4 text-accent" />
            <span>{project.category}</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-textPrimary tracking-tight leading-[1.05]">
            {project.title}
          </h1>

          <p className="font-sans text-xl sm:text-2xl text-textSecondary font-normal leading-relaxed">
            {project.tagline}
          </p>

          {/* External Links Row */}
          <div className="flex flex-wrap items-center gap-5 pt-3">
            {project.liveDemoUrl && (
              <MagneticButton strength={0.2}>
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-textPrimary text-background font-sans font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
                >
                  <span>LIVE DEMO — OPEN</span>
                  <ExternalLink className="w-4 h-4 text-accent" />
                </a>
              </MagneticButton>
            )}
            <MagneticButton strength={0.15}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface border border-borderColor text-textPrimary font-sans font-medium text-xs uppercase tracking-wider px-6 py-4 rounded-xl hover:border-borderColorHover transition-colors"
              >
                <Github className="w-4 h-4 text-accent" />
                <span>GITHUB REPO — OPEN</span>
                <ExternalLink className="w-3.5 h-3.5 text-textMuted" />
              </a>
            </MagneticButton>
          </div>
        </div>
      </ScrollReveal>

      {/* SPECIAL SHOWCASE: Realistic CSS iPhone Mockup on Polylingual */}
      {project.hasInteractivePhoneDemo && project.liveDemoUrl && (
        <ScrollReveal delay={0.2}>
          <section className="bg-surface border border-borderColor rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-sm">
            <div className="font-mono text-xs text-accent uppercase tracking-widest font-tnum">
              LIVE EMBEDDED DEMO // REALISTIC IPHONE SHOWCASE
            </div>
            <h2 className="font-display font-bold text-3xl text-textPrimary">
              Test the Grounded Support Agent Live
            </h2>
            <IphoneMockup demoUrl={project.liveDemoUrl} title={project.title} />
          </section>
        </ScrollReveal>
      )}

      {/* Overview & Metadata Block */}
      <ScrollReveal delay={0.15}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-surface border border-borderColor rounded-3xl p-8 sm:p-14 shadow-sm">
          {/* Left: The Story & Contributions */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4">
              <h3 className="font-mono text-xs text-textMuted uppercase tracking-widest font-tnum">
                THE STORY
              </h3>
              <p className="font-sans text-base sm:text-xl text-textPrimary leading-relaxed">
                {project.story}
              </p>
            </div>

            <div className="space-y-5 pt-6 border-t border-borderColor">
              <h3 className="font-mono text-xs text-textMuted uppercase tracking-widest font-tnum">
                MY CONTRIBUTIONS
              </h3>
              <ul className="space-y-4">
                {project.contributions.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 font-sans text-base text-textSecondary">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Metadata Details */}
          <div className="lg:col-span-4 bg-surfaceElevated border border-borderColor rounded-2xl p-8 space-y-6 font-sans text-xs">
            <div className="font-mono text-xs text-textMuted uppercase tracking-widest border-b border-borderColor pb-4 font-tnum">
              PROJECT METADATA
            </div>

            <div className="space-y-5">
              <div>
                <div className="text-textMuted uppercase tracking-wider mb-1">ROLE</div>
                <div className="font-semibold text-textPrimary text-sm">{project.role}</div>
              </div>
              <div>
                <div className="text-textMuted uppercase tracking-wider mb-1">DISCIPLINE</div>
                <div className="font-semibold text-textPrimary text-sm">{project.discipline}</div>
              </div>
              <div>
                <div className="text-textMuted uppercase tracking-wider mb-1">YEAR</div>
                <div className="font-semibold text-textPrimary font-tnum text-sm">{project.year}</div>
              </div>
              <div>
                <div className="text-textMuted uppercase tracking-wider mb-1">SCOPE</div>
                <div className="font-semibold text-textPrimary text-sm">{project.scope}</div>
              </div>
              <div>
                <div className="text-textMuted uppercase tracking-wider mb-2.5">TECH STACK</div>
                <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                  {project.stack.map((tech) => (
                    <span key={tech} className="bg-surface border border-borderColor px-2.5 py-1 rounded text-textSecondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Metric Callouts Row */}
      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {project.metrics.map((m) => (
            <MetricCounter key={m.label} value={m.value} label={m.label} subtext={m.subtext} />
          ))}
        </div>
      </ScrollReveal>

      {/* Main Narrative & Sticky Chapter Navigation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-borderColor">
        {/* Sticky Chapter Sidebar (Desktop) */}
        <div className="lg:col-span-3">
          <StickyChapterNav chapters={chapterList} />
        </div>

        {/* Chaptered Narrative Content */}
        <div className="lg:col-span-9 space-y-20">
          {project.chapters.map((ch) => (
            <ScrollReveal key={ch.id}>
              <section id={ch.id} className="space-y-8 scroll-mt-32">
                {/* Chapter Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-borderColor">
                  <span className="font-mono text-xs font-bold text-accent font-tnum">
                    CHAPTER · {ch.number}
                  </span>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-textPrimary">
                    {ch.title}
                  </h2>
                </div>

                {/* Main Chapter Content */}
                <p className="font-sans text-lg sm:text-xl text-textSecondary leading-relaxed">
                  {ch.content}
                </p>

                {/* Bullets (if any) */}
                {ch.bullets && ch.bullets.length > 0 && (
                  <ul className="space-y-3 pt-2">
                    {ch.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-3 font-sans text-base text-textSecondary">
                        <span className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Code Snippet (if any) */}
                {ch.codeSnippet && (
                  <div className="my-8 rounded-2xl border border-borderColor overflow-hidden bg-[#0D0D11] text-xs font-mono shadow-md">
                    <div className="bg-[#16161D] border-b border-white/10 px-5 py-3 text-textMuted flex justify-between">
                      <span>{ch.codeSnippet.filename}</span>
                      <span className="uppercase text-accent font-semibold">{ch.codeSnippet.language}</span>
                    </div>
                    <pre className="p-6 text-emerald-400 overflow-x-auto leading-relaxed">
                      <code>{ch.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}

                {/* Artifact Screenshots (if any) */}
                {ch.artifacts && ch.artifacts.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                    {ch.artifacts.map((art, idx) => (
                      <div key={idx} className="space-y-3">
                        <div className="relative w-full h-[280px] rounded-2xl overflow-hidden bg-surface border border-borderColor shadow-sm">
                          <Image
                            src={art.imageUrl}
                            alt={art.caption}
                            fill
                            sizes="(max-width: 768px) 100vw, 500px"
                            className="object-cover object-top"
                          />
                        </div>
                        <p className="font-mono text-xs text-textMuted text-center">
                          {art.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
