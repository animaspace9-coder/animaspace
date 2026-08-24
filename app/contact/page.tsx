import type { Metadata } from "next";
import { siteSettings } from "@/app/data/content";
import { Button } from "@/app/components/ui/Button";
import { ContactForm } from "@/app/components/contact/ContactForm";
import { Phone, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — Anima Space",
  description:
    "Get in touch with Prashanthi Simon at Anima Space. Psychological Consulting & Counselling Centre.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="py-16 md:py-24 px-6 bg-[var(--color-brand-sky)] border-b border-[var(--color-brand-navy)]/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--color-brand-navy)]/70 mb-3 px-4 py-1.5 rounded-full bg-white/60 border border-[var(--color-brand-navy)]/20">
            Get in Touch
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-brand-navy)] leading-[1.15] tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-base sm:text-xl text-[var(--color-brand-espresso)] leading-relaxed max-w-2xl mx-auto font-medium">
            Have questions or ready to explore our services? Reach out directly to Prashanthi Simon.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & WhatsApp (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Phone Card */}
            <a
              href={`tel:${siteSettings.phone.replace(/\s+/g, "")}`}
              className="p-6 bg-white rounded-[2rem] border-3 border-[var(--color-brand-navy)] shadow-[5px_5px_0px_0px_var(--color-brand-navy)] flex items-center gap-4 hover:-translate-y-0.5 transition-transform"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-sky)] border-2 border-[var(--color-brand-navy)] flex items-center justify-center text-[var(--color-brand-navy)] flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] block mb-1">
                  Call Directly
                </span>
                <p className="font-heading text-xl sm:text-2xl font-bold text-[var(--color-brand-navy)]">
                  {siteSettings.phone}
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${siteSettings.email}`}
              className="p-6 bg-white rounded-[2rem] border-3 border-[var(--color-brand-navy)] shadow-[5px_5px_0px_0px_var(--color-brand-navy)] flex items-center gap-4 hover:-translate-y-0.5 transition-transform"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-pink)] border-2 border-[var(--color-brand-navy)] flex items-center justify-center text-[var(--color-brand-navy)] flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] block mb-1">
                  Email
                </span>
                <p className="font-heading text-lg sm:text-xl font-bold text-[var(--color-brand-navy)] break-all">
                  {siteSettings.email}
                </p>
              </div>
            </a>

            {/* WhatsApp Box */}
            <div className="p-6 sm:p-8 bg-[var(--color-brand-sky)]/40 rounded-[2rem] border-3 border-[var(--color-brand-navy)] shadow-[5px_5px_0px_0px_var(--color-brand-navy)] flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)]">
                Instant Chat
              </span>
              <h3 className="font-heading text-2xl font-bold text-[var(--color-brand-navy)]">
                Connect on WhatsApp
              </h3>
              <p className="text-sm text-[var(--color-brand-espresso)] leading-relaxed">
                Chat with Prashanthi Simon directly for quick questions, scheduling inquiries, or training workshops.
              </p>
              <a
                href="https://wa.me/919866410936?text=Hi%20Prashanthi%20Simon,%20I%20would%20like%20to%20inquire%20about%20Anima%20Space%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#60D66A] text-black font-bold text-base border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#52c45b] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Booking Callout */}
            <div className="p-6 bg-[var(--color-brand-rose)]/20 rounded-[2rem] border-3 border-[var(--color-brand-navy)] text-center flex flex-col items-center gap-3">
              <h4 className="font-heading text-lg font-bold text-[var(--color-brand-navy)]">
                Looking to schedule a consultation?
              </h4>
              <p className="text-xs sm:text-sm text-[var(--color-brand-espresso)]">
                Use our consultation booking form to select your preferred service, date, and mode.
              </p>
              <Button href="/book" variant="primary" className="text-xs py-2.5 px-5">
                Go to Booking Form &rarr;
              </Button>
            </div>

          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 md:p-12 rounded-[2.5rem] border-4 border-[var(--color-brand-navy)] shadow-[8px_8px_0px_0px_var(--color-brand-navy)]">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] block mb-2">
              Send Message
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-brand-navy)] mb-6">
              How can we support you?
            </h2>

            <ContactForm />
          </div>

        </div>
      </section>
    </>
  );
}
