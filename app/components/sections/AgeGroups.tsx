"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ageGroups } from "@/app/data/content";

// Arrow icon used in service list items
const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="18"
    height="17"
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`flex-shrink-0 ${className}`}
  >
    <path
      d="M21.08 11.4074C21.3609 11.1262 21.5187 10.7449 21.5187 10.3474C21.5187 9.94991 21.3609 9.56867 21.08 9.28742L14.39 2.59742C14.1056 2.33246 13.7296 2.18821 13.341 2.19507C12.9524 2.20192 12.5816 2.35935 12.3068 2.63417C12.0319 2.909 11.8745 3.27977 11.8676 3.66837C11.8608 4.05697 12.005 4.43307 12.27 4.71742L16.4 8.84742L1.5 8.84742C1.10217 8.84742 0.720644 9.00545 0.439339 9.28676C0.158035 9.56806 0 9.94959 0 10.3474C0 10.7452 0.158035 11.1268 0.43934 11.4081C0.720644 11.6894 1.10217 11.8474 1.5 11.8474L16.4 11.8474L12.27 15.9774C12.005 16.2618 11.8608 16.6379 11.8676 17.0265C11.8745 17.4151 12.0319 17.7858 12.3068 18.0607C12.5816 18.3355 12.9524 18.4929 13.341 18.4998C13.7296 18.5066 14.1056 18.3624 14.39 18.0974L21.08 11.4074Z"
      fill="currentColor"
    />
  </svg>
);

// Close (×) icon
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M9.88202 8.02706L13.8486 4.06044C14.1033 3.80815 14.2473 3.46502 14.249 3.10654C14.2507 2.74806 14.1099 2.4036 13.8576 2.14893C13.6053 1.89425 13.2622 1.75023 12.9037 1.74855C12.5452 1.74687 12.2008 1.88766 11.9461 2.13995L7.99742 6.10657L4.01285 2.13995C3.75767 1.90217 3.42016 1.77272 3.07141 1.77887C2.72267 1.78502 2.38993 1.9263 2.1433 2.17294C1.89666 2.41957 1.75539 2.75231 1.74923 3.10105C1.74308 3.44979 1.87253 3.78731 2.11031 4.04249L6.07693 8.02706L2.11031 11.9757C1.87253 12.2309 1.74308 12.5684 1.74923 12.9172C1.75539 13.2659 1.89666 13.5987 2.1433 13.8453C2.38993 14.0919 2.72267 14.2332 3.07141 14.2394C3.42016 14.2455 3.75767 14.1161 4.01285 13.8783L7.99742 9.91165L11.964 13.8783C12.2192 14.1161 12.5567 14.2455 12.9055 14.2394C13.2542 14.2332 13.587 14.0919 13.8336 13.8453C14.0802 13.5987 14.2215 13.2659 14.2277 12.9172C14.2338 12.5684 14.1044 12.2309 13.8666 11.9757L9.88202 8.02706Z"
      fill="currentColor"
    />
  </svg>
);

