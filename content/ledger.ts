/**
 * The ledger. This was the best idea in the v11 design — a tour company
 * showing where the money actually goes — and it is kept in full.
 *
 * Every number on this page is invented, because the company is invented.
 * The mock already marked some of them "(unverified)", which was the right
 * instinct; here all of them carry it, and the page says so at the top rather
 * than in a footnote.
 */

export const SPLIT = [
  { label: 'Beds and tables', pct: 34, note: 'Courtyard houses, family hotels, the kitchens that feed us' },
  { label: 'Guides and drivers', pct: 22, note: 'Monthly wages, not per-traveller piecework' },
  { label: 'Roads and entries', pct: 14, note: 'Fuel, vehicles, site tickets, permissions' },
  { label: 'Workshops', pct: 12, note: 'Paid to the maker in full, receipted in front of you' },
  { label: 'Guild restoration fund', pct: 8, note: 'Set aside on payment, spent on roofs, looms and tools' },
  { label: 'Running Arsu', pct: 10, note: 'Office in Damascus, insurance, tax, this website' },
];

export const STATS = [
  { value: '100%', label: 'Workshop fees paid directly to the maker', illustrative: true },
  { value: '45', label: 'Craft guilds we book work with, across three cities', illustrative: true },
  { value: '8%', label: 'Of every booking into the guild restoration fund', illustrative: true },
  { value: '$120k', label: 'Into workshop repairs and apprentice tools, 2025', illustrative: true },
];

export const SAMPLE_TOTAL_USD = 1250;
export const SAMPLE_LABEL = 'Seven-day journey · per person';

export const LEDGER_INTRO =
  'Most of what you pay should stay with the people you actually meet. This is the split, what it funds, and — since this is a demonstration site — a clear statement that every figure on this page is invented.';

/**
 * The one genuinely verifiable thing on this page: Aleppo soap really is on
 * the UNESCO Intangible Cultural Heritage list, and the craft economy the
 * ledger is about is real even though this company is not.
 */
export const REAL_NOTE = {
  text:
    'The crafts are real, even though this company is not. Aleppo soap — sabon ghar, laurel and olive oil, cured six to nine months — was inscribed on UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity in December 2024. Damascene brocade, mother-of-pearl marquetry and the Hama norias are all living trades with people still working in them.',
  href: 'https://ich.unesco.org/en/lists',
};
