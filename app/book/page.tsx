import type { Metadata } from "next";
import { Button } from "@/app/components/ui/Button";
import { contactInfo } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Book Appointment — Anima Space",
  description: "Book an appointment or introductory consultation with Prashanthi Simon at Anima Space.",
};

const steps = [
  {
    number: "01",
    title: "Introductory consultation",
    description:
      "A consultation session with Prashanthi Simon — you share what's on your mind; she listens and helps you understand what kind of support makes sense.",
    colorClass: "bg-[var(--color-brand-sky)]",
  },
  {
    number: "02",
    title: "Initial assessment",
    description:
      "A 60-minute session (usually with parents first, then the child) to build a full picture of your child's world, strengths, and challenges.",
    colorClass: "bg-[var(--color-brand-pink)]",
  },
  {
    number: "03",
    title: "Your child's plan",
    description:
      "Prashanthi Simon shares a clear written plan — what approach, how often, what you can expect to see change, and when you'll review progress together.",
    colorClass: "bg-[var(--color-brand-rose)]",
  },
];

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-24 px-6 bg-[var(--color-brand-mauve)]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-5xl block mb-8">📅</span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            Let&apos;s find the right support for your child.
          </h1>
          <p className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-12">
            Start with an introductory consultation. No pressure — just a conversation with Prashanthi Simon to make sure you&apos;re in the right place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[var(--color-brand-mauve)] font-bold text-base hover:bg-[var(--color-brand-off-white)] transition-colors"
            >
              <span>📞</span>
              Call us now
            </a>
            <a
              href={`mailto:${contactInfo.email}?subject=Booking%20Enquiry`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-base hover:bg-white/10 transition-colors"
            >
              <span>✉️</span>
              Email us instead
            </a>
          </div>
          <p className="text-white/50 text-sm mt-8">{contactInfo.hours}</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-4">
              The process
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)]">
              What happens after you reach out.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`${step.colorClass} rounded-[2rem] border-4 border-[var(--color-brand-navy)] p-8 shadow-[6px_6px_0px_0px_var(--color-brand-navy)]`}
              >
                <span className="font-heading text-5xl font-black text-[var(--color-brand-navy)]/20 block mb-4">
                  {step.number}
                </span>
                <h3 className="font-heading text-2xl font-bold text-[var(--color-brand-navy)] mb-4">
                  {step.title}
                </h3>
                <p className="text-[var(--color-brand-espresso)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact details strip */}
      <section className="py-16 px-6 bg-white border-t border-[var(--color-brand-charcoal)]/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-[var(--color-brand-navy)] mb-8 text-center">
            Reach us directly
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "📞", label: "Phone", value: contactInfo.phone },
              { icon: "✉️", label: "Email", value: contactInfo.email },
              { icon: "📍", label: "Location", value: contactInfo.address },
              { icon: "🕐", label: "Hours", value: contactInfo.hours },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-4 items-start p-5 rounded-2xl border-2 border-[var(--color-brand-charcoal)]/10 bg-[var(--color-brand-off-white)]"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-1">
                    {item.label}
                  </p>
                  <p className="text-[var(--color-brand-navy)] font-medium text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reassurance / trust note */}
      <section className="py-16 px-6 bg-[var(--color-brand-navy)] text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-heading text-2xl font-bold text-white mb-4">
            Not ready to call yet?
          </p>
          <p className="text-[var(--color-brand-sky)] text-lg mb-8">
            Send us a message through the contact form and we&apos;ll reach out gently, at your pace, with no pressure.
          </p>
          <Button href="/contact" variant="outline">
            Send a message
          </Button>
        </div>
      </section>
    </>
  );
}
