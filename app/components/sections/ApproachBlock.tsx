"use client";

import React, { useRef, useLayoutEffect } from "react";
import { visionBlock, approachBlock } from "@/app/data/content";
import { animateFadeUp } from "@/app/lib/gsap";

interface ApproachBlockProps {
  headline?: string;
  description?: string;
}

export const ApproachBlock = ({ headline, description }: ApproachBlockProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    animateFadeUp(titleRef.current, 0.1);
    animateFadeUp(textRef.current, 0.2);
    animateFadeUp(imgRef.current, 0.3);
  }, []);

  return (
    <section id="vision" className="py-24 bg-[var(--color-brand-charcoal)] text-white">
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left Column: Vision & Approach Text */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-pink)] mb-3">
              Vision &amp; Philosophy
            </span>
            <h2
              ref={titleRef}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-off-white)] mb-6 leading-tight"
            >
              {headline ?? visionBlock.headline}
            </h2>
            <div ref={textRef} className="flex flex-col gap-4 text-base sm:text-lg text-[var(--color-brand-sky)] leading-relaxed">
              {visionBlock.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-white/10 rounded-2xl border border-white/20">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
              {approachBlock.headline}
            </h3>
            <div className="flex flex-col gap-3 text-sm sm:text-base text-[var(--color-brand-sky)] leading-relaxed">
              {approachBlock.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Illustration */}
        <div
          ref={imgRef}
          className="w-full aspect-square md:aspect-[4/3] bg-[#fbf9f4] rounded-[3rem] border-4 border-[var(--color-brand-navy)] shadow-[8px_8px_0px_0px_var(--color-brand-sky)] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden"
        >
          <img
            src="/caring-hands.png"
            alt="Gentle caring hands illustration"
            className="w-full h-full object-contain relative z-10 drop-shadow-sm rounded-[2rem]"
          />
        </div>
      </div>
    </section>
  );
};
