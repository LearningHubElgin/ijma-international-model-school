'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Button } from '@/components/ui/Button';
import { CloudWaveDivider } from '@/components/ui/CloudWaveDivider';

export function HeroSliderSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 35 }, [
    Autoplay({ delay: 6500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 group" aria-label="Hero Showcase">
      {/* Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {siteConfig.heroSlides.map((slide, index) => {
            const isActive = selectedIndex === index;

            return (
              <div
                key={slide.id}
                className="relative flex-[0_0_100%] min-w-0 h-[620px] sm:h-[720px] md:h-[820px] lg:h-[890px] xl:h-[940px] flex items-center justify-center"
              >
                {/* Full-width High-Res Slide Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />

                {/* Rich Gradient Dark Overlay ensuring maximum text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35 z-10" />

                {/* Centered Slide Content Overlay */}
                <div className="relative z-20 max-w-4xl mx-auto px-4 text-center pt-8 sm:pt-14 md:pt-16 pb-28 sm:pb-36">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <div key={`slide-${slide.id}`} className="flex flex-col items-center">
                        {/* Eyebrow Badge in Dark Islamic Green + Gold */}
                        <motion.div
                          initial={{ opacity: 0, y: -15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="inline-flex items-center gap-2 bg-[#0A5C36]/90 border border-emerald-400/30 text-[#F5A623] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 shadow-md backdrop-blur-xs"
                        >
                          <span>★ {slide.badge} ★</span>
                        </motion.div>

                        {/* Title: Bold White Font */}
                        <motion.h1
                          initial={{ opacity: 0, y: 25 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="text-4xl sm:text-5xl md:text-6xl xl:text-[72px] font-black text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]"
                        >
                          {slide.title}
                        </motion.h1>

                        {/* Subtitle in Light Green */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.55, delay: 0.25 }}
                          className="mt-4 sm:mt-5 text-lg sm:text-xl md:text-2xl text-[#86EFAC] font-semibold max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                        >
                          {slide.subtitle}
                        </motion.p>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.35 }}
                          className="mt-3 text-sm sm:text-base text-gray-200 max-w-xl font-normal leading-relaxed hidden sm:block drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]"
                        >
                          {slide.description}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.45 }}
                          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4"
                        >
                          <Button
                            variant="primary"
                            size="lg"
                            href={slide.ctaHref}
                            className="bg-[#0A5C36] text-white hover:bg-[#10B981] hover:text-white border border-emerald-400/40 px-8 sm:px-10 py-3 sm:py-3.5 text-base sm:text-lg font-bold rounded-full shadow-xl transition-all duration-300 transform hover:scale-105"
                          >
                            {slide.ctaText}
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            href="/contact-us"
                            className="bg-white/10 hover:bg-white text-white hover:text-[#0A5C36] border-white/40 px-7 sm:px-9 py-3 sm:py-3.5 text-base sm:text-lg font-bold rounded-full backdrop-blur-xs transition-all duration-300"
                          >
                            Contact Campus
                          </Button>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
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
