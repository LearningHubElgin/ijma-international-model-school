import React from 'react';
import { Metadata } from 'next';
import { ProgrammeDetailTemplate } from '@/components/programmes/ProgrammeDetailTemplate';

export const metadata: Metadata = {
  title: 'Pre-Nursery (2-3 Years) | GD Goenka La Petite Rohini',
  description:
    'Structured sensory experiences, language acquisition, and independent routines for children aged 2-3 years at GD Goenka La Petite, Rohini.',
};

export default function PreNurseryPage() {
  return (
    <ProgrammeDetailTemplate
      title="Pre Nursery"
      ageRange="2 - 3 Years"
      badge="Language & Sensorial Mastery"
      overview="In Pre-Nursery, children experience exponential language development and burgeoning cognitive curiosity. Our syllabus guides children through hands-on sensorial exercises, early phonetic awareness, and collaborative tasks that foster emotional self-regulation and joyful peer connections."
      objectives={[
        'Phonemic sound awareness and multi-word sentence formation',
        'Mathematical concept foundations (sorting, sizing, matching)',
        'Independent dressing, handwashing, and classroom tidying',
        'Creative expression through finger painting and clay molding',
        'Physical agility through structured gym and pool exercises',
      ]}
      scheduleHighlights={[
        { time: '09:00 AM - 09:30 AM', activity: 'Morning Assembly, Yoga Breathing & Weather Chart' },
        { time: '09:30 AM - 10:30 AM', activity: 'Montessori Work Cycle (Math, Language & Sensorial)' },
        { time: '10:30 AM - 11:00 AM', activity: 'Nutritious Breakfast & Table Etiquette' },
        { time: '11:00 AM - 11:45 AM', activity: 'Smart Activity (Art, Craft or Music)' },
        { time: '11:45 AM - 12:30 PM', activity: 'Outdoor Playground & Gross Motor Games' },
      ]}
      image="/assets/programmes/programme-prenursery.svg"
    />
  );
}
