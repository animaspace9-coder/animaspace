"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { navigation, serviceSubNav, contactInfo } from "@/app/data/content";
import { animateFadeUp } from "@/app/lib/gsap";

/* ─── Hand-Drawn Kid Doodle Character SVG ─── */
const KidDoodleCharacter = () => (
  <svg
    viewBox="0 0 200 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-36 h-40 sm:w-44 sm:h-48 md:w-52 md:h-56 text-[var(--color-brand-navy)] drop-shadow-sm"
  >
    {/* Head outline - organic hand-drawn circle */}
    <path
      d="M100 45 C 138 43, 162 70, 160 108 C 158 144, 134 168, 98 166 C 60 164, 38 138, 42 98 C 45 60, 68 46, 100 45 Z"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Hair tufts - cute kid doodles */}
    <path
      d="M80 46 C 75 25, 88 18, 96 38 C 102 18, 118 20, 114 42 C 122 28, 134 32, 126 48"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Eyes - playful doodle dots */}
    <ellipse cx="78" cy="94" rx="7" ry="9" fill="currentColor" />
    <ellipse cx="122" cy="94" rx="7" ry="9" fill="currentColor" />
    <circle cx="76" cy="91" r="2.5" fill="white" />
    <circle cx="120" cy="91" r="2.5" fill="white" />

    {/* Rosy cheek circles */}
    <ellipse cx="64" cy="108" rx="8" ry="5" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 2" fill="none" opacity="0.6" />
    <ellipse cx="136" cy="108" rx="8" ry="5" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 2" fill="none" opacity="0.6" />

    {/* Big happy smile */}
    <path
      d="M78 120 Q100 144 122 120"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />

    {/* Hand-drawn crown doodle */}
    <path
      d="M70 42 L80 18 L95 32 L110 14 L125 32 L138 20 L130 44"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Body / shoulders doodle */}
    <path
      d="M58 160 C 50 185, 40 210, 30 218 M142 160 C 150 185, 160 210, 170 218"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

// Floating Kid Star Doodle
const StarDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" fill="none" className={`w-8 h-8 sm:w-10 sm:h-10 text-[var(--color-brand-navy)] ${className}`}>
    <path
      d="M30 5 L36 21 L53 23 L40 34 L44 51 L30 42 L16 51 L20 34 L7 23 L24 21 Z"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Floating Kid Sun Doodle
const SunDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 70 70" fill="none" className={`w-10 h-10 sm:w-12 sm:h-12 text-[var(--color-brand-navy)] ${className}`}>
    <circle cx="35" cy="35" r="16" stroke="currentColor" strokeWidth="3" fill="none" />
    <path d="M35 8 V14 M35 56 V62 M8 35 H14 M56 35 H62 M16 16 L21 21 M49 49 L54 54 M16 54 L21 49 M49 21 L54 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/* ─── Hand-Drawn Outline Kid Heart Doodle (Expands on Hover) ─── */
