'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import { Container } from '@/components/ui/Container';

interface ActivityItem {
  id: string;
  title: string;
  description: string;
  iconSvg: string;
  iconColor: string;
  shapeType: 'trapezoid' | 'square' | 'circle' | 'triangle' | 'hexagon';
  shapeColor: string;
  image?: string;
}

// In Elementor swiper on gdgoenkarohini.com, initial visible slides:
// 1. Painting (Mint Trapezoid, Mint Ball Icon)
// 2. Physical Activities (Cyan Square with Underwater Swimming Photo, Cyan School Icon)
// 3. Team Activities (Yellow Circle with Blocks Photo, Yellow Children Icon)
// followed by Individual Activity and Craft in the 5-item loop.
const ACTIVITIES: ActivityItem[] = [
  {
    id: 'painting',
    title: 'Painting',
    description: "Focuses on explore emotion,color,process & outcome. It develops child's creativity & expression.",
    iconSvg: '/assets/decorative/smart-icon-ball.svg',
    iconColor: '#70E2B0',
    shapeType: 'trapezoid',
    shapeColor: '#70E2B0'
  },
  {
    id: 'physical',
    title: 'Physical Activities',
    description: 'Focuses on Strengthening posture and flexibility in children with following activities: a) SPLASH POOL; b) SKATING; c) TAEKWONDO',
    iconSvg: '/assets/decorative/smart-icon-school.svg',
    iconColor: '#50C5D8',
    shapeType: 'square',
    shapeColor: '#50C5D8',
    image: '/assets/activities/smart-physical.jpg'
  },
  {
    id: 'team',
    title: 'Team Activities',
    description: 'Focuses on developing life skills-Problem Solving,Leadership,Empathy',
    iconSvg: '/assets/decorative/smart-icon-children.svg',
    iconColor: '#FBB03B',
    shapeType: 'circle',
    shapeColor: '#FBB03B',
    image: '/assets/activities/smart-team.jpg'
  },
  {
    id: 'individual',
    title: 'Individual Activity',
    description: 'Focuses on developing social and motor skill development.',
    iconSvg: '/assets/decorative/smart-icon-ball.svg',
    iconColor: '#F68B1F',
    shapeType: 'triangle',
    shapeColor: '#F68B1F'
  },
  {
    id: 'craft',
    title: 'Craft',
    description: 'Focuses on developing fine motor skills which makes writing easier for them.',
    iconSvg: '/assets/decorative/smart-icon-ball.svg',
    iconColor: '#9E5BEA',
    shapeType: 'hexagon',
    shapeColor: '#9E5BEA'
  }
];

