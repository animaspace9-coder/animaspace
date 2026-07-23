import type { Metadata } from "next";
import { ServiceSubPage } from "@/app/components/sections/ServiceSubPage";
import { servicePages } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Therapy — Anima Space",
  description: "Evidence-based therapy for children and teens including CBT, play therapy, and family systems therapy.",
};

export default function TherapyPage() {
  return <ServiceSubPage data={servicePages.therapy} />;
}
