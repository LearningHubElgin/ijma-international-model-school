import React from 'react';

interface CloudWaveDividerProps {
  fillColor?: string;
  className?: string;
  heightClass?: string;
}

export function CloudWaveDivider({
  fillColor = '#ffffff',
  className = '',
  heightClass = 'h-[75px] sm:h-[110px] md:h-[140px] lg:h-[165px] xl:h-[185px]',
}: CloudWaveDividerProps) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 w-full pointer-events-none z-20 overflow-hidden leading-none select-none ${heightClass} ${className}`}
      aria-hidden="true"
    >
      {/* Background Translucent Cloud Layer (Peach/Teal soft silhouette) */}
      <div
        className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 w-full h-full bg-white/45"
        style={{
          WebkitMaskImage: "url('/assets/decorative/slider-cloud-bg-light.png')",
          WebkitMaskSize: '1440px 100%',
          WebkitMaskRepeat: 'repeat-x',
          WebkitMaskPosition: 'bottom center',
          maskImage: "url('/assets/decorative/slider-cloud-bg-light.png')",
          maskSize: '1440px 100%',
          maskRepeat: 'repeat-x',
          maskPosition: 'bottom center',
        }}
      />

      {/* Foreground Solid Cloud Wave Layer (Matches exactly with following section background) */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full h-[90%] sm:h-[92%]"
        style={{
          backgroundColor: fillColor,
          WebkitMaskImage: "url('/assets/decorative/slider-cloud-bg.png')",
          WebkitMaskSize: '1440px 100%',
          WebkitMaskRepeat: 'repeat-x',
          WebkitMaskPosition: 'bottom center',
          maskImage: "url('/assets/decorative/slider-cloud-bg.png')",
          maskSize: '1440px 100%',
          maskRepeat: 'repeat-x',
          maskPosition: 'bottom center',
        }}
      />
    </div>
  );
}
