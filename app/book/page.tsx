import type { Metadata } from "next";
import { PageHero } from "@/app/components/sections/PageHero";
import { CalScheduler } from "@/app/components/booking/CalScheduler";

export const metadata: Metadata = {
  title: "Book Online & In-Clinic Sessions — Anima Space",
  description: "Schedule an online video call or in-clinic appointment in Jubilee Hills with Prashanthi Simon. Child psychology & parent guidance.",
};

const steps = [
  {
    number: "01",
    title: "Select Consultation Mode",
    description:
      "Choose between Online Video Call (Google Meet) or In-Clinic Visit at Jubilee Hills, Hyderabad.",
    colorClass: "bg-[var(--color-brand-sky)]",
  },
  {
    number: "02",
    title: "Pick Available Date & Slot",
    description:
      "Select your preferred date and time for a 50-minute consultation or specialized session.",
    colorClass: "bg-[var(--color-brand-pink)]",
  },
  {
    number: "03",
    title: "Instant Confirmation",
    description:
      "Receive automated video call links for online sessions or clinic location passes for in-person visits.",
    colorClass: "bg-[var(--color-brand-rose)]",
  },
];

export default function BookPage() {
  return (
    <>
      <PageHero
        title="Book an online or in-clinic session."
        subtitle="Schedule directly with Prashanthi Simon for child & adolescent counselling (ages 8–18) and parent guidance — Online or In-Clinic at Jubilee Hills, Hyderabad."
        colorClass="bg-[var(--color-brand-mauve)]/20"
      />

      {/* Main Interactive Scheduler Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <CalScheduler />
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 px-6 bg-white border-t border-[var(--color-brand-charcoal)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-3">
              Simple &amp; Direct
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-brand-navy)]">
              What happens after you schedule
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`${step.colorClass} rounded-[2rem] border-3 border-[var(--color-brand-navy)] p-8 shadow-[5px_5px_0px_0px_var(--color-brand-navy)]`}
              >
                <span className="font-heading text-4xl font-black text-[var(--color-brand-navy)]/30 block mb-4">
                  {step.number}
                </span>
                <h3 className="font-heading text-xl font-bold text-[var(--color-brand-navy)] mb-3">
                  {step.title}
                </h3>
                <p className="text-[var(--color-brand-espresso)] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
