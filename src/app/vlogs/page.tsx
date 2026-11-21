'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Play,
  Video,
  Film,
  Camera,
  Eye,
  Filter,
  Sparkles,
  Maximize2,
  CheckCircle2,
  Share2,
  Youtube,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Lightbox, LightboxImage } from '@/components/ui/Lightbox';

// --- VIDEO DATA DEFINITION ---
interface SchoolVideoItem {
  id: string;
  title: string;
  description: string;
  category:
    | 'Stage Drama & History'
    | 'Patriotic Anthem'
    | 'Student Presentations'
    | 'Exhibitions & Projects'
    | 'Academic Seminars'
    | 'Campus Highlights';
  src?: string;
  youtubeId?: string;
  start?: number;
  thumbnail: string;
}

const ALL_VIDEOS: SchoolVideoItem[] = [
  {
    id: 'vid-drama-1947',
    title: '15th August 1947 Independence Day Drama Performance',
    description:
      'Students performing a moving historical drama re-enacting India’s 15th August 1947 Independence Day (highlight portion starts at 2:48).',
    category: 'Stage Drama & History',
    youtubeId: 'W497IhKC8mI',
    start: 168,
    thumbnail: 'https://img.youtube.com/vi/W497IhKC8mI/hqdefault.jpg',
  },
  {
    id: 'vid-patriotic-song',
    title: 'Students Patriotic Song Performance',
    description:
      'Students of IJMA International Model School performing an emotional patriotic anthem on our Topsia campus in Kolkata.',
    category: 'Patriotic Anthem',
    youtubeId: 'EALHYFvC8FI',
    start: 0,
    thumbnail: 'https://img.youtube.com/vi/EALHYFvC8FI/hqdefault.jpg',
  },
  {
    id: 'vid-1',
    title: 'Art & Maths Project 3D Model Presentation',
    description:
      'Students proudly presenting their multi-disciplinary 3D projects and mathematical models to teachers and visitors.',
    category: 'Student Presentations',
    src: '/assets/ijma/videos/Art-and-maths-project.mp4',
    thumbnail: '/assets/ijma/photos/Art-exibition.jpeg',
  },
  {
    id: 'vid-2',
    title: 'Art Project Exhibition Walkthrough',
    description:
      'A comprehensive walkthrough of creative student artwork, paintings, and historical science exhibits.',
    category: 'Exhibitions & Projects',
    src: '/assets/ijma/videos/Art-project-xehibition.mp4',
    thumbnail: '/assets/ijma/photos/teacher-watching-art-of the-students.jpeg',
  },
  {
    id: 'vid-3',
    title: 'Young Scholar Explaining Science Project (Part 1)',
    description:
      'A young student articulating the scientific principles behind their working model with poise and confidence.',
    category: 'Student Presentations',
    src: '/assets/ijma/videos/Student-xeplaning-their-art-project.mp4',
    thumbnail: '/assets/ijma/photos/Art-class.jpg',
  },
  {
    id: 'vid-4',
    title: 'Young Scholar Explaining Science Project (Part 2)',
    description:
      'Demonstrating hands-on craftwork and explaining early inventions during the school exhibition.',
    category: 'Student Presentations',
    src: '/assets/ijma/videos/Art-explaining-student2.mp4',
    thumbnail: '/assets/ijma/photos/Art-Consult.jpeg',
  },
  {
    id: 'vid-5',
    title: 'Project Exhibitions & Model Demonstration',
    description:
      'Interactive demonstration of geography, environmental science, and Islamic history exhibits.',
    category: 'Exhibitions & Projects',
    src: '/assets/ijma/videos/Project-exhibitions.mp4',
    thumbnail: '/assets/ijma/photos/Best-student-prize-distribution.jpeg',
  },
  {
    id: 'vid-6',
    title: 'Art Project Showcase Clip',
    description:
      'Close-up highlights of student handmade models, paper crafts, and geometric structures.',
    category: 'Exhibitions & Projects',
    src: '/assets/ijma/videos/Art-project.mp4',
    thumbnail: '/assets/ijma/photos/Art-seminor-2.jpeg',
  },
  {
    id: 'vid-7',
    title: 'Academic Seminar & Teachers Workshop (Session 1)',
    description:
      'Faculty discussions and collaborative training on modern pedagogy and Islamic Tarbiyah.',
    category: 'Academic Seminars',
    src: '/assets/ijma/videos/Art-seminer.mp4',
    thumbnail: '/assets/ijma/photos/Parent-tyeacher-meeting.jpeg',
  },
  {
    id: 'vid-8',
    title: 'Academic Seminar & Teachers Workshop (Session 2)',
    description:
      'Interactive session exploring student talent discovery, moral guidance, and curriculum enrichment.',
    category: 'Academic Seminars',
    src: '/assets/ijma/videos/Art-seminer2.mp4',
    thumbnail: '/assets/ijma/photos/Parent-tyeacher-meeting.jpeg',
  },
  {
    id: 'vid-9',
    title: 'Academic Seminar & Teachers Workshop (Session 3)',
    description:
      'Collaborative evaluations of student progress and parent-school partnerships.',
    category: 'Academic Seminars',
    src: '/assets/ijma/videos/Art-seminer3.mp4',
    thumbnail: '/assets/ijma/photos/gust-price.jpeg',
  },
  {
    id: 'vid-10',
    title: 'Art & Skill Development Seminar Session',
    description:
      'Practical teacher-led demonstration of arts integration with STEM and mathematics.',
    category: 'Academic Seminars',
    src: '/assets/ijma/videos/Art-seminoer.mp4',
    thumbnail: '/assets/ijma/photos/Art-seminer.jpeg',
  },
  {
    id: 'vid-11',
    title: 'Annual Sports Meet & Campus Activities Highlights',
    description:
      'Sprint races, sports drills, and joyful campus atmosphere on the green sports ground.',
    category: 'Campus Highlights',
    src: '/assets/ijma/videos/WhatsApp Video 2026-11-21 at 1.52.38 PM.mp4',
    thumbnail: '/assets/ijma/photos/Runnig-student-in-sports-meet.jpg',
  },
];

