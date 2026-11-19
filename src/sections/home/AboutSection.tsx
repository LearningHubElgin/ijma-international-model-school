'use client';

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

export function AboutSection() {
  const { about } = siteConfig;

  return (
    <Section bg="white" spacing="default" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Organic Apple / Blob Framed Photo */}
          <div className="lg:col-span-6 relative flex justify-center">
            <Reveal variant="zoom-in" delay={0.15}>
              <div className="relative w-full max-w-[500px] aspect-[1098.8/898.6]">
                {/* Sleeping Blue Star Doodle Floating at Top Left */}
                <div className="absolute -top-8 -left-6 sm:-top-10 sm:-left-8 w-20 sm:w-26 h-20 sm:h-26 pointer-events-none animate-float-slow z-20">
                  <Image
                    src={about.floatingStar || '/assets/decorative/sleeping-star.svg'}
                    alt="Sleeping Star"
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </div>

                {/* SVG Clipped Photo with Orange Organic Frame */}
                <svg
                  viewBox="0 0 1098.8 898.6"
                  className="w-full h-auto drop-shadow-xl overflow-visible"
                >
                  <defs>
                    <clipPath id="aboutBlobClip">
                      <path d="M981.8,104.4c-28.3-14.6-54.6-23.5-79.3-28c-24.7-4.5-47.8-4.6-69.7-1.7c-20.7,2.9-40.3,8.6-59.3,16.3 c-48.1,19.1-87,50.9-132.4,79c-36.1,22.9-79.6,30.9-116.7,8.3c-24.2-12.3-47.2-30.3-70.6-42.4C391,102.6,320.3,89.5,251,99.3 c-21,2.8-41.5,7.6-61.2,14.5c-59.1,20.5-110.5,59.2-141,115.7c-73.5,135.8-26.2,297.3,45.9,420.8c10.4,16.8,22,33.1,34.6,48.8 c16,19.9,33.5,38.1,52.1,54.7c18.6,16.6,38.3,31.6,59,45c92.1,58.1,201.2,89,310.8,85.3c72.3-2.6,142.6-22.6,206.1-55.9 c21.2-11.1,41.6-23.7,61.3-37.6c112.4-79.3,194.4-196.4,236-328.4c32.8-102.5,52-226.2-18.6-315.5 C1021.8,130.1,1003.9,115.9,981.8,104.4z" />
                    </clipPath>
                  </defs>

                  {/* Image Clipped Inside Organic Path */}
                  <g clipPath="url(#aboutBlobClip)">
                    <image
                      href={about.mainImage}
                      width="1098.8"
                      height="898.6"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </g>

                  {/* Orange Organic Border */}
                  <path
                    d="M981.8,104.4c-28.3-14.6-54.6-23.5-79.3-28c-24.7-4.5-47.8-4.6-69.7-1.7c-20.7,2.9-40.3,8.6-59.3,16.3 c-48.1,19.1-87,50.9-132.4,79c-36.1,22.9-79.6,30.9-116.7,8.3c-24.2-12.3-47.2-30.3-70.6-42.4C391,102.6,320.3,89.5,251,99.3 c-21,2.8-41.5,7.6-61.2,14.5c-59.1,20.5-110.5,59.2-141,115.7c-73.5,135.8-26.2,297.3,45.9,420.8c10.4,16.8,22,33.1,34.6,48.8 c16,19.9,33.5,38.1,52.1,54.7c18.6,16.6,38.3,31.6,59,45c92.1,58.1,201.2,89,310.8,85.3c72.3-2.6,142.6-22.6,206.1-55.9 c21.2-11.1,41.6-23.7,61.3-37.6c112.4-79.3,194.4-196.4,236-328.4c32.8-102.5,52-226.2-18.6-315.5 C1021.8,130.1,1003.9,115.9,981.8,104.4z"
                    fill="none"
                    stroke="#f7941e"
                    strokeWidth="16"
                  />

                  {/* Top Stem Ellipse */}
                  <ellipse
                    cx="583.3"
                    cy="75.7"
                    rx="74.8"
                    ry="65.8"
                    fill="#f7941e"
                  />

                  {/* Lower Right Accent Ellipse */}
                  <ellipse
                    cx="1015.2"
                    cy="699.1"
                    rx="30.3"
                    ry="34.4"
                    fill="#f7941e"
                  />
                </svg>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Copy & Floating Illustrations */}
          <div className="lg:col-span-6 relative text-left">
            {/* Flying Rocket Doodle Top Right */}
            <div className="absolute -top-12 right-6 sm:right-12 w-20 sm:w-24 h-20 sm:h-24 pointer-events-none animate-float-slow z-10 hidden sm:block">
              <Image
                src={about.floatingRocket || '/assets/decorative/doodle-rocket.svg'}
                alt="Rocket Doodle"
                width={85}
                height={85}
                className="object-contain"
              />
            </div>

            {/* Wind Swirls Doodle Under Rocket */}
            <div className="absolute top-8 right-10 sm:right-16 w-10 sm:w-12 h-10 sm:h-12 pointer-events-none z-10 hidden sm:block">
              <Image
                src={about.floatingSwirls || '/assets/decorative/doodle-swirls.svg'}
                alt="Wind Swirls"
                width={45}
                height={45}
                className="object-contain"
              />
            </div>

            {/* Eyebrow Label with Mortarboard Icon */}
            <Reveal variant="fade-up" delay={0.1}>
              <div className="flex items-center gap-2 mb-2">
                <div className="relative w-5 h-5 flex-shrink-0 opacity-70">
                  <Image
                    src={about.gradCapIcon || '/assets/decorative/grad-cap.svg'}
                    alt="Graduation Cap"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <span className="font-bubblegum text-lg sm:text-xl text-[#ed145b] tracking-wider uppercase font-semibold">
                  {about.eyebrow}
                </span>
              </div>
            </Reveal>

            {/* Section Heading */}
            <Reveal variant="fade-up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-black leading-[1.18] tracking-tight">
                {about.heading}
              </h2>
            </Reveal>

            {/* Paragraph 1 */}
            <Reveal variant="fade-up" delay={0.3}>
              <p className="mt-5 text-[15px] sm:text-base text-[#6b6b84] leading-relaxed">
                {about.paragraph1}
              </p>
            </Reveal>

            {/* Paragraph 2 */}
            <Reveal variant="fade-up" delay={0.4}>
              <p className="mt-4 text-[15px] sm:text-base text-[#6b6b84] leading-relaxed">
                {about.paragraph2}
              </p>
            </Reveal>

            {/* Action Button & Bottom Center Star */}
            <Reveal variant="fade-up" delay={0.5}>
              <div className="mt-8 flex items-center justify-between relative">
                <Button
                  variant="primary"
                  size="lg"
                  href={about.ctaHref}
                  className="bg-[#ed145b] text-white hover:bg-[#0a6375] px-8 sm:px-10 py-3 sm:py-3.5 text-base sm:text-lg rounded-full shadow-button transition-all duration-300"
                >
                  {about.ctaText}
                </Button>

                {/* Small Orange Doodle Star */}
                <div className="hidden sm:block text-[#f7941e] text-2xl animate-pulse-slow pr-28 select-none">
                  ★
                </div>
              </div>
            </Reveal>

            {/* Toddler Boy Sitting Playing with Blocks on Bottom Right */}
            <div className="absolute -bottom-10 -right-4 sm:-right-8 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none z-20">
              <Image
                src={about.toddlerImage || '/assets/about/toddler-play.png'}
                alt="Toddler Playing"
                width={140}
                height={140}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
