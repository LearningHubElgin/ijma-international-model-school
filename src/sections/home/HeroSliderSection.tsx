'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, AnimatePresence } from 'framer-motion';
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
    <section className="relative w-full overflow-hidden bg-slate-900" aria-label="Hero Showcase">
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
                {/* Full-width High-Res Slide Background Image with object-bottom grounding kids on clouds */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-bottom"
                  sizes="100vw"
                />

                {/* Centered Slide Content Overlay - generous padding */}
                <div className="relative z-20 max-w-3xl mx-auto px-4 text-center pt-8 sm:pt-14 md:pt-16 pb-28 sm:pb-36">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <div key={`slide-${slide.id}`} className="flex flex-col items-center">
                        {/* Title: Big Stacked Bold White Font matching live site */}
                        <motion.h1
                          initial={{ opacity: 0, y: 25 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          className="text-4xl sm:text-6xl md:text-7xl xl:text-[80px] font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.22)]"
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
                          className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
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

      {/* Multi-layered Scalloped Cloud Shape Divider */}
      <CloudWaveDivider />
    </section>
  );
}
