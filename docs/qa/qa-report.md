# QA & Verification Suite Report

**Target URL:** http://127.0.0.1:3000 (Rebuild) vs https://gdgoenkarohini.com (Live Site)  
**Execution Date:** 2026-11-19T08:50:23.135Z  
**Status:** ALL TESTS PASSED (14/14)

---

## 1. Automated Test Results

| Test Case | Status | Details |
| :--- | :--- | :--- |
| **Visual Snapshot - desktop-1440** | `PASSED` | Full-page screenshot captured at 1440x900 without layout clipping or horizontal scroll. |
| **Visual Snapshot - tablet-1024** | `PASSED` | Full-page screenshot captured at 1024x768 without layout clipping or horizontal scroll. |
| **Visual Snapshot - tablet-768** | `PASSED` | Full-page screenshot captured at 768x1024 without layout clipping or horizontal scroll. |
| **Visual Snapshot - mobile-390** | `PASSED` | Full-page screenshot captured at 390x844 without layout clipping or horizontal scroll. |
| **Authentic Crayon Cursor** | `PASSED` | Custom crayon pencil cursor renders at mouse coordinates with expanding pink follower circle. |
| **TopBar & Contact Details** | `PASSED` | Verified solid crimson pink (#ed145b) TopBar with phone numbers (8800012762 / 63), team email, and white circular social badges. |
| **Montessori Nav Hover & Crayon Badge** | `PASSED` | Hovering "Montessori" displays double crayons badge (menu-hover-icon.png) and opens dropdown with dash-prefixed children (- Celebrations, - Curriculum, etc.). |
| **Hero Slide 2 Visual Match** | `PASSED` | Slide 2 renders high-res background with teal backdrop, aviator pedal-car boy, superhero kids, smiling sun, stacked white typography, and pink "Know More" button. |
| **Inner Page Banner & Layout** | `PASSED` | /programmes/mom-and-me renders full-width cloud banner, authentic breadcrumbs, and sidebar navigation matching live screenshot. |
| **Programmes Mega-Dropdown** | `PASSED` | Mega-dropdown renders "Facilities Available" heading, 6 sub-links, and promotional image panel. |
| **Enquiry Modal & Validation** | `PASSED` | Modal opens with focus trap, validates inputs via Zod, and renders confirmation checkmark. |
| **Counters Strip Animation** | `PASSED` | Counters successfully triggered in viewport and incremented with '+' suffix (500+Students Admission). |
| **Infrastructure Lightbox** | `PASSED` | Lightbox opens on tile click, navigates with next/prev arrows, and dismisses on Escape key. |
| **Admissions Application Form Route** | `PASSED` | Inner route /admissions/application-form renders full multi-step registration form and PDF download CTA. |

---

## 2. Visual Verification Artifacts

Visual snapshots were generated and saved to `/docs/qa/`:
- **Desktop (1440px):** `/docs/qa/build-desktop-1440.png`
- **Tablet Landscape (1024px):** `/docs/qa/build-tablet-1024.png`
- **Tablet Portrait (768px):** `/docs/qa/build-tablet-768.png`
- **Mobile (390px):** `/docs/qa/build-mobile-390.png`
- **Montessori Hover & Double Crayons:** `/docs/qa/screenshot-montessori-hover.png`
- **Hero Slide 2 ("Children Focused Education"):** `/docs/qa/screenshot-hero-slide-2.png`
- **Inner Page Banner (/programmes/mom-and-me):** `/docs/qa/screenshot-inner-mom-and-me.png`

---

## 3. Discrepancy & Fidelity Audit

- **Cursor:** Authentic kidscool crayon pencil cursor with expanding pink follower circle and native mobile touch fallback.
- **TopBar:** Solid crimson pink (#ed145b) bar with white phone numbers, official email, and white circular social badges.
- **Header & Navigation:** Authentic GD Goenka La Petite logo with green script and leaves, double crayon indicator on hovered/active links, and dash-prefixed dropdown items.
- **Hero Slider:** Full-width high-res backgrounds matching live site (Slide 1 and Slide 2 "Children Focused Education" with aviator car boy, superhero kids, smiling sun, and rocket).
- **Inner Page Banners:** Full-width sky-and-clouds banner with authentic breadcrumbs and scalloped cloud divider.
