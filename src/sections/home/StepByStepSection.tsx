import React from 'react';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function StepByStepSection() {
  const { stepByStep } = siteConfig;

  return (
    <Section bg="yellow" spacing="sm" className="border-y border-amber-100">
      <Container size="narrow">
        <div className="text-center py-4">
          <Reveal variant="fade-up" delay={0.1}>
            <span className="inline-block font-bubblegum text-lg text-primary tracking-wide uppercase mb-1">
              {stepByStep.eyebrow}
            </span>
          </Reveal>

          <Reveal variant="fade-up" delay={0.2}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black tracking-tight">
              {stepByStep.heading}
            </h3>
          </Reveal>

          <Reveal variant="fade-up" delay={0.3}>
            <p className="mt-4 text-base sm:text-lg text-body leading-relaxed max-w-2xl mx-auto">
              {stepByStep.description}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
