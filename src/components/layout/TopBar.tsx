import React from 'react';
import { Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';

export function TopBar() {
  return (
    <div className="hidden md:block bg-[#ed145b] text-white text-xs font-sans py-2.5">
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Left Contact Details */}
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${siteConfig.contact.primaryPhone}`}
              className="flex items-center gap-2 hover:opacity-85 transition-opacity text-white font-medium"
            >
              <Phone className="w-3.5 h-3.5 fill-white text-white" />
              <span>8800012762 / 63</span>
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 hover:opacity-85 transition-opacity text-white font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>

          {/* Right Social Links */}
          <div className="flex items-center space-x-3">
            <span className="text-white font-medium">Follow Us :</span>
            <div className="flex items-center space-x-2">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#ed145b] hover:scale-110 transition-transform duration-200 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-3 h-3 fill-[#ed145b]" />
              </a>

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#ed145b] hover:scale-110 transition-transform duration-200 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-3 h-3" />
              </a>

              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#ed145b] hover:scale-110 transition-transform duration-200 shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-3 h-3 fill-[#ed145b]" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
