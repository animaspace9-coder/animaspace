import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, PhoneCall, ShieldAlert, HeartHandshake, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Website & Services Disclaimer — Anima Space",
  description:
    "Anima Space website and services disclaimer. Information about clinical boundaries, emergency crisis helplines in India, and consultation policies.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-[var(--color-brand-cream)] min-h-screen pt-32 pb-24 text-[var(--color-brand-espresso)]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Badge & Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-brand-rose)]/15 text-[var(--color-brand-rose)] text-xs font-bold tracking-wide uppercase mb-4">
            <FileText className="w-4 h-4 text-[var(--color-brand-rose)]" />
            Legal Notice & Clinical Boundaries
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-black text-[var(--color-brand-navy)] tracking-tight">
            Website & Services Disclaimer
          </h1>
          <p className="text-sm text-[var(--color-brand-espresso)]/70 mt-3">
            <strong>Effective Date:</strong> August 24, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> August 24, 2026
          </p>
        </div>

        {/* Emergency Helplines Callout Box */}
        <div className="bg-red-50 border-2 border-red-200/80 rounded-3xl p-6 sm:p-8 mb-10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <ShieldAlert className="w-7 h-7 text-red-600 shrink-0" />
            <h2 className="font-heading text-xl sm:text-2xl font-black text-red-950">
              Emergency & Crisis Notice (India)
            </h2>
          </div>
          <p className="text-sm sm:text-base text-red-950/90 leading-relaxed mb-6">
            <strong>Anima Space is not an emergency medical or crisis-response service.</strong> Our website, email, and WhatsApp channels are not monitored continuously. If you or someone you know is in immediate danger, feeling suicidal, or experiencing a severe psychiatric/medical emergency, please immediately reach out to the 24/7 helplines below or visit the nearest hospital emergency room.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-white/90 rounded-2xl p-4 border border-red-200 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-red-900 mb-1">
                <PhoneCall className="w-4 h-4 text-red-600" />
                <span>National Emergency</span>
              </div>
              <p className="text-xs text-red-800">All emergencies in India</p>
              <p className="text-lg font-black text-red-950 mt-1">112</p>
            </div>

            <div className="bg-white/90 rounded-2xl p-4 border border-red-200 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-red-900 mb-1">
                <HeartHandshake className="w-4 h-4 text-red-600" />
                <span>Tele-MANAS (Govt. of India)</span>
              </div>
              <p className="text-xs text-red-800">24/7 Mental Health Helpline (Toll-Free)</p>
              <p className="text-lg font-black text-red-950 mt-1">14416 / 1800-891-4416</p>
            </div>

            <div className="bg-white/90 rounded-2xl p-4 border border-red-200 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-red-900 mb-1">
                <PhoneCall className="w-4 h-4 text-red-600" />
                <span>KIRAN Helpline</span>
              </div>
              <p className="text-xs text-red-800">National Mental Health Rehabilitation</p>
              <p className="text-lg font-black text-red-950 mt-1">1800-599-0019</p>
            </div>

            <div className="bg-white/90 rounded-2xl p-4 border border-red-200 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-red-900 mb-1">
                <HeartHandshake className="w-4 h-4 text-red-600" />
                <span>Vandrevala Foundation</span>
              </div>
              <p className="text-xs text-red-800">24/7 Free Mental Health Counselling</p>
              <p className="text-lg font-black text-red-950 mt-1">+91 9999 666 555</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[var(--color-brand-charcoal)]/10 shadow-sm space-y-10 text-base leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-[var(--color-brand-navy)] mb-4">
              1. Informational Purposes Only
            </h2>
            <p className="text-[var(--color-brand-espresso)]/85 mb-4">
              All content provided on this website—including articles, FAQs, descriptions of therapeutic modalities, service summaries, and guidance notes—is for general educational and informational purposes only.
            </p>
            <p className="text-[var(--color-brand-espresso)]/85">
              Visiting this website, reading content, submitting a form, or contacting us via WhatsApp does not establish a formal psychologist-client relationship. A professional relationship begins only after a consultation is mutually agreed upon, formal intake is completed, and relevant consent documents are signed.
            </p>
          </section>

          <hr className="border-[var(--color-brand-charcoal)]/10" />

          {/* Section 2 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-[var(--color-brand-navy)] mb-4">
              2. Not Medical or Psychiatric Diagnosis
            </h2>
            <p className="text-[var(--color-brand-espresso)]/85 mb-3">
              Anima Space provides psychological counselling, life coaching, career guidance, emotional well-being support, and educational training.
            </p>
            <p className="text-[var(--color-brand-espresso)]/85">
              The services provided are not medical or psychiatric treatments, and our practitioners do not prescribe medications. If a client presents symptoms that require specialized psychiatric evaluation, neuro-developmental medical diagnosis, or pharmacotherapy, we will provide guidance on seeking appropriate medical referrals.
            </p>
          </section>

          <hr className="border-[var(--color-brand-charcoal)]/10" />

          {/* Section 3 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-[var(--color-brand-navy)] mb-4">
              3. Individual Outcomes & Variability
            </h2>
            <p className="text-[var(--color-brand-espresso)]/85">
              Psychological growth, emotional healing, and behavioral development are highly individual journeys. While our evidence-based methods and personalized care aim to provide the highest standard of support, no specific psychological, academic, career, or behavioral outcome can be guaranteed.
            </p>
          </section>

          <hr className="border-[var(--color-brand-charcoal)]/10" />

          {/* Section 4 */}
          <section>
            <h2 className="font-heading text-2xl font-black text-[var(--color-brand-navy)] mb-4">
              4. Online & In-Clinic Sessions
            </h2>
            <p className="text-[var(--color-brand-espresso)]/85 mb-3">
              We offer both in-clinic consultations at our Hyderabad center and online consultations via Google Meet.
            </p>
            <p className="text-[var(--color-brand-espresso)]/85">
              For online sessions, clients and guardians are responsible for ensuring a private, quiet space and a stable internet connection. Anima Space is not responsible for disruptions caused by third-party internet providers or platform outages.
            </p>
          </section>

          <hr className="border-[var(--color-brand-charcoal)]/10" />

          {/* Cross Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-sm font-semibold">
            <Link
              href="/privacy"
              className="text-[var(--color-brand-navy)] hover:text-[var(--color-brand-mauve)] transition-colors underline underline-offset-4"
            >
              &larr; View Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-[var(--color-brand-navy)] text-white hover:bg-[var(--color-brand-navy)]/90 transition-all"
            >
              Contact Clinic
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
