import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="pt-12">
        <Container className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-soft px-3 py-1 text-xs font-semibold text-text-muted">
              UK-strong • Global sourcing • Expanding across the UAE
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-navy md:text-5xl">
              Business stays. Delivered properly.
            </h1>
            <p className="mt-4 max-w-[65ch] text-base text-text-muted">
              Global serviced accommodation, workforce housing and emergency stays — sourced and booked with confidence.
              Email-first coordination, with WhatsApp support when urgent.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">Request Accommodation</Button>
              <Button href="/for-suppliers" variant="secondary">
                Become a Supplier
              </Button>
            </div>
            <div className="mt-5 text-sm text-text-muted">
              Primary contact: <span className="font-semibold text-brand-navy">{siteConfig.email}</span> • WhatsApp:{" "}
              <span className="font-semibold text-brand-navy">{siteConfig.whatsapp}</span>
            </div>
          </div>

          <Card className="bg-surface-soft">
            <div className="flex items-start gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-brand-coral shadow-soft">
                <Image src="/logo.png" alt="Afendi logo" fill sizes="48px" className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-brand-navy">Minimum standards, always</div>
                <p className="mt-1 text-sm text-text-muted">
                  Fully furnished • Wi‑Fi • Weekly cleaning • Linen & towels • Cooking essentials • Local H&S compliance
                </p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="rounded-lg border border-border bg-white p-3">
                <div className="text-sm font-extrabold text-brand-navy">24–48h</div>
                <div className="text-xs text-text-muted">Typical sourcing</div>
              </div>
              <div className="rounded-lg border border-border bg-white p-3">
                <div className="text-sm font-extrabold text-brand-navy">Global</div>
                <div className="text-xs text-text-muted">Coverage</div>
              </div>
              <div className="rounded-lg border border-border bg-white p-3">
                <div className="text-sm font-extrabold text-brand-navy">Email-first</div>
                <div className="text-xs text-text-muted">Clear comms</div>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <section className="mt-12 border-y border-border bg-surface-soft py-12">
        <Container>
          <SectionHeading
            title="Accommodation sourcing without the hassle"
            subtitle="Procurement-friendly clarity with an Airbnb-level experience — fast sourcing, quality standards, and human support."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card>
              <div className="inline-grid h-8 w-8 place-items-center rounded-lg bg-brand-coral/10 text-brand-coral font-black">✓</div>
              <h3 className="mt-3 text-base font-bold text-brand-navy">Global supply, local certainty</h3>
              <p className="mt-2 text-sm text-text-muted">
                We source vetted stays worldwide — with strong UK coverage and expanding Middle East supply.
              </p>
            </Card>
            <Card>
              <div className="inline-grid h-8 w-8 place-items-center rounded-lg bg-brand-coral/10 text-brand-coral font-black">✓</div>
              <h3 className="mt-3 text-base font-bold text-brand-navy">Built for urgent timelines</h3>
              <p className="mt-2 text-sm text-text-muted">
                Emergency moves, disrupted projects, short-notice placements — handled quickly with clear updates.
              </p>
            </Card>
            <Card>
              <div className="inline-grid h-8 w-8 place-items-center rounded-lg bg-brand-coral/10 text-brand-coral font-black">✓</div>
              <h3 className="mt-3 text-base font-bold text-brand-navy">Quality you can count on</h3>
              <p className="mt-2 text-sm text-text-muted">
                Fully furnished, Wi‑Fi, weekly cleaning, linen, cooking essentials, and local health & safety compliance.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeading
            title="Tell us what you need"
            subtitle="A quick brief is all it takes. We’ll source, shortlist, and confirm the best-fit options."
            right={<Button href="/contact">Send a Request</Button>}
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card>
              <h3 className="text-base font-bold text-brand-navy">1) Share dates & requirements</h3>
              <p className="mt-2 text-sm text-text-muted">Location, dates, headcount, budget, and must-haves.</p>
            </Card>
            <Card>
              <h3 className="text-base font-bold text-brand-navy">2) We source best-fit options</h3>
              <p className="mt-2 text-sm text-text-muted">We confirm availability and shortlist options that match your standards.</p>
            </Card>
            <Card>
              <h3 className="text-base font-bold text-brand-navy">3) Move in with confidence</h3>
              <p className="mt-2 text-sm text-text-muted">Smooth check-in and responsive support across the stay.</p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-brand-navy py-12 text-white">
        <Container>
          <h2 className="text-xl font-extrabold md:text-2xl">Teams choose Afendi for reliability</h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-brand-coral" />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Afendi placed our team near site within 24 hours. Smooth from first call to check-in.", "Ops Manager, Construction"],
              ["During a claim disruption, they sourced emergency accommodation quickly and kept us updated.", "Claims Lead, Insurance"],
              ["Consistent quality across cities — exactly what we needed for project-based travel.", "Project Director"],
            ].map(([quote, by]) => (
              <div key={by} className="rounded-xl border border-white/15 bg-white/5 p-5">
                <p className="text-sm text-white/95">{quote}</p>
                <div className="mt-3 text-xs text-white/80">{by}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/services" variant="secondary" className="border-white/25 text-white hover:bg-white/10 hover:border-white">
              Explore services
            </Button>
            <Button href="/contact">Request accommodation</Button>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <SectionHeading
            title="Minimum property standards"
            subtitle="Every stay we source or list must meet these baseline requirements."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {siteConfig.minimumStandards.map((s) => (
              <Card key={s}>
                <div className="inline-grid h-8 w-8 place-items-center rounded-lg bg-brand-coral/10 text-brand-coral font-black">✓</div>
                <div className="mt-3 text-base font-bold text-brand-navy">{s}</div>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-border bg-surface-soft p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-base font-extrabold text-brand-navy">Have properties that meet these standards?</div>
                <div className="mt-1 text-sm text-text-muted">Submit your details and we’ll review your listing for supplier onboarding.</div>
              </div>
              <Button href="/for-suppliers" variant="secondary">Become a Supplier</Button>
            </div>
          </div>

          <div className="mt-10 text-sm text-text-muted">
            Looking for answers? Visit <Link className="font-semibold text-brand-navy underline hover:opacity-80" href="/faqs">FAQs</Link>.
          </div>
        </Container>
      </section>
    </>
  );
}
