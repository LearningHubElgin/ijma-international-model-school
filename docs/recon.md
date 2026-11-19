# Comprehensive Reconnaissance Report: GD Goenka La Petite, Rohini

**Target Website:** https://gdgoenkarohini.com/  
**Source Technology Stack:** WordPress 6.x + Elementor / Elementor Pro + Kidscool Theme (`wdt`) + Swiper.js + FontAwesome  
**Reconnaissance Date:** November 2026  
**Audited Viewports:** 1440px (Desktop), 1024px (Tablet Landscape), 768px (Tablet Portrait), 390px (Mobile)

---

## 1. Typography System

The typography is built on two primary Google Fonts:
- **`Nunito`** (sans-serif) for all Headings, Body copy, Navigation, Buttons, and UI components.
- **`Bubblegum Sans`** (cursive) for playful Eyebrows, Section Subtitles, and decorative callouts.

### Computed Typography Metrics

| Token / Element | Font Family | Weight | Font Size | Line Height | Letter Spacing | Color Code | Hex Value |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display (Slide Titles)** | `Nunito` | 700 (Bold) | `48px` (desktop)<br>`36px` (tablet)<br>`28px` (mobile) | 1.2 (`57.6px`) | Normal | Black / White | `#000000` / `#ffffff` |
| **H1 (Inner Banner Heading)** | `Nunito` | 700 (Bold) | `50px` | 1.3 (`65px`) | Normal | White | `#ffffff` |
| **H2 (Section Headings)** | `Nunito` | 700 (Bold) | `40px` | 1.3 (`52px`) | `1.3px` | Head Alt | `#000000` |
| **H3 (Card / Feature Titles)** | `Nunito` | 700 (Bold) | `32px` | 1.3 (`41.6px`) | Normal | Head Alt | `#000000` |
| **H4 (Subsections / Blocks)** | `Nunito` | 700 (Bold) | `24px` | 1.3 (`31.2px`) | Normal | Head Alt | `#000000` |
| **H5 (Mega Menu Headings)** | `Nunito` | 600 / 700 | `20px` | 1.3 (`26px`) | Normal | Head Alt | `#000000` |
| **H6 (Card Subtitles / Age Tags)** | `Nunito` | 700 (Bold) | `18px` | 1.3 (`23.4px`) | Normal | Primary Pink | `#ed145b` |
| **Eyebrow / Subtitle** | `Bubblegum Sans` | 400 (Regular) | `18px` | 1.3 (`23.4px`) | `0.05em` | Primary Pink | `#ed145b` |
| **Body Paragraphs** | `Nunito` | 400 (Regular) | `16px` | 1.64 (`26.24px`)| Normal | Slate Grey | `#6b6b84` |
| **Main Navigation Items** | `Nunito` | 600 (Semi-bold)| `18px` | 1.64em | Normal | Black | `#000000` |
| **Navigation Active / Hover** | `Nunito` | 600 (Semi-bold)| `18px` | 1.64em | Normal | Primary Pink | `#ed145b` |
| **Top Bar Contact Info** | `Nunito` | 400 (Regular) | `15px` | 1.5 | Normal | Slate / White | `#6b6b84` / `#000000` |
| **Primary Buttons** | `Nunito` | 600 (Semi-bold)| `16px` | 1.3 | Normal | White | `#ffffff` |
| **Counter Numbers** | `Nunito` | 800 (Extra-bold)| `52px` | 1.1 | Normal | Primary / Teal | `#ed145b` / `#0a6375` |
| **Counter Labels** | `Nunito` | 600 (Semi-bold)| `18px` | 1.3 | Normal | Deep Black | `#000000` |
| **Footer Headings** | `Nunito` | 700 (Bold) | `22px` | 1.3 | Normal | White | `#ffffff` |
| **Footer Links / Body** | `Nunito` | 400 (Regular) | `15px` | 1.6 | Normal | Muted White | `#e0e0e0` |

