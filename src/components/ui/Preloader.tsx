'use client';

import React, { useEffect, useState } from 'react';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fast fade-out once component mounts on client
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-300 pointer-events-none"
      aria-live="polite"
      aria-hidden="true"
    >
      {/* Animated Spinner with school colors */}
      <div className="relative w-14 h-14 mb-3">
        <div className="absolute inset-0 rounded-full border-4 border-[#ffefe4]" />
        <div className="absolute inset-0 rounded-full border-4 border-[#0A5C36] border-t-transparent animate-spin" />
        <div className="absolute inset-2 rounded-full border-4 border-[#10B981] border-b-transparent animate-spin [animation-duration:1.2s]" />
      </div>

      <div className="text-center">
        <span className="font-bubblegum text-lg text-[#0A5C36] tracking-wider animate-pulse">
          Loading...
        </span>
        <p className="font-sans text-[11px] text-[#0A5C36] mt-0.5 tracking-wider uppercase font-semibold">
          IJMA INTERNATIONAL MODEL SCHOOL
        </p>
      </div>
    </div>
  );
}
