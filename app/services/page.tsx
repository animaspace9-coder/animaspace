import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { servicesPageQuery } from "@/sanity/lib/queries";
import { PageHero } from "@/app/components/sections/PageHero";
import { SpaceToGrow } from "@/app/components/sections/SpaceToGrow";
import { services as defaultServices } from "@/app/data/content";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services — Anima Space",
  description:
    "Explore our full range of services: Psychological Counselling, Coaching, Emotional Well-being & Personal Growth, Career Counselling, and Training for children, adolescents, and adults.",
};

export default async function ServicesPage() {
  const cms = await client
    .fetch(servicesPageQuery, {}, { next: { revalidate: 60 } })
    .catch(() => null);

  const services = defaultServices;

  return (
    <>
      <PageHero
        title={cms?.pageHeroTitle ?? "Our Services"}
        subtitle={
          cms?.pageHeroSubtitle ??
          "Our services are designed to support children, adolescents, and adults through different emotional, psychological, personal, academic, and professional challenges."
        }
        colorClass="bg-[var(--color-brand-sky)]"
      />

      {/* Service Cards — 5 Services */}
      <section className="py-20 md:py-28 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`${service.colorClass} rounded-[2.5rem] border-4 border-[var(--color-brand-navy)] p-8 sm:p-12 md:p-14 shadow-[8px_8px_0px_0px_var(--color-brand-navy)] flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between`}
            >
              <div className="flex-1">
                <span className="text-5xl mb-4 block">{service.icon}</span>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-4">
                  {service.shortTitle ?? service.title}
                </h2>
                <p className="text-base sm:text-lg text-[var(--color-brand-espresso)] leading-relaxed mb-6 max-w-3xl">
                  {service.description}
                </p>

                {service.closingText && (
                  <p className="text-sm sm:text-base font-semibold text-[var(--color-brand-navy)]/80 mb-6 italic">
                    {service.closingText}
                  </p>
                )}

                <Link
                  href={(service as any).ctaButtonText ? "/book" : service.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-brand-navy)] text-white font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] hover:bg-[var(--color-brand-mauve)] hover:shadow-none hover:translate-x-0.5 transition-all"
                >
                  <span>{(service as any).ctaButtonText ?? `Explore ${service.shortTitle ?? service.title}`}</span>
                  <span>&rarr;</span>
                </Link>
              </div>

              {/* Bullet Points Box */}
              {service.bulletPoints && service.bulletPoints.length > 0 && (
                <div className="w-full lg:w-96 bg-white/80 backdrop-blur-xs p-6 sm:p-8 rounded-2xl border-2 border-[var(--color-brand-navy)] shadow-sm">
                  <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-4">
                    Key Focus Areas
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-[var(--color-brand-navy)]">
                    {service.bulletPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[var(--color-brand-navy)] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Concluding CTA Strip */}
      <SpaceToGrow />
    </>
  );
}
