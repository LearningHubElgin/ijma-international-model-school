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
        background: 'linear-gradient(180deg, #ffefe4 0%, #ffefe4 90%, #ffffff 100%)',
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

        {/* 4 Arched Dome Cards Grid (Matching gdgoenkarohini.com) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {facilities.list.map((facility, index) => (
            <Reveal
              key={facility.id}
              variant="fade-up"
              delay={0.08 * (index + 1)}
              className="h-full"
            >
              <div className="group relative h-full flex flex-col items-center justify-between transition-transform duration-300 hover:-translate-y-1">
                {/* Optional Crayon tip poking out at top arch (on Healthy Foods) */}
                {facility.hasTopCrayon && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 select-none pointer-events-none z-20 transform rotate-[30deg] animate-float-delayed">
                    <Image
                      src="/assets/decorative/doodle-crayon-exact.svg"
                      alt="Crayon"
                      width={32}
                      height={32}
                      className="object-contain drop-shadow-sm"
                    />
                  </div>
                )}

                {/* Card Container with Special Arched Dome Mask */}
                <div className="wdt-mask-card bg-[#0A6375] group-hover:bg-[#EB1551] transition-colors duration-300 w-full min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] pt-14 sm:pt-16 pb-10 px-6 sm:px-7 text-center flex flex-col items-center justify-between text-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] relative overflow-hidden">
                  {/* Top content */}
                  <div className="flex flex-col items-center w-full">
                    <h3 className="text-xl sm:text-[23px] font-bold text-white mb-1.5 tracking-wide leading-tight">
                      {facility.title}
                    </h3>

                    {/* Yellow Wavy Underline */}
                    <svg
                      width="56"
                      height="7"
                      viewBox="0 0 64 8"
                      fill="none"
                      className="my-1.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 4 Q 5 1, 8 4 T 14 4 T 20 4 T 26 4 T 32 4 T 38 4 T 44 4 T 50 4 T 56 4 T 62 4"
                        stroke="#f7941e"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* Description Paragraph */}
                    <p className="text-[13px] sm:text-[14px] text-white/95 leading-relaxed font-normal mt-4 px-1">
                      {facility.description}
                    </p>
                  </div>

                  {/* Bottom View More Button */}
                  <div className="pt-6 relative z-10">
                    <Link
                      href={facility.ctaHref}
                      className="inline-flex items-center justify-center bg-[#EB1551] group-hover:bg-[#d01046] text-white font-bold text-xs sm:text-sm px-7 py-2.5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      {facility.ctaText}
                    </Link>
                  </div>

                  {/* Bottom Left Doodle SVG */}
                  <div className="absolute bottom-4 left-3 w-12 sm:w-14 h-12 sm:h-14 select-none pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                    <Image
                      src={facility.icon}
                      alt={`${facility.title} icon`}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
