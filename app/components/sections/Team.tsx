"use client";

import React, { useRef, useLayoutEffect } from "react";
import { meetPrashanthi } from "@/app/data/content";
import { Button } from "@/app/components/ui/Button";
import gsap from "gsap";

interface TeamMember {
  name?: string;
  title?: string;
  role?: string;
  bio1?: string;
  bio2?: string;
  bio?: string;
  image?: string;
  qualifications?: string[];
  specialties?: string[];
}
interface TeamProps {
  member?: TeamMember;
}

export const Team = ({ member }: TeamProps) => {
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

  const role = member?.role ?? meetPrashanthi.role;
  const bio1 = member?.bio1 ?? meetPrashanthi.bio1;
  const bio2 = member?.bio2 ?? meetPrashanthi.bio2;
  const image = member?.image ?? meetPrashanthi.image;
  const qualifications = member?.qualifications ?? meetPrashanthi.qualifications;

  return (
    <section
      id="about-prashanthi"
      ref={containerRef}
      className="py-20 md:py-28 px-6 bg-[var(--color-brand-sky)] overflow-hidden border-t border-[var(--color-brand-navy)]/10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-brand-off-white)] border-2 border-[var(--color-brand-navy)] text-xs md:text-sm font-bold uppercase tracking-wider text-[var(--color-brand-navy)] mb-4 shadow-sm">
            About the Founder
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-brand-navy)] tracking-tight">
            Meet Prashanthi Simon
          </h2>
        </div>

        {/* Profile Card */}
        <div
          ref={cardRef}
          className="bg-[var(--color-brand-off-white)] rounded-[2.5rem] md:rounded-[3rem] border-4 border-[var(--color-brand-navy)] shadow-[8px_8px_0px_0px_var(--color-brand-navy)] md:shadow-[12px_12px_0px_0px_var(--color-brand-navy)] overflow-hidden p-6 sm:p-10 md:p-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Column: Photo Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2rem] bg-white border-4 border-[var(--color-brand-navy)] shadow-[6px_6px_0px_0px_var(--color-brand-navy)] overflow-hidden group">
                <img
                  src={image}
                  alt="Prashanthi Simon"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                {/* Corner Accent Shapes */}
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[var(--color-brand-sky)] border-2 border-[var(--color-brand-navy)] shadow-sm" />
                <div className="absolute bottom-4 left-4 w-7 h-7 rotate-12 bg-[var(--color-brand-rose)] border-2 border-[var(--color-brand-navy)] rounded-md shadow-sm" />
              </div>

              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-brand-navy)] text-white text-xs sm:text-sm font-bold shadow-sm">
                <span>⭐</span>
                <span>15+ Years Experience</span>
              </div>
            </div>

            {/* Right Column: Bio & Role */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Role Title */}
              <p className="text-sm sm:text-base font-extrabold text-[var(--color-brand-mauve)] mb-3 leading-snug">
                {role}
              </p>

              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-brand-navy)] mb-5 tracking-tight">
                Prashanthi Simon
              </h3>

              {/* Bio Paragraphs */}
              <div className="flex flex-col gap-4 text-base sm:text-lg text-[var(--color-brand-espresso)] leading-relaxed mb-6">
                <p>{bio1}</p>
                <p>{bio2}</p>
              </div>

              {/* Qualifications */}
              {qualifications && qualifications.length > 0 && (
                <div className="w-full mb-8 pt-4 border-t-2 border-[var(--color-brand-charcoal)]/10">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {qualifications.map((qual, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[var(--color-brand-navy)]"
                      >
                        <span className="w-5 h-5 rounded-full bg-[var(--color-brand-sky)] border border-[var(--color-brand-navy)] flex items-center justify-center text-xs flex-shrink-0">
                          ✓
                        </span>
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Button */}
              <Button href="/book" variant="primary">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
