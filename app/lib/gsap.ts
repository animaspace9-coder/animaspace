"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger if we are on the client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Reusable animation configurations according to `emil-design-eng` 
// (subtle motion, no aggressive looping)
export const animateFadeUp = (element: Element | null, delay = 0) => {
  if (!element) return;
  gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const animateStaggerFadeUp = (elements: Element[], delay = 0) => {
  if (!elements.length) return;
  gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elements[0],
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

export { gsap, ScrollTrigger };
