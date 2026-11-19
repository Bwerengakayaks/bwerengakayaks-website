import { AnchorNav } from "@/components/PillNav";

export const metadata = {
  title: "About Us: Our Story, Team and Safety",
  description: "BwerengaKayaks is a premium small-group paddling experience on Lake Victoria. Meet our story, our guides and how we keep you safe on the water near Entebbe.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <main className="pg"><section className="s" style={{ paddingTop: 0 }}><div className="wrap">
      <h1 className="t">BwerengaKayaks</h1>
      <AnchorNav items={[["Our Story", "story"], ["Our Team", "team"], ["Safety", "safety"]]} />
      <div id="story">
        <p className="lead">BwerengaKayaks is a premium, small-group paddling experience on the shores of Lake Victoria, run from our private waterfront. This is not mass tourism: it is a safari you paddle, with a front-row seat to nature and wildlife and no engine noise.</p>
        <p className="lead">Lutembe Bay is a wetland of international importance and an Important Birding Area. We paddle it with respect for the wildlife and the water.</p>
        <p className="lead">Safety, exclusivity, nature, relaxation, professionalism and environmental responsibility guide every departure.</p>
      </div>
      <h2 id="team" className="mt" style={{ fontSize: "1.8rem" }}>Our Team</h2>
      <div className="dash">Team photos and bios go here.</div>
      <h2 id="safety" className="mt" style={{ fontSize: "1.8rem" }}>Safety</h2>
      <div className="cards">
        <div className="card"><h3>Qualified guides</h3><p>Names, pictures and certifications of each guide appear here. Every guide is first-aid certified.</p></div>
        <div className="card"><h3>Safety briefing procedure</h3><p>A full safety briefing before every launch. Guides carry a first aid kit and a VHF marine radio.</p></div>
        <div className="card"><h3>Life jackets (PFDs)</h3><p>A PFD, whistle and kayak tow line for every paddler, worn throughout.</p></div>
        <div className="card"><h3>Weather monitoring policy</h3><p>We monitor conditions with a weather kit and adjust or reschedule when it is not safe. Full policy to be added.</p></div>
        <div className="card"><h3>Customer requirements</h3><p>Guest requirements and the digital waiver are confirmed at booking. Details to be added.</p></div>
      </div>
    </div></section></main>
  );
}
