import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

const SITE_URL = "https://afendiproperty.com";
const PAGE_PATH = "/global-mobility-accommodation";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const faqs = [
  {
    q: "What is global mobility accommodation?",
    a: "Global mobility accommodation is business-ready housing arranged for employees relocating internationally or domestically—typically serviced apartments or managed stays that meet corporate standards and policy requirements.",
  },
  {
    q: "How quickly can you provide options?",
    a: "Most briefs can be turned around with options within 24–48 hours, depending on destination, dates and budget. Urgent placements are prioritised with clear, email-first updates.",
  },
  {
    q: "Do you support both corporate relocation and project teams?",
    a: "Yes. We support employee relocations, business travel stays, project deployments and workforce housing—scaling from one placement to multi-unit requirements.",
  },
  {
    q: "Which destinations do you cover?",
    a: "We operate with a UAE focus (including Dubai), strong UK coverage, and worldwide sourcing through trusted partners across key business hubs and relocation corridors.",
  },
  {
    q: "What standards do your stays meet?",
    a: "We prioritise fully furnished accommodation with Wi-Fi, linen and towels, cleaning support, cooking essentials, and dependable management—aligned to corporate expectations.",
  },
  {
    q: "How does booking and payment work?",
    a: "We coordinate shortlisted options and booking steps by email. Payment and invoicing depend on supplier terms. We confirm total costs, inclusions and policies before you proceed.",
  },
  {
    q: "Can you support longer stays and extensions?",
    a: "Yes. We support longer stays, extensions and changes. If dates shift, we manage adjustments quickly and keep communications clear for teams and travellers.",
  },
  {
    q: "What do you need to start a brief?",
    a: "Destination, dates, length of stay, number of guests, budget range, preferred areas, and must-haves. For corporate relocation, share any policy requirements and we’ll align options accordingly.",
  },
];

function faqSchema(items: { q: string; a: string }[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  });
}

export const metadata: Metadata = {
  title: "Global Mobility Accommodation & Corporate Housing Solutions",
  description:
    "UAE-based global accommodation partner for global mobility teams—serviced accommodation, corporate housing and relocation stays for employees, project teams and urgent placements worldwide.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Global Mobility Accommodation & Corporate Housing Solutions",
    description:
      "Serviced accommodation and corporate housing for global mobility—UAE (Dubai), UK and worldwide coverage through a trusted partner network.",
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: "Afendi Property — Global Mobility Accommodation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Mobility Accommodation & Corporate Housing Solutions",
    description:
      "Serviced accommodation and corporate housing for global mobility—UAE (Dubai), UK and worldwide coverage.",
    images: [`${SITE_URL}/og.png`],
  },
};

export default function GlobalMobilityAccommodationPage() {
  return (
    <section className="py-12">
      <Container>
        {/* FAQ schema */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: faqSchema(faqs) }}
        />

        <div className="text-sm font-semibold text-text-muted">Authority page</div>

        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy md:text-5xl">
          Global mobility accommodation, done properly.
        </h1>

        <p className="mt-4 max-w-[80ch] text-text-muted">
          Afendi Property supports Global Mobility, HR and Talent teams with business-ready serviced accommodation and
          corporate housing for relocating employees. UAE-based delivery with strong UK coverage and worldwide sourcing
          through trusted partners—fast options, clear communication and standards you can rely on.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/contact">Start a Mobility Brief</Button>
          <Button href="/corporate-relocation" variant="secondary">
            Corporate Relocation
          </Button>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card>
            <div className="text-sm font-extrabold text-brand-navy">24–48h turnaround</div>
            <p className="mt-2 text-sm text-text-muted">
              Options quickly—aligned to destination, dates, budget and corporate requirements.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-extrabold text-brand-navy">Corporate-ready stays</div>
            <p className="mt-2 text-sm text-text-muted">
              Fully furnished, Wi-Fi, linen & towels, cleaning support, cooking essentials and dependable management.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-extrabold text-brand-navy">Clear comms</div>
            <p className="mt-2 text-sm text-text-muted">
              Email-first coordination for auditability, with WhatsApp support when timelines are urgent.
            </p>
          </Card>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-[1fr_0.9fr]">
          <Card>
            <SectionHeading
              title="Built for mobility teams"
              subtitle="A simple process that reduces admin while maintaining standards."
            />
            <ul className="mt-5 grid gap-3 text-sm text-text-muted">
              <li>
                <span className="font-semibold text-brand-navy">Employee relocation stays</span> — temporary housing while
                employees settle in.
              </li>
              <li>
                <span className="font-semibold text-brand-navy">Project deployments</span> — scalable workforce and team
                accommodation near sites.
              </li>
              <li>
                <span className="font-semibold text-brand-navy">Business travel & extended stays</span> — consistent
                standards for repeat travel.
              </li>
              <li>
                <span className="font-semibold text-brand-navy">Urgent placements</span> — rapid sourcing when plans
                change unexpectedly.
              </li>
            </ul>

            <div className="mt-6 text-sm text-text-muted">
              Prefer to browse by region? Explore{" "}
              <Link className="font-semibold text-brand-navy underline hover:opacity-80" href="/locations">
                locations
              </Link>{" "}
              or see{" "}
              <Link className="font-semibold text-brand-navy underline hover:opacity-80" href="/services">
                services
              </Link>
              .
            </div>
          </Card>

          <Card className="bg-surface-soft">
            <div className="text-sm font-extrabold text-brand-navy">Coverage</div>
            <p className="mt-2 text-sm text-text-muted">
              UAE focus (Dubai and wider Emirates), strong UK coverage, and global sourcing through trusted partners
              across key business hubs.
            </p>

            <div className="mt-5 grid gap-2">
              <Button href="/locations/dubai">Dubai coverage</Button>
              <Button href="/locations/united-kingdom" variant="secondary">
                UK coverage
              </Button>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-white p-4">
              <div className="text-sm font-bold text-brand-navy">What we need from you</div>
              <ul className="mt-2 grid gap-2 text-sm text-text-muted">
                <li>Destination + preferred areas</li>
                <li>Dates + length of stay</li>
                <li>Guests + policy requirements</li>
                <li>Budget range + must-haves</li>
              </ul>
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <SectionHeading title="How it works" subtitle="A procurement-friendly flow from brief to booking." />

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-sm font-extrabold text-brand-navy">1) Submit a brief</div>
              <p className="mt-2 text-sm text-text-muted">
                Dates, destination, budget, guest count, policy requirements and must-haves.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-extrabold text-brand-navy">2) Receive curated options</div>
              <p className="mt-2 text-sm text-text-muted">
                We confirm availability, pricing and inclusions—then share a shortlist to choose from.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-extrabold text-brand-navy">3) Confirm & coordinate</div>
              <p className="mt-2 text-sm text-text-muted">
                We manage booking steps and documentation, and support changes or extensions if needed.
              </p>
            </Card>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Start a Mobility Brief</Button>
            <Button href="/for-businesses" variant="secondary">
              For Businesses
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <SectionHeading title="Frequently asked questions" subtitle="Fast answers for Global Mobility and HR teams." />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {faqs.map((f) => (
              <Card key={f.q}>
                <div className="text-sm font-bold text-brand-navy">{f.q}</div>
                <p className="mt-2 text-sm text-text-muted">{f.a}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-sm text-text-muted">
            Prefer email?{" "}
            <Link href="/contact" className="font-semibold text-brand-navy underline hover:opacity-80">
              Send your brief
            </Link>{" "}
            and we’ll respond with options and next steps.
          </div>
        </div>
      </Container>
    </section>
  );
}
