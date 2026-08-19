"use client";

import React from "react";
import TestimonialsComponent, {
  type TestimonialItem,
} from "@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01";

const avatars = [
  "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto",
  "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto",
  "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto",
  "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png?width=40&height=40&format=auto",
];

const defaultReviews: TestimonialItem[] = [
  {
    name: "Sarah T.",
    role: "Parent",
    company: "Google Review",
    avatar: avatars[0],
    rating: 5,
    content:
      "Anima Space completely changed our family dynamic. Our son is finally able to express his feelings without shutting down or having meltdowns.",
  },
  {
    name: "Mark L.",
    role: "Parent",
    company: "Google Review",
    avatar: avatars[1],
    rating: 5,
    content:
      "Prashanthi's approach is incredibly warm and understanding. We felt safe from the very first session and saw genuine progress in weeks.",
  },
  {
    name: "Ananya R.",
    role: "Parent",
    company: "Google Review",
    avatar: avatars[2],
    rating: 4.5,
    content:
      "The parent guidance sessions gave me practical tools I use every single day. I finally feel connected with my daughter.",
  },
  {
    name: "Vikram K.",
    role: "Parent",
    company: "Google Review",
    avatar: avatars[3],
    rating: 5,
    content:
      "Finding a child psychologist who teens actually trust is rare. Prashanthi helped my son navigate exam anxiety with immense confidence.",
  },
];

interface CmsTestimonial { quote: string; author: string }
interface TestimonialsProps { testimonials?: CmsTestimonial[] }

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  // If CMS has testimonials, map them to the UI component format
  const items: TestimonialItem[] = testimonials && testimonials.length > 0
    ? testimonials.map((t, i) => ({
        name: t.author,
        role: "",
        company: "Anima Space Client",
        avatar: avatars[i % avatars.length],
        rating: 5,
        content: t.quote,
      }))
    : defaultReviews;

  return <TestimonialsComponent testimonials={items} />;
};
