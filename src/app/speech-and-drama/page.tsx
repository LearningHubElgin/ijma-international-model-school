import React from 'react';
import { Metadata } from 'next';
import { PillarPageTemplate } from '@/components/montessori/PillarPageTemplate';

export const metadata: Metadata = {
  title: 'Speech, Elocution & Debates | IJMA International Model School Topsia Kolkata',
  description:
    'Elocution, storytelling, Islamic debates, and vocal articulation sessions building stage confidence and eloquence in Topsia, Kolkata.',
};

export default function SpeechAndDramaPage() {
  return (
    <PillarPageTemplate
      title="Speech, Elocution & Public Speaking"
      badge="Stage Poise, Eloquence & Articulation"
      description="Speech and elocution at IJMA International Model School in Topsia, Kolkata provides an empowering platform where young scholars discover the power of spoken words, public address, and thoughtful argumentation."
      extendedParagraphs={[
        'Through structured debate societies, Quranic storytelling, poetry elocution, and seminar presentations, students overcome shyness and master English and Urdu public speaking.',
        'These sessions cultivate confidence and intellectual empathy: students learn to formulate coherent arguments, listen attentively to differing perspectives, and communicate respectfully with clarity and poise.',
      ]}
      keyHighlights={[
        'Elocution contests and declamation in English, Urdu, and Bengali',
        'Vocal projection, clear diction, and phonetic articulation coaching',
        'Student-led seminar presentations and project explanations',
        'Debates on contemporary scientific and ethical topics',
        'Stage assemblies building fearless, articulate public speakers',
      ]}
      image="/assets/ijma/photos/Art-seminor-2.jpeg"
    />
  );
}
