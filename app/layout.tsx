import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/ui/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mehdi Mechkak — Applied AI Engineer',
  description: 'Personal portfolio of Mehdi Mechkak, Applied AI Engineer based in Paris, France. Specializing in RAG agents, autonomous tool builders, and reliable BI pipelines.',
  keywords: ['Mehdi Mechkak', 'Applied AI Engineer', 'Paris AI Engineer', 'RAG', 'Python', 'TypeScript', 'pgvector', 'Airflow', 'FlowArchitect-Agency'],
  authors: [{ name: 'Mehdi Mechkak' }],
  openGraph: {
    title: 'Mehdi Mechkak — Applied AI Engineer',
    description: 'Evidence-first AI architecture, deterministic agent workflows, and production BI pipelines.',
    url: 'https://flowarchitect-agency.vercel.app',
    siteName: 'Mehdi Mechkak Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mehdi Mechkak — Applied AI Engineer',
    description: 'Applied AI Engineer based in Paris, France.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable}`}
    >
      <body className="bg-canvas text-darkText antialiased selection:bg-accent selection:text-canvas">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
