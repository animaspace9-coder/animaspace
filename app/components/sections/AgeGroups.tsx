"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ageGroups } from "@/app/data/content";

export const AgeGroups = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 md:py-28 px-6 bg-[var(--color-brand-off-white)] border-t border-[var(--color-brand-navy)]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-3">
            Tailored Care
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-4">
            Supporting Children, Adolescents &amp; Adults
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-brand-espresso)] leading-relaxed">
            Every individual has different experiences, strengths, challenges, and aspirations. Our services are designed to provide age-appropriate, individualised support at different stages of life.
          </p>
        </div>

        {/* 3 Age Group Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ageGroups.map((group) => (
            <div
              key={group.id}
              className={`${group.colorClass} rounded-[2.5rem] border-3 border-[var(--color-brand-navy)] p-8 sm:p-10 shadow-[6px_6px_0px_0px_var(--color-brand-navy)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300`}
            >
              <div>
                <span className="text-5xl mb-6 block">{group.character}</span>
                <h3 className={`font-heading text-2xl sm:text-3xl font-bold mb-4 ${group.textColorClass}`}>
                  {group.title}
                </h3>
                <p className={`text-base leading-relaxed mb-6 ${group.textColorClass === "text-white" ? "text-white/90" : "text-[var(--color-brand-espresso)]"}`}>
                  {group.description}
                </p>
              </div>

              <div className="pt-4 border-t border-black/10">
                <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${group.textColorClass === "text-white" ? "text-white/70" : "text-[var(--color-brand-navy)]/70"}`}>
                  Available Services:
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.services.map((svc) => (
                    <Link
                      key={svc.label}
                      href={svc.href}
                      className={`text-xs font-bold py-1.5 px-3 rounded-full border transition-colors ${
                        group.textColorClass === "text-white"
                          ? "bg-white/20 border-white/40 text-white hover:bg-white hover:text-[var(--color-brand-navy)]"
                          : "bg-white border-[var(--color-brand-navy)] text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-navy)] hover:text-white"
                      }`}
                    >
                      {svc.label} &rarr;
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
