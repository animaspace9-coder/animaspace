import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/app/components/sections/PageHero";
import { Button } from "@/app/components/ui/Button";
import { services } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Our Services — Anima Space",
  description: "Explore our full range of child psychology services: counselling, coaching, training, and therapy.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services built around your child."
        subtitle="Whether your child needs short-term support or long-term therapeutic care, we have a pathway that fits."
        colorClass="bg-[var(--color-brand-pink)]"
      />

      {/* Service Cards — Large format */}
      <section className="py-24 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <Link
                key={service.id}
                href={service.href}
                className="group block"
              >
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* "Not sure which?" strip */}
      <section className="py-20 px-6 bg-[var(--color-brand-navy)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Not sure which service is right for your child?
          </h2>
          <p className="text-[var(--color-brand-sky)] text-xl mb-10">
            Book an introductory consultation session. Prashanthi Simon will listen, ask the right questions, and point you in the best direction — no pressure, no commitment.
          </p>
          <Button href="/book" variant="outline">
            Book Session
          </Button>
        </div>
      </section>
    </>
  );
}
