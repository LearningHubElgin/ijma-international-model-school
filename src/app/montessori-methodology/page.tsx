import React from 'react';
import { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/montessori/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'Early Childhood & Montessori Pedagogy | IJMA International Model School Kolkata',
  description:
    'Discover hands-on early childhood learning and Montessori-inspired foundational pedagogy at IJMA International Model School in Topsia, Kolkata.',
};

export default function MontessoriMethodologyPage() {
  return (
    <PillarPageTemplate
      title="Foundational Pedagogy & Early Learning"
      badge="Nurturing the Innate Love for Learning"
      description="Our pre-primary wing at IJMA International Model School in Topsia, Kolkata blends proven hands-on sensory learning with Islamic Tarbiyah, giving young children the strongest cognitive and spiritual foundation."
      extendedParagraphs={[
        'Young children learn best through active touch, exploration, and structured play. In our prepared classrooms, children manipulate educational apparatus designed to develop fine-motor control, phonetic awareness, spatial perception, and mathematical numeracy.',
        'Alongside sensory development, children learn polite Islamic social manners (Adaab), daily Duas, and sharing. Caring mentors guide each child at their own natural pace, cultivating confidence, concentration, and deep curiosity.',
      ]}
      keyHighlights={[
        'Self-directed hands-on apparatus building deep focus and concentration',
        'Early phonetic literacy and sensorial mathematics materials',
        'Gentle integration of Islamic daily Duas, manners, and Arabic alphabet',
        'Air-conditioned, child-safe classrooms with rounded furniture in Topsia',
        'Continuous observation and developmental feedback for parents',
      ]}
      image="/assets/ijma/photos/teacher-watching-art-of the-students.jpeg"
    />
  );
}
