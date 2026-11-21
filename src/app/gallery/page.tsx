'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Eye, Filter, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Lightbox, LightboxImage } from '@/components/ui/Lightbox';
import { siteConfig } from '@/content/site.config';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Sports & Karate' | 'STEM & Robotics' | 'Exhibitions' | 'Ceremonies' | 'Classroom & PTM';
  image: string;
  description: string;
}

const GALLERY_PHOTOS: GalleryItem[] = [
  {
    id: 'sports-1',
    title: 'Annual Sports Meet - Sprint Track Race',
    category: 'Sports & Karate',
    image: '/assets/ijma/photos/Runnig-student-in-sports-meet.jpg',
    description: 'Energetic young students competing on the synthetic sports turf during the Annual Sports Meet.',
  },
  {
    id: 'robotics-1',
    title: 'Robotics & STEM Gear Engineering Lab',
    category: 'STEM & Robotics',
    image: '/assets/ijma/photos/Art-class.jpg',
    description: 'Students constructing motorized robotic vehicles, circuit breadboards, and mechanical gear contraptions.',
  },
  {
    id: 'karate-1',
    title: 'Certified Karate & Self Defence Session',
    category: 'Sports & Karate',
    image: '/assets/ijma/photos/Kerate-session.jpeg',
    description: 'Black-belt senseis coaching boys and girls in self-defense routines, balance, and athletic agility.',
  },
  {
    id: 'karate-2',
    title: 'Karate Belt Stance & Form Training',
    category: 'Sports & Karate',
    image: '/assets/ijma/photos/Kerate-class-2.jpeg',
    description: 'Students demonstrating kata forms and defensive postures on the green sports ground.',
  },
  {
    id: 'exhibition-1',
    title: 'Multi-Disciplinary Science & Art Exhibition',
    category: 'Exhibitions',
    image: '/assets/ijma/photos/Art-exibition.jpeg',
    description: 'Students presenting handmade dioramas on early human civilization, geometry, and the 7 Pillars of Faith.',
  },
  {
    id: 'exhibition-2',
    title: 'Teacher Reviewing Student Projects',
    category: 'Exhibitions',
    image: '/assets/ijma/photos/teacher-watching-art-of the-students.jpeg',
    description: 'Faculty members interacting with young innovators during the project demonstration fair.',
  },
  {
    id: 'ceremony-1',
    title: 'Annual Sports Merit Prize Ceremony',
    category: 'Ceremonies',
    image: '/assets/ijma/photos/Prize-Distirbution-serimony.jpg',
    description: 'Podium prize distribution honoring athletic winners with certificates of merit and medals.',
  },
  {
    id: 'ceremony-2',
    title: 'National Education Day Prize Distribution',
    category: 'Ceremonies',
    image: '/assets/ijma/photos/Best-student-prize-distribution.jpeg',
    description: 'Commemorating Maulana Abul Kalam Azad birth anniversary with academic excellence awards.',
  },
  {
    id: 'ceremony-3',
    title: 'National Education Day Felicitation',
    category: 'Ceremonies',
    image: '/assets/ijma/photos/education-day-prize-distribution.jpeg',
    description: 'Dignitaries and Islamic scholars presenting trophies and gifts to outstanding achievers.',
  },
  {
    id: 'ceremony-4',
    title: 'Guest of Honor Award Presentation',
    category: 'Ceremonies',
    image: '/assets/ijma/photos/gust-price.jpeg',
    description: 'Distinguished guests recognizing students for moral conduct, discipline, and academic diligence.',
  },
  {
    id: 'ptm-1',
    title: 'Parent-Teacher Orientation & PTM',
    category: 'Classroom & PTM',
    image: '/assets/ijma/photos/Parent-tyeacher-meeting.jpeg',
    description: 'Interactive orientation with parents in our air-conditioned digital smart classrooms.',
  },
  {
    id: 'art-seminar-1',
    title: 'Creative Art & Skill Seminar',
    category: 'Exhibitions',
    image: '/assets/ijma/photos/Art-seminer.jpeg',
    description: 'Collaborative workshop fostering visual arts, sketching, and expressive design techniques.',
  },
  {
    id: 'art-seminar-2',
    title: 'Art Mentorship Consultation',
    category: 'Exhibitions',
    image: '/assets/ijma/photos/Art-Consult.jpeg',
    description: 'Students receiving individual creative guidance from art and craft mentors.',
  },
  {
    id: 'art-seminar-3',
    title: 'Student Project Display Session',
    category: 'Exhibitions',
    image: '/assets/ijma/photos/Art-seminor-2.jpeg',
    description: 'Showcasing student clay models, charts, and architectural miniature creations.',
  },
  {
    id: 'ceremony-5',
    title: 'Best Student Merit Accolades',
    category: 'Ceremonies',
    image: '/assets/ijma/photos/Best-.jpeg',
    description: 'Awarding top rankers in academics, Quranic recitation, and sports tournaments.',
  },
];

const CATEGORIES = [
  'All',
  'Sports & Karate',
  'STEM & Robotics',
  'Exhibitions',
  'Ceremonies',
  'Classroom & PTM',
] as const;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    selectedCategory === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  const lightboxItems: LightboxImage[] = filteredPhotos.map((p) => ({
    id: p.id,
    image: p.image,
    title: p.title,
    category: p.category,
  }));

  return (
    <div className="flex-1 bg-white">
      {/* Hero Banner */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-[#0A5C36] to-[#08482A] text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:24px_24px]" />
        <Container className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 text-[#F5A623]">
            <Camera className="w-4 h-4" />
            <span>Official Photo Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
            Campus Life in Pictures
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Real snapshots capturing athletic races, karate belt sessions, STEM robotics innovations, science exhibitions, and academic celebrations at IJMA International Model School in Topsia, Kolkata.
          </p>
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0A5C36] text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A5C36] bg-white px-3.5 py-1.5 rounded-full shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Fullscreen</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#0A5C36] uppercase tracking-wider block mb-1">
                    {photo.category}
                  </span>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#0A5C36] transition-colors leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Lightbox Component */}
      <Lightbox
        images={lightboxItems}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIndex) => setActiveLightboxIndex(newIndex)}
      />
    </div>
  );
}
