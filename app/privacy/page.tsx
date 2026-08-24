import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Anima Space",
  description:
    "Anima Space privacy policy explaining personal data handling, parent/guardian rights under India's DPDP Act 2023, and communication safeguards.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[var(--color-brand-cream)] min-h-screen pt-32 pb-24 text-[var(--color-brand-espresso)]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Badge & Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-brand-sky)]/15 text-[var(--color-brand-navy)] text-xs font-bold tracking-wide uppercase mb-4">
            <ShieldCheck className="w-4 h-4 text-[var(--color-brand-navy)]" />
            Legal & Data Protection
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-[var(--color-brand-navy)] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-[var(--color-brand-espresso)]/70 mt-3">
            <strong>Effective Date:</strong> August 24, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> August 24, 2026
          </p>
        </div>

        {/* Emergency Notice Card */}
        <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-6 mb-10 flex gap-4 items-start shadow-sm">
          <AlertCircle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-sm text-amber-950 leading-relaxed">
            <strong className="font-bold text-amber-900 block mb-1">
              Not an Emergency Service
            </strong>
            Website forms, email, and WhatsApp communications are not monitored 24/7. In a crisis or immediate danger in India, call <strong className="font-bold">112</strong> or contact Tele-MANAS at <strong className="font-bold">14416</strong> / <strong className="font-bold">1800-891-4416</strong>.
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[var(--color-brand-charcoal)]/10 shadow-sm space-y-10 text-base leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-[var(--color-brand-navy)] mb-4">
              1. Who We Are
            </h2>
            <p className="text-[var(--color-brand-espresso)]/85 mb-4">
              This Privacy Policy explains how <strong>Anima Space</strong>, founded by <strong>Prashanthi Simon</strong>, collects, uses, stores, discloses, and protects personal data when you visit our website (<Link href="/" className="text-[var(--color-brand-navy)] font-semibold underline underline-offset-2">animaspace.vercel.app</Link>), submit an enquiry or booking request, communicate via phone, email, or WhatsApp, or participate in online or in-clinic psychological and coaching services.
            </p>
            <div className="bg-[var(--color-brand-cream)]/70 rounded-2xl p-5 border border-[var(--color-brand-charcoal)]/10 text-sm space-y-2">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[var(--color-brand-navy)] shrink-0" />
                <span><strong>Address:</strong> Anima Space Child Psychology Center, Plot 104, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--color-brand-navy)] shrink-0" />
                <span><strong>Email:</strong> <a href="mailto:animaspace9@gmail.com" className="text-[var(--color-brand-navy)] font-semibold underline">animaspace9@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--color-brand-navy)] shrink-0" />
                <span><strong>Phone / WhatsApp:</strong> <a href="tel:+919866410936" className="text-[var(--color-brand-navy)] font-semibold underline">+91 98664 10936</a></span>
              </div>
            </div>
            <p className="text-xs text-[var(--color-brand-espresso)]/70 mt-3">
              Under India’s <em>Digital Personal Data Protection Act, 2023 (DPDP Act)</em>, Anima Space acts as a Data Fiduciary. For persons under 18 years of age (&ldquo;children&rdquo; under the Act), the parent or lawful guardian is recognised as the relevant Data Principal.
            </p>
          </section>

          <hr className="border-[var(--color-brand-charcoal)]/10" />

          {/* Section 2 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-[var(--color-brand-navy)] mb-4">
              2. What This Policy Covers
            </h2>
            <p className="text-[var(--color-brand-espresso)]/85 mb-3">
              This policy applies to data collected through website contact and booking forms, phone calls, WhatsApp messages, emails, and online video sessions.
            </p>
            <p className="text-[var(--color-brand-espresso)]/85">
              It does not replace specific clinical informed-consent agreements provided prior to commencing therapy or counselling. Third-party platforms (such as Google Meet, WhatsApp, and Google Maps) operate under their respective independent privacy terms.
            </p>
          </section>

          <hr className="border-[var(--color-brand-charcoal)]/10" />

          {/* Section 3 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-[var(--color-brand-navy)] mb-4">
              3. Information We Collect
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--color-brand-charcoal)]/20 text-[var(--color-brand-navy)] font-heading font-bold">
                    <th className="py-3 px-3">Context</th>
                    <th className="py-3 px-3">Data Collected</th>
                    <th className="py-3 px-3">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-brand-charcoal)]/10 text-[var(--color-brand-espresso)]/80">
                  <tr>
                    <td className="py-3 px-3 font-semibold text-[var(--color-brand-navy)]">Contact Form</td>
                    <td className="py-3 px-3">Parent/guardian name, email, phone, age group, primary concern, message</td>
                    <td className="py-3 px-3">To respond to queries and evaluate preliminary support options.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-[var(--color-brand-navy)]">Booking Request</td>
                    <td className="py-3 px-3">Name, contact details, selected service, modality (online/in-clinic), preferred slot</td>
                    <td className="py-3 px-3">To schedule consultations and send appointment details.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-[var(--color-brand-navy)]">Direct Comms</td>
                    <td className="py-3 px-3">WhatsApp chats, telephone communications, emails</td>
                    <td className="py-3 px-3">To coordinate sessions, answer questions, and provide client support.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-semibold text-[var(--color-brand-navy)]">Technical Data</td>
                    <td className="py-3 px-3">IP address, browser type, device details, page views</td>
                    <td className="py-3 px-3">For site performance, security, and spam prevention.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--color-brand-espresso)]/70 mt-3">
              <em>Note:</em> We do not store credit card or banking details directly on our website.
            </p>
          </section>

          <hr className="border-[var(--color-brand-charcoal)]/10" />

          {/* Section 4 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-[var(--color-brand-navy)] mb-4">
              4. Children & Adolescent Information
            </h2>
            <p className="text-[var(--color-brand-espresso)]/85 mb-3">
              Anima Space provides specialized psychological support for children and adolescents (ages 8–18). For individuals under 18 years of age:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-brand-espresso)]/85">
              <li>Enquiries and booking requests must be submitted by a parent or lawful guardian.</li>
              <li>We will not use children&apos;s data for behavioural tracking, commercial profiling, or targeted advertising.</li>
              <li>Confidentiality and session sharing with parents are balanced in accordance with clinical best practices, safeguarding standards, and Indian law.</li>
            </ul>
          </section>

          <hr className="border-[var(--color-brand-charcoal)]/10" />

          {/* Section 5 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-[var(--color-brand-navy)] mb-4">
              5. Limits of Confidentiality
            </h2>
            <p className="text-[var(--color-brand-espresso)]/85">
              Confidentiality is a cornerstone of our practice. However, under law and professional ethical codes, exceptions apply when:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[var(--color-brand-espresso)]/85 mt-3">
              <li>There is a serious, imminent risk of harm to the client or another person.</li>
              <li>There are child protection or suspected abuse safeguarding concerns.</li>
              <li>Disclosure is mandated by a court order or lawful statutory authority.</li>
            </ul>
          </section>

          <hr className="border-[var(--color-brand-charcoal)]/10" />

          {/* Section 6 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-[var(--color-brand-navy)] mb-4">
              6. Your Rights & Grievance Redressal
            </h2>
            <p className="text-[var(--color-brand-espresso)]/85 mb-4">
              Under the DPDP Act 2023, you have the right to request access, correction, updating, or erasure of your personal data, as well as the right to withdraw consent or register a grievance.
            </p>
            <div className="bg-[var(--color-brand-cream)]/70 rounded-2xl p-5 border border-[var(--color-brand-charcoal)]/10 space-y-2 text-sm">
              <p><strong>Grievance Contact:</strong> Prashanthi Simon, Founder & Lead Psychologist</p>
              <p><strong>Email:</strong> <a href="mailto:animaspace9@gmail.com" className="text-[var(--color-brand-navy)] font-semibold underline">animaspace9@gmail.com</a> (Subject: <em>Privacy Request — Anima Space</em>)</p>
              <p><strong>Response Timeline:</strong> Acknowledgement within 48 hours; resolution within 30 days.</p>
            </div>
          </section>

          <hr className="border-[var(--color-brand-charcoal)]/10" />

          {/* Cross Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-sm font-semibold">
            <Link
              href="/disclaimer"
              className="text-[var(--color-brand-navy)] hover:text-[var(--color-brand-mauve)] transition-colors underline underline-offset-4"
            >
              &larr; View Website & Services Disclaimer
            </Link>
            <Link
              href="/book"
              className="px-5 py-2.5 rounded-full bg-[var(--color-brand-navy)] text-white hover:bg-[var(--color-brand-navy)]/90 transition-all"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
