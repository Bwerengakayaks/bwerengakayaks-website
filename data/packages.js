const BASE = [
  "Premium kayaks with adjustable hybrid paddles",
  "GoPro Hero on every kayak for photos and video",
  "Nikon ProStaff binoculars on every kayak",
  "Safety gear: PFD, whistle, kayak tow line, first aid kit, first-aid-certified guide, VHF marine radio",
  "Full safety briefing and weather monitoring kit",
  "Max 4 guests per guide",
];
const NAR = "Guided excursion with expert narration";
const STOP = "Scenic stopover spots for photos and rest";

export const EXCLUDES = ["Transport to and from the launch site", "Travel insurance", "Towels"];
export const BRING = [
  "Clothes you don’t mind getting wet",
  "Any medication you need (guides carry it dry on the water)",
  "Dry clothes for afterwards",
  "Hat or cap",
  "Polarised sunglasses",
  "High-factor suncream, plenty of it (the lake washes off ‘waterproof’)",
  "Water bottle (refill at our office)",
  "Valuables can stay in our safe at the office",
];

export const PACKAGES = [
  {
    slug: "sunrise-birdwatching", name: "Sunrise Birdwatching",
    title: "Sunrise Nature & Birdwatching Paddle", price: 170,
    hours: "7am – midday, then a hot meal", cf: process.env.NEXT_PUBLIC_CF_SUNRISE,
    seo: "Sunrise birdwatching kayak tour in Lutembe Bay, Lake Victoria. Small groups, expert guide, binoculars and GoPro on every kayak. 20 minutes from Entebbe. $170 per person.",
    overview: "An early-morning guided paddle through sheltered waters and inlets for close views and photography of birds, marine wildlife and wetlands in Lutembe Bay, a wetland of international importance and an Important Birding Area.",
    includes: [NAR, STOP + ", snacks and refreshments", "Morning coffee or tea with a snack", "Hot 3-course lakeside lunch with soft refreshments", ...BASE, "Hammocks to rest in after the paddle"],
  },
  {
    slug: "sunset-paddle", name: "Sunset Paddle",
    title: "Sunset Paddle Experience", price: 150,
    hours: "5pm – 7pm, then a snack", cf: process.env.NEXT_PUBLIC_CF_SUNSET,
    seo: "Sunset kayak in Uganda: a guided evening paddle on calm Lake Victoria near Entebbe, with photo stops and a couples upgrade for proposals and anniversaries. $150 per person.",
    overview: "Paddle the calm waters around Bwerenga as the day ends, with scenic stops for photography, wildlife and relaxation. Honeymoon, anniversary or proposal? Upgrade to our couples experience: a semi-private romantic tandem paddle with special refreshments.",
    includes: [NAR, STOP, "Snacks and soft refreshments lakeside on return", ...BASE, "Hammocks and rest chairs"],
  },
  {
    slug: "family-tandem-tours", name: "Family & Tandem",
    title: "Family & Tandem Kayak Tours", price: 170,
    hours: "8am – 1pm, then a hot meal", cf: process.env.NEXT_PUBLIC_CF_FAMILY,
    seo: "Family activities near Entebbe: relaxed, safe tandem and sit-on-top kayak tours on Lake Victoria for families and first-time paddlers. $170 per person.",
    overview: "A relaxed, safe introduction to kayaking for families, first-time paddlers and small groups, using stable sit-on-top and tandem kayaks.",
    includes: [NAR, STOP + ", snacks and refreshments", "Hot 3-course lakeside lunch with soft refreshments", ...BASE, "Hammocks to rest in after the paddle"],
  },
  {
    slug: "kayak-fishing", name: "Kayak Fishing",
    title: "Kayak Fishing Experience", price: 180,
    hours: "5pm – 7pm, then a BBQ (7am start on request)", cf: process.env.NEXT_PUBLIC_CF_FISHING,
    seo: "Kayak fishing in Uganda: a two-hour guided fishing safari from a fishing kayak in Bwerenga–Lutembe Bay, Lake Victoria. All gear and a lakeside BBQ included. $180 per person.",
    overview: "Fish Bwerenga–Lutembe Bay from a fishing kayak with a local guide: a two-hour fishing safari on calm water, combining the adventure of paddling with the thrill of the catch.",
    includes: ["Fishing gear: rod and reel, rod holder, tackle bag, landing net, pliers, measuring tape, cooler/fish bag, bait container", "A guide who knows where to cast; catch-and-release where applicable", ...BASE, "Lakeside BBQ with soft refreshments", "Hammocks to rest in after the paddle"],
  },
  {
    slug: "private-custom-tours", name: "Private & Custom",
    title: "Luxury Private & Custom Tours", price: null,
    hours: "Your schedule",
    seo: "Private and custom kayak tours on Lake Victoria: wedding proposals, team-building days, photography and specialist birding groups near Entebbe, Uganda.",
    overview: "Have BwerengaKayaks exclusively for your team, friends or organisation: wedding proposals, team-building days, photography groups or specialist birding. Call or email with your request.",
    includes: [...BASE, "Hammocks and rest seats"],
  },
];

export const priceLabel = (p) => (p.price ? `$${p.price}` : "On request");
