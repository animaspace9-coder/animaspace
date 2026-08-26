import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { blogsPageQuery } from "@/sanity/lib/queries";
import { PageHero } from "@/app/components/sections/PageHero";
import { NewsletterForm } from "@/app/components/ui/NewsletterForm";
import { blogPosts as defaultPosts, blogsPageContent } from "@/app/data/content";

export const metadata: Metadata = {
  title: "Blogs & Articles — Anima Space",
  description:
    "Practical guidance, research-backed perspectives, and real-world tools for parents and families — written by Prashanthi Simon.",
};

const colorKeyMap: Record<string, string> = {
  sky: "bg-[var(--color-brand-sky)]",
  pink: "bg-[var(--color-brand-pink)]",
  rose: "bg-[var(--color-brand-rose)]",
  mauve: "bg-[var(--color-brand-mauve)]/20",
};

export default async function BlogPage() {
  const cms = await client
    .fetch(blogsPageQuery, {}, { next: { revalidate: 60 } })
    .catch(() => null);

  const heroTitle = cms?.page?.pageHeroTitle ?? blogsPageContent.heroTitle;
  const heroSubtitle = cms?.page?.pageHeroSubtitle ?? blogsPageContent.heroSubtitle;
  const newsletterHeading = cms?.page?.newsletterHeading ?? blogsPageContent.newsletterHeading;
  const newsletterSubtext = cms?.page?.newsletterSubtext ?? blogsPageContent.newsletterSubtext;

  // Merge CMS posts or fallback to typed data
  const posts = cms?.posts && cms.posts.length > 0 ? cms.posts : defaultPosts;

  return (
    <>
      <PageHero
        title={heroTitle}
        subtitle={heroSubtitle}
        colorClass="bg-[var(--color-brand-mauve)]/20"
      />

      {/* Blog Grid */}
      <section className="py-20 md:py-28 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => {
              const bgClass =
                post.colorClass ||
                (post.colorKey && colorKeyMap[post.colorKey]) ||
                "bg-[var(--color-brand-sky)]";

              const formattedDate = post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : post.date || "26 August 2026";

              const postSlug = post.slug?.current || post.slug || post.id;

              return (
                <Link
                  key={post._id || post.id || postSlug}
                  href={`/blog/${postSlug}`}
                  className="group flex flex-col bg-white rounded-[2rem] border-4 border-[var(--color-brand-navy)] shadow-[5px_5px_0px_0px_var(--color-brand-navy)] overflow-hidden hover:shadow-[9px_9px_0px_0px_var(--color-brand-navy)] hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left"
                >
                  {/* Category Banner */}
                  <div className={`${bgClass} px-6 py-4 border-b-4 border-[var(--color-brand-navy)] flex items-center justify-between`}>
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-navy)]">
                      {post.category || "Parenting"}
                    </span>
                    <span className="text-xs font-bold text-[var(--color-brand-navy)]/80 bg-white/60 px-2.5 py-0.5 rounded-full border border-[var(--color-brand-navy)]/20">
                      {post.readTime || "3 min read"}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-7 sm:p-8">
                    <div className="flex items-center gap-2 mb-4 text-xs text-[var(--color-brand-espresso)]/70 font-semibold">
                      <span>{formattedDate}</span>
                      <span>&bull;</span>
                      <span>By {post.author || "Prashanthi Simon"}</span>
                    </div>

                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-[var(--color-brand-navy)] leading-snug mb-4 group-hover:text-[var(--color-brand-mauve)] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-[var(--color-brand-espresso)] text-sm sm:text-base leading-relaxed flex-grow mb-6">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-5 border-t border-[var(--color-brand-charcoal)]/10">
                      <div className="inline-flex items-center gap-2 text-[var(--color-brand-navy)] font-bold text-sm group-hover:text-[var(--color-brand-mauve)] group-hover:gap-3 transition-all duration-200">
                        <span>Read full article</span>
                        <span aria-hidden="true">&rarr;</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Newsletter Subscribe Note */}
          <div className="mt-20 text-center">
            <div className="inline-block p-8 sm:p-10 rounded-[2.5rem] bg-white border-3 border-[var(--color-brand-navy)] shadow-[6px_6px_0px_0px_var(--color-brand-navy)] max-w-xl mx-auto">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--color-brand-navy)] mb-2">
                {newsletterHeading}
              </h3>
              <p className="text-sm text-[var(--color-brand-espresso)]/80 mb-6">
                {newsletterSubtext}
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
