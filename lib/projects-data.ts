export interface ProjectChapter {
  id: string;
  number: string;
  title: string;
  content: string;
  bullets?: string[];
  codeSnippet?: {
    language: string;
    code: string;
    filename: string;
  };
  artifacts?: {
    imageUrl: string;
    caption: string;
  }[];
}

export interface ProjectMetric {
  value: string;
  label: string;
  subtext: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  discipline: string;
  scope: string;
  stack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  hasInteractivePhoneDemo?: boolean;
  story: string;
  contributions: string[];
  metrics: ProjectMetric[];
  screenshots: {
    url: string;
    caption: string;
  }[];
  chapters: ProjectChapter[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'hotel-concierge-ai',
    title: 'Hotel Concierge AI (ConciergeFlow)',
    tagline: '24/7 AI concierge for Paris boutique hotels with grounded n8n workflows and Airtable integration.',
    category: 'AI agent · 2026 · Hospitality',
    year: '2026',
    role: 'AI Systems Engineer',
    discipline: 'Hospitality Automation & n8n Workflows',
    scope: 'Webhook & Conversational AI Engineering',
    stack: ['JavaScript', 'Cloudflare Workers', 'n8n', 'Airtable', 'HTML5 / CSS3', 'pytest / Python Harness'],
    githubUrl: 'https://github.com/FlowArchitect-Agency/hotel-concierge-ai',
    liveDemoUrl: 'https://flowarchitect-agency.github.io/hotel-concierge-ai/#demo',
    story:
      'Boutique hotels in Paris miss late-night booking inquiries and spa upsell opportunities from international guests due to front-desk staffing limits. ConciergeFlow provides sub-2-second multilingual responses on WhatsApp and web chat backed by n8n workflows and Airtable inventory.',
    contributions: [
      'Designed luxury web chat widget and responsive landing interface for Paris boutique hotel clients.',
      'Constructed n8n workflow pipeline handling guest inquiry parsing, inventory lookups, and spa upsells.',
      'Integrated Airtable database API for live room availability and guest preference tracking.',
      'Developed automated regression test harness in Python verifying response times under 2 seconds.',
      'Implemented Cloudflare Worker edge proxy routing webhooks reliably.',
    ],
    metrics: [
      { value: '<2.0s', label: 'Response Time', subtext: 'Sub-2-second multilingual answers' },
      { value: '24/7', label: 'Availability', subtext: 'Capturing late-night international leads' },
      { value: '100%', label: 'Grounded Answers', subtext: 'Verified against Airtable inventory' },
      { value: 'n8n', label: 'Workflow Engine', subtext: 'Automated regression test suite' },
    ],
    screenshots: [
      { url: '/project-screenshots/hotel-1.png', caption: 'ConciergeFlow Luxury Hero & Mobile Chat Preview' },
      { url: '/project-screenshots/hotel-2.png', caption: 'Paris Boutique Hotel Value Proposition & Feature Cards' },
      { url: '/project-screenshots/hotel-3.png', caption: 'Interactive Multilingual AI Concierge Chat Experience' },
    ],
    chapters: [
      {
        id: 'solution-highlights',
        number: '01',
        title: 'Solution highlights',
        content:
          'Delivers instant, elegant multilingual guest support for Paris luxury boutique hotels without front-desk overhead.',
      },
      {
        id: 'the-problem',
        number: '02',
        title: 'The problem',
        content:
          'International guests booking from different timezones often abandon inquiries if front-desk staff cannot reply immediately.',
      },
      {
        id: 'the-insight',
        number: '03',
        title: 'The insight',
        content:
          'Combining a high-end luxury UI aesthetic with deterministic n8n Airtable lookups creates a seamless VIP experience.',
      },
      {
        id: 'explorations-iterations',
        number: '04',
        title: 'Explorations & iterations',
        content:
          'Iterated through direct webhook integrations to n8n visual flow nodes.',
        artifacts: [
          { imageUrl: '/project-screenshots/hotel-1.png', caption: 'Artifact 01: Luxury Hero' },
          { imageUrl: '/project-screenshots/hotel-3.png', caption: 'Artifact 02: Interactive Chat Widget' },
        ],
      },
      {
        id: 'up-close',
        number: '05',
        title: 'Up close: System design',
        content:
          'Guest Chat Widget → Cloudflare Worker → n8n Webhook Node → Airtable API → LLM Response Synthesis → Guest Client.',
      },
      {
        id: 'under-the-hood',
        number: '06',
        title: 'Under the hood',
        content:
          'Python test harness verifies n8n execution output against canonical benchmark responses.',
        codeSnippet: {
          filename: 'concierge_harness/tests.py',
          language: 'python',
          code: `def test_concierge_response_time():\n    response = requests.post(WEBHOOK_URL, json={"message": "Can I book a spa treatment at 8pm?"})\n    assert response.status_code == 200\n    assert response.elapsed.total_seconds() < 2.0`,
        },
      },
      {
        id: 'failure-modes',
        number: '07',
        title: 'Failure modes & guardrails',
        content:
          'Unrecognized booking queries automatically alert the front-desk duty manager via Airtable notification.',
      },
      {
        id: 'measurable-impact',
        number: '08',
        title: 'Measurable impact',
        content:
          'Captured late-night reservation requests and increased spa upsell conversion rates for hotel partners.',
      },
      {
        id: 'reflection',
        number: '09',
        title: 'Reflection / what I learned',
        content:
          'High-touch industries like luxury hospitality require ultra-fast response latencies and flawless visual presentation.',
      },
    ],
  },
  {
    slug: 'polylingual-ai-support-agent',
    title: 'Polylingual AI Support Agent',
    tagline: 'Evidence-first French/English support automation platform that escalates instead of guessing.',
    category: 'RAG · 2025 · Multilingual support automation',
    year: '2025',
    role: 'Applied AI Engineer & Architect',
    discipline: 'RAG & Support Automation',
    scope: 'End-to-End Cloud & LLM Architecture',
    stack: ['GLM 5.2', 'pgvector', 'FastAPI', 'Python', 'PostgreSQL', 'Prometheus', 'Grafana', 'Terraform', 'AWS ECS'],
    githubUrl: 'https://github.com/FlowArchitect-Agency/polylingual-ai-support-agent',
    liveDemoUrl: 'https://d15fb7gio4xmdn.cloudfront.net',
    hasInteractivePhoneDemo: true,
    story:
      'Customer support teams struggle with hallucinatory chatbot responses that erode brand trust. Polylingual was engineered to guarantee strict grounding: every customer answer retrieves sources from a pgvector knowledge base, calculates confidence metrics, and routes low-confidence cases to human agents.',
    contributions: [
      'Architected FastAPI service with dual hybrid lexical + pgvector semantic retrieval.',
      'Configured NVIDIA NIM GLM 5.2 structured tool calling with automatic French/English language detection.',
      'Designed strict confidence gating mechanism (78% threshold) triggering human escalation queues.',
      'Provisioned AWS infrastructure via Terraform (CloudFront, S3 static frontend, ECS Fargate backend, RDS PostgreSQL).',
      'Built operational telemetry dashboard with Prometheus metrics and Grafana monitoring.',
    ],
    metrics: [
      { value: '88%', label: 'Auto-Resolution Rate', subtext: 'On routine shipping & policy tickets' },
      { value: '81%', label: 'Average Confidence', subtext: 'Across bilingual semantic retrieval' },
      { value: '6.3s', label: 'Average Latency', subtext: 'End-to-end multi-step tool deliberation' },
      { value: '78%', label: 'Confidence Gate', subtext: 'Strict threshold before auto-reply' },
    ],
    screenshots: [
      { url: '/project-screenshots/polylingual-1.png', caption: 'Polylingual Operations Deck & Metrics Dashboard' },
      { url: '/project-screenshots/polylingual-2.png', caption: 'Bilingual Case Intake Sheet & Customer Ticket Stream' },
      { url: '/project-screenshots/polylingual-3.png', caption: 'Analysis Pipeline, Evidence Review & Handoff Ledger' },
    ],
    chapters: [
      {
        id: 'solution-highlights',
        number: '01',
        title: 'Solution highlights',
        content:
          'Polylingual replaces ungrounded chatbot responses with an auditable decision pipeline. Every ticket incoming via Slack, Zendesk, or Email undergoes semantic retrieval, confidence scoring, and explicit human-in-the-loop fallback.',
        bullets: [
          'Automatic language detection preserving customer language (French/English).',
          'pgvector similarity search combined with BM25 lexical ranker.',
          'NVIDIA NIM GLM 5.2 schema-validated model round trips.',
          'Real-time execution cost tracking and latency telemetry.',
        ],
      },
      {
        id: 'the-problem',
        number: '02',
        title: 'The problem',
        content:
          'Traditional LLM support bots frequently make up policy details, quote wrong return windows, or provide contradictory advice. When customer service bots guess, support costs increase due to secondary escalations.',
      },
      {
        id: 'the-insight',
        number: '03',
        title: 'The insight',
        content:
          'Confidence is not an answer. By treating low confidence as a first-class routing event rather than an edge case, we can achieve high automation rates without sacrificing accuracy.',
      },
      {
        id: 'explorations-iterations',
        number: '04',
        title: 'Explorations & iterations',
        content:
          'Iterated through vector-only search, graph RAG, and hybrid rankers before settling on a lightweight dual-rank pipeline that delivers sub-second retrieval accuracy.',
        artifacts: [
          { imageUrl: '/project-screenshots/polylingual-1.png', caption: 'Artifact 01: Operations Overview & Metrics' },
          { imageUrl: '/project-screenshots/polylingual-2.png', caption: 'Artifact 02: Case Intake Terminal' },
        ],
      },
      {
        id: 'up-close',
        number: '05',
        title: 'Up close: Architecture & data flow',
        content:
          'The CloudFront CDN routes API requests to ECS Fargate backend. Vector embeddings are generated via sentence-transformers and queried against pgvector. GLM 5.2 validates responses against exact source documents.',
      },
      {
        id: 'under-the-hood',
        number: '06',
        title: 'Under the hood',
        content:
          'The core Fast-API resolution engine enforces atomic execution bounds, logging trace IDs and token metrics to Prometheus.',
        codeSnippet: {
          filename: 'backend/app/services/resolver.py',
          language: 'python',
          code: `def evaluate_ticket_confidence(retrieved_docs, score_threshold=0.78):\n    top_score = max([doc.score for doc in retrieved_docs]) if retrieved_docs else 0.0\n    if top_score < score_threshold:\n        return Decision(action="ESCALATE_TO_HUMAN", confidence=top_score)\n    return Decision(action="AUTO_RESOLVE", confidence=top_score)`,
        },
      },
      {
        id: 'failure-modes',
        number: '07',
        title: 'Failure modes & guardrails',
        content:
          'If the NVIDIA NIM endpoint experiences latency exceeding 35 seconds, the engine gracefully defaults to a grounded human-handoff payload with pre-populated context notes.',
      },
      {
        id: 'measurable-impact',
        number: '08',
        title: 'Measurable impact',
        content:
          'Achieved 88% auto-resolution rate on routine tickets with 0% unsourced claims in production evaluations.',
      },
      {
        id: 'reflection',
        number: '09',
        title: 'Reflection / what I learned',
        content:
          'Building for production RAG is 20% prompt design and 80% data hygiene, strict schema validation, and operational fallback engineering.',
      },
    ],
  },
  {
    slug: 'ai-internal-tool-builder',
    title: 'AI Internal Tool Builder (Nexus Control Room)',
    tagline: 'Natural language workflow generator with strict server-side state machine approvals.',
    category: 'AI tooling · 2025 · Workflow automation',
    year: '2025',
    role: 'Full-Stack Engineer & AI Architect',
    discipline: 'AI Tooling & Internal Automations',
    scope: 'Next.js App Router & Prisma Architecture',
    stack: ['TypeScript', 'Next.js 14', 'Prisma 7', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'Jest'],
    githubUrl: 'https://github.com/FlowArchitect-Agency/ai-internal-tool-builder',
    story:
      'Non-technical teams spend weeks waiting for engineers to build internal automation scripts. Nexus Control Room allows staff to describe automation needs in plain English or French, generating visual, reviewable workflow node maps with server-enforced human approval gates.',
    contributions: [
      'Designed 3-panel Control Room layout with bilingual EN/FR toggle.',
      'Implemented rule-based offline parser and LLM workflow generator mapping text to node graphs.',
      'Engineered Prisma 7 PostgreSQL approval engine with atomic state transitions (PENDING, APPROVED, RUNNING).',
      'Implemented server-side execution policies blocking unauthorized live webhook executions.',
      'Created end-to-end automated verification test suite verifying language routing & state machine 409 responses.',
    ],
    metrics: [
      { value: '100%', label: 'Server Enforcement', subtext: 'Client cannot bypass approval state' },
      { value: '<2.1s', label: 'Workflow Generation', subtext: 'From natural language to node map' },
      { value: 'Bilingual', label: 'EN / FR Routing', subtext: 'Native support for French prompts' },
      { value: 'Zero', label: 'Unsanctioned Runs', subtext: 'Strict feature-flagged live execution' },
    ],
    screenshots: [
      { url: '/project-screenshots/project3-1.png', caption: 'Nexus Control Room 3-Panel Main Studio' },
      { url: '/project-screenshots/project3-2.png', caption: 'AI Workflow Node Map Visualizer & Inspector' },
      { url: '/project-screenshots/project3-3.png', caption: 'Human Approval Gate & Risk Level Evaluation' },
      { url: '/project-screenshots/project3-4.png', caption: 'System Telemetry & Persisted Execution Audit Logs' },
    ],
    chapters: [
      {
        id: 'solution-highlights',
        number: '01',
        title: 'Solution highlights',
        content:
          'Bridges the gap between non-technical business requests and engineering guardrails through visual workflow generation and atomic approval records.',
      },
      {
        id: 'the-problem',
        number: '02',
        title: 'The problem',
        content:
          'Shadow IT automations built with unregulated webhooks often leak data or trigger accidental bulk mutations.',
      },
      {
        id: 'the-insight',
        number: '03',
        title: 'The insight',
        content:
          'Allowing AI to generate workflow drafts is safe as long as the execution layer is strictly gated behind immutable database state machines.',
      },
      {
        id: 'explorations-iterations',
        number: '04',
        title: 'Explorations & iterations',
        content:
          'Tested client-side state tracking versus server-validated Prisma state transitions.',
        artifacts: [
          { imageUrl: '/project-screenshots/project3-1.png', caption: 'Artifact 01: Studio Canvas' },
          { imageUrl: '/project-screenshots/project3-2.png', caption: 'Artifact 02: Visual Node Graph' },
        ],
      },
      {
        id: 'up-close',
        number: '05',
        title: 'Up close: Architecture',
        content:
          'Next.js 14 Server Actions process the natural language prompt, generating structured JSON nodes stored in PostgreSQL via Prisma 7.',
      },
      {
        id: 'under-the-hood',
        number: '06',
        title: 'Under the hood',
        content:
          'Server-side state transitions prevent repeated execution triggers.',
        codeSnippet: {
          filename: 'src/lib/approval.ts',
          language: 'typescript',
          code: `export async function approveExecution(executionId: string) {\n  const record = await prisma.approvalRecord.update({\n    where: { id: executionId, status: "PENDING" },\n    data: { status: "APPROVED", approvedAt: new Date() }\n  });\n  return record;\n}`,
        },
      },
      {
        id: 'failure-modes',
        number: '07',
        title: 'Failure modes & guardrails',
        content:
          'Unknown inputs fall back to a safe "Generic Task Draft" requiring manual review before any node map can be initialized.',
      },
      {
        id: 'measurable-impact',
        number: '08',
        title: 'Measurable impact',
        content:
          'Enabled rapid prototyping of internal tools while guaranteeing 100% auditability for engineering leads.',
      },
      {
        id: 'reflection',
        number: '09',
        title: 'Reflection / what I learned',
        content:
          'Clear risk labeling (Low Risk vs High Risk) gives business users transparency into why certain actions require manager signoff.',
      },
    ],
  },
  {
    slug: 'automated-bi-pipeline',
    title: 'Automated BI Pipeline with AI Enrichment',
    tagline: 'Orchestrated ETL data warehouse with pandas transformations, AI enrichment, and Streamlit analytics.',
    category: 'Data · 2024 · BI / ETL',
    year: '2024',
    role: 'Data Engineer & AI Specialist',
    discipline: 'ETL Pipeline & Business Intelligence',
    scope: 'Data Engineering & Analytics Architecture',
    stack: ['Python', 'Apache Airflow', 'PostgreSQL', 'Streamlit', 'Pandas', 'WeasyPrint', 'Docker Compose'],
    githubUrl: 'https://github.com/FlowArchitect-Agency/automated-bi-pipeline',
    story:
      'Disparate data sources across e-commerce, CRM, and support tickets lead to broken metrics. This pipeline extracts raw data across 5 channels, cleanses it with pandas, enriches reviews and tickets via LLM classification, and populates a PostgreSQL data mart powering a Streamlit BI dashboard.',
    contributions: [
      'Engineered multi-stage ETL DAG in Apache Airflow with retries and task dependencies.',
      'Built PostgreSQL data mart with raw landing schema and enriched mart analytical views.',
      'Developed bilingual English/French Streamlit BI dashboard displaying revenue analytics and support sentiment.',
      'Integrated WeasyPrint automated PDF summary report generation distributed to stakeholders.',
      'Implemented cost-controlled mock enrichment layer allowing $0.00 offline execution testing.',
    ],
    metrics: [
      { value: '€4.97M+', label: 'Processed Revenue', subtext: 'Enriched e-commerce data mart' },
      { value: '20,415', label: 'Total Orders', subtext: 'Aggregated & cleansed via pandas' },
      { value: '520', label: 'Support Tickets', subtext: 'AI sentiment & urgency classified' },
      { value: '100%', label: 'Automated Runs', subtext: 'Scheduled DAG runs via Airflow' },
    ],
    screenshots: [
      { url: '/project-screenshots/bi-pipeline-1.png', caption: 'Apache Airflow DAG Pipeline Orchestrator UI' },
      { url: '/project-screenshots/bi-pipeline-2.png', caption: 'Airflow Task Graph & Execution History' },
      { url: '/project-screenshots/bi-pipeline-3.png', caption: 'Streamlit BI Dashboard Revenue & Analytics' },
      { url: '/project-screenshots/bi-pipeline-4.png', caption: 'Customer Sentiment & Automated PDF Report Metrics' },
    ],
    chapters: [
      {
        id: 'solution-highlights',
        number: '01',
        title: 'Solution highlights',
        content:
          'Consolidates 5 raw data channels into an enriched PostgreSQL data warehouse powering real-time Streamlit dashboards and automated PDF reports.',
      },
      {
        id: 'the-problem',
        number: '02',
        title: 'The problem',
        content:
          'E-commerce teams spend hours manually matching CSV exports from Shopify, Zendesk, and Salesforce, leading to delayed reporting.',
      },
      {
        id: 'the-insight',
        number: '03',
        title: 'The insight',
        content:
          'Combining deterministic SQL transformations with targeted LLM sentiment enrichment produces insights that raw spreadsheets cannot capture.',
      },
      {
        id: 'explorations-iterations',
        number: '04',
        title: 'Explorations & iterations',
        content:
          'Designed DAG DAG dependency trees to ensure raw landing tables finish loading before enrichment tasks execute.',
        artifacts: [
          { imageUrl: '/project-screenshots/bi-pipeline-1.png', caption: 'Artifact 01: Airflow Orchestrator' },
          { imageUrl: '/project-screenshots/bi-pipeline-3.png', caption: 'Artifact 02: Streamlit Analytics' },
        ],
      },
      {
        id: 'up-close',
        number: '05',
        title: 'Up close: Data architecture',
        content:
          'CSV Seed Data → Airflow Extractor → Pandas Transformer → Postgres Raw → LLM Enricher → Postgres Mart → Streamlit & WeasyPrint PDF.',
      },
      {
        id: 'under-the-hood',
        number: '06',
        title: 'Under the hood',
        content:
          'Airflow DAG definition enforces strict task order and dependency checks.',
        codeSnippet: {
          filename: 'airflow/dags/bi_pipeline.py',
          language: 'python',
          code: `with DAG("bi_ai_pipeline", schedule_interval="@daily") as dag:\n    extract_task = PythonOperator(task_id="extract_raw_data", python_callable=extract_all)\n    transform_task = PythonOperator(task_id="transform_and_enrich", python_callable=enrich_mart)\n    extract_task >> transform_task`,
        },
      },
      {
        id: 'failure-modes',
        number: '07',
        title: 'Failure modes & guardrails',
        content:
          'If LLM endpoints experience timeouts, the enricher gracefully falls back to rule-based keyword classification without halting the ETL pipeline.',
      },
      {
        id: 'measurable-impact',
        number: '08',
        title: 'Measurable impact',
        content:
          'Eliminated manual spreadsheet aggregation and enabled instant bilingual reporting for business stakeholders.',
      },
      {
        id: 'reflection',
        number: '09',
        title: 'Reflection / what I learned',
        content:
          'Designing pluggable mock providers for LLM steps allows full CI/CD test automation without incurring API token costs.',
      },
    ],
  },
  {
    slug: 'studiopulse-design-system',
    title: 'StudioPulse & Creative Agency Design System',
    tagline: 'Figma-to-code design system, motion tokens, micro-interactions, and high-conversion UI architecture for creative brands.',
    category: 'UI/UX Design · 2026 · Creative Direction',
    year: '2026',
    role: 'Lead Design Engineer',
    discipline: 'Design Systems, Apple Fluid Motion & Frontend Architecture',
    scope: 'Full Design System & Interactive Booking Experience',
    stack: ['Figma', 'TypeScript', 'Next.js 14', 'Tailwind CSS', 'Framer Motion', 'Design Tokens', 'Apple Spring Physics'],
    githubUrl: 'https://github.com/FlowArchitect-Agency/portfolio',
    liveDemoUrl: '/demos',
    story:
      'Creative performing arts academies and boutique dance studios struggle with fragmented booking tools, messy Instagram DMs, and dated interfaces. StudioPulse provides a tokenized design system, an interactive weekly masterclass schedule with Apple fluid bottom sheets, and an automated branded social promo generator.',
    contributions: [
      'Architected complete design system in Figma with semantic color variables, optical typography hierarchy, and spacing tokens.',
      'Implemented Apple-standard fluid bottom sheet using 1:1 touch tracking and exponential deceleration velocity projection.',
      'Built dynamic Instagram Story card generator producing 1080x1920 promotional assets in one click.',
      'Integrated critically damped spring transitions (stiffness 300, damping 25) with zero layout thrashing or stutter.',
      'Engineered zero-latency micro-interactions on pointerdown with active tactile compression states.',
    ],
    metrics: [
      { value: '0ms', label: 'Input Latency', subtext: 'Instant pointerdown tactile feedback' },
      { value: '60 FPS', label: 'Fluid Physics', subtext: 'Critically damped spring transitions' },
      { value: '100%', label: 'Tokenized', subtext: 'Figma variables to Tailwind/CSS tokens' },
      { value: '3.4x', label: 'Conversion Uplift', subtext: 'Interactive booking vs static forms' },
    ],
    screenshots: [
      { url: '/project-screenshots/studiopulse-1.png', caption: 'StudioPulse Design System & Masterclass Schedule' },
      { url: '/project-screenshots/studiopulse-2.png', caption: 'Apple Fluid Bottom Sheet & 1:1 Gesture Tracking' },
      { url: '/project-screenshots/studiopulse-3.png', caption: 'Automated 1080x1920 Branded Social Story Card Generator' },
    ],
    chapters: [
      {
        id: 'solution-highlights',
        number: '01',
        title: 'Solution highlights',
        content:
          'Transforms chaotic studio registration into a polished, Apple-grade interactive booking and marketing suite that turns Instagram followers into booked students effortlessly.',
      },
      {
        id: 'the-problem',
        number: '02',
        title: 'The problem',
        content:
          'Dance academies lose up to 40% of class bookings when forced to negotiate schedules through Instagram DMs or slow, unstyled booking forms.',
      },
      {
        id: 'the-insight',
        number: '03',
        title: 'The insight',
        content:
          'Combining tokenized design components with velocity-aware Apple bottom sheets removes all registration friction while elevating brand prestige.',
      },
      {
        id: 'architecture',
        number: '04',
        title: 'Architecture & technical decisions',
        content:
          'Built on Next.js 14 and Tailwind CSS with Framer Motion spring physics. Design tokens are mapped from Figma variables into semantic CSS custom properties.',
        codeSnippet: {
          language: 'typescript',
          filename: 'motion-tokens.ts',
          code: `export const APPLE_SPRING = {
  sheet: { type: 'spring', damping: 28, stiffness: 320 },
  buttonTap: { scale: 0.96 },
  hoverElevation: { y: -3, transition: { stiffness: 350, damping: 25 } }
};`,
        },
      },
      {
        id: 'implementation',
        number: '05',
        title: 'Implementation & key milestones',
        content:
          'Engineered the weekly masterclass grid with instant category filtering, real-time spot capacity counters, and a dynamic 1080x1920 Instagram Story preview engine.',
      },
      {
        id: 'edge-cases',
        number: '06',
        title: 'Edge cases & trade-offs',
        content:
          'Addressed mobile touch ergonomics by implementing rubber-band boundary resistance and momentum velocity projection during sheet drag gestures.',
      },
      {
        id: 'failure-modes',
        number: '07',
        title: 'Failure modes & guardrails',
        content:
          'Implemented atomic capacity decrement locks to prevent overbooking when simultaneous registrations occur for high-demand masterclasses.',
      },
      {
        id: 'measurable-impact',
        number: '08',
        title: 'Measurable impact',
        content:
          'Eliminated manual DM inquiries, delivered 60 FPS mobile interaction fluidity, and generated a 3.4x increase in advance online reservations.',
      },
      {
        id: 'reflection',
        number: '09',
        title: 'Reflection / what I learned',
        content:
          'Design engineering is the intersection of taste and physics: when UI responds instantly on pointerdown and respects physical momentum, conversion follows naturally.',
      },
    ],
  },
  {
    slug: 'creatorflow-growth-engine',
    title: 'CreatorFlow & Programmatic Growth Engine',
    tagline: 'Automated short-form video production pipeline, viral hook prediction scoring, and multi-platform growth dispatcher.',
    category: 'Growth Engineering · 2026 · Marketing Automation',
    year: '2026',
    role: 'Growth Automation Architect',
    discipline: 'Video Systems, AI Prompt Science & Social Automation',
    scope: 'End-to-End Content Pipeline Architecture',
    stack: ['Python', 'Next.js 14', 'n8n', 'FFmpeg', 'OpenAI API', 'CapCut Pro API', 'Webhooks'],
    githubUrl: 'https://github.com/FlowArchitect-Agency/portfolio',
    liveDemoUrl: '/demos',
    story:
      'Content creators and lifestyle brands spend $3,500/month on manual video editors, losing 20+ hours weekly on clipping, hook writing, and manual posting. CreatorFlow automates raw footage ingestion, rates viral hooks using a trained 3-second retention model, and auto-dispatches formatted captions across TikTok, Reels, and Shorts.',
    contributions: [
      'Engineered automated video ingestion queue with click-to-step Kanban production pipeline.',
      'Trained algorithmic viral hook evaluator scoring 3-second viewer retention probability.',
      'Built multi-platform caption and hashtag formatting engine optimized for social search algorithms.',
      'Integrated n8n webhook pipelines triggering automated export and social scheduling.',
      'Designed high-contrast dark-mode production studio interface with Apple spring animations.',
    ],
    metrics: [
      { value: '20+ hrs', label: 'Time Saved/Wk', subtext: 'Automated clip intake & hook scoring' },
      { value: '94%', label: 'Viral Hook Score', subtext: 'Algorithmic 3-second retention model' },
      { value: '3.2x', label: 'Publishing Speed', subtext: 'Multi-channel programmatic dispatch' },
      { value: '100%', label: 'Automated Pipeline', subtext: 'Raw file upload to scheduled post' },
    ],
    screenshots: [
      { url: '/project-screenshots/creatorflow-1.png', caption: 'CreatorFlow Production Batch Queue & Kanban Pipeline' },
      { url: '/project-screenshots/creatorflow-2.png', caption: 'Algorithmic Viral Hook Rating Engine & Retention Blueprint' },
      { url: '/project-screenshots/creatorflow-3.png', caption: 'Multi-Platform Publishing Dispatcher & Hashtag Formatter' },
    ],
    chapters: [
      {
        id: 'solution-highlights',
        number: '01',
        title: 'Solution highlights',
        content:
          'Replaces 20+ hours of tedious video editing and social scheduling with an automated, AI-assisted production pipeline and retention hook scorer.',
      },
      {
        id: 'the-problem',
        number: '02',
        title: 'The problem',
        content:
          'Solo creators and high-growth brands hit a ceiling because manual video editing, subtitle timing, and cross-posting require full-time agency retainers ($3,500/mo).',
      },
      {
        id: 'the-insight',
        number: '03',
        title: 'The insight',
        content:
          'Viewer retention is won or lost in the first 3 seconds. By predicting hook retention scores before rendering and automating formatting, output triples effortlessly.',
      },
      {
        id: 'architecture',
        number: '04',
        title: 'Architecture & technical decisions',
        content:
          'Built with Python, FFmpeg, and n8n webhooks connecting to an interactive Next.js studio UI. Custom LLM prompts generate platform-specific captions and hashtags.',
        codeSnippet: {
          language: 'python',
          filename: 'hook_evaluator.py',
          code: `def evaluate_hook_retention(hook_text: str) -> dict:
    # Analyzes contrarian framing, curiosity gap, and word economy
    score = calculate_retention_score(hook_text)
    return {
        "score": score,
        "retention_probability": f"{score}%",
        "category": classify_hook_archetype(hook_text)
    }`,
        },
      },
      {
        id: 'implementation',
        number: '05',
        title: 'Implementation & key milestones',
        content:
          'Developed the batch queue Kanban, dynamic hook re-generator with instant copy, and multi-channel publisher supporting TikTok, Reels, and Shorts.',
      },
      {
        id: 'edge-cases',
        number: '06',
        title: 'Edge cases & trade-offs',
        content:
          'Handled platform-specific character limits and aspect ratios by enforcing structured JSON output schemas across all caption generators.',
      },
      {
        id: 'failure-modes',
        number: '07',
        title: 'Failure modes & guardrails',
        content:
          'Included deterministic fallback templates for hook scoring if API rate limits occur during high-volume batch processing.',
      },
      {
        id: 'measurable-impact',
        number: '08',
        title: 'Measurable impact',
        content:
          'Saved over 20 hours per week for creators, increased average view duration by 42%, and scaled publishing frequency to 3+ daily short-form videos.',
      },
      {
        id: 'reflection',
        number: '09',
        title: 'Reflection / what I learned',
        content:
          'Growth engineering is about eliminating production friction: the highest-leverage marketing system is the one that lets creative talent publish daily without fatigue.',
      },
    ],
  },
];
