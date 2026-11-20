# Animations Inventory: GD Goenka La Petite, Rohini

Detailed animation behavior inspected and recorded from https://gdgoenkarohini.com/.

## 1. Entrance Animations (Scroll-Triggered)
- Framer Motion `whileInView` with `viewport: { once: true, amount: 0.25 }`
- Section headings & intros: `fade-up`, `duration: 0.6s`, `ease: [0.22, 1, 0.36, 1]`
- Stats Counter Strip:
  - Numbers count up from 0 to target value on scroll into view:
    - `3564+` (Students Admission) - 2000ms duration
    - `156+` (Total No.of Class) - 2000ms duration
    - `76+` (No.of Teachers) - 2000ms duration
    - `8+` (Years Experience) - 2000ms duration
  - Staggered entrance for counter items: `delay: 0.1s * (index + 1)`

## 2. Looping / Continuous Floating Animations
- `studys.png` (Child reading book on left of counter strip):
  - Slow vertical floating loop: `translateY(-8px)` to `translateY(8px)`
  - Duration: `4.5s`, `ease-in-out`, infinite alternate
- `cycle-play.png` (Child on balance bike on right of counter strip):
  - Reverse vertical floating loop: `translateY(8px)` to `translateY(-8px)`
  - Duration: `5s`, `ease-in-out`, infinite alternate
- Floating Star & Planet Doodles in Facilities Section:
  - `animate-float-slow`: `translateY(-12px) rotate(2deg)`, 6s loop
  - `animate-float-reverse`: `translateY(12px) rotate(-2deg)`, 7s loop
- Hand-shake image in Programmes Section:
  - Smooth up-and-down oscillation, 4s loop

## 3. Interactive / Hover Animations
- Counter Icon Pebble:
  - When hovered, the white pebble badge slides out a vibrant pink `#ED145B` drop-silhouette (`translate(8px, 4px)`) with smooth CSS transition (`transition-transform duration-300`).
  - Slight scale up `scale(1.05)` on the cartoon SVG character.
- School Facilities Arched Dome Cards:
  - Card background smoothly transitions from `#0A6375` (Teal) to `#EB1551` (Crimson) (`duration-300`).
  - Corner turquoise icon (`#1CBBB4`) glides inward/upward (`translate(48px, -48px)`) and fades to `opacity: 0.15` as a watermark graphic inside the card.
- Buttons ("View More", "Know More", "Enquire Now"):
  - Hover translation: `translateY(-2px)`
  - Subtle drop shadow enlargement
