import { AnchorNav } from "@/components/PillNav";

export const metadata = {
  title: "Guest Experiences: Gallery and Reviews",
  description: "See Lake Victoria through our guests’ eyes: sunrise and sunset paddles, birdlife, wildlife, fishing and family kayaking near Entebbe, Uganda.",
  alternates: { canonical: "/guest-experiences" },
};

const G = [["Sunrise", "#f2994a"], ["Sunset", "#c9533a"], ["Wildlife", "#0a7c6e"], ["Birdlife", "#3f8f7a"], ["Fishing", "#4a6d7a"], ["Families", "#c9953a"], ["Couples", "#a8546f"]];

export default function Experiences() {
  return (
    <main className="pg"><section className="s" style={{ paddingTop: 0 }}><div className="wrap">
      <h1 className="t">The lake, through our guests’ eyes</h1>
      <AnchorNav items={[["Gallery", "gallery"], ["Reviews", "reviews"]]} />
      <div id="gallery" className="gal">
        {G.map(([n, c]) => <div key={n} role="img" aria-label={`${n} kayaking photo placeholder`} style={{ background: `linear-gradient(160deg,${c},#0d2420)` }}>{n}</div>)}
      </div>
      <h2 id="reviews" className="mt" style={{ fontSize: "1.8rem" }}>Reviews</h2>
      <div className="dash">Verified Google Reviews will display here once the integration is connected.</div>
    </div></section></main>
  );
}
