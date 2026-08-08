'use client';

import HeroHome from '@/components/sections/HeroHome';
import CareerEvolution from '@/components/sections/CareerEvolution';
import HorizontalWorkSection from '@/components/sections/HorizontalWorkSection';
import LabGrid from '@/components/sections/LabGrid';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-textPrimary">
      <HeroHome />
      <CareerEvolution />
      <HorizontalWorkSection />
      <LabGrid />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
