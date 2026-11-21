'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { InnerPageBanner } from '@/components/layout/InnerPageBanner';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Clock, CheckCircle2, ChevronRight, Award } from 'lucide-react';

interface ProgrammeDetailProps {
  title: string;
  ageRange: string;
  badge?: string;
  overview: string;
  objectives: string[];
  scheduleHighlights: { time: string; activity: string }[];
  image: string;
}

const allProgrammes = [
  {
    title: 'Mom and Me (12 months-18 months)',
    href: '/programmes/mom-and-me',
    icon: '👶',
  },
  {
    title: 'Play Group (18 months -24 months)',
    href: '/programmes/play-group',
    icon: '🦉',
  },
  {
    title: 'Pre Nursery Age group- 2 years to 3 years',
    href: '/programmes/pre-nursery-age-group-2-years-to-3-years',
    icon: '🎨',
  },
  {
    title: 'Nursery Age group- 3 years to 4 years',
    href: '/programmes/nursery-age-group-3-years-to-4-years',
    icon: '📚',
  },
  {
    title: 'Day Care (12 months - 12 years)',
    href: '/programmes/day-care-age-group-12-months-to-12-years',
    icon: '☀️',
  },
  {
    title: 'After School Activity Center (2 years - 12 years)',
    href: '/programmes/after-school-activity-center-2-years-12-years',
    icon: '⚽',
  },
];

export function ProgrammeDetailTemplate({
  title,
  ageRange,
  badge = 'Early Learning Milestone',
  overview,
  objectives,
  scheduleHighlights,
  image,
}: ProgrammeDetailProps) {
  const pathname = usePathname();

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

      <Section bg="white" className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Sidebar: All Programmes List (Matching Image 1) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="bg-[#fff9f5] border border-orange-100 rounded-3xl p-4 sm:p-5 shadow-sm space-y-2.5">
                <h4 className="font-bold text-gray-900 text-lg px-2 pb-2 border-b border-orange-100">
                  Our Programmes
                </h4>
                {allProgrammes.map((prog) => {
                  const isActive = pathname === prog.href;
                  return (
                    <Link
                      key={prog.href}
                      href={prog.href}
                      className={`flex items-center justify-between p-3.5 rounded-2xl text-[14px] font-bold transition-all duration-200 ${
                        isActive
                          ? 'bg-white text-[#0A5C36] shadow-md border-l-4 border-[#0A5C36]'
                          : 'text-gray-700 hover:bg-white hover:text-[#0A5C36] hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{prog.icon}</span>
                        <span className="line-clamp-1">{prog.title}</span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 flex-shrink-0 transition-transform ${
                          isActive ? 'text-[#0A5C36] translate-x-0.5' : 'text-gray-400'
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Need Guidance CTA Card */}
              <div className="bg-gradient-to-br from-[#0A5C36] to-[#10B981] rounded-3xl p-6 text-white shadow-md">
                <span className="font-bubblegum text-sm tracking-wider uppercase opacity-90">
                  Admissions Open
                </span>
                <h4 className="text-xl font-bold mt-1">Want to enroll your child?</h4>
                <p className="text-xs text-white/90 mt-2 leading-relaxed">
                  Book a personalized campus walkthrough and interact with our Montessori guides.
                </p>
                <div className="mt-4">
                  <Button
                    variant="primary"
                    size="sm"
                    href="/admissions"
                    className="bg-white text-[#0A5C36] hover:bg-[#064E3B] hover:text-white px-5 py-2.5 rounded-full font-bold shadow-sm"
                  >
                    Enquire Today
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content Area (Matching Image 1) */}
            <div className="lg:col-span-8 space-y-8">
              {/* Heading with Rainbow Illustration */}
              <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                    <span className="text-[#0A5C36] block">We Break Boundaries To Craft</span>
                    <span className="text-[#10B981]">Extraordinary Experiences.</span>
                  </h2>
                </div>

                {/* Cute Rainbow Illustration with Smiling Sun */}
                <div className="w-28 sm:w-36 h-20 sm:h-24 relative flex-shrink-0 select-none pointer-events-none">
                  <svg viewBox="0 0 160 120" className="w-full h-full">
                    {/* Rainbow Arcs */}
                    <path d="M 20 110 A 60 60 0 0 1 140 110" fill="none" stroke="#0A5C36" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 28 110 A 52 52 0 0 1 132 110" fill="none" stroke="#10B981" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 36 110 A 44 44 0 0 1 124 110" fill="none" stroke="#ffeb3b" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 44 110 A 36 36 0 0 1 116 110" fill="none" stroke="#4caf50" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 52 110 A 28 28 0 0 1 108 110" fill="none" stroke="#00b4b6" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 60 110 A 20 20 0 0 1 100 110" fill="none" stroke="#79529cf0" strokeWidth="8" strokeLinecap="round" />
                    {/* Smiling Sun at the end */}
                    <circle cx="130" cy="40" r="18" fill="#fbc02d" />
                    <circle cx="125" cy="38" r="2.5" fill="#3e2723" />
                    <circle cx="135" cy="38" r="2.5" fill="#3e2723" />
                    <path d="M 126 44 Q 130 48 134 44" stroke="#3e2723" strokeWidth="2" fill="none" strokeLinecap="round" />
                    {/* Sun Rays */}
                    <line x1="130" y1="16" x2="130" y2="10" stroke="#fbc02d" strokeWidth="3" strokeLinecap="round" />
                    <line x1="150" y1="26" x2="155" y2="22" stroke="#fbc02d" strokeWidth="3" strokeLinecap="round" />
                    <line x1="154" y1="40" x2="160" y2="40" stroke="#fbc02d" strokeWidth="3" strokeLinecap="round" />
                    <line x1="110" y1="26" x2="105" y2="22" stroke="#fbc02d" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Photo Frame */}
              <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-lg bg-orange-50">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 750px"
                />
              </div>

              {/* Programme Overview Text */}
              <Reveal variant="fade-up" delay={0.2}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-peach text-[#0A5C36] text-sm font-bold mb-3">
                  <Clock className="w-4 h-4" />
                  <span>Age Group: {ageRange}</span>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {overview}
                </p>
              </Reveal>

              {/* Objectives Grid */}
              <Reveal variant="fade-up" delay={0.3}>
                <div className="bg-[#fff9f5] border border-orange-100 rounded-3xl p-6 sm:p-8 space-y-4">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#0A5C36]" />
                    <span>Key Developmental Objectives</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {objectives.map((obj, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Daily Schedule Highlights */}
              <Reveal variant="fade-up" delay={0.4}>
                <div className="space-y-4">
                  <h3 className="font-bold text-xl text-gray-900">
                    A Typical Day in this Programme
                  </h3>
                  <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
                    {scheduleHighlights.map((slot, i) => (
                      <div
                        key={i}
                        className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-gray-50/50 transition-colors"
                      >
                        <span className="font-bold text-sm text-[#0a6375] bg-teal-50 px-3 py-1 rounded-full w-fit">
                          {slot.time}
                        </span>
                        <span className="text-sm text-gray-700 font-medium">
                          {slot.activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
