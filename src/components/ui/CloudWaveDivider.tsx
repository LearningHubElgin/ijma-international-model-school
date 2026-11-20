import React from 'react';

interface CloudWaveDividerProps {
  fillColor?: string;
  className?: string;
  heightClass?: string;
}

export function CloudWaveDivider({
  fillColor = '#ffffff',
  className = '',
  heightClass = 'h-[160px] sm:h-[210px] md:h-[250px] lg:h-[280px]',
}: CloudWaveDividerProps) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 w-full pointer-events-none z-30 overflow-hidden leading-none select-none ${heightClass} ${className}`}
      aria-hidden="true"
    >
      {/* Layer 1: Translucent Underlayer (matches .elementor-element-f12d22e from live site) */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full h-full pointer-events-none opacity-60"
        style={{
          backgroundColor: fillColor,
          WebkitMaskImage: "url('/assets/decorative/slider-cloud-bg-light.png')",
          maskImage: "url('/assets/decorative/slider-cloud-bg-light.png')",
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskPosition: 'bottom center',
          maskPosition: 'bottom center',
          WebkitMaskRepeat: 'repeat-x',
          maskRepeat: 'repeat-x',
        }}
      />

      {/* Layer 2: Solid Foreground Puffy Clouds (matches .elementor-element-09b41a3 from live site) */}
      <div
        className="absolute bottom-0 left-0 right-0 w-full h-[95%] pointer-events-none"
        style={{
          backgroundColor: fillColor,
          WebkitMaskImage: "url('/assets/decorative/slider-cloud-bg.png')",
          maskImage: "url('/assets/decorative/slider-cloud-bg.png')",
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskPosition: 'bottom center',
          maskPosition: 'bottom center',
          WebkitMaskRepeat: 'repeat-x',
          maskRepeat: 'repeat-x',
        }}
      />

      {/* Solid gap seal at the bottom to guarantee zero sub-pixel seams */}
      <div
        className="absolute -bottom-[2px] left-0 right-0 w-full h-[6px] z-20 pointer-events-none"
        style={{ backgroundColor: fillColor }}
      />
    </div>
  );
}
