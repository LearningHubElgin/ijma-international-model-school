'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

export function FeatureGridSection() {
  // Exclude Montessori from the grid as it is featured prominently as the horizontal card above
  const remainingFeatures = siteConfig.features.filter(
    (f) => f.id !== 'montessori'
  );

  return (
    <section className="bg-[#FFEFE4] pt-4 pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingFeatures.map((feature, index) => (
            <Reveal
              key={feature.id}
              variant="fade-up"
              delay={0.08 * (index + 1)}
              className="h-full"
            >
              <div className="group h-full bg-white rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col border border-orange-50/60">
                {/* Image Frame with Gentle Zoom on Hover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-orange-50/40">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2.5 group-hover:text-[#0a6375] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#6b6b84] leading-relaxed line-clamp-3">
                      {feature.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-gray-100/80 flex items-center justify-between">
                    <Link
                      href={feature.href}
                      className="inline-flex items-center gap-1.5 font-bold text-sm text-[#0a6375] group-hover:text-[#ed145b] transition-colors"
                    >
                      <span className="underline underline-offset-4 decoration-2 decoration-[#0a6375] group-hover:decoration-[#ed145b]">
                        Learn More
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
