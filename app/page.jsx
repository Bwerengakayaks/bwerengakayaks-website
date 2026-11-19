import Link from "next/link";
import { PACKAGES, priceLabel } from "@/data/packages";
import { wa } from "@/data/site";

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="hero-in">
          <h1>A front-row seat to <em>nature and wildlife</em> without the engine.</h1>
          <p>Premium guided kayaking on Lake Victoria. Small groups to see birdlife, marine wildlife, fishing, family adventures and relaxation on calm waters, just 40 minutes from Kampala and 20 minutes from Entebbe.</p>
          <div className="acts">
            <Link href="/book" className="btn">Book Your Trip</Link>
            <Link href="/activities" className="ghost">View Experiences →</Link>
            <a href={wa()} className="ghost" target="_blank" rel="noopener">Ask on WhatsApp →</a>
          </div>
        </div>
      </header>
      <section className="s"><div className="wrap">
        <span className="tag">Featured Experiences</span>
        <h2>Choose your way onto the water</h2>
        <div className="cards">
          {PACKAGES.map((p) => (
            <Link key={p.slug} href={`/activities/${p.slug}`} className="card">
              <h3>{p.title}</h3><p>{p.hours}</p>
              <p style={{ color: "var(--gold)", marginTop: ".6rem", fontFamily: "var(--font-play)", fontSize: "1.3rem" }}>{priceLabel(p)}{p.price && " pp"}</p>
            </Link>
          ))}
        </div>
      </div></section>
      <section className="s alt"><div className="wrap seo">
        <h2>Kayaking in Uganda, on Lake Victoria</h2>
        <p>BwerengaKayaks runs guided kayaking from a private waterfront in Bwerenga, the easiest way to enjoy Lake Victoria near Entebbe. Our flat-water paddling suits first-timers and keen paddlers alike, and our small groups keep every trip personal.</p>
        <p>Join a sunrise birdwatching paddle in Lutembe Bay, an Important Birding Area, a sunset kayak trip, a family adventure or a kayak fishing safari. Every Uganda outdoor activity we offer is led by a first-aid certified guide.</p>
      </div></section>
      <section className="s"><div className="wrap">
        <span className="tag">Play While You Paddle</span>
        <h2>Can you beat the record?</h2>
        <p className="lead">Complete the Bwerenga 35, a card of 35 species, and earn the Bwerenga Wildlife Naturalist Badge plus a gift. Climb the leaderboard and join the Hall of Fame.</p>
        <Link href="/activities/wildlife-challenge" className="btn">See the Leaderboard</Link>
      </div></section>
      <section className="s alt"><div className="wrap">
        <span className="tag">Guest Experiences</span><h2>In our guests’ words</h2>
        <div className="dash">Verified Google Reviews will display here once the integration is connected.</div>
      </div></section>
    </main>
  );
}
