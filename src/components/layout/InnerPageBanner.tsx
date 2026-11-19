import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface InnerPageBannerProps {
  title: string;
  badge?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
}

export function InnerPageBanner({
  title,
  badge,
  breadcrumbs,
  bgImage = '/assets/banners/inner-hero-banner.svg',
}: InnerPageBannerProps) {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#0a6375] overflow-hidden text-center text-white">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-20">
        <Image src={bgImage} alt={title} fill className="object-cover" priority />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a6375] via-[#0a6375]/80 to-[#074c5a]/90" />

      {/* Floating Cloud */}
      <div className="absolute top-6 left-10 w-24 h-12 opacity-30 pointer-events-none animate-float-slow hidden md:block">
        <Image src="/assets/decorative/cloud-shape.svg" alt="Cloud" fill className="object-contain" />
      </div>

      <Container>
        <div className="relative z-10 max-w-3xl mx-auto">
          {badge && (
            <Reveal variant="fade-up" delay={0.1}>
              <span className="inline-block font-bubblegum text-[#f7941e] text-lg uppercase tracking-wider mb-2">
                {badge}
              </span>
            </Reveal>
          )}

          <Reveal variant="fade-up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h1>
          </Reveal>

          {/* Breadcrumbs */}
          <Reveal variant="fade-up" delay={0.3}>
            <nav aria-label="Breadcrumb" className="mt-4 flex items-center justify-center space-x-2 text-sm text-white/80">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.label}>
                  <ChevronRight className="w-3.5 h-3.5 text-white/50" />
                  {crumb.href && idx < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-primary transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#f7941e] font-semibold">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
