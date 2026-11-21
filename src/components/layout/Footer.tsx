'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Send,
  CheckCircle2,
  Maximize2,
} from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Lightbox, LightboxImage } from '@/components/ui/Lightbox';

const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export function Footer() {
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onNewsletterSubmit = async (data: NewsletterFormData) => {
    // Development stub logging
    console.log('[Newsletter Subscription]:', data);
    setNewsletterSuccess(true);
    reset();
  };

  const galleryImages: LightboxImage[] = siteConfig.footer.galleryThumbnails.map((thumb) => ({
    id: thumb.id,
    image: thumb.image,
    title: thumb.title,
    category: 'Campus Life',
  }));

  return (
    <footer className="relative bg-[#0A5C36] text-white overflow-hidden" aria-label="School Footer">
      {/* Floating Decorative Elements */}
      <div className="absolute -top-6 left-10 w-28 h-20 opacity-20 pointer-events-none animate-float-slow hidden md:block">
        <Image src="/assets/decorative/cloud-shape.svg" alt="Cloud" fill className="object-contain" />
      </div>

      {/* 1. Newsletter Signup Strip in Deep Forest Green */}
      <div className="border-b border-emerald-700/50 py-12 md:py-16 bg-[#064E3B] relative z-10">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="font-bubblegum text-lg text-[#86EFAC] tracking-wider uppercase block">
                Stay Connected
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {siteConfig.newsletter.heading}
              </h3>
              <p className="text-sm text-emerald-100/90 mt-1 max-w-lg">
                {siteConfig.newsletter.subheading}
              </p>
            </div>

            <div className="w-full md:w-auto flex-1 max-w-md">
              {newsletterSuccess ? (
                <div className="flex items-center gap-2 bg-emerald-800/80 border border-emerald-400 px-5 py-3 rounded-pill text-white text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                  <span>Thank you for subscribing to our updates!</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onNewsletterSubmit)}
                  className="flex flex-col sm:flex-row gap-2 relative"
                >
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      {...register('email')}
                      placeholder={siteConfig.newsletter.placeholder}
                      className="w-full px-5 py-3 rounded-pill bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#10B981] font-sans"
                    />
                    {errors.email && (
                      <p className="text-xs text-[#F5A623] mt-1 font-semibold pl-3">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-7 py-3 rounded-pill bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md flex-shrink-0 cursor-pointer"
                  >
                    <span>{siteConfig.newsletter.buttonText}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* 2. Main 4-Column Footer in Dark Islamic Green */}
      <div className="py-16 md:py-20 relative z-10 bg-gradient-to-b from-[#0A5C36] to-[#07472A]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Col 1: About & Contact (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="relative w-16 h-16 bg-white rounded-full overflow-hidden p-1.5 shadow-md flex-shrink-0 border border-emerald-400/30">
                  <Image
                    src={siteConfig.school.logo}
                    alt={siteConfig.school.fullName}
                    fill
                    className="object-contain p-0.5 rounded-full"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F5A623] tracking-wide block">
                    {siteConfig.school.urduName}
                  </span>
                  <h4 className="text-base font-black text-white leading-tight">
                    IJMA INTERNATIONAL MODEL SCHOOL
                  </h4>
                  <span className="text-[11px] text-emerald-100/80 block mt-0.5">
                    Topsia, Kolkata • ESTD: 2022
                  </span>
                </div>
              </div>

              <p className="text-sm text-emerald-50/90 leading-relaxed max-w-sm">
                {siteConfig.footer.about}
              </p>

              <div className="space-y-3 text-sm text-white/95">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#86EFAC] mt-1 flex-shrink-0" />
                  <span>{siteConfig.contact.address} ({siteConfig.contact.landmark})</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#86EFAC] flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.primaryPhone}`}
                    className="hover:text-[#86EFAC] transition-colors"
                  >
                    {siteConfig.contact.phones.join(' / ')}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#86EFAC] flex-shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-[#86EFAC] transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#10B981] flex items-center justify-center text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#10B981] flex items-center justify-center text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#10B981] flex items-center justify-center text-white transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Combined 2-Column Side-by-Side Sections on Mobile */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:contents">
              {/* Col 2: Our Programmes (3 cols on desktop) */}
              <div className="lg:col-span-3">
                <h4 className="font-sans font-bold text-base sm:text-lg text-white mb-4 sm:mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#10B981]">
                  Our Academic Wings
                </h4>
                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                  {siteConfig.footer.programmeLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-emerald-100/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 leading-snug"
                      >
                        → {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Admissions & Navigation (2 cols on desktop) */}
              <div className="lg:col-span-2">
                <h4 className="font-sans font-bold text-base sm:text-lg text-white mb-4 sm:mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#10B981]">
                  Admissions
                </h4>
                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                  {siteConfig.footer.quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-emerald-100/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 leading-snug"
                      >
                        → {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Col 4: Our Galleries 3x3 Thumbnails (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="font-sans font-bold text-lg text-white mb-4 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#10B981]">
                {siteConfig.footer.galleryHeading}
              </h4>
              <p className="text-xs text-emerald-100/80 mb-4 leading-relaxed">
                {siteConfig.footer.galleryBlurb}
              </p>

              {/* 3x3 Grid */}
              <div className="grid grid-cols-3 gap-2">
                {siteConfig.footer.galleryThumbnails.map((thumb, index) => (
                  <button
                    key={thumb.id}
                    onClick={() => setActiveLightboxIndex(index)}
                    className="group relative aspect-square rounded-thumb overflow-hidden border border-emerald-400/30 hover:border-[#86EFAC] transition-all duration-300 focus:outline-none cursor-pointer"
                    aria-label={`Open photo ${thumb.title}`}
                  >
                    <Image
                      src={thumb.image}
                      alt={thumb.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#0A5C36]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                      <Maximize2 className="w-4 h-4 text-[#86EFAC]" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 3. Sub-footer Legal Bar in Deep Night Green */}
      <div className="bg-[#043320] py-6 border-t border-emerald-800/40 text-xs text-emerald-200/80 relative z-10">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-center sm:text-left">{siteConfig.footer.copyright}</p>
            <div className="flex items-center space-x-6">
              {siteConfig.footer.legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Gallery Lightbox */}
      <Lightbox
        images={galleryImages}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIndex) => setActiveLightboxIndex(newIndex)}
      />
    </footer>
  );
}
