import React from 'react';
import { Metadata } from 'next';
import { InnerPageBanner } from '@/components/layout/InnerPageBanner';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { siteConfig } from '@/content/site.config';

export const metadata: Metadata = {
  title: 'Privacy Policy | IJMA International Model School Topsia Kolkata',
  description:
    'Our commitment to student and family data protection and transparent privacy practices at IJMA International Model School in Topsia, Kolkata.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <InnerPageBanner
        title="Privacy Policy"
        badge="Legal & Transparency"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <Section bg="white">
        <Container size="narrow">
          <div className="prose prose-slate max-w-none space-y-8 text-body text-base leading-relaxed">
            <div>
              <p className="text-sm text-muted">
                Last Updated: November 2024
              </p>
              <p className="mt-4">
                At <strong>{siteConfig.school.fullName}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the School&rdquo;), located at 32/3, Topsia Rd, Topsia, Kolkata, West Bengal 700046, we deeply respect the privacy of our students, parents, and website visitors. This Privacy Policy details how we collect, store, utilize, and protect personal information collected through our official website and school administration.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-3">
                1. Information We Collect
              </h2>
              <p>We may collect personal details when you interact with our website or submit inquiries:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Parent & Guardian Information:</strong> Full names, residential addresses in Kolkata, contact telephone numbers, and email addresses.</li>
                <li><strong>Student Details:</strong> Full name, date of birth, gender, and previous academic transcripts / report cards.</li>
                <li><strong>Medical & Safety Records:</strong> Immunization details, blood group, allergies, and emergency medical contacts submitted during formal enrollment.</li>
                <li><strong>Technical Diagnostics:</strong> Standard non-identifying browser data to ensure website security and seamless access.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-3">
                2. How We Use Collected Data
              </h2>
              <p>Collected data is used strictly for legitimate educational, administrative, and communication purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Processing admission applications and scheduling campus tours.</li>
                <li>Communicating academic calendars, examination schedules, Tarbiyah milestones, and school notices.</li>
                <li>Ensuring child safety, medical readiness, and verified school transport arrangements.</li>
                <li>Complying with educational regulations established in the state of West Bengal and CBSE directives.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-3">
                3. Student Image & Media Consent
              </h2>
              <p>
                Photographs and video documentation of school events, sports meets, martial arts classes, and project exhibitions are shared for academic showcase only with appropriate parental consent. We never sell, license, or monetize student photographs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-3">
                4. Data Security & Storage
              </h2>
              <p>
                We maintain rigorous technical and administrative security standards to protect physical school documents and digital records against unauthorized access, loss, or disclosure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-3">
                5. Contacting the School Administration
              </h2>
              <p>
                For questions regarding this privacy policy or to update personal information, please contact our administrative desk:
              </p>
              <div className="mt-4 p-5 rounded-2xl bg-[#fff9f5] border border-peach text-sm">
                <p><strong>{siteConfig.school.fullName}</strong></p>
                <p>{siteConfig.contact.address}</p>
                <p>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-[#0A5C36] font-bold">{siteConfig.contact.email}</a></p>
                <p>Phone: {siteConfig.contact.phones.join(', ')}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
