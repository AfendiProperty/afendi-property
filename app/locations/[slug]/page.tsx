import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { getLocation, locations } from "@/lib/data/locations";

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const l = getLocation(params.slug);
  if (!l) return { title: "Location | Afendi Property" };

  const title = l.seoTitle || `${l.title} | Afendi Property`;
  const description =
    l.seoDescription ||
    l.summary ||
    "UAE-based global accommodation partner providing corporate relocation support, serviced accommodation sourcing, workforce housing and emergency stays worldwide.";

  return {
    title,
    description,
    alternates: {
      canonical: `/locations/${l.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/locations/${l.slug}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function LocationDetailPage({ params }: { params: { slug: string } }) {
  const l = getLocation(params.slug);
  if (!l) return notFound();

  return (
    <section className="py-12">
      <Container>
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
              <Button href="/for-suppliers" variant="secondary">Become a Supplier</Button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
