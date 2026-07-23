import type { Metadata } from "next";
import { PageHero } from "@/app/components/sections/PageHero";
import { Button } from "@/app/components/ui/Button";
import { contactInfo } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Contact Us — Anima Space",
  description: "Get in touch with Anima Space. We'd love to hear from you and help find the right support for your child.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's start a conversation."
        subtitle="Have a question, or just not sure where to begin? Reach out — we're here to help you figure out the next step."
        colorClass="bg-[var(--color-brand-sky)]"
      />

      <section className="py-24 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Form */}
          <div>
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-8">
              Send us a message
            </span>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[var(--color-brand-navy)]" htmlFor="contact-name">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Jane Smith"
                    className="px-5 py-4 rounded-2xl border-2 border-[var(--color-brand-navy)] bg-white focus:outline-none focus:border-[var(--color-brand-mauve)] transition-colors text-[var(--color-brand-navy)] placeholder:text-[var(--color-brand-charcoal)]/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[var(--color-brand-navy)]" htmlFor="contact-phone">
                    Phone number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="px-5 py-4 rounded-2xl border-2 border-[var(--color-brand-navy)] bg-white focus:outline-none focus:border-[var(--color-brand-mauve)] transition-colors text-[var(--color-brand-navy)] placeholder:text-[var(--color-brand-charcoal)]/30"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[var(--color-brand-navy)]" htmlFor="contact-email">
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  className="px-5 py-4 rounded-2xl border-2 border-[var(--color-brand-navy)] bg-white focus:outline-none focus:border-[var(--color-brand-mauve)] transition-colors text-[var(--color-brand-navy)] placeholder:text-[var(--color-brand-charcoal)]/30"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[var(--color-brand-navy)]" htmlFor="contact-service">
                  What are you enquiring about?
                </label>
                <select
                  id="contact-service"
                  className="px-5 py-4 rounded-2xl border-2 border-[var(--color-brand-navy)] bg-white focus:outline-none focus:border-[var(--color-brand-mauve)] transition-colors text-[var(--color-brand-navy)]"
                >
                  <option value="">Select a service</option>
                  <option value="counselling">Counselling</option>
                  <option value="coaching">Coaching</option>
                  <option value="training">Training</option>
                  <option value="therapy">Therapy</option>
                  <option value="general">General enquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[var(--color-brand-navy)]" htmlFor="contact-message">
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us a bit about your child and what you're looking for..."
                  className="px-5 py-4 rounded-2xl border-2 border-[var(--color-brand-navy)] bg-white focus:outline-none focus:border-[var(--color-brand-mauve)] transition-colors text-[var(--color-brand-navy)] placeholder:text-[var(--color-brand-charcoal)]/30 resize-none"
                />
              </div>

              <div>
                <Button variant="primary" type="submit">
                  Send message
                </Button>
                <p className="text-xs text-[var(--color-brand-espresso)]/60 mt-3">
                  We typically respond within 1 business day.
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info + Map Placeholder */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="inline-block text-sm font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-8">
                Get in touch directly
              </span>
              <div className="flex flex-col gap-6">
                {[
                  { icon: "📍", label: "Address", value: contactInfo.address },
                  { icon: "📞", label: "Phone", value: contactInfo.phone },
                  { icon: "✉️", label: "Email", value: contactInfo.email },
                  { icon: "🕐", label: "Hours", value: contactInfo.hours },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-5 items-start p-5 bg-white rounded-2xl border-2 border-[var(--color-brand-navy)]"
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-1">
                        {item.label}
                      </p>
                      <p className="text-[var(--color-brand-navy)] font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="flex-grow min-h-[200px] bg-[var(--color-brand-sky)]/30 rounded-2xl border-2 border-[var(--color-brand-navy)] flex items-center justify-center">
              <div className="text-center p-8">
                <span className="text-4xl block mb-3">🗺️</span>
                <p className="font-heading font-bold text-[var(--color-brand-navy)] text-sm">
                  [Map Placeholder]
                  <br />
                  <span className="font-normal text-[var(--color-brand-espresso)]">
                    Google Maps embed goes here
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
