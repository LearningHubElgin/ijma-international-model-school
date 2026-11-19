import React from 'react';
import { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/montessori/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'Music & Movement | GD Goenka La Petite Rohini',
  description:
    'Rhythm, vocal melodies, and body coordination sessions that nurture balance, sensory harmony, and emotional freedom.',
};

export default function MusicMovementPage() {
  return (
    <PillarPageTemplate
      title="Music & Movement"
      badge="Harmony, Rhythm & Balance"
      description="Music and movement form the heartbeat of early childhood expression. Through melodic games, acoustic percussion, and guided kinesthetic dance, children develop bilateral brain coordination and joyful release."
      extendedParagraphs={[
        'Neuroscience confirms that music education in the early years accelerates phonetic listening, spatial-temporal cognition, and emotional self-regulation. Our music curriculum introduces pentatonic scales, xylophones, hand drums, and folk rhythm clapping.',
        'Movement sessions incorporate Dalcroze Eurhythmics and creative dance routines that strengthen vestibular awareness, posture control, and gross motor fluidity.',
      ]}
      keyHighlights={[
        'Acoustic percussion instruments: drums, tambourines, xylophones',
        'Eurhythmic musical games fostering active auditory listening',
        'Bilateral body coordination through rhythmic folk dance',
        'Vocal singing circles that strengthen breath control and phonics',
        'Mindful relaxation and soothing classical auditory interludes',
      ]}
      image="/assets/features/feature-music.svg"
    />
  );
}
