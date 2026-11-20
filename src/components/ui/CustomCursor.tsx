'use client';

import React, { useEffect, useRef } from 'react';

export function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only active on desktop (min-width: 768px) and fine pointer
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(max-width: 767px)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let hasMoved = false;
    let mouseX = -200;
    let mouseY = -200;
    let outerX = -200;
    let outerY = -200;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        outerX = mouseX;
        outerY = mouseY;
        if (containerRef.current) {
          containerRef.current.style.opacity = '1';
        }
      }

      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const animateOuter = () => {
      if (hasMoved) {
        // Smooth trailing follower (0.35 ease factor)
        outerX += (mouseX - outerX) * 0.35;
        outerY += (mouseY - outerY) * 0.35;

        if (outerRef.current) {
          outerRef.current.style.transform = `translate3d(${outerX}px, ${outerY}px, 0)`;
        }
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
        if (outerRef.current) {
          // Expanded hover circle: 30px solid teal circle (#0a6375, opacity 0.5)
          outerRef.current.className =
            'fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-150 ease-out w-[30px] h-[30px] -ml-[10px] -mt-[10px] bg-[#0a6375] opacity-50 border-0';
        }
      } else {
        if (outerRef.current) {
          // Default circle: 10px solid pink circle (#ed145b, opacity 0.4)
          outerRef.current.className =
            'fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-150 ease-out w-[10px] h-[10px] -ml-[2px] -mt-[2px] bg-[#ed145b] opacity-40 border-0';
        }
      }
    };

    const onMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '0';
      }
      hasMoved = false;
    };

    const onMouseEnter = () => {
      if (hasMoved && containerRef.current) {
        containerRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[10000000] overflow-hidden hidden md:block opacity-0 transition-opacity duration-150"
      aria-hidden="true"
    >
      {/* Outer Follower Circle (matches gdgoenkarohini.com .wdt-cursor-outer) */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-150 ease-out w-[10px] h-[10px] -ml-[2px] -mt-[2px] bg-[#ed145b] opacity-40 border-0"
        style={{ willChange: 'transform' }}
      />

      {/* Inner Crayon (matches gdgoenkarohini.com .wdt-cursor-inner: 50x50, -3px -3px, center, 75% auto) */}
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
