import type { Metadata } from 'next';
import { Nunito, Bubblegum_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/content/site.config';
import { Preloader } from '@/components/ui/Preloader';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
});

const bubblegum = Bubblegum_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bubblegum',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gdgoenkarohini.com'),
  title: {
    default: `${siteConfig.school.name} | Best Preschool in Rohini, Delhi`,
    template: `%s | ${siteConfig.school.name}`,
  },
  description: siteConfig.school.description,
  keywords: [
    'GD Goenka La Petite',
    'Preschool in Rohini',
    'Best Play School in Delhi',
    'Montessori School Rohini',
    'Day Care Rohini',
    'Nursery Admissions Delhi',
  ],
  authors: [{ name: siteConfig.school.fullName }],
  creator: siteConfig.school.fullName,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://gdgoenkarohini.com',
    siteName: siteConfig.school.fullName,
    title: `${siteConfig.school.name} | Best Preschool in Rohini, Delhi`,
    description: siteConfig.school.description,
    images: [
      {
        url: '/assets/hero/hero-slide-1.svg',
        width: 1200,
        height: 630,
        alt: siteConfig.school.fullName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.school.name,
    description: siteConfig.school.description,
    images: ['/assets/hero/hero-slide-1.svg'],
  },
  icons: {
    icon: '/assets/logo/gdglp-logo.svg',
    apple: '/assets/logo/gdglp-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${bubblegum.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-body selection:bg-primary-light selection:text-primary">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
