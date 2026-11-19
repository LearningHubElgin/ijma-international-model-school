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
import { Heart, Compass, Shield, Award, Users, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | GD Goenka La Petite Rohini',
  description:
    'Learn about GD Goenka La Petite Rohini, our Montessori educational philosophy, experienced leadership, and nurturing early learning environment.',
};

export default function AboutUsPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: 'Loving & Nurturing',
      desc: 'Creating an emotionally secure atmosphere where every child feels cherished, heard, and respected as an individual.',
    },
    {
      icon: <Compass className="w-8 h-8 text-[#0a6375]" />,
      title: 'Montessori Inspired',
      desc: 'Self-directed learning guided by tactile materials that encourage innate curiosity, intrinsic motivation, and problem-solving.',
    },
    {
      icon: <Shield className="w-8 h-8 text-[#f7941e]" />,
      title: 'Safe Campus',
      desc: 'Uncompromising child safety standards with rounded edges, non-toxic materials, 24/7 CCTV surveillance, and trained caregivers.',
    },
    {
      icon: <Award className="w-8 h-8 text-[#1cbbb4]" />,
      title: 'Excellence in Pedagogy',
      desc: 'Recognized curricula bridging international early childhood benchmarks with culturally warm, community-centered values.',
    },
  ];

  return (
    <main className="flex-1">
      <InnerPageBanner
        title="About Our Preschool"
        badge="Nurturing Young Minds"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Overview & Welcome */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal variant="fade-up" delay={0.1}>
                <span className="font-bubblegum text-lg text-primary uppercase tracking-wide">
                  Welcome to La Petite
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-black mt-2 leading-tight">
                  Where Joyful Curiosity Meets Proven Pedagogy
                </h2>
              </Reveal>

              <Reveal variant="fade-up" delay={0.2}>
                <p className="text-body text-base sm:text-lg leading-relaxed">
                  Located in the heart of Rohini Sector 3, GD Goenka La Petite is designed as a sanctuary of early discovery. We combine the world-renowned Montessori methodology with contemporary developmental research to create an ecosystem where toddlers and preschoolers thrive.
                </p>
                <p className="text-body text-base leading-relaxed mt-4">
                  From sensory-rich infant play to structured pre-nursery and nursery discovery, our teachers act as observant facilitators rather than traditional lecturers. Children learn at their own developmental pace, discovering self-discipline, concentration, and deep intellectual excitement.
                </p>
              </Reveal>

              <Reveal variant="fade-up" delay={0.3}>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Button variant="primary" href="/programmes">
                    Explore Programmes
                  </Button>
                  <Button variant="outline" href="/contact-us">
                    Schedule a Campus Visit
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 relative">
              <Reveal variant="zoom-in" delay={0.2}>
                <div className="relative aspect-square max-w-[480px] mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-peach">
                  <Image
                    src="/assets/about/about-main.svg"
                    alt="GD Goenka La Petite Campus"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <div className="absolute -bottom-8 -left-6 w-32 h-56 animate-float-slow hidden sm:block pointer-events-none">
                <Image src="/assets/decorative/pencil-boy.svg" alt="Pencil Boy" fill className="object-contain" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values Grid */}
      <Section bg="peach">
        <Container>
          <SectionHeading
            eyebrow="Our Foundational Beliefs"
            title="The Values That Guide Our Community"
            description="Every interaction, activity, and learning space at GD Goenka La Petite is anchored in our dedication to holistic child development."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <Reveal key={val.title} variant="fade-up" delay={0.1 * (idx + 1)} className="h-full">
                <div className="bg-white rounded-card p-7 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 h-full flex flex-col text-center items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-5">
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

      {/* Experienced Faculty & Safety Highlights */}
      <Section bg="white">
        <Container>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0a6375] to-[#074c5a] rounded-card text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="font-bubblegum text-[#f7941e] text-lg uppercase tracking-wide">
                  Compassionate Mentors
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mt-2 leading-tight">
                  Certified Educators with a Passion for Early Childhood
                </h3>
                <p className="text-sm sm:text-base text-white/80 mt-4 leading-relaxed">
                  Our educators are trained in certified Montessori methods and early childhood psychology. They maintain high teacher-to-student ratios, ensuring personalized attention and continuous developmental tracking for every child.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#f7941e] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm">Low Student-Teacher Ratio</h5>
                    <p className="text-xs text-white/80">Tailored care for maximum cognitive and emotional comfort.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-[#f7941e] mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm">Continuous Parent Communication</h5>
                    <p className="text-xs text-white/80">Regular milestone updates, portfolios, and conferences.</p>
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
