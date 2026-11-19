import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gdgoenkarohini.com';

  const routes = [
    '',
    '/about-us',
    '/programmes',
    '/programmes/mom-and-me',
    '/programmes/play-group',
    '/programmes/pre-nursery-age-group-2-years-to-3-years',
    '/programmes/nursery-age-group-3-years-to-4-years',
    '/programmes/day-care-age-group-12-months-to-12-years',
    '/programmes/after-school-activity-center-2-years-12-years',
    '/admissions',
    '/admissions/application-form',
    '/admissions/application-process',
    '/admissions/eligibility-fee',
    '/montessori-methodology',
    '/curriculum',
    '/celebrations',
    '/field-trips',
    '/music-movement',
    '/physical-education',
    '/speech-and-drama',
    '/blog',
    '/blog/the-benefits-of-montessori-based-education-a-comprehensive-guide',
    '/blog/best-play-school-in-delhi-gd-goenka-la-petite-rohini',
    '/blog/importance-of-playschool-and-their-various-types',
    '/contact-us',
    '/privacy-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/programmes') ? 0.9 : 0.8,
  }));
}
