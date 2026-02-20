import { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Suppliers",
  description: "Submit your property to Afendi’s supplier network for business stays and workforce demand.",
};

export default function ForSuppliersPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeading
          title="Partner with Afendi."
          subtitle="Connect your property with business demand across the UK, Europe and expanding Middle East markets."
          right={<Button href="/contact#supplier">Submit Property Details</Button>}
        />

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card>
            <h3 className="text-base font-extrabold text-brand-navy">Business-focused demand</h3>
            <p className="mt-2 text-sm text-text-muted">
              Professional guests, workforce placements and corporate clients with clear requirements.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-extrabold text-brand-navy">Standards-first network</h3>
            <p className="mt-2 text-sm text-text-muted">
              We prioritise compliant, quality properties — not budget uncertainty.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-extrabold text-brand-navy">Growth markets</h3>
            <p className="mt-2 text-sm text-text-muted">
              UK foundation with expansion into the UAE and international placements.
            </p>
          </Card>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-surface-soft p-6">
          <div className="text-base font-extrabold text-brand-navy">Minimum standards</div>
          <p className="mt-2 text-sm text-text-muted">
            Submitted properties must meet Afendi’s minimum standards to be considered.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-text-muted md:grid-cols-2">
            {siteConfig.minimumStandards.map((i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-coral" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact#supplier">Submit Property</Button>
            <Button href="/contact" variant="secondary">Talk to us</Button>
          </div>
          <div className="mt-4 text-xs text-text-muted">
            Submitting property details does not guarantee placement. All properties are subject to review and suitability checks.
          </div>
        </div>
      </Container>
    </section>
  );
}
