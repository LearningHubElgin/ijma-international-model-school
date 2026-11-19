import React from 'react';
import Image from 'next/image';
import { InnerPageBanner } from '@/components/layout/InnerPageBanner';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

interface PillarPageProps {
  title: string;
  badge: string;
  description: string;
  extendedParagraphs: string[];
  keyHighlights: string[];
  image: string;
}

export function PillarPageTemplate({
  title,
  badge,
  description,
  extendedParagraphs,
  keyHighlights,
  image,
}: PillarPageProps) {
  return (
    <main className="flex-1">
      <InnerPageBanner
        title={title}
        badge={badge}
        breadcrumbs={[
          { label: 'Montessori', href: '/montessori-methodology' },
          { label: title },
        ]}
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal variant="fade-up" delay={0.1}>
                <span className="font-bubblegum text-lg text-primary uppercase tracking-wide">
                  {badge}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-black mt-2 leading-tight">
                  {title}
                </h2>
              </Reveal>

              <Reveal variant="fade-up" delay={0.2}>
                <p className="text-body text-base sm:text-lg leading-relaxed font-medium">
                  {description}
                </p>
              </Reveal>

              {extendedParagraphs.map((para, i) => (
                <Reveal key={i} variant="fade-up" delay={0.25 + i * 0.1}>
                  <p className="text-body text-base leading-relaxed">
                    {para}
                  </p>
                </Reveal>
              ))}

              {/* Highlights Box */}
              <Reveal variant="fade-up" delay={0.4}>
                <div className="bg-[#fff9f5] border border-peach rounded-card p-6 sm:p-8 space-y-3 mt-6">
                  <h3 className="font-bold text-xl text-black flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span>Key Pedagogical Highlights</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {keyHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-body">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal variant="fade-up" delay={0.5}>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" href="/admissions/application-form">
                    Enroll Your Child
                  </Button>
                  <Button variant="outline" size="lg" href="/contact-us">
                    Schedule a Campus Visit
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <Reveal variant="zoom-in" delay={0.2}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-peach">
                  <Image src={image} alt={title} fill className="object-cover" priority />
                </div>
              </Reveal>

              <div className="mt-6 bg-[#0a6375] text-white rounded-card p-6 shadow-lg">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#f7941e]" />
                  <span>The Montessori Edge</span>
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  Children instructed under authentic Montessori principles exhibit superior executive function, social problem solving, and intrinsic reading comprehension.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
