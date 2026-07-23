"use client";

import React, { useRef } from "react";
import { MessageSquareText, UserCheck, HeartHandshake, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquareText,
    title: "Tell Us What's Important",
    description: "Share your child's challenges, feelings, and family goals in a quick, confidential intake.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Match With Prashanthi Simon",
    description: "Connect directly with an experienced registered practitioner specializing in child psychology.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Gentle, Child-Friendly Sessions",
    description: "Engage in CBT, play therapy, or parent guidance tailored to your child's age & unique needs.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Watch Your Child Thrive & Grow",
    description: "Build lasting emotional resilience, calmer family dynamics, and joyful daily interactions.",
  },
];

export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="how-it-works" className="py-20 px-6 bg-[#FAF8F5] border-t border-b border-gray-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-olive)] bg-[var(--color-brand-sky)]/30 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-[var(--color-brand-sky)]/60">
            Simple 4-Step Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] leading-tight">
            Start Your Child&apos;s Therapy Journey Towards a Happier, Calmer Home
          </h2>
        </div>

        {/* 4-Step Horizontal Journey Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-12 right-12 h-0.5 border-t-2 border-dashed border-[var(--color-brand-olive)]/30 z-0"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative z-10 bg-white rounded-2xl p-6 border-2 border-[var(--color-brand-navy)] shadow-[4px_4px_0px_0px_var(--color-brand-navy)] hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-4xl font-extrabold text-[var(--color-brand-mauve)]">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-brand-sky)]/30 border border-[var(--color-brand-navy)] flex items-center justify-center text-[var(--color-brand-olive)] shadow-xs">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[var(--color-brand-navy)] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[var(--color-brand-espresso)] leading-relaxed">
                    {step.description}
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
