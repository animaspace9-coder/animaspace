import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { servicePageQuery, allServiceSlugsQuery } from "@/sanity/lib/queries";
import { ServiceSubPage } from "@/app/components/sections/ServiceSubPage";
import { servicePages } from "@/app/data/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await client
    .fetch(allServiceSlugsQuery, {}, { next: { revalidate: 3600 } })
    .catch(() => null);

  if (slugs && slugs.length > 0) {
    return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
  }

  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cms = await client
    .fetch(servicePageQuery, { slug }, { next: { revalidate: 60 } })
    .catch(() => null);

  const fallback = servicePages[slug];
  const title = cms?.title ?? fallback?.title ?? "Service";
  const description = cms?.tagline ?? fallback?.tagline ?? "Anima Space professional services.";

  return {
    title: `${title} — Anima Space`,
    description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  // Fetch from Sanity
  const cms = await client
    .fetch(servicePageQuery, { slug }, { next: { revalidate: 60 } })
    .catch(() => null);

  // Build the data object, merging CMS over content.ts fallback
  const fallback = servicePages[slug];

  if (!cms && !fallback) {
    notFound();
  }

  const colorKeyToClass: Record<string, string> = {
    sky: "bg-[var(--color-brand-sky)]",
    pink: "bg-[var(--color-brand-pink)]",
    rose: "bg-[var(--color-brand-rose)]",
    mauve: "bg-[var(--color-brand-mauve)]/20",
    olive: "bg-[var(--color-brand-sky)]/30",
  };

  const data = {
    slug,
    title: cms?.title ?? fallback?.title ?? slug,
    tagline: cms?.tagline ?? fallback?.tagline ?? "",
    colorClass: cms?.colorKey
      ? colorKeyToClass[cms.colorKey]
      : fallback?.colorClass ?? "bg-[var(--color-brand-sky)]",
    bgAccent: fallback?.bgAccent ?? "var(--color-brand-sky)",
    icon: cms?.icon ?? fallback?.icon ?? "💬",
    intro: cms?.intro ?? fallback?.intro ?? "",
    bulletPoints: cms?.bulletPoints ?? fallback?.bulletPoints ?? [],
    whoItsFor: cms?.whoItsFor ?? fallback?.whoItsFor ?? "",
  };

  return <ServiceSubPage data={data} />;
}
