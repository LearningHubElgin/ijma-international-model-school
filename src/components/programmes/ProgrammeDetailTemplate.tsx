import React from 'react';
import Image from 'next/image';
import { InnerPageBanner } from '@/components/layout/InnerPageBanner';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Clock, CheckCircle2, Award, Calendar, Sparkles } from 'lucide-react';

interface ProgrammeDetailProps {
  title: string;
  ageRange: string;
  badge?: string;
  overview: string;
  objectives: string[];
  scheduleHighlights: { time: string; activity: string }[];
  image: string;
}

export function ProgrammeDetailTemplate({
  title,
  ageRange,
  badge = 'Early Learning Milestone',
  overview,
  objectives,
  scheduleHighlights,
  image,
}: ProgrammeDetailProps) {
  return (
    <main className="flex-1">
      <InnerPageBanner
        title={title}
        badge={badge}
        breadcrumbs={[
          { label: 'Programmes', href: '/programmes' },
          { label: title },
        ]}
      />

      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal variant="fade-up" delay={0.1}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-peach text-primary text-sm font-bold">
                  <Clock className="w-4 h-4" />
                  <span>Age Group: {ageRange}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-black mt-3 leading-tight">
                  Programme Overview & Philosophy
                </h2>
              </Reveal>

              <Reveal variant="fade-up" delay={0.2}>
                <p className="text-body text-base sm:text-lg leading-relaxed">
                  {overview}
                </p>
              </Reveal>

              {/* Core Developmental Objectives */}
              <Reveal variant="fade-up" delay={0.3}>
                <div className="bg-[#fff9f5] border border-peach rounded-card p-6 sm:p-8 space-y-4">
                  <h3 className="font-bold text-xl text-black flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span>Key Developmental Objectives</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {objectives.map((obj, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-body">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Daily Flow / Schedule Highlights */}
              <Reveal variant="fade-up" delay={0.4}>
                <div>
                  <h3 className="font-bold text-2xl text-black mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#0a6375]" />
                    <span>Daily Activity Flow</span>
                  </h3>
                  <div className="space-y-3">
                    {scheduleHighlights.map((slot, i) => (
                      <div
                        key={i}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-gray-100 bg-white hover:border-primary/40 transition-colors shadow-sm"
                      >
                        <span className="font-bold text-xs uppercase tracking-wider text-primary font-sans sm:w-36">
                          {slot.time}
                        </span>
                        <span className="text-sm text-gray-800 font-medium flex-1 mt-1 sm:mt-0">
                          {slot.activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Action Buttons */}
              <Reveal variant="fade-up" delay={0.5}>
                <div className="pt-4 flex flex-wrap gap-4">
                  <Button variant="primary" size="lg" href="/admissions/application-form">
                    Apply for Admission
                  </Button>
                  <Button variant="outline" size="lg" href="/contact-us">
                    Schedule a Free Trial / Tour
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal variant="zoom-in" delay={0.2}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-peach">
                  <Image src={image} alt={title} fill className="object-cover" priority />
                </div>
              </Reveal>

              {/* Quick Info Card */}
              <div className="bg-[#0a6375] text-white rounded-card p-6 sm:p-8 space-y-4 shadow-xl">
                <span className="font-bubblegum text-[#f7941e] text-lg uppercase tracking-wide">
                  Enrolment Information
                </span>
                <h4 className="text-xl font-bold">Limited Seats Per Cohort</h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  To ensure our certified Montessori educators maintain close observation and individualized pacing, we restrict cohort sizes strictly.
                </p>
                <div className="pt-2">
                  <Button variant="white" size="md" className="w-full" href="/admissions/application-form">
                    Check Seat Availability
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
