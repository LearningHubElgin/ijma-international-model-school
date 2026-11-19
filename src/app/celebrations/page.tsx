import React from 'react';
import { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/montessori/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'Celebrations & Cultural Life | GD Goenka La Petite Rohini',
  description:
    'Experience our vibrant school celebrations, cultural festivals, and community theme days fostering empathy, joy, and unity.',
};

export default function CelebrationsPage() {
  return (
    <PillarPageTemplate
      title="Celebrations & Festivals"
      badge="Joyful Community Life"
      description="Cultural celebrations at GD Goenka La Petite, Rohini are cherished milestones where children discover the beauty of traditions, communal warmth, and international diversity."
      extendedParagraphs={[
        'From Diwali, Christmas, and Eid to Grandparents Day and Earth Day, our campus comes alive with vibrant colors, storytelling, traditional foods, and student stage performances.',
        'These festive occasions build empathy, open-mindedness, and deep social confidence. Children learn the underlying values behind each festival: compassion, generosity, friendship, and care for our planet.',
      ]}
      keyHighlights={[
        'Interactive cultural storytelling and festive dramatizations',
        'Grandparents Day and Family Carnival celebrations',
        'Global Diversity Days introducing world traditions and music',
        'Student stage performances building joyful public presence',
        'Eco-friendly festive craft projects using recycled materials',
      ]}
      image="/assets/features/feature-celebrations.svg"
    />
  );
}