export function SmartActivitiesSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play every 3.5 seconds like Elementor swiper on live site
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % ACTIVITIES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? ACTIVITIES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % ACTIVITIES.length);
  };

  // Get 3 visible cards in continuous loop for desktop
  const visibleCards = [
    ACTIVITIES[startIndex],
    ACTIVITIES[(startIndex + 1) % ACTIVITIES.length],
    ACTIVITIES[(startIndex + 2) % ACTIVITIES.length]
  ];

  return (
    <section className="relative w-full bg-white pt-4 pb-16 overflow-visible">
      {/* ============================================================ */}
      {/* 1. GRASSY HILL BANNER & RUNNING KIDS                         */}
      {/* ============================================================ */}
      <div className="relative w-full bg-white pt-8 sm:pt-24 lg:pt-28 overflow-visible">
        {/* Grassy hill background illustration */}
        <div
          className="relative w-full h-[230px] sm:h-[260px] md:h-[275px] bg-contain bg-bottom bg-no-repeat flex items-end justify-center"
          style={{ backgroundImage: `url('/assets/decorative/gorden_images.png')` }}
        >
          {/* Jumping Pencil Girl (Left) - hidden on mobile like Elementor live site */}
          <motion.div
            className="absolute left-[3%] sm:left-[6%] md:left-[9%] lg:left-[11%] xl:left-[12%] bottom-[95px] sm:bottom-[115px] md:bottom-[125px] z-20 w-[105px] sm:w-[120px] md:w-[128px] pointer-events-none select-none hidden sm:block"
            animate={{ y: [0, -18, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/assets/decorative/play_pencil_girl.png"
              alt="Girl jumping"
              width={128}
              height={241}
              className="w-full h-auto object-contain drop-shadow-md"
              priority
            />
          </motion.div>

          {/* Running Boy with Book (Right) - hidden on mobile like Elementor live site */}
          <motion.div
            className="absolute right-[3%] sm:right-[6%] md:right-[8%] lg:right-[10%] xl:right-[11%] bottom-[90px] sm:bottom-[110px] md:bottom-[120px] z-20 w-[120px] sm:w-[138px] md:w-[148px] pointer-events-none select-none hidden sm:block"
            animate={{ y: [0, 14, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/assets/decorative/play_pencil_boy.png"
              alt="Boy running with book"
              width={148}
              height={184}
              className="w-full h-auto object-contain drop-shadow-md"
              priority
            />
          </motion.div>
        </div>

        {/* Authentic Elementor line.png Scalloped Loop Divider */}
        <div className="w-full flex justify-center py-2 px-4 overflow-visible">
          <div
            className="w-full max-w-[1020px] h-4 sm:h-5"
            style={{
              backgroundColor: '#0A6375',
              WebkitMaskImage: "url('/assets/decorative/line.png')",
              maskImage: "url('/assets/decorative/line.png')",
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              transform: 'scaleY(-1)'
            }}
          />
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. SMART ACTIVITIES HEADER & DOODLES                         */}
      {/* ============================================================ */}
      <Container className="relative pt-10 sm:pt-14 pb-4">
        {/* Centered Heading with Butterfly & Rainbow Sun */}
        <div className="relative max-w-2xl mx-auto text-center flex flex-col items-center mb-14">
          {/* Butterfly (Left of heading) */}
          <motion.div
            className="absolute -left-12 sm:-left-20 -top-4 w-16 sm:w-20 pointer-events-none"
            animate={{ y: [0, -12, 0], rotate: [8, 18, 8] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/assets/decorative/smart-butterfly.svg"
              alt="Butterfly"
              width={80}
              height={80}
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Tiny red/orange pencil doodle (Left) */}
          <motion.div
            className="absolute -left-2 sm:-left-6 top-8 w-7 h-7 pointer-events-none"
            animate={{ y: [0, -8, 0], rotate: [-10, -18, -10] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-sm">
              <path d="M4,28 L8,28 L26,10 L22,6 L4,24 Z" fill="#EE302E" />
              <path d="M22,6 L26,10 L28,8 L24,4 Z" fill="#F68A1F" />
              <path d="M4,28 L4,24 L8,28 Z" fill="#FDD211" />
            </svg>
          </motion.div>

          {/* Rainbow Sun (Right of heading) */}
          <motion.div
            className="absolute -right-14 sm:-right-24 -top-8 w-24 sm:w-32 pointer-events-none"
            animate={{ y: [0, -6, 0], scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/assets/decorative/smart-rainbow-sun.svg"
              alt="Rainbow Sun"
              width={140}
              height={140}
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[#EB1551] font-semibold text-sm sm:text-base tracking-wide mb-2">
            <GraduationCap className="w-5 h-5 text-[#EB1551]" />
            <span>Activity Programs</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
            Smart Activities
          </h2>
        </div>

        {/* ============================================================ */}
        {/* 3. ACTIVITY CARDS CAROUSEL (PAUSE ON HOVER)                  */}
        {/* ============================================================ */}
        <div
          className="relative max-w-6xl mx-auto px-4 sm:px-8 group/carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Side Hanging Spider - horizontally aligned with Card 1 icon */}
          <motion.div
            className="absolute -left-6 sm:left-0 md:left-2 top-2 sm:top-3 md:top-4 z-20 w-28 sm:w-36 pointer-events-none hidden sm:block"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/assets/decorative/smart-spider-left.svg"
              alt="Spider"
              width={160}
              height={90}
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Right Side Hanging Spider - horizontally aligned with Card 3 icon */}
          <motion.div
            className="absolute -right-6 sm:right-0 md:right-2 top-2 sm:top-3 md:top-4 z-20 w-28 sm:w-36 pointer-events-none hidden sm:block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/assets/decorative/smart-spider-right.svg"
              alt="Spider"
              width={160}
              height={90}
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Subtle Carousel Arrows on hover */}
          <button
            onClick={prevSlide}
            aria-label="Previous Activity"
            className="absolute -left-2 sm:-left-5 top-1/3 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 shadow-md border border-gray-100 flex items-center justify-center text-gray-700 hover:text-[#EB1551] hover:scale-110 transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Activity"
            className="absolute -right-2 sm:-right-5 top-1/3 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/90 shadow-md border border-gray-100 flex items-center justify-center text-gray-700 hover:text-[#EB1551] hover:scale-110 transition-all opacity-0 group-hover/carousel:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Visible Cards Grid (3 cards on desktop, 1 on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-start">
            <AnimatePresence mode="popLayout">
              {visibleCards.map((act) => (
                <motion.div
                  key={act.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Card Shape Container */}
                  <div className="relative flex flex-col items-center mb-6">
                    {/* Top Outline Icon (Rendered in matching card color via CSS mask) */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 -mb-4 z-10 transition-transform duration-300 group-hover:-translate-y-2 flex items-center justify-center">
                      <div
                        className="w-14 h-14 sm:w-16 sm:h-16"
                        style={{
                          backgroundColor: act.iconColor,
                          WebkitMaskImage: `url('${act.iconSvg}')`,
                          maskImage: `url('${act.iconSvg}')`,
                          WebkitMaskRepeat: 'no-repeat',
                          maskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskPosition: 'center',
                          WebkitMaskSize: 'contain',
                          maskSize: 'contain'
                        }}
                      />
                    </div>

                    {/* Shape 1: Trapezoid (Painting) */}
                    {act.shapeType === 'trapezoid' && (
                      <div className="w-[230px] sm:w-[250px] h-[210px] sm:h-[230px] relative drop-shadow-[0_12px_24px_rgba(112,226,176,0.35)] transition-transform duration-300 group-hover:scale-105">
                        <svg viewBox="0 0 260 240" className="w-full h-full">
                          <path
                            d="M55,10 L205,10 C215,10 221,15 225,25 L257,218 C260,228 254,238 244,238 L16,238 C6,238 0,228 3,218 L35,25 C39,15 45,10 55,10 Z"
                            fill="#70E2B0"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Shape 2: Cyan Square with Underwater Photo (Physical Activities) */}
                    {act.shapeType === 'square' && (
                      <div className="w-[220px] sm:w-[240px] h-[220px] sm:h-[240px] rounded-2xl border-[6px] border-[#50C5D8] overflow-hidden shadow-[0_12px_28px_rgba(80,197,216,0.4)] relative transition-transform duration-300 group-hover:scale-105 bg-[#50C5D8]/10">
                        {act.image && (
                          <Image
                            src={act.image}
                            alt={act.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="260px"
                          />
                        )}
                      </div>
                    )}

                    {/* Shape 3: Golden Yellow Circle with Blocks Photo (Team Activities) */}
                    {act.shapeType === 'circle' && (
                      <div className="w-[220px] sm:w-[240px] h-[220px] sm:h-[240px] rounded-full border-[6px] border-[#FBB03B] overflow-hidden shadow-[0_12px_28px_rgba(251,176,59,0.4)] relative transition-transform duration-300 group-hover:scale-105 bg-[#FBB03B]/10">
                        {act.image && (
                          <Image
                            src={act.image}
                            alt={act.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="260px"
                          />
                        )}
                      </div>
                    )}

                    {/* Shape 4: Triangle (Individual Activity) */}
                    {act.shapeType === 'triangle' && (
                      <div className="w-[230px] sm:w-[250px] h-[210px] sm:h-[230px] relative drop-shadow-[0_12px_24px_rgba(246,139,31,0.35)] transition-transform duration-300 group-hover:scale-105">
                        <svg viewBox="0 0 260 240" className="w-full h-full">
                          <path
                            d="M118,18 C124,8 136,8 142,18 L254,215 C260,225 253,238 242,238 L18,238 C7,238 0,225 6,215 Z"
                            fill="#F68B1F"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Shape 5: Hexagon (Craft) */}
                    {act.shapeType === 'hexagon' && (
                      <div className="w-[230px] sm:w-[250px] h-[210px] sm:h-[230px] relative drop-shadow-[0_12px_24px_rgba(158,91,234,0.35)] transition-transform duration-300 group-hover:scale-105">
                        <svg viewBox="0 0 260 240" className="w-full h-full">
                          <path
                            d="M48,15 L212,15 C222,15 230,20 235,29 L257,110 C261,118 261,126 257,134 L235,215 C230,224 222,229 212,229 L48,229 C38,229 30,224 25,215 L3,134 C-1,126 -1,118 3,110 L25,29 C30,20 38,15 48,15 Z"
                            fill="#9E5BEA"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl sm:text-2xl text-black mb-2 group-hover:text-[#EB1551] transition-colors">
                    {act.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                    {act.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Cloud Doodle at Bottom Center */}
          <div className="w-full flex justify-center mt-8">
            <div className="w-24 sm:w-28 opacity-80 pointer-events-none">
              <Image
                src="/assets/decorative/smart-cloud-stars.svg"
                alt="Cloud doodle"
                width={120}
                height={50}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
