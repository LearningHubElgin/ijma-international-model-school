'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from 'lucide-react';

export function StepByStepSection() {
  const { stepByStep } = siteConfig;

  return (
    <section
      className="relative overflow-hidden pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-16 bg-[#FFEFE4]"
      aria-label="Step By Step Systematic Education"
    >
      {/* Floating Saturn Planet with Ring on Left */}
      <div className="absolute top-10 left-4 sm:left-8 lg:left-14 w-28 sm:w-36 lg:w-44 h-28 sm:h-36 lg:h-44 pointer-events-none animate-float-slow z-10 hidden sm:block select-none">
        <Image
          src={stepByStep.planetDoodle || '/assets/decorative/doodle-planet.svg'}
          alt="Saturn Planet Doodle"
          width={180}
          height={180}
          className="object-contain"
        />
        {/* Floating small black 4-point stars */}
        <span className="absolute -top-1 left-6 text-black text-xs opacity-75">✦</span>
        <span className="absolute bottom-3 right-4 text-black text-sm opacity-75">✦</span>
      </div>

      {/* Floating ABC Blocks & Teal Pencil on Right */}
      <div className="absolute top-8 right-6 sm:right-10 lg:right-16 pointer-events-none z-10 hidden sm:block select-none">
        <div className="relative w-36 sm:w-44 h-36 sm:h-44">
          {/* Faded ABC Building Blocks Outline */}
          <div className="absolute top-2 left-0 w-24 sm:w-28 h-24 sm:h-28 opacity-25">
            <Image
              src={stepByStep.abcDoodle || '/assets/decorative/doodle-abc.svg'}
              alt="ABC Blocks"
              width={110}
              height={110}
              className="object-contain"
            />
          </div>

          {/* Teal Diagonal Pencil */}
          <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 animate-float-delayed">
            <Image
              src={stepByStep.pencilDoodle || '/assets/decorative/doodle-pencil.svg'}
              alt="Teal Pencil Doodle"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <Container>
        {/* Section Heading & Intro Text */}
        <div className="text-center relative z-20 max-w-2xl mx-auto px-4 mb-10 sm:mb-14">
          {/* Centered Abacus Icon above Heading */}
          <Reveal variant="fade-up" delay={0.1}>
            <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 mb-3 opacity-75">
              <Image
                src={stepByStep.abacusIcon || '/assets/decorative/doodle-abacus.svg'}
                alt="Abacus Doodle"
                width={56}
                height={56}
                className="object-contain mx-auto"
              />
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal variant="fade-up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-black tracking-tight leading-[1.18]">
              Step By Step Systematic<br />
              Education
            </h2>
          </Reveal>

          {/* Paragraph */}
          <Reveal variant="fade-up" delay={0.3}>
            <p className="mt-5 text-[15px] sm:text-base text-[#6b6b84] leading-relaxed">
              {stepByStep.description}
            </p>
          </Reveal>
        </div>

        {/* Authentic Large Horizontal Montessori Methodology Card (Matching gdgoenkarohini.com) */}
        <Reveal variant="fade-up" delay={0.35}>
          <div className="relative max-w-5xl mx-auto bg-[#EB1551] rounded-[36px] sm:rounded-[48px] shadow-[0_16px_45px_rgba(235,21,81,0.25)] overflow-hidden p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Organic Photo Frame with playground-1.jpg */}
              <div className="md:col-span-5 flex justify-center relative">
                <div className="relative w-[240px] sm:w-[280px] lg:w-[320px] aspect-square">
                  {/* Floating tilted pencil doodle on top edge of frame */}
                  <div className="absolute -top-3 left-6 sm:left-10 w-8 h-8 sm:w-10 sm:h-10 z-30 pointer-events-none select-none -rotate-45">
                    <Image
                      src="/assets/decorative/doodle-pencil.svg"
                      alt="Pencil Doodle"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  {/* Top Orange Accent Dot */}
                  <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f7941e] z-20 shadow-sm" />

                  {/* Lower Right Accent Dot */}
                  <div className="absolute bottom-1 sm:bottom-2 right-4 sm:right-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#f7941e] z-20 shadow-sm" />

                  {/* Organic Blob Masked Toddler Photo */}
                  <div className="w-full h-full rounded-[48%_52%_45%_55%/50%_45%_55%_50%] overflow-hidden border-4 border-white shadow-md relative bg-teal-50">
                    <Image
                      src={stepByStep.montessoriImage || '/assets/gallery/playground-1.jpg'}
                      alt="Montessori Child Sliding"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 280px, 320px"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Title, Long Description & Learn More CTA */}
              <div className="md:col-span-7 flex flex-col justify-center text-left relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight mb-4">
                  {stepByStep.montessoriHeading}
                </h3>

                <p className="text-[14px] sm:text-[15px] lg:text-base text-white/95 leading-relaxed mb-6 font-normal">
                  {stepByStep.montessoriDescription}
                </p>

                <div className="flex items-center justify-between">
                  <Link
                    href={stepByStep.montessoriHref || '/montessori-methodology'}
                    className="inline-flex flex-col items-start font-bold text-sm sm:text-base text-white hover:text-white/80 transition-colors group"
                  >
                    <span>Learn More</span>
                    {/* Authentic yellow wavy underline matching live site */}
                    <svg
                      width="64"
                      height="8"
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
                  </Link>

                  {/* Authentic Sun Rays Doodle from live site */}
                  <div className="w-16 sm:w-20 select-none pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 416 226.1"
                      className="w-full h-auto"
                      aria-hidden="true"
                    >
                      <g>
                        <path
                          fill="#FFC492"
                          d="M81.9,215.6c6-53.1,34.1-106,84.4-128.8c24-10.9,51.8-14.3,77.3-7c25.5,7.3,47.1,24.9,62.4,46.2 c18.9,26.4,28.5,58,33.9,89.7c-0.3-0.1-0.6-0.1-0.9-0.1H81.9z"
                        />
                        <polygon fill="#FFC492" points="208.5,68.2 201.2,17.3 220.5,16.4 216.7,68.2" />
                        <polygon fill="#FF986D" points="81.9,138.8 23.6,118.2 33.3,96.8 86.3,129.9" />
                        <polygon fill="#FF986D" points="341.9,142 388.9,101.9 402.5,120.9 347.4,150.3" />
                        <polygon fill="#FF986D" points="264.1,75.1 274.2,14.1 297,19.9 273.6,77.9" />
                        <polygon fill="#FF986D" points="161.4,73.8 130,20.6 151.1,10.4 170.5,69.8" />
                        <polygon fill="#FFC492" points="115,101.1 76.7,66.7 91,53.7 121.3,95.8" />
                        <polygon fill="#FFC492" points="64.6,186.3 13.1,184.6 15.6,165.5 65.9,178.2" />
                        <polygon fill="#FFC492" points="349.8,189.5 398.7,173.5 402.9,192.3 351.3,197.6" />
                        <polygon fill="#FFC492" points="301.2,103.1 328.4,59.4 343.7,71.2 307.5,108.4" />
                        <path
                          fill="#3e2723"
                          d="M162.6,124.7c-2,3.8-6,6.7-10.3,6.5c-4.6-0.1-7.1-3.1-9.8-6.4c-0.2-0.2-0.5,0-0.5,0.3c0.1,0.6,0.3,1.2,0.5,1.8 c-1.2,0.1-2.2,0.8-3.3,1.2c-1.3,0.5-2.6,0.7-3.8,1.3c-0.4,0.2-0.2,0.8,0.2,0.8c1.5,0.2,3-0.3,4.4-0.9c1-0.4,2.1-0.9,2.7-1.9 c0.2,0.4,0.5,0.8,0.8,1.2c-0.8,0.6-1.5,1.4-2.2,2.1c-0.6,0.7-1.4,1.4-1.7,2.2c-0.2,0.6,0.5,1.1,1,0.8c0.8-0.4,1.5-1.4,2.1-2.1 c0.6-0.7,1.2-1.4,1.7-2.1c2.2,2,5.4,3.2,8.2,3.2c4.9,0,9.1-3.3,10.6-7.9C163.3,124.6,162.8,124.4,162.6,124.7z"
                        />
                        <path
                          fill="#3e2723"
                          d="M261,126.9c2,3.8,6,6.7,10.3,6.5c4.6-0.1,7.1-3.1,9.8-6.4c0.2-0.2,0.5,0,0.5,0.3c-0.1,0.6-0.3,1.2-0.5,1.8 c1.2,0.1,2.2,0.8,3.3,1.2c1.3,0.5,2.6,0.7,3.8,1.3c0.4,0.2,0.2,0.8-0.2,0.8c-1.5,0.2-3-0.3-4.4-0.9c-1-0.4-2.1-0.9-2.7-1.9 c-0.2,0.4-0.5,0.8-0.8,1.2c0.8,0.6,1.5,1.4,2.2,2.1c0.6,0.7,1.4,1.4,1.7,2.2c0.2,0.6-0.5,1.1-1,0.8c-0.8-0.4-1.5-1.4-2.1-2.1 c-0.6-0.7-1.2-1.4-1.7-2.1c-2.2,2-5.4,3.2-8.2,3.2c-4.9,0-9.1-3.3-10.6-7.9C260.2,126.8,260.8,126.6,261,126.9z"
                        />
                        <path
                          fill="#FF986D"
                          d="M127.6,154.8c-4.7-2.2-10.7,0.3-11.7,5.6c-0.1,0.6-0.1,1.2-0.1,1.8c-0.8,3.8,1.2,6.7,4.1,8.2 c0.6,0.8,1.4,1.4,2.2,1.6c2.1,0.7,4.2,0.1,5.9-1.2c1.8-0.8,3.3-2.3,4.2-4.6C133.7,161.9,131.8,156.7,127.6,154.8z"
                        />
                        <path
                          fill="#FF986D"
                          d="M295.4,156.2c-4-1.9-9.1-0.6-11.4,3.3c-1.1,1.9-1.2,4.2-0.4,6c0.1,0.5,0.2,1,0.3,1.5c1.3,3.7,4.9,6.1,8.7,5.6 c3.7-0.5,6.9-3.3,7.5-7C300.8,161.9,298.9,157.9,295.4,156.2z"
                        />
                        <path
                          fill="#3e2723"
                          d="M209,176.5c-0.1-0.4-0.6-0.4-0.8-0.1c-0.5,0.9-1,2-2,2.4c-1.2,0.4-2.4-0.1-3.2-1c-0.4-0.5-1.2,0.1-0.9,0.7 c0.9,1.5,2.7,2.3,4.4,1.8C208,179.8,209.4,178.2,209,176.5z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
