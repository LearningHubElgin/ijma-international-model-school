import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverLift?: boolean;
  borderAccent?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  className,
  hoverLift = true,
  borderAccent,
  padding = 'md',
  style,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-card overflow-hidden shadow-card transition-all duration-300 ease-out',
        hoverLift && 'hover:-translate-y-2 hover:shadow-card-hover',
        padding === 'none' && 'p-0',
        padding === 'sm' && 'p-4 md:p-5',
        padding === 'md' && 'p-6 md:p-8',
        padding === 'lg' && 'p-8 md:p-10',
        className
      )}
      style={{
        ...(borderAccent ? { borderTop: `4px solid ${borderAccent}` } : {}),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
