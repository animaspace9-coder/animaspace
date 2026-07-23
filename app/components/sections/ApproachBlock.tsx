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

        {/* Illustration */}
        <div 
          ref={imgRef}
          className="order-1 lg:order-2 w-full aspect-square md:aspect-[4/3] bg-[#fbf9f4] rounded-[3rem] border-4 border-[var(--color-brand-navy)] shadow-[8px_8px_0px_0px_var(--color-brand-sky)] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden"
        >
          <img 
            src="/caring-hands.png" 
            alt="Gentle holding hands illustration with band-aids and floral details" 
            className="w-full h-full object-contain relative z-10 drop-shadow-sm rounded-[2rem]"
          />
        </div>
      </div>
    </section>
  );
};
