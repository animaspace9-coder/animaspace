"use client";

import React, { useRef, useLayoutEffect } from "react";
import { team } from "@/app/data/content";
import { Button } from "@/app/components/ui/Button";
import gsap from "gsap";

export const Team = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [titleRef.current, cardRef.current],
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const expert = team[0];

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-6 bg-[var(--color-brand-sky)] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-brand-off-white)] border-2 border-[var(--color-brand-navy)] text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--color-brand-navy)] mb-4 shadow-sm">
            Clinical Leadership
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-brand-navy)] tracking-tight">
            Meet Our Expert
          </h2>
        </div>

        {/* High Authoritative Centered Profile Card */}
        <div
          ref={cardRef}
          className="bg-[var(--color-brand-off-white)] rounded-[2.5rem] md:rounded-[3rem] border-4 border-[var(--color-brand-navy)] shadow-[8px_8px_0px_0px_var(--color-brand-navy)] md:shadow-[12px_12px_0px_0px_var(--color-brand-navy)] overflow-hidden p-6 sm:p-10 md:p-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left/Top: Clean Photo Placeholder Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] bg-[var(--color-brand-pink)]/40 border-4 border-[var(--color-brand-navy)] flex flex-col items-center justify-center p-6 text-center shadow-[6px_6px_0px_0px_var(--color-brand-navy)] overflow-hidden group">
                {/* Decorative Icon */}
                <div className="w-20 h-20 rounded-full bg-[var(--color-brand-mauve)] border-3 border-[var(--color-brand-navy)] flex items-center justify-center mb-4 text-3xl text-white shadow-md">
                  👩‍⚕️
                </div>
                
                <p className="font-heading font-bold text-[var(--color-brand-navy)] text-lg leading-snug">
                  [ Client Photo Placeholder ]
                </p>
                <p className="text-xs text-[var(--color-brand-espresso)] font-medium mt-1">
                  Prashanthi Simon
                  <br />
                  <span className="text-[11px] opacity-75">Lead Child Psychologist</span>
                </p>

                {/* Corner Accent Pills */}
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[var(--color-brand-sky)] border-2 border-[var(--color-brand-navy)]" />
                <div className="absolute bottom-4 left-4 w-7 h-7 rotate-12 bg-[var(--color-brand-rose)] border-2 border-[var(--color-brand-navy)] rounded-md" />
              </div>

              {/* Experience Badge */}
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-brand-navy)] text-white text-xs sm:text-sm font-bold shadow-sm">
                <span>⭐</span>
                <span>{expert.experience || "15+ Years Clinical Experience"}</span>
              </div>
            </div>

            {/* Right/Bottom: High-Authority Bio & Credentials */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Role Tag */}
              <span className="text-sm font-extrabold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-2">
                {expert.role}
              </span>

              {/* Name */}
              <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-4 tracking-tight">
                {expert.name}
              </h3>

              {/* Bio Paragraph */}
              <p className="text-base sm:text-lg text-[var(--color-brand-espresso)] leading-relaxed mb-6">
                {expert.bio}
              </p>

              {/* Qualifications */}
              <div className="w-full mb-6 pt-4 border-t-2 border-[var(--color-brand-charcoal)]/10">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-navy)] mb-3">
                  Credentials & Clinical Expertise
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {expert.qualifications?.map((qual, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm sm:text-base font-semibold text-[var(--color-brand-navy)]">
                      <span className="w-6 h-6 rounded-full bg-[var(--color-brand-sky)] border border-[var(--color-brand-navy)] flex items-center justify-center text-xs flex-shrink-0">
                        ✓
                      </span>
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specialties Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {expert.specialties?.map((spec, idx) => (
                  <span
                    key={idx}
                    className="py-1.5 px-3.5 bg-[var(--color-brand-sky)] border-2 border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] text-xs sm:text-sm font-bold rounded-full"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <Button href="/book" variant="primary">
                Book Session with Prashanthi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
