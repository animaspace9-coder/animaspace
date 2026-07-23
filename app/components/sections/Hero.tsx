"use client";

import React, { useRef, useLayoutEffect } from "react";
import { heroContent } from "@/app/data/content";
import { Button } from "@/app/components/ui/Button";
import gsap from "gsap";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Smooth entry on mount without ScrollTrigger delay for Hero elements
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [titleRef.current, textRef.current, btnRef.current, imgRef.current],
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
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
      >
        <div className="flex flex-col items-start gap-5 md:gap-6">
          <h1 
            ref={titleRef}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-brand-navy)] leading-[1.1] tracking-tight"
          >
            {heroContent.headline}
          </h1>
          <p 
            ref={textRef}
            className="text-lg md:text-xl text-[var(--color-brand-espresso)] leading-relaxed max-w-2xl"
          >
            {heroContent.subHeadline}
          </p>
          <div ref={btnRef} className="pt-2">
            <Button href="/book" variant="primary">
              {heroContent.ctaText}
            </Button>
          </div>
        </div>

        {/* Hero Video Container (Optimized for Portrait 2D Illustration Video) */}
        <div 
          ref={imgRef}
          className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-w-md lg:max-w-full mx-auto bg-[var(--color-brand-sky)] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-4 border-[var(--color-brand-navy)] flex items-center justify-center shadow-[6px_6px_0px_0px_var(--color-brand-navy)] md:shadow-[8px_8px_0px_0px_var(--color-brand-navy)]"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover relative z-0"
          >
            <source src="/hero-video.webm" type="video/webm" />
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Overlay Accent Shapes */}
          <div className="absolute top-5 right-5 md:top-6 md:right-6 w-7 h-7 md:w-8 md:h-8 rounded-full bg-[var(--color-brand-pink)] border-2 border-[var(--color-brand-navy)] z-10 pointer-events-none shadow-sm"></div>
          <div className="absolute bottom-8 left-5 md:bottom-10 md:left-6 w-9 h-9 md:w-10 md:h-10 bg-[var(--color-brand-mauve)] rotate-12 border-2 border-[var(--color-brand-navy)] rounded-lg z-10 pointer-events-none shadow-sm"></div>
        </div>
      </div>
    </section>
  );
};
