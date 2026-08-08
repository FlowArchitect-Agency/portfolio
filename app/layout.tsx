import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GlowingCursor from '@/components/ui/GlowingCursor';
import ParallaxBackground from '@/components/ui/ParallaxBackground';

export const metadata: Metadata = {
  title: 'Mehdi Mechkak — Applied AI Engineer & Data Architect',
  description: 'Personal portfolio of Mehdi Mechkak, Applied AI Engineer & Data Architect based in Paris, France. Transitioned from High-Voltage SCADA Electrical Engineering to RAG, AI automation & cloud systems.',
  keywords: ['Mehdi Mechkak', 'Applied AI Engineer', 'Paris AI Engineer', 'RAG', 'Python', 'FastAPI', 'Airflow', 'AWS', 'SCADA', 'Electrical Engineering'],
  authors: [{ name: 'Mehdi Mechkak' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-textPrimary antialiased selection:bg-accent selection:text-white">
        <ThemeProvider>
          <GlowingCursor />
          <ParallaxBackground />
          <Navbar />
          <div className="min-h-screen relative z-10">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
