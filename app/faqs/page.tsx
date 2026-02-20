import { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { faqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about Afendi’s accommodation sourcing and booking services.",
};

export default function FaqsPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeading
          title="FAQs"
          subtitle="Quick answers to common questions — if you need anything else, email us and we’ll respond promptly."
          right={<Button href="/contact">Request Accommodation</Button>}
        />

        <div className="mt-6 grid gap-4">
          {faqs.map((f) => (
            <Card key={f.q}>
              <div className="text-base font-extrabold text-brand-navy">{f.q}</div>
              <p className="mt-2 text-sm text-text-muted">{f.a}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
