"use client";

import React, { useRef, useLayoutEffect } from "react";
import { heroContent } from "@/app/data/content";
import { Button } from "@/app/components/ui/Button";
import gsap from "gsap";
import { Check, ShieldCheck, ArrowDownRight } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const overlayCardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Smooth entry on mount without ScrollTrigger delay for Hero elements
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
            <span>Convenient, proven care for a brighter future</span>
          </div>

          <h1
            ref={titleRef}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-brand-navy)] leading-[1.1] tracking-tight"
          >
            Your Partner in Child Counseling &amp; Parenting Support
          </h1>

          <p
            ref={textRef}
            className="text-lg md:text-xl text-[var(--color-brand-espresso)] leading-relaxed max-w-2xl"
          >
            Connect with a trusted child &amp; adolescent psychologist for gentle counselling tailored for ages 8–18 and parent guidance.
          </p>

          {/* Call to Action Buttons */}
          <div ref={btnRef} className="pt-2 flex flex-wrap items-center gap-4">
            <Button href="/book" variant="primary">
              {heroContent.ctaText}
            </Button>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[var(--color-brand-navy)] hover:text-[var(--color-brand-mauve)] transition-colors group"
            >
              <span>How does it work?</span>
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
            <div className="absolute top-5 right-5 md:top-6 md:right-6 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[var(--color-brand-pink)] border-2 border-[var(--color-brand-navy)] z-10 pointer-events-none shadow-sm"></div>
          </div>

          {/* Floating Overlay Card */}
          <div
            ref={overlayCardRef}
            className="absolute -bottom-6 -left-2 sm:-left-6 bg-white p-4 sm:p-5 rounded-2xl border-2 border-[var(--color-brand-navy)] shadow-[5px_5px_0px_0px_var(--color-brand-navy)] z-20 max-w-[270px] sm:max-w-[300px]"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-mauve)] mb-2">
              We take care of
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm font-bold text-[var(--color-brand-navy)] mb-3">
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[var(--color-brand-sky)]/60 text-[var(--color-brand-olive)] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Big Emotions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[var(--color-brand-sky)]/60 text-[var(--color-brand-olive)] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Knowing Your Child</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[var(--color-brand-sky)]/60 text-[var(--color-brand-olive)] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Being a Better Parent</span>
              </li>
            </ul>

            {/* Therapist Avatar Row */}
            <div className="flex items-center gap-2 pt-1 border-t border-gray-100">
              <div className="flex -space-x-2">
                <img
                  src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=32&height=32&format=auto"
                  alt="Specialist"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=32&height=32&format=auto"
                  alt="Specialist"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=32&height=32&format=auto"
                  alt="Specialist"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                />
                <div className="w-7 h-7 rounded-full bg-[var(--color-brand-navy)] text-white font-bold text-xs flex items-center justify-center border-2 border-white">
                  +
                </div>
              </div>
              <span className="text-[11px] font-semibold text-gray-500">
                Registered Specialists
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
