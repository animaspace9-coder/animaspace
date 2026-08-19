import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { homePageQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { Hero } from "@/app/components/sections/Hero";
import { TrustStrip } from "@/app/components/sections/TrustStrip";
import { Services } from "@/app/components/sections/Services";
import { HowItWorks } from "@/app/components/sections/HowItWorks";
import { ApproachBlock } from "@/app/components/sections/ApproachBlock";
import { Team } from "@/app/components/sections/Team";
import { Testimonials } from "@/app/components/sections/Testimonials";
import { FAQ } from "@/app/components/sections/FAQ";
import {
  heroContent,
  trustStats,
  services,
  ageGroups,
  approachBlock,
  team,
  testimonials,
  faqs,
} from "@/app/data/content";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client
    .fetch(siteSettingsQuery, {}, { next: { revalidate: 60 } })
    .catch(() => null);

  return {
    title: `Anima Space — ${settings?.tagline ?? "Well-being, Psychological Consulting & Counselling Centre"}`,
    description:
      "A safe, confidential, and compassionate space for psychological counselling, coaching, career guidance, and training for children, adolescents, and adults.",
  };
}

export default async function Home() {
  // Fetch from Sanity; fall back to static content.ts if unavailable
  const cms = await client
    .fetch(homePageQuery, {}, { next: { revalidate: 60 } })
    .catch(() => null);

  // Merge CMS data with fallbacks
  const heroData = {
    headline: cms?.heroHeadline ?? heroContent.headline,
    subHeadline: cms?.heroSubHeadline ?? heroContent.subHeadline,
    badgeText: cms?.heroBadgeText ?? heroContent.badgeText,
    ctaText: cms?.heroCtaText ?? heroContent.ctaText,
    heroCardItems: cms?.heroCardItems ?? heroContent.heroCardItems,
  };

  const statsData = cms?.trustStats ?? trustStats;

  const offeringsData = cms?.offerings
    ? cms.offerings.map((o: { title: string; description: string; icon: string; slug: string; colorKey: string; bulletPoints: string[] }) => ({
        id: o.slug,
        title: o.title,
        description: o.description,
        icon: o.icon,
        href: `/services/${o.slug}`,
        colorKey: o.colorKey,
        bulletPoints: o.bulletPoints ?? [],
        // map colorKey to Tailwind class
        colorClass: colorKeyToClass(o.colorKey),
      }))
    : services;

  const approachData = {
    headline: cms?.approachHeadline ?? approachBlock.headline,
    description: cms?.approachDescription ?? approachBlock.description,
  };

  const teamData = cms?.teamMember
    ? {
        name: cms.teamMember.name,
        role: cms.teamMember.role,
        bio: cms.teamMember.bio,
        experience: cms.teamMember.experience,
        image: cms.teamMember.imageUrl ?? team[0].image,
        qualifications: cms.teamMember.qualifications ?? [],
        specialties: cms.teamMember.specialties ?? [],
      }
    : team[0];

  const testimonialsData = cms?.testimonials ?? testimonials;
  const faqsData = cms?.faqs ?? faqs;

  return (
    <>
      <Hero data={heroData} />
      <TrustStrip stats={statsData} />
      <Services services={offeringsData} />
      <HowItWorks />
      <ApproachBlock headline={approachData.headline} description={approachData.description} />
      <Team member={teamData} />
      <Testimonials testimonials={testimonialsData} />
      <FAQ faqs={faqsData} />
    </>
  );
}

function colorKeyToClass(key: string): string {
  const map: Record<string, string> = {
    sky: "bg-[var(--color-brand-sky)]",
    pink: "bg-[var(--color-brand-pink)]",
    rose: "bg-[var(--color-brand-rose)]",
    mauve: "bg-[var(--color-brand-mauve)]/20",
    olive: "bg-[var(--color-brand-sky)]/30",
  };
  return map[key] ?? "bg-[var(--color-brand-sky)]";
}
