import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { posts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on business accommodation, workforce stays and emergency housing.",
};

export default function BlogIndexPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeading
          title="Blog"
          subtitle="Practical guidance for business accommodation, workforce placements and urgent stays."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`}>
              <Card className="h-full hover:shadow-card transition">
                <div className="text-xs font-semibold text-text-muted">{new Date(p.date).toLocaleDateString()}</div>
                <h3 className="mt-2 text-base font-extrabold text-brand-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{p.excerpt}</p>
                <div className="mt-4 text-sm font-semibold text-brand-navy underline">Read more</div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
