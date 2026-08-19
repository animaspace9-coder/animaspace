import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { servicesPageQuery } from "@/sanity/lib/queries";
import { PageHero } from "@/app/components/sections/PageHero";
import { Button } from "@/app/components/ui/Button";
import { services as defaultServices } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Our Services — Anima Space",
  description:
    "Explore our full range of services: psychological counselling, coaching, healing, career counselling, and training for children, adolescents, and adults.",
};

const colorKeyToClass: Record<string, string> = {
  sky: "bg-[var(--color-brand-sky)]",
  pink: "bg-[var(--color-brand-pink)]",
  rose: "bg-[var(--color-brand-rose)]",
  mauve: "bg-[var(--color-brand-mauve)]/20",
  olive: "bg-[var(--color-brand-sky)]/30",
};

export default async function ServicesPage() {
  const cms = await client
    .fetch(servicesPageQuery, {}, { next: { revalidate: 60 } })
    .catch(() => null);

  const services =
    cms?.services && cms.services.length > 0
      ? cms.services.map((s: { title: string; description: string; icon: string; slug: string; colorKey: string }) => ({
          id: s.slug,
          title: s.title,
          description: s.description,
          icon: s.icon,
          href: `/services/${s.slug}`,
          colorClass: colorKeyToClass[s.colorKey] ?? "bg-[var(--color-brand-sky)]",
        }))
      : defaultServices;

  return (
    <>
      <PageHero
        title={cms?.pageHeroTitle ?? "A Space to Understand. A Space to Grow."}
        subtitle={
          cms?.pageHeroSubtitle ??
          "Our services are designed to support children, adolescents, and adults through different emotional, psychological, personal, academic, and professional challenges."
        }
        colorClass="bg-[var(--color-brand-pink)]"
      />

      {/* Service Cards — Large format */}
      <section className="py-24 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-7xl mx-auto">
          {cms?.sectionTitle && (
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] text-center mb-16">
              {cms.sectionTitle}
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map(
              (service: { id: string; title: string; description: string; icon: string; href: string; colorClass: string }) => (
                <Link key={service.id} href={service.href} className="group block">
                  <div
                    className={`${service.colorClass} rounded-[2.5rem] border-4 border-[var(--color-brand-navy)] p-10 shadow-[6px_6px_0px_0px_var(--color-brand-navy)] transition-all duration-300 group-hover:shadow-[10px_10px_0px_0px_var(--color-brand-navy)] group-hover:-translate-y-1 h-full flex flex-col`}
                  >
                    <span className="text-5xl mb-6 block">{service.icon}</span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-brand-navy)] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-[var(--color-brand-espresso)] text-lg leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[var(--color-brand-navy)] font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all duration-200">
                      Learn more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 px-6 bg-[var(--color-brand-navy)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            {cms?.ctaStripHeading ?? "Book a Consultation to explore our services"}
          </h2>
          <p className="text-[var(--color-brand-sky)] text-xl mb-10">
            {cms?.ctaStripBody ??
              "Not sure which service is right for you? Book an introductory consultation. We will listen, ask the right questions, and guide you to the best pathway."}
          </p>
          <Button href="/book" variant="outline">
            {cms?.ctaStripButtonText ?? "Book a Consultation"}
          </Button>
        </div>
      </section>
    </>
  );
}
