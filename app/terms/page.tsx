import { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for Afendi Property’s website and services.",
};

export default function TermsPage() {
  return (
    <section className="py-12">
      <Container>
        <h1 className="text-3xl font-extrabold text-brand-navy">Terms</h1>
        <p className="mt-3 max-w-[75ch] text-sm text-text-muted">
          This is a starter terms page for Phase 1. You should have it reviewed by a legal professional.
        </p>

        <div className="mt-6 grid gap-4">
          <Card>
            <h2 className="text-base font-extrabold text-brand-navy">Service description</h2>
            <p className="mt-2 text-sm text-text-muted">
              Afendi Property provides sourcing and booking services for serviced accommodation, workforce housing, and emergency stays. Availability and final terms depend on suppliers.
            </p>
          </Card>
          <Card>
            <h2 className="text-base font-extrabold text-brand-navy">Website use</h2>
            <p className="mt-2 text-sm text-text-muted">
              You agree not to misuse the site, interfere with its operation, or submit unlawful content.
            </p>
          </Card>
          <Card>
            <h2 className="text-base font-extrabold text-brand-navy">Liability</h2>
            <p className="mt-2 text-sm text-text-muted">
              To the extent permitted by law, Afendi Property is not liable for indirect losses arising from the use of this site. Bookings are subject to supplier terms and availability.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
