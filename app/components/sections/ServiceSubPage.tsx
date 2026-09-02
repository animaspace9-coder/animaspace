"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/Button";
import { serviceSubNav } from "@/app/data/content";
import { animateFadeUp } from "@/app/lib/gsap";
import { Check } from "lucide-react";

interface ServicePageData {
  slug: string;
  title: string;
  tagline: string;
  colorClass: string;
  bgAccent: string;
  icon: string;
  intro: string;
  bulletPoints?: string[];
  whoItsFor?: string;
}

export const ServiceSubPage = ({ data }: { data: ServicePageData }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    animateFadeUp(titleRef.current, 0.05);
    animateFadeUp(contentRef.current, 0.15);
  }, []);

  return (
    <>
      {/* Hero Banner */}
      <section className={`${data.colorClass} pt-16 pb-24 px-6 border-b border-[var(--color-brand-navy)]/10`}>
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Nav */}
          <div className="flex flex-wrap items-center gap-3 mb-8 text-xs sm:text-sm font-semibold">
            <Link
              href="/services"
              className="text-[var(--color-brand-navy)]/70 hover:text-[var(--color-brand-navy)] transition-colors"
            >
              &larr; Our Services
            </Link>
            <span className="text-[var(--color-brand-navy)]/30">/</span>
            {serviceSubNav.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`transition-colors px-2.5 py-1 rounded-full ${
                  s.href === `/services/${data.slug}`
                    ? "bg-white/80 text-[var(--color-brand-navy)] font-bold shadow-xs"
                    : "text-[var(--color-brand-navy)]/60 hover:text-[var(--color-brand-navy)]"
                }`}
              >
                {s.name}
              </Link>
            ))}
          </div>

          <span className="text-5xl mb-6 block">{data.icon}</span>
          <h1
            ref={titleRef}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-brand-navy)] leading-[1.05] tracking-tight mb-4"
          >
            {data.title}
          </h1>
          {data.tagline && (
            <p className="font-heading text-xl sm:text-2xl text-[var(--color-brand-navy)]/80 font-medium">
              {data.tagline}
            </p>
          )}
        </div>
      </section>

      {/* Intro + Bullet Points Focus Areas */}
      <section className="py-20 md:py-28 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left / Main Intro */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col gap-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)]">
              About This Pathway
            </span>
            <p className="text-lg sm:text-xl text-[var(--color-brand-espresso)] leading-relaxed">
              {data.intro}
            </p>
            {data.whoItsFor && (
              <div className="p-6 bg-white rounded-2xl border-2 border-[var(--color-brand-navy)] shadow-sm">
                <h3 className="font-heading font-bold text-sm text-[var(--color-brand-navy)] mb-2 uppercase tracking-wide">
                  Who It&apos;s For
                </h3>
                <p className="text-sm text-[var(--color-brand-espresso)] leading-relaxed">
                  {data.whoItsFor}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Key Areas of Support */}
          {data.bulletPoints && data.bulletPoints.length > 0 && (
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[2rem] border-3 border-[var(--color-brand-navy)] shadow-[6px_6px_0px_0px_var(--color-brand-navy)]">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] block mb-4">
                What We Address
              </span>
              <ul className="space-y-3">
                {data.bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base font-medium text-[var(--color-brand-navy)]">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-brand-sky)] border border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] flex items-center justify-center text-xs font-bold">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 px-6 bg-[var(--color-brand-navy)] text-white text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Book a Consultation to explore our services
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-brand-sky)] mb-8 max-w-2xl">
            Whether you are looking for counselling, coaching, emotional well-being support, career guidance, or training, Anima Space offers a safe space to understand where you are and develop the tools to move forward.
          </p>
          <Button href="/book" variant="outline" className="text-white border-white hover:bg-white hover:text-[var(--color-brand-navy)]">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  );
};