// --- PHOTO GALLERY DATA DEFINITION ---
interface GalleryPhotoItem {
  id: string;
  title: string;
  category: 'Sports & Karate' | 'STEM & Robotics' | 'Exhibitions' | 'Ceremonies' | 'Classroom & PTM';
  image: string;
  description: string;
}

const GALLERY_PHOTOS: GalleryPhotoItem[] = [
  {
    id: 'jashn-1',
    title: 'Jashn-e-Ijma Independence Day Grand Stage Performance',
    category: 'Ceremonies',
    image: '/assets/ijma/photos/jashn-e-ijma-independence-day.jpg',
    description:
      'Students performing on stage at Kala Kunj, Kala Mandir, Kolkata celebrating Independence Day 2026.',
  },
  {
    id: 'sports-1',
    title: 'Annual Sports Meet - Sprint Track Race',
    category: 'Sports & Karate',
    image: '/assets/ijma/photos/Runnig-student-in-sports-meet.jpg',
    description:
      'Energetic young students competing on the synthetic sports turf during the Annual Sports Meet.',
  },
  {
    id: 'robotics-1',
    title: 'Robotics & STEM Gear Engineering Lab',
    category: 'STEM & Robotics',
    image: '/assets/ijma/photos/Art-class.jpg',
    description:
      'Students constructing motorized robotic vehicles, circuit breadboards, and mechanical gear contraptions.',
  },
  {
    id: 'karate-1',
    title: 'Certified Karate & Self Defence Session',
    category: 'Sports & Karate',
    image: '/assets/ijma/photos/Kerate-session.jpeg',
    description:
      'Black-belt senseis coaching boys and girls in self-defense routines, balance, and athletic agility.',
  },
  {
    id: 'karate-2',
    title: 'Karate Belt Stance & Form Training',
    category: 'Sports & Karate',
    image: '/assets/ijma/photos/Kerate-class-2.jpeg',
    description:
      'Students demonstrating kata forms and defensive postures on the green sports ground.',
  },
  {
    id: 'exhibition-1',
    title: 'Multi-Disciplinary Science & Art Exhibition',
    category: 'Exhibitions',
    image: '/assets/ijma/photos/Art-exibition.jpeg',
    description:
      'Students presenting handmade dioramas on early human civilization, geometry, and the 7 Pillars of Faith.',
  },
  {
    id: 'exhibition-2',
    title: 'Teacher Reviewing Student Projects',
    category: 'Exhibitions',
    image: '/assets/ijma/photos/teacher-watching-art-of the-students.jpeg',
    description:
      'Faculty members interacting with young innovators during the project demonstration fair.',
  },
  {
    id: 'ptm-1',
    title: 'Parent-Teacher Orientation & Smart Classroom',
    category: 'Classroom & PTM',
    image: '/assets/ijma/photos/Parent-tyeacher-meeting.jpeg',
    description:
      'Interactive Smart Classroom setup with teachers and parents discussing student progress.',
  },
  {
    id: 'ceremony-1',
    title: 'Best Student Merit Prize Distribution',
    category: 'Ceremonies',
    image: '/assets/ijma/photos/Best-student-prize-distribution.jpeg',
    description:
      'Honoring top academic scholars with medals and certificates of distinction.',
  },
  {
    id: 'ceremony-2',
    title: 'Annual Award Ceremony Presentation',
    category: 'Ceremonies',
    image: '/assets/ijma/photos/Prize-Distirbution-serimony.jpg',
    description:
      'Distinguished guests and faculty awarding achievement prizes to outstanding pupils.',
  },
  {
    id: 'ceremony-3',
    title: 'National Education Day Commemoration',
    category: 'Ceremonies',
    image: '/assets/ijma/photos/education-day-prize-distribution.jpeg',
    description:
      'Maulana Abul Kalam Azad Birth Anniversary celebration and award presentation.',
  },
  {
    id: 'exhibition-3',
    title: 'Student Explaining Mathematical Geometric Concepts',
    category: 'Exhibitions',
    image: '/assets/ijma/photos/Art-Consult.jpeg',
    description:
      'Young students demonstrating geometric solids, fractions, and hands-on mathematical tools.',
  },
  {
    id: 'ceremony-4',
    title: 'Guest of Honor Prize Ceremony',
    category: 'Ceremonies',
    image: '/assets/ijma/photos/gust-price.jpeg',
    description:
      'Distinguished Islamic community leaders and educationists felicitating young student achievers.',
  },
  {
    id: 'seminar-1',
    title: 'Faculty Workshop & Teacher Development',
    category: 'Classroom & PTM',
    image: '/assets/ijma/photos/Art-seminer.jpeg',
    description:
      'Pedagogical enrichment seminar focusing on child psychology and Islamic character cultivation.',
  },
  {
    id: 'seminar-2',
    title: 'Curriculum Enrichment Session',
    category: 'Classroom & PTM',
    image: '/assets/ijma/photos/Art-seminor-2.jpeg',
    description:
      'Teachers collaborating on experiential learning techniques and CBSE syllabus alignment.',
  },
];

