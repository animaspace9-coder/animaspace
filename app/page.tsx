import { Hero } from "@/app/components/sections/Hero";
import { TrustStrip } from "@/app/components/sections/TrustStrip";
import { Services } from "@/app/components/sections/Services";
import { ApproachBlock } from "@/app/components/sections/ApproachBlock";
import { Team } from "@/app/components/sections/Team";
import { Testimonials } from "@/app/components/sections/Testimonials";
import { FAQ } from "@/app/components/sections/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anima Space — Child Psychology Center",
  description: "A safe, nurturing space for your child's emotional wellbeing. Expert child psychology and family counseling services.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <ApproachBlock />
      <Team />
      <Testimonials />
      <FAQ />
    </>
  );
}

