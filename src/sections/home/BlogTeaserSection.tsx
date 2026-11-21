'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Volume2, VolumeX, Play, Video, ExternalLink } from 'lucide-react';
import { Container } from '@/components/ui/Container';

interface BlogPostItem {
  id: string;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
}

const BLOG_POSTS: BlogPostItem[] = [
  {
    id: 'post-1',
    slug: 'national-education-day-celebration-ijma-international-model-school-kolkata',
    date: 'November 15, 2026',
    title: 'Commemorating National Education Day & Maulana Azad Birth Anniversary at IJMA',
    excerpt:
      'Students and faculty celebrated National Education Day with prize distributions, inspiring speeches, and reflections on the vital importance of knowledge in Islam.',
  },
  {
    id: 'post-2',
    slug: 'stem-robotics-education-in-islamic-schools-ijma-kolkata',
    date: 'October 28, 2026',
    title: 'Why STEM, Robotics & Karate are Integral to Islamic Education in Topsia, Kolkata',
    excerpt:
      'How our hands-on robotics and science labs nurture critical thinking, innovation, and self-defense skills rooted in ethical Tarbiyah.',
  },
  {
    id: 'post-3',
    slug: 'annual-sports-meet-and-karate-highlights-ijma-kolkata',
    date: 'September 19, 2026',
    title: 'Parent-Teacher Orientation & Student Art Exhibitions: Building Future Leaders',
    excerpt:
      'Our regular PTM sessions and multi-disciplinary exhibitions demonstrate the transformative power of parent-school partnership.',
  },
];

export function BlogTeaserSection() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative w-full overflow-hidden bg-[#F0FDF4] pt-4 pb-0" aria-label="Educational Highlights & Blog">
      {/* ============================================================ */}
      {/* 1. TOP ORGANIC WAVE IN DEEP ISLAMIC GREEN                     */}
      {/* ============================================================ */}
      <div className="w-full overflow-hidden leading-none relative z-10">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          className="w-full h-auto text-[#0A5C36] block -mb-[1px]"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,70 C300,160 520,175 880,120 C1160,75 1320,95 1440,105 L1440,180 L0,180 Z"
          />
        </svg>
      </div>

      {/* ============================================================ */}
      {/* 2. MAIN CONTENT BODY WITH BACKGROUND YOUTUBE VIDEO            */}
      {/* ============================================================ */}
      <div className="relative w-full bg-[#0A5C36] text-white pt-6 pb-20 overflow-hidden">
        {/* Background YouTube Video: Duaon Me Meri Khudaya Asar De - Jashn-E-Ijma 2026 (wPsAa19ysY8) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/wPsAa19ysY8?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=wPsAa19ysY8&playsinline=1&rel=0&showinfo=0&modestbranding=1`}
            title="Duaon Me Meri Khudaya Asar De - Jashn-E-Ijma 2026 Performance Background"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute top-1/2 left-1/2 w-[350%] sm:w-[180%] lg:w-[130%] h-[350%] sm:h-[180%] lg:h-[130%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-80 pointer-events-none"
          />
        </div>

        {/* Deep Islamic Green Gradient Overlay for clear video visibility & high text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A5C36]/85 via-[#0A5C36]/70 to-[#064E3B]/90 pointer-events-none z-0" />

        {/* Radial subtle grid texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px] z-0" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* -------------------------------------------------------- */}
            {/* LEFT COLUMN: Section Header, Audio Toggle & Blog Posts   */}
            {/* -------------------------------------------------------- */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Header with Title and Mute/Unmute audio button */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/15 border border-emerald-300/30 text-[#86EFAC] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                    <Video className="w-3.5 h-3.5 text-[#F5A623]" />
                    <span>Duaon Me Meri Khudaya Asar De • Jashn-E-Ijma</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black text-white tracking-tight leading-tight">
                    News & Campus Insights
                  </h2>
                </div>

                {/* Sound Toggle Button */}
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 hover:bg-[#10B981] text-white text-xs sm:text-sm font-bold backdrop-blur-md border border-white/25 shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-4 h-4 text-emerald-400" />
                      <span>Unmute Video</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                      <span>Mute Video</span>
                    </>
                  )}
                </button>
              </div>

              {/* Glassmorphism Blog Cards over live background video */}
              <div className="space-y-4">
                {BLOG_POSTS.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-black/30 hover:bg-black/45 backdrop-blur-xs p-5 sm:p-6 rounded-2xl border border-white/15 hover:border-emerald-400/40 shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#86EFAC] mb-2 font-bold">
                      <Calendar className="w-4 h-4 text-[#F5A623]" />
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-[#86EFAC] transition-colors leading-snug mb-2">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-emerald-50/90 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </article>
                ))}
              </div>

              {/* Action Buttons: View More + YouTube Link */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0A5C36] hover:bg-[#10B981] text-white font-bold text-sm sm:text-base border border-emerald-400/40 transition-all hover:scale-105 shadow-md"
                >
                  View More Articles
                </Link>

                <a
                  href="https://www.youtube.com/watch?v=wPsAa19ysY8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#0A5C36] font-bold text-sm sm:text-base border border-white/30 backdrop-blur-xs transition-all duration-300"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/* RIGHT COLUMN: Leaf Frame + Achievement Ceremony Photos   */}
            {/* -------------------------------------------------------- */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-4 lg:pt-8">
              {/* Authentic Leaf Photo Frame */}
              <div className="relative w-full max-w-[460px] aspect-[500/390]">
                {/* Orange Leaf Border SVG (Background frame) */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <Image
                    src="/assets/decorative/leaf-border.svg"
                    alt="Leaf frame border"
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Masked Student Exhibition Photo */}
                <div
                  className="absolute inset-[10px] sm:inset-[12px] z-10 overflow-hidden"
                  style={{
                    WebkitMaskImage: `url('/assets/decorative/leaf-mask.svg')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/assets/decorative/leaf-mask.svg')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                >
                  <Image
                    src="/assets/ijma/photos/Art-exibition.jpeg"
                    alt="IJMA student project exhibition"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 460px"
                    priority
                  />
                </div>
              </div>

              {/* Bottom Circular Merit Ceremony Photo */}
              <div className="relative -mt-10 sm:-mt-14 ml-auto mr-4 sm:mr-10 z-20">
                <motion.div
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full border-[6px] border-white overflow-hidden shadow-2xl relative bg-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/assets/ijma/photos/Best-student-prize-distribution.jpeg"
                    alt="Student achievements and prize ceremony"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ============================================================ */}
      {/* 3. BOTTOM ORGANIC WAVE IN DEEP ISLAMIC GREEN                  */}
      {/* ============================================================ */}
      <div className="w-full overflow-hidden leading-none relative z-10">
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          className="w-full h-auto text-[#0A5C36] block -mt-[1px]"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,0 L1440,0 L1440,45 C1200,125 820,155 420,85 C210,55 80,75 0,90 Z"
          />
        </svg>
      </div>
    </section>
  );
}
