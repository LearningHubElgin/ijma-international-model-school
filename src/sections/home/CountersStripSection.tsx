'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { siteConfig } from '@/content/site.config';
import { Reveal } from '@/components/ui/Reveal';

interface CountUpProps {
  value: number;
  suffix: string;
  label: string;
  icon: string;
  inView: boolean;
}

function CountUpItem({
  value,
  suffix,
  label,
  icon,
  inView,
}: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div className="group flex flex-col items-center text-center px-2 py-4 sm:py-6 cursor-pointer">
      {/* Icon Badge with Asymmetrical Pebble / Cloud Shape & Offset Pink Shadow */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mb-2 flex items-center justify-center select-none">
        {/* Pink Drop Shadow Shape that shifts slightly on hover matching live site */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform group-hover:translate-x-2.5 group-hover:translate-y-1 pointer-events-none"
          aria-hidden="true"
        >
          <Image
            src="/assets/decorative/counter-pebble-pink.svg"
            alt=""
            width={140}
            height={140}
            className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(16,185,129,0.35)] hue-rotate-[135deg]"
          />
        </div>

        {/* White Pebble Background */}
        <div className="absolute inset-0 z-0 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
          <Image
            src="/assets/decorative/counter-pebble-white.svg"
            alt=""
            width={140}
            height={140}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Authentic Cartoon Character SVG */}
        <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-[84px] lg:h-[84px] flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110">
          <Image
            src={icon}
            alt={label}
            width={84}
            height={84}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Number Display */}
      <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-[34px] leading-tight text-white tracking-wide mt-1 flex items-center justify-center">
        <span>{count}</span>
        <span>{suffix}</span>
      </div>

      {/* Title Label */}
      <p className="mt-1 text-sm sm:text-[15px] lg:text-[16px] font-semibold text-white/95 tracking-wide font-sans text-center">
        {label}
      </p>
    </div>
  );
}

export function CountersStripSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-visible py-10 sm:py-14 lg:py-16 select-none bg-white"
      aria-label="School Statistics"
    >
      {/* Outer wrapper for the masked ribbon */}
      <div className="relative max-w-[1920px] mx-auto px-0">
        {/* The Green Masked Ribbon Strip */}
        <div
          className="wdt-mask-counter-strip bg-[#0A5C36] relative py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 overflow-hidden shadow-[0_10px_30px_rgba(10,92,54,0.25)]"
        >
          {/* Subtle Alphabet Background Overlay */}
          <div
            className="absolute inset-0 pointer-events-none select-none opacity-20 bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url('/assets/decorative/alpha-overlay-image.png')",
            }}
          />

          <div className="max-w-[1600px] mx-auto relative z-10 flex items-center justify-between">
            {/* Left Decorative Floating Image: studys.png (Child reading) */}
            <div className="hidden xl:flex flex-shrink-0 w-60 2xl:w-72 select-none pointer-events-none animate-float-slow -ml-4 -my-8">
              <Image
                src="/assets/decorative/studys.png"
                alt="Child studying"
                width={300}
                height={402}
                className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)]"
                priority={false}
              />
            </div>

            {/* Middle 4 Counters Grid */}
            <div className="flex-1 max-w-5xl mx-auto">
              <Reveal variant="fade-up">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
                  {siteConfig.counters.map((item) => (
                    <CountUpItem
                      key={item.id}
                      value={item.value}
                      suffix={item.suffix}
                      label={item.label}
                      icon={item.icon}
                      inView={isInView}
                    />
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Decorative Floating Image: cycle-play.png (Child riding bike) */}
            <div className="hidden xl:flex flex-shrink-0 w-60 2xl:w-72 select-none pointer-events-none animate-float-reverse -mr-4 -my-8">
              <Image
                src="/assets/decorative/cycle-play.png"
                alt="Child riding bike"
                width={300}
                height={401}
                className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)]"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
