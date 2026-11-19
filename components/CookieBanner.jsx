"use client";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const KEY = "bk-consent";
const GA = process.env.NEXT_PUBLIC_GA_ID;
const HS = process.env.NEXT_PUBLIC_HUBSPOT_ID;

export function CookieSettingsButton() {
  return <button className="fbtn" onClick={() => window.dispatchEvent(new Event("bk-cookie-reopen"))}>Cookie settings</button>;
}

export default function CookieBanner() {
  const [choice, setChoice] = useState(null); // "all" | "essential" | null
  const [ready, setReady] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    let c = null;
    try { c = localStorage.getItem(KEY); } catch {}
    setChoice(c); setShow(!c); setReady(true);
    const reopen = () => setShow(true);
    window.addEventListener("bk-cookie-reopen", reopen);
    return () => window.removeEventListener("bk-cookie-reopen", reopen);
  }, []);
  const save = (v) => {
    try { localStorage.setItem(KEY, v); } catch {}
    setChoice(v); setShow(false);
  };
  if (!ready) return null;
  return (
    <>
      {choice === "all" && GA && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA}',{anonymize_ip:true});`}</Script>
        </>
      )}
      {choice === "all" && HS && <Script id="hs-script-loader" src={`https://js.hs-scripts.com/${HS}.js`} strategy="afterInteractive" />}
      {show && (
        <div className="cb" role="dialog" aria-label="Cookie consent">
          <p>We use essential cookies to run the site. With your permission we also use analytics and our CRM tracking to improve it and follow up on your enquiry. See our <Link href="/privacy">Privacy Policy</Link>.</p>
          <div>
            <button className="btn out" onClick={() => save("essential")}>Essential only</button>
            <button className="btn" onClick={() => save("all")}>Accept all</button>
          </div>
        </div>
      )}
    </>
  );
}
