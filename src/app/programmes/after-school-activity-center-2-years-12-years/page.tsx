import React from 'react';
import { Metadata } from 'next';
import { ProgrammeDetailTemplate } from '@/components/programmes/ProgrammeDetailTemplate';

export const metadata: Metadata = {
  title: 'After School Activity Center (2-12 Years) | GD Goenka La Petite Rohini',
  description:
    'Enriching after-school arts, skating, taekwondo, dance, music, and personality growth in Rohini Sector 3.',
};

export default function ActivityCenterPage() {
  return (
    <ProgrammeDetailTemplate
      title="After School Activity Center"
      ageRange="2 - 12 Years"
      badge="Unleash Creativity & Physical Agility"
      overview="Our Activity Center is an inspiring afternoon and weekend hub for children looking to explore their artistic and athletic passions. Led by certified expert coaches, children cultivate poise, confidence, and specialized talents in a joyful, encouraging community."
      objectives={[
        'Martial Arts & Taekwondo for self-defense and discipline',
        'Roller Skating on smooth dedicated rink surfaces',
        'Classical & Contemporary Dance choreography',
        'Vocal Music, Rhythm, and Keyboard instrumentation',
        'Public Speaking, Elocution, and Personality Development',
      ]}
      scheduleHighlights={[
        { time: '03:30 PM - 04:30 PM', activity: 'Batch 1: Taekwondo & Physical Martial Arts' },
        { time: '04:30 PM - 05:30 PM', activity: 'Batch 2: Roller Skating & Balance Drills' },
        { time: '05:30 PM - 06:30 PM', activity: 'Batch 3: Classical/Western Dance & Creative Art Studio' },
        { time: 'Weekend Specials', activity: 'Speech & Drama Guild, Vocal Music & Robotics' },
      ]}
      image="/assets/programmes/programme-activity.svg"
    />
  );
}
