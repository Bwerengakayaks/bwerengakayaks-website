import { SITE } from "@/data/site";

export default function robots() {
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/book/thank-you", "/book/payment"] }], sitemap: `${SITE.url}/sitemap.xml` };
}
