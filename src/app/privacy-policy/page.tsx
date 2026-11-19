import React from 'react';
import { Metadata } from 'next';
import { InnerPageBanner } from '@/components/layout/InnerPageBanner';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { siteConfig } from '@/content/site.config';

export const metadata: Metadata = {
  title: 'Privacy Policy | GD Goenka La Petite Rohini',
  description:
    'Our commitment to student and family data protection and transparent privacy practices at GD Goenka La Petite Rohini.',
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
                Last Updated: March 2024
              </p>
              <p className="mt-4">
                At <strong>{siteConfig.school.fullName}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the School&rdquo;), we deeply respect the privacy of our students, parents, and visitors. This Privacy Policy details how we collect, store, utilize, and protect personal information collected through our official website (<code>gdgoenkarohini.com</code>) and admissions administration.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-3">
                1. Information We Collect
              </h2>
              <p>We may collect personal details when you interact with our website or submit inquiries:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Parent & Guardian Information:</strong> Full names, residential addresses, contact telephone numbers, and email addresses.</li>
                <li><strong>Child Details:</strong> Full name, date of birth, gender, and previous preschool background for admission placement.</li>
                <li><strong>Medical & Safety Records:</strong> Immunization details, allergies, and emergency medical contacts submitted during formal enrollment.</li>
                <li><strong>Technical Diagnostics:</strong> Standard non-identifying browser data, device types, and pages visited to ensure website performance and security.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-3">
                2. How We Use Collected Data
              </h2>
              <p>Collected data is used strictly for legitimate preschool educational purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Processing admissions applications and scheduling campus tours.</li>
                <li>Communicating academic calendars, developmental milestones, and emergency announcements.</li>
                <li>Ensuring child safety, medical readiness, and authorized guardian verification.</li>
                <li>Complying with regulatory directives established by the Directorate of Education, Delhi.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-3">
                3. Student Image & Media Consent
              </h2>
              <p>
                Photographs and video documentation of school events, celebrations, and classroom activities are shared only with explicit, written parental consent obtained during enrollment. We do not sell or monetize student photographs under any circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-3">
                4. Data Security & Storage
              </h2>
              <p>
                We enforce rigorous technical and administrative security measures to protect physical documents and digital databases from unauthorized access, accidental alteration, or disclosure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mb-3">
                5. Contacting the School
              </h2>
              <p>
                For questions regarding this privacy policy or to update personal information, please contact our administrative desk:
              </p>
              <div className="mt-4 p-5 rounded-2xl bg-[#fff9f5] border border-peach text-sm">
                <p><strong>GD Goenka La Petite, Rohini</strong></p>
                <p>{siteConfig.contact.address}</p>
                <p>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-primary">{siteConfig.contact.email}</a></p>
                <p>Phone: {siteConfig.contact.phones.join(', ')}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
