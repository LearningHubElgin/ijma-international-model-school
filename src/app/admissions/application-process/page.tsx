import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { InnerPageBanner } from '@/components/layout/InnerPageBanner';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { CheckCircle2, FileText, Calendar, Users, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Application Process | IJMA International Model School Topsia Kolkata',
  description:
    'Step-by-step admission roadmap for parents seeking enrollment at IJMA International Model School in Topsia, Kolkata.',
};

export default function ApplicationProcessPage() {
  const steps = [
    {
      step: '01',
      title: 'Online or Campus Enquiry',
      desc: 'Start by filling our online application form or visiting our school office at 9/1, Topsia Road South, Topsia, Kolkata - 700046. Receive our prospectus and schedule an interactive campus visit.',
    },
    {
      step: '02',
      title: 'Campus Tour & Academic Counseling',
      desc: 'Tour our air-conditioned smart classrooms, STEM robotics lab, and sports arenas. Our academic team conducts a friendly discussion to understand your child’s learning interests.',
    },
    {
      step: '03',
      title: 'Submission of Application & Documents',
      desc: 'Complete the formal admission registration with self-attested copies of the child’s birth certificate, previous academic marksheet/transfer certificate (for Class I and above), address proof, and passport-sized photographs.',
    },
    {
      step: '04',
      title: 'Enrolment Confirmation & Welcome Kit',
      desc: 'Upon verification and completion of admission formalities, your child is formally enrolled. You will receive an official Welcome Kit containing the academic calendar, school uniform specifications, and orientation timetable.',
    },
  ];

  const faqs = [
    {
      q: 'Which classes are open for admission at IJMA International Model School?',
      a: 'We admit students from Pre-Nursery (age 2.5+) through Nursery, KG, Primary Wing (Classes I - V), Middle Wing (Classes VI - VIII), and Secondary Wing (Classes IX - XII - Proposed).',
    },
    {
      q: 'What curriculum does the school follow?',
      a: 'We follow the English Medium CBSE academic framework seamlessly integrated with Islamic Education, Quranic Tajweed, Arabic language, and Tarbiyah moral character formation.',
    },
    {
      q: 'Do you offer safe school transport in Kolkata?',
      a: 'Yes, we provide safe, GPS-monitored school transport vans with dedicated staff and female attendants covering Topsia, Park Circus, Entally, Beniapukur, EM Bypass, Tiljala, and adjoining areas in Kolkata.',
    },
    {
      q: 'Are co-curriculars like Karate and STEM included in regular schooling?',
      a: 'Yes! Certified Karate martial arts training, annual sports athletics, hands-on STEM & Robotics experiments, and art exhibitions are integral parts of the curriculum for all students.',
    },
  ];

  return (
    <main className="flex-1">
      <InnerPageBanner
        title="Application Process"
        badge="Roadmap to Admission"
        breadcrumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: 'Application Process' },
        ]}
      />

      {/* 4 Steps Section */}
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Admissions Roadmap"
            title="How to Enroll Your Child"
            description="Our admissions process is designed to be welcoming, transparent, and supportive for families in Kolkata."
          />

          <div className="space-y-8 max-w-4xl mx-auto">
            {steps.map((st, i) => (
              <Reveal key={st.step} variant="fade-up" delay={0.1 * (i + 1)}>
                <div className="bg-white rounded-card p-6 sm:p-8 border-2 border-peach hover:border-[#0A5C36] shadow-card transition-all duration-300 flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#0A5C36] text-white flex items-center justify-center font-extrabold text-2xl flex-shrink-0 shadow-md">
                    {st.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl sm:text-2xl text-black mb-2">{st.title}</h3>
                    <p className="text-sm sm:text-base text-body leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" href="/admissions/application-form">
              Proceed to Online Application Form
            </Button>
          </div>
        </Container>
      </Section>

      {/* Frequently Asked Questions */}
      <Section bg="peach">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Admissions Frequently Asked Questions"
            description="Everything you need to know about joining IJMA International Model School."
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} variant="fade-up" delay={0.1 * (i + 1)}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-peach/80">
                  <h4 className="font-bold text-lg text-black flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-[#0A5C36] mt-0.5 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="mt-2 text-sm text-body leading-relaxed pl-7">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
