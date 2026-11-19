import React from 'react';
import { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/montessori/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'Speech and Drama | GD Goenka La Petite Rohini',
  description:
    'Playful storytelling, character role-playing, and vocal articulation sessions building stage confidence, vocabulary, and empathy.',
};

export default function SpeechAndDramaPage() {
  return (
    <PillarPageTemplate
      title="Speech and Drama"
      badge="Stage Poise, Voice & Expressive Empathy"
      description="Speech and Drama at GD Goenka La Petite, Rohini provides an imaginative stage where young children discover the magic of spoken language, role assumption, and heartfelt creative expression."
      extendedParagraphs={[
        'Through puppet interactions, improvisational drama games, poetry recitation, and character costume play, children overcome early shyness and develop articulate public speaking skills.',
        'Drama also cultivates empathy: by stepping into the shoes of diverse characters—from gentle forest animals to community helpers—children learn to recognize emotions, listen deeply to others, and cooperate creatively.',
      ]}
      keyHighlights={[
        'Interactive puppet theater and imaginative costume play',
        'Vocal projection, diction, and phonetic articulation exercises',
        'Poetry recitation and choral speaking circles',
        'Improvisational socio-dramatic play nurturing social empathy',
        'Term-end stage showcases celebrating each child’s unique voice',
      ]}
      image="/assets/features/feature-drama.svg"
    />
  );
}
