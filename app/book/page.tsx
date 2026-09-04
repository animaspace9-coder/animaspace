import type { Metadata } from "next";
import { ConsultationForm } from "@/app/components/booking/ConsultationForm";

export const metadata: Metadata = {
  title: "Book Your Consultation — Anima Space",
  description:
    "Ready to start your journey towards a healthier and happier life…take the first step now. Fill the form, talk to our experts at Anima Space.",
};

export default function BookPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="py-16 md:py-24 px-6 bg-[var(--color-brand-sky)] border-b border-[var(--color-brand-navy)]/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--color-brand-navy)]/70 mb-3 px-4 py-1.5 rounded-full bg-white/60 border border-[var(--color-brand-navy)]/20">
            Book Appointment
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-brand-navy)] leading-[1.15] tracking-tight mb-6">
            Book Your Consultation
          </h1>
          <p className="text-base sm:text-xl text-[var(--color-brand-espresso)] leading-relaxed max-w-2xl mx-auto font-medium">
            Ready to start your journey towards a healthier and happier life…take the first step now.. Fill the form, talk to our experts
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-3xl mx-auto">
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
