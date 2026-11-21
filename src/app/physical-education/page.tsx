import React from 'react';
import { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/montessori/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'Physical Education & Karate | IJMA International Model School Topsia Kolkata',
  description:
    'Certified Karate martial arts training, synthetic turf sprint athletics, and sports coaching fostering strength and discipline in Topsia, Kolkata.',
};

export default function PhysicalEducationPage() {
  return (
    <PillarPageTemplate
      title="Physical Education & Martial Arts"
      badge="Strength, Agility & Islamic Discipline"
      description="Physical vitality and motor competence are essential building blocks of balanced character. Our physical education programme combines certified Karate martial arts coaching, synthetic turf athletics, and sports competitions."
      extendedParagraphs={[
        'The Prophet (peace be upon him) encouraged teaching children archery, swimming, and martial physical fitness. At IJMA, we provide safe synthetic turf sports facilities where students participate in sprint races, relays, and team sports.',
        'Our certified Karate program trains boys and girls in self-defense, mental concentration, and physical stamina in complete Gi uniforms with formal belt advancement grading.',
      ]}
      keyHighlights={[
        'Synthetic turf athletics arena for sprint races, relays, and agility drills',
        'Certified Karate martial arts coaching with official belt grading',
        'Annual Sports Meet with medals, trophies, and house competitions',
        'Emphasis on fair play, mutual respect, and Islamic sportsmanship',
        'Regular fitness assessments promoting lifelong healthy living habits',
      ]}
      image="/assets/ijma/photos/Runnig-student-in-sports-meet.jpg"
    />
  );
}
