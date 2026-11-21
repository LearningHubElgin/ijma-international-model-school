'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/content/site.config';
import { Reveal } from '@/components/ui/Reveal';

export function FacilitiesSection() {
  const { facilities } = siteConfig;

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{
        background: 'linear-gradient(180deg, #F0FDF4 0%, #ECFDF5 85%, #ffffff 100%)',
      }}
      aria-label="School Facilities"
    >
      {/* Floating Smiling Star with Trail on Left */}
      <div className="absolute top-16 left-4 sm:left-10 lg:left-20 w-28 sm:w-36 lg:w-44 select-none pointer-events-none z-0 animate-float-slow opacity-90 hidden sm:block">
        <Image
          src="/assets/decorative/doodle-shooting-star.svg"
          alt="Star Doodle"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      {/* Floating Planet with Rings on Right */}
      <div className="absolute top-14 right-4 sm:right-10 lg:right-20 w-28 sm:w-36 lg:w-44 select-none pointer-events-none z-0 animate-float-reverse opacity-90 hidden sm:block">
        <Image
          src="/assets/decorative/doodle-planet-rings.svg"
          alt="Planet Doodle"
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      {/* Floating Rocket on Bottom Right */}
      <div className="absolute bottom-6 right-6 sm:right-10 w-12 sm:w-16 select-none pointer-events-none z-0 animate-float-delayed opacity-85 hidden md:block">
        <Image
          src="/assets/decorative/doodle-rocket.svg"
          alt="Rocket Doodle"
          width={64}
          height={64}
          className="object-contain"
        />
      </div>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Eyebrow with Cap Icon */}
          <Reveal variant="fade-up" delay={0.1}>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-6 flex-shrink-0 text-[#0A5C36]">
                <Image
                  src="/assets/decorative/doodle-cap-exact.svg"
                  alt="Cap"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </span>
              <span className="text-[#0A5C36] font-bold text-sm sm:text-[15px] tracking-wide">
                {facilities.eyebrow}
              </span>
            </div>
          </Reveal>

          {/* Title */}
          <Reveal variant="fade-up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#111111] tracking-tight leading-[1.2] mb-4">
              {facilities.heading}
            </h2>
          </Reveal>

          {/* Description */}
          <Reveal variant="fade-up" delay={0.3}>
            <p className="max-w-3xl mx-auto text-[14px] sm:text-[15px] text-[#6b6b84] leading-relaxed font-normal">
              {facilities.description}
            </p>
          </Reveal>
        </div>

        {/* 4 Arched Dome Cards Grid - 2 columns on mobile, 4 columns on desktop */}
        <div className="max-w-[1480px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 lg:gap-0 items-stretch justify-items-center">
          {facilities.list.map((facility, index) => (
            <Reveal
              key={facility.id}
              variant="fade-up"
              delay={0.08 * (index + 1)}
              className="w-full flex justify-center h-full"
            >
              <div className="group relative w-full sm:w-[310px] max-w-full flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 h-full">
                {/* Card Container with Special Arched Dome Mask in Dark Islamic Green turning into Light Green on hover */}
                <div className="wdt-mask-card bg-[#0A5C36] group-hover:bg-[#10B981] transition-colors duration-300 w-full sm:w-[310px] max-w-full px-2.5 sm:px-[30px] pb-4 sm:pb-[34px] pt-0 text-center flex flex-col items-center text-white relative shadow-xl h-full">
                  {/* Upper spacer */}
                  <div className="w-full h-[60px] sm:h-[214px] flex-shrink-0 select-none pointer-events-none" aria-hidden="true" />

                  {/* Detail Content Group */}
                  <div className="w-full flex flex-col items-center flex-1 justify-between">
                    <div>
                      <h3 className="text-xs sm:text-[22px] lg:text-[24px] font-bold text-white mb-1 tracking-wide leading-snug line-clamp-2">
                        {facility.title}
                      </h3>

                      {/* Gold Wavy Underline */}
                      <svg
                        width="32"
                        height="5"
                        viewBox="0 0 64 8"
                        fill="none"
                        className="my-1 sm:my-1.5 mx-auto sm:w-14 sm:h-2"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 4 Q 5 1, 8 4 T 14 4 T 20 4 T 26 4 T 32 4 T 38 4 T 44 4 T 50 4 T 56 4 T 62 4"
                          stroke="#F5A623"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      {/* Description Paragraph */}
                      <p className="text-[10px] sm:text-[14px] lg:text-[15px] text-white/95 leading-tight sm:leading-[24px] font-normal px-0.5 sm:px-1 pt-1 sm:pt-2 pb-1 mb-3 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                        {facility.description}
                      </p>
                    </div>

                    {/* Bottom View More Button */}
                    <div className="mt-auto pt-1 relative z-10">
                      <Link
                        href={facility.ctaHref}
                        className="inline-flex items-center justify-center bg-[#10B981] group-hover:bg-[#0A5C36] text-white font-bold text-[11px] sm:text-[14px] px-3.5 sm:px-8 py-1.5 sm:py-3 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:-translate-y-0.5"
                      >
                        {facility.ctaText}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Corner SVG Icon in Light Green */}
                <div className="absolute -bottom-[22px] -left-[20px] w-20 h-20 pointer-events-none select-none text-[#10B981] z-20 transition-all duration-300 ease-out transform group-hover:translate-x-12 group-hover:-translate-y-12 group-hover:opacity-15 group-hover:text-black hidden sm:block">
                  <Image
                    src={facility.icon}
                    alt={`${facility.title} icon`}
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
