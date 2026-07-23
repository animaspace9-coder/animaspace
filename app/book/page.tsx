import type { Metadata } from "next";
import { PageHero } from "@/app/components/sections/PageHero";
import { CalScheduler } from "@/app/components/booking/CalScheduler";
import { clinicDetails } from "@/app/data/booking";

export const metadata: Metadata = {
  title: "Book Online & In-Clinic Sessions — Anima Space",
  description: "Schedule an online video call or in-clinic appointment in Jubilee Hills with Prashanthi Simon. Google Calendar synced scheduling for child psychology & parent guidance.",
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
      "Select your preferred date and time. Our unified Google Calendar sync prevents double-booking across both online & clinic sessions.",
    colorClass: "bg-[var(--color-brand-pink)]",
  },
  {
    number: "03",
    title: "Instant Confirmation",
    description:
      "Receive automated Google Meet video call links for online sessions or clinic entry passes with directions for offline visits.",
    colorClass: "bg-[var(--color-brand-rose)]",
  },
];

export default function BookPage() {
  return (
    <>
      <PageHero
        title="Book an online or in-clinic session."
        subtitle="Direct Google Calendar synced appointment scheduling with Prashanthi Simon for child & adolescent counselling (ages 8–18) and parent guidance — Online or In-Clinic at Jubilee Hills, Hyderabad."
        colorClass="bg-[var(--color-brand-mauve)]/20"
      />

      {/* Main Google Calendar Scheduler Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <CalScheduler />
        </div>
      </section>

      {/* Online vs Offline Info Banner */}
      <section className="py-16 px-6 bg-white border-t border-[var(--color-brand-navy)]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-2">
              Flexible Consultation Modes
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-brand-navy)]">
              Managed in One Single Google Calendar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 rounded-[2rem] bg-[var(--color-brand-sky)]/30 border-3 border-[var(--color-brand-navy)] shadow-[6px_6px_0px_0px_var(--color-brand-navy)] flex flex-col justify-between gap-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border-2 border-[var(--color-brand-navy)] flex items-center justify-center text-2xl mb-4 shadow-sm">
                  🌐
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--color-brand-navy)] mb-2">
                  Online Video Consultations
                </h3>
                <p className="text-sm text-[var(--color-brand-espresso)] leading-relaxed">
                  Connect from anywhere via encrypted Google Meet calls. Perfect for busy parents, adolescents, or families outside Hyderabad.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border-2 border-[var(--color-brand-navy)] text-xs flex flex-col gap-1 text-[var(--color-brand-navy)]">
                <span className="font-bold text-emerald-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Unique Google Meet Auto-Generator
                </span>
                <span className="text-gray-600">Every online booking automatically generates a dedicated Meet URL sent to your Google Calendar &amp; email.</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-[2rem] bg-[var(--color-brand-pink)]/30 border-3 border-[var(--color-brand-navy)] shadow-[6px_6px_0px_0px_var(--color-brand-navy)] flex flex-col justify-between gap-6">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border-2 border-[var(--color-brand-navy)] flex items-center justify-center text-2xl mb-4 shadow-sm">
                  📍
                </div>
                <h3 className="font-heading text-2xl font-bold text-[var(--color-brand-navy)] mb-2">
                  In-Clinic Offline Consultations
                </h3>
                <p className="text-sm text-[var(--color-brand-espresso)] leading-relaxed">
                  Visit our calm, child-friendly center in Jubilee Hills, Hyderabad with dedicated play therapy rooms and sensory-friendly spaces.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border-2 border-[var(--color-brand-navy)] text-xs flex flex-col gap-1 text-[var(--color-brand-navy)]">
                <span className="font-bold text-[var(--color-brand-mauve)]">
                  📍 {clinicDetails.name}
                </span>
                <span className="text-gray-600">{clinicDetails.address} (Landmark: {clinicDetails.landmark})</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20 px-6 bg-[var(--color-brand-off-white)] border-t border-[var(--color-brand-charcoal)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-3">
              Zero Conflict Scheduling
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-brand-navy)]">
              How unified scheduling works
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
