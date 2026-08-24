export const DESIGN_TOKENS = {
  colors: {
    accent: '#6E56CF', // Locked indigo desaturated accent
    dark: {
      background: '#0A0A0B',
      surface: '#131316',
      surfaceElevated: '#1A1A1F',
      border: 'rgba(255, 255, 255, 0.08)',
      textPrimary: '#F5F5F3',
      textSecondary: 'rgba(245, 245, 243, 0.62)',
      textMuted: 'rgba(245, 245, 243, 0.40)',
    },
    light: {
      background: '#FAFAF7',
      surface: '#FFFFFF',
      border: 'rgba(10, 10, 11, 0.08)',
      textPrimary: '#0A0A0B',
      textSecondary: 'rgba(10, 10, 11, 0.62)',
      textMuted: 'rgba(10, 10, 11, 0.42)',
    },
  },
  typography: {
    display: "'Inter Tight', 'General Sans', sans-serif",
    body: "'Inter', 'Geist', sans-serif",
    mono: "'JetBrains Mono', 'Geist Mono', monospace",
  },
  navLinks: [
    { label: 'Work', href: '/#work' },
    { label: 'Demos', href: '/demos' },
    { label: 'Lab', href: '/#lab' },
    { label: 'Journey', href: '/#journey' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ],
  author: {
    name: 'Mehdi Mechkak',
    title: 'Applied AI Engineer',
    specialty: 'RAG, AI automation & data systems',
    stack: 'Python · FastAPI · Airflow · AWS (plus TypeScript/Prisma for tooling)',
    location: 'Paris, France · CET',
    bioPOV:
      'I build AI systems that show their work. Every answer is grounded in retrievable evidence or the case is escalated — no black boxes, no hallucinated numbers, just accountable AI teams can trust and defend.',
    email: 'flowarchitect.agency@gmail.com',
    github: 'https://github.com/FlowArchitect-Agency',
    linkedin: 'https://linkedin.com/in/mehdi-mechkak',
    emojiStats: [
      { emoji: '🌍', text: 'Paris, France · CET' },
      { emoji: '🧠', text: 'RAG & evidence-first AI' },
      { emoji: '🐍', text: 'Python · FastAPI · Airflow · AWS' },
      { emoji: '📊', text: '4 production systems shipped' },
    ],
  },
} as const;
