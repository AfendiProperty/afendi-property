export type Service = {
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
  detail: string;
  idealFor: string[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "serviced-accommodation",
    title: "Serviced Accommodation",
    summary: "Flexible furnished stays for business travel, relocation, and project-based work.",
    seoTitle: "Serviced Accommodation Worldwide for Business & Relocation",
    seoDescription:
      "UAE-based global sourcing of serviced accommodation for business travel and employee relocation. Furnished stays with reliable standards and clear coordination.",
    bullets: ["Fully furnished", "Wi-Fi as standard", "Weekly cleaning", "Linen & towels", "Cooking essentials"],
    detail:
      "We source and book serviced accommodation that fits your brief — location, budget, quality standards, and timeline. You get clear options and dependable communication, without the admin burden.",
    idealFor: ["Working professionals", "Corporate travel", "Relocations"],
  },
  {
    slug: "workforce-accommodation",
    title: "Workforce Accommodation",
    summary: "Reliable, scalable accommodation near site — from single placements to multi-unit requirements.",
    seoTitle: "Workforce Accommodation Solutions for Projects & Mobile Teams",
    seoDescription:
      "Scalable workforce accommodation sourcing for project teams, construction and operational deployments. Fully furnished options, clear confirmations, and ongoing support.",
    bullets: ["Near project sites", "Multi-unit sourcing", "Longer stays supported", "Clear confirmations", "Ongoing support"],
    detail:
      "Built for operational reality: changing schedules, headcount shifts, and urgency. We help teams stay close to site and ready for work — with quality standards that reduce issues on the ground.",
    idealFor: ["Construction companies", "Utilities", "Project-based teams"],
  },
  {
    slug: "emergency-housing",
    title: "Emergency Housing",
    summary: "Rapid placements when timelines change unexpectedly — with calm, structured handling.",
    seoTitle: "Emergency Housing & Temporary Accommodation Placements",
    seoDescription:
      "Rapid emergency and temporary accommodation placements for urgent moves and displacement cases. Structured handling, clear updates, and dependable standards.",
    bullets: ["Fast sourcing", "Clear updates", "Suitable standards", "Flexible dates", "Human support"],
    detail:
      "When people need somewhere safe and suitable quickly, speed and clarity matter. We source and secure emergency accommodation with a focus on reliability and consistent standards.",
    idealFor: ["Insurance companies", "Displacement cases", "Urgent relocations"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}