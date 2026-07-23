# Anima Space Design Specification: Adopting the "Little Care" Vibe

**Author:** Manus AI
**Date:** July 23, 2026

This document provides a comprehensive, section-by-section design specification to elevate the Anima Space website. The goal is to translate the warm, empathetic, and highly structured user experience of **Little Care** into the existing warm, earthy color palette of Anima Space (cream, olive, brown/mauve).

The instructions are detailed and unambiguous, covering hierarchy, spacing, alignment, mood, elevation, effects, scroll effects, buttons, navigations, and copy text.

---

## 1. Core Design System & Tokens

Before touching individual sections, the foundational design system must be updated to match Little Care's structural elegance while retaining Anima Space's earthy palette.

### Color Palette (Mapping Little Care's Vibe to Anima Space's Colors)
- **Background (Canvas):** `#FAF8F5` (Warm Cream/Off-White) — Replaces Little Care's stark white with Anima Space's warmer, more organic canvas.
- **Primary Accent (CTAs & Highlights):** `#8B6F5E` (Warm Mauve/Brown) — Used for primary buttons and key highlights.
- **Secondary Accent (Icons & Badges):** `#2D3B2D` (Dark Olive/Forest Green) — Used for trust badges, secondary text, and icons.
- **Primary Text (Headings):** `#1A2332` (Dark Charcoal/Navy) — Almost black, but softer and warmer.
- **Body Text:** `#4A5568` (Medium-Gray/Brown) — High readability, softer than pure black.
- **Muted Text (Subtitles/Labels):** `#9B9B9B` (Light Gray) — For dates, authors, and secondary links.
- **Card Backgrounds:** `#FFFFFF` (Pure White) with a soft drop shadow.

### Typography & Hierarchy
- **Headlines (H1):** 48px to 60px. Weight: Bold (700). Letter-spacing: `-0.02em`. Line-height: `1.1`. Color: `#1A2332`.
- **Sub-headlines (H2):** 32px to 40px. Weight: Semi-Bold (600). Line-height: `1.2`.
- **Body Text (P):** 16px to 18px. Weight: Regular (400). Line-height: `1.6`. Color: `#4A5568`.
- **Small Labels (Overlines):** 12px to 14px. Weight: Medium (500). Uppercase. Color: `#9B9B9B`.

### Spacing & Elevation
- **Section Padding:** Massive vertical spacing between major sections (`padding: 100px 0;`). Little Care uses generous whitespace to reduce cognitive load for anxious parents.
- **Card Padding:** Inner padding of `32px` to `48px`.
- **Elevation (Shadows):** Soft, diffuse shadows for cards. `box-shadow: 0 10px 40px rgba(45, 59, 45, 0.05);`. Avoid harsh, dark drop shadows.

---

## 2. Global Navigation Bar

**Current State:** Dark olive background with pill-shaped buttons. Feels heavy and dated.
**Target State:** Clean, transparent, floating, and minimal.

### Specifications
- **Background:** Transparent (or pure white with a subtle blur backdrop-filter on scroll).
- **Layout:** Flexbox. Logo left, Navigation center, Action buttons right.
- **Typography:** Text-only navigation items. No pill backgrounds.
- **Hover Effect:** A subtle underline animation or a soft color change to `#8B6F5E`.
- **Action Buttons:**
  - "Login" (if applicable): Text only, muted color.
  - "Book Now": Primary button style. Background `#8B6F5E`, text white, rounded corners (`border-radius: 8px`), padding `12px 24px`.
- **Mobile Menu:** Hamburger icon on the right. Full-screen overlay menu with large, readable text.

---

## 3. Hero Section

**Current State:** Left-aligned text, illustration placeholder on the right. Lacks emotional connection.
**Target State:** Two-column layout with a real photograph and a floating trust card overlay.

### Specifications
- **Layout:** CSS Grid or Flexbox. 55% width for text (left), 45% width for image (right).
- **Trust Badge (Top Left):** A small, pill-shaped badge above the headline. Background: `#FFFFFF`, border: `1px solid #E5E7EB`. Text: `#2D3B2D`. Icon: Small lock or checkmark. Text: "Convenient, proven care for brighter future".
- **Headline (H1):** "Your Partner in Child Counseling & Parenting Support". Left-aligned, massive typography.
- **Subtext (P):** 18px, comfortable line-height. "Connect with a trusted child psychologist online for gentle, child-friendly counselling from the comfort of your home..."
- **Call-to-Action (CTA) Area:**
  - Primary Button: "Get Started" (Background `#8B6F5E`, White text, `border-radius: 12px`).
  - Secondary Link: "How does it work?" with a subtle down-arrow icon. Text `#2D3B2D`, underline on hover.
- **Right Column (Image):**
  - A real photograph of Prashanthi Simon interacting warmly with a child (or a high-quality stock photo if real is unavailable).
  - Image must have rounded corners (`border-radius: 24px`).
- **Floating Overlay Card:**
  - Positioned absolute, overlapping the bottom-left of the main image.
  - Background: `#FFFFFF`.
  - Shadow: `0 20px 40px rgba(0,0,0,0.1)`.
  - Content: "We take care of" (Bold, small), followed by a list with green checkmarks: "Big Emotions", "Knowing Your Child", "Being a Better Parent".
  - Bottom of card: A row of small circular avatars (therapist photos) with a "+" sign at the end.

