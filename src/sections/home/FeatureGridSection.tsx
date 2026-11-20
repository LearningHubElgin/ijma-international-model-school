'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

export function FeatureGridSection() {
  // Exclude Montessori from the grid as it is featured prominently as the horizontal card above
  const remainingFeatures = siteConfig.features.filter(
    (f) => f.id !== 'montessori'
  );

  return (
    <section className="bg-[#FFEFE4] pt-2 pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {remainingFeatures.map((feature, index) => (
            <Reveal
              key={feature.id}
              variant="fade-up"
              delay={0.06 * (index + 1)}
              className="h-full"
            >
              <Link
                href={feature.href}
                className="group relative bg-white hover:bg-[#EB1551] rounded-[32px] sm:rounded-[36px] shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(235,21,81,0.25)] transition-all duration-300 overflow-hidden p-5 sm:p-7 flex flex-row items-center gap-5 sm:gap-6 cursor-pointer border border-orange-50/50 hover:border-transparent block"
              >
                {/* Left Side: Organic Blob Masked Image with Accent Dot */}
                <div className="relative w-[110px] sm:w-[130px] md:w-[145px] aspect-square flex-shrink-0 select-none">
                  {/* Top Accent Dot */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#f7941e] z-20 shadow-sm" />

                  {/* Organic Blob Masked Photo */}
                  <div className="w-full h-full rounded-[48%_52%_45%_55%/50%_45%_55%_50%] overflow-hidden border-3 border-white shadow-md relative bg-teal-50">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="150px"
                    />
                  </div>
                </div>

                {/* Right Side: Title & Learn More Link */}
                <div className="flex-1 flex flex-col justify-center text-left relative z-10 pr-6 sm:pr-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0a6375] group-hover:text-white transition-colors duration-300 mb-2 leading-tight">
                    {feature.title}
                  </h3>

                  <div className="inline-flex flex-col items-start font-bold text-sm sm:text-base text-[#0a6375] group-hover:text-white transition-colors duration-300">
                    <span>Learn More</span>
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

                {/* Little diagonal pencil doodle matching live site in top right */}
                <div className="absolute top-3 right-4 sm:top-4 sm:right-5 w-6 h-6 sm:w-7 sm:h-7 pointer-events-none select-none -rotate-45 opacity-80 group-hover:opacity-100 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/assets/decorative/doodle-pencil.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                {/* Sparkles Doodle SVG in bottom right matching live site */}
                <div className="absolute bottom-3 right-4 sm:bottom-4 sm:right-5 pointer-events-none select-none text-[#FFC1A7] group-hover:text-white transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="w-8 h-8 sm:w-10 sm:h-10 fill-current opacity-70 group-hover:opacity-100 transition-opacity"
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
      </Container>
    </section>
  );
}
