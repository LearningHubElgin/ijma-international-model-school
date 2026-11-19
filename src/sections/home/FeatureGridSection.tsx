import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

export function FeatureGridSection() {
  // Original features count: top 6 features prominently displayed on home page
  const displayFeatures = siteConfig.features.slice(0, 6);

  return (
    <section className="bg-[#FFEFE4] pt-2 pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayFeatures.map((feature, index) => (
            <Reveal
              key={feature.id}
              variant="fade-up"
              delay={0.1 * (index + 1)}
              className="h-full"
            >
              <div
                className="group h-full bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col border border-gray-100"
                style={{ borderTop: `4px solid ${feature.color}` }}
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-106"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-body leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-gray-100">
                    <Link
                      href={feature.href}
                      className="inline-flex items-center gap-1.5 font-bold text-sm text-gray-900 group-hover:text-primary transition-colors"
                    >
                      <span>Learn More</span>
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