---

## 4. Service Selection Section (The "Let's Get Started" Cards)

**Current State:** Four standard cards with icons.
**Target State:** Three large, horizontal, clickable cards stacked vertically.

### Specifications
- **Section Title:** "Let's get started — choose". Center-aligned, H2 typography.
- **Layout:** Flexbox, `flex-direction: column`, `gap: 24px`. Max-width `800px`, centered.
- **Card Design:**
  - Background: `#FFFFFF`.
  - Border: `1px solid #E5E7EB`.
  - Border-radius: `16px`.
  - Padding: `32px`.
  - Layout: Flexbox, space-between (Text left, Arrow right).
  - Hover Effect: Border color changes to `#8B6F5E`, subtle upward translation (`transform: translateY(-4px)`).
- **Card Content:**
  - Overline (Small, muted): "Emotions", "Tests", "Workshops".
  - Title (Bold, H3 size): "Child Counseling", "Child Assessment", "Better Parenting".
  - Description (Regular, 16px): "A safe space for your kids to express & grow."
  - Arrow: A subtle right-pointing arrow (`→`) in `#2D3B2D`.

---

## 5. "How It Works" Section

**Current State:** Three steps with text.
**Target State:** Four numbered steps with icons/illustrations, horizontal flow.

### Specifications
- **Section Title:** "Start Your Child's Therapy Journey Towards a Happier, Calmer Home". Center-aligned, H2.
- **Layout:** CSS Grid, 4 columns (`1fr 1fr 1fr 1fr`). Desktop. Stacks to 1 column on mobile.
- **Step Design:**
  - **Number:** Massive, bold, 64px. Color: `#E5E7EB` (Very light gray) or a faded `#8B6F5E`.
  - **Icon:** A small, rounded square icon box (`48px x 48px`) below the number. Background: `#F3F4F6`.
  - **Title (H4):** Bold, 20px. "Tell Us What's Important".
  - **Description (P):** 16px, muted color.
- **Visual Flow:** A subtle dotted line connecting the four steps horizontally, positioned behind the numbers.

---

## 6. "Our Promise" / Values Section

**Current State:** "A Compassionate Approach" section with an illustration placeholder.
**Target State:** A 2x2 grid of values, clean text, no heavy graphics.

### Specifications
- **Section Title:** "Supporting You and Your Little One With Expert Child Counseling". Center-aligned, H2.
- **Layout:** CSS Grid, 2 columns (`1fr 1fr`), `gap: 48px`.
- **Value Item Design:**
  - **Title (H4):** Bold, 20px. "Care that feels safe".
  - **Description (P):** 16px, comfortable line-height. "Every child deserves a space where their feelings are seen and understood..."
  - **Link:** "Get started" with an arrow. Color: `#8B6F5E`, underlined.
- **Background:** The entire section has a subtle background color of `#FDFBF7` (slightly darker than the main canvas) to create visual separation.

---

## 7. Testimonials Section

**Current State:** A carousel/slider of reviews.
**Target State:** A static grid of quote cards, mixing parent and child voices.

### Specifications
- **Section Title:** "What Families Are Saying About Our Child Counseling Support". Center-aligned, H2.
- **Layout:** CSS Grid, 2 columns (`1fr 1fr`), `gap: 32px`.
- **Quote Card Design:**
  - Background: `#FFFFFF`.
  - Border-radius: `16px`.
  - Padding: `40px`.
  - Shadow: `0 10px 40px rgba(0,0,0,0.03)`.
  - Quote Text: Large, italicized, serif font (e.g., Playfair Display). Color: `#1A2332`.
  - Attribution (Bottom): Flexbox. Small circular avatar (or initials). Bold name. Muted role (e.g., "Father of a 10-year-old").

---

## 8. Global Elements

### WhatsApp Floating Button
- **Position:** Fixed, bottom-right (`bottom: 24px`, `right: 24px`).
- **Size:** `56px x 56px`.
- **Color:** WhatsApp Green (`#25D366`).
- **Shadow:** `0 8px 24px rgba(37, 211, 102, 0.4)`.
- **Icon:** White WhatsApp logo, centered.
- **Z-Index:** `9999` (must sit above everything).

### Footer
- **Background:** `#2D3B2D` (Dark Olive).
- **Text Color:** `#FFFFFF` (White).
- **Layout:** 4 columns.
  1. Logo & Mission statement.
  2. Quick Links (About, Services, Blog).
  3. Legal (Privacy, Terms, Therapy Agreement).
  4. Contact (Address, Phone, Email, Social Icons).
- **Crisis Line:** A prominent, highlighted box at the top of the footer: "In a crisis? Call KIRAN: 1800-599-0019".

---

## 9. Copywriting & Tone Guidelines

The design must be matched by the tone of the text. Little Care excels at this.

- **Never say:** "We provide therapeutic interventions."
- **Always say:** "We create a gentle, non-judgmental environment."
- **Never say:** "Initiate therapeutic consultation."
- **Always say:** "Get Started" or "Book Your Slot Now."
- **Never say:** "Patient intake."
- **Always say:** "Tell Us What's Important."

Keep reading levels at the 5th-to-7th-grade level. Use words like *gentle, safe, grow, understand, partner, journey*.
