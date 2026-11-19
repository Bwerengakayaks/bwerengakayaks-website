import { Suspense } from "react";
import { BookingFlow } from "@/components/Forms";

export const metadata = {
  title: "Book Your Trip: Check Availability",
  description: "Check live availability and book a guided kayak trip on Lake Victoria near Entebbe. Pay by international card or Ugandan bankcard / Mobile Money.",
  alternates: { canonical: "/book" },
};

export default function Book() {
  return (
    <main className="pg"><section className="s" style={{ paddingTop: 0 }}><div className="wrap">
      <span className="tag">Check Availability</span>
      <h1 className="t">Book Your Trip</h1>
      <p className="lead">Live availability, digital waivers and confirmations run through our booking system. The price is the same whichever way you pay.</p>
      <Suspense fallback={null}><BookingFlow /></Suspense>
    </div></section></main>
  );
}
