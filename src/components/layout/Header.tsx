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
        className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-header py-2.5'
            : 'bg-white py-4 md:py-5 border-b border-gray-100'
        }`}
      >
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative flex-shrink-0 group">
              <div className="relative w-[210px] sm:w-[250px] md:w-[260px] h-[64px] sm:h-[72px] md:h-[76px] transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={siteConfig.school.logo}
                  alt={siteConfig.school.fullName}
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {siteConfig.navigation.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);
                const hasChildren = item.children && item.children.length > 0;
                const isMega = item.isMega;

                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-3 py-2 text-[16px] xl:text-[17px] font-bold rounded-full transition-colors duration-200 ${
                        isActive
                          ? 'text-primary font-extrabold'
                          : 'text-gray-900 hover:text-primary'
                      }`}
                    >
                      <span>{item.label}</span>
                      {hasChildren && (
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </Link>

                    {/* Mega Dropdown for Programmes */}
                    {isMega && hasChildren && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[720px] transition-all duration-300 ${
                          activeDropdown === item.label
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible translate-y-2 pointer-events-none'
                        }`}
                      >
                        <div className="bg-white rounded-card shadow-2xl border border-gray-100 p-6 grid grid-cols-12 gap-6 overflow-hidden">
                          {/* Left Menu Column */}
                          <div className="col-span-7">
                            <h5 className="font-sans font-bold text-lg text-black mb-3 pb-2 border-b border-peach">
                              {item.megaTitle || 'Facilities Available'}
                            </h5>
                            <div className="grid grid-cols-1 gap-2">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="group/item block p-2 rounded-xl hover:bg-peach/40 transition-colors"
                                >
                                  <div className="font-bold text-sm text-gray-900 group-hover/item:text-primary transition-colors">
                                    {child.label}
                                  </div>
                                  {child.description && (
                                    <div className="text-xs text-body line-clamp-1 mt-0.5">
                                      {child.description}
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Right Promo Image Panel */}
                          <div className="col-span-5 bg-gradient-to-br from-peach to-white rounded-2xl p-4 flex flex-col justify-between border border-peach/50">
                            <div>
                              <span className="font-bubblegum text-xs text-primary uppercase font-bold tracking-wider">
                                Early Education
                              </span>
                              <h6 className="font-bold text-base text-black mt-1">
                                Experiential Montessori Classrooms
                              </h6>
                              <p className="text-xs text-body mt-2 leading-relaxed">
                                Self-paced learning environments designed for child curiosity and gross motor growth.
                              </p>
                            </div>

                            <div className="relative w-full h-32 rounded-xl overflow-hidden mt-4 shadow-sm">
                              <Image
                                src={item.megaImage || '/assets/programmes/programme-mega-panel.svg'}
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
                        className={`absolute top-full left-0 pt-3 w-64 transition-all duration-300 ${
                          activeDropdown === item.label
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible translate-y-2 pointer-events-none'
                        }`}
                      >
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3 space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-3 py-2 rounded-xl text-sm font-semibold text-gray-800 hover:text-primary hover:bg-peach/30 transition-colors"
                            >
                              {child.label}
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
              <Button
                variant="primary"
                size="md"
                className="hidden sm:inline-flex"
                onClick={() => setEnquireModalOpen(true)}
              >
                Enquire Now
              </Button>

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
