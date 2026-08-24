"use client";

import React from "react";
import { spaceToGrowBlock } from "@/app/data/content";
import { Button } from "@/app/components/ui/Button";

interface SpaceToGrowProps {
  headline?: string;
  paragraph1?: string;
  paragraph2?: string;
  ctaText?: string;
}

export const SpaceToGrow = ({ headline, paragraph1, paragraph2, ctaText }: SpaceToGrowProps) => {
  return (
    <section className="py-20 md:py-28 px-6 bg-[var(--color-brand-mauve)] text-white text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)] mb-3 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
          Growth &amp; Possibility
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {headline ?? spaceToGrowBlock.headline}
        </h2>
        <div className="flex flex-col gap-4 text-base sm:text-xl text-white/90 leading-relaxed mb-10 max-w-3xl">
          <p>{paragraph1 ?? spaceToGrowBlock.paragraph1}</p>
          <p>{paragraph2 ?? spaceToGrowBlock.paragraph2}</p>
        </div>
        <Button href="/book" variant="outline" className="text-white border-white hover:bg-white hover:text-[var(--color-brand-navy)]">
          {ctaText ?? spaceToGrowBlock.ctaText}
        </Button>
      </div>
    </section>
  );
};
