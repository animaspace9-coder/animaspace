"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { services } from "@/app/data/content";
import { animateFadeUp, animateStaggerFadeUp } from "@/app/lib/gsap";

export const Services = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    animateFadeUp(headerRef.current);
    const validRefs = cardRefs.current.filter((r): r is HTMLDivElement => r !== null);
    animateStaggerFadeUp(validRefs, 0.2);
  }, []);

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-[var(--color-brand-espresso)] max-w-2xl mx-auto">
            Comprehensive psychological support using evidence-based approaches tailored for your child&apos;s unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="h-full"
            >
              <Link
                href={service.href}
                className={`group flex flex-col h-full ${service.colorClass} rounded-[2rem] border-4 border-[var(--color-brand-navy)] p-8 shadow-[4px_4px_0px_0px_var(--color-brand-navy)] transition-all duration-300 hover:shadow-[8px_8px_0px_0px_var(--color-brand-navy)] hover:-translate-y-1`}
              >
                <span className="text-4xl mb-5 block">{service.icon}</span>
                <h3 className="font-heading text-xl font-bold text-[var(--color-brand-navy)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--color-brand-espresso)] text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[var(--color-brand-navy)] font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all duration-200">
                  Learn more
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Link to full services page */}
        <div className="text-center mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] font-semibold hover:bg-[var(--color-brand-navy)] hover:text-white transition-colors"
          >
            View all services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
