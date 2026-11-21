import React from 'react';
import { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/montessori/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'Celebrations & Academic Honors | IJMA International Model School Topsia Kolkata',
  description:
    'Experience our vibrant school celebrations, National Education Day, Eid festivals, and student honor ceremonies in Topsia, Kolkata.',
};

export default function CelebrationsPage() {
  return (
    <PillarPageTemplate
      title="Celebrations & Events"
      badge="Joyful Community Life"
      description="Celebrations at IJMA International Model School, Topsia, Kolkata are cherished milestones where children discover the beauty of Islamic traditions, national heritage, and community warmth."
      extendedParagraphs={[
        'From Eid-ul-Fitr, Eid-ul-Adha, and National Education Day (honoring Maulana Abul Kalam Azad) to Independence Day and Republic Day, our campus comes alive with vibrant decorations, Quranic recitations, storytelling, and student stage presentations.',
        'These festive occasions build empathy, open-mindedness, and deep social confidence. Children learn the underlying values behind each occasion: compassion, generosity, love for the homeland, and dedication to knowledge.',
      ]}
      keyHighlights={[
        'National Education Day commemoration with academic trophies and prizes',
        'Eid celebrations fostering generosity, brotherhood, and community charity',
        'Patriotic assemblies for Independence Day and Republic Day',
        'Student stage performances, public speaking, and choral presentations',
        'Creative art exhibits and festive banner design workshops',
      ]}
      image="/assets/ijma/photos/Best-student-prize-distribution.jpeg"
    />
  );
}
