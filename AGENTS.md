# AGENTS.md — Anima Space

## Project
Frontend-only demo for Anima Space, a child psychology center (client: Prashanthi Simon).
Goal: client-facing preview to approve direction. No backend/CMS yet — placeholder content only, structured so it can be swapped for Sanity data later without restructuring components.

## Stack
- Next.js (App Router)
- Tailwind CSS
- GSAP + ScrollTrigger for scroll-driven animation
- Deploy target: Vercel

## Non-negotiable rules
- Mobile-first. Build and check every section at 390px width before desktop.
- Every section must be fast — no unoptimized images, no blocking scripts, no heavy libraries beyond GSAP.
- Placeholder content must be clearly structured as data (constants/JSON), not hardcoded inline strings, so Sanity swap later is a data-source change only.
- Always check DESIGN.md before writing any color, font, or spacing value. Never invent new colors/fonts outside DESIGN.md.
- Before starting a new section, read PROGRESS.md to know current state. Update PROGRESS.md after finishing a section — one line, what's done.
- No booking backend — CTA buttons are dummy/non-functional links for this phase.

## Skill routing
- Base taste / UI polish: **impeccable**
- Animation logic / motion decisions: **emil-design-eng**
- Scroll-driven animation, timelines, ScrollTrigger: **gsap-skills** (gsap-core, gsap-frameworks, gsap-performance, gsap-plugins)
- State which skill you're using before any UI or animation task.
- Do NOT use: minimalist-ui, industrial-brutalism, apple-design, stitch-design-taste, brandkit — these conflict with the locked style in DESIGN.md.

## Folder structure
```
/app
  /components
    /sections      → one file per homepage section (Hero.tsx, TrustStrip.tsx, etc.)
    /ui             → reusable small pieces (Button.tsx, Card.tsx)
  /data             → placeholder content as typed constants (services.ts, team.ts, testimonials.ts)
  /lib              → gsap setup, helpers
```

## Build order
1. Hero
2. Trust strip
3. Age-group band section
4. Services cards
5. Approach / trust block (dark section)
6. Team
7. Testimonials
8. FAQ
9. Footer

Build and get one section approved before starting the next. Don't build ahead of approval.

## Definition of done (per section)
- Matches DESIGN.md palette and type exactly
- Works at 390px and 1440px
- No console errors/warnings
- Animation respects `prefers-reduced-motion`

## Testing rule (per section, not just at the end)
After building each section:
1. Take Playwright screenshots at 390px and 1440px widths
2. Compare against DESIGN.md reference notes for that section
3. Run Lighthouse on the page — report performance/accessibility scores
4. Confirm no console errors before reporting the section as done
Do not move to the next section until this passes.
