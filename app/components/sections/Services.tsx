"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { services as defaultServices, whatWeCanHelpWith } from "@/app/data/content";
import { animateStaggerFadeUp } from "@/app/lib/gsap";
import { Check } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  shortTitle?: string;
  tagline?: string;
  homeSummary?: string;
  description: string;
  colorClass: string;
  icon: string;
  href: string;
  bulletPoints?: string[];
  closingText?: string;
}

export const Services = ({ services }: { services?: ServiceItem[] }) => {
  const items = services ?? defaultServices;
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const validCards = cardRefs.current.filter((c): c is HTMLDivElement => c !== null);
    animateStaggerFadeUp(validCards, 0.15);
  }, []);

  return (
    <section id="services" className="py-20 md:py-28 px-6 bg-[var(--color-brand-off-white)]">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        
        {/* What We Can Help With Banner */}
        <div className="bg-white rounded-[2.5rem] border-3 border-[var(--color-brand-navy)] p-8 sm:p-12 mb-20 shadow-[6px_6px_0px_0px_var(--color-brand-navy)]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-3">
              Areas of Focus
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-brand-navy)] mb-8">
              {whatWeCanHelpWith.headline}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
              {whatWeCanHelpWith.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 bg-[var(--color-brand-sky)]/30 rounded-2xl border border-[var(--color-brand-navy)]/20"
                >
                  <span className="w-6 h-6 rounded-full bg-[var(--color-brand-navy)] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    ✓
                  </span>
                  <span className="font-semibold text-sm sm:text-base text-[var(--color-brand-navy)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-3">
            Our Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)]">
            Professional Guidance &amp; Support
          </h2>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`${service.colorClass} rounded-[2.5rem] border-3 border-[var(--color-brand-navy)] p-8 sm:p-10 shadow-[6px_6px_0px_0px_var(--color-brand-navy)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300`}
            >
              <div>
                <span className="text-5xl mb-6 block">{service.icon}</span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-brand-navy)] mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-[var(--color-brand-espresso)] leading-relaxed mb-6">
                  {service.homeSummary ?? service.description}
                </p>

                {service.bulletPoints && service.bulletPoints.length > 0 && (
                  <ul className="space-y-2 mb-6 pt-4 border-t border-[var(--color-brand-navy)]/10 text-xs sm:text-sm font-medium text-[var(--color-brand-espresso)]">
                    {service.bulletPoints.slice(0, 4).map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[var(--color-brand-navy)] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                    {service.bulletPoints.length > 4 && (
                      <li className="text-xs font-bold text-[var(--color-brand-navy)]/70">
                        + more areas
                      </li>
                    )}
                  </ul>
                )}
              </div>

              <div className="pt-4 border-t border-[var(--color-brand-navy)]/10">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 font-bold text-sm text-[var(--color-brand-navy)] hover:text-[var(--color-brand-mauve)] transition-colors group"
                >
                  <span>Learn more about {service.shortTitle ?? service.title}</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
