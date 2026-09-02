# Antigravity Brief — Anima Space Final Content Placement and Contact Visibility Upgrade

## How to use this brief

Paste the full prompt below into Antigravity. It is written as an implementation brief, not as a request to redesign the website. The goal is to preserve the current site and make the client’s five requested edits/additions accurately and visibly.

---

## MASTER PROMPT FOR ANTIGRAVITY

You are updating the existing Anima Space website. Work from the current implementation and current visual style. **Do not redesign the site from scratch, do not roll back existing work, and do not replace the current aesthetic.** This is a final-stage content placement and conversion-visibility upgrade.

### 1. Current site context

The current site is the Anima Space website at `http://localhost:3000` during development and `https://animaspace.vercel.app` in deployment.

The existing visual language is calm, warm, soft, spacious, compassionate, and premium. It uses a light cream background, dark navy typography, muted rose/dusty pink accents, rounded shapes, soft borders, restrained shadows, a circular logo, a compact menu control, a service search field, and illustrated/organic visual elements.

Preserve:

- Existing layout system and page structure.
- Existing logo, typography direction, color palette, spacing rhythm, illustrations, rounded geometry, and calm emotional tone.
- Existing animations and interactions unless they conflict with accessibility or the changes below.
- Existing routes and working links.
- Existing content unless a specific edit below requires moving, renaming, or adding content.

Do not introduce a loud corporate style, aggressive sales language, neon colors, excessive gradients, intrusive pop-ups, or a generic template look.

### 2. The five client edits/additions

Implement the following five items in order. Treat the client’s wording as the source of truth.

#### Edit 1 — Make contact actions much more prominent

The three primary contact actions must be immediately obvious:

1. **Book a Consultation**
2. **WhatsApp Us**
3. **Call Us**

The visitor must not have to scroll to the footer or search around to find the contact door.

The current site already has:

- `Book a Consultation` linking to `/book`.
- A WhatsApp action linking to the existing WhatsApp destination.
- The phone number in the footer: `+91 98664 10936`, with a `tel:+919866410936` link.
- A floating WhatsApp control.

Improve the presentation without removing the existing working destinations.

##### Recommended contact implementation

On desktop:

- Add a compact, elegant contact-action group in the header or immediately adjacent to the hero actions.
- Keep **Book a Consultation** as the visually dominant filled/primary action.
- Present **WhatsApp Us** and **Call Us** as equally obvious secondary actions using clear labels and familiar icons.
- Make the actions readable as text, not icon-only controls.
- If the header cannot comfortably hold all three actions, place the full three-action group directly under the hero description and keep a compact “Contact”/action entry in the header that opens or scrolls to the same group.
- Consider a restrained sticky contact bar on desktop only if it fits the current visual system. It must remain subtle and not cover content.

On mobile:

- Create a fixed bottom contact bar or bottom action dock with exactly these three routes: **Book**, **WhatsApp**, and **Call**. The full labels may be shortened only where necessary for fit, but the accessible labels must remain “Book a Consultation”, “WhatsApp Us”, and “Call Us”.
- Respect safe-area insets and do not cover important content or form controls.
- Keep the existing floating WhatsApp button only if it does not duplicate or visually compete with the mobile action bar. Prefer one coherent mobile contact system rather than two competing WhatsApp controls.
- Ensure each mobile action has a minimum touch target of approximately 44–48px.

Contact behavior:

- `Book a Consultation` must route to `/book`.
- `WhatsApp Us` must retain the current WhatsApp link and prefilled message unless the current implementation has a clear configuration constant for it.
- `Call Us` must use `tel:+919866410936`.
- Do not replace the phone number with placeholder text.
- Make all three actions keyboard accessible and visibly focusable.
- Add appropriate accessible names and `aria-label` values where icons are used.
- Use `rel`/target behavior appropriately for external WhatsApp navigation.

Contact hierarchy:

