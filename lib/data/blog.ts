export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  content: string[]; // paragraphs
};

export const posts: BlogPost[] = [
  {
    slug: "what-business-accommodation-should-include",
    title: "What business accommodation should include",
    excerpt: "A simple checklist for reliable serviced accommodation — standards that reduce operational issues.",
    date: "2026-02-20",
    content: [
      "Business stays need more than a bed. They need reliable Wi‑Fi, a clean and safe environment, and predictable check-in.",
      "At Afendi, our baseline standards include fully furnished interiors, weekly cleaning, fresh linen and towels, cooking essentials, and compliance with local health and safety requirements.",
      "If you’re sourcing for a team, prioritize proximity to site, flexible terms, and clear communication with a single point of contact."
    ],
  },
];
export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
