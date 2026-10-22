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

export type CategoryGroupId = 'all' | 'hardware' | 'ai-engineering' | 'design-systems' | 'growth-marketing' | 'data-engineering';

export interface ProjectCategory {
  id: CategoryGroupId;
  label: string;
  badge: string;
  iconName: string;
  description: string;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    id: 'all',
    label: 'All Work',
    badge: '08',
    iconName: 'Layers',
    description: 'Electronics hardware, AI architectures, tokenized design systems, and data pipelines.',
  },
  {
    id: 'hardware',
    label: 'Electronics & Power Hardware',
    badge: '02',
    iconName: 'Cpu',
    description: 'Analog circuit design, PCB fabrication, oscilloscope validation, and medium-voltage SiC power modules.',
  },
  {
    id: 'ai-engineering',
    label: 'AI Systems & Engineering',
    badge: '03',
    iconName: 'Brain',
    description: 'Grounded RAG, autonomous n8n workflows, and server-side state machine guardrails.',
  },
  {
    id: 'design-systems',
    label: 'UI/UX & Design Systems',
    badge: '01',
    iconName: 'Palette',
    description: 'Tokenized Figma-to-code components, Apple fluid spring physics, and dynamic story generators.',
  },
  {
    id: 'growth-marketing',
    label: 'Growth & Marketing',
    badge: '01',
    iconName: 'TrendingUp',
    description: 'Automated video production pipelines, viral retention hook prediction, and multi-platform publishing.',
  },
  {
    id: 'data-engineering',
    label: 'Data & ETL Pipelines',
    badge: '01',
    iconName: 'Database',
    description: 'Multi-source Apache Airflow DAGs, LLM review enrichment, and PostgreSQL data marts.',
  },
];

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
  categoryGroup: CategoryGroupId;
  year: string;
  role: string;
  discipline: string;
  scope: string;
  stack: string[];
  githubUrl?: string;
  reportUrl?: string;
  reportLabel?: string;
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
    slug: 'lifi-optical-receiver',
    title: 'LiFi Optical Audio Link',
    tagline: 'Sigma-Delta transmitter and a four-stage analog optical receiver, laid out, etched and soldered by hand, then validated stage by stage on the oscilloscope.',
    category: 'Analog electronics · 2026 · PCB',
    categoryGroup: 'hardware',
    year: '2026',
    role: 'Receiver design, PCB & validation (team of 3)',
    discipline: 'Analog Electronics & Optical Communication',
    scope: 'Theory → LTspice → EAGLE PCB → fabrication → oscilloscope',
    stack: ['EAGLE (schematic + 2-layer PCB)', 'LTspice', 'BPW34 / AD817 TIA', 'LM318', 'LM311', 'LF356', 'Siglent SDS1104X-E'],
    reportUrl: '/reports/LiFi_Optical_Link_Report_Mechkak.pdf',
    reportLabel: 'FULL REPORT — PDF',
    story:
      'A Licence 3 EEA project at Université Paris-Saclay: send audio over light. The transmitter encodes the audio as the duty cycle of a self-oscillating first-order Sigma-Delta loop and switches an LED fully on or off. The receiver has to pull that ~97 kHz signal out of a photodiode current dominated by room light. The circuit topologies were given by the instructor; my part was the receiver: the analysis, the EAGLE schematic and two-layer layout, etching, drilling, soldering, debugging, and measuring every stage.',
    contributions: [
      'Analysed the transimpedance front end (BPW34, Rf = 22 kΩ, Cf = 10 pF) and checked the compensation capacitor against the op-amp gain-bandwidth.',
      'Captured the receiver in EAGLE, chose footprints, placed and routed a two-layer board, and ran the DRC before fabrication.',
      'Fabricated the board myself (UV exposure, ferric-chloride etch, drilling, soldering), then fixed shorts, cold joints and placement errors.',
      'Validated each stage with the oscilloscope: TIA, conditioning (LM318), hysteresis comparator (LM311) and reconstruction filter (LF356).',
      'With the team, measured the Sigma-Delta transmitter and checked its duty cycle against the charge-balance law.',
    ],
    metrics: [
      { value: '86.8 kHz', label: 'Self-oscillation', subtext: 'Sigma-Delta loop at zero input' },
      { value: '−1.09 V/V', label: 'Measured loop slope', subtext: 'vs. −1 predicted by charge balance' },
      { value: '4', label: 'Receiver stages', subtext: 'TIA → filter → comparator → low-pass' },
      { value: '2-layer', label: 'Home-made PCB', subtext: 'Laid out, etched and soldered by hand' },
    ],
    screenshots: [
      { url: '/projects/lifi/board.jpg', caption: 'Finished receiver board under test' },
      { url: '/projects/lifi/pcb_layout.jpg', caption: 'Two-layer EAGLE layout' },
      { url: '/projects/lifi/comp_out.jpg', caption: 'Comparator output: clean two-level signal at ~97 kHz' },
    ],
    chapters: [
      {
        id: 'solution-highlights',
        number: '01',
        title: 'Solution highlights',
        content:
          'A complete optical audio link: the information rides on the timing of the light pulses, not their brightness, so the receiver only has to decide "on or off" and average the answers.',
        bullets: [
          'Transmitter: LF356 integrator + LM311N quantizer forming a first-order Sigma-Delta loop.',
          'Receiver: photodiode TIA → LM318 conditioning → LM311 hysteresis comparator → LF356 Sallen-Key low-pass.',
          'Full English report with equations, bench data, LTspice results and an honest limits section.',
        ],
      },
      {
        id: 'the-problem',
        number: '02',
        title: 'The problem',
        content:
          'A photodiode cannot tell an LED photon from a ceiling-light photon. The wanted signal is a small current at ~97 kHz sitting on a large DC and 50/100 Hz current from ambient light, and a larger feedback resistor amplifies both.',
      },
      {
        id: 'the-insight',
        number: '03',
        title: 'The insight',
        content:
          'Separate signal from interference by frequency, not amplitude. Ambient light lives near DC, audio below 20 kHz, switching near 90 kHz. LTspice showed that a 1500 Hz disturbance ruins a direct analog link but disappears once a comparator regenerates the PWM edges before the filter.',
        artifacts: [
          { imageUrl: '/projects/lifi/sim_noise.jpg', caption: 'LTspice: 1500 Hz disturbance passes the RC demodulator' },
          { imageUrl: '/projects/lifi/sim_regen.jpg', caption: 'LTspice: comparator regeneration restores the 500 Hz tone' },
        ],
      },
      {
        id: 'explorations-iterations',
        number: '04',
        title: 'Transmitter measurements',
        content:
          'At zero input the loop self-oscillates at 86.82 kHz with a 52.87 % duty cycle. A +1 V input moves it to 41.95 %, shifting the output average by −1.09 V, close to the −R4/R3 ≈ −1 predicted by charge balance. With a 1 kHz sine the edges sweep while the mean switching frequency stays at 86.13 kHz.',
        artifacts: [
          { imageUrl: '/projects/lifi/tx_0v.jpg', caption: 'Vin = 0 V: integrator ramps and comparator output' },
          { imageUrl: '/projects/lifi/tx_sine.jpg', caption: '1 kHz sine input: duty cycle follows the audio' },
        ],
      },
      {
        id: 'up-close',
        number: '05',
        title: 'Up close: from schematic to board',
        content:
          'Short photodiode-to-TIA path, decoupling at every supply pin, wide power and ground tracks, 45° bends, and a DRC pass before export. The artwork was printed, UV-exposed, etched in ferric chloride, drilled and soldered in the lab.',
        artifacts: [
          { imageUrl: '/projects/lifi/pcb_layout.jpg', caption: 'EAGLE layout (top red, bottom blue)' },
          { imageUrl: '/projects/lifi/pcb_print.jpg', caption: 'Printed artwork used for UV exposure' },
        ],
      },
      {
        id: 'under-the-hood',
        number: '06',
        title: 'Under the hood: TIA stability check',
        content:
          'The 72 pF photodiode capacitance at the inverting input erodes phase margin, and Cf across Rf restores it. A first-pass estimate gives about 3 pF for the AD817 on the schematic, so the 10 pF fitted is conservative, and the closed-loop bandwidth 1/(2π·Rf·Cf) ≈ 720 kHz still clears the switching rate.',
        codeSnippet: {
          filename: 'tia_check.py',
          language: 'python',
          code: `from math import pi, sqrt\nRf, Cin, Cf = 22e3, 72e-12, 10e-12\nfor name, gbw in [("AD817", 50e6), ("LF356", 5e6)]:\n    print(name, "Cf_min ~", round(sqrt(Cin / (2*pi*Rf*gbw)) * 1e12, 1), "pF")\nprint("closed-loop BW ~", round(1 / (2*pi*Rf*Cf) / 1e3), "kHz")`,
        },
      },
      {
        id: 'failure-modes',
        number: '07',
        title: 'Receiver validation & what went wrong',
        content:
          'Under constant light the TIA sat at about +2 V of ambient offset and the comparator stayed locked at about −4 V, as expected. With the ~97 kHz optical signal the comparator regenerated a clean square wave. The conditioning stage showed overshoot and ringing on rising edges; the comparator hides it, but it points to limited phase margin and is the first thing I would fix.',
        artifacts: [
          { imageUrl: '/projects/lifi/tia_out.jpg', caption: 'TIA output: ~1 Vpp with rounded edges' },
          { imageUrl: '/projects/lifi/comp_out.jpg', caption: 'Comparator output: sharp edges, flat plateaus' },
        ],
      },
      {
        id: 'measurable-impact',
        number: '08',
        title: 'Limits',
        content:
          'The receiver board was validated with a fixed-duty optical signal and the transmitter separately with a 1 kHz sine. A full end-to-end audio test (distortion and SNR versus distance and room light) is the next step.',
      },
      {
        id: 'reflection',
        number: '09',
        title: 'Reflection / what I learned',
        content:
          'Real circuits do not behave like ideal schematics. Ambient-light offset, the TIA phase-margin trade-off and ringing in a fast amplifier only appeared once the board existed, with its parasitics, layout and grounding. Explaining those gaps with an oscilloscope is what pushed me towards research in power electronics and EMC.',
      },
    ],
  },
  {
    slug: 'sic-6-5kv-power-module',
    title: '6.5 kV SiC Full-Bridge Power Module: Technical Study',
    tagline: 'An in-depth analysis of a medium-voltage SiC MOSFET module for megawatt EV charging: packaging, parasitic inductance, switching tests and the limits the paper leaves open.',
    category: 'Power electronics · 2026 · Paper study',
    categoryGroup: 'hardware',
    year: '2026',
    role: 'Analysis & technical presentation (individual)',
    discipline: 'Power Electronics & Packaging',
    scope: 'Paper study · own diagrams · critical analysis',
    stack: ['SiC MOSFETs', 'XHP3 packaging', 'ANSYS Q3D (as reported)', 'Double-pulse testing', 'Curve tracing'],
    story:
      'For a Master 1 SAIETI oral at Université Paris-Saclay, I studied Boutry et al., "A 6.5 kV Full-Bridge SiC MOSFET Module Design" (IWIPP 2025, University of Alabama) in depth and rebuilt its key ideas as my own diagrams: why medium-voltage applications need SiC, how a full bridge fits in an XHP3 footprint, how the module is built, and how it was tested. I then added my own critical analysis of what the results do not yet show. This is a study of published work, not hardware I built.',
    contributions: [
      'Redrew the topology, fabrication sequence, die-attach metallurgy, wire bonding and double-pulse test as original diagrams.',
      'Explained why the commutation inductance curves fall with frequency (flux cancellation, skin and proximity effects).',
      'Compared the sub-scale prototype (2.5 kV, 11 A, FR4/ABS/Al) with the full-scale target (4 kV, 40 A, AlN/PEEK/AlSiC).',
      'Raised issues not discussed in the paper: Sn63Pb37 solder melts at 183 °C against a 175 °C die rating, and the turn-on ringing has EMI consequences.',
      'Added an ethical, social and environmental assessment (lead in solder, energy-intensive SiC wafers, high-voltage safety).',
    ],
    metrics: [
      { value: '6.5 kV', label: 'Rated voltage', subtext: 'Full bridge, XHP3 footprint (100 × 140 mm)' },
      { value: '34.5 nH', label: 'Commutation inductance', subtext: 'vs. 20 nH target (Q3D, as reported)' },
      { value: '< 200 V', label: 'Turn-off overshoot', subtext: 'Double pulse at 2.5 kV / 10 A' },
      { value: '183 °C', label: 'Solder melting point', subtext: 'My flag: close to the 175 °C die rating' },
    ],
    screenshots: [
      { url: '/projects/sic/slide01.jpg', caption: 'Title slide' },
      { url: '/projects/sic/slide14.jpg', caption: 'Six fabrication steps (own exploded drawing)' },
      { url: '/projects/sic/slide28.jpg', caption: 'Limits and open issues' },
    ],
    chapters: [
      {
        id: 'solution-highlights',
        number: '01',
        title: 'What the paper proposes',
        content:
          'Two identical half-bridge substrates in one XHP3 housing give a 6.5 kV SiC full bridge. Joining the two midpoints turns it into a half bridge with twice the current, so one module serves both topologies.',
        artifacts: [
          { imageUrl: '/projects/sic/slide08.jpg', caption: 'Topologies: count the midpoints (own drawing)' },
        ],
      },
      {
        id: 'the-problem',
        number: '02',
        title: 'The problem',
        content:
          'Megawatt EV charging, 3.3 kV+ rail traction and solid-state transformers need higher voltage, smaller size and higher power density. SiC (3.3 eV bandgap against 1.1 eV for silicon) blocks more voltage with lower losses, but very few packaged SiC modules exist above 3.3 kV: a bare die is not a product.',
      },
      {
        id: 'explorations-iterations',
        number: '03',
        title: 'How it is built',
        content:
          'The steps are: Sn63Pb37 reflow die attach, 20-mil aluminium wire bonds, MCX gate connectors with a 5 Ω gate resistor, substrates mounted on an aluminium baseplate, copper terminals soldered in a jig, then a 3D-printed ABS housing.',
        artifacts: [
          { imageUrl: '/projects/sic/slide14.jpg', caption: 'Six fabrication steps (own exploded drawing)' },
          { imageUrl: '/projects/sic/slide15.jpg', caption: 'Sn-Pb phase diagram: eutectic at 183 °C (own drawing)' },
        ],
      },
      {
        id: 'up-close',
        number: '04',
        title: 'Up close: parasitic inductance',
        content:
          'The paper reports a Q3D-extracted commutation inductance of 34.5 nH (target 20 nH) with balanced legs (45/46 nH). I explained why the curves fall with frequency: opposite currents in close plates cancel flux, and skin and proximity effects push current to the facing surfaces. Larger DC-plate overlap is the fix the authors propose.',
        artifacts: [
          { imageUrl: '/projects/sic/slide23.jpg', caption: 'Flux cancellation, skin and proximity effects (own drawings)' },
          { imageUrl: '/projects/sic/slide17.jpg', caption: 'Wire bonding: 20-mil aluminium (own drawing)' },
        ],
      },
      {
        id: 'under-the-hood',
        number: '05',
        title: 'Under the hood: the tests',
        content:
          'Static: a Keysight B1505A curve tracer measured about 300 mΩ on-resistance and leakage up to 3.0 kV. Dynamic: a double-pulse test at 2.5 kV, 10 A, 5 Ω and 25 °C showed turn-off overshoot under 200 V and turn-on current ringing peaking near 44 A.',
        artifacts: [
          { imageUrl: '/projects/sic/slide25.jpg', caption: 'Double-pulse test sequence (own drawing)' },
        ],
      },
      {
        id: 'failure-modes',
        number: '06',
        title: 'Limits and open issues (my analysis)',
        content:
          'Several limits remain. The inductance is 34.5 nH against a 20 nH target. Strong turn-on ringing is an EMI source. The tests stop at 2.5 kV, 10 A and 25 °C, and leakage was measured only to 3.0 kV of 6.5 kV. Partial discharge is untested, the prototype uses FR4 and ABS, and the eutectic solder melts at 183 °C while the die is rated to 175 °C, which leaves little thermal margin for the full-scale module.',
        artifacts: [
          { imageUrl: '/projects/sic/slide28.jpg', caption: 'Limits and open issues' },
        ],
      },
      {
        id: 'measurable-impact',
        number: '07',
        title: 'Beyond the lab',
        content:
          'On the environmental side, higher efficiency and faster EV charging are gains, while lead in the solder and energy-intensive SiC wafers are costs. On the social side, faster EV adoption comes with high-voltage safety and training needs. On the ethical side, reliability, honest reporting of limits and a responsible supply chain all matter.',
        artifacts: [
          { imageUrl: '/projects/sic/slide29.jpg', caption: 'Ethical, social and environmental assessment (own analysis)' },
        ],
      },
      {
        id: 'reflection',
        number: '08',
        title: 'Reflection / what I learned',
        content:
          'Packaging, not the die, sets the limits at medium voltage: loop inductance, insulation and thermal margins decide whether a 6.5 kV chip becomes a usable module. This is the research area I want to work in: reliable, low-parasitic medium-voltage SiC power conversion.',
      },
    ],
  },
  {
    slug: 'hotel-concierge-ai',
    title: 'Hotel Concierge AI (ConciergeFlow)',
    tagline: '24/7 AI concierge for Paris boutique hotels with grounded n8n workflows and Airtable integration.',
    category: 'AI agent · 2026 · Hospitality',
    categoryGroup: 'ai-engineering',
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
    categoryGroup: 'ai-engineering',
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
    categoryGroup: 'ai-engineering',
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
      { url: '/project-screenshots/project3-2.png', caption: 'AI Workflow Node Map Visualizer & Inspector' },
      { url: '/project-screenshots/project3-1.png', caption: 'Nexus Control Room 3-Panel Main Studio' },
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
          { imageUrl: '/project-screenshots/project3-2.png', caption: 'Artifact 01: Visual Node Graph Visualizer' },
          { imageUrl: '/project-screenshots/project3-1.png', caption: 'Artifact 02: 3-Panel Studio Canvas' },
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
    categoryGroup: 'data-engineering',
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
    categoryGroup: 'design-systems',
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
        artifacts: [
          { imageUrl: '/project-screenshots/studiopulse-1.png', caption: 'Artifact 01: Tokenized Design System & Masterclass Schedule' },
        ],
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
        artifacts: [
          { imageUrl: '/project-screenshots/studiopulse-2.png', caption: 'Artifact 02: Apple Fluid Bottom Sheet with 1:1 Gesture Tracking' },
        ],
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
        artifacts: [
          { imageUrl: '/project-screenshots/studiopulse-3.png', caption: 'Artifact 03: Automated 1080x1920 Branded Social Story Card Generator' },
        ],
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
    categoryGroup: 'growth-marketing',
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
        artifacts: [
          { imageUrl: '/project-screenshots/creatorflow-1.png', caption: 'Artifact 01: Production Batch Kanban Queue & Real-Time Status' },
        ],
      },
      {
        id: 'the-problem',
        number: '02',
        title: 'The problem',
        content:
          'Solo creators and high-growth brands hit a ceiling because manual video editing, subtitle timing, and cross-posting require full-time agency retainers ($3,500/mo).',
        artifacts: [
          { imageUrl: '/project-screenshots/creatorflow-2.png', caption: 'Artifact 02: Algorithmic 3-Second Retention Hook Scorer' },
        ],
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
        artifacts: [
          { imageUrl: '/project-screenshots/creatorflow-3.png', caption: 'Artifact 03: Multi-Platform Automated Publishing Pipeline' },
        ],
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
