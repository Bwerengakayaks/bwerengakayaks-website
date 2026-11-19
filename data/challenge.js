const C = "Pied Kingfisher,African Jacana,Hadada Ibis,Great Egret,Village Weaver,White-faced Whistling Duck,Grey-headed Gull,Common Moorhen,African Openbill,White-winged Tern,Grey Heron,Speckled Mousebird,Long-tailed Cormorant,Black Crake,Spur-winged Lapwing".split(",");
const U = "African Fish Eagle,Malachite Kingfisher,Purple Heron,Common Greenshank,Yellow-billed Duck,Black-winged Stilt,Blue-headed Coucal,African Marsh Harrier,Lesser Jacana,Broad-billed Roller,Goliath Heron".split(",");
const R = "Papyrus Gonolek,White-winged Swamp-warbler,Papyrus Canary,Slender-billed Weaver,Carruthers’ Cisticola,Pel’s Fishing Owl".split(",");
const L = "Shoebill,Papyrus Yellow Warbler,Grey Crowned Crane".split(",");
const no = (a, x) => a.filter((s) => !x.includes(s));

export const BIRDWATCHER = [["Common", 1, C], ["Uncommon", 3, U], ["Rare", 7, R], ["Legendary", 15, L]];
export const JUNIOR = [
  ["Common birds", 1, C],
  ["Uncommon birds", 3, no(U, ["Common Greenshank", "Broad-billed Roller"])],
  ["Rare birds", 7, no(R, ["White-winged Swamp-warbler", "Carruthers’ Cisticola"])],
  ["Legendary birds", 15, ["Shoebill", "Grey Crowned Crane"]],
  ["Common mammals & reptiles", 2, ["Giant Monitor Lizard", "Vervet Monkey"]],
  ["Rare mammals & reptiles", 10, ["Spotted-necked Otter", "Freshwater Crab", "African Helmeted Turtle"]],
];
export const BONUS_BIRD = ["Action or behaviour captured on camera (diving to hunt, flying in formation, carrying nesting material): 10 points", "Eco Paddler: retrieve floating plastic while paddling: 1 point per item, max 5 points"];
export const BONUS_JUNIOR = ["Action or behaviour captured on camera: 10 points", "Eco Paddler: retrieve floating plastic while paddling: 2 points per item, max 6 points"];
export const RANKS = [["Novice Navigator", 0], ["Fledgling Explorer", 20], ["Spotter", 50], ["Tracker", 80], ["Ranger", 110], ["Master Naturalist", 140]];
export const rankOf = (s) => RANKS.filter((r) => s >= r[1]).pop()[0];
export const HOF = "Highest wildlife score,Top 10 on the leaderboard,Highest score by a first-time participant (Novice),Species spotted this week,This week’s top 3 explorers,Young explorer achievement,This week’s golden / rare sightings,Current #1,Biggest climber this month,Most species spotted,Best wildlife photograph,Rarest sighting,Best Sunrise score,Best Sunset score,Best photo/video moment".split(",");
export const BOARDS = ["Birdwatcher Challenge", "Junior Wildlife", "Wildlife Champions", "Team Challenge", "Fishing"];
// Sample rows for layout only. Replace with real scores (e.g. from a Google Sheet).
export const SAMPLE = [["Jeremy", 1, 85, 18, "2 Oct 26"], ["Sara", 2, 42, 12, "7 Nov 26"], ["Chris", 3, 15, 6, "23 Dec 26"]];
