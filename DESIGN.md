# DESIGN.md — Anima Space

## Style DNA
- Structure / energy / hero confidence / pastel cards / FAQ accordion: **JEEplanner** reference
- Big wordmark + illustrated crowd footer: **SayBriefly** reference
- Illustration system: **DrawKit line-art** style — thick black outline, flat/gradient fills — recolored to palette below (never use their original orange/teal/black)
- Age-group banded section: **Persona Detstvo** idea — reinterpreted in our palette, not their literal colors

## Tone
70% parent-trust (professional, credible, calm) / 30% kid-friendly warmth. Parents are the ones booking — never tip fully into "cute/childish."

## Palette (locked — do not modify or add colors)
| Name | Hex | Use |
|---|---|---|
| Off-White | #F6F4EB | Primary background |
| Navy Blue | #0A1C33 | Primary text, dark accents |
| Mauve | #A67D76 | Primary brand accent, CTAs |
| Rose Gold Taupe | #BC8E83 | Secondary accent |
| Sky Blue | #C5E0F2 | Pop accent, cards, age-band |
| Soft Pink | #FAD1CB | Pop accent, cards, age-band |
| Charcoal | #2F3E4D | Dark section backgrounds |
| Dark Espresso | #3B2A1E | Body text only, sparing use — never large fills |

## Typography
- Headings: bold, large scale — confident, JEEplanner-level presence. Rounded-sans or bold serif.
- Body: clean sans, generous line-height, high readability.
- No script fonts. No default AI-slop fonts (no Inter-only, no DM Sans as the whole system).
- No childish/comic fonts — undermines parent trust.

## Illustration rules
- Always DrawKit-style line art: thick black outline, flat or soft-gradient fill.
- Recolor every illustration into palette above before use. Never ship raw DrawKit source colors.
- Hero: one calm parent-child or single-child illustration (not action/sport scenes).
- Age bands: one child character illustration per band.
- Footer: illustrated crowd/family strip, diverse, warm — recolored DrawKit people.

## Reference steal-guide — exactly what to take from each site

### JEEplanner (jeeplanner.in)
- Hero headline scale/confidence — large serif-leaning type, short punchy line, subtext below, one pill CTA
- Pastel service cards — soft solid-color card backgrounds (not white cards with shadows), icon + short title + one-liner, rounded corners
- FAQ accordion — simple expand/collapse, black circular +/- icon, thin divider lines between questions
- "Everything you need in one place" block — two-column split card (colored panel left, white/light panel right) — usable pattern for one feature-highlight section
- Do NOT take: full-bleed mountain/parallax hero illustration (explicitly rejected), their orange/purple/blue palette

### SayBriefly
- Big bold wordmark treatment in footer — brand name at massive scale, sits above the link columns
- Illustrated crowd strip at very bottom of footer — diverse line-art people standing together, reinterpret as parents+kids for Anima Space
- Simple top-bar newsletter signup pattern — email field + button, minimal
- Footer link column layout — Product/Industry-style grouping, adapt to Services/Company/Contact
- Do NOT take: their green/yellow palette, hand-drawn squiggle line connecting elements (too playful/unrelated for our tone)

### Persona Detstvo (persona-detstvo.ru)
- Concept only: color-banded sections representing age groups, each band a different flat color with one character illustration standing in it
- Reinterpret bands in Sky Blue / Soft Pink / Mauve-toned — NOT their literal pink/teal/orange
- Do NOT take: 3D toy-rendered character style, their exact layout of overlapping banners

### DrawKit Mental Health & Psychology illustration set
- Line-art construction: thick black outline, flat or soft-gradient fill shapes, slightly wobbly/hand-adjacent linework
- Small floating accent shapes (stars, sparkles, circles) scattered around main illustration — use sparingly, 2-3 per scene max
- Recolor every fill to palette (see Palette table) — never ship their orange/black/teal as-is
- Use calm/supportive scenes (comfort, listening, family support) — avoid the more distressing ones (crowd yelling, person under storm cloud, cluttered mind) for hero/marketing sections; those are fine ONLY if illustrating a "before" state inside a specific problem/solution narrative block, never standalone

### CTA.gallery reference (mid-page CTA block)
- Solid single-color background block, one centered illustration, bold short headline, small pill CTA below
- Keep extremely minimal — no secondary text, no extra clutter
- Use Mauve or Sky Blue as the block color instead of their blue

## Overall appearance guide
- Whitespace: generous throughout — this is a calm, safe-space brand, not a dense SaaS product. When unsure, add more space.
- Corners: consistently rounded (cards, buttons, images) — soft geometry reinforces "safe/gentle," never sharp/angular
- Shadows: minimal to none — rely on flat color blocks and illustration for depth, not drop-shadows
- Buttons: pill-shaped, solid fill (Mauve primary, outline/ghost secondary)
- Section rhythm: alternate Off-White sections with one colored/dark section every 2-3 sections — prevents monotony, matches JEEplanner's pacing (light → colored block → light → colored block)
- Imagery: 100% illustration-based for this demo phase — no stock photography, no real photos (none available yet anyway)
- Motion: subtle only — fade/slide-up on scroll entry, no aggressive zoom or spin. GSAP ScrollTrigger for section reveals, nothing constant/looping that could feel chaotic in a mental-health context

## Page section reference map
1. Navbar — logo placeholder, links, pill CTA button (Mauve fill)
2. Hero — centered/smaller illustration (not full-bleed), headline + subtext + CTA
3. Trust strip — small stat/credential row
4. Age-group bands — 3 color-banded sections (Sky Blue / Soft Pink / Mauve-toned)
5. Services — pastel cards (Soft Pink / Sky Blue / Rose Gold Taupe), JEEplanner card style
6. Approach/trust block — full-bleed Charcoal or Navy section, light text, one illustration
7. Team — grid, photo/illustration + name + specialty tag
8. Testimonials — simple quote cards on Off-White
9. FAQ — accordion, JEEplanner style
10. CTA block (optional, before footer) — solid color bg (Mauve or Sky Blue), one centered illustration, bold headline, pill CTA
11. Footer — SayBriefly-style big "Anima Space" wordmark + illustrated crowd strip + link columns

## Explicitly rejected
- Full-bleed hero illustration with mountains/parallax scene (tried, rejected)
- Literal Persona Detstvo colors (orange/teal/navy 3D toy style)
- Raw DrawKit black/orange/teal palette unchanged
