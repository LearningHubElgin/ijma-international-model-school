'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/content/site.config';
import { Reveal } from '@/components/ui/Reveal';

export function ProgrammesGridSection() {
  const { programmes } = siteConfig;

  return (
    <section
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      aria-label="Programmes"
    >
      {/* Floating Animated Handprints on the Far Right Edge (Matching gdgoenkarohini.com) */}
      <div className="absolute -right-6 top-[340px] w-[180px] lg:w-[200px] h-[500px] lg:h-[556px] pointer-events-none select-none z-20 hidden md:block animate-hands-float">
        <Image
          src="/assets/decorative/hand-shake-resized.png"
          alt="Colorful Handprints"
          width={200}
          height={556}
          className="object-contain w-full h-full drop-shadow-sm"
          priority={false}
        />
      </div>

      {/* 1520px Max Container matching exact live Elementor container width */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Split Row: Text Column on Left, Two Large Curved Photos on Right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left Text Column (~38% width on desktop) */}
          <div className="w-full lg:w-[40%] flex flex-col items-start text-left relative z-10">
            {/* Eyebrow with Cap Icon */}
            <Reveal variant="fade-up" delay={0.1}>
              <div className="inline-flex items-center gap-2.5 mb-3.5">
                <span className="w-7 h-7 flex-shrink-0 text-[#eb1551]">
                  <Image
                    src="/assets/decorative/doodle-cap-exact.svg"
                    alt="Cap"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </span>
                <span className="text-[#eb1551] font-bold text-sm sm:text-[15px] tracking-wide">
                  {programmes.eyebrow}
                </span>
              </div>
            </Reveal>

            {/* Main Title */}
            <Reveal variant="fade-up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#111111] tracking-tight leading-[1.2] mb-4">
                {programmes.heading}
              </h2>
            </Reveal>

            {/* Description Paragraph */}
            <Reveal variant="fade-up" delay={0.3}>
              <p className="text-[15px] sm:text-base text-[#6b6b84] leading-relaxed mb-8 max-w-xl font-normal">
                {programmes.description}
              </p>
            </Reveal>

            {/* View More CTA + Curved Dashed Line to Mom and Me */}
            <Reveal variant="fade-up" delay={0.35}>
              <div className="relative">
                <Link
                  href={programmes.ctaHref}
                  className="inline-flex items-center justify-center bg-[#EB1551] hover:bg-[#d01046] text-white font-bold text-base px-9 py-3.5 rounded-full shadow-[0_8px_25px_rgba(235,21,81,0.25)] hover:shadow-[0_12px_30px_rgba(235,21,81,0.35)] transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {programmes.ctaText}
                </Link>

                {/* Subtle curved dashed arrow pointing from under View More towards Mom and Me */}
                <div className="absolute -bottom-24 left-10 w-[150px] h-[150px] pointer-events-none select-none opacity-40 hidden lg:block rotate-[14deg]">
                  <Image
                    src="/assets/decorative/doodle-arrow-line.svg"
                    alt="Arrow line"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Photos Column (~60% width on desktop) */}
          <div className="w-full lg:w-[60%] relative mt-8 lg:mt-0">
            {/* Tilted Crayon Doodle sitting at the top-left corner of Photo 1 (Matching gdgoenkarohini.com) */}
            <div className="absolute -top-10 -left-6 w-20 h-20 select-none pointer-events-none z-20 animate-float-delayed transform rotate-[-15deg]">
              <Image
                src="/assets/decorative/doodle-crayon-exact.svg"
                alt="Crayon Doodle"
                width={80}
                height={80}
                className="object-contain drop-shadow-sm"
              />
            </div>

            {/* Dual Curved Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-center">
              {/* Photo 1: Playing with clay (border-radius: 0 0 500px 0) */}
              <Reveal variant="fade-up" delay={0.25}>
                <div
                  className="relative aspect-[480/372] w-full overflow-hidden select-none bg-gray-50 shadow-[0_6px_25px_rgba(0,0,0,0.04)]"
                  style={{ borderRadius: '0px 0px 500px 0px' }}
                >
                  <Image
                    src="/assets/ijma/photos/Art-class.jpg"
                    alt="Students in Robotics and STEM Class"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </div>
              </Reveal>

              {/* Photo 2: Painting horse model (border-radius: 500px 0 0 0) */}
              <Reveal variant="fade-up" delay={0.35}>
                <div
                  className="relative aspect-[480/372] w-full overflow-hidden select-none bg-gray-50 shadow-[0_6px_25px_rgba(0,0,0,0.04)]"
                  style={{ borderRadius: '500px 0px 0px 0px' }}
                >
                  <Image
                    src="/assets/ijma/photos/teacher-watching-art-of the-students.jpeg"
                    alt="Teacher reviewing student creative projects"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Bottom Row: 6 Wide Rounded Pill Cards (Exact 446px x 180px proportions matching gdgoenkarohini.com) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mt-16 sm:mt-20 lg:mt-24">
          {programmes.list.map((prog, index) => (
            <Reveal
              key={prog.id}
              variant="fade-up"
              delay={0.06 * (index + 1)}
              className="h-full"
            >
              <Link
                href={prog.href}
                className="group relative rounded-[100px] text-white py-12 sm:py-14 px-8 text-center flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all duration-300 shadow-[0_6px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(235,21,81,0.25)] block min-h-[175px]"
                style={{ backgroundColor: prog.bgColor, borderRadius: '100px' }}
              >
                {/* Hover overlay that smoothly transitions to #EB1551 */}
                <div
                  className="absolute inset-0 bg-[#EB1551] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderRadius: '100px' }}
                />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <h3 className="text-2xl sm:text-[27px] font-bold text-white mb-2 tracking-wide leading-tight">
                    {prog.title}
                  </h3>

                  <div className="inline-flex flex-col items-center font-semibold text-sm sm:text-base text-white/95">
                    <span>{prog.ageRange}</span>
                    {/* Authentic yellow wavy underline */}
                    <svg
                      width="56"
                      height="7"
                      viewBox="0 0 64 8"
                      fill="none"
                      className="mt-1"
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
                  </div>
                </div>

                {/* Sparkles Doodle SVG in bottom right (visible on hover) */}
                <div className="absolute bottom-3 right-7 pointer-events-none select-none text-white opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="w-8 h-8 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M68.4,25.5c5.3,0.5,10.4-0.3,11.7,6.3c1,5.4,0.5,11.3,1.9,16.5c1.9-5.1,1.8-11,3.4-16.3 c1.8-6.5,6.9-5.2,12.2-5.3c0.2,0,0.8-1.2,0-1.3c-5.8-1.3-11-2.6-12.3-9.2c-0.4-1.9-0.5-3.9-0.5-5.9c0.1-2.2,0-4.4-0.2-6.4 c-0.1-0.6-0.2-1.2-0.3-1.8C84.2,2.1,84.1,2,84,2c-0.1,0-0.2,0-0.2,0.2c-0.2,0.6-0.3,1.2-0.4,1.8c-0.4,2-0.7,4.1-0.8,6.4 c-0.2,2-0.4,3.9-1,5.8c-1.9,6.4-7.2,7.3-13.1,8.1C67.7,24.3,68.2,25.5,68.4,25.5z M77.2,24.7c2.1-0.8,3.9-2.2,5.2-4.5 c0.4-0.7,0.7-1.4,1-2.2c0.2,0.8,0.5,1.5,0.8,2.2c1.1,2.4,2.8,4,4.8,4.9c-1.3,0.4-2.5,1.1-3.5,2.2c-1.4,1.7-2.3,4-2.8,6.5 c-0.3-2.5-0.9-5-2.2-6.8C79.6,26,78.5,25.2,77.2,24.7z" />
                    <path d="M2.3,31.9c4.3,0.4,8.5-0.2,9.5,5.2c0.9,4.4,0.4,9.2,1.6,13.5c1.6-4.2,1.5-9,2.7-13.3c1.5-5.3,5.6-4.3,9.9-4.3 c0.2,0,0.7-1,0-1.1c-4.7-1-9-2.1-10.1-7.5c-0.3-1.6-0.4-3.2-0.4-4.8c0.1-1.8,0-3.6-0.2-5.2c-0.1-0.5-0.1-1-0.2-1.5 c0-0.1-0.1-0.1-0.2-0.1c-0.1,0-0.2,0-0.2,0.1c-0.1,0.5-0.3,1-0.4,1.5c-0.4,1.6-0.6,3.4-0.6,5.2c-0.2,1.6-0.4,3.2-0.8,4.7 c-1.6,5.2-5.9,6-10.7,6.6C1.7,30.9,2.1,31.9,2.3,31.9z M9.5,31.3c1.7-0.6,3.2-1.8,4.2-3.7c0.3-0.5,0.6-1.1,0.8-1.8 c0.2,0.6,0.4,1.3,0.6,1.8c0.9,2,2.3,3.2,3.9,4c-1.1,0.3-2.1,0.9-2.8,1.8c-1.2,1.4-1.9,3.3-2.3,5.3c-0.2-2.1-0.7-4-1.8-5.5 C11.4,32.4,10.5,31.7,9.5,31.3z" />
                    <path d="M25.9,64.6c8,0.4,15.6-1.1,17.9,8.7c1.9,8.1,1.4,16.9,4,24.6c2.6-7.8,2.1-16.6,4-24.6 c2.3-9.8,9.9-8.3,17.9-8.7c0.3,0,1.1-1.8,0-2c-8.7-1.5-16.7-3.2-19.1-13c-0.7-2.9-1-5.8-1.1-8.8c0-3.3-0.2-6.6-0.8-9.6 c-0.1-0.9-0.3-1.8-0.5-2.7c0-0.2-0.2-0.3-0.3-0.2c-0.2,0-0.3,0.1-0.3,0.2c-0.2,0.9-0.4,1.8-0.5,2.7c-0.5,3-0.8,6.3-0.8,9.6 c-0.2,2.9-0.4,5.9-1.1,8.8c-2.4,9.7-10.3,11.5-19.1,13C24.7,62.8,25.6,64.6,25.9,64.6z M39,62.9c3.1-1.3,5.7-3.5,7.5-7.1 c0.5-1,0.9-2.1,1.3-3.3c0.4,1.2,0.8,2.3,1.3,3.3c1.8,3.6,4.4,5.8,7.5,7.1c-1.9,0.7-3.7,1.8-5.1,3.6c-2.1,2.6-3.2,6.2-3.7,10 c-0.6-3.8-1.7-7.4-3.7-10C42.7,64.7,40.9,63.5,39,62.9z" />
                  </svg>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
