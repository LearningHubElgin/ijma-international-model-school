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
    <Section bg="white" spacing="default" className="relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Floating Decorative Elements */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <Reveal variant="zoom-in" delay={0.2}>
              <div className="relative mx-auto max-w-[460px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-peach/40">
                <Image
                  src={about.mainImage}
                  alt={about.heading}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 460px"
                />
              </div>
            </Reveal>

            {/* Floating Pencil Boy Illustration */}
            <div className="absolute -bottom-10 -left-6 sm:-left-10 w-28 sm:w-36 h-48 sm:h-64 pointer-events-none animate-float-slow hidden sm:block z-20">
              <Image
                src={about.floatingBoy}
                alt="Pencil Boy Illustration"
                fill
                className="object-contain"
              />
            </div>

            {/* Floating Cloud */}
            <div className="absolute -top-8 -right-6 w-28 h-16 pointer-events-none animate-float-reverse hidden sm:block z-10">
              <Image
                src={about.floatingCloud}
                alt="Cloud Shape"
                fill
                className="object-contain opacity-80"
              />
            </div>
          </div>

          {/* Right Column: Copy & Actions */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">
            <Reveal variant="fade-up" delay={0.1}>
              <span className="inline-block font-bubblegum text-lg text-primary tracking-wider uppercase mb-2">
                {about.eyebrow}
              </span>
            </Reveal>

            <Reveal variant="fade-up" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-black leading-tight tracking-[1.3px]">
                {about.heading}
              </h2>
            </Reveal>

            <Reveal variant="fade-up" delay={0.3}>
              <p className="mt-6 text-base sm:text-lg text-body leading-relaxed">
                {about.paragraph1}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.4}>
              <p className="mt-4 text-base text-body leading-relaxed">
                {about.paragraph2}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.5}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button variant="primary" size="lg" href={about.ctaHref}>
                  {about.ctaText}
                </Button>
                <div className="flex items-center gap-3 pl-2">
                  <div className="w-12 h-12 rounded-full bg-peach flex items-center justify-center text-primary font-bold">
                    ★
                  </div>
                  <div>
                    <span className="block font-bold text-black text-sm">Montessori Certified</span>
                    <span className="text-xs text-muted">Holistic Early Learning</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
