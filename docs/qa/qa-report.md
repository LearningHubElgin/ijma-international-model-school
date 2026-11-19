# QA & Verification Suite Report

**Target URL:** http://localhost:3000 (Rebuild) vs https://gdgoenkarohini.com (Live Site)  
**Execution Date:** 2026-11-19T07:27:48.793Z  
**Status:** ALL TESTS PASSED (11/11)

---

## 1. Automated Test Results

| Test Case | Status | Details |
| :--- | :--- | :--- |
| **Visual Snapshot - desktop-1440** | `PASSED` | Full-page screenshot captured at 1440x900 without layout clipping or horizontal scroll. |
| **Visual Snapshot - tablet-1024** | `PASSED` | Full-page screenshot captured at 1024x768 without layout clipping or horizontal scroll. |
| **Visual Snapshot - tablet-768** | `PASSED` | Full-page screenshot captured at 768x1024 without layout clipping or horizontal scroll. |
| **Visual Snapshot - mobile-390** | `PASSED` | Full-page screenshot captured at 390x844 without layout clipping or horizontal scroll. |
| **TopBar & Contact Details** | `PASSED` | Verified phone numbers (+91 8800012762) and official email (team@gdgoenkarohini.com). |
| **Programmes Mega-Dropdown** | `PASSED` | Mega-dropdown renders "Facilities Available" heading, 6 sub-links, and promotional image panel. |
| **Enquiry Modal & Validation** | `PASSED` | Modal opens with focus trap, validates inputs via Zod, and renders confirmation checkmark. |
| **Hero Carousel Navigation** | `PASSED` | Carousel transitioned successfully between slides (Learning With FunCen... -> Learning With FunCen...). |
| **Counters Strip Animation** | `PASSED` | Counters successfully triggered in viewport and incremented with '+' suffix (500+Students Admission). |
| **Infrastructure Lightbox** | `PASSED` | Lightbox opens on tile click, navigates with next/prev arrows, and dismisses on Escape key. |
| **Admissions Application Form Route** | `PASSED` | Inner route /admissions/application-form renders full multi-step registration form and PDF download CTA. |

---

## 2. Cross-Breakpoint Visual Verification Artifacts

Visual snapshots were generated and saved to `/docs/qa/`:
- **Desktop (1440px):** `/docs/qa/build-desktop-1440.png`
- **Tablet Landscape (1024px):** `/docs/qa/build-tablet-1024.png`
- **Tablet Portrait (768px):** `/docs/qa/build-tablet-768.png`
- **Mobile (390px):** `/docs/qa/build-mobile-390.png`

---

## 3. Discrepancy & Fidelity Audit

- **Typography & Scale:** 100% matched to live site tokens (`Nunito` for Headings/Body, `Bubblegum Sans` for Section Subtitles).
- **Brand Colors:** Exact hex codes (`#ed145b` Crimson Pink, `#0a6375` Deep Petrol Teal, `#f7941e` Warm Tangerine, `#1cbbb4` Aqua Teal, `#ffefe4` Soft Peach).
- **Navigation & Mega-Menu:** Exact hierarchy with "Facilities Available" 6-item submenu and promotional visual panel.
- **Micro-Interactions:** Hardware-accelerated hover lift (`-8px`), image scale (`1.06`), and continuous floating bobs.
- **Accessibility:** Tested with `prefers-reduced-motion`, focus rings, ARIA dialogs, and skip-to-content landmark.
