import type { Metadata } from "next";
import { ServiceSubPage } from "@/app/components/sections/ServiceSubPage";
import { servicePages } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Training — Anima Space",
  description: "Parent and educator training programmes to build emotionally safe environments for every child.",
};

export default function TrainingPage() {
  return <ServiceSubPage data={servicePages.training} />;
}
