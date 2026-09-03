"use client";

import React, { useRef, useLayoutEffect } from "react";
import { heroContent } from "@/app/data/content";
import { Button } from "@/app/components/ui/Button";
import gsap from "gsap";
import { Check, ShieldCheck, ArrowDownRight, Phone, MessageCircle } from "lucide-react";

interface HeroData {
  headline?: string;
  subHeadline?: string;
  badgeText?: string;
  ctaText?: string;
  heroCardItems?: string[];
}

export const Hero = ({ data }: { data?: HeroData }) => {
  const headline = data?.headline ?? heroContent.headline;
  const subHeadline = data?.subHeadline ?? heroContent.subHeadline;
  const badgeText = data?.badgeText ?? heroContent.badgeText;
  const ctaText = data?.ctaText ?? heroContent.ctaText;
  const heroCardItems = data?.heroCardItems ?? heroContent.heroCardItems;
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const overlayCardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [
          badgeRef.current,
          titleRef.current,
          textRef.current,
          btnRef.current,
          imgRef.current,
          overlayCardRef.current,
        ],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-10 md:py-16 px-6 bg-[var(--color-brand-off-white)] overflow-hidden">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
      >
        {/* Left Column Text & CTAs */}
        <div className="flex flex-col items-start gap-5 md:gap-6">
          {/* Trust Badge Top Left */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200/90 shadow-sm text-xs sm:text-sm font-semibold text-[var(--color-brand-olive)]"
          >
            <ShieldCheck className="w-4 h-4 text-[var(--color-brand-olive)]" />
            <span>{badgeText}</span>
          </div>

          <h1
            ref={titleRef}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-brand-navy)] leading-[1.1] tracking-tight"
          >
            {headline}
          </h1>

          <p
            ref={textRef}
            className="text-lg md:text-xl text-[var(--color-brand-espresso)] leading-relaxed max-w-2xl"
          >
            {subHeadline}
          </p>

          {/* Call to Action Buttons — all three in one prominent row */}
          <div ref={btnRef} className="pt-2 flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3">
              {/* Primary — Book */}
              <Button href="/book" variant="primary" id="hero-book-cta">
                {ctaText}
              </Button>

              {/* WhatsApp Us */}
              <a
                href="https://wa.me/919866410936?text=Hi%20Prashanthi%20Simon%2C%20I%20would%20like%20to%20book%20a%20session%20with%20Psychology%20%26%20Counselling%20experts%20at%20Anima%20Space."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Us at Anima Space"
                id="hero-whatsapp-cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--color-brand-navy)] bg-white text-sm font-bold text-[var(--color-brand-navy)] hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-navy)]"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>

              {/* Call Us */}
              <a
                href="tel:+919866410936"
                aria-label="Call Us at Anima Space — +91 98664 10936"
                id="hero-call-cta"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[var(--color-brand-navy)] bg-white text-sm font-bold text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-navy)] hover:text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-navy)]"
              >
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>Call Us</span>
              </a>
            </div>

            {/* Supporting discovery link */}
            <a
              href="#about-prashanthi"
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[var(--color-brand-navy)] hover:text-[var(--color-brand-mauve)] transition-colors group w-fit"
            >
              <span>Meet Prashanthi Simon</span>
              <ArrowDownRight className="w-4 h-4 text-[var(--color-brand-olive)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Column Image/Video with Floating Overlay Trust Card */}
        <div className="relative w-full max-w-md lg:max-w-full mx-auto">
          <div
            ref={imgRef}
            className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-[var(--color-brand-sky)] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-4 border-[var(--color-brand-navy)] flex items-center justify-center shadow-[6px_6px_0px_0px_var(--color-brand-navy)] md:shadow-[8px_8px_0px_0px_var(--color-brand-navy)]"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/caring-hands.png"
              className="w-full h-full object-cover relative z-0"
            >
              <source src="/hero-video.webm" type="video/webm" />
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>

            {/* Accent Shapes */}
            <div className="absolute top-5 right-5 md:top-6 md:right-6 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[var(--color-brand-pink)] border-2 border-[var(--color-brand-navy)] z-10 pointer-events-none shadow-sm" />
          </div>

          {/* Floating Overlay Card */}
          <div
            ref={overlayCardRef}
            className="absolute -bottom-6 -left-2 sm:-left-6 bg-white p-4 sm:p-5 rounded-2xl border-2 border-[var(--color-brand-navy)] shadow-[5px_5px_0px_0px_var(--color-brand-navy)] z-20 max-w-[270px] sm:max-w-[300px]"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-mauve)] mb-2">
              What We Can Help With
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm font-bold text-[var(--color-brand-navy)]">
              {heroCardItems.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[var(--color-brand-sky)]/60 text-[var(--color-brand-olive)] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
