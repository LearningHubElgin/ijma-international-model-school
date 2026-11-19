# Animation & Motion Inventory: GD Goenka La Petite, Rohini

This document catalogs every interaction, animation trigger, keyframe curve, and motion behavior identified on the live site, along with its Framer Motion and CSS implementation specifications.

---

## 1. Global Motion Rules & Reduced Motion Policy

### Motion Philosophy
- High-energy, joyful preschool aesthetic combined with disciplined, hardware-accelerated transitions.
- All animations operate exclusively on `transform` (`translate3d`, `scale`) and `opacity` to maintain 60–120 FPS without reflows.
- Universal accessibility: when `@media (prefers-reduced-motion: reduce)` is active, all transforms and infinite loops are neutralized to zero-duration opacity transitions or static layouts.

---

## 2. Page-Load Preloader

- **Visual Concept:** Minimal, clean loading overlay featuring branded animated spinner/dots and "Loading..." label in Nunito.
- **Trigger:** Initial page mount until window/assets loaded.
- **Duration:** `400ms` exit fade-out with `ease-out`.
- **Framer Motion Spec:**
  ```tsx
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  />
  ```

---

## 3. Hero Carousel Motion

- **Library:** Embla Carousel / Swiper.
- **Autoplay Interval:** `5000ms` with pause-on-hover.
- **Slide Transition:** Horizontal slide / cross-fade, duration `800ms`, easing `cubic-bezier(0.25, 1, 0.5, 1)`.
- **Text Entrance Choreography (Staggered per slide active):**
  1. **Eyebrow Label:** `fadeIn` from `y: 20px`, duration `500ms`, delay `150ms`.
  2. **Main Headline:** `fadeInUp` from `y: 40px`, duration `650ms`, delay `300ms`.
  3. **Description / Subhead:** `fadeIn` from `y: 20px`, duration `500ms`, delay `500ms`.
  4. **CTA Button ("Know More"):** `fadeInUp` from `y: 20px`, duration `400ms`, delay `650ms`.

---

## 4. Floating Decorative Illustrations (Continuous Physics)

- **Target Assets:** `pencil-girl.png`, `pencil-boy.png`, `cloud-shape.svg`, and play shapes.
- **Behavior:** Subtle, continuous vertical floating bob with slight rotational sway.
- **CSS Keyframes:**
  ```css
  @keyframes floatBobSlow {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-14px) rotate(2deg);
    }
  }

  @keyframes floatBobReverse {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(12px) rotate(-2deg);
    }
  }

  .animate-float-slow {
    animation: floatBobSlow 4.5s ease-in-out infinite;
  }

  .animate-float-reverse {
    animation: floatBobReverse 5.2s ease-in-out infinite 0.5s;
  }
  ```

---

## 5. Scroll-Revealed Component Variants (`Reveal.tsx`)

Scroll reveals are triggered once when elements intersect `20%` into the viewport (`once: true, amount: 0.2`).

### Variants Definition:
1. **`fade-up` (Default):**
   - Initial: `{ opacity: 0, y: 35 }`
   - Animate: `{ opacity: 1, y: 0 }`
   - Transition: `{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }`
2. **`fade-in`:**
   - Initial: `{ opacity: 0 }`
   - Animate: `{ opacity: 1 }`
   - Transition: `{ duration: 0.5, ease: "easeOut" }`
3. **`slide-left`:**
   - Initial: `{ opacity: 0, x: 45 }`
   - Animate: `{ opacity: 1, x: 0 }`
   - Transition: `{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }`
4. **`slide-right`:**
   - Initial: `{ opacity: 0, x: -45 }`
   - Animate: `{ opacity: 1, x: 0 }`
   - Transition: `{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }`
5. **`zoom-in`:**
   - Initial: `{ opacity: 0, scale: 0.92 }`
   - Animate: `{ opacity: 1, scale: 1 }`
   - Transition: `{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }`

---

## 6. Micro-Interactions & Hover States

### Cards (Feature, Programme, Facility, Activity, Blog)
- **Container Lift:** `transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;`
- **Hover Lift Value:** `translateY(-8px)`
- **Hover Shadow:** `box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);`
- **Internal Image Zoom:**
  - `overflow: hidden;`
  - Image transition: `transition: transform 0.45s ease;`
  - Hover scale: `scale(1.06)`

### Buttons (Primary `#ed145b` & Outline)
- **Border Radius:** `50px`
- **Hover Fill Swap:** Primary pink background transitions to deep petrol teal (`#0a6375`) or vice-versa over `300ms linear`.
- **Button Lift:** `transform: translateY(-2px)` on hover; `transform: translateY(0)` on active press.

### Navigation Links
- Standard color `#000000` transitions to `#ed145b` with a smooth `200ms` ease.
- Active link marked with persistent `#ed145b` and optional bottom indicator dot.

### Sticky Header Transition
- Trigger: Scroll position exceeds `150px`.
- Transition: `transition: all 0.35s ease;`
- Style change:
  - Background: `rgba(255, 255, 255, 0.98)` with `backdrop-filter: blur(8px)`
  - Shadow: `0 4px 20px rgba(0, 0, 0, 0.08)`
  - Padding: shrink vertical padding from `20px` to `12px`.

---

## 7. Animated Statistics Counters

- **Trigger:** Enters viewport once (`useInView` with `amount: 0.5`).
- **Duration:** `2000ms` total count duration.
- **Easing:** Ease-out exponential deceleration.
- **Formatting:** Displays running integers followed by `+` suffix upon completion (e.g., `500+`, `15+`, `25+`, `10+`).

---

## 8. Gallery Lightbox

- **Trigger:** Clicking any infrastructure tile or footer gallery thumbnail.
- **Entrance:** Backdrop fades in `{ opacity: 0 } -> { opacity: 1 }` (`250ms`).
- **Modal Image:** Zooms in `{ scale: 0.9, opacity: 0 } -> { scale: 1, opacity: 1 }` (`300ms`).
- **Interactions:** Keyboard `Escape` closes, `ArrowLeft` and `ArrowRight` navigate, swipe gesture enabled on touch devices.
