import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'default' | 'wide' | 'narrow';
}

export function Container({
  children,
  className,
  size = 'default',
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        size === 'default' && 'max-w-[1200px]',
        size === 'wide' && 'max-w-[1360px]',
        size === 'narrow' && 'max-w-[840px]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
