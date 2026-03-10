# Brickwise Advisors — Dev Starter Kit

Design system implementation ready for terminal / code editor.
Based on: **Contentsquare 2024 rebrand** (Saffron Brand Consultants)
Brand: Aubergine `#350B48` + Light Carmine Pink `#F24B3A`

**Positioning:** Fractional CFO & financial advisory for early-stage startups (pre-seed → Series B)

---

## File Manifest

```
brickwise/
├── design-tokens.css   → All CSS custom properties (:root vars)
├── components.css      → Full component library (nav, hero, cards, btns…)
├── tokens.js           → Same tokens as ES module + Tailwind config object
├── logo.svg            → The Stack mark + wordmark (light backgrounds)
├── logo-dark.svg       → The Stack mark + wordmark (dark/aubergine backgrounds)
├── index.html          → Starter page — all sections wired up, ready to fill
└── README.md           → This file
```

---

## Quick Start (vanilla)

```bash
# 1. Copy the brickwise/ folder into your project root
# 2. Place Zac_staff_photo_gift.jpg alongside index.html
# 3. Open in browser
open index.html
```

---

## Quick Start (with a bundler / Vite)

```bash
npm create vite@latest brickwise-site -- --template vanilla
cd brickwise-site
cp /path/to/brickwise/*.{css,js,svg} src/
```

In `main.js`:
```js
import './design-tokens.css'
import './components.css'
```

---

## Quick Start (React / Next.js)

```bash
cp design-tokens.css components.css styles/
```

In `_app.jsx` or `layout.tsx`:
```js
import '@/styles/design-tokens.css'
import '@/styles/components.css'
```

**Tailwind (`tailwind.config.js`):**
```js
import { tailwindExtend } from './src/styles/tokens.js'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: tailwindExtend },
}
```

---

## Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## Core Color Quick Reference

| Token                     | Hex       | Use                         |
|---------------------------|-----------|-----------------------------|
| `--color-aubergine-700`   | `#350B48` | Hero bg, nav accent, text   |
| `--color-aubergine-800`   | `#240630` | Footer, deep sections       |
| `--color-carmine-500`     | `#F24B3A` | Primary CTA buttons         |
| `--color-coral`           | `#FF7A6E` | Highlights on dark bg       |
| `--color-neutral-50`      | `#FAF8F6` | Warm off-white section bg   |
| `--text-on-dark-secondary`| `#DFCCE8` | Body text on dark sections  |

---

## Page Sections (index.html)

| Section         | ID           | Background              |
|-----------------|--------------|-------------------------|
| Navigation      | —            | White, sticky           |
| Hero            | —            | Dark aubergine mesh     |
| Stats Strip     | —            | Aubergine               |
| Services        | `#services`  | White (6-card grid)     |
| About / Headshot| `#about`     | Warm neutral            |
| Moontower Society | `#moontower` | Dark aubergine mesh   |
| Final CTA       | `#contact`   | White, centered         |
| Footer          | —            | Darkest aubergine       |

---

## Services Covered

- Fractional CFO
- Fundraising Readiness
- Financial Modeling
- Cap Table & Equity
- Runway & Cash Planning
- Finance Ops & Infrastructure

---

## Key Component Classes

```css
.btn .btn-primary          /* carmine CTA */
.btn .btn-primary-dark     /* white on dark bg */
.btn .btn-ghost-dark       /* outlined on dark bg */
.btn-sm / .btn-lg / .btn-xl

.card .card-default        /* white + shadow */
.card .card-dark           /* aubergine elevated */
.card-service              /* hover-lift service tile */
.card-stat                 /* coral gradient stat number */

.container                 /* max 1280px centered */
.section                   /* 6rem padding-block */
.grid-2 / .grid-3 / .grid-4

.overline                  /* carmine uppercase label */
.lead / .lead-dark         /* large body text */
.hero                      /* dark mesh gradient section */
.section-header            /* centered heading block */
```

---

## Calendly Link

`https://calendly.com/brickwiseadvisors`

---

## Assets Checklist

- [x] `design-tokens.css`
- [x] `components.css`
- [x] `tokens.js`
- [x] `logo.svg` / `logo-dark.svg`
- [x] `index.html`
- [ ] `Zac_staff_photo_gift.jpg` — place in same folder as index.html
- [ ] Favicon (32×32, extract brick mark from logo.svg)
- [ ] OG image (1200×630, hero treatment)
