import React from 'react';
import { Metadata } from 'next';
import { ProgrammeDetailTemplate } from '@/components/programmes/ProgrammeDetailTemplate';

export const metadata: Metadata = {
  title: 'Mom and Me Programme (12-18 Months) | GD Goenka La Petite Rohini',
  description:
    'A special bonding and developmental foundation programme for toddlers and mothers at GD Goenka La Petite, Rohini.',
};

export default function MomAndMePage() {
  return (
    <ProgrammeDetailTemplate
      title="Mom and Me"
      ageRange="12 - 18 Months"
      badge="Early Bonding & Sensory Discovery"
      overview="The Mom and Me programme at GD Goenka La Petite is a warm, reassuring bridge between home and the outside world. Designed for infants and toddlers accompanied by their mothers, this nurturing programme creates a joyful environment for gentle social exposure, sensory exploration, and emotional security."
      objectives={[
        'Sensory-motor integration through tactile apparatus',
        'Early language exposure and musical rhythm imitation',
        'Strengthening maternal-child attachment through interactive play',
        'Gentle socialization in safe, sanitized indoor spaces',
        'Vestibular balance and gross motor coordination exercises',
      ]}
      scheduleHighlights={[
        { time: '09:30 AM - 10:00 AM', activity: 'Circle Time & Melodic Greeting Songs' },
        { time: '10:00 AM - 10:45 AM', activity: 'Sensory-Motor Apparatus & Tactile Exploration' },
        { time: '10:45 AM - 11:15 AM', activity: 'Nutrition & Guided Infant Snack Time' },
        { time: '11:15 AM - 11:45 AM', activity: 'Story Time, Puppet Interaction & Goodbye Song' },
      ]}
      image="/assets/programmes/programme-mom-me.svg"
    />
  );
}
