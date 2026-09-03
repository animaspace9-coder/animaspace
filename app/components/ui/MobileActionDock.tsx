"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, CalendarCheck } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919866410936?text=Hi%20Prashanthi%20Simon%2C%20I%20would%20like%20to%20book%20a%20session%20with%20Psychology%20%26%20Counselling%20experts%20at%20Anima%20Space.";

export const MobileActionDock = () => {
  const pathname = usePathname();

  // Hide inside Sanity Studio
  if (pathname?.startsWith("/studio")) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--color-brand-off-white)]/98 backdrop-blur-sm border-t-2 border-[var(--color-brand-navy)]/15 shadow-[0_-4px_24px_rgba(10,28,51,0.1)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      role="toolbar"
      aria-label="Contact actions"
    >
      <div className="flex items-stretch h-16">
        {/* Book a Consultation */}
        <Link
          href="/book"
          id="mobile-dock-book"
          aria-label="Book a Consultation"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-[var(--color-brand-mauve)] text-white font-bold text-[11px] leading-tight px-2 min-h-[44px] hover:bg-[var(--color-brand-rose)] active:scale-95 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <CalendarCheck className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
          <span>Book</span>
        </Link>

        {/* Divider */}
        <div className="w-px bg-[var(--color-brand-navy)]/15 self-stretch" aria-hidden="true" />

        {/* WhatsApp Us */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-dock-whatsapp"
          aria-label="WhatsApp Us at Anima Space"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-white text-[var(--color-brand-navy)] font-bold text-[11px] leading-tight px-2 min-h-[44px] hover:bg-[#25D366] hover:text-white active:scale-95 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-navy)]"
        >
          <img
            src="/whatsapp-icon.svg"
            alt=""
            aria-hidden="true"
            className="w-5 h-5 object-contain flex-shrink-0"
          />
          <span>WhatsApp</span>
        </a>

        {/* Divider */}
        <div className="w-px bg-[var(--color-brand-navy)]/15 self-stretch" aria-hidden="true" />

        {/* Call Us */}
        <a
          href="tel:+919866410936"
          id="mobile-dock-call"
          aria-label="Call Us at Anima Space — +91 98664 10936"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 bg-white text-[var(--color-brand-navy)] font-bold text-[11px] leading-tight px-2 min-h-[44px] hover:bg-[var(--color-brand-navy)] hover:text-white active:scale-95 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-navy)]"
        >
          <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
          <span>Call Us</span>
        </a>
      </div>
    </div>
  );
};