---

## 2. Color System & Palette

### Design Tokens & CSS Variables
```css
:root {
  /* Brand Accent Colors */
  --color-primary: #ed145b;          /* rgb(237, 20, 91)  - Crimson Pink */
  --color-primary-hover: #c40e48;    /* Darker Crimson */
  --color-secondary: #0a6375;        /* rgb(10, 99, 117)  - Deep Petrol Teal */
  --color-secondary-hover: #074c5a;  /* Darker Teal */
  --color-tertiary: #f7941e;         /* rgb(247, 148, 30) - Warm Tangerine */
  --color-turquoise: #1cbbb4;        /* rgb(28, 187, 180) - Bright Aqua Teal */
  --color-soft-peach: #ffefe4;       /* rgb(255, 239, 228)- Soft Peach Tint */
  --color-soft-yellow: #fff9e6;      /* Light yellow highlight */

  /* Neutral & Base */
  --color-white: #ffffff;
  --color-black: #000000;
  --color-text-body: #6b6b84;        /* Slate Grey */
  --color-text-muted: #9e9eb0;
  --color-border: #e8e8ed;
  --color-border-warm: #ffefe4;

  /* Footer Colors */
  --color-footer-bg: #0a6375;        /* Deep Teal */
  --color-subfooter-bg: #074c5a;     /* Dark Teal */

  /* Radii */
  --radius-pill: 50px;               /* Buttons & Inputs */
  --radius-card: 22px;               /* Content & Programme Cards */
  --radius-image: 16px;              /* Image frames */
  --radius-thumb: 8px;               /* 3x3 Gallery thumbnails */

  /* Shadows */
  --shadow-header: 0 4px 20px rgba(0, 0, 0, 0.08);
  --shadow-card: 0 10px 30px rgba(0, 0, 0, 0.05);
  --shadow-card-hover: 0 18px 40px rgba(0, 0, 0, 0.12);
  --shadow-button: 0 6px 18px rgba(237, 20, 91, 0.35);
}
```

### Section-by-Section Background Mapping

| Section | Background Color | Notes |
| :--- | :--- | :--- |
| **Top Contact Bar** | `#ffffff` | Clean top strip with subtle bottom divider `#f0f0f0` |
| **Header (Sticky)** | `#ffffff` | Drops `0 4px 20px rgba(0, 0, 0, 0.08)` shadow when scrolled |
| **Hero Slider** | `#ffffff` / Soft Peach `#fff9f5` | Dual slide background with soft cloud cutouts |
| **About Us** | `#ffffff` | Pure white background with floating pencil girl/boy |
| **Step-by-Step Banner** | Soft Yellow `#fff9e6` | Gentle full-width callout container |
| **Montessori Features (6 Cards)**| `#ffffff` | Cards with alternating borders (`#1cbbb4`, `#f7941e`, `#ed145b`, `#0a6375`) |
| **Programmes Grid (6 Cards)** | Soft Peach `#ffefe4` | Peach section background; cards are `#ffffff` |
| **School Facilities (4 Cards)** | `#ffffff` | Pure white with 4 elevated feature cards |
| **Counters Strip** | `#0a6375` (Deep Petrol Teal) | White text, large energetic numerals |
| **Infrastructure Gallery** | `#ffffff` | 6 interactive photo tiles with pink hover overlays |
| **Smart Activities (5 Cards)** | Soft Peach `#ffefe4` | 5 horizontal or vertical activity badges |
| **Blog Teaser Grid** | `#ffffff` | 3 editorial cards with dates and excerpts |
| **Newsletter Subscribe** | `#0a6375` (Deep Teal) | High-contrast email input and pink CTA |
| **Footer** | `#0a6375` (Deep Teal) | 4-column layout + 9-image photo grid |
| **Sub-footer / Copyright** | `#074c5a` (Dark Teal) | Bottom legal line and copyright notice |

