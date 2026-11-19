import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { InnerPageBanner } from '@/components/layout/InnerPageBanner';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Check, AlertTriangle, Phone, FileCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Eligibility & Fee Structure | GD Goenka La Petite Rohini',
  description:
    'Age criteria and fee breakdown for GD Goenka La Petite Preschool, Rohini, Delhi. Transparent early childhood admissions.',
};

export default function EligibilityFeePage() {
  const ageCriteria = [
    { programme: 'Mom and Me', age: '12 to 18 Months', criteria: 'Accompanied by mother / primary guardian' },
    { programme: 'Play Group', age: '18 to 24 Months', criteria: 'Toddlers comfortable with independent movement' },
    { programme: 'Pre Nursery', age: '2 to 3 Years', criteria: 'As of 31st March of the academic year' },
    { programme: 'Nursery', age: '3 to 4 Years', criteria: 'As of 31st March of the academic year' },
    { programme: 'Day Care', age: '12 Months to 12 Years', criteria: 'Full day or half day flexible schedules' },
    { programme: 'Activity Centre', age: '2 to 12 Years', criteria: 'After-school & weekend batches' },
  ];

  return (
    <main className="flex-1">
      <InnerPageBanner
        title="Eligibility & Fee Structure"
        badge="Admissions 2024-25"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Eligibility & Fee' },
        ]}
      />

      {/* Age Eligibility Section */}
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Age Eligibility Norms"
            title="Cohort Admission Criteria"
            description="Our age categories align with the Directorate of Education Delhi guidelines and authentic Montessori stages."
          />

          <div className="max-w-4xl mx-auto overflow-hidden rounded-card border border-peach shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0a6375] text-white text-sm font-sans">
                    <th className="py-4 px-6 font-bold">Programme</th>
                    <th className="py-4 px-6 font-bold">Age Group</th>
                    <th className="py-4 px-6 font-bold">Criteria / Remarks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-peach text-sm text-body">
                  {ageCriteria.map((item, idx) => (
                    <tr
                      key={item.programme}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-[#fff9f5]'}
                    >
                      <td className="py-4 px-6 font-bold text-gray-900">{item.programme}</td>
                      <td className="py-4 px-6 font-semibold text-primary">{item.age}</td>
                      <td className="py-4 px-6">{item.criteria}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* Fee Structure Section with Clear Owner Placeholders */}
      <Section bg="peach">
        <Container>
          <SectionHeading
            eyebrow="Transparent Structure"
            title="School Fee Guidelines"
            description="Our fee structure covers world-class Montessori apparatus, nutritious meals, expert mentors, and enrichment programs."
          />

          {/* Owner Notice Badge */}
          <div className="max-w-3xl mx-auto mb-8 p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-800 text-xs sm:text-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Notice for Administration:</span> The figures below are designated placeholders according to project ground rules. Exact term fees, activity charges, and transport slabs should be updated by the school management in `site.config.ts`.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-white rounded-card p-8 shadow-card border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="font-bubblegum text-sm text-primary uppercase font-bold">Foundation</span>
                <h3 className="text-2xl font-bold text-black mt-1">Play Group & Pre-Nursery</h3>
                <div className="mt-4 mb-6">
                  {/* TODO: Placeholder fee */}
                  <span className="text-3xl font-extrabold text-black">Contact School</span>
                  <span className="block text-xs text-muted mt-1">Quarterly fee structure</span>
                </div>
                <ul className="space-y-3 text-sm text-body">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Montessori Work Cycles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Fresh Nutrition & Meals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Sensory & Art Supplies</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-gray-100">
                <Button variant="primary" href="/admissions/application-form" className="w-full">
                  Apply Now
                </Button>
              </div>
            </div>

            {/* Plan 2: Featured */}
            <div className="bg-white rounded-card p-8 shadow-card-hover border-2 border-primary flex flex-col justify-between relative transform md:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <div>
                <span className="font-bubblegum text-sm text-primary uppercase font-bold">Comprehensive</span>
                <h3 className="text-2xl font-bold text-black mt-1">Nursery Programme</h3>
                <div className="mt-4 mb-6">
                  {/* TODO: Placeholder fee */}
                  <span className="text-3xl font-extrabold text-black">Contact School</span>
                  <span className="block text-xs text-muted mt-1">Quarterly fee structure</span>
                </div>
                <ul className="space-y-3 text-sm text-body">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Complete Academic Syllabus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Smart Activity Suite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Taekwondo & Splash Pool</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Field Trips & Celebrations</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-gray-100">
                <Button variant="primary" href="/admissions/application-form" className="w-full">
                  Apply for Nursery
                </Button>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-card p-8 shadow-card border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="font-bubblegum text-sm text-[#0a6375] uppercase font-bold">Full Support</span>
                <h3 className="text-2xl font-bold text-black mt-1">Day Care & Activities</h3>
                <div className="mt-4 mb-6">
                  {/* TODO: Placeholder fee */}
                  <span className="text-3xl font-extrabold text-black">Contact School</span>
                  <span className="block text-xs text-muted mt-1">Hourly / Monthly plans</span>
                </div>
                <ul className="space-y-3 text-sm text-body">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Flexible Extended Timings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Hygienic Nap & Rest Beds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Guided Homework Assistance</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-gray-100">
                <Button variant="outline" href="/contact-us" className="w-full">
                  Enquire for Day Care
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
