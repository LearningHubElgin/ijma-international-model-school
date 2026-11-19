import React from 'react';
import { Metadata } from 'next';
import { ProgrammeDetailTemplate } from '@/components/programmes/ProgrammeDetailTemplate';

export const metadata: Metadata = {
  title: 'Day Care (12 Months - 12 Years) | GD Goenka La Petite Rohini',
  description:
    'Safe, stimulating home-away-from-home day care with nutritious meals, guided study, and nap facilities in Rohini Sector 3.',
};

export default function DayCarePage() {
  return (
    <ProgrammeDetailTemplate
      title="Day Care"
      ageRange="12 Months - 12 Years"
      badge="Safe & Loving Home Away From Home"
      overview="Understanding the busy schedules of modern working parents, our Day Care facility provides a secure, loving, and hygienic second home. We offer balanced nutritionist-planned meals, comfortable air-conditioned rest beds, supervised homework sessions, and continuous recreational activities under watchful caregivers."
      objectives={[
        'Full-day safety in CCTV-monitored, sanitized environments',
        'Balanced, freshly prepared breakfast, lunch, and evening snacks',
        'Dedicated nap rooms with individual hygienic cots',
        'Academic homework completion support by qualified teachers',
        'Wholesome screen-free games, reading corners, and art sessions',
      ]}
      scheduleHighlights={[
        { time: '12:30 PM - 01:30 PM', activity: 'Warm Welcome, Handwashing & Hot Nutritious Lunch' },
        { time: '01:30 PM - 03:30 PM', activity: 'Quiet Nap Time in Climate-Controlled Rest Room' },
        { time: '03:30 PM - 04:15 PM', activity: 'Fresh Milk/Snack & Supervised Homework Assistance' },
        { time: '04:15 PM - 05:30 PM', activity: 'Outdoor Sports, Hobby Clubs & Creative Play' },
        { time: '05:30 PM - 06:30 PM', activity: 'Board Games, Story Circles & Parent Pick-up' },
      ]}
      image="/assets/programmes/programme-daycare.svg"
    />
  );
}
