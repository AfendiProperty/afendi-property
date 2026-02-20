import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { posts } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const staticRoutes = [
    "",
    "/services",
    "/locations",
    "/for-businesses",
    "/for-suppliers",
    "/faqs",
    "/contact",
    "/privacy",
    "/terms",
    "/blog",
  ].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}
