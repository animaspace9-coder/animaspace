import type { Metadata } from "next";
import { PageHero } from "@/app/components/sections/PageHero";
import { Button } from "@/app/components/ui/Button";
import { blogPosts } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Blogs — Anima Space",
  description: "Expert articles on child psychology, parenting, and mental health from the team at Anima Space.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Insights for parents & families."
        subtitle="Practical guidance, research-backed perspectives, and real-world tools — written by Prashanthi Simon."
        colorClass="bg-[var(--color-brand-mauve)]/20"
      />

      {/* Blog Grid */}
      <section className="py-24 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col bg-white rounded-[2rem] border-4 border-[var(--color-brand-navy)] shadow-[4px_4px_0px_0px_var(--color-brand-navy)] overflow-hidden hover:shadow-[8px_8px_0px_0px_var(--color-brand-navy)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Category Banner */}
                <div className={`${post.colorClass} px-6 py-4 border-b-4 border-[var(--color-brand-navy)]`}>
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-navy)]">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-8">
                  <div className="flex items-center gap-3 mb-5 text-xs text-[var(--color-brand-espresso)]/60 font-medium">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-heading text-xl font-bold text-[var(--color-brand-navy)] leading-snug mb-4 group-hover:text-[var(--color-brand-mauve)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[var(--color-brand-espresso)] text-sm leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-8 pt-6 border-t border-[var(--color-brand-charcoal)]/10">
                    <span className="inline-flex items-center gap-2 text-[var(--color-brand-navy)] font-bold text-sm group-hover:gap-4 transition-all duration-200">
                      Read article
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon note */}
          <div className="mt-20 text-center">
            <div className="inline-block px-8 py-6 rounded-3xl border-2 border-dashed border-[var(--color-brand-charcoal)]/30">
              <p className="text-[var(--color-brand-espresso)] font-medium">
                More articles coming soon. Want to be notified?
              </p>
              <form className="flex mt-4 max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-l-full border-2 border-r-0 border-[var(--color-brand-navy)] bg-white focus:outline-none text-sm"
                />
                <button
                  type="button"
                  className="px-6 py-3 rounded-r-full bg-[var(--color-brand-navy)] text-white font-bold hover:bg-[var(--color-brand-mauve)] transition-colors border-2 border-l-0 border-[var(--color-brand-navy)] text-sm"
                >
                  Notify me
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
