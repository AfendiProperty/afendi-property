import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Corporate Relocation & Employee Accommodation Solutions",
  description:
    "UAE-based global accommodation partner providing corporate relocation support and serviced accommodation sourcing for relocating employees, project teams and urgent placements worldwide.",
  alternates: {
    canonical: "/corporate-relocation",
  },
  openGraph: {
    title: "Corporate Relocation & Employee Accommodation Solutions",
    description:
      "Corporate relocation support and serviced accommodation sourcing for relocating employees, project teams and urgent placements — UAE, UK and worldwide coverage.",
    url: "/corporate-relocation",
  },
  twitter: {
    title: "Corporate Relocation & Employee Accommodation Solutions",
    description:
      "Corporate relocation support and serviced accommodation sourcing — UAE, UK and worldwide coverage.",
  },
};

export default function CorporateRelocationPage() {
  return (
    <section className="py-12">
      <Container>
        <div className="text-sm font-semibold text-text-muted">Solutions</div>

        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy md:text-5xl">
          Corporate relocation, made simple.
        </h1>

        <p className="mt-4 max-w-[75ch] text-text-muted">
          Afendi Property supports employers, HR teams and mobility leads with serviced accommodation sourcing for
          relocating employees. UAE-based delivery with UK and global coverage — fast options, clear communication and
          standards you can trust.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/contact">Request Relocation Support</Button>
          <Button href="/services/serviced-accommodation" variant="secondary">
            View Serviced Accommodation
          </Button>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card>
            <div className="text-sm font-extrabold text-brand-navy">Fast sourcing</div>
            <p className="mt-2 text-sm text-text-muted">
              Options typically within 24–48 hours depending on the brief, location and dates.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-extrabold text-brand-navy">Guaranteed standards</div>
            <p className="mt-2 text-sm text-text-muted">
              Fully furnished stays with Wi-Fi, linen & towels, cleaning support and cooking essentials.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-extrabold text-brand-navy">Procurement-friendly</div>
            <p className="mt-2 text-sm text-text-muted">
              Clear quotes, inclusions and policies before you confirm. Email-first updates with WhatsApp support when
              urgent.
            </p>
          </Card>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-[1fr_0.9fr]">
          <Card>
            <SectionHeading
              title="How it works"
              subtitle="A structured process that keeps your relocation placements on track."
            />
            <ol className="mt-5 grid gap-3 text-sm text-text-muted">
              <li>
                <span className="font-semibold text-brand-navy">1) Share the brief</span> — dates, location, budget, headcount,
                must-haves and policy requirements.
              </li>
              <li>
                <span className="font-semibold text-brand-navy">2) Receive options</span> — curated serviced accommodation
                choices aligned to standards and timeline.
              </li>
              <li>
                <span className="font-semibold text-brand-navy">3) Confirm and book</span> — we coordinate confirmation,
                documentation and next steps via email.
              </li>
              <li>
                <span className="font-semibold text-brand-navy">4) Ongoing support</span> — changes, extensions and urgent
                replacements handled quickly.
              </li>
            </ol>
          </Card>

          <Card className="bg-surface-soft">
            <div className="text-sm font-extrabold text-brand-navy">Ideal for</div>
            <ul className="mt-3 grid gap-2 text-sm text-text-muted">
              <li>HR & Global Mobility teams relocating employees</li>
              <li>Project teams moving staff on short notice</li>
              <li>Companies requiring consistent accommodation standards</li>
              <li>Relocation partners needing accommodation sourcing support</li>
            </ul>

            <div className="mt-6 text-sm font-extrabold text-brand-navy">Coverage</div>
            <p className="mt-2 text-sm text-text-muted">
              Dubai and UAE focus, strong UK coverage, and worldwide sourcing through trusted partners.
            </p>

            <div className="mt-6 grid gap-2">
              <Button href="/contact">Request Relocation Support</Button>
              <Button href="/locations/dubai" variant="secondary">
                Dubai coverage
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <SectionHeading
            title="Frequently asked questions"
            subtitle="Quick answers for HR teams and mobility leads."
          />

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              {
                q: "How fast can you place relocating employees?",
                a: "Most briefs can be turned around with options within 24–48 hours, depending on location, dates and budget.",
              },
              {
                q: "Do you support UAE and UK relocations?",
                a: "Yes. We operate with a UAE focus and strong UK coverage, plus global sourcing through our network.",
              },
              {
                q: "What information do you need to start?",
                a: "Dates, location preference, number of guests, budget range, length of stay, and must-haves. For corporate relocations, share policy requirements too.",
              },
              {
                q: "Do you handle extensions or changes?",
                a: "Yes. We support extensions, schedule changes and urgent replacements, keeping updates clear and coordinated.",
              },
              {
                q: "What standards do you require for properties?",
                a: "We prioritise fully furnished stays with Wi-Fi, linen & towels, cleaning support, cooking essentials and dependable management.",
              },
              {
                q: "How do booking and payment work?",
                a: "We coordinate options and booking steps by email. Payment/invoicing depends on supplier terms — we confirm all costs and policies before you proceed.",
              },
            ].map((f) => (
              <Card key={f.q}>
                <div className="text-sm font-bold text-brand-navy">{f.q}</div>
                <p className="mt-2 text-sm text-text-muted">{f.a}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Start a Relocation Brief</Button>
            <Button href="/services" variant="secondary">
              View all services
            </Button>
          </div>

          <div className="mt-6 text-sm text-text-muted">
            Prefer email?{" "}
            <Link href="/contact" className="font-semibold text-brand-navy underline">
              Send your brief
            </Link>{" "}
            and we’ll respond with options and next steps.
          </div>
        </div>
      </Container>
    </section>
  );
}