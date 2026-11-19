import { notFound } from "next/navigation";
import { PACKAGES } from "@/data/packages";
import { SITE } from "@/data/site";
import { ActivityNav } from "@/components/PillNav";
import ActivityPanel from "@/components/ActivityPanel";
import JsonLd from "@/components/JsonLd";

export const dynamicParams = false;
export const generateStaticParams = () => PACKAGES.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = PACKAGES.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.seo, alternates: { canonical: `/activities/${p.slug}` }, openGraph: { title: p.title, description: p.seo } };
}

export default async function Activity({ params }) {
  const { slug } = await params;
  const p = PACKAGES.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <main className="pg"><section className="s" style={{ paddingTop: 0 }}><div className="wrap">
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "TouristTrip", name: p.title, description: p.seo,
        touristType: "Nature and wildlife enthusiasts, families, couples",
        provider: { "@type": "LocalBusiness", name: SITE.name, url: SITE.url },
        ...(p.price && { offers: { "@type": "Offer", price: p.price, priceCurrency: "USD", url: `${SITE.url}/book?activity=${p.slug}`, availability: "https://schema.org/InStock" } }),
      }} />
      <h1 className="t">Experiences on Lake Victoria</h1>
      <ActivityNav current={p.slug} />
      <ActivityPanel pkg={p} />
      <p className="loc">Launch site: Bwerenga, 40 min from Kampala · 20 min from Entebbe Airport · Plus code {SITE.plus}</p>
    </div></section></main>
  );
}
