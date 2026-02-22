import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { getPost, posts } from "@/lib/data/blog";

const SITE_URL = "https://afendiproperty.com";

function blogPostingSchema(post: { title: string; excerpt: string; slug: string; date: string }) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const published = new Date(post.date).toISOString();

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.excerpt,
    image: [`${SITE_URL}/og.png`],
    datePublished: published,
    dateModified: published,
    author: { "@type": "Organization", name: "Afendi Property", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Afendi Property",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  });
}

function blogInternalLinks() {
  return [
    {
      title: "Corporate Relocation",
      desc: "Serviced accommodation sourcing for relocating employees — standards, speed and clear updates.",
      href: "/corporate-relocation",
    },
    {
      title: "Global Mobility Accommodation",
      desc: "A practical overview for HR and mobility teams managing employee relocation and temporary housing.",
      href: "/global-mobility-accommodation",
    },
    {
      title: "Services",
      desc: "Explore serviced accommodation, workforce housing and emergency placements.",
      href: "/services",
    },
    {
      title: "Dubai location page",
      desc: "Dubai corporate relocation and serviced accommodation sourcing — UAE-based delivery.",
      href: "/locations/dubai",
    },
  ];
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = getPost(slug);
  if (!post) {
    return {
      title: "Blog | Afendi Property",
      description:
        "Insights on corporate relocation, serviced accommodation, workforce housing and emergency placements worldwide.",
      alternates: { canonical: `${SITE_URL}/blog` },
      openGraph: {
        title: "Blog | Afendi Property",
        description:
          "Insights on corporate relocation, serviced accommodation, workforce housing and emergency placements worldwide.",
        url: `${SITE_URL}/blog`,
        images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: "Afendi Property" }],
      },
      twitter: { card: "summary_large_image", images: [`${SITE_URL}/og.png`] },
    };
  }

  const title = `${post.title} | Afendi Property`;
  const description = post.excerpt;
  const url = `${SITE_URL}/blog/${post.slug}`;
  const publishedTime = new Date(post.date).toISOString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime,
      modifiedTime: publishedTime,
      images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: "Afendi Property" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/og.png`] },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPost(slug);
  if (!post) return notFound();

  const links = blogInternalLinks();

  return (
    <section className="py-12">
      <Script
        id={`blogposting-schema-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: blogPostingSchema(post) }}
      />

      <Container>
        <div className="text-xs font-semibold text-text-muted">{new Date(post.date).toLocaleDateString()}</div>

        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">{post.title}</h1>

        <p className="mt-3 max-w-[75ch] text-sm text-text-muted">{post.excerpt}</p>

        <div className="mt-8 grid gap-4">
          {post.content.map((para, idx) => (
            <Card key={idx}>
              <p className="text-sm text-text-muted leading-6">{para}</p>
            </Card>
          ))}
        </div>

        {/* Topic cluster internal links */}
        <div className="mt-12">
          <div className="text-sm font-semibold text-text-muted">Next steps</div>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-brand-navy">
            Explore related pages
          </h2>
          <p className="mt-3 max-w-[80ch] text-sm text-text-muted">
            Continue through the topic cluster to request options, understand services, and explore key locations.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {links.map((r) => (
              <Card key={r.href} className="h-full">
                <div className="text-sm font-bold text-brand-navy">{r.title}</div>
                <p className="mt-2 text-sm text-text-muted">{r.desc}</p>
                <div className="mt-4">
                  <Link href={r.href} className="text-sm font-semibold text-brand-navy underline hover:opacity-80">
                    View page
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="text-sm font-semibold text-brand-navy underline hover:opacity-80">
              Send a brief
            </Link>
            <span className="text-sm text-text-muted">or</span>
            <Link href="/services" className="text-sm font-semibold text-brand-navy underline hover:opacity-80">
              browse services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}