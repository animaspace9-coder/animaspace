"use client";

import React, { useRef, useLayoutEffect } from "react";
import { approachBlock } from "@/app/data/content";
import { animateFadeUp } from "@/app/lib/gsap";

export const ApproachBlock = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    animateFadeUp(titleRef.current, 0.1);
    animateFadeUp(textRef.current, 0.2);
    animateFadeUp(imgRef.current, 0.3);
  }, []);

  return (
    <section id="about" className="py-24 bg-[var(--color-brand-charcoal)]">
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col gap-8">
          <h2 
            ref={titleRef}
            className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-brand-off-white)]"
          >
            {approachBlock.headline}
          </h2>
          <p 
            ref={textRef}
            className="text-[var(--color-brand-sky)] text-xl leading-relaxed"
          >
            {approachBlock.description}
          </p>
        </div>

        {/* Illustration Placeholder */}
        <div 
          ref={imgRef}
          className="order-1 lg:order-2 w-full aspect-square md:aspect-[4/3] bg-white rounded-[3rem] border-4 border-[var(--color-brand-navy)] shadow-[8px_8px_0px_0px_var(--color-brand-sky)] flex flex-col items-center justify-center p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-rose)] to-[var(--color-brand-off-white)] mix-blend-overlay"></div>
          <span className="text-7xl mb-6 z-10">🌿</span>
          <p className="font-heading font-bold text-center text-[var(--color-brand-navy)] z-10 text-xl">
            [Illustration Placeholder]<br/>
            <span className="text-sm font-normal">Supportive Scene</span>
          </p>
        </div>
      </div>
    </section>
  );
};
