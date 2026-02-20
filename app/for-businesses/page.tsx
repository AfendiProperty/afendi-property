import { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "For Businesses",
  description: "Accommodation sourcing and booking for construction, insurance, and working professionals.",
};

export default function ForBusinessesPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeading
          title="Tell us the brief."
          subtitle="Location, dates, budget, headcount — we’ll source, secure and confirm suitable options."
          right={<Button href="/contact">Send Accommodation Request</Button>}
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card>
            <h3 className="text-base font-extrabold text-brand-navy">Designed for decision-makers</h3>
            <p className="mt-2 text-sm text-text-muted">
              Clear options, transparent communication, and less back-and-forth — procurement-friendly from day one.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-extrabold text-brand-navy">Flexible for changing timelines</h3>
            <p className="mt-2 text-sm text-text-muted">
              Extend, reduce, or re-scope stays without chaos. Built for operational reality.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-extrabold text-brand-navy">Support that feels human</h3>
            <p className="mt-2 text-sm text-text-muted">
              Email-led coordination with WhatsApp for urgent clarifications when needed.
            </p>
          </Card>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-surface-soft p-6">
          <div className="text-base font-extrabold text-brand-navy">What we need to start</div>
          <ul className="mt-3 grid gap-2 text-sm text-text-muted md:grid-cols-2">
            {[
              "City + country",
              "Check-in and check-out dates",
              "Headcount / number of units",
              "Budget range",
              "Must-have standards",
              "Urgency (standard/urgent)",
            ].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-coral" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact">Request Accommodation</Button>
            <Button href="/services" variant="secondary">Explore Services</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
