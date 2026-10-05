import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { hasDetailPage, visibleResearch } from "@/lib/research";

export default function sitemap(): MetadataRoute.Sitemap {
  const papers = visibleResearch()
    .filter(hasDetailPage)
    .map((entry) => ({ url: `${site.url}/research/${entry.slug}` }));
  return [{ url: site.url }, ...papers];
}
