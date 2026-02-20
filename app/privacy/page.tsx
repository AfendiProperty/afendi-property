import { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Afendi Property collects and uses information submitted through our website.",
};

export default function PrivacyPage() {
  return (
    <section className="py-12">
      <Container>
        <h1 className="text-3xl font-extrabold text-brand-navy">Privacy Policy</h1>
        <p className="mt-3 max-w-[75ch] text-sm text-text-muted">
          This is a starter privacy policy for Phase 1. You should have it reviewed by a legal professional
          for your specific business and jurisdictions.
        </p>

        <div className="mt-6 grid gap-4">
          <Card>
            <h2 className="text-base font-extrabold text-brand-navy">What we collect</h2>
            <p className="mt-2 text-sm text-text-muted">
              Information you submit via forms (contact details, accommodation requirements, property details) and basic analytics (if enabled).
            </p>
          </Card>
          <Card>
            <h2 className="text-base font-extrabold text-brand-navy">How we use it</h2>
            <p className="mt-2 text-sm text-text-muted">
              We use your information to respond to requests, provide sourcing/booking services, and manage supplier onboarding. We do not sell personal data.
            </p>
          </Card>
          <Card>
            <h2 className="text-base font-extrabold text-brand-navy">Data retention</h2>
            <p className="mt-2 text-sm text-text-muted">
              We retain form submissions for as long as needed to provide services and for legitimate business purposes, then delete or anonymize where appropriate.
            </p>
          </Card>
          <Card>
            <h2 className="text-base font-extrabold text-brand-navy">Contact</h2>
            <p className="mt-2 text-sm text-text-muted">
              Questions? Email enquiries@afendiproperty.com.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
