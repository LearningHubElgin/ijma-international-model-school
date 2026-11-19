import React from 'react';
import { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/montessori/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'Physical Education & Sports | GD Goenka La Petite Rohini',
  description:
    'Age-appropriate motor development, splash pool fun, outdoor games, and taekwondo building stamina and confidence.',
};

export default function PhysicalEducationPage() {
  return (
    <PillarPageTemplate
      title="Physical Education"
      badge="Strength, Agility & Lifelong Health"
      description="Physical vitality and motor competence are essential building blocks of early childhood. Our physical education programme combines sports coaching, splash pool play, and martial arts in an energetic, safe campus."
      extendedParagraphs={[
        'Young children need uneven, varied surfaces and gross-motor challenges to develop spatial depth perception and muscle stamina. Our outdoor play area features padded obstacle courses, balance beams, turf slides, and a dedicated roller skating rink.',
        'During warmer months, our hygienic splash pool provides guided hydrotherapy and aquatic games that foster water safety, lung capacity, and joyful active recreation.',
      ]}
      keyHighlights={[
        'Splash pool with certified swimming lifeguards and attendants',
        'Introductory Taekwondo coaching for discipline and posture',
        'Roller skating drills on smooth, protective rubberized rinks',
        'Gross-motor obstacle courses enhancing spatial coordination',
        'Annual Sports Day celebrations showcasing teamwork and sportsmanship',
      ]}
      image="/assets/features/feature-pe.svg"
    />
  );
}
