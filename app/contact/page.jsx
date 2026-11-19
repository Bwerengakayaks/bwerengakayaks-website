import { AnchorNav } from "@/components/PillNav";
import { ContactForm } from "@/components/Forms";
import JsonLd from "@/components/JsonLd";
import { FAQ } from "@/data/faq";
import { SITE, wa } from "@/data/site";

export const metadata = {
  title: "Contact, FAQs and Directions",
  description: "Contact BwerengaKayaks by WhatsApp or email, read our FAQs and find the launch site in Bwerenga, 40 minutes from Kampala and 20 minutes from Entebbe Airport.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <main className="pg"><section className="s" style={{ paddingTop: 0 }}><div className="wrap lt">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }} />
      <h1 className="t">We’re here to help</h1>
      <AnchorNav items={[["Contacts", "contacts"], ["FAQs", "faq"], ["Directions", "directions"]]} />
      <div id="contacts">
        <div className="ct">
          <a href={wa()} target="_blank" rel="noopener">📱 WhatsApp {SITE.phone}</a>
          <a href={`mailto:${SITE.email}`}>✉️ {SITE.email}</a>
          <a href={SITE.map} target="_blank" rel="noopener">📍 Google Maps · {SITE.plus}</a>
        </div>
        <div className="ct">
          <a href={SITE.social.instagram}>Instagram</a><a href={SITE.social.facebook}>Facebook</a><a href={SITE.social.youtube}>YouTube</a><a href={SITE.social.tiktok}>TikTok</a>
        </div>
        <ContactForm />
      </div>
      <h2 id="faq" className="mt" style={{ fontSize: "1.8rem" }}>Frequently asked questions</h2>
      {FAQ.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      <h2 id="directions" className="mt" style={{ fontSize: "1.8rem" }}>Directions</h2>
      <p className="lead">Our launch site is in Bwerenga, 40 minutes from Kampala and 20 minutes from Entebbe Airport. Plus code: <b>{SITE.plus}</b>.</p>
      <div className="ct"><a href={SITE.map} target="_blank" rel="noopener">Open in Google Maps</a></div>
      <p className="loc">Transport to and from the launch site is not included.</p>
    </div></section></main>
  );
}
