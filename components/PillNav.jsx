import Link from "next/link";
import { PACKAGES } from "@/data/packages";

export function ActivityNav({ current }) {
  const items = [...PACKAGES.map((p) => [p.name, `/activities/${p.slug}`]), ["Wildlife Challenge & Leaderboard", "/activities/wildlife-challenge"]];
  return (
    <div className="pk" role="navigation" aria-label="Activities">
      {items.map(([t, h]) => <Link key={h} href={h} className={h.endsWith(current) ? "on" : ""}>{t}</Link>)}
    </div>
  );
}

export function AnchorNav({ items }) {
  return <div className="pk">{items.map(([t, id]) => <a key={id} href={`#${id}`}>{t}</a>)}</div>;
}
