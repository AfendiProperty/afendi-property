import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { getService, services } from "@/lib/data/services";

const SITE_URL = "https://afendiproperty.com";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = getService(slug);
  if (!service) {
    return {
      title: "Services | Afendi Property",
      description:
        "UAE-based global accommodation partner providing corporate relocation support, serviced accommodation sourcing, workforce housing and emergency stays worldwide.",
      alternates: { canonical: `${SITE_URL}/services` },
      openGraph: {
        title: "Services | Afendi Property",
        description:
          "UAE-based global accommodation partner providing corporate relocation support, serviced accommodation sourcing, workforce housing and emergency stays worldwide.",
        url: `${SITE_URL}/services`,
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

  const baseTitle = service.title;
  const title = `${baseTitle} | Afendi Property`;
  const description =
    service.summary ||
    "UAE-based global accommodation partner providing corporate relocation support, serviced accommodation sourcing, workforce housing and emergency stays worldwide.";

  const url = `${SITE_URL}/services/${service.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
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

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = getService(slug);
  if (!service) return notFound();

  return (
    <section className="py-12">
      <Container>
        <div className="text-sm font-semibold text-text-muted">Services</div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">{service.title}</h1>
        <p className="mt-4 max-w-[70ch] text-text-muted">{service.detail}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_0.9fr]">
          <Card>
            <div className="text-sm font-bold text-brand-navy">What you get</div>
            <ul className="mt-3 grid gap-2 text-sm text-text-muted">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-coral" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-sm font-bold text-brand-navy">Ideal for</div>
            <ul className="mt-3 grid gap-2 text-sm text-text-muted">
              {service.idealFor.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-navy" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-surface-soft">
            <div className="text-sm font-extrabold text-brand-navy">Ready to get options?</div>
            <p className="mt-2 text-sm text-text-muted">
              Tell us dates, location, budget and must-haves. We’ll respond via email with next steps.
            </p>
            <div className="mt-5 grid gap-2">
              <Button href="/contact">Request Accommodation</Button>
              <Button href="/for-suppliers" variant="secondary">
                Become a Supplier
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
