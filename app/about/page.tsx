import type { Metadata } from "next";
import { PageHero } from "@/app/components/sections/PageHero";
import { ApproachBlock } from "@/app/components/sections/ApproachBlock";
import { Team } from "@/app/components/sections/Team";
import { Button } from "@/app/components/ui/Button";
import { approachBlock } from "@/app/data/content";

export const metadata: Metadata = {
  title: "About Us — Anima Space",
  description:
    "Learn about Anima Space, our mission, and the psychologist behind the practice — Prashanthi Simon.",
};

const coreValues = [
  {
    icon: "🤍",
    title: "Child-Centred",
    description: "Every decision we make starts with what is best for the child in front of us.",
    colorClass: "bg-[var(--color-brand-sky)]",
  },
  {
    icon: "🔬",
    title: "Evidence-Based",
    description: "We use approaches backed by robust clinical research — never trends or fads.",
    colorClass: "bg-[var(--color-brand-pink)]",
  },
  {
    icon: "🔒",
    title: "Confidential & Safe",
    description: "Every session is a safe space — nothing leaves our walls without your consent.",
    colorClass: "bg-[var(--color-brand-rose)]",
  },
  {
    icon: "🤝",
    title: "Family Partnership",
    description: "We work with families, not just the child — because healing happens in relationship.",
    colorClass: "bg-[var(--color-brand-mauve)]/20",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A space built on trust, warmth, and science."
        subtitle="Anima Space was founded with one belief: every child deserves to be heard, understood, and helped — by someone who truly knows how."
        colorClass="bg-[var(--color-brand-sky)]"
      />

      {/* Story Section */}
      <section className="py-24 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-6">
              Our Story
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-8 leading-tight">
              Why Anima Space exists.
            </h2>
            <div className="flex flex-col gap-5 text-lg text-[var(--color-brand-espresso)] leading-relaxed">
              <p>
                Prashanthi Simon founded Anima Space after years of working in clinical settings and noticing a gap: families needed more than sporadic appointments — they needed a consistent, warm, expert presence in their corner.
              </p>
              <p>
                Anima Space was built to be exactly that. A practice small enough to know every family by name, and skilled enough to meet the full range of challenges children face today.
              </p>
              <p>
                The name says it all: <em>Anima</em> — the soul, the inner life. A space for that.
              </p>
            </div>
          </div>

          {/* Illustration Placeholder */}
          <div className="relative w-full aspect-[4/3] bg-[var(--color-brand-pink)] rounded-[2.5rem] overflow-hidden border-4 border-[var(--color-brand-navy)] shadow-[8px_8px_0px_0px_var(--color-brand-navy)] flex items-center justify-center">
            <div className="text-center p-8">
              <span className="text-6xl mb-4 block">🏡</span>
              <p className="font-heading font-bold text-[var(--color-brand-navy)] text-lg">
                [Illustration Placeholder]
                <br />
                <span className="text-sm font-normal">DrawKit — Warm Office Scene</span>
              </p>
            </div>
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[var(--color-brand-sky)] border-2 border-[var(--color-brand-navy)]" />
            <div className="absolute bottom-8 left-8 w-8 h-8 rotate-12 bg-[var(--color-brand-mauve)] border-2 border-[var(--color-brand-navy)] rounded-lg" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] mb-4">
              What guides us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)]">
              Our core values.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className={`${value.colorClass} rounded-[2rem] border-4 border-[var(--color-brand-navy)] p-8 shadow-[4px_4px_0px_0px_var(--color-brand-navy)]`}
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="font-heading text-xl font-bold text-[var(--color-brand-navy)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--color-brand-espresso)] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Prashanthi */}
      <Team />

      {/* Approach Block */}
      <ApproachBlock />

      {/* CTA */}
      <section className="py-24 px-6 bg-[var(--color-brand-off-white)] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[var(--color-brand-navy)] mb-6">
            Ready to take the first step?
          </h2>
          <p className="text-xl text-[var(--color-brand-espresso)] mb-10">
            An introductory consultation session with Prashanthi Simon. No pressure, no commitment.
          </p>
          <Button href="/book" variant="primary">
            Book Session
          </Button>
        </div>
      </section>
    </>
  );
}
