"use client";

import React, { useRef, useLayoutEffect } from "react";
import { trustStats } from "@/app/data/content";
import { animateStaggerFadeUp } from "@/app/lib/gsap";

export const TrustStrip = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const validRefs = itemRefs.current.filter((r): r is HTMLDivElement => r !== null);
    animateStaggerFadeUp(validRefs, 0.2);
  }, []);

  return (
    <section className="py-12 bg-[var(--color-brand-charcoal)] border-y-4 border-[var(--color-brand-navy)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y-2 md:divide-y-0 md:divide-x-2 divide-[var(--color-brand-navy)]">
          {trustStats.map((stat, i) => (
            <div
              key={stat.label}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="py-4 md:py-0 px-4 flex flex-col justify-center items-center gap-2"
            >
              <p className="font-heading text-4xl lg:text-5xl font-black text-[var(--color-brand-off-white)]">
                {stat.value}
              </p>
              <p className="text-[var(--color-brand-sky)] font-medium text-lg uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
