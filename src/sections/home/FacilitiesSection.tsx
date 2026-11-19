import React from 'react';
import Image from 'next/image';
import { School, Utensils, Gamepad2, Bus } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function FacilitiesSection() {
  const { facilities } = siteConfig;

  const iconMap: Record<string, React.ReactNode> = {
    School: <School className="w-6 h-6 text-primary" />,
    Utensils: <Utensils className="w-6 h-6 text-[#f7941e]" />,
    Gamepad2: <Gamepad2 className="w-6 h-6 text-[#1cbbb4]" />,
    Bus: <Bus className="w-6 h-6 text-[#0a6375]" />,
  };

  return (
    <Section bg="white" spacing="default">
      <Container>
        <SectionHeading
          eyebrow="Campus Life & Amenities"
          title={facilities.heading}
          description={facilities.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {facilities.list.map((facility, index) => (
            <Reveal
              key={facility.id}
              variant="fade-up"
              delay={0.1 * (index + 1)}
              className="h-full"
            >
              <div className="group h-full bg-white rounded-card overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col">
                {/* Image Frame */}
                <div className="relative aspect-[1.5/1] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-106"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 shadow-md">
                    {iconMap[facility.icon] || <School className="w-6 h-6 text-primary" />}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-primary transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-sm text-body leading-relaxed">
                      {facility.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 flex items-center gap-1 text-xs font-bold text-primary uppercase tracking-wider">
                    <span>Verified Amenity</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
