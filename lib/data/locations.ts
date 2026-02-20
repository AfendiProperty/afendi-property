export type Location = {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
};

export const locations: Location[] = [
  {
    slug: "united-kingdom",
    title: "United Kingdom",
    summary: "Strong coverage across major UK cities and project regions.",
    highlights: ["London & South East", "Midlands", "North West", "Scotland & Wales"],
  },
  {
    slug: "united-arab-emirates",
    title: "United Arab Emirates",
    summary: "Expanding supply and partnerships across the UAE.",
    highlights: ["Dubai", "Abu Dhabi", "Northern Emirates"],
  },
  {
    slug: "global",
    title: "Global",
    summary: "Worldwide sourcing for business travel, workforces, and urgent placements.",
    highlights: ["Key business hubs", "Project locations", "Relocation corridors"],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
