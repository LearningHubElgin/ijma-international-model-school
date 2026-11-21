'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Video, Film, Sparkles, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';

interface SchoolVideoItem {
  id: string;
  title: string;
  description: string;
  category: 'Stage Drama & History' | 'Patriotic Anthem' | 'Student Presentations' | 'Exhibitions & Projects' | 'Academic Seminars' | 'Campus Highlights';
  src?: string;
  youtubeId?: string;
  start?: number;
  thumbnail: string;
}

const ALL_VIDEOS: SchoolVideoItem[] = [
  {
    id: 'vid-drama-1947',
    title: '15th August 1947 Independence Day Drama Performance',
    description: 'Students performing a moving historical drama re-enacting India’s 15th August 1947 Independence Day (highlight portion starts at 2:48).',
    category: 'Stage Drama & History',
    youtubeId: 'W497IhKC8mI',
    start: 168,
    thumbnail: 'https://img.youtube.com/vi/W497IhKC8mI/hqdefault.jpg',
  },
  {
    id: 'vid-patriotic-song',
    title: 'Students Patriotic Song Performance',
    description: 'Students of IJMA International Model School performing an emotional patriotic anthem on our Topsia campus in Kolkata.',
    category: 'Patriotic Anthem',
    youtubeId: 'EALHYFvC8FI',
    start: 0,
    thumbnail: 'https://img.youtube.com/vi/EALHYFvC8FI/hqdefault.jpg',
  },
  {
    id: 'vid-1',
    title: 'Art & Maths Project 3D Model Presentation',
    description: 'Students proudly presenting their multi-disciplinary 3D projects and mathematical models to teachers and visitors.',
    category: 'Student Presentations',
    src: '/assets/ijma/videos/Art-and-maths-project.mp4',
    thumbnail: '/assets/ijma/photos/Art-exibition.jpeg',
  },
  {
    id: 'vid-2',
    title: 'Art Project Exhibition Walkthrough',
    description: 'A comprehensive walkthrough of creative student artwork, paintings, and historical science exhibits.',
    category: 'Exhibitions & Projects',
    src: '/assets/ijma/videos/Art-project-xehibition.mp4',
    thumbnail: '/assets/ijma/photos/teacher-watching-art-of the-students.jpeg',
  },
  {
    id: 'vid-3',
    title: 'Young Scholar Explaining Science Project (Part 1)',
    description: 'A young student articulating the scientific principles behind their working model with poise and confidence.',
    category: 'Student Presentations',
    src: '/assets/ijma/videos/Student-xeplaning-their-art-project.mp4',
    thumbnail: '/assets/ijma/photos/Art-class.jpg',
  },
  {
    id: 'vid-4',
    title: 'Young Scholar Explaining Science Project (Part 2)',
    description: 'Demonstrating hands-on craftwork and explaining early inventions during the school exhibition.',
    category: 'Student Presentations',
    src: '/assets/ijma/videos/Art-explaining-student2.mp4',
    thumbnail: '/assets/ijma/photos/Art-Consult.jpeg',
  },
  {
    id: 'vid-5',
    title: 'Project Exhibitions & Model Demonstration',
    description: 'Interactive demonstration of geography, environmental science, and Islamic history exhibits.',
    category: 'Exhibitions & Projects',
    src: '/assets/ijma/videos/Project-exhibitions.mp4',
    thumbnail: '/assets/ijma/photos/Best-student-prize-distribution.jpeg',
  },
  {
    id: 'vid-6',
    title: 'Art Project Showcase Clip',
    description: 'Close-up highlights of student handmade models, paper crafts, and geometric structures.',
    category: 'Exhibitions & Projects',
    src: '/assets/ijma/videos/Art-project.mp4',
    thumbnail: '/assets/ijma/photos/Art-seminor-2.jpeg',
  },
  {
    id: 'vid-7',
    title: 'Academic Seminar & Teachers Workshop (Session 1)',
    description: 'Faculty discussions and collaborative training on modern pedagogy and Islamic Tarbiyah.',
    category: 'Academic Seminars',
    src: '/assets/ijma/videos/Art-seminer.mp4',
    thumbnail: '/assets/ijma/photos/Parent-tyeacher-meeting.jpeg',
  },
  {
    id: 'vid-8',
    title: 'Academic Seminar & Teachers Workshop (Session 2)',
    description: 'Interactive session exploring student talent discovery, moral guidance, and curriculum enrichment.',
    category: 'Academic Seminars',
    src: '/assets/ijma/videos/Art-seminer2.mp4',
    thumbnail: '/assets/ijma/photos/Parent-tyeacher-meeting.jpeg',
  },
  {
    id: 'vid-9',
    title: 'Academic Seminar & Teachers Workshop (Session 3)',
    description: 'Collaborative evaluations of student progress and parent-school partnerships.',
    category: 'Academic Seminars',
    src: '/assets/ijma/videos/Art-seminer3.mp4',
    thumbnail: '/assets/ijma/photos/gust-price.jpeg',
  },
  {
    id: 'vid-10',
    title: 'Art & Skill Development Seminar Session',
    description: 'Practical teacher-led demonstration of arts integration with STEM and mathematics.',
    category: 'Academic Seminars',
    src: '/assets/ijma/videos/Art-seminoer.mp4',
    thumbnail: '/assets/ijma/photos/Art-seminer.jpeg',
  },
  {
    id: 'vid-11',
    title: 'Annual Sports Meet & Campus Activities Highlights',
    description: 'Sprint races, sports drills, and joyful campus atmosphere on the green sports ground.',
    category: 'Campus Highlights',
    src: '/assets/ijma/videos/WhatsApp Video 2026-11-21 at 1.52.38 PM.mp4',
    thumbnail: '/assets/ijma/photos/Runnig-student-in-sports-meet.jpg',
  },
];

