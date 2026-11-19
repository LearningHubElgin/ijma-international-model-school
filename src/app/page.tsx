import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/content/site.config';

export default function HomePage() {
  return (
    <main className="flex-1">
      <div className="py-20 text-center">
        <Container>
          <SectionHeading
            eyebrow={siteConfig.school.tagline}
            title={siteConfig.school.fullName}
            description={siteConfig.school.description}
          />
        </Container>
      </div>
    </main>
  );
}
