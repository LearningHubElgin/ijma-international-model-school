'use client';

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

export function StepByStepSection() {
  const { stepByStep } = siteConfig;

  return (
    <section
      className="relative overflow-hidden pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 bg-[#FFEFE4]"
      aria-label="Step By Step Systematic Education"
    >
      {/* Floating Saturn Planet with Ring on Left */}
      <div className="absolute top-8 left-4 sm:left-8 lg:left-14 w-28 sm:w-36 lg:w-44 h-28 sm:h-36 lg:h-44 pointer-events-none animate-float-slow z-10 hidden sm:block select-none">
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
      <div className="absolute top-6 right-6 sm:right-10 lg:right-16 pointer-events-none z-10 hidden sm:block select-none">
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

      <Container size="narrow">
        <div className="text-center relative z-20 max-w-2xl mx-auto px-4">
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
      </Container>
    </section>
  );
}
