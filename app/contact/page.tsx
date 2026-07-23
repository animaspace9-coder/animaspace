import type { Metadata } from "next";
import { Button } from "@/app/components/ui/Button";
import { PageHero } from "@/app/components/sections/PageHero";
import { contactInfo } from "@/app/data/content";
import { clinicDetails } from "@/app/data/booking";
import { FAQ } from "@/app/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Contact Us & Clinic Directions — Anima Space",
  description: "Reach out to Prashanthi Simon at Anima Space in Jubilee Hills, Hyderabad. Child & adolescent psychology (ages 8–18), parent guidance, and clinic contact info.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us & Clinic Directions."
        subtitle="Have questions, need guidance, or looking for clinic directions? Connect directly with Prashanthi Simon and the Anima Space team in Jubilee Hills, Hyderabad."
        colorClass="bg-[var(--color-brand-sky)]/30"
      />

      <section className="py-16 sm:py-24 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-4">
              Send Direct Message
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-brand-navy)] mb-6">
              How can we help your family?
            </h2>

            <form className="flex flex-col gap-5 bg-white p-6 sm:p-8 rounded-[2rem] border-3 border-[var(--color-brand-navy)] shadow-[6px_6px_0px_0px_var(--color-brand-navy)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[var(--color-brand-navy)]" htmlFor="contact-name">
                    Parent / Guardian Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="px-4 py-3.5 rounded-xl border-2 border-[var(--color-brand-navy)] bg-white focus:outline-none focus:border-[var(--color-brand-mauve)] transition-colors text-[var(--color-brand-navy)] text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[var(--color-brand-navy)]" htmlFor="contact-phone">
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="+91 98664 10936"
                    className="px-4 py-3.5 rounded-xl border-2 border-[var(--color-brand-navy)] bg-white focus:outline-none focus:border-[var(--color-brand-mauve)] transition-colors text-[var(--color-brand-navy)] text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[var(--color-brand-navy)]" htmlFor="contact-email">
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="px-4 py-3.5 rounded-xl border-2 border-[var(--color-brand-navy)] bg-white focus:outline-none focus:border-[var(--color-brand-mauve)] transition-colors text-[var(--color-brand-navy)] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[var(--color-brand-navy)]" htmlFor="contact-age">
                    Age Group / Target *
                  </label>
                  <select
                    id="contact-age"
                    required
                    className="px-4 py-3.5 rounded-xl border-2 border-[var(--color-brand-navy)] bg-white focus:outline-none focus:border-[var(--color-brand-mauve)] transition-colors text-[var(--color-brand-navy)] text-sm"
                  >
                    <option value="">Select age group</option>
                    <option value="8-12">Children (8 – 12 yrs)</option>
                    <option value="13-18">Teenagers (13 – 18 yrs)</option>
                    <option value="parent">Parenting &amp; Family Guidance</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[var(--color-brand-navy)]" htmlFor="contact-concern">
                    Primary Concern *
                  </label>
                  <select
                    id="contact-concern"
                    required
                    className="px-4 py-3.5 rounded-xl border-2 border-[var(--color-brand-navy)] bg-white focus:outline-none focus:border-[var(--color-brand-mauve)] transition-colors text-[var(--color-brand-navy)] text-sm"
                  >
                    <option value="">Select primary concern</option>
                    <option value="anxiety">Anxiety &amp; Big Emotions</option>
                    <option value="behavior">Behavioral Difficulties &amp; Tantrums</option>
                    <option value="school">Learning &amp; Exam Stress</option>
                    <option value="parenting">Parenting &amp; Family Connection</option>
                    <option value="assessment">Child Psychological Assessment</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[var(--color-brand-navy)]" htmlFor="contact-message">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell us a bit about your child, your family goals, or any specific questions..."
                  className="px-4 py-3.5 rounded-xl border-2 border-[var(--color-brand-navy)] bg-white focus:outline-none focus:border-[var(--color-brand-mauve)] transition-colors text-[var(--color-brand-navy)] text-sm resize-none"
                />
              </div>

              <div>
                <Button variant="primary" type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
                <p className="text-xs text-[var(--color-brand-espresso)]/70 mt-3 font-medium">
                  ⚡ We respond within 4 hours during business days.
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Clinic Info & Direct Contact (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct WhatsApp Box */}
            <div className="bg-[var(--color-brand-sky)]/30 p-6 sm:p-8 rounded-[2rem] border-3 border-[var(--color-brand-navy)] shadow-[6px_6px_0px_0px_var(--color-brand-navy)] flex flex-col items-start gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)]">
                Instant Chat
              </span>
              <h3 className="font-heading text-2xl font-bold text-[var(--color-brand-navy)] leading-snug">
                Connect directly on WhatsApp
              </h3>
              <p className="text-sm text-[var(--color-brand-espresso)] leading-relaxed">
                Chat with Prashanthi Simon directly for quick questions or immediate scheduling.
              </p>
              <a
                href="https://wa.me/919866410936?text=Hi%20Prashanthi%20Simon,%20I%20would%20like%20to%20inquire%20about%20a%20child%20psychology%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#60D66A] text-black border-2 border-black font-bold text-base hover:bg-[#52c45b] transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-6 h-6 object-contain" />
                <span>Chat on WhatsApp (+91 98664 10936)</span>
              </a>
            </div>

            {/* Offline Clinic Address Card */}
            <div className="p-6 bg-white rounded-[2rem] border-3 border-[var(--color-brand-navy)] shadow-[6px_6px_0px_0px_var(--color-brand-navy)] flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)]">
                  📍 In-Clinic Consultation Center
                </span>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[var(--color-brand-sky)] border border-[var(--color-brand-navy)]">
                  Jubilee Hills
                </span>
              </div>

              <div>
                <h4 className="font-heading text-xl font-bold text-[var(--color-brand-navy)] mb-1">
                  {clinicDetails.name}
                </h4>
                <p className="text-sm text-[var(--color-brand-espresso)] leading-relaxed">
                  {clinicDetails.address}
                </p>
                <p className="text-xs text-gray-500 mt-2 font-medium">
                  📍 Landmark: {clinicDetails.landmark}
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  🚗 Parking: {clinicDetails.parking}
                </p>
              </div>

              <a
                href={clinicDetails.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[var(--color-brand-pink)]/40 text-[var(--color-brand-navy)] font-bold text-sm border-2 border-[var(--color-brand-navy)] hover:bg-[var(--color-brand-pink)] transition-colors shadow-sm"
              >
                <span>🗺️ Open Directions in Google Maps →</span>
              </a>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-[var(--color-brand-navy)] shadow-[4px_4px_0px_0px_var(--color-brand-navy)] hover:-translate-y-0.5 transition-transform"
              >
                <span className="text-2xl p-2.5 rounded-xl bg-[var(--color-brand-sky)]/40 border border-[var(--color-brand-navy)]">
                  📞
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-mauve)]">
                    Call Directly
                  </p>
                  <p className="font-heading text-base sm:text-lg font-bold text-[var(--color-brand-navy)]">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-[var(--color-brand-navy)] shadow-[4px_4px_0px_0px_var(--color-brand-navy)] hover:-translate-y-0.5 transition-transform"
              >
                <span className="text-2xl p-2.5 rounded-xl bg-[var(--color-brand-pink)]/40 border border-[var(--color-brand-navy)]">
                  ✉️
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-mauve)]">
                    Send Email
                  </p>
                  <p className="font-heading text-base sm:text-lg font-bold text-[var(--color-brand-navy)] break-all">
                    {contactInfo.email}
                  </p>
                </div>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </>
  );
}
