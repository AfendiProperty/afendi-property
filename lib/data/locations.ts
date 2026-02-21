type LocationFAQ = { q: string; a: string };

export type Location = {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
  seoTitle: string;
  seoDescription: string;
  faqs?: LocationFAQ[];
};

export const locations: Location[] = [
  {
    slug: "dubai",
    title: "Dubai",
    summary:
      "Corporate relocation and serviced accommodation solutions across Dubai for global businesses and relocating professionals.",
    seoTitle:
      "Corporate Relocation & Serviced Accommodation in Dubai",
    seoDescription:
      "UAE-based corporate relocation and workforce accommodation solutions in Dubai. Serviced accommodation sourcing for relocating employees, project teams and urgent placements.",
    highlights: [
      "Corporate relocation support",
      "Serviced accommodation sourcing",
      "Workforce housing near project sites",
      "Emergency placements",
    ],
    faqs: [
  {
    q: "How fast can you source serviced accommodation in Dubai?",
    a: "Most briefs can be turned around with options within 24–48 hours, depending on dates, budget and location. For urgent placements, we prioritise speed and keep updates clear and consistent by email, with WhatsApp support when needed.",
  },
  {
    q: "Do you support corporate relocation and employee moves to Dubai?",
    a: "Yes. We support corporate relocation by sourcing and booking suitable serviced accommodation for relocating employees and their families, aligned to company policies, budgets and required standards.",
  },
  {
    q: "What standards do you require for Dubai stays?",
    a: "We focus on fully furnished accommodation with Wi-Fi, linen and towels, cooking essentials and clean, well-managed spaces. Where applicable, we also consider local compliance and building standards.",
  },
  {
    q: "Can you source accommodation near business districts and free zones?",
    a: "Yes. Share the preferred area or commute requirements and we’ll source options near key hubs and business districts, based on availability and the brief.",
  },
  {
    q: "Do you handle workforce or project accommodation in Dubai?",
    a: "Yes. We support project teams and workforce deployments with scalable accommodation sourcing, from individual stays to multi-unit requirements, with clear confirmations and ongoing support.",
  },
  {
    q: "Can you accommodate last-minute or emergency placements in Dubai?",
    a: "Yes. For urgent timelines, we handle emergency placements with a structured process: gather the brief, propose viable options quickly and confirm booking details clearly.",
  },
  {
    q: "How does the booking and payment process work?",
    a: "We coordinate the accommodation options and booking steps via email. Payment methods and invoicing depend on the supplier and booking terms. We’ll confirm all costs, inclusions and policies before you proceed.",
  },
  {
    q: "What information do you need to get started?",
    a: "Dates, location preference, number of guests, budget range, length of stay and any must-haves. If it’s a corporate relocation, share policy requirements and we’ll align options accordingly.",
  },
],
  },
  {
    slug: "united-arab-emirates",
    title: "United Arab Emirates",
    summary:
      "Expanding accommodation partnerships and relocation support across the UAE.",
    seoTitle:
      "Corporate Relocation & Workforce Accommodation in the UAE",
    seoDescription:
      "Global accommodation partner providing corporate relocation and employee housing solutions across the UAE including Dubai, Abu Dhabi and the Northern Emirates.",
    highlights: [
      "Dubai",
      "Abu Dhabi",
      "Northern Emirates",
      "Project-based accommodation",
    ],
  },
  {
    slug: "united-kingdom",
    title: "United Kingdom",
    summary:
      "Strong coverage across major UK cities supporting corporate relocations and workforce deployments.",
    seoTitle:
      "Corporate Relocation & Serviced Accommodation in the UK",
    seoDescription:
      "Corporate relocation and serviced accommodation solutions across the United Kingdom. Workforce housing and temporary accommodation for relocating employees and project teams.",
    highlights: [
      "London & South East",
      "Midlands",
      "North West",
      "Scotland & Wales",
    ],
  },
  {
    slug: "global",
    title: "Global",
    summary:
      "Worldwide sourcing for business travel, relocation programmes and workforce accommodation.",
    seoTitle:
      "Global Corporate Relocation & Employee Accommodation Solutions",
    seoDescription:
      "Worldwide corporate relocation and serviced accommodation sourcing for global businesses, workforce deployments and emergency placements.",
    highlights: [
      "Key business hubs",
      "Project locations",
      "Relocation corridors",
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
