'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function HeroSliderSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
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
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fff9f5] to-white">
      {/* Decorative Floating Clouds */}
      <div className="absolute top-8 left-12 w-32 h-16 pointer-events-none animate-float-slow hidden md:block z-10">
        <Image src="/assets/decorative/cloud-shape.svg" alt="Cloud" fill className="object-contain" />
      </div>
      <div className="absolute top-20 right-16 w-28 h-14 pointer-events-none animate-float-reverse hidden md:block z-10">
        <Image src="/assets/decorative/cloud-shape.svg" alt="Cloud" fill className="object-contain" />
      </div>

      {/* Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {siteConfig.heroSlides.map((slide, index) => {
            const isActive = selectedIndex === index;

            return (
              <div
                key={slide.id}
                className="relative flex-[0_0_100%] min-w-0 min-h-[540px] sm:min-h-[600px] lg:min-h-[680px] flex items-center py-12 lg:py-20"
              >
                <Container size="wide">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Slide Text Content */}
                    <div className="lg:col-span-7 text-center lg:text-left z-20">
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <div key={`slide-text-${slide.id}`}>
                            {/* Eyebrow Badge */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.15 }}
                            >
                              <span className="inline-block px-4 py-1.5 rounded-pill bg-peach text-[#ed145b] font-bubblegum text-base sm:text-lg tracking-wide uppercase mb-3">
                                {slide.badge}
                              </span>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                              initial={{ opacity: 0, y: 35 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.65, delay: 0.3 }}
                              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.15]"
                            >
                              {slide.title}
                              <span className="block text-primary text-3xl sm:text-4xl lg:text-5xl mt-2 font-bold font-bubblegum">
                                {slide.subtitle}
                              </span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                              initial={{ opacity: 0, y: 25 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.55, delay: 0.5 }}
                              className="mt-6 text-base sm:text-lg text-body leading-relaxed max-w-xl mx-auto lg:mx-0"
                            >
                              {slide.description}
                            </motion.p>

                            {/* Button */}
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.65 }}
                              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
                            >
                              <Button variant="primary" size="lg" href={slide.ctaHref}>
                                {slide.ctaText}
                              </Button>
                              <Button variant="outline" size="lg" href="/contact-us">
                                Contact Us
                              </Button>
                            </motion.div>
                          </div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Slide Graphic / Illustration */}
                    <div className="lg:col-span-5 relative flex justify-center z-10">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                      >
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          priority={index === 0}
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                  </div>
                </Container>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls: Arrows */}
      <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none z-30">
        <button
          onClick={scrollPrev}
          className="pointer-events-auto p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md hover:shadow-lg transition-all focus:outline-none -ml-2 sm:ml-0"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={scrollNext}
          className="pointer-events-auto p-3 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-md hover:shadow-lg transition-all focus:outline-none -mr-2 sm:mr-0"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-30">
        {siteConfig.heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`transition-all duration-300 rounded-full ${
              selectedIndex === i
                ? 'w-8 h-2.5 bg-primary'
                : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
