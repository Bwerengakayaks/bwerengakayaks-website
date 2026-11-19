"use client";
import Link from "next/link";
import { useState } from "react";
import { EXCLUDES, BRING, priceLabel } from "@/data/packages";

const TABS = ["Overview", "Includes", "Excludes", "What to bring"];
const List = ({ a }) => <ul className="l">{a.map((s) => <li key={s}>{s}</li>)}</ul>;

export default function ActivityPanel({ pkg }) {
  const [tab, setTab] = useState(0);
  const body = [<p key="o">{pkg.overview}</p>, <List key="i" a={pkg.includes} />, <List key="e" a={EXCLUDES} />, <List key="b" a={BRING} />][tab];
  return (
    <div className="panel">
      <div className="ph2">
        <h2 style={{ fontSize: "1.6rem", marginBottom: 0 }}>{pkg.title}</h2>
        <div className="price">{priceLabel(pkg)}{pkg.price && <small> per person</small>}</div>
      </div>
      <div className="time">{pkg.hours}</div>
      <div className="tabs" role="tablist">
        {TABS.map((t, k) => <button key={t} role="tab" aria-selected={k === tab} className={k === tab ? "on" : ""} onClick={() => setTab(k)}>{t}</button>)}
      </div>
      {body}
      <p style={{ marginTop: "1.6rem" }}><Link href={`/book?activity=${pkg.slug}`} className="btn">{pkg.price ? "Book Your Trip" : "Enquire"}</Link></p>
    </div>
  );
}
