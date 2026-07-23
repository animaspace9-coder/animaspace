import { Hero } from "@/app/components/sections/Hero";
import { TrustStrip } from "@/app/components/sections/TrustStrip";
import { Services } from "@/app/components/sections/Services";
import { HowItWorks } from "@/app/components/sections/HowItWorks";
import { ApproachBlock } from "@/app/components/sections/ApproachBlock";
import { Team } from "@/app/components/sections/Team";
import { Testimonials } from "@/app/components/sections/Testimonials";
import { FAQ } from "@/app/components/sections/FAQ";
import { WhatsAppButton } from "@/app/components/ui/WhatsAppButton";
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
      <HowItWorks />
      <ApproachBlock />
      <Team />
      <Testimonials />
      <FAQ />
      <WhatsAppButton />
    </>
  );
}
