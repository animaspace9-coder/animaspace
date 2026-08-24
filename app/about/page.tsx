import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { aboutPageQuery } from "@/sanity/lib/queries";
import { aboutPageContent } from "@/app/data/content";
import { Button } from "@/app/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us — Anima Space",
  description:
    "Well-being, Psychological Consulting & Counselling Centre — Where Understanding Begins, Growth Unfolds.",
};

export default async function AboutPage() {
  const cms = await client
    .fetch(aboutPageQuery, {}, { next: { revalidate: 60 } })
    .catch(() => null);

  const headline = cms?.pageHeroTitle ?? aboutPageContent.headline;
  const subtitle = cms?.subtitle ?? aboutPageContent.subtitle;
  const welcomeHeadline = cms?.storyHeadline ?? aboutPageContent.welcomeHeadline;
  const welcomeParagraphs = cms?.storyParagraphs ?? aboutPageContent.welcomeParagraphs;
  const offerings = aboutPageContent.offerings;
  const closingTitle = cms?.closingTitle ?? aboutPageContent.closingTitle;
  const closingText = cms?.closingText ?? aboutPageContent.closingText;

  return (
    <>
      {/* Hero Header */}
      <section className="py-16 md:py-24 px-6 bg-[var(--color-brand-sky)] border-b border-[var(--color-brand-navy)]/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--color-brand-navy)]/70 mb-4 px-4 py-1.5 rounded-full bg-white/60 border border-[var(--color-brand-navy)]/20">
            About Us &bull; Anima Space
          </span>
          <p className="text-base md:text-xl font-semibold text-[var(--color-brand-navy)]/80 mb-4">
            {subtitle}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-brand-navy)] leading-[1.15] tracking-tight">
            {headline}
          </h1>
        </div>
      </section>

      {/* Welcome to Anima Space */}
      <section className="py-20 md:py-28 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-base md:text-lg text-[var(--color-brand-espresso)] leading-relaxed">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-brand-navy)]">
              {welcomeHeadline}
            </h2>
            {welcomeParagraphs.map((para: string, i: number) => (
              <p key={i}>
                {i === 0 ? (
                  <>
                    <strong className="font-bold text-[var(--color-brand-navy)]">Anima</strong> means{" "}
                    <em>life</em>, and <strong className="font-bold text-[var(--color-brand-navy)]">Space</strong> represents what we strive to create: a{" "}
                    <strong className="font-bold text-[var(--color-brand-navy)]">
                      safe, confidential, compassionate, and non-judgemental space
                    </strong>{" "}
                    where you can speak freely, be heard, and feel understood.
                  </>
                ) : i === 1 ? (
                  <>
                    Anima Space began with a vision to bring together{" "}
                    <strong className="font-bold text-[var(--color-brand-navy)]">
                      psychological well-being, personal growth, emotional healing, and professional development
                    </strong>{" "}
                    in one meaningful space. What began as a desire to make psychological support more accessible has grown into a platform offering{" "}
                    <strong className="font-bold text-[var(--color-brand-navy)]">
                      counselling, coaching, healing, career guidance, and training
                    </strong>{" "}
                    for individuals and organisations.
                  </>
                ) : (
                  <>
                    Our services are designed to support{" "}
                    <strong className="font-bold text-[var(--color-brand-navy)]">
                      children, adolescents, and adults
                    </strong>{" "}
                    through different emotional, psychological, personal, academic, and professional challenges.
                  </>
                )}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:aspect-square bg-[var(--color-brand-pink)] rounded-[2.5rem] overflow-hidden border-4 border-[var(--color-brand-navy)] shadow-[8px_8px_0px_0px_var(--color-brand-navy)] flex items-center justify-center p-3">
            <img
              src="/serene-space.jpg"
              alt="Anima Space calm and compassionate environment"
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      {/* Our Offerings */}
      <section className="py-20 md:py-28 px-6 bg-white border-t border-b border-[var(--color-brand-navy)]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-3">
              Services &amp; Pathways
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)]">
              {aboutPageContent.offeringsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering) => (
              <div
                key={offering.title}
                className={`${offering.colorClass} rounded-[2rem] border-3 border-[var(--color-brand-navy)] p-8 shadow-[5px_5px_0px_0px_var(--color-brand-navy)] flex flex-col justify-between`}
              >
                <div>
                  <span className="text-4xl mb-4 block">{offering.icon}</span>
                  <h3 className="font-heading text-2xl font-bold text-[var(--color-brand-navy)] mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-[var(--color-brand-espresso)] text-sm md:text-base leading-relaxed mb-6">
                    {offering.description}
                  </p>
                </div>
                <Link
                  href={offering.href}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)] hover:text-[var(--color-brand-mauve)] transition-colors"
                >
                  Explore {offering.title} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Space for Life, Growth & Possibility */}
      <section className="py-20 md:py-28 px-6 bg-[var(--color-brand-off-white)] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-6">
            {closingTitle}
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-brand-espresso)] leading-relaxed mb-10">
            {closingText}
          </p>
          <Button href="/book" variant="primary">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
