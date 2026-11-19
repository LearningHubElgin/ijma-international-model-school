import React from 'react';
import { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/montessori/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'School Curriculum | GD Goenka La Petite Rohini',
  description:
    'Our integrated early childhood curriculum blends experiential Montessori apparatus with joyful foundational literacy and numeracy.',
};

export default function CurriculumPage() {
  return (
    <PillarPageTemplate
      title="Our Curriculum"
      badge="Integrated & Experiential Pedagogy"
      description="The curriculum at GD Goenka La Petite, Rohini harmoniously integrates the proven Montessori approach with modern developmental psychology and thematic exploration."
      extendedParagraphs={[
        'Our curriculum covers cognitive development, language literacy, mathematical reasoning, gross and fine motor coordination, creative expression, and social-emotional intelligence. Every theme connects classroom activities with real-world sensory experiences.',
        'We emphasize hands-on manipulation over abstract rote-learning. Children trace textured letter shapes, count tangible golden beads to grasp base-ten place value, and observe live botanical specimens in our green science zone.',
      ]}
      keyHighlights={[
        'Phonemic awareness & early multi-sensory reading programmes',
        'Concrete-to-abstract mathematical manipulation and reasoning',
        'Integrated environmental science and botanical exploration',
        'Creative arts, rhythmic movement, and dramatic expression',
        'Continuous developmental assessment without stressful testing',
      ]}
      image="/assets/features/feature-curriculum.svg"
    />
  );
}
