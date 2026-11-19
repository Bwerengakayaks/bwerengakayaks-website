export const SITE = {
  name: "BwerengaKayaks",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
  phone: "0780 920626",
  wa: "256780920626",
  email: "info@bwerengakayaks.com",
  plus: "4HJF+4J, Bwerenga",
  map: "https://www.google.com/maps/search/?api=1&query=4HJF%2B4J%20Bwerenga",
  social: { instagram: "#", facebook: "#", youtube: "#", tiktok: "#" },
};
export const wa = (text = "Hello BwerengaKayaks, I'd like to ask about a kayaking trip.") =>
  `https://wa.me/${SITE.wa}?text=${encodeURIComponent(text)}`;

// Target SEO keywords (used in meta keywords and woven into page titles, descriptions and copy)
export const KEYWORDS = [
  "Kayaking Uganda", "Kayaking Lake Victoria", "Entebbe kayaking", "Bwerenga kayaking",
  "Uganda outdoor activities", "Sunset kayak Uganda", "Birdwatching Uganda", "Kayak fishing Uganda",
  "Family activities Entebbe", "Birdwatching Lutembe", "Bird watching Bwerenga", "Birdwatching Entebbe",
  "Lake Victoria recreational kayaking", "Lake Victoria paddling", "Uganda Tourism", "East Africa adventure",
  "Kayak Africa", "Visit Uganda", "Fresh water paddling Uganda", "Fresh water kayak Uganda",
  "Flat water paddling Uganda", "Flat water kayak Uganda",
];
