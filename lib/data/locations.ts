export type Location = {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
  seoTitle: string;
  seoDescription: string;
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
