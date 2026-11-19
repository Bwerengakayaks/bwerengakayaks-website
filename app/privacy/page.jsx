import { SITE } from "@/data/site";

export const metadata = { title: "Privacy Policy", description: "How BwerengaKayaks collects, uses and protects your personal information.", alternates: { canonical: "/privacy" } };

export default function Privacy() {
  return (
    <main className="pg"><section className="s" style={{ paddingTop: 0 }}><div className="wrap seo">
      <h1 className="t">Privacy Policy</h1>
      <p><i>Draft for review: please have a lawyer confirm this before launch (Uganda Data Protection and Privacy Act 2019, and UK/EU GDPR for guests from those regions).</i></p>
      <h2 style={{ fontSize: "1.4rem" }}>Who we are</h2>
      <p>{SITE.name} operates guided kayaking from Bwerenga, Lake Victoria, Uganda. Contact us at {SITE.email}.</p>
      <h2 style={{ fontSize: "1.4rem" }}>What we collect</h2>
      <p>Name, email, phone, country, billing address, trip details (activity, date, number of adults and children), your messages, and a dated record that you accepted our Terms and waiver (including IP address and browser details) so we can resolve payment disputes. We also collect anonymous analytics if you accept cookies.</p>
      <h2 style={{ fontSize: "1.4rem" }}>How we use it</h2>
      <p>To run your booking, send confirmations and reminders, take payment, send a thank-you and review request after your trip, and, only where you agree, send offers. We never sell your data.</p>
      <h2 style={{ fontSize: "1.4rem" }}>Who we share it with</h2>
      <p>Our booking system (Checkfront), payment providers (Stripe and Pesapal), our CRM and email provider (HubSpot), and analytics (Google), only as needed to deliver these services.</p>
      <h2 style={{ fontSize: "1.4rem" }}>Cookies</h2>
      <p>Essential cookies run the site. Analytics and CRM tracking load only after you choose “Accept all”. Use “Cookie settings” in the footer to change your choice.</p>
      <h2 style={{ fontSize: "1.4rem" }}>Your rights</h2>
      <p>You can ask to see, correct or delete your data, or opt out of marketing, by emailing {SITE.email}.</p>
    </div></section></main>
  );
}
