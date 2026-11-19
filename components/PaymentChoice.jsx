"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { PACKAGES } from "@/data/packages";

const CF = process.env.NEXT_PUBLIC_CHECKFRONT_HOST; // e.g. yourcompany.checkfront.com
const PESAPAL = process.env.NEXT_PUBLIC_PESAPAL_URL; // your Pesapal payment page

const Card = () => (<svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><rect x="5" y="10" width="38" height="28" rx="5" /><path d="M5 19h38M12 30h10" /></svg>);
const Phone = () => (<svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><rect x="12" y="4" width="22" height="40" rx="5" /><path d="M18 24h10m-4-5 5 5-5 5" /><path d="M38 12q4 4 0 8M42 9q7 7 0 14" /></svg>);
const Chev = () => (<svg className="ch" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>);

export default function PaymentChoice() {
  const sp = useSearchParams();
  const pkg = PACKAGES.find((x) => x.slug === sp.get("activity"));
  const host = CF && CF.replace(/^https?:\/\//, "");
  const international = host ? `https://${host}/reserve/${pkg && pkg.cf ? `?item_id=${pkg.cf}` : ""}` : null;
  const [msg, setMsg] = useState("");
  const go = (url, what) => (url ? (window.location.href = url) : setMsg(`${what} is not connected yet. Add it in your settings (see README).`));
  return (
    <>
      <div className="pay2">
        <button className="pb blue" onClick={() => go(international, "The Checkfront booking link")}>
          <span className="pi"><Card /></span>
          <span className="pt">Pay with international card<small>(Powered by Stripe)</small></span>
          <Chev />
        </button>
        <button className="pb gold" onClick={() => go(PESAPAL, "The Pesapal payment link")}>
          <span className="pi"><Phone /></span>
          <span className="pt">Pay with Uganda bank card / Mobile Money<small>(Powered by Pesapal)</small></span>
          <Chev />
        </button>
      </div>
      {msg && <p className="msg" role="status" style={{ textAlign: "center", color: "#b45309" }}>{msg}</p>}
    </>
  );
}
