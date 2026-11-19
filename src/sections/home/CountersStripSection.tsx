'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

function CountUpItem({
  value,
  suffix,
  label,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
}) {
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
    <div className="text-center p-6 sm:p-8">
      <div className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight flex items-center justify-center">
        <span>{count}</span>
        <span className="text-[#f7941e] ml-1">{suffix}</span>
      </div>
      <p className="mt-2 text-sm sm:text-base font-bold text-white/90 tracking-wide uppercase font-sans">
        {label}
      </p>
    </div>
  );
}

export function CountersStripSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative bg-[#0a6375] py-14 md:py-20 overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      <Container>
        <Reveal variant="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {siteConfig.counters.map((item) => (
              <CountUpItem
                key={item.id}
                value={item.value}
                suffix={item.suffix}
                label={item.label}
                inView={isInView}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
