import type { MetadataRoute } from "next";

const SITE_URL = "https://cafe-demo-six.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/menu", "/access", "/contact"];
  const now = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1.0 : 0.8,
  }));
}
