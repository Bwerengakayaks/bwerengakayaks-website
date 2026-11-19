"use client";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { PACKAGES } from "@/data/packages";

const CF = process.env.NEXT_PUBLIC_CHECKFRONT_HOST; // e.g. yourcompany.checkfront.com

async function send(data) {
  const r = await fetch("/api/guest", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
  return r.json();
}

export function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", message: "", terms: false, website: "" });
  const [msg, setMsg] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });
  const go = async () => {
    if (!f.email || !f.message) return setMsg("Please add your email and a message.");
    if (!f.terms) return setMsg("Please tick the privacy box.");
    const r = await send({ ...f, activity: "Enquiry", source: "contact-form" });
    setMsg(r.ok ? "Thank you. We’ll reply soon." : r.error || "Something went wrong. Please WhatsApp us.");
  };
  return (
    <div className="panel" style={{ maxWidth: 520 }}>
      <h2 style={{ fontSize: "1.5rem" }}>Send us a message</h2>
      <input aria-label="Name" placeholder="Your name" value={f.name} onChange={set("name")} />
      <input aria-label="Email" type="email" placeholder="Your email" value={f.email} onChange={set("email")} />
      <textarea aria-label="Message" rows={4} placeholder="How can we help?" value={f.message} onChange={set("message")} />
      <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={f.website} onChange={set("website")} />
      <label className="chk"><input type="checkbox" checked={f.terms} onChange={set("terms")} /><span>I agree to my details being used to reply, as set out in the <Link href="/privacy">Privacy Policy</Link>.</span></label>
      <button className="btn" onClick={go}>Send</button>
      {msg && <p className="msg" role="status">{msg}</p>}
    </div>
  );
}

export function BookingFlow() {
  const sp = useSearchParams();
  const router = useRouter();
  const first = Math.max(0, PACKAGES.findIndex((p) => p.slug === sp.get("activity")));
  const [f, setF] = useState({ pkg: first, date: "", adults: 1, children: 0, kayak: "Single kayak", name: "", email: "", phone: "", country: "", address: "", terms: false, website: "" });
  const [msg, setMsg] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });
  const p = PACKAGES[f.pkg];
  const cfUrl = CF && p.cf ? `https://${CF.replace(/^https?:\/\//, "")}/reserve/?item_id=${p.cf}` : null;

  const next = async () => {
    if (!f.name || !f.email || !f.phone || !f.country) return setMsg("Please complete your name, email, phone and country first.");
    if (!f.terms) return setMsg("Please accept the Terms & Conditions and waiver to continue.");
    const r = await send({ ...f, activity: p.title, source: "booking" });
    if (!r.ok) return setMsg(r.error || "Something went wrong. Please WhatsApp us.");
    router.push(`/book/payment?activity=${p.slug}`);
  };

  return (
    <div className="steps">
      <div className="st">
        <h2>1 · Your booking</h2>
        <select aria-label="Activity" value={f.pkg} onChange={(e) => setF({ ...f, pkg: +e.target.value })}>
          {PACKAGES.map((x, i) => <option key={x.slug} value={i}>{x.title}{x.price ? ` · $${x.price}pp` : ""}</option>)}
        </select>
        <input aria-label="Date" type="date" value={f.date} onChange={set("date")} />
        <div className="gb"><h4>Number of guests</h4>
          <div className="g2">
            <label>Adults<input type="number" min="1" value={f.adults} onChange={set("adults")} /></label>
            <label>Children (under 12)<input type="number" min="0" value={f.children} onChange={set("children")} /></label>
          </div>
        </div>
        <select aria-label="Kayak type" value={f.kayak} onChange={set("kayak")}><option>Single kayak</option><option>Tandem kayak</option></select>
        {cfUrl ? <a className="btn" href={cfUrl} target="_blank" rel="noopener">Check Availability</a> : <button className="btn" onClick={() => setMsg("Checkfront not connected yet. Add your account address and item IDs.")}>Check Availability</button>}
      </div>
      <div className="st">
        <h2>2 · Your details</h2>
        <input aria-label="Full name" placeholder="Full name" value={f.name} onChange={set("name")} />
        <input aria-label="Email" type="email" placeholder="Email" value={f.email} onChange={set("email")} />
        <input aria-label="Phone" type="tel" placeholder="Phone / WhatsApp" value={f.phone} onChange={set("phone")} />
        <input aria-label="Country" placeholder="Country of residence" value={f.country} onChange={set("country")} />
        <input aria-label="Billing address" placeholder="Billing address" value={f.address} onChange={set("address")} />
        <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={f.website} onChange={set("website")} />
      </div>
      <div className="st">
        <h2>3 · Review &amp; continue</h2>
        <label className="chk"><input type="checkbox" checked={f.terms} onChange={set("terms")} /><span>I accept the <Link href="/terms">Terms &amp; Conditions</Link> and will sign the digital waiver. We keep a dated record of this acceptance.</span></label>
        <button className="btn" onClick={next}>Continue to Payment</button>
        {msg && <p className="msg" role="status">{msg}</p>}
        <p className="note">The price is the same whichever way you pay.</p>
      </div>
    </div>
  );
}
