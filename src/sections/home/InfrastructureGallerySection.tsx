'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Lightbox, LightboxImage } from '@/components/ui/Lightbox';
import { Reveal } from '@/components/ui/Reveal';

export function InfrastructureGallerySection() {
  const { infrastructureGallery } = siteConfig;
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const lightboxItems: LightboxImage[] = infrastructureGallery.items.map((item) => ({
    id: item.id,
    image: item.image,
    title: item.title,
    category: item.category,
  }));

  return (
    <section
      className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28 bg-white"
      aria-label="Infrastructure Gallery"
    >
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Row with Left Rotating Circle, Center Heading, Right Rocket */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 sm:mb-16 gap-6 relative">
          {/* Left: Rotating Sunburst Rays Circle with Tilted Building at the Bottom */}
          <div className="hidden lg:flex items-center justify-center relative w-[200px] h-[200px] select-none">
            {/* Rotating Outer Dashed Circle */}
            <div className="w-full h-full animate-rotate-circle select-none pointer-events-none">
              <Image
                src="/assets/decorative/infra-rotate-circle.svg"
                alt="Rotating Sunburst Circle"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Inner Tilted Building Blocks (Stationary at -20deg tilt, placed at the bottom edge) */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-[100px] h-[100px] -rotate-[20deg] text-[#9ca3af] pointer-events-none select-none">
              <Image
                src="/assets/decorative/infra-building.svg"
                alt="Building Blocks"
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Center: Eyebrow, Cap Icon, Stars Doodle, and Title */}
          <div className="flex flex-col items-center text-center relative z-10 flex-1">
            {/* Eyebrow Container */}
            <Reveal variant="fade-up" delay={0.1}>
              <div className="relative inline-flex items-center gap-2 mb-2">
                {/* 3-Star Doodle sitting to the left of the eyebrow */}
                <div className="absolute -left-12 -top-2 w-10 h-10 select-none pointer-events-none animate-pulse-slow hidden sm:block">
                  <Image
                    src="/assets/decorative/infra-stars.svg"
                    alt="Stars Doodle"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                <span className="w-6 h-6 flex-shrink-0 text-[#eb1551]">
                  <Image
                    src="/assets/decorative/doodle-cap-exact.svg"
                    alt="Cap"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </span>
                <span className="text-[#eb1551] font-bold text-sm sm:text-[15px] tracking-wide">
                  {infrastructureGallery.eyebrow}
                </span>
              </div>
            </Reveal>

            {/* Title: Infrastructure */}
            <Reveal variant="fade-up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#111111] tracking-tight leading-[1.2]">
                {infrastructureGallery.heading}
              </h2>
            </Reveal>
          </div>

          {/* Right: Floating Rocket Doodle */}
          <div className="hidden lg:flex items-center justify-center w-[200px] h-[200px] select-none pointer-events-none animate-float-slow">
            <Image
              src="/assets/decorative/infra-rocket.svg"
              alt="Rocket Doodle"
              width={180}
              height={180}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* 6 Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {infrastructureGallery.items.map((item, index) => (
            <Reveal
              key={item.id}
              variant="zoom-in"
              delay={0.08 * (index + 1)}
            >
              <div
                onClick={() => setActiveLightboxIndex(index)}
                className="group relative aspect-[4/3] rounded-[28px] overflow-hidden bg-gray-100 shadow-card hover:shadow-card-hover cursor-pointer transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover Overlay with "View" Action */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="font-bubblegum text-[#f7941e] text-sm uppercase font-bold tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-lg text-white mb-3">
                    {item.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-white px-4 py-2 rounded-full w-max shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Gallery Lightbox */}
      <Lightbox
        images={lightboxItems}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIndex) => setActiveLightboxIndex(newIndex)}
      />
    </section>
  );
}
