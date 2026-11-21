'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  GraduationCap,
  Cpu,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/content/site.config';

export default function AcademicsPage() {
  return (
    <div className="flex-1 bg-white">
      {/* Hero Banner */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-[#0A5C36] to-[#08482A] text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:24px_24px]" />
        <Container className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 text-[#F5A623]">
            <BookOpen className="w-4 h-4" />
            <span>Academic Wings & Islamic Tarbiyah</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
            Curriculum & Academic Wings
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            English Medium CBSE Curriculum infused with timeless Islamic Values, Quranic understanding, STEM & Robotics innovation, and character building in Topsia, Kolkata.
          </p>
        </Container>
      </div>

      <Container className="py-16 sm:py-20 space-y-20">
        {/* Academic Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold text-[#0A5C36] uppercase tracking-wider bg-emerald-50 px-3.5 py-1.5 rounded-full">
              Educational Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Harmonizing World-Class CBSE Education with Islamic Moral Guidance
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              At IJMA INTERNATIONAL MODEL SCHOOL, we believe that education must nurture both the intellect and the soul. Our curriculum complies rigorously with national CBSE norms while integrating authentic Islamic Studies, Tajweed, daily Duas, and Arabic language instruction.
            </p>
            <div className="space-y-3 pt-2">
              {[
                'CBSE English Medium syllabus designed for global competence',
                'Comprehensive Islamic Studies: Quran, Hadith, Seerah & Akhlaq',
                'STEM & Robotics practical lab training from foundational years',
                'Air-conditioned smart classrooms equipped with Interactive Panels',
                'Emphasis on moral character (Tarbiyah) and self-discipline',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0A5C36] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <Image
                src="/assets/ijma/photos/Art-class.jpg"
                alt="Students in Robotics and STEM Class"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
          </div>
        </div>

        {/* The 4 Distinct Academic Wings */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Our Academic Wings
            </h2>
            <p className="text-gray-600 mt-3 text-base">
              Carefully structured learning pathways catering to developmental milestones from early childhood to adolescence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Wing 1: Pre-Primary */}
            <div className="bg-[#F8FAF9] rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
              <span className="text-xs font-bold text-[#0A5C36] bg-emerald-100/70 px-3 py-1 rounded-full uppercase tracking-wider">
                Foundation Stage
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3">
                Pre-Primary (Pre-Nursery, Nursery & KG)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Play-based and Montessori-inspired sensorial environments that develop speech, phonics, fine motor skills, social warmth, and foundational Islamic etiquettes (eating, greeting with Salam, bismillah).
              </p>
              <ul className="text-xs text-gray-500 space-y-2 mb-6">
                <li>• Phonics & early English language acquisition</li>
                <li>• Number work, shapes, and sensorial discovery</li>
                <li>• Basic Arabic alphabets and short Quranic verses</li>
                <li>• Physical play, storytelling, and creative crafts</li>
              </ul>
              <Link
                href="/admissions"
                className="text-xs font-bold text-[#0A5C36] hover:text-[#0A5C36]/80 flex items-center gap-1 group"
              >
                <span>Pre-Primary Admissions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Wing 2: Primary */}
            <div id="primary" className="bg-[#F8FAF9] rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
              <span className="text-xs font-bold text-[#0A5C36] bg-emerald-100/70 px-3 py-1 rounded-full uppercase tracking-wider">
                Classes I – V
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3">
                Primary Wing
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Structured CBSE English Medium syllabus combining English literature, Mathematics, Environmental Studies (EVS), Hindi, Bengali, Urdu, and Arabic with Tajweed and Islamic morals.
              </p>
              <ul className="text-xs text-gray-500 space-y-2 mb-6">
                <li>• Strong mathematical reasoning & science curiosity</li>
                <li>• Hands-on robotics and simple mechanical projects</li>
                <li>• Quran recitation with correct Tajweed rules</li>
                <li>• Karate martial arts training and athletics</li>
              </ul>
              <Link
                href="/admissions"
                className="text-xs font-bold text-[#0A5C36] hover:text-[#0A5C36]/80 flex items-center gap-1 group"
              >
                <span>Primary Admissions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Wing 3: Middle */}
            <div id="middle" className="bg-[#F8FAF9] rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
              <span className="text-xs font-bold text-[#0A5C36] bg-emerald-100/70 px-3 py-1 rounded-full uppercase tracking-wider">
                Classes VI – VIII
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3">
                Middle Wing
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Advancing analytical depth in Physics, Chemistry, Biology, Mathematics, Computer Coding, and Social Sciences alongside Quranic translation, Hadith literature, and leadership.
              </p>
              <ul className="text-xs text-gray-500 space-y-2 mb-6">
                <li>• Comprehensive laboratory experiments & exhibitions</li>
                <li>• Motorized robotics cars and circuit building</li>
                <li>• Multi-language mastery: English, Urdu, Hindi, Bengali</li>
                <li>• Self-defense, physical stamina, and sports tournaments</li>
              </ul>
              <Link
                href="/admissions"
                className="text-xs font-bold text-[#0A5C36] hover:text-[#0A5C36]/80 flex items-center gap-1 group"
              >
                <span>Middle Wing Admissions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Wing 4: Secondary */}
            <div id="secondary" className="bg-[#F8FAF9] rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
              <span className="text-xs font-bold text-[#0A5C36] bg-emerald-100/70 px-3 py-1 rounded-full uppercase tracking-wider">
                Classes IX – XII (Proposed)
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-3">
                Secondary & Senior Secondary Wing
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Rigorous CBSE curriculum preparing students for board exams and competitive university entrances, rooted in ethical consciousness and visionary Islamic leadership.
              </p>
              <ul className="text-xs text-gray-500 space-y-2 mb-6">
                <li>• Science, Commerce, and Humanities streams</li>
                <li>• Career guidance, Olympiads, and digital innovation</li>
                <li>• Life skills, critical debates, and ethical civic duty</li>
                <li>• Continuing moral Tarbiyah and spiritual mentorship</li>
              </ul>
              <Link
                href="/admissions"
                className="text-xs font-bold text-[#0A5C36] hover:text-[#0A5C36]/80 flex items-center gap-1 group"
              >
                <span>Senior Secondary Inquiries</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Islamic Studies & STEM Highlights */}
        <div id="islamic-studies" className="bg-gradient-to-r from-[#0A5C36] to-[#0D7344] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#F5A623] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full">
                Core Pillar
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                Integrated Islamic Education & Character Tarbiyah
              </h3>
              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                We believe that religious education must be inspiring and deeply transformative. Our students learn proper Quranic Tajweed, understand the meanings of the Holy Quran, memorize daily Sunnah supplications, and absorb the exemplary character of Prophet Muhammad (PBUH).
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[360px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30">
                <Image
                  src="/assets/ijma/photos/Parent-tyeacher-meeting.jpeg"
                  alt="Islamic Classroom Orientation"
                  fill
                  className="object-cover"
                  sizes="360px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="text-center pt-4">
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
            Begin Your Child's Journey at IJMA Topsia, Kolkata
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Admissions are open for academic session 2026–2027. Contact our admissions desk or visit our Topsia campus today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/admissions/application-form"
              className="bg-[#0A5C36] hover:bg-[#08482A] text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-all"
            >
              Fill Online Admission Form
            </Link>
            <Link
              href="/contact-us"
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-8 py-3.5 rounded-full transition-all"
            >
              Visit Campus in Topsia
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
