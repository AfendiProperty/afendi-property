import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/data/services";

const SITE_URL = "https://afendiproperty.com";

export const metadata: Metadata = {
  title: "Corporate Relocation, Serviced Accommodation & Workforce Housing",
  description:
    "UAE-based global accommodation partner providing corporate relocation support, serviced accommodation sourcing, workforce housing and emergency placements across Dubai, the UK and worldwide.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Corporate Relocation, Serviced Accommodation & Workforce Housing",
    description:
      "Corporate relocation support, serviced accommodation sourcing and workforce housing solutions — UAE, UK and global coverage.",
    url: `${SITE_URL}/services`,
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: "Afendi Property — Corporate Relocation & Serviced Accommodation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Relocation, Serviced Accommodation & Workforce Housing",
    description:
      "Corporate relocation and serviced accommodation solutions — UAE, UK and global coverage.",
    images: [`${SITE_URL}/og.png`],
  },
};

export default function ServicesPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeading
          title="Services"
          subtitle="Corporate relocation, serviced accommodation and workforce housing — built for business reliability across Dubai, the UK and worldwide."
          right={
            <div className="flex flex-wrap gap-2">
              <Button href="/contact">Request Accommodation</Button>
              <Button href="/corporate-relocation" variant="secondary">
                Corporate Relocation
              </Button>
            </div>
          }
        />

        {/* Core service cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              <Card className="h-full hover:shadow-card transition">
                <h3 className="text-base font-extrabold text-brand-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">{s.summary}</p>

                <ul className="mt-4 grid gap-1 text-sm text-text-muted">
                  {s.bullets.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-coral" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 text-sm font-semibold text-brand-navy underline">
                  View details
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Authority boost block */}
        <div className="mt-12 rounded-2xl border border-border bg-surface-soft p-6">
          <div className="text-sm font-extrabold text-brand-navy">
            Managing employee relocation or global mobility?
          </div>

          <p className="mt-2 text-sm text-text-muted max-w-[85ch]">
            For HR, Global Mobility and Talent teams coordinating temporary housing,
            explore our dedicated authority page covering corporate housing,
            employee relocation accommodation and global coverage.
          </p>

          <div className="mt-4">
            <Button
              href="/global-mobility-accommodation"
              variant="secondary"
            >
              Global Mobility Accommodation
            </Button>
          </div>
        </div>

        {/* Secondary internal linking */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card>
            <div className="text-sm font-extrabold text-brand-navy">
              Dubai coverage
            </div>
            <p className="mt-2 text-sm text-text-muted">
              UAE-based delivery with strong Dubai supply for relocation,
              workforce housing and urgent placements.
            </p>
            <div className="mt-4">
              <Link
                className="text-sm font-semibold text-brand-navy underline"
                href="/locations/dubai"
              >
                Dubai location page
              </Link>
            </div>
          </Card>

          <Card>
            <div className="text-sm font-extrabold text-brand-navy">
              United Kingdom
            </div>
            <p className="mt-2 text-sm text-text-muted">
              Strong coverage across major UK cities supporting corporate
              relocation and project deployments.
            </p>
            <div className="mt-4">
              <Link
                className="text-sm font-semibold text-brand-navy underline"
                href="/locations/united-kingdom"
              >
                UK location page
              </Link>
            </div>
          </Card>

          <Card>
            <div className="text-sm font-extrabold text-brand-navy">
              Corporate Relocation
            </div>
            <p className="mt-2 text-sm text-text-muted">
              A structured relocation process for HR and mobility teams
              requiring dependable accommodation sourcing.
            </p>
            <div className="mt-4">
              <Link
                className="text-sm font-semibold text-brand-navy underline"
                href="/corporate-relocation"
              >
                View Corporate Relocation
              </Link>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}