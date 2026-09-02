"use client";

import React from "react";
import { spaceToGrowBlock } from "@/app/data/content";
import { Button } from "@/app/components/ui/Button";
import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919866410936?text=Hi%20Prashanthi%20Simon,%20I%20would%20like%20to%20inquire%20about%20a%20session%20at%20Anima%20Space.";

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
        <div className="flex flex-wrap justify-center items-center gap-3">
          <Button href="/book" variant="outline" id="grow-book-cta" className="text-white border-white hover:bg-white hover:text-[var(--color-brand-navy)]">
            {ctaText ?? spaceToGrowBlock.ctaText}
          </Button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Us at Anima Space"
            id="grow-whatsapp-cta"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-white/60 text-white font-bold text-sm hover:bg-white/10 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            WhatsApp Us
          </a>
          <a
            href="tel:+919866410936"
            aria-label="Call Us at Anima Space — +91 98664 10936"
            id="grow-call-cta"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-white/60 text-white font-bold text-sm hover:bg-white/10 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};