export const AgeGroups = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Close on Escape key
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
    <section
      aria-label="Support by age group"
      className="w-full overflow-hidden"
      style={{ minHeight: "520px" }}
    >
      {/* ── Desktop: side-by-side panels ── */}
      <div className="hidden md:flex w-full" style={{ minHeight: "520px" }}>
        {ageGroups.map((group) => {
          const isActive = activeId === group.id;
          const someOtherActive = activeId !== null && !isActive;

          return (
            <div
              key={group.id}
              className={`relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${group.colorClass}`}
              style={{
                flex: isActive ? "3.5" : someOtherActive ? "0.6" : "1",
              }}
              onClick={() => !isActive && toggle(group.id)}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              aria-label={`Age group ${group.ageRange} – ${isActive ? "close" : "view services"}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(group.id);
                }
              }}
            >
              {/* ── Collapsed / default state ── */}
              <div
                className={`absolute inset-0 flex flex-col items-start justify-end p-8 pb-12 transition-opacity duration-300 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                {/* Big age range number */}
                <p
                  className={`font-heading font-black leading-none select-none ${group.textColorClass}`}
                  style={{ fontSize: "clamp(3.5rem, 7vw, 7rem)" }}
                >
                  {group.ageRange}
                </p>
                <p
                  className={`font-heading font-bold text-lg mt-1 ${group.textColorClass} opacity-70`}
                >
                  {group.ageLabel}
                </p>

                {/* Character */}
                <div
                  className="absolute bottom-0 right-0 select-none pointer-events-none"
                  style={{ fontSize: "clamp(5rem, 10vw, 10rem)", lineHeight: 1, paddingRight: "1rem", paddingBottom: "0.25rem" }}
                  aria-hidden="true"
                >
                  {group.character}
                </div>
              </div>

              {/* ── Expanded state ── */}
              <div
                className={`absolute inset-0 flex flex-col p-8 transition-opacity duration-300 ${
                  isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                style={{ minWidth: "280px" }}
              >
                {/* Close button */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p
                      className={`font-heading font-black leading-none ${group.textColorClass}`}
                      style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)" }}
                    >
                      {group.ageRange}
                    </p>
                    <p className={`font-heading font-semibold text-base ${group.textColorClass} opacity-70`}>
                      {group.ageLabel}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveId(null);
                    }}
                    className={`mt-1 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-black/15 hover:bg-black/30 ${group.textColorClass}`}
                    aria-label="Close panel"
                  >
                    <CloseIcon />
                  </button>
                </div>

                {/* Services list */}
                <ul className="flex flex-col gap-2 mb-6 flex-grow">
                  {group.services.map((svc) => (
                    <li key={svc.label}>
                      <Link
                        href={svc.href}
                        onClick={(e) => e.stopPropagation()}
                        className={`group/item flex items-center gap-3 py-3 px-4 rounded-xl bg-white/20 hover:bg-white/40 transition-colors ${group.textColorClass} font-semibold text-sm`}
                      >
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white/30 group-hover/item:bg-white/60 transition-colors flex items-center justify-center">
                          <ArrowIcon />
                        </span>
                        {svc.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* All services CTA */}
                <Link
                  href="/services"
                  onClick={(e) => e.stopPropagation()}
                  className={`inline-flex items-center gap-2 self-start px-6 py-3 rounded-full font-bold text-sm transition-colors bg-white/20 hover:bg-white/40 ${group.textColorClass} border-2 border-white/40`}
                >
                  All services
                  <ArrowIcon className="w-3.5 h-3.5" />
                </Link>

                {/* Character (small, corner) */}
                <div
                  className="absolute bottom-4 right-4 select-none pointer-events-none opacity-30"
                  style={{ fontSize: "5rem", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  {group.character}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Mobile: vertical accordion ── */}
      <div className="md:hidden flex flex-col">
        {ageGroups.map((group) => {
          const isActive = activeId === group.id;
          return (
            <div key={group.id} className={`${group.colorClass} overflow-hidden`}>
              {/* Header row — always visible */}
              <button
                className="w-full flex items-center justify-between px-6 py-5"
                onClick={() => toggle(group.id)}
                aria-expanded={isActive}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl" aria-hidden="true">
                    {group.character}
                  </span>
                  <div className="text-left">
                    <p className={`font-heading font-black text-3xl leading-none ${group.textColorClass}`}>
                      {group.ageRange}
                    </p>
                    <p className={`font-heading text-sm font-semibold ${group.textColorClass} opacity-70`}>
                      {group.ageLabel}
                    </p>
                  </div>
                </div>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center bg-black/15 transition-transform duration-300 ${group.textColorClass} ${isActive ? "rotate-45" : ""}`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              {/* Expandable service list */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  isActive ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <ul className="flex flex-col gap-2 px-6 mb-4">
                  {group.services.map((svc) => (
                    <li key={svc.label}>
                      <Link
                        href={svc.href}
                        className={`flex items-center gap-3 py-3 px-4 rounded-xl bg-white/25 hover:bg-white/45 transition-colors ${group.textColorClass} font-semibold text-sm`}
                      >
                        <ArrowIcon className="w-4 h-4 flex-shrink-0" />
                        {svc.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="px-6">
                  <Link
                    href="/services"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-white/20 hover:bg-white/40 transition-colors border border-white/40 ${group.textColorClass}`}
                  >
                    All services <ArrowIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
