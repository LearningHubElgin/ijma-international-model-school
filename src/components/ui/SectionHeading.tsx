import React from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  theme?: 'dark' | 'light';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  theme = 'dark',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isRight = align === 'right';

  return (
    <div
      className={cn(
        'mb-10 md:mb-14',
        isCenter && 'text-center mx-auto max-w-3xl',
        isRight && 'text-right ml-auto max-w-3xl',
        !isCenter && !isRight && 'text-left max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <Reveal variant="fade-up" delay={0.1}>
          <span className="inline-block font-bubblegum text-lg md:text-xl text-[#ed145b] tracking-wide mb-2 uppercase">
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal variant="fade-up" delay={0.2}>
        <h2
          className={cn(
            'text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight tracking-[1.3px]',
            theme === 'dark' ? 'text-black' : 'text-white'
          )}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal variant="fade-up" delay={0.3}>
          <p
            className={cn(
              'mt-4 text-base md:text-lg leading-relaxed',
              theme === 'dark' ? 'text-[#6b6b84]' : 'text-gray-200'
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
