# BMD Transportation — Project Guidelines for Claude

## Project Overview
Rebuilding the website for **BMD Transportation** from scratch. The current live site (https://bmdtransportation.com/) is reference for brand identity only — do not copy its code or layout.

## Brand Identity
- **Company:** BMD Transportation — specialized industrial freight carrier based in Eastern Ontario, Canada
- **Founding:** ~1986 (approaching 40 years in business)
- **Positioning:** NOT a general trucking company. Specialists in over-dimensional, open deck, industrial, and cross-border freight
- **Target Clients:** Large commercial manufacturers, HVAC contractors, structural steel firms, construction companies
- **Territory:** Eastern Ontario primary; Canada-US cross-border capable

## Design Direction
- **Vibe:** Modern, premium, credible, industrial B2B — not consumer trucking
- **Palette:**
  - BMD Red: `#CC0000` (primary accent, CTAs, stat highlights ONLY — use sparingly)
  - Near-black: `#0A0A0A` (nav, footer, dark sections)
  - Charcoal: `#171717` (service cards, dark UI elements)
  - Slate: `#262626` (borders, dividers)
  - Light gray: `#F5F5F5` (section backgrounds alternating)
  - Mist: `#F0F0F0` (industry card backgrounds)
  - Silver: `#A3A3A3` (secondary text on dark)
- **Typography:**
  - Display/H1-H2: Barlow Condensed 800-900 (industrial authority)
  - UI/Buttons/Labels: Barlow 500-700
  - Body: Inter 300-500 (screen readability)
- **Red Usage Rules:** ONLY on CTA buttons, stat numbers, section accent lines (3px), hover effects. NEVER as large background fills.

## Core Services (always highlight these)
1. Over-Dimensional Freight (wide, high, long loads + permits + escorts)
2. Full Truck Load (FTL) — dedicated, direct
3. Open Deck / Step Deck Transport
4. Industrial & HVAC Freight (rooftop units, chillers, boilers)
5. Cross-Border Transport (Canada-US, bonded carrier)
6. Steel & Manufacturing Freight

## Technical Standards
- **Framework:** Single-file HTML with Tailwind CSS CDN (no build step)
- **Fonts:** Google Fonts CDN — Barlow Condensed + Barlow + Inter
- **Images:** CSS-based visuals preferred over external images to prevent broken links. Unsplash URLs acceptable with solid dark fallback background colors.
- **JS:** Vanilla only, minimal. No frameworks. Only for mobile menu toggle and scroll behavior.
- **Semantics:** Full HTML5 semantic tags — `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`. ARIA labels on all interactive elements.
- **Responsive:** Mobile-first. Base classes for mobile, `lg:` breakpoint for desktop.
- **No broken links:** All `href` placeholders use `#` or `#contact`. Phone/email use placeholder text clearly marked for replacement.

## SEO Priorities
- H1 must target: "over-dimensional freight Ontario" or "Eastern Ontario specialized freight"
- H2s should target individual service keywords
- Meta description must reference: over-dimensional, FTL, open deck, cross-border, Eastern Ontario, 40 years
- All images need descriptive alt text

## Content Placeholders (replace before launch)
- Phone: `(XXX) XXX-XXXX` → real BMD phone number
- Email: `info@bmdtransportation.com` → verify this is correct
- Address: `Eastern Ontario, Canada` → specific city/address if desired
- Founded: `~1986` → confirm exact year; remove tilde for exact year
- Credentials: WSIB, CVOR, bonded — confirm which BMD actually holds

## Sections Required (Homepage)
1. Fixed navigation with mobile hamburger
2. Full-viewport hero (dark, dramatic, freight photography)
3. Trust/credential bar (dark, badges)
4. Services 3×2 grid (dark cards on light bg)
5. Why BMD split layout (copy + visual)
6. Industries We Serve (3 cards: HVAC, Steel, Construction)
7. Final CTA (dark, full-width)
8. Footer (4-column: Brand+Contact, Services, Industries, Company)

## Do NOT Do
- Do not use red as a section background color
- Do not use Bootstrap or any other CSS framework
- Do not add backend, PHP, CMS, or database logic
- Do not create rounded corners on service cards (sharp edges = industrial)
- Do not use Comic Sans, Lobster, or decorative display fonts
- Do not output generic trucking language ("we deliver excellence") — be specific and industrial