const VIDEO_CATEGORIES = [
  'All',
  'Stage Drama & History',
  'Patriotic Anthem',
  'Student Presentations',
  'Exhibitions & Projects',
  'Academic Seminars',
  'Campus Highlights',
] as const;

const PHOTO_CATEGORIES = [
  'All',
  'Ceremonies',
  'Sports & Karate',
  'STEM & Robotics',
  'Exhibitions',
  'Classroom & PTM',
] as const;

type ActiveSectionTab = 'all' | 'videos' | 'photos';

export default function VlogsPage() {
  const [activeTab, setActiveTab] = useState<ActiveSectionTab>('all');
  const [selectedVideoCat, setSelectedVideoCat] = useState<string>('All');
  const [selectedPhotoCat, setSelectedPhotoCat] = useState<string>('All');

  const [activeVideo, setActiveVideo] = useState<SchoolVideoItem | null>(ALL_VIDEOS[0]);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredVideos =
    selectedVideoCat === 'All'
      ? ALL_VIDEOS
      : ALL_VIDEOS.filter((v) => v.category === selectedVideoCat);

  const filteredPhotos =
    selectedPhotoCat === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedPhotoCat);

  const lightboxImages: LightboxImage[] = filteredPhotos.map((photo, i) => ({
    id: i + 1,
    image: photo.image,
    title: photo.title,
    category: photo.category,
  }));

  return (
    <div className="flex-1 bg-white">
      {/* 1. Hero Banner */}
      <div className="relative py-16 sm:py-24 bg-gradient-to-b from-[#0A5C36] via-[#08482A] to-[#043320] text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px]" />
        <Container className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 text-[#86EFAC]">
            <Film className="w-4 h-4 text-[#F5A623]" />
            <span>Campus Vlogs, Video Highlights & Photo Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
            Official IJMA Vlogs & Gallery
          </h1>
          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Discover life at IJMA International Model School in Topsia, Kolkata. Explore real video recordings of stage dramas, patriotic anthems, science presentations, and our complete photo gallery.
          </p>

          {/* Official YouTube Channel CTA */}
          <div className="mt-5">
            <a
              href="https://www.youtube.com/@ijma977"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0A5C36] hover:bg-[#10B981] text-white font-bold text-xs sm:text-sm border border-emerald-400/40 shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Youtube className="w-4 h-4 fill-white" />
              <span>Subscribe on YouTube (@ijma977)</span>
            </a>
          </div>

          {/* Section Mode Switcher Pills */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-black/40 backdrop-blur-md rounded-full border border-emerald-500/30">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#10B981] text-white shadow-md'
                  : 'text-emerald-200 hover:text-white'
              }`}
            >
              All Media Hub
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'videos'
                  ? 'bg-[#10B981] text-white shadow-md'
                  : 'text-emerald-200 hover:text-white'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Campus Videos ({ALL_VIDEOS.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'photos'
                  ? 'bg-[#10B981] text-white shadow-md'
                  : 'text-emerald-200 hover:text-white'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Photo Gallery ({GALLERY_PHOTOS.length})</span>
            </button>
          </div>
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        {/* =========================================================================
            SECTION A: VIDEO SHOWCASE & PLAYER
        ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'videos') && (
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
              <div>
                <span className="text-xs font-bold text-[#0A5C36] uppercase tracking-wider block mb-1">
                  Video Presentations & Vlogs
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                  Featured Campus Recordings
                </h2>
              </div>
              <span className="text-xs text-gray-500 font-medium">
                Showing {filteredVideos.length} of {ALL_VIDEOS.length} videos
              </span>
            </div>

            {/* Featured Main Video Player */}
            {activeVideo && (
              <div className="mb-12 bg-[#F8FAF9] rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-100 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg">
                      {activeVideo.youtubeId ? (
                        <iframe
                          key={activeVideo.youtubeId}
                          src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&start=${activeVideo.start || 0}&rel=0`}
                          title={activeVideo.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full border-0"
                        />
                      ) : activeVideo.src ? (
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
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-snug">
                      {activeVideo.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                      {activeVideo.description}
                    </p>
                    <div className="mt-6 pt-6 border-t border-gray-200 flex items-center gap-3 text-xs text-gray-500 font-medium">
                      <span>IJMA International Model School</span>
                      <span>•</span>
                      <span>Topsia, Kolkata</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Video Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {VIDEO_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedVideoCat(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    selectedVideoCat === cat
                      ? 'bg-[#0A5C36] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                    window.scrollTo({ top: 380, behavior: 'smooth' });
                  }}
                  className={`group bg-white rounded-3xl overflow-hidden border transition-all duration-300 cursor-pointer flex flex-col ${
                    activeVideo?.id === video.id
                      ? 'border-[#0A5C36] shadow-xl ring-2 ring-[#0A5C36]/30'
                      : 'border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200'
                  }`}
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/25 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-[#0A5C36] text-white flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {video.category}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between text-left">
                    <div>
                      <h4 className="font-bold text-base text-gray-900 group-hover:text-[#0A5C36] transition-colors leading-snug">
                        {video.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A5C36]">
                      <span>Click to Play</span>
                      <span>▶</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            SECTION B: PHOTO GALLERY & LIGHTBOX
        ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'photos') && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-gray-200">
              <div>
                <span className="text-xs font-bold text-[#0A5C36] uppercase tracking-wider block mb-1">
                  Campus Moments & Snapshots
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                  School Photo Gallery
                </h2>
              </div>
              <span className="text-xs text-gray-500 font-medium">
                Showing {filteredPhotos.length} of {GALLERY_PHOTOS.length} photographs
              </span>
            </div>

            {/* Photo Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {PHOTO_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedPhotoCat(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    selectedPhotoCat === cat
                      ? 'bg-[#0A5C36] text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Photos Masonry / Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => setActiveLightboxIndex(index)}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 text-[#0A5C36] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {photo.category}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between text-left">
                    <div>
                      <h4 className="font-bold text-base text-gray-900 group-hover:text-[#0A5C36] transition-colors leading-snug">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                        {photo.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0A5C36]">
                      <span>View Full Resolution</span>
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>

      {/* Lightbox Modal */}
      <Lightbox
        images={lightboxImages}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIndex) => setActiveLightboxIndex(newIndex)}
      />
    </div>
  );
}
