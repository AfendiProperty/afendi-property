import { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ClientRequestForm } from "@/components/forms/ClientRequestForm";
import { SupplierSubmissionForm } from "@/components/forms/SupplierSubmissionForm";
import { Card } from "@/components/Card";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request accommodation or submit a property to Afendi Property.",
};

export default function ContactPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeading
          title="Tell us what you need."
          subtitle="Two quick forms — one for businesses sourcing stays, one for suppliers submitting properties."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <div className="scroll-mt-24" id="enquiry" />
            <ClientRequestForm />
          </div>
          <div>
            <div className="scroll-mt-24" id="supplier" />
            <SupplierSubmissionForm />
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card className="bg-surface-soft">
            <div className="text-sm font-extrabold text-brand-navy">Prefer email?</div>
            <p className="mt-2 text-sm text-text-muted">
              Email us your brief and we’ll respond with next steps.
            </p>
            <div className="mt-3 text-sm font-semibold text-brand-navy">{siteConfig.email}</div>
          </Card>

          <Card className="bg-surface-soft">
            <div className="text-sm font-extrabold text-brand-navy">Urgent request?</div>
            <p className="mt-2 text-sm text-text-muted">
              Send the form first if you can, then WhatsApp us for urgent clarification.
            </p>
            <div className="mt-3 text-sm font-semibold text-brand-navy">{siteConfig.whatsapp}</div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
