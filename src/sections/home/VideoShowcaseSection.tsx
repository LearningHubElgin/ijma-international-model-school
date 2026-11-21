'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Video, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

export function VideoShowcaseSection() {
  const videos = siteConfig.videoShowcase || [];
  const [selectedVideo, setSelectedVideo] = useState(videos[0] || null);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videos.length) return null;

  return (
    <section className="relative py-20 lg:py-28 bg-[#F8FAF9] overflow-hidden" aria-label="Video Showcase">
      {/* Decorative Islamic Background Geometry Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0A5C36_1px,transparent_1px)] [background-size:20px_20px]" />

      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <Reveal variant="fade-up" delay={0.1}>
            <div className="inline-flex items-center gap-2 text-[#0A5C36] bg-emerald-50 border border-emerald-200/60 px-4 py-1.5 rounded-full text-sm font-bold mb-3 shadow-xs">
              <Video className="w-4 h-4 text-[#0A5C36]" />
              <span>Campus Media & Student Presentations</span>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#111827] tracking-tight leading-tight">
              Watch Our Students in Action
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={0.3}>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Experience the ingenuity, confidence, and Islamic values of IJMA International Model School students as they demonstrate hands-on art & maths projects, science exhibitions, and academic seminars in Topsia, Kolkata.
            </p>
          </Reveal>
        </div>

        {/* Featured Main Video Player + Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Video Viewport (Col 7) */}
          <div className="lg:col-span-7">
            <Reveal variant="zoom-in" delay={0.2}>
              <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-gray-100 relative group overflow-hidden">
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
                  {selectedVideo && selectedVideo.youtubeId ? (
                    <iframe
                      key={selectedVideo.youtubeId}
                      src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=${isPlaying ? 1 : 0}&start=${selectedVideo.start || 0}&rel=0`}
                      title={selectedVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : selectedVideo && selectedVideo.src ? (
                    <video
                      key={selectedVideo.src}
                      src={selectedVideo.src}
                      controls
                      autoPlay={isPlaying}
                      playsInline
                      poster={selectedVideo.thumbnail}
                      className="w-full h-full object-contain"
                    />
                  ) : null}
                </div>

                {/* Video Info Card below player */}
                {selectedVideo && (
                  <div className="pt-4 px-2 pb-2">
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <span className="text-xs font-bold text-[#0A5C36] bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                        {selectedVideo.category}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        IJMA Model School Media
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedVideo.description}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* Video Playlist Selector (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center justify-between mb-1 px-1">
              <h4 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F5A623]" />
                <span>Featured Presentations</span>
              </h4>
              <Link
                href="/vlogs"
                className="text-xs font-bold text-[#0A5C36] hover:text-[#0A5C36]/80 flex items-center gap-1 group"
              >
                <span>All Vlogs & Videos</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1 custom-scrollbar">
              {videos.map((vid, idx) => {
                const isSelected = selectedVideo?.id === vid.id;

                return (
                  <motion.div
                    key={vid.id}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      setSelectedVideo(vid);
                      setIsPlaying(true);
                    }}
                    className={`flex items-center gap-3.5 p-3 rounded-2xl cursor-pointer transition-all duration-200 border ${
                      isSelected
                        ? 'bg-emerald-50/80 border-[#0A5C36] shadow-sm'
                        : 'bg-white hover:bg-gray-50/90 border-gray-100'
                    }`}
                  >
                    {/* Thumbnail with overlay icon */}
                    <div className="relative w-24 sm:w-28 aspect-video rounded-xl overflow-hidden bg-gray-900 flex-shrink-0">
                      <Image
                        src={vid.thumbnail}
                        alt={vid.title}
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center ${
                            isSelected ? 'bg-[#0A5C36] text-white' : 'bg-white/90 text-gray-800'
                          }`}
                        >
                          <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex-1 min-w-0 text-left">
                      <span className="text-[11px] font-bold text-[#0A5C36] uppercase tracking-wider block">
                        {vid.category}
                      </span>
                      <h5
                        className={`text-sm font-bold truncate leading-snug ${
                          isSelected ? 'text-[#0A5C36]' : 'text-gray-900'
                        }`}
                      >
                        {vid.title}
                      </h5>
                      <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                        {vid.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Banner with Link to All Videos Page */}
        <div className="mt-12 text-center">
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 bg-[#0A5C36] hover:bg-[#08482A] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Explore Complete Video Gallery ({videos.length}+ Videos)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
