import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { InnerPageBanner } from '@/components/layout/InnerPageBanner';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/content/site.config';
import { Heart, Compass, Shield, Award, Users, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | IJMA International Model School Topsia Kolkata',
  description:
    'Learn about IJMA International Model School, our CBSE academic curriculum integrated with Islamic Tarbiyah, STEM labs, martial arts, and campus in Topsia, Kolkata.',
};

export default function AboutUsPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-[#0A5C36]" />,
      title: 'Faith & Tarbiyah',
      desc: 'Nurturing sincere Islamic values, Quranic literacy, daily Akhlaq, and moral integrity from early years through high school.',
    },
    {
      icon: <Compass className="w-8 h-8 text-[#0a6375]" />,
      title: 'CBSE Academic Rigor',
      desc: 'Structured English medium CBSE syllabus emphasizing conceptual understanding, critical reasoning, and STEM scientific innovation.',
    },
    {
      icon: <Shield className="w-8 h-8 text-[#f7941e]" />,
      title: 'Safe & Modern Campus',
      desc: 'Air-conditioned smart classrooms, CCTV security, dedicated female attendants, and certified child safety protocols in Topsia Kolkata.',
    },
    {
      icon: <Award className="w-8 h-8 text-[#1cbbb4]" />,
      title: 'Holistic Co-Curriculars',
      desc: 'Certified Karate martial arts, annual athletic sports meets, science exhibitions, and collaborative arts workshops.',
    },
  ];

  return (
    <main className="flex-1">
      <InnerPageBanner
        title="About Our School"
        badge="Nurturing Minds & Building Character"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Overview & Welcome */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal variant="fade-up" delay={0.1}>
                <span className="font-bubblegum text-lg text-[#0A5C36] uppercase tracking-wide">
                  Welcome to IJMA International Model School
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-black mt-2 leading-tight">
                  Where Academic Excellence Meets Islamic Morality
                </h2>
              </Reveal>

              <Reveal variant="fade-up" delay={0.2}>
                <p className="text-body text-base sm:text-lg leading-relaxed">
                  Conveniently situated at <strong>32/3, Topsia Rd, Topsia, Kolkata, West Bengal 700046</strong>, IJMA International Model School is a premier educational institution established in 2022. We offer a progressive English Medium CBSE-oriented curriculum enriched with comprehensive Islamic Education (Class: Nursery to XII - Proposed).
                </p>
                <p className="text-body text-base leading-relaxed mt-4">
                  Guided by the Quranic motto <span className="font-bold text-[#0A5C36] font-arabic">اَلْعِلْمُ نُوْرٌ</span> (<em>Al-Ilmu Noorun</em> — Knowledge is Light) and the inspirational belief &ldquo;...Sky is the limit&rdquo;, our mission is to empower young minds with high-caliber academic capabilities while instilling timeless values of modesty, truthfulness, and leadership.
                </p>
              </Reveal>

              <Reveal variant="fade-up" delay={0.3}>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Button variant="primary" href="/academics">
                    Explore Academics
                  </Button>
                  <Button variant="outline" href="/campus-life">
                    Discover Campus Life
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 relative">
              <Reveal variant="zoom-in" delay={0.2}>
                <div className="relative aspect-[4/3] max-w-[520px] mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-peach">
                  <Image
                    src="/assets/ijma/photos/Art-class.jpg"
                    alt="IJMA STEM & Creative Workshop"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Vision & Mission Sections */}
      <Section bg="peach">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="vision-mission">
            <div className="bg-white rounded-card p-8 shadow-card border border-emerald-100 flex flex-col justify-between">
              <div>
                <span className="font-bubblegum text-lg text-[#0A5C36] uppercase tracking-wide block mb-2">
                  Our Vision
                </span>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Enlightened Scholars, Responsible Global Citizens
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  To be a center of educational brilliance in West Bengal that harmonizes modern scientific knowledge, analytical thought, and technological fluency with righteous Islamic character (Akhlaq), producing well-rounded leaders who serve society with dignity and compassion.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-emerald-50 flex items-center gap-2 text-xs font-bold text-[#0A5C36]">
                <Sparkles className="w-4 h-4 text-[#F5A623]" />
                <span>Knowledge, Discipline, and Spiritual Growth</span>
              </div>
            </div>

            <div className="bg-white rounded-card p-8 shadow-card border border-emerald-100 flex flex-col justify-between">
              <div>
                <span className="font-bubblegum text-lg text-[#F5A623] uppercase tracking-wide block mb-2">
                  Our Mission
                </span>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Holistic Education for Mind, Heart & Soul
                </h3>
                <ul className="space-y-3 text-sm text-body">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C36] mt-1 flex-shrink-0" />
                    <span>Deliver rigorous CBSE curriculum with digital smart boards and STEM robotics labs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C36] mt-1 flex-shrink-0" />
                    <span>Provide Tajweed-based Quranic recitation, memorization, and foundational Islamic studies.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C36] mt-1 flex-shrink-0" />
                    <span>Foster physical vitality through certified Karate martial arts and athletics on synthetic turf.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0A5C36] mt-1 flex-shrink-0" />
                    <span>Engage parents actively through transparent communication and regular parent-teacher orientations.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-emerald-50 flex items-center gap-2 text-xs font-bold text-[#0A5C36]">
                <Sparkles className="w-4 h-4 text-[#F5A623]" />
                <span>Excellence Across Academics, Sports & Tarbiyah</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values Grid */}
      <Section bg="white">
        <Container>
          <SectionHeading
            eyebrow="Our Guiding Principles"
            title="Core Values of IJMA International Model School"
            description="Every program, classroom interaction, and student celebration at IJMA is anchored in our commitment to holistic excellence."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <Reveal key={val.title} variant="fade-up" delay={0.1 * (idx + 1)} className="h-full">
                <div className="bg-[#fff9f5] rounded-card p-7 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 h-full flex flex-col text-center items-center border border-peach">
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-5">
                    {val.icon}
                  </div>
                  <h3 className="font-bold text-xl text-black mb-3">{val.title}</h3>
                  <p className="text-sm text-body leading-relaxed flex-1">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Campus Life & Facility Photos */}
      <Section bg="peach">
        <Container>
          <SectionHeading
            eyebrow="Campus Snapshots"
            title="Modern Facilities in Topsia, Kolkata"
            description="Tour our active learning environments, from AC smart classrooms to martial arts arenas and STEM discovery corners."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
              <Image
                src="/assets/ijma/photos/Parent-tyeacher-meeting.jpeg"
                alt="Parent Teacher Meeting & Smart Classrooms"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white font-bold text-sm">AC Smart Classrooms & PTM Sessions</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
              <Image
                src="/assets/ijma/photos/Kerate-session.jpeg"
                alt="Certified Karate Martial Arts Training"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white font-bold text-sm">Karate Martial Arts Training</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
              <Image
                src="/assets/ijma/photos/teacher-watching-art-of the-students.jpeg"
                alt="Art, Design & STEM Mentorship"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-white font-bold text-sm">Creative Art & STEM Mentorship</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Leadership & Faculty */}
      <Section bg="white">
        <Container>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0A5C36] to-[#074227] rounded-card text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="font-bubblegum text-[#F5A623] text-lg uppercase tracking-wide">
                  Passionate Mentors
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mt-2 leading-tight">
                  Experienced Educators & Certified Instructors
                </h3>
                <p className="text-sm sm:text-base text-white/85 mt-4 leading-relaxed">
                  Our faculty consists of qualified CBSE curriculum specialists, certified Islamic scholars, and recognized sports trainers. With low student-to-teacher ratios, every child receives close individual guidance, pastoral care, and academic encouragement.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#F5A623] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm">Personalized Student Attention</h5>
                    <p className="text-xs text-white/80">Optimal class sizes allowing tailored academic coaching.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-[#F5A623] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm">Islamic Tarbiyah Integration</h5>
                    <p className="text-xs text-white/80">Regular Quranic recitation, Duas, and moral character guidance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
