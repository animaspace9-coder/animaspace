import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";
import { ArrowLeft, Home, Compass, BookOpen, Calendar, MessageCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Anima Space",
  description: "Looks like we took a gentle detour. Let us guide you back to a safe space.",
};

export default function NotFound() {
  return (
    <section className="bg-[var(--color-brand-off-white)] min-h-[calc(100vh-140px)] flex items-center justify-center py-12 sm:py-16 md:py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* ── Main Two-Column Card ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Reassuring Message & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-brand-pink)]/60 border-2 border-[var(--color-brand-navy)] text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)] mb-6 shadow-[2px_2px_0px_0px_var(--color-brand-navy)]">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand-mauve)]" />
              <span>404 • Gentle Detour</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[var(--color-brand-navy)] leading-[1.15] tracking-tight mb-4">
              Looks like we wandered off the path.
            </h1>

            {/* Reassuring Body Copy */}
            <p className="font-body text-base sm:text-lg text-[var(--color-brand-espresso)]/85 leading-relaxed max-w-xl mb-8">
              Even on the most caring journeys, we occasionally take an unexpected turn.
              There’s no rush and nothing is broken — let’s gently guide you back to where you want to be.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                variant="primary"
                href="/"
                className="gap-2.5 shadow-[4px_4px_0px_0px_var(--color-brand-navy)] active:translate-x-0.5 active:translate-y-0.5 transition-all text-sm sm:text-base font-bold"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </Button>

              <Button
                variant="outline"
                href="/services"
                className="gap-2.5 shadow-[4px_4px_0px_0px_var(--color-brand-navy)] active:translate-x-0.5 active:translate-y-0.5 transition-all text-sm sm:text-base font-bold"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Services</span>
              </Button>
            </div>

            {/* Quick Links Row */}
            <div className="w-full pt-6 border-t border-[var(--color-brand-navy)]/15">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-espresso)]/60 block mb-3">
                Or discover safe spaces:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                
                <Link
                  href="/blog"
                  className="p-3 rounded-xl bg-white/70 hover:bg-white border-2 border-[var(--color-brand-navy)]/20 hover:border-[var(--color-brand-navy)] transition-all group shadow-xs flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-sky)] flex items-center justify-center text-[var(--color-brand-navy)] flex-shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[var(--color-brand-navy)] block group-hover:text-[var(--color-brand-mauve)] transition-colors truncate">
                      Read Blog
                    </span>
                    <span className="text-[11px] text-[var(--color-brand-espresso)]/70 block truncate">
                      Parenting articles
                    </span>
                  </div>
                </Link>

                <Link
                  href="/book"
                  className="p-3 rounded-xl bg-white/70 hover:bg-white border-2 border-[var(--color-brand-navy)]/20 hover:border-[var(--color-brand-navy)] transition-all group shadow-xs flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-pink)] flex items-center justify-center text-[var(--color-brand-navy)] flex-shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[var(--color-brand-navy)] block group-hover:text-[var(--color-brand-mauve)] transition-colors truncate">
                      Book Session
                    </span>
                    <span className="text-[11px] text-[var(--color-brand-espresso)]/70 block truncate">
                      Initial consultation
                    </span>
                  </div>
                </Link>

                <Link
                  href="/contact"
                  className="p-3 rounded-xl bg-white/70 hover:bg-white border-2 border-[var(--color-brand-navy)]/20 hover:border-[var(--color-brand-navy)] transition-all group shadow-xs flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-sky)]/70 flex items-center justify-center text-[var(--color-brand-navy)] flex-shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[var(--color-brand-navy)] block group-hover:text-[var(--color-brand-mauve)] transition-colors truncate">
                      Contact Us
                    </span>
                    <span className="text-[11px] text-[var(--color-brand-espresso)]/70 block truncate">
                      Ask a question
                    </span>
                  </div>
                </Link>

              </div>
            </div>

          </div>

          {/* Right Column: DrawKit Style Illustration */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Decorative shadow accent */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[var(--color-brand-pink)]/40 rounded-[2.5rem] border-3 border-[var(--color-brand-navy)] pointer-events-none" />
              
              {/* Illustration container */}
              <div className="relative bg-white rounded-[2.5rem] border-3 border-[var(--color-brand-navy)] p-4 sm:p-6 shadow-sm overflow-hidden">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem]">
                  <Image
                    src="/not-found-guide.jpg"
                    alt="Parent and child with a telescope and guiding star looking at a path"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                  />
                </div>
                
                {/* Caption tag */}
                <div className="mt-4 pt-3 border-t border-[var(--color-brand-navy)]/10 flex items-center justify-between text-xs text-[var(--color-brand-espresso)]/75">
                  <span className="font-semibold">Anima Space</span>
                  <span className="italic">Every step has guidance</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
