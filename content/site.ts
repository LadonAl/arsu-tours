export const SITE = {
  name: 'Arsu Tours',
  wordmark: 'ARSU',
  tagline: 'ARSU · TOURS',
  ar: 'أرصو',
  domain: 'arsu.tours',
  description:
    'A demonstration website for a fictional Syria travel company, built with researched and fact-checked destination information.',
};

/**
 * This is a demo. It is not a tour operator, it takes no bookings, and the
 * company does not exist. That has to be unmissable rather than buried.
 */
export const DEMO = {
  bar: 'Demo site — Arsu Tours is not a real company. Nothing here can be booked.',
  short: 'Demonstration site. Not a real tour operator.',
  formNotice:
    'This form does not send anything. It is here to demonstrate the layout.',
  priceNotice:
    'Illustrative figures for a demo. Not quotes, and not based on real supplier pricing.',
  journeyNotice:
    'Illustrative itineraries. The dates, prices and remaining places are invented for the demo.',
  ledgerNotice:
    'Illustrative breakdown. The percentages, the guild count and the annual totals are invented for the demo — there is no company behind them.',
  journalNotice:
    'Illustrative journal entries, written for the demo. Not dispatches from a real guide.',
};

export const NAV = [
  { href: '/regions', label: 'Where we go' },
  { href: '/journeys', label: 'Journeys' },
  { href: '/about', label: 'About' },
  { href: '/ledger', label: 'The ledger' },
  { href: '/practicalities', label: 'Practicalities' },
  { href: '/journal', label: 'Journal' },
];

/**
 * The Syrian pound was redenominated on 1 January 2026 — the Central Bank cut
 * two zeros, so 100 old pounds became 1 new pound. Any rate near 13,000 is
 * pre-redenomination. These are indicative and deliberately round; nothing on
 * this site is a live quote.
 */
export const CURRENCIES = {
  USD: { rate: 1, symbol: '$', prefix: true, label: 'USD' },
  EUR: { rate: 0.92, symbol: '€', prefix: true, label: 'EUR' },
  SYP: { rate: 130, symbol: 'SYP', prefix: false, label: 'SYP' },
} as const;

export type CurrencyCode = keyof typeof CURRENCIES;

export function money(usd: number, code: CurrencyCode, compact = false) {
  const c = CURRENCIES[code] ?? CURRENCIES.USD;
  const v = usd * c.rate;
  let s: string;
  if (compact && v >= 1e6) s = (v / 1e6).toFixed(v / 1e6 < 10 ? 1 : 0).replace(/\.0$/, '') + 'M';
  else if (compact && v >= 1000) s = Math.round(v / 1000) + 'k';
  else s = Math.round(v).toLocaleString('en-US');
  return c.prefix ? c.symbol + s : s + ' ' + c.symbol;
}

/**
 * Why the site is called Arsu. Drawn from `research/arsu.md`.
 *
 * Deliberate constraints on this copy: it frames the name as heritage, the way
 * a shipping line might be named for Hermes. It contains no devotional
 * language, claims no revival or worship, and makes no statement about any
 * living faith. The cult it refers to ended with Palmyra's caravan economy
 * after the 3rd century CE.
 */
export const ARSU = {
  headline: 'Why the name',
  short:
    'Arsu was a guardian of travellers on the caravan roads that crossed this land, carved on stone at Palmyra nearly two thousand years ago. We borrow the name as heritage, the way a shipping line borrows the name of Hermes.',
  body: [
    'Arsu belonged to Palmyra, the caravan city that linked the Roman Mediterranean to Mesopotamia and Arabia. He is attested from roughly the 1st century BCE to the 3rd century CE, and his best-documented role is a simple one: he protected caravans and the people travelling with them.',
    'On the reliefs he rides a camel, in Roman-style armour with a spear and a small round shield. A pair of them, now in the museums of Aleppo and Damascus and dated by inscription to 113 CE, show him beside his twin Azizos, who rides a horse in ordinary clothes. A dedication calls them "the good gods who reward". Another relief, from Dura-Europos on the Euphrates and now at Yale, is inscribed to "Arsu the camel-rider".',
    'Scholars since Rostovtzeff in 1932 have read the two brothers as the evening and the morning star — the two lights that lead caravans across the desert. That reading is widely repeated and worth knowing, but it is an interpretation rather than something the Palmyrenes wrote down, and the iconography is not perfectly consistent across every relief.',
    'A temple to Arsu stood at Palmyra. Excavators there recovered a jar holding 125 tesserae — small clay tokens that worked as entry passes to a sacred banquet — one of the few complete sets ever found from a single occasion. A token that gets you in, kept by someone who travelled for a living: a reasonable thing for a travel company to be named after.',
    'The cult itself ended a very long time ago, along with the caravan economy that supported it, after Palmyra’s defeat by Rome in 272–273 CE. The name is used here as history, and nothing more than that.',
  ],
  sources: [
    { label: 'ISAW / Yale — Relief of the God Arsu Riding a Camel', href: 'https://isaw.nyu.edu/exhibitions/edge-of-empires/highlights/arsu' },
    { label: 'Virtual Museum of Syria — Arsu & Azizo relief, National Museum of Aleppo', href: 'https://virtual-museum-syria.org/aleppo/base-relief-of-two-palmyrene-caravan-gods/' },
    { label: 'French Ministry of Culture — Gods of Palmyra', href: 'https://archeologie.culture.gouv.fr/palmyre/en/gods-palmyra' },
    { label: 'Rostovtzeff (1932), "The Caravan-Gods of Palmyra", JRS 22', href: 'https://archive.org/details/Rost1932JRSGodsOfPalmyra' },
  ],
};

export const HERO = {
  title: 'Syria, with the people rebuilding it.',
  lead: 'Ten regions, from the Damascus courtyards to the cedar coast. Guides who live there. Workshops where the maker keeps the fee.',
  facts: [
    { title: 'Eight travellers', note: 'Maximum per departure' },
    { title: 'Syrian guides', note: 'Historians who live there' },
    { title: 'The maker keeps the fee', note: 'Every workshop, in full' },
  ],
};
