'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dismiss preloader after brief delay to allow fonts and initial DOM to settle
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          aria-live="polite"
          aria-busy={isLoading}
        >
          {/* Animated Spinner with school colors */}
          <div className="relative w-16 h-16 mb-4">
            <div className="absolute inset-0 rounded-full border-4 border-[#ffefe4]" />
            <div className="absolute inset-0 rounded-full border-4 border-[#ed145b] border-t-transparent animate-spin" />
            <div className="absolute inset-2 rounded-full border-4 border-[#0a6375] border-b-transparent animate-spin [animation-duration:1.5s]" />
          </div>

          <div className="text-center">
            <span className="font-bubblegum text-xl text-[#ed145b] tracking-wider animate-pulse">
              Loading...
            </span>
            <p className="font-sans text-xs text-[#6b6b84] mt-1 tracking-wider uppercase font-semibold">
              GD Goenka La Petite
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
