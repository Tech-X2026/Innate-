# The Innate Bliss — React Landing Page

React + Vite rebuild of the black-and-gold landing page, with **simple animations only**.

## Run it
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Simple animations used (no heavy libraries)
- **Scroll reveal** — sections fade + slide up gently via IntersectionObserver (`src/hooks/useReveal.js` + `Reveal.jsx`)
- **Hero entrance** — staggered fade-up on load
- **Gold button shimmer** — subtle light sweep on hover only
- **Play button pulse** — soft ring pulse on the VSL thumbnail
- **Seats bar** — fills to 74% when scrolled into view
- **Testimonial carousel** — smooth slide transform, auto-play every 6s, swipe + dots + arrows
- **Video modal & page switch** — fade/scale in when opening booking page or video
- Respects `prefers-reduced-motion` for accessibility

## Structure (per Landing Page Structure_v1.pdf)
```
src/
  data/content.js        ← all copy + 5 unique testimonials (no repeats)
  hooks/useReveal.js     ← scroll animation hook
  components/
    Header.jsx           ← PAYAL GULATI masthead
    Hero.jsx             ← Hook + guarantee pill + CTA
    VideoCard.jsx        ← VSL cream card + YouTube modal
    RealReason.jsx       ← Real reason vs This is for you
    HowToStart.jsx       ← 5 steps + 99 seats bar
    Testimonials.jsx     ← Carousel (Aarin, Neelakantappa, Vikram, Radhika, Sanjeev)
    Coach.jsx            ← Meet Payal Gulati + photo + stats
    FinalCta.jsx         ← Final CTA + disclaimer
    FloatingCta.jsx      ← Sticky bottom CTA @ ₹299
    BookingPage.jsx      ← Page 2: 4 bullets + ₹299 + Next → Razorpay
  App.jsx                ← landing ⇄ booking state switch
  index.css              ← theme + animations
public/images/           ← coach photo, hero thumb, logo
```

## Before going live
1. **Razorpay:** Edit `RAZORPAY_LINK` in `src/data/content.js` with your Razorpay Payment Link.
2. **Video:** Edit `YOUTUBE_EMBED` in `src/data/content.js` if you have a new VSL (currently official `lfiGHm5Hgm8`).

Old single-file HTML version is still in `../innate-bliss-landing/index.html` if you need it.
