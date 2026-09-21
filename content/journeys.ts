/**
 * Itineraries. The *routes* are real — distances, drive times and the order of
 * stops come from `research/operations.md` and the city cards. The departure
 * dates, prices and remaining places are invented for the demo and are
 * labelled as such everywhere they appear.
 */

export type Day = {
  n: string;
  place: string;
  ar: string;
  title: string;
  body: string;
  night: string;
};

export type Journey = {
  slug: string;
  meta: string;
  date: string;
  title: string;
  usd: number;
  image: string;
  regions: string[];
  body: string;
  /** Invented for the demo. */
  seats: string;
  days?: Day[];
};

export const JOURNEYS: Journey[] = [
  {
    slug: 'silk-road',
    meta: 'Seven days · 4 October',
    date: '4 October 2026',
    title: 'The Silk Road Echoes',
    usd: 1250,
    image: 'aleppoVault',
    regions: ['Damascus', 'Hama', 'Aleppo'],
    body: "Damascus to Aleppo by way of Hama's norias and the colonnade at Apamea. Two nights in a restored courtyard house, a day at a marquetry bench, and the citadel with the archaeologist re-cataloguing it.",
    seats: '3 of 8 places open',
    days: [
      {
        n: '01',
        place: 'Damascus',
        ar: 'دمشق',
        title: 'Arrive, and walk one street slowly',
        body: 'Met at the airport or on the Beirut road, then straight to the courtyard house. An evening walk down Straight Street with nothing to see except the city going home, and dinner where you are staying.',
        night: 'Night: restored courtyard house, Old Damascus',
      },
      {
        n: '02',
        place: 'Damascus',
        ar: 'دمشق',
        title: 'The Umayyad Mosque at opening, then the souqs',
        body: 'In the courtyard early, when the marble is still cool. Then Souq al-Hamidiyya end to end — look up at the roof, where the holes are from French artillery in 1925 — the brass guild, and a long lunch. The afternoon is yours.',
        night: 'Night: restored courtyard house, Old Damascus',
      },
      {
        n: '03',
        place: 'Damascus',
        ar: 'دمشق',
        title: 'A day at the brocade loom',
        body: 'Damascus gave its name to the cloth. You spend most of the day with a weaver working a hand loom, and you leave with what you made, however uneven. The fee goes to the workshop in full.',
        night: 'Night: restored courtyard house, Old Damascus',
      },
      {
        n: '04',
        place: 'Hama',
        ar: 'حماة',
        title: 'North to the waterwheels',
        body: 'Out of the city mid-morning, up the M5. Afternoon at the norias on the Orontes — up to twenty metres across, wooden, still turning — and the riverside coffeehouses built at their feet, where the groan of the wheel is simply part of the evening.',
        night: 'Night: family-run hotel above the river, Hama',
      },
      {
        n: '05',
        place: 'Apamea → Aleppo',
        ar: 'أفاميا',
        title: 'Two kilometres of colonnade, then the second city',
        body: 'Apamea in the morning: a colonnaded main street running close to two kilometres along a ridge, some columns spiral-fluted. It is usually quiet, and your guide will tell you why that quiet is not romantic — the site was looted heavily after 2011. Into Aleppo by late afternoon.',
        night: 'Night: courtyard house, Jdeideh, Aleppo',
      },
      {
        n: '06',
        place: 'Aleppo',
        ar: 'حلب',
        title: 'The citadel, the souq, the bench',
        body: 'Up to the citadel early, then Al-Madina Souq — the re-roofed sections while they trade, and the sections still closed, because seeing only the finished parts would be a kind of lie. The afternoon is the marquetry bench: mother-of-pearl inlay, badly cut, entirely yours.',
        night: 'Night: courtyard house, Jdeideh, Aleppo',
      },
      {
        n: '07',
        place: 'Aleppo',
        ar: 'حلب',
        title: 'One last morning, then away',
        body: 'Breakfast on the roof and a free morning — most people go back for the soap they did not buy. Transfer to the airport, or the road south to Damascus and Beirut if you are travelling overland.',
        night: 'Departure day',
      },
    ],
  },
  {
    slug: 'coastal',
    meta: 'Five days · 18 October',
    date: '18 October 2026',
    title: 'Coastal Pine & Citadel',
    usd: 980,
    image: 'coast',
    regions: ['Latakia', 'Tartus'],
    body: 'Latakia and Ugarit, where the earliest known ordered alphabet was found, then south along the coast to Tartus and the boat out to Arwad — with village kitchens along the way and two nights above the Mediterranean.',
    seats: '6 of 8 places open',
  },
  {
    slug: 'desert',
    meta: 'Six days · 8 November',
    date: '8 November 2026',
    title: 'Basalt, Colonnade, Desert',
    usd: 1120,
    image: 'palmyraColumns',
    regions: ['Bosra', 'Homs', 'Palmyra'],
    body: 'South to the black basalt theatre at Bosra, west to Krak des Chevaliers above the Homs Gap, then the long road east for first light on the Great Colonnade at Palmyra and a night under the desert sky.',
    seats: '8 of 8 places open',
  },
];

export const JOURNEY_BY_SLUG = Object.fromEntries(JOURNEYS.map((j) => [j.slug, j]));