const CATEGORIES = [
  'All',
  'Stage Drama & History',
  'Patriotic Anthem',
  'Student Presentations',
  'Exhibitions & Projects',
  'Academic Seminars',
  'Campus Highlights',
] as const;

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeVideo, setActiveVideo] = useState<SchoolVideoItem | null>(ALL_VIDEOS[0]);
  const [modalVideo, setModalVideo] = useState<SchoolVideoItem | null>(null);

  const filteredVideos =
    selectedCategory === 'All'
      ? ALL_VIDEOS
      : ALL_VIDEOS.filter((v) => v.category === selectedCategory);

  return (
    <div className="flex-1 bg-white">
      {/* Hero Banner */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-[#0A5C36] to-[#08482A] text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5A623_1px,transparent_1px)] [background-size:24px_24px]" />
        <Container className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 text-[#F5A623]">
            <Film className="w-4 h-4" />
            <span>Official Video Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
            Student Presentations & Campus Videos
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Watch real classroom recordings, student project demonstrations, academic seminars, and sports highlights from IJMA International Model School in Topsia, Kolkata.
          </p>
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        {/* Featured Player */}
        {activeVideo && (
          <div className="mb-16 bg-[#F8FAF9] rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-100 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg">
                  {activeVideo && activeVideo.youtubeId ? (
                    <iframe
                      key={activeVideo.youtubeId}
                      src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&start=${activeVideo.start || 0}&rel=0`}
                      title={activeVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : activeVideo && activeVideo.src ? (
                    <video
                      key={activeVideo.src}
                      src={activeVideo.src}
                      controls
                      playsInline
                      poster={activeVideo.thumbnail}
                      className="w-full h-full object-contain"
                    />
                  ) : null}
                </div>
              </div>
              <div className="lg:col-span-4 text-left">
                <span className="text-xs font-bold text-[#0A5C36] bg-emerald-100/70 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                  {activeVideo.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
                  {activeVideo.title}
                </h2>
                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {activeVideo.description}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center gap-3 text-xs text-gray-500 font-medium">
                  <span>IJMA International Model School Media</span>
                  <span>•</span>
                  <span>Topsia, Kolkata</span>
                </div>
              </div>
            </div>
          </div>
        )}

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

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => {
                setActiveVideo(video);
                window.scrollTo({ top: 350, behavior: 'smooth' });
              }}
              className={`group bg-white rounded-3xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col ${
                activeVideo?.id === video.id
                  ? 'border-[#0A5C36] shadow-xl ring-2 ring-[#0A5C36]/30'
                  : 'border-gray-100 shadow-md hover:shadow-xl hover:border-gray-200'
              }`}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/25 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#0A5C36] text-white flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {video.category}
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="font-bold text-base text-gray-900 group-hover:text-[#0A5C36] transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A5C36]">
                  <span>Click to Play Above</span>
                  <span>▶</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
