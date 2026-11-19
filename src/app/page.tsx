import React from 'react';
import { HeroSliderSection } from '@/sections/home/HeroSliderSection';
import { AboutSection } from '@/sections/home/AboutSection';
import { StepByStepSection } from '@/sections/home/StepByStepSection';
import { FeatureGridSection } from '@/sections/home/FeatureGridSection';
import { ProgrammesGridSection } from '@/sections/home/ProgrammesGridSection';
import { FacilitiesSection } from '@/sections/home/FacilitiesSection';
import { CountersStripSection } from '@/sections/home/CountersStripSection';
import { InfrastructureGallerySection } from '@/sections/home/InfrastructureGallerySection';
import { SmartActivitiesSection } from '@/sections/home/SmartActivitiesSection';
import { BlogTeaserSection } from '@/sections/home/BlogTeaserSection';

export default function HomePage() {
  return (
    <main className="flex-1 w-full overflow-hidden">
      {/* 1. Hero Slider */}
      <HeroSliderSection />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Step By Step Systematic Education Intro */}
      <StepByStepSection />

      {/* 4. Six Feature Cards Grid (Montessori Methodology, Curriculum, etc.) */}
      <FeatureGridSection />

      {/* 5. Programmes Grid with 6 Age Ranges */}
      <ProgrammesGridSection />

      {/* 6. School Facilities (4 Cards) */}
      <FacilitiesSection />

      {/* 7. Animated Counters Strip */}
      <CountersStripSection />

      {/* 8. Infrastructure Lightbox Gallery (6 Tiles) */}
      <InfrastructureGallerySection />

      {/* 9. Smart Activities (5 Cards) */}
      <SmartActivitiesSection />

      {/* 10. Blog Teaser (3 Latest Posts) */}
      <BlogTeaserSection />

      {/* 11. Newsletter Block is integrated as the Pre-Footer in Footer.tsx */}
    </main>
  );
}
