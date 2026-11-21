import React from 'react';
import { Metadata } from 'next';
import { BlogPostTemplate } from '@/components/blog/BlogPostTemplate';

export const metadata: Metadata = {
  title: 'Commemorating National Education Day at IJMA International Model School Kolkata',
  description:
    'Honoring the visionary legacy of Maulana Abul Kalam Azad on National Education Day with prize distributions, student exhibitions, and academic honors in Topsia, Kolkata.',
};

export default function NationalEducationDayPage() {
  return (
    <BlogPostTemplate
      title="Commemorating National Education Day & Maulana Azad Birth Anniversary at IJMA"
      category="Events & Honors"
      date="November 11, 2024"
      author="Academic Council"
      image="/assets/ijma/photos/Best-student-prize-distribution.jpeg"
      content={{
        intro:
          'On 11th November, IJMA International Model School in Topsia, Kolkata commemorated National Education Day to honor the birth anniversary of India’s first Minister of Education, Maulana Abul Kalam Azad. The event highlighted our commitment to universal, high-quality education rooted in moral character and academic excellence.',
        sections: [
          {
            heading: '1. Honoring India’s Educational Architecture',
            body: [
              'Maulana Abul Kalam Azad championed inclusive, forward-thinking scientific education while preserving rich cultural and moral heritage. At IJMA, our curriculum embodies this vision by uniting CBSE English Medium standards with Islamic Tarbiyah.',
              'Students delivered inspiring speeches in English and Urdu, presenting historical timelines of educational reform in India and reflecting on the Quranic imperative: "Al-Ilmu Noorun" (Knowledge is Light).',
            ],
          },
          {
            heading: '2. Annual Prize Distribution & Student Accolades',
            body: [
              'The commemoration featured our grand annual prize distribution ceremony. Trophies, medals, and certificates of merit were awarded to academic toppers across primary and middle school wings.',
              'Special commendations were presented for outstanding Quran recitation (Tajweed), exemplary discipline, and creative innovation in mathematics and science exhibitions.',
            ],
          },
          {
            heading: '3. Community and Guest Dignitary Addresses',
            body: [
              'Esteemed educators and community leaders addressed the assembly, congratulating the awardees and commending the school leadership for creating state-of-the-art educational infrastructure in Topsia, Kolkata.',
              'Parents in attendance expressed immense pride as their children stepped onto the podium to receive honors for their dedication and hard work throughout the academic session.',
            ],
          },
        ],
        conclusion:
          'IJMA International Model School remains dedicated to nurturing enlightened scholars who possess both modern academic brilliance and unshakeable Islamic values, upholding the motto "...Sky is the limit".',
      }}
    />
  );
}