const HeartDoodle = () => (
  <span className="inline-block px-1 align-middle transition-transform duration-300 hover:scale-135 cursor-pointer group">
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 inline-block text-[var(--color-brand-navy)] group-hover:text-[var(--color-brand-mauve)] transition-colors drop-shadow-sm"
    >
      {/* Hand-drawn sketchy outline heart doodle */}
      <path
        d="M25 42 C 16 35, 6 27, 6 17 C 6 10, 11 5, 18 5 C 22 5, 24 8, 25 10 C 26 8, 28 5, 32 5 C 39 5, 44 10, 44 17 C 44 27, 34 35, 25 42 Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Inner sketchy stroke accent */}
      <path
        d="M24 39 C 18 34, 9 26, 9 18 C 9 13, 13 8, 18 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
    </svg>
  </span>
);

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const [currentYear, setCurrentYear] = React.useState<number>(() => new Date().getFullYear());

  useLayoutEffect(() => {
    if (wordmarkRef.current) {
      animateFadeUp(wordmarkRef.current);
    }
  }, []);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[var(--color-brand-off-white)] text-[var(--color-brand-navy)] pt-20 sm:pt-28 pb-8 overflow-hidden flex flex-col justify-between border-t border-[var(--color-brand-charcoal)]/10"
    >
      {/* ── Top Section ── */}
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-16">
          
          {/* Left Side: Full Logo + Contact Email */}
          <div className="flex flex-col items-start max-w-xl">
            <Link href="/" className="inline-block mb-4 group">
              <img
                src="/logo.svg"
                alt="Anima Space — Heal | Grow | Explore"
                className="h-24 sm:h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105 mix-blend-multiply contrast-150 brightness-90"
              />
            </Link>
            <span className="text-gray-400 font-medium text-base sm:text-lg mb-2 tracking-tight">
              Let's care together
            </span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="font-heading font-black text-2xl sm:text-4xl md:text-5xl tracking-tight text-[var(--color-brand-navy)] hover:text-[var(--color-brand-mauve)] transition-colors leading-tight break-all"
            >
              {contactInfo.email}
            </a>
            <p className="mt-4 text-sm sm:text-base text-[var(--color-brand-espresso)]/70 max-w-md leading-relaxed">
              Have questions or ready to begin? Reach out anytime to schedule an initial consultation with Prashanthi Simon.
            </p>
          </div>

          {/* Right Side: Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-14 text-sm">
            {/* Column 1: Anima Space Pages */}
            <div>
              <h4 className="text-gray-400 font-medium text-xs tracking-wider uppercase mb-4">
                AnimaSpace
              </h4>
              <ul className="flex flex-col gap-2.5 font-semibold">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-[var(--color-brand-mauve)] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/book"
                    className="hover:text-[var(--color-brand-mauve)] transition-colors"
                  >
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-gray-400 font-medium text-xs tracking-wider uppercase mb-4">
                Services
              </h4>
              <ul className="flex flex-col gap-2.5 font-semibold">
                {serviceSubNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-[var(--color-brand-mauve)] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Legal */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-gray-400 font-medium text-xs tracking-wider uppercase mb-4">
                Connect & Info
              </h4>
              <ul className="flex flex-col gap-2.5 font-semibold">
                <li>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                    className="hover:text-[var(--color-brand-mauve)] transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-[var(--color-brand-mauve)] transition-colors"
                  >
                    Blog & Articles
                  </Link>
                </li>
                <li>
                  <a
                    href="#legal"
                    className="hover:text-[var(--color-brand-mauve)] transition-colors"
                  >
                    Legal Info
                  </a>
                </li>
                <li>
                  <a
                    href="#disclaimer"
                    className="hover:text-[var(--color-brand-mauve)] transition-colors"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ── Center Kid Doodle & Wordmark ── */}
      <div className="relative w-full flex flex-col items-center justify-end pt-16 sm:pt-24 pb-0 overflow-hidden">
        
        {/* Floating Decorative Kid Doodles */}
        <div className="absolute top-10 left-1/4 -translate-x-12 animate-pulse hidden sm:block">
          <StarDoodle className="rotate-12" />
        </div>
        <div className="absolute top-14 right-1/4 translate-x-12 hidden sm:block">
          <SunDoodle className="-rotate-12" />
        </div>

        {/* Central Hand-Drawn Kid Doodle Character */}
        <div className="z-10 -mb-5 sm:-mb-8 md:-mb-12 pointer-events-none">
          <KidDoodleCharacter />
        </div>

        {/* ── Massive Bold Typography Wordmark (TinyWins style) ── */}
        <div
          ref={wordmarkRef}
          className="w-full text-center overflow-hidden leading-none select-none tracking-tighter"
        >
          <h2
            className="font-heading font-black text-[var(--color-brand-navy)] uppercase tracking-tight block w-full whitespace-nowrap"
            style={{
              fontSize: "clamp(3.5rem, 15vw, 20rem)",
              lineHeight: "0.85",
            }}
          >
            ANIMASPACE
          </h2>
        </div>
      </div>

      {/* ── Bottom Bar & Credit ── */}
      <div className="max-w-7xl mx-auto px-6 w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[var(--color-brand-espresso)]/70 border-t border-[var(--color-brand-charcoal)]/10 mt-2">
        <p>&copy; {currentYear} Anima Space. All rights reserved.</p>
        
        {/* "Made with love by skar" requirement */}
        <div className="flex items-center gap-1.5 text-sm sm:text-xs">
          <span>Made with</span>
          <HeartDoodle />
          <span>by</span>
          <a
            href="https://www.skarcreation.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[var(--color-brand-navy)] underline hover:text-[var(--color-brand-mauve)] transition-colors"
          >
            skar
          </a>
        </div>

        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-[var(--color-brand-navy)] transition-colors">
            Privacy Policy
          </a>
          <a href="#disclaimer" className="hover:text-[var(--color-brand-navy)] transition-colors">
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  );
};
