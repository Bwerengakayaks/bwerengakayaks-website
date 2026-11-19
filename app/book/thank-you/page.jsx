import Link from "next/link";
import { SITE } from "@/data/site";

export const metadata = { title: "Booking received", robots: { index: false, follow: false } };

export default function ThankYou() {
  return (
    <main className="pg"><section className="s" style={{ paddingTop: 0 }}><div className="wrap">
      <h1 className="t">Thank you. Your trip is on its way.</h1>
      <p className="lead">We’ve received your booking and payment. A confirmation email with your digital waiver and trip details is on its way. If it hasn’t arrived within a few minutes, check your spam folder or WhatsApp us on {SITE.phone}.</p>
      <p className="lead">Within 24 hours after your trip we’ll send you a thank-you note with your photos and a quick way to leave a review.</p>
      <Link href="/activities" className="btn">Explore more experiences</Link>
    </div></section></main>
  );
}
