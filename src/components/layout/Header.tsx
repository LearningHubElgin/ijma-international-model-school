'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import { EnquireModal } from '@/components/modals/EnquireModal';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out bg-white ${
          isScrolled
            ? 'shadow-header py-2.5'
            : 'py-4 md:py-5 border-b border-gray-100'
        }`}
      >
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* Official IJMA Crest & Typography */}
            <Link href="/" className="relative flex-shrink-0 flex items-center gap-2 sm:gap-2.5 group">
              <div className="relative w-[44px] h-[44px] sm:w-[50px] sm:h-[50px] md:w-[54px] md:h-[54px] flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={siteConfig.school.logo}
                  alt={siteConfig.school.fullName}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center text-left">
                <span className="text-[10px] sm:text-[11px] font-bold text-[#0A5C36] tracking-wide leading-none mb-0.5">
                  {siteConfig.school.urduName}
                </span>
                <span className="text-[12px] sm:text-[13.5px] md:text-[15px] font-black text-gray-900 tracking-tight leading-tight group-hover:text-[#0A5C36] transition-colors">
                  IJMA INTERNATIONAL MODEL SCHOOL
                </span>
                <span className="text-[9px] sm:text-[9.5px] md:text-[10px] text-[#F5A623] font-bold tracking-wider uppercase leading-tight mt-0.5">
                  TOPSIA, KOLKATA • ENGLISH MEDIUM CBSE
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Proportional, Sleek & Modern */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5" aria-label="Main Navigation">
              {siteConfig.navigation.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);
                const hasChildren = item.children && item.children.length > 0;
                const isMega = item.isMega;
                const isHovered = activeDropdown === item.label;

                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center px-2.5 xl:px-3 py-1.5 rounded-full text-[13.5px] xl:text-[14.5px] font-bold whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? 'text-[#0A5C36] bg-emerald-50 border border-emerald-200/60 shadow-xs'
                          : isHovered
                          ? 'text-[#0A5C36] bg-emerald-50/60'
                          : 'text-gray-700 hover:text-[#0A5C36] hover:bg-emerald-50/40'
                      }`}
                    >
                      <span>{item.label}</span>
                      {hasChildren && (
                        <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                      )}
                    </Link>

                    {/* Mega Dropdown for Programmes */}
                    {isMega && hasChildren && (
                      <div
                        className={`absolute top-full left-0 pt-2 w-[720px] transition-all duration-200 ${
                          activeDropdown === item.label
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible translate-y-2 pointer-events-none'
                        }`}
                      >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-12 gap-6 overflow-hidden">
                          {/* Left Menu Column */}
                          <div className="col-span-7">
                            <h5 className="font-sans font-bold text-lg text-black mb-3 pb-2 border-b border-emerald-100">
                              {item.megaTitle || 'Facilities Available'}
                            </h5>
                            <div className="grid grid-cols-1 gap-2">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="group/item flex items-center gap-2 p-2 rounded-xl hover:bg-emerald-50/60 transition-colors"
                                >
                                  <span className="text-gray-400 font-bold">-</span>
                                  <div>
                                    <div className="font-bold text-sm text-gray-900 group-hover/item:text-[#0A5C36] transition-colors">
                                      {child.label}
                                    </div>
                                    {child.description && (
                                      <div className="text-xs text-body line-clamp-1 mt-0.5">
                                        {child.description}
                                      </div>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Right Promo Image Panel */}
                          <div className="col-span-5 bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-4 flex flex-col justify-between border border-emerald-100/60">
                            <div>
                              <span className="text-xs text-[#0A5C36] uppercase font-bold tracking-wider">
                                Early Education
                              </span>
                              <h6 className="font-bold text-base text-black mt-1">
                                Experiential Classrooms & Tarbiyah
                              </h6>
                              <p className="text-xs text-body mt-2 leading-relaxed">
                                Self-paced learning environments designed for child curiosity, STEM labs, and gross motor growth.
                              </p>
                            </div>

                            <div className="relative w-full h-32 rounded-xl overflow-hidden mt-4 shadow-sm">
                              <Image
                                src={item.megaImage || '/assets/ijma/photos/Art-class.jpg'}
                                alt="Facilities Panel"
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Standard Dropdown (Admissions, Montessori) */}
                    {!isMega && hasChildren && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[210px] transition-all duration-200 ${
                          activeDropdown === item.label
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible translate-y-2 pointer-events-none'
                        }`}
                      >
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-3 px-1.5 space-y-0.5">
                          {item.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-center gap-2 px-3 py-2 rounded-xl text-[14px] font-semibold text-gray-700 hover:text-[#0A5C36] hover:bg-emerald-50/60 transition-colors"
                            >
                              <span className="text-gray-400 font-bold select-none">-</span>
                              <span>{child.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Action Button & Mobile Hamburger */}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setEnquireModalOpen(true)}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0A5C36] hover:bg-[#10B981] text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer hover:scale-105"
              >
                Enquire Now
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-full hover:bg-gray-100 text-gray-800 focus:outline-none"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenEnquire={() => setEnquireModalOpen(true)}
      />

      {/* Global Enquire Modal */}
      <EnquireModal
        isOpen={enquireModalOpen}
        onClose={() => setEnquireModalOpen(false)}
      />
    </>
  );
}
