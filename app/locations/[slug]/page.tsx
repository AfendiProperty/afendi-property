import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { getLocation, locations, type Location } from "@/lib/data/locations";

const SITE_URL = "https://afendiproperty.com";

function faqSchema(faqs: { q: string; a: string }[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });
}

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const l = getLocation(slug) as Location | undefined;
  if (!l) {
    return {
      title: "Locations | Afendi Property",
      description:
        "UAE-based global accommodation partner providing corporate relocation support, serviced accommodation sourcing, workforce housing and emergency stays worldwide.",
      alternates: { canonical: `${SITE_URL}/locations` },
      openGraph: {
        title: "Locations | Afendi Property",
        description:
          "UAE-based global accommodation partner providing corporate relocation support, serviced accommodation sourcing, workforce housing and emergency stays worldwide.",
        url: `${SITE_URL}/locations`,
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

  const title = l.seoTitle || `${l.title} | Afendi Property`;
  const description =
    l.seoDescription ||
    l.summary ||
    "UAE-based global accommodation partner providing corporate relocation support, serviced accommodation sourcing, workforce housing and emergency stays worldwide.";

  const url = `${SITE_URL}/locations/${l.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
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

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const l = getLocation(slug);
  if (!l) return notFound();

  const faqs = Array.isArray(l.faqs) ? l.faqs : [];
  const showFaqs = faqs.length > 0;

  return (
    <section className="py-12">
      <Container>
        {/* FAQ Schema (only if FAQs exist) */}
        {showFaqs && (
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: faqSchema(faqs) }}
          />
        )}

        <div className="text-sm font-semibold text-text-muted">Locations</div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">{l.title}</h1>
        <p className="mt-4 max-w-[70ch] text-text-muted">{l.summary}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_0.9fr]">
          <Card>
            <div className="text-sm font-bold text-brand-navy">Coverage highlights</div>
            <ul className="mt-3 grid gap-2 text-sm text-text-muted">
              {l.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-coral" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-surface-soft">
            <div className="text-sm font-extrabold text-brand-navy">Need accommodation in {l.title}?</div>
            <p className="mt-2 text-sm text-text-muted">
              Send your brief and we’ll respond by email with options and next steps.
            </p>
            <div className="mt-5 grid gap-2">
              <Button href="/contact">Request Accommodation</Button>
              <Button href="/corporate-relocation" variant="secondary">
                Corporate Relocation
              </Button>
            </div>
          </Card>
        </div>

        {/* Visible FAQs (for any location that has them) */}
        {showFaqs && (
          <div className="mt-10">
            <div className="text-sm font-extrabold text-brand-navy">{l.title} FAQs</div>
            <p className="mt-2 max-w-[80ch] text-sm text-text-muted">
              Common questions from corporate clients, relocation teams and project managers sourcing accommodation in{" "}
              {l.title}.
            </p>

            <div className="mt-4 grid gap-3">
              {faqs.map((f) => (
                <Card key={f.q}>
                  <div className="text-sm font-bold text-brand-navy">{f.q}</div>
                  <p className="mt-2 text-sm text-text-muted">{f.a}</p>
                </Card>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}