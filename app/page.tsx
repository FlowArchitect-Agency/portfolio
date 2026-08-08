'use client';

import HeroHome from '@/components/sections/HeroHome';
import HorizontalWorkSection from '@/components/sections/HorizontalWorkSection';
import LabGrid from '@/components/sections/LabGrid';
import EngineeringJourney from '@/components/sections/EngineeringJourney';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-textPrimary">
      {/* 1. Hero: AI Engineer Headline, Animated Tennis Character Avatar, Bio POV */}
      <HeroHome />

      {/* 2. Selected AI / Production Work: Desktop Pinned Horizontal Scroll Sequence */}
      <HorizontalWorkSection />

      {/* 3. Lab / Experiments: RAG Benchmark, n8n Harness, Prisma State Machines */}
      <LabGrid />

      {/* 4. Engineering Background & Journey: Physical Control Loops to AI */}
      <EngineeringJourney />

      {/* 5. About & Resume Download */}
      <AboutSection />

      {/* 6. Contact & Direct Mail */}
      <ContactSection />
    </main>
  );
}
