'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Button } from '@/components/ui/Button';
import { CloudWaveDivider } from '@/components/ui/CloudWaveDivider';

export function HeroSliderSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 25 }, [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);

    const autoplay = emblaApi.plugins()?.autoplay;
    const activeSlide = siteConfig.heroSlides[index];

    if (activeSlide && (activeSlide as any).isVideo) {
      // For video slide: stop 3-second autoplay timer so the video plays fully
      autoplay?.stop();

      // Play the video from the beginning
      const video = videoRefs.current[index];
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {
          // Fallback if browser blocks unmuted playback
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    } else {
      // Pause any running videos when transitioning to image slides
      Object.values(videoRefs.current).forEach((v) => {
        if (v && !v.paused) {
          v.pause();
        }
      });

      // Resume standard 3-second autoplay for image slides
      autoplay?.play();
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    Object.values(videoRefs.current).forEach((v) => {
      if (v) {
        v.muted = nextMuted;
      }
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 group" aria-label="Hero Showcase">
      {/* Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {siteConfig.heroSlides.map((slide, index) => {
            const isActive = selectedIndex === index;
            const isVideoSlide = (slide as any).isVideo && (slide as any).videoSrc;

            return (
              <div
                key={slide.id}
                className="relative flex-[0_0_100%] min-w-0 h-[560px] sm:h-[640px] md:h-[700px] lg:h-[760px] xl:h-[800px] flex items-center justify-center overflow-hidden"
              >
                {/* Slide Media: High-Definition Video or Image */}
                {isVideoSlide ? (
                  <div className="absolute inset-0 w-full h-full">
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      src={(slide as any).videoSrc}
                      poster={slide.image}
                      playsInline
                      autoPlay
                      muted={isMuted}
                      onEnded={() => {
                        // Play fully, then automatically advance to the next slide upon completion
                        if (emblaApi) {
                          emblaApi.scrollNext();
                        }
                      }}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ) : (
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                )}

                {/* Subtle Vignette Overlay ensuring clear text contrast and sharp visuals */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20 z-10 pointer-events-none" />

                {/* Centered Slide Content Overlay */}
                <div className="relative z-20 max-w-4xl mx-auto px-4 text-center pt-8 sm:pt-12 md:pt-14 pb-24 sm:pb-32">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <div key={`slide-${slide.id}`} className="flex flex-col items-center">
                        {/* Eyebrow Badge in Dark Islamic Green + Gold */}
                        <motion.div
                          initial={{ opacity: 0, y: -15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="inline-flex items-center gap-2 bg-[#0A5C36]/90 border border-emerald-400/30 text-[#F5A623] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 shadow-md backdrop-blur-xs"
                        >
                          {isVideoSlide ? (
                            <>
                              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                              <span>★ {slide.badge} ★</span>
                            </>
                          ) : (
                            <span>★ {slide.badge} ★</span>
                          )}
                        </motion.div>

                        {/* Title: Bold White Font */}
                        <motion.h1
                          initial={{ opacity: 0, y: 25 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.14] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
                        >
                          {slide.title}
                        </motion.h1>

                        {/* Subtitle in Light Green */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.55, delay: 0.25 }}
                          className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-[#86EFAC] font-bold max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
                        >
                          {slide.subtitle}
                        </motion.p>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.35 }}
                          className="mt-2 text-xs sm:text-sm md:text-base text-gray-100 max-w-xl font-normal leading-relaxed hidden sm:block drop-shadow-[0_1px_5px_rgba(0,0,0,0.7)]"
                        >
                          {slide.description}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.45 }}
                          className="mt-6 flex flex-wrap items-center justify-center gap-3.5"
                        >
                          <Button
                            variant="primary"
                            size="md"
                            href={slide.ctaHref}
                            className="bg-[#0A5C36] text-white hover:bg-[#10B981] hover:text-white border border-emerald-400/40 px-7 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-bold rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
                          >
                            {slide.ctaText}
                          </Button>
                          <Button
                            variant="outline"
                            size="md"
                            href="/contact-us"
                            className="bg-white/15 hover:bg-white text-white hover:text-[#0A5C36] border-white/40 px-6 sm:px-7 py-2.5 sm:py-3 text-sm sm:text-base font-bold rounded-full backdrop-blur-xs transition-all duration-300"
                          >
                            Contact Campus
                          </Button>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Audio Toggle Button for Video Slide */}
                {isVideoSlide && isActive && (
                  <div className="absolute bottom-28 sm:bottom-32 right-5 sm:right-10 z-30">
                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                      className="inline-flex items-center gap-2 bg-black/65 hover:bg-[#0A5C36] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold backdrop-blur-md border border-white/25 shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-4 h-4 text-emerald-400" />
                          <span>Unmute Audio</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4 text-emerald-400" />
                          <span>Mute Audio</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Indicator Dots in Light Green / White */}
      <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {siteConfig.heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              selectedIndex === i
                ? 'w-8 h-2.5 bg-[#10B981] shadow-md'
                : 'w-2.5 h-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-[#0A5C36] text-white border border-white/20 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/40 hover:bg-[#0A5C36] text-white border border-white/20 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Cloud Wave Divider at the bottom */}
      <CloudWaveDivider className="z-30 text-[#FFFFFF]" />
    </section>
  );
}
