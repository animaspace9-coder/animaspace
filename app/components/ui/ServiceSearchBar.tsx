"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronDown, ArrowRight, Sparkles } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  href: string;
  description: string;
  keywords: string[];
}

const servicesList: ServiceItem[] = [
  {
    id: "counselling",
    title: "Psychological Counselling",
    shortTitle: "Counselling",
    icon: "💬",
    href: "/services/counselling",
    description: "Anxiety, stress, emotional well-being & relationships",
    keywords: ["anxiety", "stress", "depression", "child", "adolescent", "therapy", "relationships", "emotional"],
  },
  {
    id: "career-counselling",
    title: "Career Counselling",
    shortTitle: "Career Guidance",
    icon: "🧭",
    href: "/services/career-counselling",
    description: "Academic streams, career planning & professional transitions",
    keywords: ["career", "students", "college", "aptitude", "jobs", "course selection", "future"],
  },
  {
    id: "coaching",
    title: "Coaching",
    shortTitle: "Well-being Coaching",
    icon: "🎯",
    href: "/services/coaching",
    description: "Goal-setting, performance, confidence & personal growth",
    keywords: ["coaching", "goals", "confidence", "communication", "leadership", "performance"],
  },
  {
    id: "emotional-well-being",
    title: "Emotional Well-being & Personal Growth",
    shortTitle: "Emotional Well-being",
    icon: "🌿",
    href: "/services/emotional-well-being",
    description: "Emotional well-being, self-awareness, resilience & personal growth",
    keywords: ["emotional well-being", "personal growth", "resilience", "self-awareness", "coping", "confidence", "healing", "inner peace", "mindfulness", "self-discovery"],
  },
  {
    id: "training",
    title: "Training",
    shortTitle: "Training & Workshops",
    icon: "📚",
    href: "/services/training",
    description: "Workshops for schools, educators, parents & organisations",
    keywords: ["training", "workshops", "schools", "parents", "workplace", "teachers", "organisations"],
  },
];

interface ServiceSearchBarProps {
  className?: string;
  compact?: boolean;
}

export function ServiceSearchBar({ className = "", compact = false }: ServiceSearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter services by title or keywords
  const filteredServices = servicesList.filter((service) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      service.title.toLowerCase().includes(q) ||
      service.shortTitle.toLowerCase().includes(q) ||
      service.description.toLowerCase().includes(q) ||
      service.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });

  const handleSelect = (href: string) => {
    setIsOpen(false);
    setQuery("");
    router.push(href);
  };

  return (
    <div ref={dropdownRef} className={`relative z-50 ${className}`}>
      {/* Search Input Box */}
      <div
        className={`flex items-center gap-2 px-3.5 py-2 bg-white rounded-full border-2 border-[var(--color-brand-navy)] shadow-[2px_2px_0px_0px_var(--color-brand-navy)] transition-all ${
          isOpen ? "ring-2 ring-[var(--color-brand-mauve)]/40 shadow-[4px_4px_0px_0px_var(--color-brand-navy)]" : ""
        }`}
      >
        <Search className="w-4 h-4 text-[var(--color-brand-navy)]/70 flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search Your Service..."
          aria-label="Search Your Service"
          className="w-40 sm:w-44 md:w-48 lg:w-52 bg-transparent text-xs font-semibold text-[var(--color-brand-navy)] placeholder-[var(--color-brand-navy)]/60 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          className="flex items-center gap-1 p-0.5 text-xs font-bold text-[var(--color-brand-navy)] hover:text-[var(--color-brand-mauve)] transition-colors cursor-pointer"
        >
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-[var(--color-brand-mauve)]" : ""
            }`}
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 mt-2 w-[calc(100vw-2.5rem)] max-w-sm sm:w-96 bg-white rounded-2xl border-3 border-[var(--color-brand-navy)] shadow-[6px_6px_0px_0px_var(--color-brand-navy)] overflow-hidden z-50 animate-in fade-in-0 zoom-in-95 duration-150 max-h-[380px] overflow-y-auto">
          <div className="px-4 py-2.5 bg-[var(--color-brand-off-white)] border-b-2 border-[var(--color-brand-navy)]/15 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-brand-mauve)] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Search Services</span>
            </span>
            <span className="text-[10px] text-[var(--color-brand-espresso)]/60 font-semibold">
              {filteredServices.length} {filteredServices.length === 1 ? "service" : "services"}
            </span>
          </div>

          <div className="p-2 space-y-1">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleSelect(service.href)}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-[var(--color-brand-sky)]/30 border border-transparent hover:border-[var(--color-brand-navy)]/20 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-8 h-8 rounded-lg bg-white border border-[var(--color-brand-navy)]/20 flex items-center justify-center text-base flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      {service.icon}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-[var(--color-brand-navy)] group-hover:text-[var(--color-brand-mauve)] transition-colors truncate">
                        {service.title}
                      </h4>
                      <p className="text-[11px] text-[var(--color-brand-espresso)]/75 truncate">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--color-brand-navy)]/40 group-hover:text-[var(--color-brand-navy)] group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                </button>
              ))
            ) : (
              <div className="p-5 text-center text-xs text-[var(--color-brand-espresso)]/70">
                No matching service for &ldquo;{query}&rdquo;.
                <div className="mt-2">
                  <button
                    onClick={() => {
                      setQuery("");
                      router.push("/services");
                    }}
                    className="text-xs font-bold text-[var(--color-brand-navy)] hover:underline"
                  >
                    View all services &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
