import { FeatureSection, TimelineCard } from "./types";

export const BRAND_NAME = "CHIMMAN DOCUMENTARY";

export const FEATURES: FeatureSection[] = [
  {
    id: 1,
    title: "SPITI: THE LAST VILLAGE",
    subtitle: "Remote Area / Documentary",
    description:
      "Went searching for the world's highest post office and found a community living in -20°C with smiles warmer than a chai. Learned that silence has its own language. Raw, frozen, and soul-stirring.",
    imageUrl: "/public/hero3.png",
  },
  {
    id: 2,
    title: "HAMPI: GHOSTS OF VIJAYNAGAR",
    subtitle: "Historical / Storytelling",
    description:
      "Walking through stones that speak. Found hidden carvings that history books missed. Learned that empires fall, but stories remain etched. Feeling: Small, humbled, and totally inspired.",
    imageUrl: "/public/hero5.jpeg",
  },
  {
    id: 3,
    title: "BANARAS: CHAOS MEIN SHANTI",
    subtitle: "Raw Experience / Comedy",
    description:
      "Got lost in the narrow lanes, argued with a cow, and ended up having the best lassi of my life. Found that life is a circle. Emotional, shocking, and funny all at once.",
    imageUrl: "/public/hero6.png",
  },
  {
    id: 4,
    title: "JAISALMER: DHORE KI KAHANI",
    subtitle: "Remote / Documentary",
    description:
      "Stayed with a nomadic family under the stars. Found that hospitality isn't about luxury; it's about heart. Learned to live with limited water. Inspiring and eye-opening.",
    imageUrl: "/public/hero7.png",
  },
];
export const FEATURESS: FeatureSection[] = [
  {
    id: 1,
    title: "DARGAH-E-AALA HAZRAT",
    subtitle: "Holy Place / Spiritual",
    description:
      "A place of deep peace and devotion. Visiting Dargah-e-Aala Hazrat brings a sense of calm, humility, and spiritual connection. People from across the country come here with faith, prayers, and hope. The atmosphere is soulful, serene, and filled with belief.",
    imageUrl: "/public/dargah.png",
  },
  {
    id: 2,
    title: "TOMB OF IKHLAS KHAN, (BADAUN)",
    subtitle: "Historical / Heritage",
    description:
      "A lesser-known historical monument from the Mughal era. The tomb reflects old architectural style and carries stories of the past silently within its walls. Standing here feels like touching history — quiet, forgotten, yet powerful.",
    imageUrl: "/tomb.jpg",
  },
  {
    id: 3,
    title: "RUBBER FACTORY, FATEHGANJ (BAREILLY)",
    subtitle: "Remote / Urban Exploration",
    description:
      "An abandoned industrial site slowly taken over by time and nature. Broken machines, silent halls, and rusted structures create a mysterious vibe. The place feels eerie, raw, and untouched — a reminder of how fast industries rise and fall.",
    imageUrl: "/public/remote-factory.png",
  },
  {
    id: 4,
    title: "NAINITAL ZOO (UTTARAKHAND)",
    subtitle: "Wildlife / Nature",
    description:
      "A peaceful zoo set amidst the hills of Nainital. Surrounded by forests and cool mountain air, it offers a calm and educational experience. A perfect place for nature lovers, families, and anyone wanting a slow, refreshing break.",
    imageUrl: "/public/zoo.png",
  },
];

export const TIMELINE_DATA: TimelineCard[] = [
  {
    id: 1,
    destination: "Dhanushkodi",
    date: "JAN 2024",
    highlight:
      "Standing at the edge of India where the two seas meet. Sunsaan raaste aur purani yaadein.",
    emotion: "Calm",
    emotionTag: "🏞️",
  },
  {
    id: 2,
    destination: "Zanskar Valley",
    date: "FEB 2024",
    highlight:
      "Frozen river trek. Pair kaanp rahe thay par dil garam tha. Ekdum alag duniya.",
    emotion: "Shock",
    emotionTag: "🔥",
  },
  {
    id: 3,
    destination: "Majuli Island",
    date: "MAR 2024",
    highlight:
      "Mask makers ke saath baith kar seekha ki kala hi pehchan hai. Bohat sukoon mila.",
    emotion: "Learning",
    emotionTag: "🧠",
  },
  {
    id: 4,
    destination: "Old Delhi Galiyan",
    date: "APR 2024",
    highlight:
      "Jalebi khate khate raasta bhool gaya. 2 ghante bhatka par maza bohat aaya.",
    emotion: "Funny",
    emotionTag: "😂",
  },
];
export const GALLERY_IMAGES = [
  "/public/c1.png",
  "/public/c4.jpeg",
  "/public/c3.png",
  "/public/c2.png",
  "/public/hero6.png",
  "/public/hero7.png",
];

export const STATS = [
  { label: "States Covered", value: "5" },
  { label: "Stories Told", value: "20+" },
  { label: "Holy Visit", value: "15+" },
  { label: "Kilometers", value: "10k+" },
];

export const LEARNINGS = [
  {
    title: "People are the same everywhere",
    content:
      "Whether it's a cold desert or a humid coast, a smile and a respectful 'Namaste' open more doors than any VIP pass ever could.",
  },
  {
    title: "Google Maps is a liar",
    content:
      "The best spots I've found weren't on any map. They were told to me by a local dhaba owner over a cup of extra-sweet tea.",
  },
  {
    title: "Comedy in Chaos",
    content:
      "When your bike breaks down in the middle of nowhere, you can either cry or make a Reel. I chose the latter, and a farmer helped me fix it while making fun of my 'city boy' shoes.",
  },
];

export const UPCOMING_JOURNEYS = [
  {
    destination: "Northeast: The Unseen Seven",
    date: "OCT 2024",
    why: "Exploring the living root bridges and the hidden traditions of local tribes.",
    expect:
      "Expect raw, green, and deep cultural immersion. Zero filters, just pure jungle vibes.",
  },
  {
    destination: "The Lost Temples of Odisha",
    date: "DEC 2024",
    why: "Ancient architecture that defies modern engineering and local folklore.",
    expect:
      "History-based storytelling with a touch of mystery. We're going deep into the legends.",
  },
];
