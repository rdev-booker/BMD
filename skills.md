# BMD Transportation — Technical Skills & Standards

## Stack & Tools
| Layer | Technology | Notes |
|---|---|---|
| Markup | Semantic HTML5 | `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` mandatory |
| Styling | Tailwind CSS v3 (CDN) | Inline utility classes; custom config via `tailwind.config` script block |
| Typography | Google Fonts CDN | Barlow Condensed + Barlow + Inter |
| Scripting | Vanilla JS | Mobile menu toggle + scroll events only |
| Images | CSS gradients / Unsplash | Fallback background-color always required |
| Icons | Inline SVG | Heroicons v2 stroke style, `stroke-width: 1.6`, 22×22px |

## Tailwind Configuration (use this in every file)
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        bmd: {
          red:      '#CC0000',
          'red-d':  '#A30000',
          black:    '#0A0A0A',
          charcoal: '#171717',
          slate:    '#262626',
          mid:      '#404040',
          gray:     '#737373',
          silver:   '#A3A3A3',
          light:    '#F5F5F5',
          mist:     '#EBEBEB',
        }
      },
      fontFamily: {
        condensed: ['"Barlow Condensed"', 'Impact', 'sans-serif'],
        barlow:    ['Barlow', 'sans-serif'],
        inter:     ['Inter', 'sans-serif'],
      },
    }
  }
}
```

## Typography Scale
| Element | Font | Size (clamp) | Weight | Letter-spacing |
|---|---|---|---|---|
| H1 | Barlow Condensed | clamp(3rem, 8.5vw, 6.25rem) | 900 | -0.01em |
| H2 | Barlow Condensed | clamp(2.2rem, 5vw, 4rem) | 900 | -0.01em |
| H3 (card) | Barlow Condensed | 1.25rem / xl | 700 | normal |
| Eyebrow | Barlow | 11px | 600 | 0.18em-0.22em |
| Body | Inter | 15px / base | 300-400 | normal |
| Label/badge | Barlow | 11px | 500 | 0.10em-0.14em |
| Button | Barlow | 11px | 600-700 | 0.14em-0.16em |

## Button Patterns
```html
<!-- Primary (red CTA) -->
<a class="btn-red text-white font-barlow font-semibold text-[11px] tracking-[0.14em] uppercase px-6 py-3">

<!-- Ghost (hero secondary) -->
<a class="btn-ghost text-white font-barlow font-semibold text-[11px] tracking-[0.16em] uppercase px-8 py-4">

