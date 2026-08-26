import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { blogPostBySlugQuery, allBlogSlugsQuery } from "@/sanity/lib/queries";
import { blogPosts as defaultPosts, type BlogPostData } from "@/app/data/content";
import { Button } from "@/app/components/ui/Button";
import { ArrowLeft, Clock, Calendar, User, Heart, Sparkles, BookOpen, ShieldCheck } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const colorKeyMap: Record<string, string> = {
  sky: "bg-[var(--color-brand-sky)]",
  pink: "bg-[var(--color-brand-pink)]",
  rose: "bg-[var(--color-brand-rose)]",
  mauve: "bg-[var(--color-brand-mauve)]/20",
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  const sanitySlugs = await client
    .fetch(allBlogSlugsQuery)
    .catch(() => [] as { slug: string }[]);

  if (sanitySlugs && sanitySlugs.length > 0) {
    return sanitySlugs.map((s: { slug: string }) => ({ slug: s.slug }));
  }

  return defaultPosts.map((p) => ({ slug: p.slug }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const cmsData = await client
    .fetch(blogPostBySlugQuery, { slug }, { next: { revalidate: 60 } })
    .catch(() => null);

  const post = cmsData?.post ?? defaultPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found — Anima Space",
    };
  }

  return {
    title: `${post.title} — Anima Space`,
    description: post.excerpt || `${post.title} by Prashanthi Simon on Anima Space.`,
    openGraph: {
      title: `${post.title} — Anima Space`,
      description: post.excerpt,
      type: "article",
    },
  };
}

