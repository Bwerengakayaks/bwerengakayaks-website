# BwerengaKayaks website (Next.js)

Mobile-first, statically generated Next.js 15 site. Fast (pre-built pages, optimised fonts and images, third-party scripts loaded late), SEO-ready (per-page titles and descriptions, sitemap, robots, JSON-LD), with cookie consent, a WhatsApp button, Checkfront booking links, Stripe/Pesapal payment buttons and a HubSpot guest-capture API.

## Run it in GitHub Codespaces
1. Create an empty repository on GitHub, then upload this folder's contents (or push them).
2. On the repo page: **Code → Codespaces → Create codespace on main**. Dependencies install automatically.
3. In the terminal run `npm run dev`, then open the forwarded port 3000.
4. Copy `.env.example` to `.env.local` and fill in values as you get them (see below). Restart `npm run dev` after changing it.

## Publish (Vercel) and your domain
1. Sign in to vercel.com with GitHub, **Add New → Project**, pick the repo, **Deploy**.
2. In Project **Settings → Environment Variables**, add everything from `.env.example`. Set `NEXT_PUBLIC_SITE_URL` to your real domain (https, no trailing slash), then redeploy. The sitemap, canonical links and structured data all use it.
3. **Settings → Domains**: add your domain and follow the DNS records Vercel shows, entered where you bought the domain.
4. After launch, add the site to Google Search Console and submit `/sitemap.xml`.

## Where to edit things (no code knowledge needed for most)
| To change | Edit |
|---|---|
| Prices, times, descriptions, includes | `data/packages.js` |
| FAQs | `data/faq.js` |
| Contact details, social links, SEO keyword list | `data/site.js` |
| Species, points, ranks, Hall of Fame, leaderboard rows | `data/challenge.js` |
| Colours, spacing, fonts | `app/globals.css` |
| Page wording | the matching file in `app/` |
| Privacy Policy and Terms (drafts, get legal review) | `app/privacy/page.jsx`, `app/terms/page.jsx` |

The leaderboard shows **sample rows**. Replace them in `data/challenge.js`, or ask me to connect it to a Google Sheet.

## Checkfront
Set `NEXT_PUBLIC_CHECKFRONT_HOST` to your account address (for example `yourcompany.checkfront.com`, no https://) and each activity's item number (`NEXT_PUBLIC_CF_SUNRISE`, `_SUNSET`, `_FAMILY`, `_FISHING`). **Check Availability** opens your Checkfront booking page for the chosen activity (`/reserve/?item_id=…`). If your account's booking links look different, copy the link format from your Checkfront dashboard and adjust `cfUrl` in `components/Forms.jsx`. Checkfront handles availability and its own booking records. Confirm with Checkfront how it handles digital waivers, confirmation/reminder emails and a HubSpot connection, and whether Pesapal can be used (it supports Stripe, Square and about 30 other gateways, but Pesapal is not confirmed).

## Payments (Stripe via Checkfront, and Pesapal) and chargeback evidence
After the guest enters their details and ticks the Terms/waiver box, **Continue to Payment** saves them to HubSpot with a timestamped record of that acceptance (plus IP and browser), then opens the **Payments** page (`/book/payment`, styled to your design).
- **Pay with international card (Powered by Stripe):** opens your Checkfront booking page for the chosen activity, where Checkfront takes the card payment through Stripe. Connect Stripe inside Checkfront (account settings, payment gateways).
- **Pay with Uganda bank card / Mobile Money (Powered by Pesapal):** opens `NEXT_PUBLIC_PESAPAL_URL`, your Pesapal payment page. Set Pesapal's return/success URL to `/book/thank-you`.

**Decide before launch:** Pesapal payments happen outside Checkfront, so a guest who pays this way will not appear in Checkfront automatically. Ask Checkfront whether Pesapal can be connected, or whether you can record Pesapal bookings as paid/offline bookings (and how that affects availability). Until then, add those bookings by hand.

## HubSpot
1. Create a **private app** (Settings → Integrations → Private apps) with scope `crm.objects.contacts.write`; put its token in `HUBSPOT_TOKEN`.
2. Create these custom **contact properties** (internal names exactly): `activity_type`, `preferred_date`, `adults`, `children`, `enquiry_message`, `lead_source`, `terms_accepted_at`, `consent_ip`, `consent_user_agent` (text for all except `adults` and `children`, which are number).
3. Put your HubSpot portal ID in `NEXT_PUBLIC_HUBSPOT_ID` for tracking (loads only after cookie consent).
4. Build the **automated thank-you email** as a HubSpot workflow: trigger on a contact marked attended (a property you set after the trip, or Checkfront's HubSpot integration), delay, send the email with photo links and review links. Branch on `activity_type`.
Until `HUBSPOT_TOKEN` is set, guests are not saved anywhere (a warning is logged).

## Cookie consent and privacy
A banner offers **Essential only** or **Accept all**. Google Analytics (`NEXT_PUBLIC_GA_ID`) and HubSpot tracking load only after **Accept all**. A "Cookie settings" link in the footer reopens it. Policy pages are drafts.

## SEO keyword map
- Site-wide meta keywords: every target keyword (`data/site.js`).
- Home title and copy: Kayaking Uganda, Kayaking Lake Victoria, Entebbe kayaking, Bwerenga kayaking, Uganda outdoor activities, birdwatching Lutembe, flat-water paddling.
- Sunrise page: birdwatching Uganda / Lutembe / Entebbe / Bwerenga. Sunset page: sunset kayak Uganda. Family page: family activities Entebbe. Fishing page: kayak fishing Uganda.
- Still to add as real content grows: Uganda Tourism, East Africa adventure, Kayak Africa, Visit Uganda, fresh water paddling/kayak Uganda. A few short blog posts or a "Plan your trip" page would help these rank.
- Add real photos (compressed, with descriptive alt text) and a 1200×630 social share image. Fill in Instagram/Facebook/YouTube/TikTok links.

## Still to do before launch
Real photos/videos, guide team page and certifications, weather/cancellation/age/fitness policies, Google Reviews integration, social links, legal review of Privacy and Terms.
