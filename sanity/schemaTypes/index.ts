import { type SchemaTypeDefinition } from 'sanity'

// Shared object types
import statItem from './objects/statItem'
import serviceCard from './objects/serviceCard'
import teamMember from './objects/teamMember'
import seo from './objects/seo'

// Section objects (legacy — kept for backwards compat with old page builder docs)
import heroSection from './objects/sections/heroSection'
import aboutSection from './objects/sections/aboutSection'
import offeringsSection from './objects/sections/offeringsSection'
import ageGroupsSection from './objects/sections/ageGroupsSection'
import teamSection from './objects/sections/teamSection'
import faqSection from './objects/sections/faqSection'
import contactSection from './objects/sections/contactSection'

// Page documents (new — one per page of the website)
import siteSettings from './documents/siteSettings'
import homePage from './documents/homePage'
import aboutPage from './documents/aboutPage'
import servicesPage from './documents/servicesPage'
import servicePage from './documents/servicePage'
import bookPage from './documents/bookPage'
import contactPage from './documents/contactPage'

// Legacy generic page document
import page from './documents/page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // ── Shared objects ─────────────────────────────────────────────────────
    statItem,
    serviceCard,
    teamMember,
    seo,

    // ── Page documents (primary — shown in Studio nav) ─────────────────────
    siteSettings,
    homePage,
    aboutPage,
    servicesPage,
    servicePage,
    bookPage,
    contactPage,

    // ── Legacy (keep registered, but no active documents) ──────────────────
    page,
    heroSection,
    aboutSection,
    offeringsSection,
    ageGroupsSection,
    teamSection,
    faqSection,
    contactSection,
  ],
}
