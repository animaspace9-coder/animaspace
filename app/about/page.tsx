import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { aboutPageQuery } from "@/sanity/lib/queries";
import { PageHero } from "@/app/components/sections/PageHero";
import { ApproachBlock } from "@/app/components/sections/ApproachBlock";
import { Team } from "@/app/components/sections/Team";
import { Button } from "@/app/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us — Anima Space",
  description:
    "Learn about Anima Space, our mission, and the psychologist behind the practice — Prashanthi Simon.",
};

const defaultCoreValues = [
  {
    icon: "🤍",
    title: "Safe & Confidential",
    description:
      "Every session is held in a safe, confidential, compassionate, and non-judgemental space where you can speak freely.",
    colorClass: "bg-[var(--color-brand-sky)]",
  },
  {
    icon: "🌱",
    title: "Growth-Centred",
    description:
      "We believe every individual has the capacity for growth. Our goal is to help you recognise your strengths and unlock your potential.",
    colorClass: "bg-[var(--color-brand-pink)]",
  },
  {
    icon: "🤝",
    title: "Personalised Support",
    description:
      "We understand that every individual is unique. Our approach is tailored to your specific needs, goals, and life stage.",
    colorClass: "bg-[var(--color-brand-rose)]",
  },
  {
    icon: "💡",
    title: "Purposeful Living",
    description:
      "We help individuals move from understanding themselves to living with greater clarity, confidence, and purpose.",
    colorClass: "bg-[var(--color-brand-mauve)]/20",
  },
];

const colorClasses = [
  "bg-[var(--color-brand-sky)]",
  "bg-[var(--color-brand-pink)]",
  "bg-[var(--color-brand-rose)]",
  "bg-[var(--color-brand-mauve)]/20",
];

export default async function AboutPage() {
  const cms = await client
    .fetch(aboutPageQuery, {}, { next: { revalidate: 60 } })
    .catch(() => null);

  const coreValues =
    cms?.coreValues && cms.coreValues.length > 0
      ? cms.coreValues.map(
          (v: { icon: string; title: string; description: string }, i: number) => ({
            icon: v.icon,
            title: v.title,
            description: v.description,
            colorClass: colorClasses[i % colorClasses.length],
          })
        )
      : defaultCoreValues;

  const storyParagraphs: string[] = cms?.storyParagraphs ?? [
    "Prashanthi Simon founded Anima Space with the vision to create a safe space where psychological well-being, personal growth, and purposeful living come together.",
    'Anima means life, and Space represents what we strive to create: a safe, confidential, compassionate, and non-judgemental space where you can speak freely, be heard, and feel understood.',
    "It is built on the belief that every individual deserves to be heard, understood, supported, and empowered.",
  ];

  const teamMember = cms?.teamMember
    ? {
        name: cms.teamMember.name,
        role: cms.teamMember.role,
        bio: cms.teamMember.bio,
        experience: cms.teamMember.experience,
        image: cms.teamMember.imageUrl ?? "/prashanthi-simon.png",
        qualifications: cms.teamMember.qualifications ?? [],
        specialties: cms.teamMember.specialties ?? [],
      }
    : undefined;

  return (
    <>
      <PageHero
        title={cms?.pageHeroTitle ?? "Where Understanding Begins, Growth Unfolds."}
        subtitle={
          cms?.pageHeroSubtitle ??
          "Anima Space was founded with the vision to create a safe space where psychological well-being, personal growth, and purposeful living come together."
        }
        colorClass="bg-[var(--color-brand-sky)]"
      />

      {/* Story Section */}
      <section className="py-24 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-6">
              Our Story
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-8 leading-tight">
              {cms?.storyHeadline ?? "The Vision Behind Anima Space"}
            </h2>
            <div className="flex flex-col gap-5 text-lg text-[var(--color-brand-espresso)] leading-relaxed">
              {storyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="relative w-full aspect-[4/3] bg-[var(--color-brand-pink)] rounded-[2.5rem] overflow-hidden border-4 border-[var(--color-brand-navy)] shadow-[8px_8px_0px_0px_var(--color-brand-navy)] flex items-center justify-center p-2">
            <img
              src="/serene-space.jpg"
              alt="Anima Space serene & supportive therapy environment"
              className="w-full h-full object-cover rounded-[2rem]"
            />
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[var(--color-brand-sky)] border-2 border-[var(--color-brand-navy)] z-10" />
            <div className="absolute bottom-8 left-8 w-8 h-8 rotate-12 bg-[var(--color-brand-mauve)] border-2 border-[var(--color-brand-navy)] rounded-lg z-10" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-4">
              What guides us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)]">
              {cms?.coreValuesSectionTitle ?? "Our core values."}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value: { icon: string; title: string; description: string; colorClass: string }) => (
              <div
                key={value.title}
                className={`${value.colorClass} rounded-[2rem] border-4 border-[var(--color-brand-navy)] p-8 shadow-[4px_4px_0px_0px_var(--color-brand-navy)]`}
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="font-heading text-xl font-bold text-[var(--color-brand-navy)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--color-brand-espresso)] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Prashanthi */}
      <Team member={teamMember} />

      {/* Approach Block */}
      <ApproachBlock
        headline={cms?.visionHeadline}
        description={cms?.visionParagraphs?.join(" ")}
      />

      {/* CTA */}
      <section className="py-24 px-6 bg-[var(--color-brand-off-white)] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-6">
            {cms?.ctaHeading ?? "Ready to take the first step?"}
          </h2>
          <p className="text-xl text-[var(--color-brand-espresso)] mb-10">
            {cms?.ctaBody ??
              "Whether you are looking for counselling, coaching, career guidance, or training — we are here to help."}
          </p>
          <Button href="/book" variant="primary">
            {cms?.ctaButtonText ?? "Book a Consultation"}
          </Button>
        </div>
      </section>
    </>
  );
}
