'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/content/site.config';
import { Button } from '@/components/ui/Button';

export function HeroSliderSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

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
    <section className="relative w-full overflow-hidden bg-slate-900" aria-label="Hero Showcase">
      {/* Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {siteConfig.heroSlides.map((slide, index) => {
            const isActive = selectedIndex === index;

            return (
              <div
                key={slide.id}
                className="relative flex-[0_0_100%] min-w-0 h-[560px] sm:h-[680px] md:h-[760px] lg:h-[840px] xl:h-[900px] flex items-center justify-center"
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

                {/* Centered Slide Content Overlay */}
                <div className="relative z-20 max-w-2xl mx-auto px-4 text-center mt-[-40px] sm:mt-[-20px]">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <div key={`slide-${slide.id}`} className="flex flex-col items-center">
                        {/* Title: Big Stacked Bold White Font matching live site */}
                        <motion.h1
                          initial={{ opacity: 0, y: 25 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
                        >
                          {slide.id === 2 ? (
                            <>
                              Children<br />
                              Focused<br />
                              Education
                            </>
                          ) : (
                            <>
                              Learning<br />
                              With Fun
                            </>
                          )}
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.55, delay: 0.25 }}
                          className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                        >
                          {slide.subtitle}
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="mt-6 sm:mt-8"
                        >
                          <Button
                            variant="primary"
                            size="lg"
                            href={slide.ctaHref}
                            className="bg-[#ed145b] text-white hover:bg-[#0a6375] px-8 sm:px-10 py-3 sm:py-3.5 text-base sm:text-lg rounded-full shadow-button transition-all duration-300"
                          >
                            {slide.ctaText}
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

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none z-30">
        <button
          onClick={scrollPrev}
          className="pointer-events-auto p-3 sm:p-4 rounded-full bg-white/70 hover:bg-white text-gray-800 shadow-lg hover:shadow-xl transition-all focus:outline-none -ml-2 sm:ml-2"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={scrollNext}
          className="pointer-events-auto p-3 sm:p-4 rounded-full bg-white/70 hover:bg-white text-gray-800 shadow-lg hover:shadow-xl transition-all focus:outline-none -mr-2 sm:mr-2"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-2.5 z-30">
        {siteConfig.heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`transition-all duration-300 rounded-full ${
              selectedIndex === i
                ? 'w-8 h-2.5 bg-[#ed145b]'
                : 'w-2.5 h-2.5 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