- Primary: Book a Consultation.
- High-intent alternatives: WhatsApp Us and Call Us.
- Do not make “Meet Prashanthi Simon” visually compete with the contact actions; it remains a supporting discovery action.
- Repeat the three options at a natural lower-page conversion point near the existing “A Space to Understand. A Space to Grow.” section, without making the page feel repetitive.

Visual direction for the contact upgrade:

- Use the existing cream/navy/rose palette.
- Use contrast and spacing to improve findability, not loud colors.
- Keep buttons rounded and calm, consistent with the existing components.
- The WhatsApp treatment may use a restrained green accent only if it feels consistent; do not turn the whole interface green.
- The Call Us treatment should use a phone icon plus text, not a hidden phone number alone.
- Avoid excessive pill buttons everywhere; preserve hierarchy by making the primary action the strongest.

#### Edit 2 — Add a proper FAQ section

Add a polished section titled:

**Frequently Asked Questions**

Place it in the second half of the home page, preferably after the services/areas-of-focus content and before the final growth/contact conversion section. It should be easy to find but should not interrupt the hero or founder introduction.

Use an accessible accordion/disclosure pattern:

- Each question is a button or disclosure control.
- Only the answer panel expands/collapses.
- Use clear open/closed states and a calm animation.
- Support keyboard navigation and screen readers.
- Do not use a wall of permanently expanded text on mobile.
- The first item may be open by default only if it looks balanced; otherwise keep all items closed.
- Add structured FAQPage JSON-LD only if the project already has an appropriate SEO metadata pattern and the implementation can be kept accurate.

Use this exact client-provided copy. Correct only punctuation, spacing, and typographic consistency; do not change the meaning.

### Frequently Asked Questions

**Who can seek counselling?**

Counselling is for children, adolescents, adults, parents, and anyone seeking support with emotional, personal, or psychological concerns.

**Do I need a diagnosis to seek counselling?**

No. You do not need a diagnosis to seek counselling. You can reach out whenever you feel you need support, clarity, or guidance.

**Are sessions confidential?**

Yes. Sessions are private and confidential, subject to applicable professional and legal limits.

**How long is a session?**

A typical counselling session lasts around 45–60 minutes.

**Are sessions online or in person?**

Sessions may be available online or in person, depending on your needs and availability.

**How do I book a session?**

You can book a session by contacting us through the website, phone, or email. We will guide you through the next steps.

**Can parents seek support regarding their child?**

Yes. Parents can seek guidance regarding their child’s emotional, behavioural, academic, or developmental concerns.

**What happens during the first session?**

The first session focuses on understanding your concerns, background, and goals. It is a safe space to talk openly and decide what kind of support may be helpful.

At the end of the FAQ section, add a quiet supporting prompt such as **“Still have questions?”** followed by the same three contact actions. Do not invent claims about response times or availability.

#### Edit 3 — Add “What We Can Help With” near the founder content

The current home page already contains a “What We Can Help With” section and a “Meet Prashanthi Simon” founder section. Review the current implementation and place the client-provided “What We Can Help With” content near the founder section or in the most logical location on the same page.

Important: the exact additional copy for this edit is referenced by the client but is not present in the supplied instruction note. **Do not invent replacement copy.** If the content is already present elsewhere in the current codebase, reuse it and place it appropriately. If it is not present, leave a clearly marked content/config placeholder and report exactly which copy is needed from the client.

Do not duplicate the same long section unnecessarily. Reuse the existing “What We Can Help With” content if it already satisfies the client’s copy.

#### Edit 4 — Add “How We Can Support You” on the appropriate page

Add the client-provided “How We Can Support You” content to the most appropriate page, likely the About page or another page that explains Anima Space’s approach and support model.

Important: the exact copy for this edit is not included in the supplied instruction note. **Do not write generic filler content and do not fabricate client-approved copy.** Search the existing project content first. If the copy is missing, create a clearly marked content slot and report that the client’s approved text is required before final content completion.

