'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
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
      'Students and faculty celebrated National Education Day with prize distributions, inspiring speeches, and reflections on the vital importance of knowledge in Islam.'
  },
  {
    id: 'post-2',
    slug: 'stem-robotics-education-in-islamic-schools-ijma-kolkata',
    date: 'October 28, 2026',
    title: 'Why STEM, Robotics & Karate are Integral to Islamic Education in Topsia, Kolkata',
    excerpt:
      'How our hands-on robotics and science labs nurture critical thinking, innovation, and self-defense skills rooted in ethical Tarbiyah.'
  },
  {
    id: 'post-3',
    slug: 'annual-sports-meet-and-karate-highlights-ijma-kolkata',
    date: 'September 19, 2026',
    title: 'Parent-Teacher Orientation & Student Art Exhibitions: Building Future Leaders',
    excerpt:
      'Our regular PTM sessions and multi-disciplinary exhibitions demonstrate the transformative power of parent-school partnership.'
  }
];

export function BlogTeaserSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EBF5F8] pt-4 pb-0">
      {/* ============================================================ */}
      {/* 1. TOP ORGANIC WAVE                                          */}
      {/* ============================================================ */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          className="w-full h-auto text-[#0A6375] block -mb-[1px]"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,70 C300,160 520,175 880,120 C1160,75 1320,95 1440,105 L1440,180 L0,180 Z"
          />
        </svg>
      </div>

      {/* ============================================================ */}
      {/* 2. MAIN TEAL CONTENT BODY                                    */}
      {/* ============================================================ */}
      <div className="relative w-full bg-[#0A6375] text-white pt-6 pb-20">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* -------------------------------------------------------- */}
            {/* LEFT COLUMN: Painter Girl + Blog Posts (7 Cols)         */}
            {/* -------------------------------------------------------- */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              {/* Painter Girl Illustration */}
              <motion.div
                className="flex-shrink-0 w-32 sm:w-40 md:w-48 pt-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="relative">
                  <Image
                    src="/assets/blog/girl-drawing-colors.png"
                    alt="Girl drawing with colors"
                    width={256}
                    height={402}
                    className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-md"
                    priority
                  />
                  {/* White painted ground oval */}
                  <div className="w-28 sm:w-36 h-3 bg-white/70 rounded-full mx-auto blur-[1px] -mt-1.5" />
                </div>
              </motion.div>

              {/* Blog Content & Posts List */}
              <div className="flex-1">
                {/* Heading */}
                <div className="mb-8">
                  <span className="text-white text-base font-semibold tracking-wide block mb-1">
                    Blog
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white tracking-tight leading-tight">
                    News about our Education
                  </h2>
                </div>

                {/* Posts List */}
                <div className="space-y-6">
                  {/* Post 1 */}
                  <div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90 mb-1.5 font-medium">
                      <Calendar className="w-4 h-4 text-[#F68B1F]" />
                      <span>{BLOG_POSTS[0].date}</span>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-white hover:text-[#F68B1F] transition-colors leading-snug mb-2">
                      <Link href={`/blog/${BLOG_POSTS[0].slug}`}>
                        {BLOG_POSTS[0].title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                      {BLOG_POSTS[0].excerpt}
                    </p>
                    {/* Wavy loop divider */}
                    <div className="w-full h-3 opacity-50">
                      <Image
                        src="/assets/decorative/blog-wavy-divider.svg"
                        alt="divider"
                        width={600}
                        height={14}
                        className="w-full h-full object-fill"
                      />
                    </div>
                  </div>

                  {/* Post 2 */}
                  <div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90 mb-1.5 font-medium">
                      <Calendar className="w-4 h-4 text-[#F68B1F]" />
                      <span>{BLOG_POSTS[1].date}</span>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-white hover:text-[#F68B1F] transition-colors leading-snug mb-2">
                      <Link href={`/blog/${BLOG_POSTS[1].slug}`}>
                        {BLOG_POSTS[1].title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                      {BLOG_POSTS[1].excerpt}
                    </p>
                    {/* Wavy loop divider */}
                    <div className="w-full h-3 opacity-50">
                      <Image
                        src="/assets/decorative/blog-wavy-divider.svg"
                        alt="divider"
                        width={600}
                        height={14}
                        className="w-full h-full object-fill"
                      />
                    </div>
                  </div>

                  {/* Post 3 with Duck & Train Doodles */}
                  <div className="relative">
                    {/* Duck Doodle (Left) */}
                    <motion.div
                      className="absolute -left-12 sm:-left-16 top-0 w-10 sm:w-12 pointer-events-none text-white/70"
                      animate={{ y: [0, -6, 0], rotate: [-4, 4, -4] }}
                      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Image
                        src="/assets/decorative/blog-duck.svg"
                        alt="Duck"
                        width={50}
                        height={50}
                        className="w-full h-auto object-contain filter invert opacity-80"
                      />
                    </motion.div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90 mb-1.5 font-medium">
                      <Calendar className="w-4 h-4 text-[#F68B1F]" />
                      <span>{BLOG_POSTS[2].date}</span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg sm:text-xl text-white hover:text-[#F68B1F] transition-colors leading-snug mb-2">
                          <Link href={`/blog/${BLOG_POSTS[2].slug}`}>
                            {BLOG_POSTS[2].title}
                          </Link>
                        </h3>
                        <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                          {BLOG_POSTS[2].excerpt}
                        </p>
                      </div>

                      {/* Toy Train Doodle (Right) */}
                      <motion.div
                        className="w-14 sm:w-16 flex-shrink-0 pt-1 pointer-events-none"
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Image
                          src="/assets/decorative/blog-train.svg"
                          alt="Train"
                          width={65}
                          height={50}
                          className="w-full h-auto object-contain"
                        />
                      </motion.div>
                    </div>

                    {/* Curved dashed arrow pointing right */}
                    <div className="w-24 sm:w-32 h-6 mt-1 ml-auto mr-12 opacity-80 pointer-events-none">
                      <Image
                        src="/assets/decorative/blog-arrow.svg"
                        alt="Arrow"
                        width={120}
                        height={30}
                        className="w-full h-full object-contain filter invert"
                      />
                    </div>
                  </div>
                </div>

                {/* View More Pink Button */}
                <div className="mt-8">
                  <Link
                    href="/blog"
                    className="inline-block px-8 py-3.5 rounded-full bg-[#EB1551] text-white font-bold text-sm sm:text-base hover:bg-[#d01347] transition-all hover:scale-105 shadow-md"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/* RIGHT COLUMN: Leaf Frame + Kids Eating Circle (5 Cols)  */}
            {/* -------------------------------------------------------- */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-4 lg:pt-8">
              {/* The Authentic Orange Leaf Photo Frame */}
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

                {/* Masked Classroom Photo */}
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
                    maskPosition: 'center'
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

                {/* Small floating pencil doodle at bottom of leaf frame */}
                <motion.div
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 w-8 h-8 pointer-events-none"
                  animate={{ y: [0, 8, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow">
                    <path d="M4,28 L8,28 L26,10 L22,6 L4,24 Z" fill="#EE302E" />
                    <path d="M22,6 L26,10 L28,8 L24,4 Z" fill="#F68A1F" />
                    <path d="M4,28 L4,24 L8,28 Z" fill="#FDD211" />
                  </svg>
                </motion.div>
              </div>

              {/* Bottom Circular Kids Eating Photo */}
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
      {/* 3. BOTTOM ORGANIC WAVE                                       */}
      {/* ============================================================ */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          className="w-full h-auto text-[#0A6375] block -mt-[1px]"
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
