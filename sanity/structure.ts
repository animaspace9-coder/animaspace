import type { StructureResolver } from 'sanity/structure'

// Helper to create singleton list items matching our exact document IDs
const singletonListItem = (
  S: Parameters<StructureResolver>[0],
  typeName: string,
  title: string
) =>
  S.listItem()
    .title(title)
    .id(typeName)
    .child(
      S.document()
        .schemaType(typeName)
        .documentId(typeName)
        .title(title)
    )

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Anima Space — Pages & Content')
    .items([
      // ── Global Site Settings ─────────────────────────────────────────────
      singletonListItem(S, 'siteSettings', '⚙️ Global Site Settings'),

      S.divider(),

      // ── Website Pages (Page-by-Page) ─────────────────────────────────────
      singletonListItem(S, 'homePage', '🏠 Home Page (8 Sections)'),
      singletonListItem(S, 'aboutPage', '📖 About Us Page'),
      singletonListItem(S, 'servicesPage', '✨ Services Overview Page'),

      // Service Sub-Pages (Counselling, Coaching, Healing, Career Counselling, Training)
      S.documentTypeListItem('servicePage').title('📂 Service Sub-Pages (5 Services)'),

      // Blogs Section
      singletonListItem(S, 'blogsPage', '📰 Blogs Overview Page'),
      S.documentTypeListItem('blogPost').title('📝 Blog Articles (Write & Publish)'),

      singletonListItem(S, 'bookPage', '📅 Book a Consultation Page'),
      singletonListItem(S, 'contactPage', '📍 Contact & Clinic Page'),

      S.divider(),

      // Form Submissions & Email Collection
      S.documentTypeListItem('subscriber').title('📬 Newsletter Subscribers'),
    ])
