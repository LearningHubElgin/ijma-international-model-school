import type { Metadata } from 'next';
import { Nunito, Bubblegum_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/content/site.config';
import { Preloader } from '@/components/ui/Preloader';
import { TopBar } from '@/components/layout/TopBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';

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
        <JsonLd />
        {/* WCAG 2.1 AA Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-pill focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Preloader />
        <TopBar />
        <Header />
        <div id="main-content" className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
