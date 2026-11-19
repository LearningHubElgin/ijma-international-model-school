# GD Goenka La Petite, Rohini (Preschool Website Rebuild)

A pixel-faithful, responsive, high-performance rebuild of the official preschool website for **GD Goenka La Petite, Rohini, New Delhi** (`https://gdgoenkarohini.com/`).

Engineered with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, matching the original WordPress/Elementor design tokens, typography, color palette, animations, and responsive behaviors.

---

## Architecture & Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 15 (App Router) + React 18 | High-performance SSR, SSG static pre-rendering, nested layouts |
| **Language** | TypeScript | Full type safety across routes, configurations, and schemas |
| **Styling** | Tailwind CSS + CSS Variables | Pixel-accurate design token mapping from live site inspection |
| **Animation** | Framer Motion + Hardware CSS Keyframes | Scroll reveals, floating illustrations, counter physics, reduced motion |
| **Forms & Validation**| React Hook Form + Zod | Type-safe form handling for Enquiries and Admissions Applications |
| **Carousels** | Embla Carousel | Autoplay, responsive touch gestures, keyboard controls |
| **Lightbox** | Accessible Framer Modal | 6-tile Infrastructure and 9-thumbnail Footer image viewing |
| **Testing & QA** | Playwright | Multi-breakpoint visual regression, E2E functional verification |

---

## Project Structure

```
├── docs/
│   ├── recon.md                    # Authoritative design tokens, typography, metrics from live site
│   ├── animation-inventory.md      # Choreographed transitions, easings, keyframe definitions
│   ├── decisions.md                # Architectural & engineering decisions log
│   └── qa/                         # Automated QA report & cross-breakpoint screenshots (1440/1024/768/390px)
├── public/
│   └── assets/                     # Modular placeholder SVGs with matching dimensions & aspect ratios
│       ├── about/
│       ├── activities/
│       ├── banners/
│       ├── blog/
│       ├── decorative/
│       ├── facilities/
│       ├── features/
│       ├── footer-gallery/
│       ├── gallery/
│       ├── hero/
│       ├── logo/
│       └── programmes/
├── src/
│   ├── app/                        # Next.js App Router (31+ static pages & API routes)
│   │   ├── about-us/
│   │   ├── admissions/             # Overview, Application Form, Process, Eligibility & Fee
│   │   ├── api/                    # /api/enquire and /api/admissions Zod endpoints
│   │   ├── blog/                   # Blog archive + 3 specific post slug pages
│   │   ├── celebrations/
│   │   ├── contact-us/             # Form + styled interactive Map embed
│   │   ├── curriculum/
│   │   ├── field-trips/
│   │   ├── montessori-methodology/
│   │   ├── music-movement/
│   │   ├── physical-education/
│   │   ├── privacy-policy/
│   │   ├── programmes/             # Overview + 6 sub-programme routes
│   │   ├── speech-and-drama/
│   │   ├── layout.tsx              # Global layout with TopBar, Sticky Header, Footer, JSON-LD
│   │   ├── page.tsx                # Home page with all 11 sections in exact sequence
│   │   ├── robots.ts               # Dynamic robots.txt
│   │   └── sitemap.ts              # Dynamic sitemap.xml
│   ├── components/
│   │   ├── layout/                 # TopBar, Header, MobileMenu, Footer, InnerPageBanner
│   │   ├── modals/                 # EnquireModal with focus trap & validation
│   │   ├── seo/                    # JsonLd structured data (Preschool/LocalBusiness)
│   │   └── ui/                     # Container, Section, Button, Card, Reveal, Lightbox, Preloader
│   ├── content/
│   │   └── site.config.ts          # Central Single Source of Truth for all text, copy, contacts, images
│   ├── lib/
│   │   └── utils.ts                # clsx + tailwind-merge helper
│   └── styles/
│       └── globals.css             # CSS custom properties, keyframes, reduced-motion fallback
├── scripts/
│   └── run-qa-verification.js      # Automated Playwright test and screenshot runner
```

---

## Getting Started

### 1. Prerequisites
- Node.js 18.18+ or 20+
- npm 9+

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## How to Customize & Replace Content / Assets

Per Ground Rules 2 and 3, **copy, contact details, links, and asset paths are decoupled from UI components**:

### 1. Updating Copy, Phone, Email & Social Links
Open `src/content/site.config.ts`:
- **Contact Details**: Update `siteConfig.contact.phones`, `email`, `address`, and `hours`.
- **Programmes & Fees**: Update `siteConfig.programmes.list` or fee placeholders.
- **Counters**: Update `siteConfig.counters` with verified administrative figures (search for `// TODO:`).
- **Blog Articles**: Add or edit articles in `siteConfig.blog.posts`.

### 2. Replacing Placeholder Assets with Official Media
All image paths in `site.config.ts` point to semantic files in `/public/assets/`. To swap placeholder SVGs with real school photographs or branding:
1. Save official photos with matching filenames (e.g., `/public/assets/about/about-main.jpg` or `.png`).
2. Update the corresponding `image` property in `src/content/site.config.ts`.
3. Aspect ratios and container frames automatically preserve visual harmony.

---

## Automated QA & Visual Verification Suite

The repository includes a comprehensive Playwright QA suite verifying layout, navigation, modals, carousels, counters, forms, and cross-breakpoint visual regression.

Run the test suite:
```bash
node scripts/run-qa-verification.js
```
Automated outputs:
- Test Results: `docs/qa/qa-report.md` (11/11 tests passing)
- Fullpage Snapshots:
  - `docs/qa/build-desktop-1440.png` (Desktop)
  - `docs/qa/build-tablet-1024.png` (Tablet Landscape)
  - `docs/qa/build-tablet-768.png` (Tablet Portrait)
  - `docs/qa/build-mobile-390.png` (Mobile)

---

## Deployment Instructions

### Vercel (Recommended)
1. Push this repository to GitHub / GitLab / Bitbucket.
2. Import the project in [Vercel](https://vercel.com).
3. Framework preset: **Next.js**.
4. Deploy with zero configuration.

### Static Export (Optional)
If deploying to static storage (AWS S3, GitHub Pages, Cloudflare Pages):
1. In `next.config.ts`, set `output: 'export'`.
2. Run `npm run build`.
3. The standalone HTML/CSS/JS files will be generated in the `/out` directory.

---

## License
MIT License. Built for GD Goenka La Petite, Rohini.
