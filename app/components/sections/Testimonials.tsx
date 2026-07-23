"use client";

import React from "react";
import TestimonialsComponent, {
  type TestimonialItem,
} from "@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01";

const googleReviews: TestimonialItem[] = [
  {
    name: "Sarah T.",
    role: "Parent of 10-year-old",
    company: "Google Review",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto",
    rating: 5,
    content:
      "Anima Space completely changed our family dynamic. Our son is finally able to express his feelings without shutting down or having meltdowns.",
  },
  {
    name: "Mark L.",
    role: "Parent of 14-year-old",
    company: "Google Review",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto",
    rating: 5,
    content:
      "Prashanthi's approach is incredibly warm and understanding. We felt safe from the very first session and saw genuine progress in weeks.",
  },
  {
    name: "Ananya R.",
    role: "Mother of 8-year-old",
    company: "Google Review",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto",
    rating: 4.5,
    content:
      "The parent guidance sessions gave me practical tools I use every single day. I finally feel connected with my daughter.",
  },
  {
    name: "Vikram K.",
    role: "Father of 16-year-old",
    company: "Google Review",
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto",
    rating: 5,
    content:
      "Finding a child psychologist who teens actually trust is rare. Prashanthi helped my son navigate exam anxiety with immense confidence.",
  },
];

export const Testimonials = () => {
  return <TestimonialsComponent testimonials={googleReviews} />;
};
