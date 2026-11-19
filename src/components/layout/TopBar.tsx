import React from 'react';
import { Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { siteConfig } from '@/content/site.config';
import { Container } from '@/components/ui/Container';

export function TopBar() {
  return (
    <div className="hidden lg:block bg-white border-b border-gray-100 text-xs font-sans py-2.5">
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Left Contact Details */}
          <div className="flex items-center space-x-6 text-body">
            <a
              href={`tel:${siteConfig.contact.primaryPhone}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>{siteConfig.contact.phones.join(' / ')}</span>
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-primary" />
              <span>{siteConfig.contact.email}</span>
            </a>

            <div className="flex items-center gap-1.5 text-muted">
              <Clock className="w-3.5 h-3.5" />
              <span>{siteConfig.contact.hours}</span>
            </div>
          </div>

          {/* Right Social Links */}
          <div className="flex items-center space-x-3">
            <span className="text-muted font-medium">Follow Us :</span>
            <div className="flex items-center space-x-2">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-body hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-body hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>

              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-body hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
