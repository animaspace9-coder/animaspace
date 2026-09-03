"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { animateFadeUp } from "@/app/lib/gsap";

const WHATSAPP_URL =
  "https://wa.me/919866410936?text=Hi%20Prashanthi%20Simon,%20I%20would%20like%20to%20inquire%20about%20a%20session%20at%20Anima%20Space.";

export const StillHaveQuestions = () => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    animateFadeUp(ref.current);
  }, []);

  return (
    <section className="pb-20 px-6 bg-[var(--color-brand-off-white)]">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className="rounded-[2rem] border-2 border-[var(--color-brand-navy)]/15 bg-white p-8 md:p-10 text-center flex flex-col items-center gap-6"
        >
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-brand-navy)] mb-2">
              Still have questions?
            </h3>
            <p className="text-[var(--color-brand-espresso)] text-base">
              We are here to help. Reach out through any of the options below.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <Link
              href="/book"
              id="faq-book-cta"
              aria-label="Book a Consultation"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--color-brand-mauve)] text-white font-bold text-sm hover:bg-[var(--color-brand-rose)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-mauve)]"
            >
              <CalendarCheck className="w-4 h-4" aria-hidden="true" />
              Book a Consultation
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="faq-whatsapp-cta"
              aria-label="WhatsApp Us at Anima Space"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-[var(--color-brand-navy)] bg-white text-[var(--color-brand-navy)] font-bold text-sm hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-navy)]"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              WhatsApp Us
            </a>
            <a
              href="tel:+919866410936"
              id="faq-call-cta"
              aria-label="Call Us at Anima Space — +91 98664 10936"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-[var(--color-brand-navy)] bg-white text-[var(--color-brand-navy)] font-bold text-sm hover:bg-[var(--color-brand-navy)] hover:text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-navy)]"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
