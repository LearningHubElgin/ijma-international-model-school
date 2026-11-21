import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ijmainternationalschool.com';

  const routes = [
    '',
    '/about-us',
    '/academics',
    '/campus-life',
    '/gallery',
    '/videos',
    '/programmes',
    '/admissions',
    '/admissions/application-form',
    '/admissions/application-process',
    '/admissions/eligibility-fee',
    '/curriculum',
    '/celebrations',
    '/field-trips',
    '/music-movement',
    '/physical-education',
    '/speech-and-drama',
    '/montessori-methodology',
    '/blog',
    '/blog/national-education-day-celebration-ijma-international-model-school-kolkata',
    '/blog/stem-robotics-education-in-islamic-schools-ijma-kolkata',
    '/blog/annual-sports-meet-and-karate-highlights-ijma-kolkata',
    '/contact-us',
    '/privacy-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/academics') || route.startsWith('/campus-life') ? 0.9 : 0.8,
  }));
}