---

## 3. Layout, Grid & Spacing System

- **Container Max-Width:** `1200px` (standard container), `1400px` (wide hero container).
- **Responsive Breakpoints:**
  - `desktop-xl`: `1440px`
  - `laptop`: `1200px`
  - `tablet-landscape`: `1024px` (nav collapses to mobile drawer)
  - `tablet-portrait`: `768px` (grids collapse from 3/4 cols to 2 cols)
  - `mobile`: `390px` (single column layout, reduced paddings)
- **Section Spacings:**
  - Desktop (`>=1025px`): `padding: 90px 0`
  - Tablet (`769px` - `1024px`): `padding: 60px 0`
  - Mobile (`<=768px`): `padding: 45px 0`
- **Standard Card Margins & Gutters:**
  - Features Grid: 3 columns, `gap: 30px` (tablet: 2 cols, mobile: 1 col)
  - Programmes Grid: 3 columns, `gap: 30px` (tablet: 2 cols, mobile: 1 col)
  - Facilities Grid: 4 columns, `gap: 25px` (tablet: 2 cols, mobile: 1 col)
  - Activities Grid: 5 columns / flex wrap, `gap: 24px`
  - Blog Grid: 3 columns, `gap: 30px` (tablet: 2 cols, mobile: 1 col)
  - Footer Columns: 4 columns desktop (`30% / 20% / 20% / 30%`), 2 columns tablet, 1 column mobile

---

## 4. Navigation & Header Hierarchy

### Top Contact Bar
- **Left:**
  - Phone: `+91 8800012762 / +91 8800012763` (`tel:+918800012762`)
  - Email: `team@gdgoenkarohini.com` (`mailto:team@gdgoenkarohini.com`)
  - Timings: `Mon - Sat: 9:00 AM - 3:00 PM`
- **Right:**
  - Text label: `Follow Us :`
  - Facebook: `https://www.facebook.com/GDGoenkaLaPetiteRohini`
  - Instagram: `https://www.instagram.com/gdgoenkalprohini/`
  - YouTube: `https://www.youtube.com/watch?v=N8C9PpceGT8`
- **Breakpoint Behavior:** Hidden at `<=1024px` to conserve mobile screen height.

### Main Navigation Bar
- **Logo:** Display width `260px`, height `78px` (aspect ratio `3.33:1`). Left-aligned.
- **Nav Items:**
  1. **Home** (`/`)
  2. **Programmes** (Mega-dropdown on hover):
     - Section Heading: `Facilities Available`
     - Child 1: `Mom and Me (12-18 Months)` (`/programmes/mom-and-me`)
     - Child 2: `Play Group (18-24 Months)` (`/programmes/play-group`)
     - Child 3: `Pre Nursery (2-3 Years)` (`/programmes/pre-nursery-age-group-2-years-to-3-years`)
     - Child 4: `Nursery (3-4 Years)` (`/programmes/nursery-age-group-3-years-to-4-years`)
     - Child 5: `Day Care (12 Months - 12 Years)` (`/programmes/day-care-age-group-12-months-to-12-years`)
     - Child 6: `After School Activity Center (2 - 12 Years)` (`/programmes/after-school-activity-center-2-years-12-years`)
     - Visual Panel: Right-hand featured image with promotional banner badge
  3. **Admissions** (Standard dropdown):
     - `Application Form` (`/admissions/application-form`)
     - `Application Process` (`/admissions/application-process`)
     - `Eligibility & Fees` (`/admissions/eligibility-fee`)
  4. **Montessori** (Standard dropdown):
     - `Montessori Methodology` (`/montessori-methodology`)
     - `Curriculum` (`/curriculum`)
     - `Celebrations` (`/celebrations`)
     - `Field Trips` (`/field-trips`)
     - `Music & Movement` (`/music-movement`)
     - `Physical Education` (`/physical-education`)
     - `Speech And Drama` (`/speech-and-drama`)
  5. **Blog** (`/blog`)
  6. **About Us** (`/about-us`)
  7. **Contact Us** (`/contact-us`)
