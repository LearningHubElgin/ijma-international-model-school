import React from 'react';
import { Metadata } from 'next';
import { ProgrammeDetailTemplate } from '@/components/programmes/ProgrammeDetailTemplate';

export const metadata: Metadata = {
  title: 'Play Group (18-24 Months) | GD Goenka La Petite Rohini',
  description:
    'Encouraging exploratory play, motor development, and social curiosity for toddlers 18-24 months at GD Goenka La Petite Rohini.',
};

export default function PlayGroupPage() {
  return (
    <ProgrammeDetailTemplate
      title="Play Group"
      ageRange="18 - 24 Months"
      badge="First Steps to Independence"
      overview="Play Group marks an exciting transition where toddlers begin discovering their independent agency. Our Montessori-prepared classrooms are filled with child-sized shelves, natural wooden materials, and open play opportunities that stimulate fine motor manipulation and joyful curiosity."
      objectives={[
        'Developing fine motor pincer grasp and hand-eye coordination',
        'Building expressive vocabulary through storytelling and songs',
        'Encouraging parallel and cooperative social play with peers',
        'Establishing foundational classroom routines and self-care',
        'Gross motor agility via soft-play climbing and balancing',
      ]}
      scheduleHighlights={[
        { time: '09:00 AM - 09:30 AM', activity: 'Welcoming & Self-Chosen Practical Life Trays' },
        { time: '09:30 AM - 10:15 AM', activity: 'Montessori Sensorial Manipulation & Fine Motor Tasks' },
        { time: '10:15 AM - 10:45 AM', activity: 'Fresh Fruit Snack & Hygiene Etiquette' },
        { time: '10:45 AM - 11:30 AM', activity: 'Outdoor Sandpit, Splash Activities & Free Play' },
        { time: '11:30 AM - 12:00 PM', activity: 'Nursery Rhyme Movement & Dismissal' },
      ]}
      image="/assets/programmes/programme-playgroup.svg"
    />
  );
}
