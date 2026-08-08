'use client';

import HeroHome from '@/components/sections/HeroHome';
import SelectedWork from '@/components/sections/SelectedWork';
import LabGrid from '@/components/sections/LabGrid';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-textPrimary">
      <HeroHome />
      <SelectedWork />
      <LabGrid />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
