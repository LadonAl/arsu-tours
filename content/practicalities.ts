/**
 * Practical information. This is the page where being wrong costs a reader
 * real money and real time, so it is the page held to the tightest standard.
 *
 * Everything here traces to `research/travel-status.md`. Two answers are
 * materially different from the v11 mock, which had them backwards or too
 * confident — see `research/CONTENT-CORRECTIONS.md` §1 and §3.
 *
 * All of it is dated. A travel page without dates is a travel page that
 * quietly goes stale.
 */

export const AS_OF = '21 September 2026';

export type QA = { q: string; a: string; note?: string };
export type Group = { title: string; ar: string; items: QA[] };

export const ADVISORIES = [
  {
    body: 'United States — State Department',
    level: 'Level 4: Do Not Travel',
    detail:
      'Has stood at Level 4 continuously since the advisory system launched in 2018. The department states it cannot provide emergency or routine consular services to US citizens in Syria.',
    href: 'https://travel.state.gov/en/international-travel/travel-advisories/destination.syr.html',
  },
  {
    body: 'United Kingdom — FCDO',
    level: 'Advises against all travel',
    detail:
      'Applies to the entire country. Page updated 2 September 2026. Consular support is not available inside Syria, and travel insurance may be invalidated by travelling against the advice.',
    href: 'https://www.gov.uk/foreign-travel-advice/syria',
  },
  {
    body: 'Australia — Smartraveller',
    level: 'Do not travel',
    detail:
      'Cites armed clashes with civilian casualties, continuing air strikes including in Damascus, and terrorism threat. Australia has no embassy or consulate in Syria.',
    href: 'https://www.smartraveller.gov.au/destinations/middle-east/syria',
  },
];

export const ADVISORY_SUMMARY =
  'Every major Western government advisory checked — the United States, United Kingdom, Germany, Australia and Canada — places Syria in its highest formal risk category for the country as a whole. None has downgraded it since the change of government in December 2024, and none publishes a "safe region" carve-out at summary level.';

export const GROUPS: Group[] = [
  {
    title: 'Getting in',
    ar: 'الوصول',
    items: [
      {
        q: 'Do I need a visa?',
        a: 'For most nationalities Syria operates a reciprocity-based visa on arrival, at both airports and land borders — the fee scales with what a Syrian citizen would pay for a visa to your country, reported from free up to around $300, with most falling in the $50–150 range, payable in cash US dollars. A specific list of nationalities has to obtain pre-approval instead, reportedly taking three to four weeks.',
        note: 'Sources conflict on whether the e-visa portal is currently operating, and Canada’s advisory states that non-Arab nationals cannot obtain visas at the border at all. Treat this as nationality-dependent and confirm with a Syrian diplomatic mission before booking anything.',
      },
      {
        q: 'How do people actually arrive?',
        a: 'Two routes. A flight into Damascus — a dozen-plus carriers have returned since December 2024, including Qatar Airways from 7 January 2025, Royal Jordanian from 31 January 2025, and Turkish Airlines — or a flight to Beirut and a road transfer of roughly three hours, crossing at Jdeidat Yabous about 40 km from Damascus.',
        note: 'Airspace and borders have shown they can close at short notice around regional escalation.',
      },
      {
        q: 'What about Israeli stamps in my passport?',
        a: 'This is the one question where a general answer would be irresponsible. The position has historically been strict and the transition period has not obviously settled it. Check with a Syrian diplomatic mission directly, with your actual passport pages in front of you.',
      },
    ],
  },
  {
    title: 'On the ground',
    ar: 'في البلد',
    items: [
      {
        q: 'Is it safe?',
        a: 'We are not going to answer that for you, because the honest answer is that the governments that issue advice all still say no. As of September 2026 the US, UK, Germany, Australia and Canada each maintain their highest risk category for Syria as a whole, none of them carves out a safer region at summary level, and all note that consular help inside the country is unavailable or severely limited. Travelling against that advice can also invalidate travel insurance.',
        note: 'What is also true: the ground situation has changed faster than the advisories have. Airlines have returned, borders are busy, sanctions on banking have largely gone. Both things are the case at once, and anyone who tells you only one of them is selling you something.',
      },
      {
        q: 'What are checkpoints like?',
        a: 'Routine and frequent. Your guide does the talking, you keep your passport to hand, and cameras go away. Most take a couple of minutes; occasionally one adds an hour to a drive.',
      },
      {
        q: 'Will my phone work?',
        a: 'A local SIM is inexpensive — a new line has been reported at around 500 new Syrian pounds, roughly $4. Coverage is good in the cities and patchy on the desert road. Expect scheduled power cuts more or less everywhere.',
      },
    ],
  },
  {
    title: 'Money',
    ar: 'المال',
    items: [
      {
        q: 'Cards or cash?',
        a: 'Bring cash, in clean unmarked notes — US dollars or euros. This changed recently but not completely: in late August 2026 Visa and Mastercard each completed their first international card transactions in Syria, and acceptance is being switched on at a rolling set of participating hotels and restaurants. It is not general acceptance, and there is still no dependable ATM access for visitors.',
      },
      {
        q: 'Why do the prices here move when I change currency?',
        a: 'They are converted at an indicative rate, not a live one. Note also that the Syrian pound was redenominated on 1 January 2026 — the Central Bank cut two zeros, so 100 old pounds became 1 new pound. Any quote you see near 13,000 to the dollar is in the old currency.',
      },
      {
        q: 'Tipping — what is normal?',
        a: 'A shared tip for the driver at the end, handed over by whoever the group nominates. Nothing expected for a guide whose wage is paid properly in the first place.',
      },
    ],
  },
  {
    title: 'Being a guest',
    ar: 'الضيافة',
    items: [
      {
        q: 'What should I wear?',
        a: 'Modest and comfortable: covered shoulders and knees, and shoes you can walk cobbles in. A scarf is needed for mosque courtyards. Nobody expects you to dress as though you live here.',
      },
      {
        q: 'Can I photograph people?',
        a: 'Ask first, every time, and accept no for an answer. No photography at checkpoints or military sites, and none in damaged quarters where people are still living — that is somebody’s house, not a backdrop.',
      },
      {
        q: 'Alcohol, Ramadan, Fridays?',
        a: 'Alcohol is available in Damascus, Aleppo and on the coast, and not everywhere else. During Ramadan, daytime eating is discreet and the evenings are the best time to be in the country. Friday mornings are quiet, and any sensible itinerary plans around prayers.',
      },
      {
        q: 'How should I talk about the war?',
        a: 'Follow, do not lead. Everyone you meet has a version of the last fifteen years and most will tell you theirs if they want to. Treating damaged streets as a sight to photograph — rather than as where people live — is the fastest way to be resented, correctly.',
      },
    ],
  },
];
