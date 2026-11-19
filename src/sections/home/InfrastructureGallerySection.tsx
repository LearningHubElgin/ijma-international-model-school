'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Lightbox, LightboxImage } from '@/components/ui/Lightbox';
import { Reveal } from '@/components/ui/Reveal';

export function InfrastructureGallerySection() {
  const { infrastructureGallery } = siteConfig;
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const lightboxItems: LightboxImage[] = infrastructureGallery.items.map((item) => ({
    id: item.id,
    image: item.image,
    title: item.title,
    category: item.category,
  }));

  return (
    <Section bg="white" spacing="default">
      <Container>
        <SectionHeading
          eyebrow={infrastructureGallery.eyebrow}
          title={infrastructureGallery.heading}
          description={infrastructureGallery.description}
        />

        {/* 6 Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {infrastructureGallery.items.map((item, index) => (
            <Reveal
              key={item.id}
              variant="zoom-in"
              delay={0.1 * (index + 1)}
            >
              <div
                onClick={() => setActiveLightboxIndex(index)}
                className="group relative aspect-[4/3] rounded-card overflow-hidden bg-gray-100 shadow-card hover:shadow-card-hover cursor-pointer transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover Overlay with "View" Action */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <span className="font-bubblegum text-[#f7941e] text-sm uppercase font-bold tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-lg text-white mb-3">
                    {item.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-white px-4 py-2 rounded-full w-max shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Photo</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Gallery Lightbox */}
      <Lightbox
        images={lightboxItems}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIndex) => setActiveLightboxIndex(newIndex)}
      />
    </Section>
  );
}
