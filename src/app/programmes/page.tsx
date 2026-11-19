import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { InnerPageBanner } from '@/components/layout/InnerPageBanner';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/content/site.config';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Preschool Programmes | GD Goenka La Petite Rohini',
  description:
    'Explore our comprehensive early childhood programmes from Mom & Me and Playgroup to Pre-Nursery, Nursery, Day Care, and After School Activity Centre.',
};

export default function ProgrammesOverviewPage() {
  const { programmes } = siteConfig;

  return (
    <main className="flex-1">
      <InnerPageBanner
        title="Our Programmes"
        badge="Nurturing Every Milestone"
        breadcrumbs={[{ label: 'Programmes' }]}
      />

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow={programmes.eyebrow}
            title={programmes.heading}
            description={programmes.description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmes.list.map((prog, index) => (
              <Reveal
                key={prog.id}
                variant="fade-up"
                delay={0.1 * (index + 1)}
                className="h-full"
              >
                <div className="group h-full bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col border border-peach">
                  <div className="relative aspect-[1.46/1] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-106"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    />
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-sm text-xs font-bold text-primary">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{prog.ageRange}</span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-sm text-body leading-relaxed">
                        {prog.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-gray-100">
                      <Link
                        href={prog.href}
                        className="inline-flex items-center gap-2 font-bold text-sm text-[#0a6375] hover:text-primary transition-colors"
                      >
                        <span>View Detailed Curriculum</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Reveal variant="fade-up">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-card bg-peach border border-amber-200">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Sparkles className="w-5 h-5" />
                  <span>Unsure which programme fits your child best?</span>
                </div>
                <Button variant="primary" href="/contact-us">
                  Talk to Our Academic Counselor
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
