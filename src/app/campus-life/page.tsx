import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { InnerPageBanner } from '@/components/layout/InnerPageBanner';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/content/site.config';
import {
  Trophy,
  Swords,
  Cpu,
  Palette,
  Users,
  Award,
  Calendar,
  CheckCircle2,
  Video,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Campus Life & Activities | IJMA International Model School Topsia Kolkata',
  description:
    'Discover campus life at IJMA International Model School: Annual Sports Meet, Karate Martial Arts, STEM Robotics, Science & Art Exhibitions, PTMs, and National Education Day celebrations in Topsia, Kolkata.',
};

export default function CampusLifePage() {
  const activities = [
    {
      id: 'sports',
      icon: <Trophy className="w-6 h-6 text-[#F5A623]" />,
      badge: 'Athletics & Fitness',
      title: 'Annual Sports Meet & Sprint Races',
      description:
        'Our students participate with great energy and competitive spirit in sprint races, hurdles, relays, and field events on our synthetic turf athletic arena. We emphasize physical stamina, teamwork, and Islamic sportsmanship.',
      image: '/assets/ijma/photos/Runnig-student-in-sports-meet.jpg',
      highlights: [
        'Organized track and sprint races with certified timers and lanes',
        'House-based team spirit and healthy athletic competition',
        'Trophy and medal distribution honoring excellence and fair play',
        'Encourages daily fitness, stamina, and physical discipline',
      ],
    },
    {
      id: 'karate',
      icon: <Swords className="w-6 h-6 text-[#0A5C36]" />,
      badge: 'Discipline & Defence',
      title: 'Karate & Martial Arts Training',
      description:
        'Certified martial arts instructors conduct regular Karate classes where students learn self-defense, focus, agility, and mental resilience. Training in complete Gi uniforms builds self-confidence and physical coordination.',
      image: '/assets/ijma/photos/Kerate-session.jpeg',
      secondaryImage: '/assets/ijma/photos/Kerate-class-2.jpeg',
      highlights: [
        'Certified black-belt instructors guiding stances and katas',
        'Belt advancement grading and formal martial arts certification',
        'Self-defense skills empowering boys and girls with confidence',
        'Cultivates respect, patience, physical stamina, and composure',
      ],
    },
    {
      id: 'stem',
      icon: <Cpu className="w-6 h-6 text-[#0a6375]" />,
      badge: 'Innovation & Science',
      title: 'Hands-on STEM & Robotics Workshops',
      description:
        'In our specialized STEM laboratory, students experiment with gear mechanisms, electric circuits, and motorized models. They learn to think like engineers by prototyping real scientific applications.',
      image: '/assets/ijma/photos/Art-class.jpg',
      highlights: [
        'Real mechanical assemblies with gears, pulleys, and small motors',
        'Collaborative problem solving and creative engineering designs',
        'Interactive physics and mathematical concept exploration',
        'Prepares students for future technology and engineering careers',
      ],
    },
    {
      id: 'exhibitions',
      icon: <Palette className="w-6 h-6 text-[#ed145b]" />,
      badge: 'Creativity & Research',
      title: 'Art, Mathematics & Science Exhibitions',
      description:
        'Our annual exhibitions are a vibrant celebration of student inquiry. Young learners construct 3D geometric models, historical dioramas, environmental displays, and artistic paintings, explaining their concepts to visitors with eloquence.',
      image: '/assets/ijma/photos/Art-exibition.jpeg',
      secondaryImage: '/assets/ijma/photos/teacher-watching-art-of the-students.jpeg',
      highlights: [
        'Student-led model presentations and interactive demonstrations',
        'Cross-disciplinary projects connecting art, science, and mathematics',
        'Teacher consultation and guided research methodology',
        'Enhances public speaking, conceptual mastery, and poise',
      ],
    },
    {
      id: 'ptm',
      icon: <Users className="w-6 h-6 text-[#1cbbb4]" />,
      badge: 'Parent Partnership',
      title: 'Parent-Teacher Orientation & Smart Classrooms',
      description:
        'We believe parents are vital partners in education. Our regular PTM sessions in air-conditioned digital smart classrooms provide parents with comprehensive feedback on academic progress, Tarbiyah milestones, and cognitive growth.',
      image: '/assets/ijma/photos/Parent-tyeacher-meeting.jpeg',
      highlights: [
        'One-on-one personalized consultations between parents and educators',
        'Demonstration of digital interactive smart board lessons',
        'Continuous developmental tracking and assessment portfolios',
        'Collaborative guidance on moral conduct and study habits at home',
      ],
    },
    {
      id: 'events',
      icon: <Award className="w-6 h-6 text-[#F5A623]" />,
      badge: 'Honoring Excellence',
      title: 'National Education Day & Prize Ceremonies',
      description:
        'We commemorate National Education Day on November 11th, honoring India’s first Education Minister, Maulana Abul Kalam Azad. Outstanding students receive trophies, certificates, and prizes for academic brilliance and exemplary character.',
      image: '/assets/ijma/photos/Best-student-prize-distribution.jpeg',
      secondaryImage: '/assets/ijma/photos/Prize-Distirbution-serimony.jpg',
      highlights: [
        'Celebration of Maulana Abul Kalam Azad’s educational legacy',
        'Annual awards recognizing academic toppers and best all-rounders',
        'Certificates of excellence in sports, Quran recitation, and arts',
        'Guest dignitary speeches inspiring students to reach for the skies',
      ],
    },
  ];

  return (
    <main className="flex-1">
      <InnerPageBanner
        title="Campus Life & Activities"
        badge="Vibrant, Disciplined & Inspiring"
        breadcrumbs={[{ label: 'Campus Life' }]}
      />

      {/* Intro Section */}
      <Section bg="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="font-bubblegum text-lg text-[#0A5C36] uppercase tracking-wide">
              Beyond the Textbook
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight">
              An Enriching Ecosystem of Sports, Science & Islamic Values
            </h2>
            <p className="text-body text-base sm:text-lg leading-relaxed">
              At IJMA International Model School in Topsia, Kolkata, student life is vibrant, purposeful, and well-rounded. From martial arts to robotics, athletic track races to Quranic celebrations, every student is encouraged to explore their passions and excel.
            </p>
          </div>

          {/* Activities List */}
          <div className="space-y-20">
            {activities.map((act, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={act.id}
                  id={act.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 border-t border-gray-100 first:border-none first:pt-0`}
                >
                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-peach border border-amber-200 text-xs font-bold text-[#0A5C36]">
                      {act.icon}
                      <span>{act.badge}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-black leading-snug">
                      {act.title}
                    </h3>

                    <p className="text-body text-base leading-relaxed">
                      {act.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {act.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-body">
                          <CheckCircle2 className="w-5 h-5 text-[#0A5C36] mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="relative aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border-4 border-peach group">
                      <Image
                        src={act.image}
                        alt={act.title}
                        fill
                        className="object-cover group-hover:scale-104 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 550px"
                      />
                      {act.secondaryImage && (
                        <div className="absolute bottom-4 right-4 w-32 h-24 sm:w-44 sm:h-32 rounded-xl overflow-hidden shadow-lg border-2 border-white hidden sm:block">
                          <Image
                            src={act.secondaryImage}
                            alt={`${act.title} additional snapshot`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick CTA to Video Showcase & Gallery */}
          <div className="mt-20 p-8 sm:p-12 rounded-card bg-[#fff9f5] border-2 border-peach flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="font-bubblegum text-[#0A5C36] text-lg uppercase font-bold">
                See It In Action
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-black">
                Watch Our Students Present & Compete
              </h3>
              <p className="text-sm text-body max-w-xl">
                Explore our full campus media library featuring live video recordings of project exhibitions, student presentations, and seminars.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0">
              <Button variant="primary" href="/videos">
                <Video className="w-4 h-4 mr-2" />
                <span>Watch Campus Videos</span>
              </Button>
              <Button variant="outline" href="/gallery">
                <span>View Photo Gallery</span>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
