import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InnerPageBanner } from '@/components/layout/InnerPageBanner';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Calendar, User, ArrowLeft, Share2, Sparkles } from 'lucide-react';
import { siteConfig } from '@/content/site.config';

interface BlogPostProps {
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
    }[];
    conclusion: string;
  };
}

export function BlogPostTemplate({
  title,
  category,
  date,
  author,
  image,
  content,
}: BlogPostProps) {
  return (
    <main className="flex-1">
      <InnerPageBanner
        title={title}
        badge={category}
        breadcrumbs={[
          { label: 'Blog', href: '/blog' },
          { label: title },
        ]}
      />

      <Section bg="white">
        <Container size="narrow">
          <article className="space-y-8">
            {/* Meta Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div className="flex items-center gap-4 text-sm text-muted">
                <span className="px-3 py-1 rounded-full bg-peach text-primary text-xs font-bold">
                  {category}
                </span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  <span>{author}</span>
                </div>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Articles</span>
              </Link>
            </div>

            {/* Featured Image */}
            <Reveal variant="zoom-in">
              <div className="relative aspect-[16/9] w-full rounded-card overflow-hidden shadow-xl border-4 border-peach">
                <Image src={image} alt={title} fill className="object-cover" priority />
              </div>
            </Reveal>

            {/* Lead Paragraph */}
            <Reveal variant="fade-up">
              <p className="text-lg sm:text-xl text-black font-semibold leading-relaxed border-l-4 border-primary pl-4 py-1 italic bg-[#fff9f5] rounded-r-xl">
                {content.intro}
              </p>
            </Reveal>

            {/* Content Sections */}
            <div className="space-y-8 pt-4">
              {content.sections.map((sec, idx) => (
                <Reveal key={idx} variant="fade-up" delay={0.1 * (idx + 1)}>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-black tracking-tight">
                      {sec.heading}
                    </h3>
                    {sec.body.map((p, pIdx) => (
                      <p key={pIdx} className="text-body text-base leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Conclusion */}
            <Reveal variant="fade-up">
              <div className="p-6 sm:p-8 rounded-card bg-[#fff9f5] border border-peach space-y-3">
                <h4 className="font-bold text-xl text-black flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span>The Takeaway</span>
                </h4>
                <p className="text-sm sm:text-base text-body leading-relaxed">
                  {content.conclusion}
                </p>
              </div>
            </Reveal>

            {/* Call to Action Box */}
            <div className="pt-8 text-center bg-[#0a6375] text-white rounded-card p-8 shadow-xl">
              <span className="font-bubblegum text-[#f7941e] text-lg uppercase tracking-wide">
                Experience It In Person
              </span>
              <h3 className="text-2xl font-bold mt-1">Want to see our methodology in action?</h3>
              <p className="text-sm text-white/80 max-w-md mx-auto mt-2 leading-relaxed">
                Schedule a tour of our Rohini Sector 3 campus and witness child-centered early education firsthand.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button variant="primary" href="/contact-us">
                  Schedule Campus Visit
                </Button>
                <Button variant="white" href="/admissions/application-form">
                  Apply for Admission
                </Button>
              </div>
            </div>
          </article>
        </Container>
      </Section>
    </main>
  );
}
