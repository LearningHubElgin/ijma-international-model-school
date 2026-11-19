import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageFrameProps {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide' | 'card' | 'custom';
  customAspect?: string;
  className?: string;
  imageClassName?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  zoomOnHover?: boolean;
  priority?: boolean;
}

export function ImageFrame({
  src,
  alt,
  aspectRatio = 'card',
  customAspect,
  className,
  imageClassName,
  rounded = 'lg',
  zoomOnHover = true,
  priority = false,
}: ImageFrameProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[16/6]',
    card: 'aspect-[1.58/1]',
    custom: customAspect || 'aspect-auto',
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-thumb',
    md: 'rounded-xl',
    lg: 'rounded-card',
    full: 'rounded-full',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden w-full bg-gray-100',
        aspectClasses[aspectRatio],
        roundedClasses[rounded],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        className={cn(
          'object-cover transition-transform duration-500 ease-out',
          zoomOnHover && 'group-hover:scale-106',
          imageClassName
        )}
      />
    </div>
  );
}
