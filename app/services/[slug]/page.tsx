import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: post.title,
    description: post.excerpt,
    image: [`${SITE_URL}/og.png`],
    datePublished: published,
    dateModified: published,
    author: {
      "@type": "Organization",
      name: "Afendi Property",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Afendi Property",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  });
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
        images: [
          {
            url: `${SITE_URL}/og.png`,
            width: 1200,
            height: 630,
            alt: "Afendi Property — Global Corporate Relocation & Serviced Accommodation",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        images: [`${SITE_URL}/og.png`],
      },
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
      images: [
        {
          url: `${SITE_URL}/og.png`,
          width: 1200,
          height: 630,
          alt: "Afendi Property — Global Corporate Relocation & Serviced Accommodation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og.png`],
    },
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

  return (
    <section className="py-12">
      {/* BlogPosting Schema */}
      <Script
        id={`blogposting-schema-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: blogPostingSchema(post) }}
      />

      <Container>
        <div className="text-xs font-semibold text-text-muted">
          {new Date(post.date).toLocaleDateString()}
        </div>

        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
          {post.title}
        </h1>

        <p className="mt-3 max-w-[75ch] text-sm text-text-muted">{post.excerpt}</p>

        <div className="mt-8 grid gap-4">
          {post.content.map((para, idx) => (
            <Card key={idx}>
              <p className="text-sm text-text-muted leading-6">{para}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}