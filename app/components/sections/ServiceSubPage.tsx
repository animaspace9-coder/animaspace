"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/Button";
import { serviceSubNav } from "@/app/data/content";
import { animateFadeUp, animateStaggerFadeUp } from "@/app/lib/gsap";

interface ServicePageData {
  slug: string;
  title: string;
  tagline: string;
  colorClass: string;
  bgAccent: string;
  icon: string;
  intro: string;
  whatToExpect: string[];
  whoItsFor: string;
  faqs: { question: string; answer: string }[];
}

export const ServiceSubPage = ({ data }: { data: ServicePageData }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  useLayoutEffect(() => {
    animateFadeUp(titleRef.current, 0.05);
    animateFadeUp(contentRef.current, 0.15);
    const validRefs = stepRefs.current.filter((r): r is HTMLLIElement => r !== null);
    animateStaggerFadeUp(validRefs, 0.12);
  }, []);

  return (
    <>
      {/* Hero Banner */}
      <section className={`${data.colorClass} pt-16 pb-24 px-6`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/services"
              className="text-sm font-semibold text-[var(--color-brand-navy)]/60 hover:text-[var(--color-brand-navy)] transition-colors"
            >
              ← All Services
            </Link>
            <span className="text-[var(--color-brand-navy)]/30">/</span>
            {serviceSubNav.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`text-sm font-semibold transition-colors ${
                  s.href === `/services/${data.slug}`
                    ? "text-[var(--color-brand-navy)]"
                    : "text-[var(--color-brand-navy)]/50 hover:text-[var(--color-brand-navy)]"
                }`}
              >
                {s.name}
              </Link>
            ))}
          </div>
          <span className="text-5xl mb-6 block">{data.icon}</span>
          <h1
            ref={titleRef}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-brand-navy)] leading-[1.05] tracking-tight mb-4"
          >
            {data.title}
          </h1>
          <p className="font-heading text-2xl md:text-3xl text-[var(--color-brand-navy)]/70 font-medium italic">
            &ldquo;{data.tagline}&rdquo;
          </p>
        </div>
      </section>

      {/* Intro + What to Expect */}
      <section className="py-24 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Intro */}
          <div ref={contentRef}>
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-6">
              About this service
            </span>
            <p className="text-xl text-[var(--color-brand-espresso)] leading-relaxed mb-8">
              {data.intro}
            </p>
            <div className="p-6 bg-[var(--color-brand-sky)]/30 border-2 border-[var(--color-brand-navy)] rounded-2xl">
              <h3 className="font-heading font-bold text-[var(--color-brand-navy)] mb-3">Who this is for</h3>
              <p className="text-[var(--color-brand-espresso)]">{data.whoItsFor}</p>
            </div>
          </div>

          {/* What to Expect */}
          <div>
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-6">
              What to expect
            </span>
            <ol className="flex flex-col gap-4">
              {data.whatToExpect.map((step, i) => (
                <li
                  key={i}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className="flex gap-4 items-start"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--color-brand-navy)] text-white font-bold flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <p className="text-[var(--color-brand-espresso)] leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-brand-navy)]">
              Common questions
            </h2>
          </div>
          <div className="flex flex-col border-t border-[var(--color-brand-charcoal)]/20">
            {data.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="border-b border-[var(--color-brand-charcoal)]/20 py-6"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left focus:outline-none"
                  >
                    <h3 className="font-heading text-xl font-bold text-[var(--color-brand-navy)] pr-8">
                      {faq.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[var(--color-brand-navy)] flex items-center justify-center transition-colors ${
                        isOpen ? "bg-[var(--color-brand-navy)] text-white" : "text-[var(--color-brand-navy)]"
                      }`}
                    >
                      <span className="text-xl leading-none">{isOpen ? "−" : "+"}</span>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-48 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-[var(--color-brand-espresso)] pr-12">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 px-6 bg-[var(--color-brand-mauve)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to get started with {data.title}?
          </h2>
          <p className="text-white/80 text-xl mb-10">
            Book an introductory consultation session — Prashanthi Simon will make sure this is the right fit for your child.
          </p>
          <Button href="/book" variant="outline">
            Book Session
          </Button>
        </div>
      </section>
    </>
  );
};
