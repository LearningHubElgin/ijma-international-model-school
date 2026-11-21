import type { Metadata } from 'next';
import '@/styles/globals.css';
import { siteConfig } from '@/content/site.config';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { TopBar } from '@/components/layout/TopBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://ijmaschool.com'),
  title: {
    default: `${siteConfig.school.fullName} | English Medium CBSE with Islamic Education`,
    template: `%s | ${siteConfig.school.name}`,
  },
  description: siteConfig.school.description,
  keywords: [
    'IJMA International Model School',
    'Islamic School in Kolkata',
    'Best School in Topsia',
    'English Medium Islamic School Kolkata',
    'CBSE Islamic Education Kolkata',
    'Topsia Road South School',
    'STEM Robotics School Kolkata',
    'Karate Training School Kolkata',
  ],
  authors: [{ name: siteConfig.school.fullName }],
  creator: siteConfig.school.fullName,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ijmaschool.com',
    siteName: siteConfig.school.fullName,
    title: `${siteConfig.school.name} | Topsia, Kolkata`,
    description: siteConfig.school.description,
    images: [
      {
        url: '/assets/ijma/photos/Logo.jpeg',
        width: 800,
        height: 800,
        alt: siteConfig.school.fullName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.school.name,
    description: siteConfig.school.description,
    images: ['/assets/ijma/photos/Logo.jpeg'],
  },
  icons: {
    icon: '/assets/ijma/photos/Logo.jpeg',
    apple: '/assets/ijma/photos/Logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="min-h-screen bg-white text-gray-900 font-sans antialiased flex flex-col">
        {/* Preloader is handled statically or on mount */}
        <CustomCursor />
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
