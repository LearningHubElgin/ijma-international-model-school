import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function SmartActivitiesSection() {
  const { activities } = siteConfig;

  return (
    <Section bg="peach" spacing="default">
      <Container>
        <SectionHeading
          eyebrow="Extracurricular Enrichment"
          title={activities.heading}
          description={activities.description}
        />

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {activities.list.map((act, index) => (
            <Reveal
              key={act.id}
              variant="fade-up"
              delay={0.1 * (index + 1)}
              className="h-full"
            >
              <div className="group h-full bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col p-5 text-center border border-peach">
                {/* Image / Thumbnail */}
                <div className="relative aspect-[1.4/1] w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={act.image}
                    alt={act.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                </div>

                <h3 className="font-bold text-lg text-black mb-2 group-hover:text-primary transition-colors">
                  {act.title}
                </h3>

                <p className="text-xs text-body leading-relaxed flex-1">
                  {act.description}
                </p>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center">
                  <span className="font-bubblegum text-xs text-[#0a6375] font-bold">
                    Developmental Skill
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
