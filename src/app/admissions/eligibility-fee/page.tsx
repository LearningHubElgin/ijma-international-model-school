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
  title: 'Eligibility & Fee Structure | IJMA International Model School Topsia Kolkata',
  description:
    'Age criteria and fee breakdown for IJMA International Model School, Topsia, Kolkata. Transparent admissions from Nursery to Class XII (Proposed).',
};

export default function EligibilityFeePage() {
  const ageCriteria = [
    { programme: 'Pre-Nursery', age: '2.5 to 3.5 Years', criteria: 'Child should be comfortable in a classroom setting' },
    { programme: 'Nursery', age: '3.5 to 4.5 Years', criteria: 'Basic verbal and motor responsiveness' },
    { programme: 'Kindergarten (KG)', age: '4.5 to 5.5 Years', criteria: 'Preparatory foundation for primary school' },
    { programme: 'Primary Wing (Classes I - V)', age: '6+ Years onwards', criteria: 'Previous report card / transfer certificate' },
    { programme: 'Middle Wing (Classes VI - VIII)', age: '11+ Years onwards', criteria: 'Academic marksheet & personal interaction' },
    { programme: 'Secondary Wing (Classes IX - XII)', age: '14+ Years onwards (Proposed)', criteria: 'Comprehensive evaluation & counseling' },
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
            title="Class Admission Criteria"
            description="Our age requirements comply with modern CBSE guidelines while catering to balanced cognitive and emotional readiness."
          />

          <div className="max-w-4xl mx-auto overflow-hidden rounded-card border border-peach shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0A5C36] text-white text-sm font-sans">
                    <th className="py-4 px-6 font-bold">Class / Wing</th>
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
                      <td className="py-4 px-6 font-semibold text-[#0A5C36]">{item.age}</td>
                      <td className="py-4 px-6">{item.criteria}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* Fee Structure Section */}
      <Section bg="peach">
        <Container>
          <SectionHeading
            eyebrow="Affordable & Transparent"
            title="School Fee Guidelines"
            description="Our fee structure is designed to offer accessible, top-tier CBSE academic standards, air-conditioned smart classrooms, STEM robotics, and certified Karate training in Kolkata."
          />

          <div className="max-w-3xl mx-auto mb-8 p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-800 text-xs sm:text-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Notice for Parents:</span> For exact quarterly tuition fees, admission charges, uniform sets, and school transport routes covering Topsia and Kolkata, please contact our admissions office directly at <strong>+91 75408 55755</strong> or <strong>+91 98316 23162</strong>.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Wing 1 */}
            <div className="bg-white rounded-card p-8 shadow-card border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="font-bubblegum text-sm text-[#0A5C36] uppercase font-bold">Early Years</span>
                <h3 className="text-2xl font-bold text-black mt-1">Pre-Primary (Nursery & KG)</h3>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-extrabold text-black">Contact School</span>
                  <span className="block text-xs text-muted mt-1">Affordable monthly / quarterly plans</span>
                </div>
                <ul className="space-y-3 text-sm text-body">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Playful Montessori Foundation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Basic Arabic & Quranic Duas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Sensory Art & Motor Games</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>AC Child-Safe Classrooms</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-gray-100">
                <Button variant="primary" href="/admissions/application-form" className="w-full">
                  Apply for Nursery / KG
                </Button>
              </div>
            </div>

            {/* Wing 2: Featured */}
            <div className="bg-white rounded-card p-8 shadow-card-hover border-2 border-[#0A5C36] flex flex-col justify-between relative transform md:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0A5C36] text-white text-xs font-bold uppercase tracking-wider">
                Flagship Program
              </div>
              <div>
                <span className="font-bubblegum text-sm text-[#F5A623] uppercase font-bold">Core Schooling</span>
                <h3 className="text-2xl font-bold text-black mt-1">Primary Wing (Classes I - V)</h3>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-extrabold text-black">Contact School</span>
                  <span className="block text-xs text-muted mt-1">Transparent CBSE fee schedule</span>
                </div>
                <ul className="space-y-3 text-sm text-body">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>CBSE English Medium Curriculum</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Islamic Studies, Tajweed & Tarbiyah</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>STEM & Robotics Innovation Lab</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Certified Karate Martial Arts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Annual Sports & Science Exhibitions</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-gray-100">
                <Button variant="primary" href="/admissions/application-form" className="w-full">
                  Apply for Primary
                </Button>
              </div>
            </div>

            {/* Wing 3 */}
            <div className="bg-white rounded-card p-8 shadow-card border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="font-bubblegum text-sm text-[#0a6375] uppercase font-bold">Advanced Studies</span>
                <h3 className="text-2xl font-bold text-black mt-1">Middle & Secondary (VI - XII)</h3>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-extrabold text-black">Contact School</span>
                  <span className="block text-xs text-muted mt-1">Board preparation fee bracket</span>
                </div>
                <ul className="space-y-3 text-sm text-body">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Advanced Mathematics & Sciences</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Languages (English, Urdu, Hindi, Arabic)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Seminars, Debates & Exhibitions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>National Education Day & Honors</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-gray-100">
                <Button variant="outline" href="/contact-us" className="w-full">
                  Enquire for Middle / Secondary
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
