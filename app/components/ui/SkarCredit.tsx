"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkarCreditProps {
  /** Main accent color hex (e.g., "#A67D76" - Mauve, "#0A1C33" - Navy, "#BC8E83" - Rose Gold) */
  accentColor?: string;
  /** Words to cycle through in the animated badge */
  words?: string[];
  /** Optional company name for copyright */
  companyName?: string;
  /** Background container styling (optional) */
  className?: string;
}

export default function SkarCredit({
  accentColor = "#0A1C33",
  words = ["<3", "with love", "❤️", "passion"],
  companyName,
  className = "py-4 text-[var(--color-brand-espresso)]/70 text-xs sm:text-sm font-medium",
}: SkarCreditProps) {
  const [index, setIndex] = useState(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [words]);

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-2 text-center ${className}`}>
      {companyName && (
        <>
          <span>&copy; {currentYear} {companyName}. All Rights Reserved.</span>
          <span className="hidden sm:inline opacity-40">•</span>
        </>
      )}

      <div className="flex items-center justify-center gap-1.5">
        <span>Made with</span>

        {/* Animated Badge */}
        <span 
          className="inline-flex items-center justify-center relative overflow-hidden min-w-[54px] h-6 px-2 mx-0.5 rounded border align-middle text-xs font-mono font-bold"
          style={{
            borderColor: `${accentColor}40`,
            backgroundColor: `${accentColor}1A`,
            color: accentColor,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="inline-block"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </span>

        <span>by</span>

        {/* SKAR Link */}
        <a
          href="https://www.skarcreation.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block font-extrabold transition-colors group px-1"
          style={{ color: accentColor }}
        >
          <span>skar</span>
          <span
            className="absolute bottom-0 left-0 w-full h-[2px] transition-colors rounded-full group-hover:bg-[var(--color-brand-navy)]"
            style={{ backgroundColor: accentColor }}
          />
        </a>
      </div>
    </div>
  );
}