- **CTA Button:** `Enquire Now` (Crimson Pink Pill Button, `#ed145b`). Triggers accessible Enquiry Modal.

---

## 5. Asset Slots & Displayed Dimensions

| Slot Role | Displayed Size (Desktop) | Aspect Ratio | Naming Convention |
| :--- | :--- | :--- | :--- |
| **School Logo** | `260 x 78 px` | `3.33:1` | `/assets/logo/gdglp-logo.png` |
| **Hero Slide 1** | `1920 x 750 px` | `2.56:1` | `/assets/hero/hero-slide-1.jpg` |
| **Hero Slide 2** | `1920 x 750 px` | `2.56:1` | `/assets/hero/hero-slide-2.jpg` |
| **About Section Main** | `500 x 500 px` | `1:1` (Square) | `/assets/about/about-main.jpg` |
| **Floating Pencil Girl** | `200 x 376 px` | `1:1.88` | `/assets/decorative/pencil-girl.png` |
| **Floating Pencil Boy** | `200 x 376 px` | `1:1.88` | `/assets/decorative/pencil-boy.png` |
| **Floating Cloud Shapes** | `180 x 100 px` | `1.8:1` | `/assets/decorative/cloud-shape.svg` |
| **Feature Cards (6)** | `380 x 240 px` | `1.58:1` | `/assets/features/feature-[1-6].jpg` |
| **Programmes Cards (6)** | `380 x 260 px` | `1.46:1` | `/assets/programmes/programme-[1-6].jpg` |
| **Facilities Cards (4)** | `360 x 240 px` | `1.5:1` | `/assets/facilities/facility-[1-4].jpg` |
| **Infrastructure (6)** | `400 x 300 px` | `1.33:1` (4:3) | `/assets/gallery/infra-[1-6].jpg` |
| **Activities Cards (5)** | `280 x 200 px` | `1.4:1` | `/assets/activities/activity-[1-5].jpg` |
| **Blog Cards (3)** | `380 x 240 px` | `1.58:1` | `/assets/blog/blog-[1-3].jpg` |
| **Footer Thumbnails (9)**| `80 x 80 px` | `1:1` (Square) | `/assets/footer-gallery/thumb-[1-9].jpg` |
| **Inner Hero Banner** | `1920 x 360 px` | `5.33:1` | `/assets/banners/inner-hero-banner.jpg` |

---

## 6. Inner Pages Structure & Forms

1. **Inner Page Banner:**
   - Dark translucent overlay over brand banner.
   - Large centered H1 (`50px`).
   - Breadcrumb navigation: `Home / <Current Page>`.
2. **Contact Form (`/contact-us`):**
   - Fields: Full Name, Email Address, Contact Number, Programme / Class, Message.
   - Validation: Required checks for name, phone, email, and class.
   - Interactive styled Map embed placeholder pointing to Sector 3, Rohini.
3. **Admission Application Form (`/admissions/application-form`):**
   - Comprehensive multi-step or single-page structured form:
     - Parent Details: Father's Name, Mother's Name, Phone, Email, Address.
     - Child Details: Full Name, Date of Birth, Gender, Blood Group.
     - Programme Selection: Dropdown with 6 age programmes.
     - Preferred Start Date.
     - Consent & declaration checkbox.
   - Also provides link to official printable Admission Form PDF.
4. **Blog Single Pages:**
   - 3 specific post routes:
     - `/blog/the-benefits-of-montessori-based-education-a-comprehensive-guide`
     - `/blog/best-play-school-in-delhi-gd-goenka-la-petite-rohini`
     - `/blog/importance-of-playschool-and-their-various-types`
   - Rich typography layout, author metadata, publish date, category tags, related articles grid.
