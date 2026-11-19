'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold font-sans rounded-pill transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-sm px-5 py-2',
    md: 'text-base px-7 py-3',
    lg: 'text-lg px-9 py-3.5',
  };

  const variantStyles = {
    primary:
      'bg-[#ed145b] text-white hover:bg-[#0a6375] shadow-button hover:shadow-lg focus:ring-[#ed145b]',
    secondary:
      'bg-[#0a6375] text-white hover:bg-[#ed145b] shadow-md hover:shadow-lg focus:ring-[#0a6375]',
    outline:
      'border-2 border-[#ed145b] text-[#ed145b] hover:bg-[#ed145b] hover:text-white focus:ring-[#ed145b]',
    white:
      'bg-white text-[#ed145b] hover:bg-[#0a6375] hover:text-white shadow-md focus:ring-white',
  };

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    if (isExternal) {
      return (
        <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
