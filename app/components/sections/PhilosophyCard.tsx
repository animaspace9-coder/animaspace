"use client";

import React, { useRef, useLayoutEffect } from "react";
import { spaceToGrowBlock } from "@/app/data/content";
import { animateFadeUp } from "@/app/lib/gsap";

export const PhilosophyCard = () => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    animateFadeUp(ref.current);
  }, []);

  return (
    <section className="py-16 px-6 bg-[var(--color-brand-off-white)]">
      <div ref={ref} className="max-w-3xl mx-auto">
        <div className="rounded-[2rem] bg-[var(--color-brand-mauve)] px-10 py-12 text-center flex flex-col items-center gap-5 shadow-[6px_6px_0px_0px_var(--color-brand-navy)]">
          {/* Badge */}
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)] px-4 py-1.5 rounded-full bg-white/10 border border-white/20">
            Our Philosophy
          </span>

          {/* Headline */}
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            {spaceToGrowBlock.headline}
          </h2>

          {/* Body */}
          <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-2xl">
            {spaceToGrowBlock.paragraph1}
          </p>
        </div>
      </div>
    </section>
  );
};
