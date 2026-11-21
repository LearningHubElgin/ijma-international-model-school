import React from 'react';
import { siteConfig } from '@/content/site.config';

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['School', 'EducationalOrganization', 'LocalBusiness'],
    name: siteConfig.school.fullName,
    alternateName: siteConfig.school.name,
    description: siteConfig.school.description,
    url: 'https://ijmaschool.com',
    logo: 'https://ijmaschool.com/assets/ijma/photos/Logo.png',
    image: 'https://ijmaschool.com/assets/ijma/photos/Runnig-student-in-sports-meet.jpg',
    telephone: siteConfig.contact.primaryPhone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '32/3, Topsia Rd',
      addressLocality: 'Topsia',
      addressRegion: 'Kolkata, West Bengal',
      postalCode: '700046',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.537651521277105',
      longitude: '88.38174334871343',
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
        opens: '08:30',
        closes: '15:30',
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
