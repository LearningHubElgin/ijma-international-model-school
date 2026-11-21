'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Video, Sparkles, ArrowRight, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function PatrioticVideoBannerSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      className="relative w-full overflow-hidden bg-black py-20 sm:py-24 lg:py-28 text-white select-none"
      aria-label="Patriotic Video Showcase"
    >
      {/* Background YouTube Video - AutoPlay Muted by Default with high clarity */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/EALHYFvC8FI?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=EALHYFvC8FI&playsinline=1&rel=0&showinfo=0&modestbranding=1`}
          title="IJMA Students Performing Patriotic Song Background"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute top-1/2 left-1/2 w-[350%] sm:w-[180%] lg:w-[130%] h-[350%] sm:h-[180%] lg:h-[130%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-85 pointer-events-none"
        />
      </div>

      {/* Reduced Opacity Soft Emerald-Dark Vignette Overlay for Clear Video Visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-[#0A5C36]/25 to-black/75 pointer-events-none" />

      {/* Decorative Radial Geometry */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px]" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-emerald-300/30 text-[#86EFAC] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 shadow-sm"
          >
            <Video className="w-4 h-4 text-[#86EFAC]" />
            <span>Live Campus Performance • Topsia Kolkata</span>
          </motion.div>

          {/* Arabic Calligraphy / Hadith Motto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-arabic text-xl sm:text-2xl md:text-3xl text-[#F5A623] font-bold mb-3 tracking-wide"
          >
            حُبُّ الْوَطَنِ مِنَ الْإِيمَانِ • اَلْعِلْمُ نُوْرٌ
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md"
          >
            Patriotic Spirit & Cultural Excellence
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-emerald-100 max-w-2xl font-normal leading-relaxed drop-shadow-xs"
          >
            Watch the students of IJMA International Model School performing an emotional patriotic anthem on our Topsia campus. We instill deep love for our homeland alongside righteous Islamic Tarbiyah, academic discipline, and communal harmony.
          </motion.p>

          {/* Interactive Action Controls */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            {/* Watch Full Video in Modal */}
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm sm:text-base tracking-wide shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Watch With Sound</span>
            </button>

            {/* Background Mute/Unmute Quick Toggle */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm font-semibold text-sm transition-all duration-300 cursor-pointer"
              aria-label={isMuted ? 'Unmute background video' : 'Mute background video'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-[#86EFAC]" />
                  <span>Unmute Background</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-[#86EFAC] animate-pulse" />
                  <span>Mute Background</span>
                </>
              )}
            </button>

            {/* Link to Campus Videos */}
            <Link
              href="/videos"
              className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-emerald-200 hover:text-white font-bold text-sm transition-colors"
            >
              <span>Explore All Media</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Sound Status Tag */}
          <div className="mt-5 text-xs text-emerald-200/80 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span>Background video sound is muted by default • Click above to listen with sound</span>
          </div>
        </div>
      </Container>

      {/* Lightbox / Video Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/30">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-[#0A5C36] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/EALHYFvC8FI?autoplay=1&controls=1&rel=0"
                title="IJMA Students Performing Patriotic Song"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <div className="p-5 bg-[#064E3B] text-white">
              <h3 className="font-bold text-lg sm:text-xl text-white">
                IJMA Students Performing on Patriotic Anthem
              </h3>
              <p className="text-sm text-emerald-100 mt-1">
                Annual patriotic assembly performance celebrating national unity and pride at IJMA International Model School in Topsia, Kolkata.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
