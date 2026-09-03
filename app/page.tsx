import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { homePageQuery, siteSettingsQuery } from "@/sanity/lib/queries";
import { Hero } from "@/app/components/sections/Hero";
import { TrustStrip } from "@/app/components/sections/TrustStrip";
import { Team } from "@/app/components/sections/Team";
import { ApproachBlock } from "@/app/components/sections/ApproachBlock";
import { AgeGroups } from "@/app/components/sections/AgeGroups";
import { Services } from "@/app/components/sections/Services";

import { FAQ } from "@/app/components/sections/FAQ";
import { ProcessSection } from "@/app/components/sections/ProcessSection";
import {
  heroContent,
  trustStats,
  services,
  team,
  visionBlock,
  approachBlock,
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
  const cms = await client
    .fetch(homePageQuery, {}, { next: { revalidate: 60 } })
    .catch(() => null);

  const heroData = {
    headline: cms?.heroHeadline ?? heroContent.headline,
    subHeadline: cms?.heroSubHeadline ?? heroContent.subHeadline,
    badgeText: cms?.heroBadgeText ?? heroContent.badgeText,
    ctaText: cms?.heroCtaText ?? heroContent.ctaText,
    heroCardItems: cms?.heroCardItems ?? heroContent.heroCardItems,
  };

  const statsData = cms?.trustStats ?? trustStats;

  const teamData = cms?.teamMember
    ? {
        name: cms.teamMember.name,
        role: cms.teamMember.role,
        bio: cms.teamMember.bio,
        image: cms.teamMember.imageUrl ?? team[0].image,
        qualifications: cms.teamMember.qualifications ?? team[0].qualifications,
      }
    : team[0];

  const visionData = {
    headline: cms?.approachHeadline ?? visionBlock.headline,
    description: cms?.approachDescription ?? approachBlock.description,
  };

  return (
    <>
      <Hero data={heroData} />
      <TrustStrip stats={statsData} />
      <Team member={teamData} />
      <ProcessSection />
      <ApproachBlock headline={visionData.headline} description={visionData.description} />
      <AgeGroups />
      <Services services={services} />
      <FAQ />
    </>
  );
}
