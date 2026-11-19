import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

export function ProgrammesGridSection() {
  const { programmes } = siteConfig;

  return (
    <Section bg="peach" spacing="default">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow={programmes.eyebrow}
            title={programmes.heading}
            description={programmes.description}
            align="left"
            className="mb-0"
          />

          <Reveal variant="fade-in" delay={0.3} className="flex-shrink-0">
            <Button variant="primary" size="md" href={programmes.ctaHref}>
              {programmes.ctaText}
            </Button>
          </Reveal>
        </div>

        {/* 6 Programme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.list.map((prog, index) => (
            <Reveal
              key={prog.id}
              variant="fade-up"
              delay={0.1 * (index + 1)}
              className="h-full"
            >
              <div className="group h-full bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col">
                {/* Image Slot */}
                <div className="relative aspect-[1.46/1] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-106"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  />
                  {/* Age Range Badge Overlay */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-sm text-xs font-bold text-primary">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{prog.ageRange}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 group-hover:text-primary transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-sm text-body leading-relaxed">
                      {prog.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-gray-100">
                    <Link
                      href={prog.href}
                      className="inline-flex items-center gap-1.5 font-bold text-sm text-[#0a6375] hover:text-primary transition-colors"
                    >
                      <span>Explore Programme</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
