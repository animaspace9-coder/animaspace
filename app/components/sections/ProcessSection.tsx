"use client";

import React, { useRef, useLayoutEffect } from "react";
import { processSteps } from "@/app/data/content";
import { Button } from "@/app/components/ui/Button";
import { animateFadeUp, animateStaggerFadeUp } from "@/app/lib/gsap";

export const ProcessSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    animateFadeUp(headerRef.current);
    const valid = cardRefs.current.filter((r): r is HTMLDivElement => r !== null);
    animateStaggerFadeUp(valid, 0.15);
  }, []);

  return (
    <section
      id="how-we-work"
      className="py-20 md:py-28 px-6 bg-white border-t border-[var(--color-brand-navy)]/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-4 px-4 py-1.5 rounded-full bg-[var(--color-brand-pink)] border border-[var(--color-brand-rose)]/40">
            How It Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] leading-tight">
            What We Can Help With
          </h2>
          <p className="mt-4 text-base md:text-lg text-[var(--color-brand-espresso)] leading-relaxed">
            At Anima Space, we make the process simple, comfortable, and centred around you.
          </p>
        </div>

        {/* 4-step grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-0.5 border-t-2 border-dashed border-[var(--color-brand-mauve)]/30 z-0"
            aria-hidden="true"
          />

          {processSteps.map((step, idx) => (
            <div
              key={idx}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className="relative z-10 bg-[var(--color-brand-off-white)] rounded-[2rem] border-2 border-[var(--color-brand-navy)] shadow-[4px_4px_0px_0px_var(--color-brand-navy)] p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Step number */}
              <div className="flex items-center justify-between">
                <span className="font-heading text-4xl font-extrabold text-[var(--color-brand-mauve)]">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-pink)] border border-[var(--color-brand-navy)] flex items-center justify-center text-lg flex-shrink-0">
                  {idx === 0 ? "📅" : idx === 1 ? "💬" : idx === 2 ? "🔍" : "🗺️"}
                </div>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-[var(--color-brand-navy)] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-brand-espresso)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button href="/book" variant="primary" id="process-book-cta">
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
