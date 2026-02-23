export type Service = {
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
  detail: string;
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: "serviced-accommodation",
    title: "Serviced Accommodation",
    summary: "Flexible furnished stays for business travel, relocation, and project-based work.",
    bullets: ["Fully furnished", "Wi-Fi as standard", "Weekly cleaning", "Linen & towels", "Cooking essentials"],
    detail:
      "We source and book serviced accommodation that fits your brief — location, budget, quality standards, and timeline. You get clear options and dependable communication, without the admin burden.",
    idealFor: ["Working professionals", "Corporate travel", "Relocations"],
  },
  {
    slug: "workforce-accommodation",
    title: "Workforce Accommodation",
    summary: "Reliable, scalable accommodation near site — from single placements to multi-unit requirements.",
    bullets: ["Near project sites", "Multi-unit sourcing", "Longer stays supported", "Clear confirmations", "Ongoing support"],
    detail:
      "Built for operational reality: changing schedules, headcount shifts, and urgency. We help teams stay close to site and ready for work — with quality standards that reduce issues on the ground.",
    idealFor: ["Construction companies", "Utilities", "Project-based teams"],
  },
  {
    slug: "emergency-housing",
    title: "Emergency Housing",
    summary: "Rapid placements when timelines change unexpectedly — with calm, structured handling.",
    bullets: ["Fast sourcing", "Clear updates", "Suitable standards", "Flexible dates", "Human support"],
    detail:
      "When people need somewhere safe and suitable quickly, speed and clarity matter. We source and secure emergency accommodation with a focus on reliability and consistent standards.",
    idealFor: ["Insurance companies", "Displacement cases", "Urgent relocations"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}