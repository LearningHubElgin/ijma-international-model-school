import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { InnerPageBanner } from '@/components/layout/InnerPageBanner';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ClipboardList, ArrowRight, FileCheck, HelpCircle, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admissions Overview | IJMA International Model School Topsia Kolkata',
  description:
    'Join our educational family in Topsia, Kolkata. Learn about the admission procedure, eligibility criteria from Nursery to Class XII, and how to apply to IJMA International Model School.',
};

export default function AdmissionsPage() {
  const steps = [
    {
      num: '01',
      title: 'Submit Enquiry or Form',
      desc: 'Complete the online application or visit our Topsia Kolkata campus to fill out an admission registration form.',
    },
    {
      num: '02',
      title: 'Campus Tour & Interaction',
      desc: 'Tour our air-conditioned smart classrooms, STEM labs, and meet our academic counselors with your child.',
    },
    {
      num: '03',
      title: 'Document Verification',
      desc: 'Submit birth certificate, previous school records / report cards, address proof, and passport photos.',
    },
    {
      num: '04',
      title: 'Enrolment Confirmation',
      desc: 'Complete the admission formalities to secure your child’s seat in their respective academic class.',
    },
  ];

  return (
    <main className="flex-1">
      <InnerPageBanner
        title="Admissions 2024-25"
        badge="Join IJMA International Model School"
        breadcrumbs={[{ label: 'Admissions' }]}
      />

      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="A Simple & Transparent Journey"
            title="Step-by-Step Admission Process"
            description="We make school admission welcoming, comfortable, and straightforward for parents and students in Kolkata."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((st, i) => (
              <Reveal key={st.num} variant="fade-up" delay={0.1 * (i + 1)} className="h-full">
                <div className="bg-[#fff9f5] border border-peach rounded-card p-7 shadow-card h-full flex flex-col justify-between">
                  <div>
                    <span className="font-sans font-extrabold text-3xl text-[#0A5C36] block mb-3">
                      {st.num}
                    </span>
                    <h3 className="font-bold text-xl text-black mb-2">{st.title}</h3>
                    <p className="text-sm text-body leading-relaxed">{st.desc}</p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-peach/80">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted">Step {i + 1} of 4</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Quick Action Navigation Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal variant="fade-up" delay={0.1}>
              <div className="bg-white rounded-card p-8 border-2 border-peach hover:border-[#0A5C36] transition-all duration-300 shadow-card text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-peach flex items-center justify-center text-[#0A5C36] mb-4">
                  <ClipboardList className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-xl text-black mb-2">Online Application</h4>
                <p className="text-xs text-body leading-relaxed mb-6">
                  Fill out our comprehensive online admission registration form in minutes.
                </p>
                <Button variant="primary" href="/admissions/application-form" className="w-full">
                  Fill Application Form
                </Button>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.2}>
              <div className="bg-white rounded-card p-8 border-2 border-peach hover:border-[#0A5C36] transition-all duration-300 shadow-card text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-peach flex items-center justify-center text-[#0a6375] mb-4">
                  <FileCheck className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-xl text-black mb-2">Eligibility & Fees</h4>
                <p className="text-xs text-body leading-relaxed mb-6">
                  Review class eligibility criteria, fee brackets, and required enrollment documents.
                </p>
                <Button variant="outline" href="/admissions/eligibility-fee" className="w-full">
                  View Fee Details
                </Button>
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.3}>
              <div className="bg-white rounded-card p-8 border-2 border-peach hover:border-[#0A5C36] transition-all duration-300 shadow-card text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-peach flex items-center justify-center text-[#f7941e] mb-4">
                  <Download className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-xl text-black mb-2">Campus Enquiries</h4>
                <p className="text-xs text-body leading-relaxed mb-6">
                  Contact our admission counselors directly or visit our Topsia Kolkata campus office.
                </p>
                <Button variant="secondary" href="/contact-us" className="w-full">
                  Contact Admissions
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
