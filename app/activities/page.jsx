import Link from "next/link";
import { PACKAGES, priceLabel } from "@/data/packages";
import { ActivityNav } from "@/components/PillNav";

export const metadata = {
  title: "Kayaking Experiences on Lake Victoria, Uganda",
  description: "Sunrise birdwatching, sunset kayak, family tandem tours and kayak fishing on Lake Victoria near Entebbe. Small-group guided paddling from Bwerenga.",
  alternates: { canonical: "/activities" },
};

export default function Activities() {
  return (
    <main className="pg"><section className="s" style={{ paddingTop: 0 }}><div className="wrap">
      <h1 className="t">Experiences on Lake Victoria</h1>
      <ActivityNav current="" />
      <div className="cards">
        {PACKAGES.map((p) => (
          <Link key={p.slug} href={`/activities/${p.slug}`} className="card">
            <h2 style={{ fontSize: "1.2rem", marginBottom: ".6rem" }}>{p.title}</h2><p>{p.hours}</p>
            <p style={{ color: "var(--gold2)", marginTop: ".6rem", fontSize: "1.2rem" }}>{priceLabel(p)}{p.price && " pp"}</p>
          </Link>
        ))}
        <Link href="/activities/wildlife-challenge" className="card"><h2 style={{ fontSize: "1.2rem", marginBottom: ".6rem" }}>Wildlife Challenge &amp; Leaderboard</h2><p>Spot, score and climb the Hall of Fame.</p></Link>
      </div>
    </div></section></main>
  );
}