// Custom Portable Text styling matching DESIGN.md
const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-brand-navy)] mt-10 mb-4 pt-6 border-t border-[var(--color-brand-navy)]/10">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--color-brand-navy)] mt-8 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-base sm:text-lg text-[var(--color-brand-espresso)] leading-relaxed mb-6 font-normal">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 p-6 bg-[var(--color-brand-off-white)] border-l-4 border-[var(--color-brand-navy)] rounded-r-2xl text-base sm:text-lg font-medium text-[var(--color-brand-navy)] italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 mb-8 pl-6 list-disc marker:text-[var(--color-brand-mauve)] text-base sm:text-lg text-[var(--color-brand-espresso)]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-3 mb-8 pl-6 list-decimal marker:text-[var(--color-brand-navy)] text-base sm:text-lg text-[var(--color-brand-espresso)] font-semibold">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-[var(--color-brand-navy)]">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--color-brand-mauve)] font-bold underline underline-offset-4 hover:text-[var(--color-brand-navy)] transition-colors"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  const cmsData = await client
    .fetch(blogPostBySlugQuery, { slug }, { next: { revalidate: 60 } })
    .catch(() => null);

  const post = cmsData?.post ?? defaultPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related posts: either from CMS query or fallback to other default posts
  const relatedPosts =
    cmsData?.relatedPosts && cmsData.relatedPosts.length > 0
      ? cmsData.relatedPosts
      : defaultPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const fallbackPost = defaultPosts.find((p) => p.slug === slug);
  const reflectionQuote = post.reflectionQuote || fallbackPost?.reflectionQuote;
  const infographic = post.infographic || fallbackPost?.infographic;
  const infographicImageUrl = post.infographicImageUrl || fallbackPost?.infographicImageUrl;
  const infographicImageAlt = post.infographicImageAlt || fallbackPost?.infographicImageAlt || "Anima Space blog infographic";

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : post.date || "26 August 2026";

  const colorKey = post.colorKey || fallbackPost?.colorKey || "sky";
  const bgHeroClass = colorKeyMap[colorKey] || "bg-[var(--color-brand-sky)]";

  return (
    <>
      {/* ── Article Hero Header ── */}
      <section className={`${bgHeroClass} pt-12 sm:pt-16 pb-16 sm:pb-20 px-6 border-b border-[var(--color-brand-navy)]/10`}>
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-3 mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border-2 border-[var(--color-brand-navy)] text-xs sm:text-sm font-bold text-[var(--color-brand-navy)] hover:bg-[var(--color-brand-navy)] hover:text-white transition-all shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all articles</span>
            </Link>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-navy)]/70 px-3 py-1 bg-white/50 rounded-full border border-[var(--color-brand-navy)]/20">
              {post.category || "Parenting"}
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-brand-navy)] leading-[1.15] tracking-tight mb-6">
            {post.title}
          </h1>

          {/* Meta details */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-[var(--color-brand-navy)]/80 pt-2 border-t border-[var(--color-brand-navy)]/20">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[var(--color-brand-navy)]" />
              <span>By {post.author || "Prashanthi Simon"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[var(--color-brand-navy)]" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--color-brand-navy)]" />
              <span>{post.readTime || "3 min read"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Article Body ── */}
      <article className="py-16 md:py-24 px-6 bg-[var(--color-brand-off-white)]">
        <div className="max-w-3xl mx-auto">
          
          {/* Excerpt Lead Paragraph */}
          {post.excerpt && (
            <p className="text-lg sm:text-xl font-medium text-[var(--color-brand-navy)] leading-relaxed p-6 sm:p-8 rounded-2xl bg-white border-2 border-[var(--color-brand-navy)] shadow-xs mb-10">
              {post.excerpt}
            </p>
          )}

          {/* Body Content (PortableText from Sanity or structured sections fallback) */}
          <div className="prose-content">
            {post.body && Array.isArray(post.body) && post.body.length > 0 ? (
              <PortableText value={post.body} components={portableTextComponents} />
            ) : fallbackPost?.sections ? (
              fallbackPost.sections.map((section, sIdx) => (
                <div key={sIdx} className="mb-8">
                  {section.heading && (
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-brand-navy)] mt-10 mb-4 pt-6 border-t border-[var(--color-brand-navy)]/10">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-base sm:text-lg text-[var(--color-brand-espresso)] leading-relaxed mb-6 font-normal"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))
            ) : null}
          </div>

          {/* ── Highlighted Anima Space Reflection Box ── */}
          {reflectionQuote && (
            <div className="my-12 p-8 sm:p-10 rounded-[2.5rem] bg-[var(--color-brand-mauve)]/15 border-3 border-[var(--color-brand-navy)] shadow-[6px_6px_0px_0px_var(--color-brand-navy)] flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)]">
                <Sparkles className="w-4 h-4 text-[var(--color-brand-mauve)]" />
                <span>Anima Space Reflection</span>
              </div>
              <p className="font-heading text-xl sm:text-2xl font-bold text-[var(--color-brand-navy)] leading-snug italic">
                &ldquo;{reflectionQuote}&rdquo;
              </p>
            </div>
          )}

          {/* ── Infographic Image ── */}
          {infographicImageUrl && (
            <div className="my-14">
              <div className="text-center mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-brand-navy)] text-white text-xs font-bold uppercase tracking-widest">
                  <BookOpen className="w-4 h-4" />
                  Visual Guide
                </span>
              </div>
              <div className="rounded-[2rem] border-4 border-[var(--color-brand-navy)] overflow-hidden shadow-[8px_8px_0px_0px_var(--color-brand-navy)]">
                <img
                  src={infographicImageUrl}
                  alt={infographicImageAlt}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs text-center text-[var(--color-brand-espresso)]/60 italic max-w-lg mx-auto">
                {infographicImageAlt}
              </p>
            </div>
          )}

          {/* ── Visual Infographic Section ── */}
          {infographic && infographic.steps && infographic.steps.length > 0 && (
            <div className="my-14">
              {/* Infographic Header */}
              <div className="bg-[var(--color-brand-navy)] rounded-t-[2.5rem] p-8 sm:p-10 text-center border-4 border-[var(--color-brand-navy)]">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 mb-4">
                  <BookOpen className="w-4 h-4 text-[var(--color-brand-sky)]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-sky)]">
                    Actionable Family Guide
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                  {infographic.title}
                </h3>
                {infographic.summary && (
                  <p className="text-sm sm:text-base text-[var(--color-brand-sky)] font-medium max-w-md mx-auto">
                    {infographic.summary}
                  </p>
                )}
              </div>

              {/* Steps Flow */}
              <div className="bg-[var(--color-brand-off-white)] rounded-b-[2.5rem] border-4 border-t-0 border-[var(--color-brand-navy)] p-6 sm:p-10">
                <div className="space-y-0">
                  {infographic.steps.map((step: any, idx: number) => {
                    const stepColors = [
                      { bg: "bg-[var(--color-brand-sky)]", accent: "text-[var(--color-brand-navy)]", iconBg: "bg-[var(--color-brand-navy)]" },
                      { bg: "bg-[var(--color-brand-pink)]", accent: "text-[var(--color-brand-navy)]", iconBg: "bg-[var(--color-brand-navy)]" },
                      { bg: "bg-[var(--color-brand-rose)]", accent: "text-[var(--color-brand-navy)]", iconBg: "bg-[var(--color-brand-navy)]" },
                      { bg: "bg-[var(--color-brand-mauve)]/20", accent: "text-[var(--color-brand-navy)]", iconBg: "bg-[var(--color-brand-navy)]" },
                    ];
                    const stepIcons = ["👁️", "💬", "🤝", "👣"];
                    const color = stepColors[idx % stepColors.length];
                    const icon = stepIcons[idx % stepIcons.length];

                    return (
                      <div key={idx}>
                        {/* Connecting Arrow */}
                        {idx > 0 && (
                          <div className="flex justify-center py-2">
                            <div className="flex flex-col items-center">
                              <div className="w-0.5 h-5 bg-[var(--color-brand-navy)]/30" />
                              <svg className="w-4 h-4 text-[var(--color-brand-navy)]/50" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 12l-4-4h8l-4 4z" />
                              </svg>
                            </div>
                          </div>
                        )}

                        {/* Step Card */}
                        <div className={`${color.bg} rounded-2xl border-3 border-[var(--color-brand-navy)] p-5 sm:p-7 flex items-start gap-4 sm:gap-6 shadow-[4px_4px_0px_0px_var(--color-brand-navy)]`}>
                          {/* Step Icon Circle */}
                          <div className={`${color.iconBg} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                            <span className="text-2xl sm:text-3xl" role="img" aria-hidden="true">{icon}</span>
                          </div>

                          {/* Step Content */}
                          <div className="flex-grow min-w-0">
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-navy)]/60">
                                Step {step.stepNumber || `0${idx + 1}`}
                              </span>
                            </div>
                            <h4 className={`font-heading font-bold text-lg sm:text-xl ${color.accent} mb-1.5`}>
                              {step.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-[var(--color-brand-espresso)] leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Takeaway */}
                <div className="mt-8 pt-6 border-t-2 border-dashed border-[var(--color-brand-navy)]/15 text-center">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-brand-navy)] text-white text-xs sm:text-sm font-bold shadow-sm">
                    <Heart className="w-4 h-4 fill-[var(--color-brand-sky)] text-[var(--color-brand-sky)]" />
                    <span>Save this guide as a family reminder</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── Editorial & Clinical Disclaimer ── */}
          <div className="my-10 p-6 rounded-2xl bg-amber-50/70 border-2 border-amber-300 text-xs sm:text-sm text-amber-950/90 leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block mb-1">Clinical Note &amp; Educational Resource:</strong>
              These articles are educational resources, not diagnoses or a substitute for professional care. If a child&apos;s distress is persistent, intense, or affects daily life, we encourage families to reach out to a qualified mental health professional.
            </div>
          </div>

          {/* ── Bottom Author Attribution Box ── */}
          <div className="mt-12 p-6 sm:p-8 rounded-[2rem] bg-white border-3 border-[var(--color-brand-navy)] flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src="/prashanthi-simon.png"
              alt="Prashanthi Simon"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[var(--color-brand-navy)] shadow-xs flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] block mb-1">
                Written by
              </span>
              <h4 className="font-heading text-xl font-bold text-[var(--color-brand-navy)] mb-1">
                Prashanthi Simon
              </h4>
              <p className="text-xs text-[var(--color-brand-espresso)]/80 leading-relaxed mb-3">
                Psychologist, Writer, Communications Trainer, Well-being Coach, Career Counsellor, &amp; Child Psychologist with 15+ years of experience.
              </p>
              <Link
                href="/about"
                className="text-xs font-bold text-[var(--color-brand-navy)] hover:text-[var(--color-brand-mauve)] underline underline-offset-4"
              >
                Learn more about Prashanthi &rarr;
              </Link>
            </div>
          </div>

        </div>
      </article>

      {/* ── Related Articles ── */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-20 px-6 bg-white border-t border-[var(--color-brand-navy)]/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)] block mb-2">
                Continue Reading
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--color-brand-navy)]">
                More Articles &amp; Insights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((rel: any) => {
                const relSlug = rel.slug?.current || rel.slug || rel.id;
                const relBg =
                  rel.colorClass ||
                  (rel.colorKey && colorKeyMap[rel.colorKey]) ||
                  "bg-[var(--color-brand-sky)]";

                return (
                  <Link
                    key={relSlug}
                    href={`/blog/${relSlug}`}
                    className="group bg-[var(--color-brand-off-white)] rounded-[2rem] border-3 border-[var(--color-brand-navy)] overflow-hidden shadow-[4px_4px_0px_0px_var(--color-brand-navy)] hover:shadow-[7px_7px_0px_0px_var(--color-brand-navy)] hover:-translate-y-0.5 transition-all flex flex-col justify-between cursor-pointer text-left"
                  >
                    <div className={`${relBg} px-6 py-3.5 border-b-3 border-[var(--color-brand-navy)] flex items-center justify-between`}>
                      <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-navy)]">
                        {rel.category}
                      </span>
                      <span className="text-xs font-bold text-[var(--color-brand-navy)]/80">
                        {rel.readTime || "3 min read"}
                      </span>
                    </div>

                    <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-[var(--color-brand-navy)] leading-snug mb-3 group-hover:text-[var(--color-brand-mauve)] transition-colors">
                          {rel.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[var(--color-brand-espresso)] leading-relaxed mb-6 line-clamp-3">
                          {rel.excerpt}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 text-xs font-bold text-[var(--color-brand-navy)] group-hover:text-[var(--color-brand-mauve)] group-hover:gap-3 transition-all">
                        <span>Read article</span>
                        <span>&rarr;</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Consultation CTA Strip ── */}
      <section className="py-20 px-6 bg-[var(--color-brand-navy)] text-white text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[var(--color-brand-sky)] text-[var(--color-brand-navy)] flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4 text-white">
            Need personalised guidance for your child or family?
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-brand-sky)] mb-8 max-w-2xl leading-relaxed">
            Anima Space provides a safe, confidential, and compassionate space to explore concerns and build practical pathways forward.
          </p>
          <Button href="/book" variant="outline" className="text-white border-white hover:bg-white hover:text-[var(--color-brand-navy)]">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
