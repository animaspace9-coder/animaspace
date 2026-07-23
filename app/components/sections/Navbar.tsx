"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { PillNav } from "@/app/components/ui/PillNav";

export const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Blogs", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Book Session", href: "/book", isCta: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-brand-off-white)]/95 backdrop-blur-md border-b border-[var(--color-brand-charcoal)]/10">
      <PillNav
        logo="/logo.svg"
        logoAlt="Anima Space — Heal | Grow | Explore"
        items={navItems}
        activeHref={pathname}
        baseColor="var(--color-brand-navy)"
        pillColor="transparent"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#ffffff"
        ease="power2.out"
      />
    </header>
  );
};
