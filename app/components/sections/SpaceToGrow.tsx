"use client";

import React from "react";
import Link from "next/link";
import { spaceToGrowBlock } from "@/app/data/content";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919866410936?text=Hi%20Prashanthi%20Simon,%20I%20would%20like%20to%20inquire%20about%20a%20session%20at%20Anima%20Space.";

interface SpaceToGrowProps {
  headline?: string;
  paragraph1?: string;
}

export const SpaceToGrow = ({ headline, paragraph1 }: SpaceToGrowProps) => {
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
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* Primary — Book a Consultation */}
          <Link
            href="/book"
            id="grow-book-cta"
            aria-label="Book a Consultation at Anima Space"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[var(--color-brand-navy)] font-bold text-base hover:bg-[var(--color-brand-off-white)] active:scale-95 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <CalendarCheck className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <span>Book a Consultation</span>
          </Link>

          {/* WhatsApp Us */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Us at Anima Space"
            id="grow-whatsapp-cta"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-transparent border-2 border-white/70 text-white font-bold text-base hover:bg-white/15 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <span>WhatsApp Us</span>
          </a>

          {/* Call Us */}
          <a
            href="tel:+919866410936"
            aria-label="Call Us at Anima Space — +91 98664 10936"
            id="grow-call-cta"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-transparent border-2 border-white/70 text-white font-bold text-base hover:bg-white/15 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <span>Call Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
