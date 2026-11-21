import React from 'react';
import { Metadata } from 'next';
import { BlogPostTemplate } from '@/components/blog/BlogPostTemplate';

export const metadata: Metadata = {
  title: 'Why STEM & Robotics are Integral to Islamic Education at IJMA Topsia Kolkata',
  description:
    'Discover how IJMA International Model School harmonizes Quranic values with hands-on robotics, electronic circuitry, and scientific research.',
};

export default function StemRoboticsIslamicSchoolsPage() {
  return (
    <BlogPostTemplate
      title="Why STEM & Robotics are Integral to Islamic Education at IJMA Topsia"
      category="STEM & Tarbiyah"
      date="November 04, 2024"
      author="STEM Department"
      image="/assets/ijma/photos/Art-class.jpg"
      content={{
        intro:
          'Islamic history is illuminated by pioneering scholars of algebra, optics, astronomy, and medicine. At IJMA International Model School in Topsia, Kolkata, we continue this glorious heritage by making STEM and robotics a core pillar of our academic pedagogy.',
        sections: [
          {
            heading: '1. Bridging Divine Wonder with Empirical Science',
            body: [
              'The Holy Quran repeatedly urges believers to reflect upon the creation of the heavens, the earth, and the laws of nature. Hands-on scientific investigation teaches students that studying natural sciences is an act of understanding Allah’s magnificent creation.',
              'In our dedicated laboratory, students explore mechanical gears, motorized wheels, electronic breadboards, and renewable energy circuits, connecting theory with tactile creation.',
            ],
          },
          {
            heading: '2. Hands-on Engineering from Early Years',
            body: [
              'Rather than relying solely on textbook diagrams, our students actively assemble functional mechanical models, robotic cars, and interactive science displays under the guidance of specialized instructors.',
              'This experiential methodology sharpens analytical problem solving, spatial intuition, and technological confidence from the primary years onward.',
            ],
          },
          {
            heading: '3. Exhibitions, Innovation & Future Career Readiness',
            body: [
              'During our school project exhibitions, students demonstrate their scientific prototypes to parents and visiting educators, articulating underlying principles of physics and mathematics with great poise.',
              'By nurturing technological fluency early, we prepare our scholars to thrive in future careers in software engineering, artificial intelligence, medicine, and research while maintaining deep spiritual grounding.',
            ],
          },
        ],
        conclusion:
          'At IJMA International Model School, modern technology and timeless faith unite to shape the leaders, thinkers, and innovators of tomorrow.',
      }}
    />
  );
}
