import React from 'react';
import { Metadata } from 'next';
import { BlogPostTemplate } from '@/components/blog/BlogPostTemplate';

export const metadata: Metadata = {
  title: 'Annual Sports Meet & Karate Demonstrations at IJMA Kolkata',
  description:
    'Highlights of track athletics, sprint races, and certified Karate martial arts demonstrations at IJMA International Model School Topsia, Kolkata.',
};

export default function AnnualSportsMeetPage() {
  return (
    <BlogPostTemplate
      title="Highlights of Our Annual Sports Meet & Certified Karate Demonstrations"
      category="Sports & Fitness"
      date="October 22, 2024"
      author="Physical Education Dept"
      image="/assets/ijma/photos/Runnig-student-in-sports-meet.jpg"
      content={{
        intro:
          'Physical fitness, agility, and sportsmanship are vital aspects of character development in Islamic tradition. IJMA International Model School recently celebrated its Annual Sports Meet and Karate Demonstration on our synthetic turf athletic arena.',
        sections: [
          {
            heading: '1. Sprint Races & Track Competitions',
            body: [
              'The day commenced with high-energy sprint races, relays, and agility obstacle courses across age divisions. Students displayed remarkable determination and stamina, cheering passionately for their respective school houses.',
              'The athletic tracks witnessed nail-biting finishes as sprinters sprinted toward the finish tape, embodying resilience, focus, and fair play.',
            ],
          },
          {
            heading: '2. Certified Karate & Martial Arts Stances',
            body: [
              'Dressed in clean white Karate Gi uniforms, our martial arts students performed synchronized katas, defensive blocks, and high kicks under the supervision of certified black-belt trainers.',
              'Karate at IJMA instills deep self-control, mental composure, and respectful self-defense, teaching students that true strength lies in humility and discipline.',
            ],
          },
          {
            heading: '3. Victory Ceremony & Good Character Honors',
            body: [
              'The event concluded with an inspiring medal presentation where winners were honored on the champion podium. Beyond athletic speed, special awards were presented for team spirit, sportsmanship, and mutual encouragement.',
              'Parents cheered from the viewing galleries, celebrating the joyful vitality and discipline displayed by every young participant.',
            ],
          },
        ],
        conclusion:
          'A healthy mind thrives in a healthy body. Through ongoing athletic coaching and martial arts training, IJMA International Model School fosters energetic, confident, and disciplined scholars ready to overcome life’s challenges.',
      }}
    />
  );
}
