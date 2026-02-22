import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Corporate Relocation & Serviced Accommodation Solutions",
  description:
    "UAE-based global accommodation partner providing corporate relocation support, serviced accommodation sourcing, workforce housing and emergency stays worldwide.",
};

const related = [
  {
    title: "Corporate Relocation",
    desc: "Serviced accommodation sourcing for relocating employees — procurement-friendly, fast options.",
    href: "/corporate-relocation",
  },
  {
    title: "Global Mobility Accommodation",
    desc: "Built for HR and mobility teams managing assignments and relocations.",
    href: "/global-mobility-accommodation",
  },
  {
    title: "Dubai Coverage",
    desc: "UAE-based delivery with strong Dubai supply and partner network.",
    href: "/locations/dubai",
  },
  {
    title: "Request Accommodation",
    desc: "Send your brief — we respond by email with options and next steps.",
    href: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeading
          title="Services"
          subtitle="Short-term accommodation, emergency housing and serviced stays — built for business reliability."
          right={
            <div className="flex flex-wrap gap-2">
              <Button href="/contact">Request Accommodation</Button>
              <Button href="/corporate-relocation" variant="secondary">
                Corporate Relocation
              </Button>
            </div>
          }
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

        {/* Topic cluster boost */}
        <div className="mt-12">
          <div className="text-sm font-extrabold text-brand-navy">Related solutions</div>
          <p className="mt-2 max-w-[80ch] text-sm text-text-muted">
            Explore connected pages used by HR, mobility, procurement and operations teams when sourcing accommodation.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {related.map((r) => (
              <Link key={r.href} href={r.href} className="group">
                <Card className="h-full transition hover:shadow-card">
                  <div className="text-sm font-extrabold text-brand-navy group-hover:opacity-90">{r.title}</div>
                  <p className="mt-2 text-sm text-text-muted">{r.desc}</p>
                  <div className="mt-4 text-sm font-semibold text-brand-navy underline">View</div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}