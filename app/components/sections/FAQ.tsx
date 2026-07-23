"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import { faqs } from "@/app/data/content";
import { animateFadeUp, animateStaggerFadeUp } from "@/app/lib/gsap";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    animateFadeUp(headerRef.current);
    const validRefs = itemRefs.current.filter((r): r is HTMLDivElement => r !== null);
    animateStaggerFadeUp(validRefs, 0.2);
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col border-t border-[var(--color-brand-charcoal)]/20">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                ref={(el) => { itemRefs.current[i] = el; }}
                className="border-b border-[var(--color-brand-charcoal)]/20 py-6"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className="font-heading text-xl font-bold text-[var(--color-brand-navy)] pr-8">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[var(--color-brand-navy)] text-white' : ''}`}>
                    {isOpen ? (
                      <span className="text-2xl leading-none -mt-1">-</span>
                    ) : (
                      <span className="text-2xl leading-none -mt-1">+</span>
                    )}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 mt-4' : 'max-h-0'}`}
                >
                  <p className="text-[var(--color-brand-espresso)] pr-12">
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
