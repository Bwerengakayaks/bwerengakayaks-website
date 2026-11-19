import { PACKAGES } from "@/data/packages";
import { SITE } from "@/data/site";

export default function sitemap() {
  const paths = ["", "/activities", "/activities/wildlife-challenge", "/about", "/guest-experiences", "/contact", "/book", "/privacy", "/terms", ...PACKAGES.map((p) => `/activities/${p.slug}`)];
  return paths.map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date(), changeFrequency: p === "" ? "weekly" : "monthly", priority: p === "" ? 1 : p.startsWith("/activities") ? 0.8 : 0.6 }));
}
