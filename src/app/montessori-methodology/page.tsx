import React from 'react';
import { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/montessori/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'Montessori Methodology | GD Goenka La Petite Rohini',
  description:
    'Discover the authentic Montessori methodology practiced at GD Goenka La Petite Rohini. Timeless education for a changing world.',
};

export default function MontessoriMethodologyPage() {
  return (
    <PillarPageTemplate
      title="Montessori Methodology"
      badge="Timeless Education for a Changing World"
      description="Montessori is not just a curriculum; it is a profound scientific approach to early human development. At GD Goenka La Petite Rohini, we provide an authentically prepared environment where children self-select purposeful work and unlock their highest potential."
      extendedParagraphs={[
        'Dr. Maria Montessori observed that young children possess an "absorbent mind" between birth and age six. Our classrooms are organized into five fundamental curriculum areas: Practical Life, Sensorial Discovery, Language Arts, Mathematics, and Cultural Studies.',
        'Rather than passive recipients of lectures, our children manipulate didactic apparatus designed with built-in control of error. When a child fits cylinders into wooden blocks or traces sandpaper letters, they teach themselves through direct sensory feedback.',
      ]}
      keyHighlights={[
        'Self-directed work cycles that develop uninterrupted focus',
        'Multi-sensory apparatus with built-in control of error',
        'Respectful guidance by certified Montessori directresses',
        'Mixed-age collaborative peer mentoring and community harmony',
        'Development of intrinsic motivation rather than external rewards',
      ]}
      image="/assets/features/feature-montessori.svg"
    />
  );
}
