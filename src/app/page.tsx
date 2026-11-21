import React from 'react';
import { HeroSliderSection } from '@/sections/home/HeroSliderSection';
import { AboutSection } from '@/sections/home/AboutSection';
import { StepByStepSection } from '@/sections/home/StepByStepSection';
import { FeatureGridSection } from '@/sections/home/FeatureGridSection';
import { ProgrammesGridSection } from '@/sections/home/ProgrammesGridSection';
import { FacilitiesSection } from '@/sections/home/FacilitiesSection';
import { CountersStripSection } from '@/sections/home/CountersStripSection';
import { PatrioticVideoBannerSection } from '@/sections/home/PatrioticVideoBannerSection';
import { InfrastructureGallerySection } from '@/sections/home/InfrastructureGallerySection';
import { VideoShowcaseSection } from '@/sections/home/VideoShowcaseSection';
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

      {/* 4. Feature Cards Grid */}
      <FeatureGridSection />

      {/* 5. Academic Programmes & Wings Grid */}
      <ProgrammesGridSection />

      {/* 6. School Facilities (Smart Classrooms, Robotics, Turf, Transport) */}
      <FacilitiesSection />

      {/* 7. Animated Counters Strip */}
      <CountersStripSection />

      {/* 8. Full-Width Background Video: Patriotic Song Performance (Muted by Default) */}
      <PatrioticVideoBannerSection />

      {/* 9. Infrastructure & Photo Gallery */}
      <InfrastructureGallerySection />

      {/* 10. Interactive Video Showcase (Featuring 15th August 1947 Drama at 2:48) */}
      <VideoShowcaseSection />

      {/* 11. Smart Activities & Grassy Hill Banner */}
      <SmartActivitiesSection />

      {/* 12. News & Blog Teaser */}
      <BlogTeaserSection />
    </main>
  );
}
