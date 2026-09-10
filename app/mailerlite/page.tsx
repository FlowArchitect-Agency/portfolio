'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowLeft, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Compass, 
  Smile, 
  CheckCircle2, 
  ExternalLink,
  Video,
  FileText
} from 'lucide-react';

export default function MailerLiteApplicationPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#111827] font-sans antialiased selection:bg-[#09C269] selection:text-white">
      {/* Top Banner */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-[#09C269] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#E8F8F0] text-[#09C269] border border-[#09C269]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#09C269] animate-pulse"></span>
              Application for MailerLite
            </span>
            <a 
              href="/Mehdi_Mechkak_AI_Engineer_CV.pdf"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-900 border border-gray-200 px-3 py-1 rounded-md"
            >
              <FileText className="w-3.5 h-3.5" />
              CV PDF
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold tracking-wide uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#09C269]" />
          Technical Product Manager Candidate
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-950 mb-6 leading-[1.15]">
          Hey MailerLite! 👋 <br />
          I’m <span className="text-[#09C269]">Mohamed Mehdi Mechkak</span>.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed mb-8">
          Applied AI Systems Engineer & Product Builder based in Paris, France. I combine a rigorous engineering background 
          with hands-on platform architecture, deterministic data pipelines, and high-velocity product execution. 
          Here is my official interactive application.
        </p>

        {/* Video Response Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-700/50 mb-16">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#09C269] uppercase mb-1">
                <Video className="w-4 h-4" />
                Video Response (3 Minutes)
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">Why Do I Want to Work at MailerLite?</h2>
              <p className="text-sm text-gray-400 mt-1">
                A focused walkthrough of async culture, product simplicity, and scaling internal tools.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              2.5 Min Recording
            </div>
          </div>

          <div className="aspect-video w-full max-w-3xl mx-auto rounded-xl bg-gray-950/80 border border-gray-700/60 flex flex-col items-center justify-center p-6 text-center group relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-[#09C269]/20 border border-[#09C269] flex items-center justify-center text-[#09C269] mb-4 group-hover:scale-110 transition-transform">
              <Video className="w-7 h-7" />
            </div>
            <h3 className="text-base font-semibold text-white mb-1">Video Submission Clip</h3>
            <p className="text-xs text-gray-400 max-w-md mb-4">
              Recorded personal introduction and motivations for joining MailerLite's async-first, globally distributed product team.
            </p>
            <a 
              href="https://portfolio-rosy-eight-z37jrxmph2.vercel.app/demos" 
              target="_blank" 
              className="inline-flex items-center gap-2 bg-[#09C269] hover:bg-[#08a85b] text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-md transition-colors"
            >
              Watch Video Walkthrough & Interactive Demos
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* The 6 Questions Section */}
        <div className="space-y-12">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              The 6 Core Discovery & Product Questions
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              My honest, structured answers reflecting real production experience.
            </p>
          </div>

          {/* Question 1 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:border-[#09C269]/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#09C269] flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                You're asked to prioritize between three high-impact features, but you can only ship one in the next release. How do you make a decision?
              </h3>
            </div>
            <div className="prose prose-sm text-gray-600 leading-relaxed space-y-3">
              <p>
                When three features all boast high impact, conventional intuition fails. I apply a systematic, multi-dimensional triage framework based on <strong>Cost of Delay</strong>, <strong>Reversibility</strong>, and <strong>Platform Leverage</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>1. Quantitative Risk vs. Revenue Leverage:</strong> Does one of the three features protect existing customer retention or unblock a deliverability/compliance vulnerability? In SaaS platforms like MailerLite, protecting core inbox delivery or anti-abuse trust always supersedes vanity top-of-funnel features.
                </li>
                <li>
                  <strong>2. Two-Way vs. One-Way Door Assessment:</strong> I determine which features can be quickly tested and reversed (two-way door) versus foundational architectural changes requiring permanent commitments (one-way door). If an experiment can validate a high-impact hypothesis in a 1-week rollout, it earns immediate velocity.
                </li>
                <li>
                  <strong>3. Unblocking Downstream Teams:</strong> As a Technical Product Manager, my main customers are developers and internal teams. If Feature A acts as a shared foundation that unlocks 3 subsequent capabilities for product squads, its multiplier effect outweighs standalone single-purpose features.
                </li>
              </ul>
              <div className="p-3 bg-gray-50 rounded-lg text-xs text-gray-500 border border-gray-100 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#09C269] shrink-0" />
                <span>Decision rule: Foundation & customer trust first, multiplier leverage second, standalone polish third.</span>
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:border-[#09C269]/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#09C269] flex items-center justify-center font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Do you have experience working with trust & safety, fraud, or abuse prevention? If so, what was your part in it?
              </h3>
            </div>
            <div className="prose prose-sm text-gray-600 leading-relaxed space-y-3">
              <p>
                <strong>Yes, absolutely.</strong> In autonomous webhook integrations, data pipelines, and AI systems, abuse prevention is essential for uptime and deliverability:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>Edge Rate-Limiting & Payload Sanitation:</strong> On Cloudflare Worker edge proxies, implemented IP sliding-window rate limiters and HMAC signature verification to stop bot spam and brute-force payload floods before they reached internal databases.
                </li>
                <li>
                  <strong>Deterministic RAG Guardrails:</strong> Architected a 78% confidence threshold gating mechanism on the PolyLingual AI Support Platform. When vector similarity or BM25 lexical confidence dips below the boundary, the model is strictly blocked from synthesizing an ungrounded answer, achieving a verified 0% policy fabrication rate.
                </li>
                <li>
                  <strong>Server-Side State Machine Approval Gates:</strong> On Nexus Control Room, built immutable Prisma 7 PostgreSQL approval transactions (`PENDING &rarr; APPROVED &rarr; RUNNING`), ensuring no live webhook or automation action could be triggered without authorized human-in-the-loop review.
                </li>
              </ul>
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:border-[#09C269]/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#09C269] flex items-center justify-center font-bold text-sm">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                How do you use AI in your own product work today? Name the tools and what you actually use them for.
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="font-semibold text-gray-900 text-sm mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  Claude 3.5 Sonnet & OpenAI GPT-4o
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Used for drafting PRDs, synthesizing unstructured customer transcripts into structured JSON problem matrices, and generating synthetic regression test datasets.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="font-semibold text-gray-900 text-sm mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Cursor & GitHub Copilot
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Fast prototyping and architectural validation spikes. Translating API specifications into typed TypeScript schemas and Python integration tests in minutes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="font-semibold text-gray-900 text-sm mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  n8n & Make.com Automation
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Connecting customer feedback loops directly to engineering tickets, automating daily sentiment classification, and dispatching alerts for anomalous error spikes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="font-semibold text-gray-900 text-sm mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  Whisper & FFmpeg Pipelines
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Transcribing customer interviews and support escalation recordings, surfacing recurring friction timestamps, and generating bite-sized video bug reproductions.
                </p>
              </div>
            </div>
          </div>

          {/* Question 4 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:border-[#09C269]/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#09C269] flex items-center justify-center font-bold text-sm">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Do you have experience working with a platform team, infrastructure team or internal technical team? If so, how much were you involved?
              </h3>
            </div>
            <div className="prose prose-sm text-gray-600 leading-relaxed space-y-3">
              <p>
                <strong>Extensively and deeply.</strong> My background is rooted in Engineering in Paris, where I specialized in numerical simulations, mass balance, and control loop dynamics—principles I transitioned directly into software platform infrastructure:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>Shared Developer Foundations:</strong> Built containerized local development stacks with Docker Compose, standardizing PostgreSQL with pgvector, FastAPI, and Next.js environments so new developers can spin up a fully isolated testing replica with a single command.
                </li>
                <li>
                  <strong>ETL & Data Platform:</strong> Engineered Apache Airflow multi-source DAGs pulling from multiple analytics and database channels into centralized data marts, establishing unified metrics definitions used across growth, support, and engineering.
                </li>
                <li>
                  <strong>Serving Internal Engineers:</strong> As a technical PM, I view internal engineers as primary stakeholders. I write deterministic API contracts, define schema boundaries with Pydantic/Zod, and create runbooks that minimize cross-team coordination overhead.
                </li>
              </ul>
            </div>
          </div>

          {/* Question 5 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:border-[#09C269]/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#09C269] flex items-center justify-center font-bold text-sm">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Tell us about your product discovery experience - what does your process look like, and how do you ensure you are building for the right audience?
              </h3>
            </div>
            <div className="prose prose-sm text-gray-600 leading-relaxed space-y-3">
              <p>
                My discovery process prioritizes <strong>observing real behavior</strong> over listening to speculative feature requests:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="font-bold text-xs text-gray-900 mb-1">1. Quantitative Signals</div>
                  <p className="text-xs text-gray-500">Auditing funnel conversion drops, tracking drop-offs in onboarding steps, and analyzing error telemetry.</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="font-bold text-xs text-gray-900 mb-1">2. Qualitative Empathy</div>
                  <p className="text-xs text-gray-500">Targeted 15-minute interviews asking how users solved the problem *last week* (focusing on actual past behavior).</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="font-bold text-xs text-gray-900 mb-1">3. Smoke Tests & Spikes</div>
                  <p className="text-xs text-gray-500">Validating appetite with micro-prototypes or fake-door CTA triggers before writing weeks of production code.</p>
                </div>
              </div>
              <p>
                This ensures engineering cycles are only invested in features that solve validated, recurring pain points for high-retention cohorts.
              </p>
            </div>
          </div>

          {/* Question 6 */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:border-[#09C269]/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#09C269] flex items-center justify-center font-bold text-sm">
                <Smile className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Feel free to share something that sparks joy in your life. ✨
              </h3>
            </div>
            <div className="prose prose-sm text-gray-600 leading-relaxed space-y-3">
              <p>
                Three distinct things reliably bring me immense joy:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  🎾 <strong>High-Intensity Tennis Rallies:</strong> Running down an impossible shot on red clay and executing a clean down-the-line winner. It requires total focus, instant spatial adaptation, and resets the mind completely.
                </li>
                <li>
                  ☕ <strong>Early Morning Architecture Sessions in Paris:</strong> Sitting down at 7:00 AM with a fresh espresso and sketching clean system architecture diagrams before Slack or emails wake up.
                </li>
                <li>
                  ⚡ <strong>The Magic of Zero-Toil Automation:</strong> Taking an exhausting, error-prone manual task that used to steal 20 hours a week from a team, replacing it with an autonomous, elegant pipeline, and watching it run in 3 seconds. That feeling never gets old.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gray-50 border border-gray-200 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Build the Future of MailerLite</h3>
          <p className="text-sm text-gray-600 max-w-lg mx-auto mb-6">
            Thank you for reviewing this application. Let’s connect and talk about how we can empower small businesses and creators globally.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a 
              href="mailto:mehdimechkak2025@gmail.com"
              className="bg-[#09C269] hover:bg-[#08a85b] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Email: mehdimechkak2025@gmail.com
            </a>
            <a 
              href="https://linkedin.com/in/mehdi-mechkak"
              target="_blank"
              className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              LinkedIn Profile
            </a>
            <a 
              href="/"
              className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Main Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
