"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import { faqs as defaultFaqs } from "@/app/data/content";
import { animateFadeUp, animateStaggerFadeUp } from "@/app/lib/gsap";

interface FaqItem { question: string; answer: string }
interface FAQProps { faqs?: FaqItem[] }

export const FAQ = ({ faqs }: FAQProps) => {
  const resolvedFaqs = faqs ?? defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    animateFadeUp(headerRef.current);
    const validRefs = itemRefs.current.filter((r): r is HTMLDivElement => r !== null);
    animateStaggerFadeUp(validRefs, 0.15);
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-24 pb-12 px-6 bg-[var(--color-brand-off-white)]">
      <div className="max-w-4xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-4 px-4 py-1.5 rounded-full bg-[var(--color-brand-rose)]/30 border border-[var(--color-brand-rose)]/40">
            Questions &amp; Answers
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col border-t-2 border-[var(--color-brand-navy)]/15">
          {resolvedFaqs.map((faq: FaqItem, i: number) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <div
                key={i}
                ref={(el) => { itemRefs.current[i] = el; }}
                className="border-b-2 border-[var(--color-brand-navy)]/15"
              >
                <button
                  id={btnId}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full flex items-center justify-between text-left py-5 gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-mauve)] rounded-sm"
                >
                  <span className="font-heading text-lg md:text-xl font-bold text-[var(--color-brand-navy)] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[var(--color-brand-navy)] flex items-center justify-center transition-colors duration-200 ${isOpen ? "bg-[var(--color-brand-navy)] text-white" : "bg-transparent text-[var(--color-brand-navy)]"}`}
                    aria-hidden="true"
                  >
                    <span className="text-xl leading-none font-bold select-none" style={{ marginTop: "-2px" }}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
                >
                  <p className="text-base text-[var(--color-brand-espresso)] leading-relaxed pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
