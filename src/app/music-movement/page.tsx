import React from 'react';
import { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/montessori/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'Nasheed, Rhythm & Movement | IJMA International Model School Topsia Kolkata',
  description:
    'Rhythmic coordination, vocal recitation of Islamic Nasheeds, and physical movement exercises fostering confidence and balance in Topsia, Kolkata.',
};

export default function MusicMovementPage() {
  return (
    <PillarPageTemplate
      title="Nasheed, Vocal Articulation & Movement"
      badge="Harmony, Rhythm & Balance"
      description="Vocal expression, rhythmic coordination, and physical movement sessions form a joyful part of early childhood at IJMA International Model School in Topsia, Kolkata."
      extendedParagraphs={[
        'Through melodic recitation of Islamic Nasheeds, poems, and rhythm games, children develop refined auditory listening, memory retention, and phonetic fluency.',
        'Movement sessions incorporate coordination games, balance drills, and calisthenics that build core physical stamina, spatial awareness, and healthy motor agility.',
      ]}
      keyHighlights={[
        'Melodic Islamic Nasheeds praising Allah and inspiring moral kindness',
        'Vocal recitation circles strengthening breath control, Tajweed, and diction',
        'Bilateral body coordination exercises and balance games',
        'Eurhythmic clap drills fostering active auditory focus and rhythm',
        'Joyful, wholesome creative movement in air-conditioned spaces',
      ]}
      image="/assets/ijma/photos/Art-seminer.jpeg"
    />
  );
}
