import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { locations } from "@/lib/data/locations";

export const metadata: Metadata = {
  title: "Locations",
  description: "Where we source accommodation — UK-strong, expanding across the UAE, and global coverage.",
};

export default function LocationsPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeading
          title="Locations"
          subtitle="UK-strong coverage with expansion across the UAE — plus worldwide sourcing where needed."
          right={<Button href="/contact">Request Accommodation</Button>}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {locations.map((l) => (
            <Link key={l.slug} href={`/locations/${l.slug}`}>
              <Card className="h-full hover:shadow-card transition">
                <h3 className="text-base font-extrabold text-brand-navy">{l.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{l.summary}</p>
                <ul className="mt-4 grid gap-1 text-sm text-text-muted">
                  {l.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-coral" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 text-sm font-semibold text-brand-navy underline">View details</div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
