import React from 'react';
import { siteConfig } from '@/content/site.config';

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Preschool', 'EducationalOrganization', 'LocalBusiness'],
    name: siteConfig.school.fullName,
    alternateName: siteConfig.school.name,
    description: siteConfig.school.description,
    url: 'https://gdgoenkarohini.com',
    logo: 'https://gdgoenkarohini.com/assets/logo/gdglp-logo.svg',
    image: 'https://gdgoenkarohini.com/assets/hero/hero-slide-1.svg',
    telephone: siteConfig.contact.primaryPhone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bhartiya Jan Sahyog Parishad, Pocket B-5, Sector 3',
      addressLocality: 'Rohini',
      addressRegion: 'New Delhi',
      postalCode: '110085',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.7011',
      longitude: '77.1082',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '15:00',
      },
    ],
    sameAs: [
      siteConfig.socials.facebook,
      siteConfig.socials.instagram,
      siteConfig.socials.youtube,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