Keep the section’s styling consistent with the existing site. This is content placement, not an invitation to create a new visual language.

#### Edit 5 — Rename the service currently called “Healing”

The current service list includes a service called **Healing**, including the route `/services/healing`.

The client says this service must be renamed and that new content has been provided elsewhere. Apply the client’s exact replacement name and content only if it exists in the project files or in the supplied content source.

Important:

- Do not guess the new service name.
- Do not invent replacement service copy.
- Update the service card, service listing, navigation/search labels, route references, metadata, and internal links consistently if the approved replacement is available.
- Preserve a redirect or compatibility route from `/services/healing` if the route is changed, so existing links do not break.
- If the new name/content is not available, leave the existing service intact, mark the missing input clearly, and report it rather than making an assumption.

### 3. Content handling rules

The client explained that these are major additions after earlier drafts, while the current site is already the approved visual/content foundation. Respect that process.

- Do not replace approved content with generic content.
- Do not “improve” the client’s copy by changing its meaning.
- Do not remove sections simply because the new sections are being added.
- Do not create duplicate versions of the same content.
- Keep content placement intentional and explainable.
- Treat missing copy for edits 3–5 as an input gap, not permission to invent text.

### 4. QA and acceptance criteria

Before considering the work complete, verify:

- All three contact actions are visible without requiring a user to find the footer.
- `Book a Consultation` routes to `/book`.
- `WhatsApp Us` opens the existing WhatsApp destination.
- `Call Us` opens `tel:+919866410936` on supported devices.
- The contact system works at desktop, tablet, and mobile widths.
- The mobile action bar does not obscure content and respects safe-area padding.
- No duplicate or competing WhatsApp controls remain.
- The FAQ appears in the second half of the home page.
- All eight FAQ questions and answers are present exactly as provided, with only minor punctuation/typography normalization.
- The FAQ accordion is keyboard and screen-reader accessible.
- Existing animations, typography, colors, illustrations, routes, and overall aesthetic remain coherent.
- No horizontal overflow, broken links, layout shifts, or console errors are introduced.
- Existing service and navigation search still work.
- Any missing client copy for edits 3–5 is reported explicitly rather than fabricated.
- Test the page at minimum at approximately 1440px desktop, 1024px tablet, and 375px mobile widths.

### 5. Final response required from Antigravity

After implementation, report:

1. Files/components changed.
2. Exact placement chosen for the three contact actions and why.
3. FAQ location and interaction behavior.
4. Whether approved copy for edits 3–5 was found and used.
5. Any content still required from the client.
6. Responsive and accessibility checks performed.
7. Any route redirects or compatibility handling added.

Do not claim all five edits are complete if the approved text for edits 3–5 was not available.

---

## Why this structure is appropriate

The current localhost page already has the visual foundation and a visible `Book a Consultation` action, plus a floating WhatsApp button. The phone link exists only in the footer, so the most important functional gap is the missing primary **Call Us** route and the lack of a unified three-action hierarchy.

The contact recommendation follows established CTA patterns: put important actions above the fold, keep navigation actions persistently available where appropriate, use specific action labels, repeat the route at natural conversion points, and create contrast without breaking the brand. References: [Figma CTA guidance](https://www.figma.com/resource-library/call-to-action-examples/) and [Webflow CTA examples](https://webflow.com/blog/cta-examples).

The FAQ belongs in the latter half of the home page because it answers common objections after visitors have learned what Anima Space offers, while the final contact block gives them an immediate next step. The FAQ should remain supportive and informative rather than sounding like a sales popup.

## Important missing-input note

The supplied client note includes the full FAQ copy and the contact request, but it only refers to the copy for:

- “What We Can Help With” placement near the founder section.
- “How We Can Support You.”
- The replacement name/content for “Healing.”

Those exact texts are not present in the supplied attachment. Antigravity should search the project files first, but it should not invent them. If they are absent, the correct next step is to request those three approved content blocks from the client after completing the contact and FAQ work.
