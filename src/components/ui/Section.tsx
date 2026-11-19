import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bg?: 'white' | 'peach' | 'teal' | 'yellow' | 'transparent';
  spacing?: 'default' | 'sm' | 'lg' | 'none';
}

export function Section({
  children,
  className,
  bg = 'white',
  spacing = 'default',
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden w-full',
        bg === 'white' && 'bg-white',
        bg === 'peach' && 'bg-[#ffefe4]',
        bg === 'teal' && 'bg-[#0a6375] text-white',
        bg === 'yellow' && 'bg-[#fff9e6]',
        bg === 'transparent' && 'bg-transparent',
        spacing === 'default' && 'py-12 md:py-16 lg:py-24',
        spacing === 'sm' && 'py-8 md:py-12',
        spacing === 'lg' && 'py-16 md:py-24 lg:py-32',
        spacing === 'none' && 'py-0',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
