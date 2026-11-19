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
  title: 'Application Process | GD Goenka La Petite Rohini',
  description:
    'Step-by-step admission guide for parents seeking enrollment at GD Goenka La Petite Preschool, Rohini, Delhi.',
};

export default function ApplicationProcessPage() {
  const steps = [
    {
      step: '01',
      title: 'Online or Campus Enquiry',
      desc: 'Start by filling our online enquiry form or visiting our school office at Bhartiya Jan Sahyog Parishad, Sector 3, Rohini. Receive our detailed prospectus and schedule an interactive campus visit.',
    },
    {
      step: '02',
      title: 'Personalized Campus Tour & Interaction',
      desc: 'Visit our classrooms with your child. Our academic counselor conducts an informal, friendly interaction with the child and explains our Montessori methodology, daily routine, and safety protocols.',
    },
    {
      step: '03',
      title: 'Submission of Application & Documents',
      desc: 'Complete the Admission Application form along with self-attested copies of the child’s birth certificate, immunization record, residence proof, and four passport-sized photographs.',
    },
    {
      step: '04',
      title: 'Enrolment Confirmation & Welcome Kit',
      desc: 'Upon verification and completion of admission fee formalities, your child is formally registered. You will receive an official Welcome Kit containing the school calendar, uniform details, and orientation schedule.',
    },
  ];

  const faqs = [
    {
      q: 'At what age can my child join GD Goenka La Petite?',
      a: 'We welcome children from 12 months in our Mom & Me and Day Care programmes, from 18 months in Play Group, 2 years in Pre-Nursery, and 3 years in Nursery.',
    },
    {
      q: 'Is there a formal interview or test for toddlers?',
      a: 'No. We strictly adhere to child-friendly education norms. There are no written tests or stressful interviews for children or parents. The interaction is an informal, joyful meet-and-greet.',
    },
    {
      q: 'Do you offer transport facilities across Rohini?',
      a: 'Yes, our GPS-enabled, air-conditioned school vans equipped with female attendants and speed governors cover all major sectors of Rohini and surrounding localities.',
    },
    {
      q: 'Can parents observe classroom sessions?',
      a: 'We hold regular Parent-Teacher Orientations, Open Houses, and Grandparents Days. For our Mom & Me programme, mothers actively participate in classroom activities alongside toddlers.',
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
            description="Our admissions process is designed to be joyful, stress-free, and thoroughly transparent for young families."
          />

          <div className="space-y-8 max-w-4xl mx-auto">
            {steps.map((st, i) => (
              <Reveal key={st.step} variant="fade-up" delay={0.1 * (i + 1)}>
                <div className="bg-white rounded-card p-6 sm:p-8 border-2 border-peach hover:border-primary shadow-card transition-all duration-300 flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#0a6375] text-white flex items-center justify-center font-extrabold text-2xl flex-shrink-0 shadow-md">
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
            description="Everything you need to know about starting your child's educational journey with us."
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} variant="fade-up" delay={0.1 * (i + 1)}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-peach/80">
                  <h4 className="font-bold text-lg text-black flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
