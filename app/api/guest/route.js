// Saves a guest to HubSpot (create or update by email) with activity type and a dated
// record of Terms/waiver acceptance. Used by the booking page and the contact form.
export async function POST(req) {
  let b;
  try { b = await req.json(); } catch { return Response.json({ ok: false, error: "Bad request" }, { status: 400 }); }
  if (b.website) return Response.json({ ok: true }); // honeypot: bots fill this
  const email = String(b.email || "").trim();
  if (!/^\S+@\S+\.\S+$/.test(email)) return Response.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  if (!b.terms) return Response.json({ ok: false, error: "Please accept to continue." }, { status: 400 });

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim();
  const [first, ...rest] = String(b.name || "").trim().split(/\s+/);
  const raw = {
    email, firstname: first, lastname: rest.join(" "), phone: b.phone, country: b.country, address: b.address,
    activity_type: b.activity, adults: b.adults, children: b.children, preferred_date: b.date,
    enquiry_message: b.message, lead_source: b.source || "website",
    terms_accepted_at: new Date().toISOString(), consent_ip: ip,
    consent_user_agent: (req.headers.get("user-agent") || "").slice(0, 250),
  };
  const properties = Object.fromEntries(Object.entries(raw).filter(([, v]) => v !== undefined && v !== null && v !== "").map(([k, v]) => [k, String(v)]));

  const token = process.env.HUBSPOT_TOKEN;
  if (!token) { console.warn("HUBSPOT_TOKEN not set: guest not saved to CRM", email); return Response.json({ ok: true, hubspot: false }); }
  try {
    const r = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: [{ idProperty: "email", id: email, properties }] }),
    });
    if (!r.ok) { console.error("HubSpot error", r.status, await r.text()); return Response.json({ ok: true, hubspot: false }); }
    return Response.json({ ok: true, hubspot: true });
  } catch (e) {
    console.error("HubSpot request failed", e);
    return Response.json({ ok: true, hubspot: false });
  }
}
