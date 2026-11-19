import React from 'react';
import { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/montessori/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'Experiential Field Trips | GD Goenka La Petite Rohini',
  description:
    'Extending learning beyond the classroom with curated, safe experiential educational visits across Delhi-NCR.',
};

export default function FieldTripsPage() {
  return (
    <PillarPageTemplate
      title="Field Trips & Excursions"
      badge="Learning in the Real World"
      description="Field trips are an integral component of our experiential pedagogy. We curate safe, structured outdoor visits that transform theoretical concepts into unforgettable sensory memories."
      extendedParagraphs={[
        'Whether visiting a local organic vegetable nursery to touch blooming saplings, touring a community fire station to understand civic heroes, or exploring the interactive National Science Centre, children engage with their environment as curious young researchers.',
        'Safety is our utmost priority during all excursions. Every field trip is conducted in our GPS-tracked school vans, supported by a 1:4 teacher-to-child ratio, trained first-aiders, and verified security protocols.',
      ]}
      keyHighlights={[
        'Botanical gardens, organic farms, and nature exploration',
        'Civic center visits: post offices, fire stations, libraries',
        'Interactive children museums and science planetariums',
        'Strict 1:4 adult-to-child supervision ratio with female attendants',
        'Pre-trip orientation and post-trip sensory reflection journals',
      ]}
      image="/assets/features/feature-trips.svg"
    />
  );
}
