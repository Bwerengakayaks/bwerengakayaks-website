import { ActivityNav } from "@/components/PillNav";
import Leaderboard from "@/components/Leaderboard";
import { BIRDWATCHER, JUNIOR, BONUS_BIRD, BONUS_JUNIOR, HOF } from "@/data/challenge";

export const metadata = {
  title: "Bwerenga Wildlife Challenge & Leaderboard",
  description: "Spot birds, mammals and reptiles on Lake Victoria, score points and climb the Hall of Fame. Complete the Bwerenga 35 and earn the Naturalist Badge. Birdwatching in Lutembe Bay.",
  alternates: { canonical: "/activities/wildlife-challenge" },
};

const Species = ({ data, bonus }) => (
  <>
    {data.map(([n, p, a]) => (
      <div key={n}><h4>{n} ({a.length}) · {p} point{p > 1 ? "s" : ""} each</h4>
        <div className="chips">{a.map((s) => <span key={s}>{s}</span>)}</div></div>
    ))}
    <h4>Bonus points</h4>
    <ul className="l">{bonus.map((b) => <li key={b}>{b}</li>)}</ul>
  </>
);

export default function Challenge() {
  return (
    <main className="pg"><section className="s" style={{ paddingTop: 0 }}><div className="wrap">
      <h1 className="t">Experiences on Lake Victoria</h1>
      <ActivityNav current="wildlife-challenge" />
      <p className="lead">Every guest gets a laminated waterproof tally card of the birds, mammals and reptiles of Bwerenga and Lutembe Bay, each with a points value. Spot, tick, and your guide verifies and tallies at the end. The card records your name or nickname, rank, species identified, date, location and time.</p>
      <div className="panel" style={{ marginTop: "1.4rem" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Complete the Bwerenga 35</h2>
        <p className="lead" style={{ margin: 0 }}>Tick all 35 species on your card and receive the Bwerenga Wildlife Naturalist Badge plus a gift. It’s a great reason to come back.</p>
      </div>
      <h2 className="mt" style={{ fontSize: "1.6rem" }}>Leaderboards</h2>
      <Leaderboard />
      <h2 className="mt" style={{ fontSize: "1.6rem" }}>Hall of Fame</h2>
      <p className="lead">Featured weekly on our website and social channels, so many guests get a chance to shine.</p>
      <div className="chips">{HOF.map((s) => <span key={s}>{s}</span>)}</div>
      <h2 className="mt" style={{ fontSize: "1.6rem" }}>Species lists &amp; points</h2>
      <details><summary>Birdwatcher Challenge · 35 species, 4 tiers</summary><Species data={BIRDWATCHER} bonus={BONUS_BIRD} /></details>
      <details><summary>Junior Wildlife Challenge · birds, mammals &amp; reptiles, 35 species</summary><Species data={JUNIOR} bonus={BONUS_JUNIOR} /></details>
    </div></section></main>
  );
}
