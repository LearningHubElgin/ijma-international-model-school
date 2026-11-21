import React from 'react';
import { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/montessori/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'Experiential Field Trips | IJMA International Model School Topsia Kolkata',
  description:
    'Extending learning beyond the classroom with curated, safe experiential visits across Kolkata and West Bengal.',
};

export default function FieldTripsPage() {
  return (
    <PillarPageTemplate
      title="Field Trips & Educational Visits"
      badge="Learning in the Real World"
      description="Field trips are an integral component of our holistic pedagogy. We curate safe, structured educational excursions across Kolkata that transform theoretical classroom concepts into unforgettable real-world learning."
      extendedParagraphs={[
        'Whether touring the Birla Industrial & Technological Museum (BITM) to explore interactive physics exhibits, visiting the Alipore Zoological Gardens to observe biodiversity, or exploring historical landmarks and science planetariums, our students engage with the wider world as eager researchers.',
        'Safety is our top priority on all excursions. Every trip is conducted in our GPS-monitored school transport vans, accompanied by dedicated faculty, female attendants, and certified first-aid provisions.',
      ]}
      keyHighlights={[
        'Visits to science museums, planetariums, and technology centers in Kolkata',
        'Botanical gardens, ecological parks, and nature conservation study',
        'Civic and heritage visits introducing community institutions',
        'Strict adult-to-child supervision ratio with verified security protocols',
        'Pre-trip guided study and post-trip student project presentations',
      ]}
      image="/assets/ijma/photos/Art-Consult.jpeg"
    />
  );
}
