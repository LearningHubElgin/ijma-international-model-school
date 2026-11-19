import React from 'react';
import { Metadata } from 'next';
import { ProgrammeDetailTemplate } from '@/components/programmes/ProgrammeDetailTemplate';

export const metadata: Metadata = {
  title: 'Nursery (3-4 Years) | GD Goenka La Petite Rohini',
  description:
    'Early literacy, numeracy, critical thinking, and social collaboration for children aged 3-4 years at GD Goenka La Petite Rohini.',
};

export default function NurseryPage() {
  return (
    <ProgrammeDetailTemplate
      title="Nursery"
      ageRange="3 - 4 Years"
      badge="Pre-Primary Academic Readiness"
      overview="Our Nursery programme empowers young learners with essential cognitive skills for formal schooling while preserving their joyful love for learning. Children master early literacy, phonics blending, numeric counting and quantities, scientific observation, and expressive dramatics in an inspiring atmosphere."
      objectives={[
        'Full phonetic alphabet recognition and early sight-word reading',
        'Mathematical quantities, numeral associations, and basic patterns',
        'Scientific exploration (plants, seasons, animals, community)',
        'Stage presentation, public speaking, and role-playing confidence',
        'Fine motor pencil grip control and early pre-writing curves',
      ]}
      scheduleHighlights={[
        { time: '09:00 AM - 09:30 AM', activity: 'Greeting Circle & Current Affairs Discussion' },
        { time: '09:30 AM - 10:45 AM', activity: 'Montessori Literacy & Mathematics Apparatus' },
        { time: '10:45 AM - 11:15 AM', activity: 'Wholesome Hot Lunch & Social Conversation' },
        { time: '11:15 AM - 12:00 PM', activity: 'Taekwondo, Skating or Splash Pool Coaching' },
        { time: '12:00 PM - 12:45 PM', activity: 'Story Theatre, Drama & Concept Review' },
      ]}
      image="/assets/programmes/programme-nursery.svg"
    />
  );
}
