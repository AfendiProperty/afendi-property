import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Serviced accommodation, workforce accommodation and emergency housing — sourced and booked worldwide.",
};

export default function ServicesPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeading
          title="Services"
          subtitle="Short-term accommodation, emergency housing and serviced stays — built for business reliability."
          right={<Button href="/contact">Request Accommodation</Button>}
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`}>
              <Card className="h-full hover:shadow-card transition">
                <h3 className="text-base font-extrabold text-brand-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{s.summary}</p>
                <ul className="mt-4 grid gap-1 text-sm text-text-muted">
                  {s.bullets.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-coral" />
                      <span>{b}</span>
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
