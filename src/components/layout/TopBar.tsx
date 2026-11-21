import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';

export function TopBar() {
  return (
    <div className="hidden md:block bg-[#0A5C36] text-white text-xs font-sans py-2.5 border-b border-emerald-900/40">
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Left Contact Details & Location */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-1.5 text-white/90 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Topsia, Kolkata – 700046</span>
            </div>

            <a
              href={`tel:${siteConfig.contact.primaryPhone}`}
              className="flex items-center gap-2 hover:text-[#F5A623] transition-colors text-white font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>{siteConfig.contact.phones.join(' / ')}</span>
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 hover:text-[#F5A623] transition-colors text-white font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>

          {/* Right Social Links & Arabic Motto */}
          <div className="flex items-center space-x-4">
            <span className="text-[#F5A623] font-semibold text-sm hidden lg:inline tracking-wider">
              {siteConfig.school.arabicMotto}
            </span>
            <span className="text-white/60 hidden lg:inline">•</span>
            <div className="flex items-center space-x-2">
              <span className="text-white/90 font-medium mr-1">Follow Us:</span>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#0A5C36] hover:scale-110 transition-transform duration-200 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-3 h-3 fill-[#0A5C36]" />
              </a>

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#0A5C36] hover:scale-110 transition-transform duration-200 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-3 h-3" />
              </a>

              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#0A5C36] hover:scale-110 transition-transform duration-200 shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-3 h-3 fill-[#0A5C36]" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
