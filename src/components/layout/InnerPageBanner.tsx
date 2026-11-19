import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { CloudWaveDivider } from '@/components/ui/CloudWaveDivider';

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
  bgImage = '/assets/banners/page-banner.png',
}: InnerPageBannerProps) {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 overflow-hidden text-center text-white min-h-[320px] sm:min-h-[380px] md:min-h-[440px] flex items-center justify-center">
      {/* Background Graphic */}
      <Image
        src={bgImage}
        alt={title}
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          {badge && (
            <Reveal variant="fade-up" delay={0.1}>
              <span className="inline-block font-bubblegum text-[#f7941e] text-lg uppercase tracking-wider mb-2">
                {badge}
              </span>
            </Reveal>
          )}

          <Reveal variant="fade-up" delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_3px_8px_rgba(0,0,0,0.2)]">
              {title}
            </h1>
          </Reveal>

          {/* Breadcrumbs */}
          <Reveal variant="fade-up" delay={0.3}>
            <nav
              aria-label="Breadcrumb"
              className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
            >
              <Link href="/" className="hover:text-[#f7941e] transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.label}>
                  <span className="text-[#ed145b] font-bold">▪</span>
                  {crumb.href && idx < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-[#f7941e] transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </Reveal>
        </div>
      </Container>

      {/* Cloud Shape Divider for Inner Page Banners */}
      <CloudWaveDivider
        fillColor="#ffffff"
        heightClass="h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px]"
      />
    </section>
  );
}
