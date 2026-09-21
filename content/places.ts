/**
 * Place content. Every factual claim here traces to `research/cities/*.md`,
 * which were written by researchers and then re-checked line by line by an
 * adversarial pass. Where that pass could not confirm something, the copy
 * says so instead of rounding it up into confidence.
 *
 * See `research/CONTENT-CORRECTIONS.md` for what changed from the v11 mock.
 */

export type Highlight = {
  name: string;
  nameAr?: string;
  blurb: string;
  /** Physical / access condition. Shown verbatim — this is the honest bit. */
  condition: string;
};

export type Place = {
  slug: string;
  name: string;
  /** Shorter label for the honeycomb card, where width is tight. */
  cardName?: string;
  ar: string;
  /** Short line for the honeycomb card. */
  note: string;
  days: string;
  /** Indicative only. See the demo notice. */
  usd: number;
  image: string;
  /** Under ~90 chars. */
  oneLiner: string;
  blurb: string;
  body: string[];
  highlights: Highlight[];
  unesco: string;
  conservation: string;
  access: string;
  gettingThere: string;
  bestSeason: string;
  flavour: string;
};

export const PLACES: Place[] = [
  {
    slug: 'damascus',
    name: 'Damascus',
    ar: 'دمشق',
    note: 'Straight Street and the Umayyad courtyard',
    days: '3–5 days',
    usd: 450,
    image: 'damascusSouq',
    oneLiner: 'Aramean, Roman, Umayyad and Ottoman Damascus, still lived-in behind the walls',
    blurb:
      'One of a small handful of cities with a genuine — and genuinely contested — claim to continuous habitation since deep antiquity. Courtyard houses behind unmarked doors, the Umayyad Mosque at first light, and a guild street where brass is still worked by hand.',
    body: [
      'The claim you will see repeated is that Damascus is the oldest continuously inhabited city on earth. The honest version is more interesting: it is one of a small group — with Aleppo, Byblos and Jericho — where the claim is real, argued over, and unresolved. Carbon dating at nearby Tell Ramad points to occupation from around 6300 BC. The walled city is conventionally put in the 3rd millennium BC.',
      'UNESCO inscribed the Ancient City in 1979 for roughly 125 monuments spanning Aramean, Roman, Byzantine, Umayyad, Ayyubid, Mamluk and Ottoman Damascus. About 4.5 km of wall still rings it, pierced by eight gates, seven of which trace a Roman circuit.',
      'The Old City came through the war comparatively better than Aleppo or Palmyra — it was never a frontline in the same way. That is not the same as untouched. Years of war, sanctions and underinvestment put it on the Danger List in 2013, and it is still there.',
    ],
    highlights: [
      {
        name: 'Umayyad Mosque',
        nameAr: 'الجامع الأموي',
        blurb:
          'Built 705–715 CE over an Aramean sanctuary to Hadad, then a Roman temple to Jupiter, then a Byzantine church. Its shrine is venerated by Muslims and Christians alike for relics associated with John the Baptist.',
        condition: 'Open and active — a working mosque before it is anything else.',
      },
      {
        name: 'Souq al-Hamidiyya',
        nameAr: 'سوق الحميدية',
        blurb:
          'The covered market running to the mosque gate. Its metal roof still bears holes attributed to French artillery fire during the 1925 Great Syrian Revolt.',
        condition: 'Open and busy, per 2025–2026 reporting.',
      },
      {
        name: 'Straight Street and the Midhat Pasha souq',
        nameAr: 'الشارع المستقيم',
        blurb:
          'The Via Recta, named in the Book of Acts, running east–west across the Old City with scattered Roman colonnade remains still standing in it.',
        condition: 'Open and walkable.',
      },
      {
        name: 'Azm Palace',
        nameAr: 'قصر العظم',
        blurb:
          'An 18th-century governor’s residence, built 1749–1750, and the clearest single lesson in how a Damascene courtyard house is put together.',
        condition: 'Functioning museum — check current hours before going.',
      },
      {
        name: 'Mausoleum of Saladin',
        nameAr: 'قبر صلاح الدين',
        blurb:
          'Beside the Umayyad Mosque, from 1196. The marble sarcophagus added in the late 19th century is most often credited to Sultan Abdulhamid II, though sources genuinely disagree about who gave it.',
        condition: 'Intact and open.',
      },
      {
        name: 'Bab Touma',
        nameAr: 'باب توما',
        blurb:
          'The historic Christian quarter east of the mosque. A residential neighbourhood people actually live in, not a heritage set.',
        condition: 'Inhabited, open to visitors.',
      },
    ],
    unesco: 'Inscribed 1979 (criteria i, ii, iii, iv, vi). On the List of World Heritage in Danger since June 2013, retained per decision 47 COM 7A.50 (2025).',
    conservation:
      'Spared the large-scale destruction seen in Aleppo and Palmyra, but on the Danger List since 2013 after years of war, sanctions and underinvestment. Restoration through 2026 is real but uneven.',
    access:
      'Damascus International Airport has had resumed international service since January 2025 — Qatar Airways from 7 January 2025, Royal Jordanian from 31 January 2025, Turkish Airlines since. Mount Qasioun reopened gradually after December 2024; the Citadel reopened in spring 2026.',
    gettingThere:
      'About 40 km from the Lebanese border at Jdeidat Yabous on the M2, and roughly 85 km inland from Beirut.',
    bestSeason: 'Spring (March–May) and autumn (September–November). Summers are hot.',
    flavour:
      'Damascene courtyard houses are a craft tradition in their own right, and a number have been restored as small hotels inside the Old City.',
  },

  {
    slug: 'aleppo',
    name: 'Aleppo',
    ar: 'حلب',
    note: 'The citadel and a marquetry bench',
    days: '2–4 days',
    usd: 520,
    image: 'aleppoStone',
    oneLiner: 'One of the world’s oldest continuously inhabited cities, rebuilding souq by souq',
    blurb:
      'The hardest place to see honestly and the most rewarding. We walk the souq where re-roofing is finished, the streets where it is not, and sit a full afternoon at a marquetry bench in Jdeideh.',
    body: [
      'Aleppo’s Old City took major damage between 2012 and 2016, and then took more in the February 2023 earthquake, which cracked defensive walls, collapsed a tower of the Old City wall and part of the Citadel’s Ottoman mill, and weakened khans across the souq.',
      'What is happening now is not a restoration in the sense of a single project with a ribbon at the end. It is section by section: one stretch of Al-Madina Souq re-roofed and trading, the next still shut. Going honestly means seeing both, which is the only reason to go at all.',
      'Aleppo soap — sabon ghar, laurel and olive oil, cured six to nine months and hand-stamped — was inscribed on UNESCO’s Intangible Cultural Heritage list in December 2024.',
    ],
    highlights: [
      {
        name: 'Citadel of Aleppo',
        nameAr: 'قلعة حلب',
        blurb:
          'The fortified mound at the centre of the city, and the thing every photograph of Aleppo is taken from or of.',
        condition:
          'Partially restored; reopened after the southern tower and entrance were stabilised. The 2023 earthquake did further damage.',
      },
      {
        name: 'Great Umayyad Mosque of Aleppo',
        nameAr: 'الجامع الأموي الكبير',
        blurb:
          'Its free-standing 11th-century minaret collapsed in 2013. Reconstruction has been running since, using catalogued original stone where it could be recovered.',
        condition:
          'Functioning as a mosque; briefly reopened for public prayer during Ramadan in March 2025. Work continues.',
      },
      {
        name: 'Al-Madina Souq',
        nameAr: 'سوق المدينة',
        blurb:
          'Kilometres of covered market. Some of it is trading again under a new roof; some of it is still closed.',
        condition: 'Partially restored and active in several sections, closed in others.',
      },
      {
        name: 'Khan al-Wazir and the khans',
        nameAr: 'خان الوزير',
        blurb:
          'Merchant caravanserais around the souq, built for exactly the trade Arsu was invoked to protect.',
        condition: 'Mixed — some stabilised and accessible, others still under repair.',
      },
      {
        name: 'Jdeideh quarter',
        nameAr: 'الجديدة',
        blurb:
          'The historic Christian quarter of stone lanes and courtyard houses, and where the marquetry workshops are.',
        condition: 'Largely restored; the cathedral is an active place of worship.',
      },
    ],
    unesco: 'Inscribed 1986 (criteria iii, iv) as the Ancient City of Aleppo. On the Danger List since 2013.',
    conservation:
      'Major war damage 2012–2016, then further structural damage in the February 2023 earthquake. Restoration is running section by section rather than site-wide.',
    access:
      'Aleppo International Airport has resumed limited service. Access is reopening but uneven and changes quickly — check current government advisories rather than relying on any blanket statement.',
    gettingThere:
      'About 355–360 km from Damascus on the M5, roughly 4 to 4¾ hours driving before checkpoints, or a short domestic flight.',
    bestSeason: 'Spring and autumn. Summer is hot and winter genuinely cold.',
    flavour:
      'Aleppo soap, cured for six to nine months in the soap khans. Aleppo pepper. And kebab karaz — kebab in sour cherry sauce — which belongs to this city and nowhere else.',
  },

  {
    slug: 'palmyra',
    name: 'Palmyra',
    ar: 'تدمر',
    note: 'The colonnade at dawn, a desert camp at night',
    days: '2 days',
    usd: 390,
    image: 'palmyraColonnade',
    oneLiner: 'Zenobia’s caravan capital: colonnades still standing, temples still rubble',
    blurb:
      'A long drive for a short, unforgettable stay: the Great Colonnade at dawn before the heat, and a night under the desert sky. This is also where the god the site is named for was worshipped.',
    body: [
      'Be clear about what is here and what is not. ISIS destroyed the Temple of Baalshamin outright in 2015, gutted the cella of the Temple of Bel, destroyed the Monumental Arch, toppled 12 of the Tetrapylon’s 16 columns in January 2017, and destroyed at least seven tower tombs including the Tower of Elahbel.',
      'The Great Colonnade is largely standing. So is the theatre, though its stage facade is damaged. So is the Arab castle on the hill above, Qalaat Shirkuh, minus its entrance stair. That is what you come for now, and it is still worth the desert road.',
      'The Palmyra Museum remains closed to visitors. The building was damaged by shelling; an internationally funded restoration was expected to begin in January 2026, and rehabilitation of the wider site is estimated at six to seven years.',
      'Palmyra is where Arsu — the caravan-guardian this demo is named after — had his temple. Excavators there found a jar of 125 tesserae, clay tokens used as entry passes to sacred banquets: one of the few complete sets ever recovered from a single occasion.',
    ],
    highlights: [
      {
        name: 'The Great Colonnade',
        nameAr: 'الشارع المستقيم',
        blurb:
          'The mile-long spine of the ancient city, its columns still carrying the brackets that once held statues of Palmyra’s merchant families.',
        condition:
          'Largely standing. Some columns lost or destabilised by nearby conflict damage, rather than deliberately targeted.',
      },
      {
        name: 'Temple of Bel',
        nameAr: 'معبد بل',
        blurb:
          'The great sanctuary at the eastern end of the colonnade, dedicated in 32 CE.',
        condition: 'Cella destroyed by ISIS on 30 August 2015. The monumental entrance arch and parts of the outer wall survive.',
      },
      {
        name: 'The Monumental Arch',
        nameAr: 'قوس النصر',
        blurb: 'The triple arch that turned the colonnade’s axis, and the single most reproduced image of Palmyra.',
        condition: 'Destroyed by ISIS in October 2015. Reconstruction from surviving fragments has been proposed and debated.',
      },
      {
        name: 'Roman theatre',
        nameAr: 'المسرح الروماني',
        blurb: 'A 2nd-century theatre set into the middle of the colonnaded city.',
        condition: 'Seating largely survives; the stage facade was damaged and partly collapsed.',
      },
      {
        name: 'Qalaat Shirkuh (Fakhr al-Din al-Ma’ani Castle)',
        nameAr: 'قلعة شيرکوه',
        blurb: 'The hilltop castle above the oasis — the view everyone wants at sunset.',
        condition: 'Largely intact, with entrance stairway and a tower damaged by retreating fighters.',
      },
    ],
    unesco: 'Inscribed 1980 (criteria i, ii, iv). On the List of World Heritage in Danger since 2013 and still on it.',
    conservation:
      'Destruction here was deliberate and severe. What survives survives; what was destroyed is not coming back in the form it had. Neither fact should be softened.',
    access:
      'The archaeological site has resumed limited access, with accessible sectors open roughly sunrise to sunset. The museum is closed. Conditions change — verify before travelling.',
    gettingThere: 'Roughly 215 km from Damascus by the most direct route, across the Badiya desert.',
    bestSeason: 'Spring and autumn. The site is exposed and there is no shade.',
    flavour:
      'Tadmur grew rich taxing merchants moving silk, spices and incense between the Mediterranean and the East — the caravan trade that made a guardian of travellers worth invoking.',
  },

  {
    slug: 'homs',
    name: 'Homs',
    ar: 'حمص',
    note: 'Krak des Chevaliers, an hour west',
    days: '2 days',
    usd: 370,
    image: 'krak',
    oneLiner: 'The Homs Gap, and the Hospitaller fortress that held it for two centuries',
    blurb:
      'Most travellers come for Krak des Chevaliers, an hour west — one of the best-preserved crusader castles anywhere, and damaged in this war like everything else. We add the city itself, and the families who chose to come back to it.',
    body: [
      'Krak des Chevaliers sits on a spur above the Homs Gap, the corridor that links the coast to the interior. Whoever held it controlled the road. The Knights Hospitaller held it from 1142 until 1271.',
      'It was shelled by government forces in August 2012, which damaged the chapel, and hit again by shelling and a July 2013 airstrike that damaged towers, the carved loggia and the staircase of the Hall of the Knights, while the castle was held by opposition forces. Restoration has been under way since, including a Syrian–Hungarian mission that stabilised frescoes in the former chapel.',
      'The countryside below is Wadi al-Nasara, the Valley of the Christians — a long-mixed region of Christian and Muslim mountain villages.',
    ],
    highlights: [
      {
        name: 'Hall of the Knights',
        nameAr: 'قاعة الفرسان',
        blurb: 'The vaulted Gothic hall at the heart of the inner ward, with its carved loggia.',
        condition: 'War-damaged 2012–2013 — staircase and carved elements. Restoration reported by DGAM and UNESCO.',
      },
      {
        name: 'Inner curtain wall and towers',
        nameAr: 'السور الداخلي',
        blurb: 'The concentric defence that made the castle famously difficult to take by force rather than by trickery.',
        condition: 'Cracked by the 2012–2013 shelling and airstrike; the wall between the Commander’s and Knights’ Towers took the worst of it.',
      },
      {
        name: 'The former chapel',
        nameAr: 'الكنيسة',
        blurb: 'A crusader chapel later used as a mosque — the two uses legible in the same room.',
        condition: 'Damaged 2012–2013; frescoes stabilised by a Syrian–Hungarian conservation mission.',
      },
      {
        name: 'Outer wall and moat',
        nameAr: 'السور الخارجي',
        blurb: 'The outer ring and the water-filled ditch between the two walls.',
        condition: 'Largely intact, with restored sections.',
      },
    ],
    unesco: 'Inscribed 2006 as "Crac des Chevaliers and Qal’at Salah El-Din" (joint listing). On the Danger List since 2013.',
    conservation:
      'Direct war damage in 2012 and 2013, followed by an ongoing restoration programme. "Best preserved" is still fair; "undamaged" is not.',
    access: 'Reopened to visitors, with tour operators running trips since spring 2025. Opening hours and any permit requirements should be confirmed directly.',
    gettingThere: 'North from Damascus on the M1 to Homs, roughly 160 km, then about 40 km west to Al-Husn.',
    bestSeason: 'Spring and autumn — the site is high, exposed and hot in summer.',
    flavour: 'Wadi al-Nasara, the valley below the castle, and the mountain villages spread through it.',
  },

  {
    slug: 'hama',
    name: 'Hama',
    ar: 'حماة',
    note: 'The norias still turning on the Orontes',
    days: '1–2 days',
    usd: 290,
    image: 'hamaNoria',
    oneLiner: 'A river city of turning waterwheels, and a colonnade in the hills above it',
    blurb:
      'The norias — enormous wooden waterwheels on the Orontes — still turn, and the riverside gardens below them are where Hama goes in the evening. Apamea is an hour northwest.',
    body: [
      'The norias are the reason to stop. They are conserved and several still turn; one wheel was deliberately burned in 2014 and others were left unmaintained during the war. The coffeehouses at their base are built so you hear the groan of the wheel over the conversation.',
      'Two different periods of damage meet in this city and should not be run together. Al-Nuri Mosque and the Azm Palace were both damaged by shelling in 1982 and restored over the decades that followed. Apamea’s damage is separate and post-2011.',
      'Apamea is a Seleucid foundation with a colonnaded main street running close to two kilometres through open country. The colonnade and theatre stand. The site was also looted extensively after 2011, documented from satellite imagery — the quiet there is not picturesque, it is what was left behind.',
    ],
    highlights: [
      {
        name: 'The norias of Hama',
        nameAr: 'نواعير حماة',
        blurb: 'Wooden waterwheels up to twenty metres across, lifting Orontes water into aqueducts.',
        condition: 'Conserved and turning. One wheel was deliberately burned in 2014; others suffered from lack of maintenance.',
      },
      {
        name: 'Apamea — the Great Colonnade',
        nameAr: 'أفاميا',
        blurb: 'Close to two kilometres of colonnaded street on a ridge above the Ghab plain, some columns spiral-fluted.',
        condition: 'Colonnade and theatre standing. The site suffered extensive, satellite-documented looting after 2011.',
      },
      {
        name: 'Azm Palace, Hama',
        nameAr: 'قصر العظم',
        blurb: 'The Hama residence of the same governing family whose Damascus palace is the better known of the two.',
        condition: 'Damaged in the 1982 bombardment, restored after 2005.',
      },
      {
        name: 'Masyaf Castle',
        nameAr: 'قلعة مصياف',
        blurb: 'A Nizari Ismaili stronghold west of Hama, in the mountains between the valley and the coast.',
        condition: 'Under restoration since 2000 with Aga Khan Trust for Culture support.',
      },
    ],
    unesco: 'Not inscribed. Apamea has been on Syria’s Tentative List since 1999 (criterion iv). Hama’s norias are not inscribed.',
    conservation:
      'Damage from 1982 and damage from the post-2011 war are distinct events with distinct causes, and are kept separate here.',
    access: 'Hama sits on the main Damascus–Aleppo highway. Apamea is 45 minutes to an hour northwest; Masyaf about 45 minutes west.',
    gettingThere: 'On the M5 between Homs and Aleppo — the natural break in the drive north.',
    bestSeason: 'Spring, when the Ghab plain below Apamea is green.',
    flavour:
      'Riverside qahwas built at the foot of the wheels, where the noria’s groan is simply part of the evening.',
  },

  {
    slug: 'latakia',
    name: 'Latakia',
    ar: 'اللاذقية',
    note: 'The coast, the mountains, and Ugarit',
    days: '3 days',
    usd: 410,
    image: 'coast',
    oneLiner: 'Syria’s Mediterranean coast, where the earliest known ordered alphabet was written into clay',
    blurb:
      'The green Syria people do not expect: pine and cedar slopes above the Mediterranean, black-sand beaches at Ras al-Bassit, and village kitchens where lunch takes three hours because it should.',
    body: [
      'At Ras Shamra, a few kilometres north of the city, excavations from 1929 uncovered Ugarit and its cuneiform tablets — including the Ugaritic abecedary, the earliest known example of an alphabet written in a fixed order. That ordering is the ancestor of the sequence you still recite.',
      'Be precise about the claim. Ugarit did not produce the first alphabet. It produced the earliest known *ordered* one, and the Baal Cycle, the fullest surviving account of Canaanite myth.',
      'The tablets themselves are dispersed to the Louvre and the National Museum of Damascus. The National Museum of Latakia has been closed since 2011 to protect its collection.',
    ],
    highlights: [
      {
        name: 'Ugarit (Ras Shamra)',
        nameAr: 'أوغاريت',
        blurb: 'A Bronze Age port city with a royal palace, archives, and the tablets that carried the alphabet.',
        condition:
          'Ruins, excavated since 1929. Last independently verified condition assessment was satellite imagery from 2011 and 2014, which found the tell largely intact.',
      },
      {
        name: 'Ras al-Bassit',
        nameAr: 'رأس البسيط',
        blurb: 'Black volcanic sand under the slopes of Jebel Aqra, near the Turkish border.',
        condition: 'Open as a landscape; pre-war chalet and resort development was extensive.',
      },
      {
        name: 'Mount Aqra (Jebel Aqra)',
        nameAr: 'جبل الأقرع',
        blurb:
          'The mountain that stands behind the whole region, and that the Ugaritic texts treat as the seat of Baal.',
        condition: 'Accessible as a landscape feature.',
      },
      {
        name: 'Kassab and Salma',
        nameAr: 'كسب وسلمى',
        blurb: 'Mountain villages above the coast — pine, orchard and cooler air than the shore.',
        condition:
          'Both saw fighting and displacement during the war, Kassab notably in 2014. Mentioned as places with a recent history, not as scenery.',
      },
    ],
    unesco: 'Ugarit is on the Tentative List (submitted 1999) as "Ugrarit / Tell Shamra". Not a full World Heritage Site.',
    conservation:
      'Ugarit’s condition has not been independently verified since 2014 satellite imagery. That gap is stated rather than filled in.',
    access:
      'As of September 2026 the US State Department (Level 4) and UK FCDO (advice updated 2 September 2026) maintain country-wide advisories with no coastal carve-out.',
    gettingThere: 'Roughly 310–320 km from Damascus via the M5 and M4, about 4 hours before checkpoints.',
    bestSeason: 'Late spring and early autumn. The mountains stay cooler than the shore.',
    flavour:
      'Grilled fish, olive oil and citrus from the groves behind the coast — and mate, drunk here in quantity, a habit brought home by returning emigrants from South America.',
  },

  {
    slug: 'tartus',
    name: 'Tartus',
    ar: 'طرطوس',
    note: 'Crusader cathedral and the island of Arwad',
    days: '2 days',
    usd: 340,
    image: 'arwad',
    oneLiner: 'A Crusader cathedral on shore, and Syria’s only inhabited island three kilometres out',
    blurb:
      'A working port with a crusader cathedral at its heart and a short boat to Arwad, Syria’s only inhabited island, where boats are still built from templates kept in someone’s head.',
    body: [
      'The Cathedral of Our Lady of Tortosa is the best-preserved crusader church in the country, built as a fortified cathedral and used since as a mosque, then Ottoman barracks, then — from 1956 — the national museum of Tartus.',
      'It is currently closed. A government report of 22 May 2026 described it as shut for structural restoration, tied to a July 2026 agreement between the Directorate-General of Antiquities and the Aga Khan Trust for Culture. No reopening date has been given.',
      'Arwad is three kilometres offshore and takes twenty minutes. Phoenician Arados, and still a boat-building town — which is the actual reason to go, more than the fortress.',
    ],
    highlights: [
      {
        name: 'Cathedral of Our Lady of Tortosa',
        nameAr: 'كاتدرائية سيدة طرطوس',
        blurb: 'A fortified crusader cathedral, and the national museum of Tartus since 1956.',
        condition: 'Closed for structural restoration since a government report of 22 May 2026. No reopening date given.',
      },
      {
        name: 'Arwad Island',
        nameAr: 'جزيرة أرواد',
        blurb: 'Phoenician Arados. A dense little island town of boatyards, and the only inhabited island Syria has.',
        condition: 'Inhabited and working — a fishing and boat-building town, not a monument.',
      },
      {
        name: 'Amrit — the Ma’abed',
        nameAr: 'عمريت',
        blurb: 'A Phoenician sanctuary south of the city: a rock-cut court with a shrine standing on a cube in the middle of it.',
        condition: 'Open, DGAM-managed. The rock-cut court is substantially preserved.',
      },
      {
        name: 'The Spindle Towers (al-Maghazel)',
        nameAr: 'المغازل',
        blurb: 'Phoenician funerary towers at Amrit, standing over rock-cut burial chambers.',
        condition: 'Both towers still standing, weathered but structurally present.',
      },
      {
        name: 'Safita — the White Tower',
        nameAr: 'برج صافيتا',
        blurb: 'A Templar keep in the hills inland, its ground floor still in use as a church.',
        condition: 'Intact and standing. Some reports of 2023 earthquake cracking are unconfirmed.',
      },
    ],
    unesco: 'Tartus (as "The City-fortress of the Crusaders") and Arwad have both been on the Tentative List since 1999.',
    conservation: 'The cathedral-museum is closed for restoration. The old city and Arwad are inhabited and functioning.',
    access: 'The UK FCDO advises against all travel to Syria as a whole, with no coastal carve-out (updated 2 September 2026).',
    gettingThere: 'Roughly 250–255 km from Damascus via the coastal route.',
    bestSeason: 'Spring and autumn; the coast is humid in high summer.',
    flavour: 'Sayadieh — spiced fish with rice — and whatever the boats brought in that morning.',
  },

  {
    slug: 'bosra',
    name: 'Bosra',
    ar: 'بصرى',
    note: 'Black basalt theatre, inside a citadel',
    days: '1 day',
    usd: 260,
    image: 'bosra',
    oneLiner: 'A black-basalt Roman theatre enclosed in a medieval citadel, in a living town',
    blurb:
      'A 2nd-century Roman theatre in black basalt, wrapped inside an Ayyubid citadel that is the reason it survived. The acoustics are as good as you have been told.',
    body: [
      'Bosra was the Nabataean capital before Rome annexed it, then capital of the Roman province of Arabia. The theatre seats around 15,000 and is built entirely of the local volcanic stone, which is why the whole town reads dark.',
      'The citadel that encloses the theatre was built around it by the Ayyubids as a fortress. That accident of reuse is why this theatre survived when others did not.',
      'The theatre was restored between 1947 and 1970, and September 2026 reporting describes restoration as complete. But Bosra is in Daraa Governorate, where the 2011 uprising began. The town was a battleground, held by opposition forces from March 2015 until July 2018, and UNESCO documented specific war damage in December 2015. It remains on the Danger List.',
    ],
    highlights: [
      {
        name: 'The Roman theatre',
        nameAr: 'المسرح الروماني',
        blurb: 'Around 15,000 seats of black basalt, with the stage building still standing to its full height.',
        condition: 'Restored 1947–1970; September 2026 reporting describes restoration as complete. On the Danger List.',
      },
      {
        name: 'The Ayyubid citadel',
        nameAr: 'قلعة بصرى',
        blurb: 'The fortress built around the theatre, so that you enter the Roman building through a medieval one.',
        condition: 'War damage documented by UNESCO in December 2015; restoration reported since.',
      },
      {
        name: 'Al-Omari Mosque',
        nameAr: 'جامع العمري',
        blurb: 'One of the oldest surviving mosques in the region, plain and square in the same black stone.',
        condition: 'A 2014 shell strike opened the roof and damaged the upper level. Interior and facade have since been worked on.',
      },
      {
        name: 'Al-Khidr Mosque',
        nameAr: 'جامع الخضر',
        blurb: 'A small basalt mosque in the town, among the ordinary streets rather than inside the site.',
        condition: 'Standing. Detailed post-2011 condition not found in the sources consulted.',
      },
    ],
    unesco: 'Inscribed 1980 (criteria i, iii, vi). On the Danger List since 2013 (decision 37 COM 7B.57).',
    conservation:
      'A battleground town in the governorate where the uprising began. Damage is documented and specific; restoration is real and partial.',
    access:
      'Reopened to tourism on a small scale — more than 50 foreign visitors reported in a dated September 2026 account.',
    gettingThere: 'About 140 km south of Damascus, and roughly 40 km from Daraa city. An easy day trip.',
    bestSeason: 'Spring and autumn. The basalt holds heat.',
    flavour: 'The stone itself. Theatre, citadel, mosques and houses all cut from the same black basalt.',
  },

  {
    slug: 'maaloula',
    name: 'Maaloula',
    ar: 'معلولا',
    note: 'Aramaic still spoken, in a cleft in the rock',
    days: '1 day',
    usd: 240,
    image: 'maaloula',
    oneLiner: 'A cliffside village in the Qalamoun where Western Neo-Aramaic is still spoken',
    blurb:
      'One of a very small number of places where Western Neo-Aramaic survives as a living spoken language. Two monasteries, a gorge you walk through, and a village built up the rock.',
    body: [
      'Maaloula sits at around 1,500 m in the Qalamoun mountains, an hour or so north of Damascus. Its houses climb a cliff face, and a narrow gorge — the Fajj — cuts through the rock behind the town.',
      'The village is known for its language. Western Neo-Aramaic is still spoken here and in two neighbouring villages, and effectively nowhere else. It is not a performance for visitors; it is what people speak.',
      'The town was occupied repeatedly in 2013. Fighters used Mar Sarkis as a base, Byzantine-era icons were looted or destroyed, religious buildings were shelled, and twelve nuns were taken from Mar Taqla and later released. Restoration has run since, some of it internationally backed. The monasteries are working places of worship that welcome respectful visitors — which is a different thing from being an attraction.',
    ],
    highlights: [
      {
        name: 'Monastery of Mar Sarkis',
        nameAr: 'دير مار سركيس',
        blurb:
          'Saints Sergius and Bacchus, on the height above the village, holding one of the oldest altar forms in Christian use.',
        condition: 'Damaged and looted in the 2013 occupation. Services have resumed and restoration is reported.',
      },
      {
        name: 'Convent of Mar Taqla',
        nameAr: 'دير مار تقلا',
        blurb: 'Saint Thecla, at the foot of the cliff, with the shrine set into the rock above it.',
        condition: 'Significantly damaged during the 2013 occupation; restoration partly internationally backed.',
      },
      {
        name: 'The gorge (the Fajj)',
        nameAr: 'الفج',
        blurb: 'A narrow cleft you walk through between the two monasteries, the rock closing overhead.',
        condition: 'Intact — a natural feature, not war-affected.',
      },
    ],
    unesco: 'Not inscribed. On UNESCO’s Tentative List since 8 June 1999 (criteria v, vi), listed simply as "Maaloula".',
    conservation:
      'Real, documented war damage in 2013, followed by restoration. Described plainly because the village is inhabited and people live with the result.',
    access:
      'Day trips from Damascus are reported as routine in 2026 sources. This needs qualification rather than blanket assurance — US, UK and other advisories still apply country-wide.',
    gettingThere: 'Roughly 56 km north of Damascus in the Qalamoun.',
    bestSeason: 'Spring and autumn. It is high, and colder than Damascus.',
    flavour: 'Vineyards, olives and apricot orchards on the hillsides — much of what has kept the village going.',
  },

  {
    slug: 'dead-cities',
    name: 'The Dead Cities',
    cardName: 'Dead Cities',
    ar: 'المدن المنسية',
    note: 'Byzantine villages in the limestone hills',
    days: '1–2 days',
    usd: 300,
    image: 'serjilla',
    oneLiner: 'Byzantine farming villages, left a millennium ago, across the limestone hills',
    blurb:
      'Forty-odd stone villages — houses, olive presses, bath houses, churches — abandoned between the 8th and 10th centuries and never built over. Serjilla is the one to walk.',
    body: [
      'UNESCO inscribed these in 2011 as the Ancient Villages of Northern Syria, and added them to the Danger List in 2013. Those are two different events two years apart, which popular sources routinely merge.',
      'How many villages there are depends on what you count. Thirty-six are formally inscribed across eight parks; UNESCO itself says "around 40"; the wider limestone massif holds somewhere between 700 and 800 archaeological sites. The site gives you the range rather than a false precision.',
      'They are not ruins in the sense of a collapsed city. They are ordinary villages — farmhouses with their door frames still square — that emptied out as trade routes shifted, and were left standing.',
    ],
    highlights: [
      {
        name: 'Serjilla',
        nameAr: 'سرجيلة',
        blurb: 'The most complete of them: a bath house, a meeting hall, villas and presses in a shallow bowl of rock.',
        condition: 'Largely intact. A guesthouse in the western part of the site was lost to an airstrike during the war.',
      },
      {
        name: 'Church of Saint Simeon Stylites',
        nameAr: 'قلعة سمعان',
        blurb:
          'Built around the pillar on which Simeon lived for decades — for a time the largest church in the world.',
        condition: 'Part of the pillar remnant and surrounding ruins were damaged in an airstrike in May 2016.',
      },
      {
        name: 'Al-Bara',
        nameAr: 'البارة',
        blurb: 'The largest of the villages, with pyramid-roofed tombs among the olive terraces.',
        condition: 'Dispersed and partly overgrown.',
      },
      {
        name: 'Qalb Lozeh',
        nameAr: 'قلب لوزة',
        blurb:
          'A 5th-century basilica whose twin-towered facade is often said to have influenced Romanesque church fronts.',
        condition:
          'Facade and much of the structure still stand. The claim that it inspired Notre-Dame traces to a single early-20th-century opinion, not consensus — treat it as a story about the building, not a fact.',
      },
      {
        name: 'Jerada',
        nameAr: 'جرادة',
        blurb: 'Unusual among these sites: some of the ancient houses have been lived in again.',
        condition: 'Partly reoccupied.',
      },
    ],
    unesco: 'Inscribed 2011 (criteria iii, iv, v) as the Ancient Villages of Northern Syria. Added to the Danger List on 20 June 2013.',
    conservation:
      'Damage is documented at specific sites rather than uniform across the region — Saint Simeon in May 2016, western Serjilla separately. Displacement also brought people to shelter in some of the ruins.',
    access:
      'Country-wide advisories apply; there is no site-specific carve-out. Idlib’s situation has changed considerably since December 2024 and should be checked fresh.',
    gettingThere:
      'Via Hama, north on the M5. Serjilla is roughly 65 km north of Hama and about 80 km southwest of Aleppo, in the Jebel Riha hills near al-Bara.',
    bestSeason: 'Spring, when the limestone country is green and the olive terraces are working.',
    flavour:
      'Olive oil, then and now — these villages were built on it, and the presses are still standing in the ruins.',
  },
];

export const PLACE_BY_SLUG = Object.fromEntries(PLACES.map((p) => [p.slug, p]));
