import Link from "next/link";
import { Suspense } from "react";
import PaymentChoice from "@/components/PaymentChoice";

export const metadata = { title: "Payments", robots: { index: false, follow: false } };

const Shield = () => (<svg width="34" height="34" viewBox="0 0 24 24" fill="#0b2a4a" aria-hidden="true"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm-1.5 14-3.5-3.5 1.4-1.4 2.1 2.1 5.1-5.1 1.4 1.4L10.5 16Z" /></svg>);
const Lock = () => (<svg width="32" height="32" viewBox="0 0 24 24" fill="#0b2a4a" aria-hidden="true"><path d="M7 10V8a5 5 0 0 1 10 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1Zm2 0h6V8a3 3 0 0 0-6 0v2Zm3 4a1.5 1.5 0 0 0-1 2.6V19h2v-2.4A1.5 1.5 0 0 0 12 14Z" /></svg>);

export default function Payment() {
  return (
    <main className="pg light"><section className="s" style={{ paddingTop: 0 }}><div className="wrap" style={{ maxWidth: 980 }}>
      <h1 className="pay-t">Payments</h1>
      <p className="pay-sub">Choose your preferred payment method below to complete your booking. The price for your booking is the same either way.</p>
      <Suspense fallback={null}><PaymentChoice /></Suspense>
      <div className="trust2">
        <span><Shield />Secure Payments</span>
        <span><Lock />Your Information is Safe</span>
        <span><b aria-hidden="true" style={{ fontSize: "1.8rem", filter: "grayscale(1) brightness(.35)" }}>🤝</b>Trusted Booking Partner</span>
      </div>
      <p className="loc" style={{ textAlign: "center", marginTop: "2rem" }}><Link href="/book" style={{ color: "#0b4a7d" }}>← Back to booking details</Link></p>
    </div></section></main>
  );
}
