import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Mehdi Mechkak — Applied AI Engineer',
  description: 'Personal portfolio of Mehdi Mechkak, Applied AI Engineer based in Paris, France. Specializing in RAG, AI automation & data systems.',
  keywords: ['Mehdi Mechkak', 'Applied AI Engineer', 'Paris AI Engineer', 'RAG', 'Python', 'FastAPI', 'Airflow', 'AWS', 'FlowArchitect-Agency'],
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
          <Navbar />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
