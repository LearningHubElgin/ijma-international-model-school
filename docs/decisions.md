# Architectural & Technical Decisions Log

This document tracks technical decisions made during the development of the GD Goenka La Petite, Rohini rebuild.

---

## Decision 1: Target Framework & Directory Structure
- **Decision:** Next.js (App Router) with TypeScript using standard `src/` directory layout (`src/app`, `src/components`, `src/content`, `src/styles`, `src/lib`, `public/assets`).
- **Rationale:** App Router provides native support for nested layouts, dynamic SEO metadata generation, route handlers for API forms, and optimized font and image loading.

## Decision 2: Typography & Google Font Strategy
- **Decision:** Load `Nunito` (weights 400, 600, 700, 800) and `Bubblegum Sans` (weight 400) via `next/font/google` with CSS variable bindings (`--font-nunito`, `--font-bubblegum`).
- **Rationale:** Computed styles on `gdgoenkarohini.com` confirm `Nunito` for all text/headings/UI and `Bubblegum Sans` for joyful section subtitles/eyebrows. `next/font` provides zero-layout-shift font optimization and self-hosts font files.

## Decision 3: Color Palette & CSS Variables Architecture
- **Decision:** Replicate exact Elementor Kidscool color tokens as CSS custom properties in `globals.css` and expose them to Tailwind CSS:
  - `--color-primary`: `#ed145b` (Crimson Pink)
  - `--color-secondary`: `#0a6375` (Deep Petrol Teal)
  - `--color-tertiary`: `#f7941e` (Warm Tangerine)
  - `--color-turquoise`: `#1cbbb4` (Bright Aqua Teal)
  - `--color-soft-peach`: `#ffefe4` (Soft Peach Tint)
  - `--color-footer-bg`: `#0a6375`
- **Rationale:** Ensures 100% token fidelity to the live site while retaining Tailwind's utility class workflow.

## Decision 4: Asset Strategy & Placeholders
- **Decision:** All placeholder assets are generated locally with matching aspect ratios, SVGs, and semantic filenames under `/public/assets/`. Zero remote hotlinking.
- **Rationale:** Strictly honors Ground Rule 2 and ensures the application is completely self-contained, offline-runnable, and easily customizable by swapping files or updating `site.config.ts`.

## Decision 5: Animation Engine
- **Decision:** Use Framer Motion for scroll-triggered reveals (`Reveal.tsx`), modal dialogs, and interactive transitions; use pure CSS keyframes for continuous ambient floating physics (`floatBobSlow`).
- **Rationale:** High-performance, hardware-accelerated transforms (`translate3d`, `scale`) that automatically respect `prefers-reduced-motion`.

## Decision 6: Lightbox Implementation
- **Decision:** Implement a custom, accessible Framer Motion-powered Lightbox modal supporting keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`), touch swipe, and focus management.
- **Rationale:** Eliminates heavy external dependencies while delivering a polished, accessible lightbox experience for both the Infrastructure gallery (6 tiles) and Footer gallery (9 thumbnails).
