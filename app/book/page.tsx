import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { bookPageQuery } from "@/sanity/lib/queries";
import { PageHero } from "@/app/components/sections/PageHero";
import { CalScheduler } from "@/app/components/booking/CalScheduler";

export const metadata: Metadata = {
  title: "Book Your Consultation — Anima Space",
  description: "Schedule an online video call or in-clinic appointment with Prashanthi Simon for psychological counselling, coaching, career guidance, and training.",
};

const defaultSteps = [
  {
    number: "01",
    title: "Select Your Service & Mode",
    description:
      "Choose your service and preferred mode — Online Video Call or In-Clinic at our Hyderabad centre.",
    colorClass: "bg-[var(--color-brand-sky)]",
  },
  {
    number: "02",
    title: "Pick Your Date & Time",
    description:
      "Select your preferred date and time slot for your consultation session.",
    colorClass: "bg-[var(--color-brand-pink)]",
  },
  {
    number: "03",
    title: "Receive Confirmation",
    description:
      "You will receive a confirmation with session details, video call link (for online), or clinic location (for in-person).",
    colorClass: "bg-[var(--color-brand-rose)]",
  },
];

const colorClasses = [
  "bg-[var(--color-brand-sky)]",
  "bg-[var(--color-brand-pink)]",
  "bg-[var(--color-brand-rose)]",
];

export default async function BookPage() {
  const cms = await client
    .fetch(bookPageQuery, {}, { next: { revalidate: 60 } })
    .catch(() => null);

  const steps =
    cms?.steps && cms.steps.length > 0
      ? cms.steps.map((s: { number: string; title: string; description: string }, i: number) => ({
          number: s.number || `0${i + 1}`,
          title: s.title,
          description: s.description,
          colorClass: colorClasses[i % colorClasses.length],
        }))
      : defaultSteps;

  return (
    <>
      <PageHero
        title={cms?.pageHeroTitle ?? "Book Your Consultation"}
        subtitle={
          cms?.pageHeroSubtitle ??
          "Fill the form below to book a consultation with Prashanthi Simon. Talk to our experts and take the first step towards a healthier and happier life."
        }
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
              {cms?.stepsSectionTitle ?? "What happens after you book"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step: { number: string; title: string; description: string; colorClass: string }) => (
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
