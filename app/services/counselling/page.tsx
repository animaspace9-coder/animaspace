import type { Metadata } from "next";
import { ServiceSubPage } from "@/app/components/sections/ServiceSubPage";
import { servicePages } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Counselling — Anima Space",
  description: "One-on-one counselling for children and teenagers. A safe, warm, confidential space to be heard.",
};

export default function CounsellingPage() {
  return <ServiceSubPage data={servicePages.counselling} />;
}
