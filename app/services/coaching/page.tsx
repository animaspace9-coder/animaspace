import type { Metadata } from "next";
import { ServiceSubPage } from "@/app/components/sections/ServiceSubPage";
import { servicePages } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Coaching — Anima Space",
  description: "Goal-oriented coaching to build confidence, social skills, and a growth mindset in children and teens.",
};

export default function CoachingPage() {
  return <ServiceSubPage data={servicePages.coaching} />;
}
