'use client';

import Header from '@/components/layout/Header';
import Preloader from '@/components/sections/Preloader';
import Hero from '@/components/sections/Hero';
import CredibilityTicker from '@/components/sections/CredibilityTicker';
import ModulesSection from '@/components/sections/ModulesSection';
import Philosophy from '@/components/sections/Philosophy';
import ClosingStatement from '@/components/sections/ClosingStatement';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-darkText relative">
      <Preloader />
      <Header />
      <Hero />
      <CredibilityTicker />
      <ModulesSection />
      <Philosophy />
      <ClosingStatement />
      <Contact />
      <Footer />
    </main>
  );
}
