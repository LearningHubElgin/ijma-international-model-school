'use client';

import React, { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only active on desktop (min-width: 768px) and non-touch
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(max-width: 767px)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let outerX = -100;
    let outerY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const animateOuter = () => {
      // Smooth trailing follower
      outerX += (mouseX - outerX) * 0.35;
      outerY += (mouseY - outerY) * 0.35;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${outerX}px, ${outerY}px, 0)`;
      }
      animId = requestAnimationFrame(animateOuter);
    };

    animId = requestAnimationFrame(animateOuter);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('textarea') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer') ||
          target.closest('.cursor-pointer'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[10000000] overflow-hidden hidden md:block"
      aria-hidden="true"
    >
      {/* Outer Follower Circle */}
      <div
        ref={outerRef}
        className={`fixed top-0 left-0 rounded-full transition-all duration-150 ease-out pointer-events-none ${
          isHovered
            ? 'w-[30px] h-[30px] -ml-[15px] -mt-[15px] bg-[#ed145b]/45 border-transparent'
            : 'w-[10px] h-[10px] -ml-[5px] -mt-[5px] border border-[#ed145b] bg-transparent'
        }`}
        style={{
          willChange: 'transform',
        }}
      />

      {/* Inner Crayon Pencil */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 w-[50px] h-[50px] pointer-events-none -ml-[3px] -mt-[3px]"
        style={{
          backgroundImage: "url('/assets/cursor/crayon-main.png')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '75% auto',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
