import React from 'react';
import { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/montessori/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'School Curriculum | IJMA International Model School Topsia Kolkata',
  description:
    'Our English Medium CBSE curriculum seamlessly integrates rigorous academics with Islamic Tarbiyah, Quranic Tajweed, Arabic language, and STEM innovation in Topsia, Kolkata.',
};

export default function CurriculumPage() {
  return (
    <PillarPageTemplate
      title="Our Curriculum"
      badge="Integrated Academic & Islamic Pedagogy"
      description="The curriculum at IJMA International Model School in Topsia, Kolkata harmoniously blends the rigorous CBSE educational framework with Islamic Tarbiyah, moral philosophy, and hands-on scientific discovery."
      extendedParagraphs={[
        'Our curriculum covers English language fluency, mathematical reasoning, scientific enquiry, social sciences, computer science, and multilingual literacy (English, Urdu, Hindi, Bengali, Arabic). Every theme connects classroom theory with experiential exploration.',
        'We emphasize hands-on manipulation and digital learning over passive memorization. Classrooms are equipped with interactive smart boards, robotics prototyping kits, and rich visual libraries that engage young minds.',
      ]}
      keyHighlights={[
        'CBSE English Medium curriculum with balanced formative assessments',
        'Quranic Tajweed recitation, daily Duas, and Islamic history',
        'Hands-on STEM robotics laboratory and mathematics models',
        'Multilingual language skills: English, Urdu, Hindi, Bengali & Arabic',
        'Continuous developmental tracking in air-conditioned smart classrooms',
      ]}
      image="/assets/ijma/photos/Art-class.jpg"
    />
  );
}