<!-- Outline (light sections) -->
<a class="btn-outline text-bmd-black font-barlow font-semibold text-[11px] tracking-[0.14em] uppercase px-6 py-3">
```

## CSS Custom Classes (always include in `<style>`)
```css
/* Font smoothing */
* { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

/* Section accent rule (48×3px red bar above section headings) */
.s-rule { display:block; width:44px; height:3px; background:#CC0000; margin-bottom:18px; }

/* Button states */
.btn-red { background-color:#CC0000; transition:background-color .18s ease, transform .1s ease; }
.btn-red:hover { background-color:#A30000; transform:translateY(-1px); }
.btn-ghost { border:2px solid rgba(255,255,255,.32); transition:border-color .18s, background-color .18s; }
.btn-ghost:hover { border-color:rgba(255,255,255,.82); background-color:rgba(255,255,255,.06); }

/* Service card hover */
.svc-card { transition:transform .24s ease, box-shadow .24s ease; }
.svc-card:hover { transform:translateY(-5px); box-shadow:0 20px 40px rgba(0,0,0,.2); }
.svc-top { transition:width .3s ease; }
.svc-card:hover .svc-top { width:100%; }

/* Mobile nav slide animation */
#mob-nav { max-height:0; overflow:hidden; transition:max-height .32s ease; }
#mob-nav.open { max-height:380px; }
```

## Section Color Alternation Pattern
```
1. Hero           → bg dark (#171717 + image overlay)
2. Proof bar      → bg bmd-charcoal (#171717)
3. Services       → bg bmd-light (#F5F5F5) + dark cards (#171717)
4. Why BMD        → bg white
5. Industries     → bg mist (#F0F0F0) + white cards
6. CTA            → bg bmd-black (#0A0A0A) + dot pattern
7. Footer         → bg bmd-charcoal (#171717)
```

## Icon Sizing Standard
- Container: `w-11 h-11` with `bg-bmd-red/10`
- SVG: `w-5 h-5 text-bmd-red`, `stroke-width="1.6"`, `fill="none"`
- Always add `aria-hidden="true"` to decorative SVGs

## Service Card HTML Pattern
```html
<article class="svc-card bg-bmd-charcoal overflow-hidden flex flex-col" role="listitem">
  <!-- Red hover bar -->
  <div class="relative h-[3px] bg-bmd-slate flex-shrink-0" aria-hidden="true">
    <div class="svc-top absolute inset-y-0 left-0 w-0 bg-bmd-red"></div>
  </div>
  <div class="p-7 lg:p-8 flex flex-col flex-1">
    <!-- Icon -->
    <div class="w-11 h-11 bg-bmd-red/10 flex items-center justify-center mb-6" aria-hidden="true">
      <svg class="w-5 h-5 text-bmd-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.6">...</svg>
    </div>
    <h3 class="font-condensed font-bold text-white text-xl tracking-wide uppercase mb-3">Service Name</h3>
    <p class="font-inter text-bmd-silver text-[13px] leading-relaxed flex-1 mb-6">Description...</p>
    <a href="#contact" class="arrow-cta inline-flex items-center gap-2 font-barlow font-semibold text-bmd-red text-[11px] tracking-[0.15em] uppercase">
      Get a Quote
      <svg class="w-3.5 h-3.5 flex-shrink-0" ...arrow icon... />
    </a>
  </div>
</article>
```

## Advantage/Bullet Pattern (Why BMD section)
```html
<div class="flex items-start gap-5 py-5">
  <div class="w-[3px] self-stretch bg-bmd-red flex-shrink-0" aria-hidden="true"></div>
  <div>
    <h3 class="font-condensed font-bold text-bmd-black text-[1.1rem] tracking-wide uppercase mb-1">Title</h3>
    <p class="font-inter text-bmd-gray text-[13px] leading-relaxed">Description</p>
  </div>
</div>
```

## Mobile Menu JS Pattern
```javascript
const mobBtn   = document.getElementById('mob-btn');
const mobNav   = document.getElementById('mob-nav');
const icoOpen  = document.getElementById('ico-open');
const icoClose = document.getElementById('ico-close');

mobBtn.addEventListener('click', function () {
  const open = mobNav.classList.toggle('open');
  icoOpen.classList.toggle('hidden', open);
  icoClose.classList.toggle('hidden', !open);
  mobBtn.setAttribute('aria-expanded', String(open));
});
mobNav.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () {
    mobNav.classList.remove('open');
    icoOpen.classList.remove('hidden');
    icoClose.classList.add('hidden');
    mobBtn.setAttribute('aria-expanded', 'false');
  });
});
```

## Accessibility Requirements
- All `<img>` tags need descriptive `alt` attributes
- All decorative SVGs: `aria-hidden="true"`
- Navigation: `aria-label="Primary navigation"` on `<nav>`
- Interactive buttons: `aria-label` if text alone is unclear
- Mobile toggle: `aria-expanded` updated via JS
- Section headings: each `<section>` has `aria-labelledby` pointing to its H2

## File Output Format
- **Single-file HTML** unless explicitly asked to componentize
- Self-contained: no external CSS files, no bundler
- Tailwind CDN: `https://cdn.tailwindcss.com`
- Google Fonts loaded via `<link>` in `<head>` with `rel="preconnect"` hints
- All custom CSS in a `<style>` block in `<head>`
- All JS in a `<script>` block before `</body>`
