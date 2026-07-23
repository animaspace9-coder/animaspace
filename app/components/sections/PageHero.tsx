"use client";

import React, { useRef, useLayoutEffect } from "react";
import { animateFadeUp } from "@/app/lib/gsap";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  icon?: string;
  colorClass?: string;
  centered?: boolean;
}

export const PageHero = ({
  title,
  subtitle,
  icon,
  colorClass = "bg-[var(--color-brand-sky)]",
  centered = false,
}: PageHeroProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    animateFadeUp(titleRef.current, 0.05);
    if (subRef.current) animateFadeUp(subRef.current, 0.15);
  }, []);

  return (
    <section className={`${colorClass} pt-16 pb-20 px-6`}>
      <div
        className={`max-w-4xl mx-auto ${centered ? "text-center" : "text-left"}`}
      >
        {icon && (
          <span className="text-5xl mb-6 block">{icon}</span>
        )}
        <h1
          ref={titleRef}
          className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-brand-navy)] leading-[1.05] tracking-tight mb-6"
        >
          {title}
        </h1>
        {subtitle && (
          <p
            ref={subRef}
            className="text-xl md:text-2xl text-[var(--color-brand-espresso)] leading-relaxed max-w-2xl"
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
