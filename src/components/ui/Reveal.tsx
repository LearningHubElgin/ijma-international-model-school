'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export type RevealVariant = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in';

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  viewportAmount?: number;
}

export function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.6,
  className,
  viewportAmount = 0.2,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getVariants = () => {
    switch (variant) {
      case 'fade-in':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: 45 },
          visible: { opacity: 1, x: 0 },
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: -45 },
          visible: { opacity: 1, x: 0 },
        };
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.92 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'fade-up':
      default:
        return {
          hidden: { opacity: 0, y: 35 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
