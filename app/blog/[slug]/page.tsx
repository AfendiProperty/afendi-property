import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";
import { getPost, posts } from "@/lib/data/blog";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: "Blog" };
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return notFound();

  return (
    <section className="py-12">
      <Container>
        <div className="text-xs font-semibold text-text-muted">{new Date(post.date).toLocaleDateString()}</div>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">{post.title}</h1>
        <p className="mt-3 max-w-[75ch] text-sm text-text-muted">{post.excerpt}</p>

        <div className="mt-8 grid gap-4">
          {post.content.map((para, idx) => (
            <Card key={idx}>
              <p className="text-sm text-text-muted leading-6">{para}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
