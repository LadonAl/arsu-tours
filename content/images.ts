/**
 * Every image on this site was downloaded and visually inspected before use.
 * Unsplash alt-text is written by uploaders and is frequently wrong — the
 * "palmyra syria" search returned a photograph of Petra in Jordan, and
 * "krak des chevaliers" returned two châteaux in France. Nothing here is
 * trusted on its caption alone.
 *
 * Unsplash photos are hotlinked from images.unsplash.com, which is what
 * Unsplash asks publishers to do. Wikimedia Commons photos are self-hosted
 * under /public/photos because Commons discourages hotlinking.
 */

export type Credit = {
  /** Key used by places/journeys content. */
  id: string;
  /** Resolved src. Unsplash ids become a CDN URL; Commons files are local. */
  src: string;
  source: 'unsplash' | 'commons';
  /** What is actually in the frame, confirmed by looking at it. */
  alt: string;
  photographer: string;
  /** Profile or file-description page. */
  profileUrl: string;
  /** Licence name. Unsplash's own licence, or the Creative Commons variant. */
  licence: string;
  licenceUrl: string;
  /** Set when the photograph shows something that no longer stands. */
  archivalNote?: string;
};

const UNSPLASH_LICENCE = 'Unsplash Licence';
const UNSPLASH_LICENCE_URL = 'https://unsplash.com/license';

/** Build an Unsplash CDN url at a given width. */
export function unsplashSrc(id: string, width = 1600, quality = 78) {
  return `https://images.unsplash.com/${id}?w=${width}&q=${quality}&auto=format&fit=crop`;
}

const u = (
  id: string,
  key: string,
  alt: string,
  photographer: string,
  handle: string,
  archivalNote?: string,
): Credit => ({
  id: key,
  src: unsplashSrc(id),
  source: 'unsplash',
  alt,
  photographer,
  profileUrl: `https://unsplash.com/@${handle}`,
  licence: UNSPLASH_LICENCE,
  licenceUrl: UNSPLASH_LICENCE_URL,
  archivalNote,
});

const c = (
  file: string,
  key: string,
  alt: string,
  photographer: string,
  descriptionUrl: string,
  licence: string,
  licenceUrl: string,
  archivalNote?: string,
): Credit => ({
  id: key,
  src: `/photos/${file}`,
  source: 'commons',
  alt,
  photographer,
  profileUrl: descriptionUrl,
  licence,
  licenceUrl,
  archivalNote,
});

export const IMAGES: Record<string, Credit> = {
  // ---- Unsplash ------------------------------------------------------------
  damascusSouq: u(
    'photo-1645740262380-d86b597b90c4',
    'damascusSouq',
    'Crowds under the barrel-vaulted iron roof of Souq al-Hamidiyya in Damascus',
    'Mahmoud Sulaiman',
    'mahmoud_ms1',
  ),
  damascusMarket: u(
    'photo-1662620883416-2b2854528b75',
    'damascusMarket',
    'Trays of dried fruit, nuts and spices in a Damascus market street',
    'Mahmoud Sulaiman',
    'mahmoud_ms1',
  ),
  damascusMinaret: u(
    'photo-1669823710183-d1bafd40a214',
    'damascusMinaret',
    'A minaret of the Umayyad Mosque rising above the arcade, Damascus',
    'Obada Kabbani',
    'obada_k',
  ),
  aleppoStone: u(
    'photo-1699946330980-6566206d6afd',
    'aleppoStone',
    'Mamluk stonework with muqarnas corbelling on a tower in Aleppo',
    'Ahmad Sofi',
    'ahmad_sofi',
  ),
  aleppoVault: u(
    'photo-1701507247096-f61a87e2da90',
    'aleppoVault',
    'A vaulted stone passage with pointed arches in the Aleppo souq',
    'Ahmad Sofi',
    'ahmad_sofi',
  ),
  oldCityLane: u(
    'photo-1619167964051-6ccdeba09551',
    'oldCityLane',
    'A narrow stone lane running under an arched passage, hung with bougainvillea',
    'Fadi Alagi',
    'wildmind4',
  ),
  palmyraColonnade: u(
    'photo-1774280585293-9cc274969574',
    'palmyraColonnade',
    'The Great Colonnade at Palmyra in low golden light',
    'Wietse Jongsma',
    'wietsej',
  ),
  palmyraPanorama: u(
    'photo-1602674471917-2f5fbd54535e',
    'palmyraPanorama',
    'The Palmyra site looking across fallen masonry toward the castle hill',
    'Aladdin Hammami',
    'soriaty',
  ),
  palmyraColumns: u(
    'photo-1622301254919-93fcfbc82ea6',
    'palmyraColumns',
    'Columns of the Great Colonnade at Palmyra, with their projecting statue brackets',
    'JOE Planas',
    'joebcn',
  ),
  coast: u(
    'photo-1673558481548-502c8ad11b95',
    'coast',
    'A turquoise bay below a forested headland on the Syrian Mediterranean coast',
    'Fadi Alagi',
    'wildmind4',
  ),
  maaloula: u(
    'photo-1735313635419-1a94d4141027',
    'maaloula',
    'Maaloula built into its cliff, with the monastery of Mar Sarkis on the rock above',
    'Wietse Jongsma',
    'wietsej',
  ),

  // ---- Wikimedia Commons ---------------------------------------------------
  // Used where Unsplash has no free photograph of the place at all. A search
  // for "bosra" on Unsplash returns zero results; "krak des chevaliers"
  // returns France. A wrong photograph is worse than a different source.
  krak: c(
    'krak-des-chevaliers.jpg',
    'krak',
    'The concentric crusader castle of Krak des Chevaliers on its ridge',
    'Vyacheslav Argenberg',
    'https://commons.wikimedia.org/wiki/File:Krak_des_Chevaliers_Castle,_Syria.jpg',
    'CC BY 4.0',
    'https://creativecommons.org/licenses/by/4.0/',
  ),
  bosra: c(
    'bosra-theatre.jpg',
    'bosra',
    'The Roman theatre at Bosra, built of black basalt, seen from the seating',
    'Lubomir Mihalik',
    'https://commons.wikimedia.org/wiki/File:Theatre_At_Bosra_Syria_(149642749).jpeg',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
  ),
  hamaNoria: c(
    'hama-noria.jpg',
    'hamaNoria',
    'A noria — a large wooden waterwheel — standing on the Orontes at Hama',
    'Frank Kidner',
    'https://commons.wikimedia.org/wiki/File:Hama_(%D8%AD%D9%85%D8%A7%D8%A9),_Syria_-_Norias-Waterwheels_on_the_Orontes_-_PHBZ024_2016_0368_-_Dumbarton_Oaks.jpg',
    'CC BY-SA 4.0',
    'https://creativecommons.org/licenses/by-sa/4.0/',
  ),
  arwad: c(
    'arwad-boat.jpg',
    'arwad',
    'A crowded passenger boat arriving at Arwad island off Tartus',
    'Raki_Man',
    'https://commons.wikimedia.org/wiki/File:Sailing_to_Arwad_Island_-_panoramio.jpg',
    'CC BY 3.0',
    'https://creativecommons.org/licenses/by/3.0/',
  ),
  serjilla: c(
    'serjilla.jpg',
    'serjilla',
    'The limestone ruins of Serjilla, one of the Dead Cities of northern Syria',
    'Vyacheslav Argenberg',
    'https://commons.wikimedia.org/wiki/File:Idlib,_Syria,_Dead_Cities,_Serjilla.jpg',
    'CC BY 4.0',
    'https://creativecommons.org/licenses/by/4.0/',
  ),
  saintSimeon: c(
    'saint-simeon.jpg',
    'saintSimeon',
    'The facade of the Church of Saint Simeon Stylites, with two figures walking toward it',
    'Vyacheslav Argenberg',
    'https://commons.wikimedia.org/wiki/File:Church_of_Saint_Simeon_Stylites,_Facade,_Mount_Simeon,_Syria.jpg',
    'CC BY 4.0',
    'https://creativecommons.org/licenses/by/4.0/',
  ),
  apamea: c(
    'apamea.jpg',
    'apamea',
    'The Great Colonnade at Apamea running across open green country',
    'Bernard Gagnon',
    'https://commons.wikimedia.org/wiki/File:Apamea_01.jpg',
    'CC BY-SA 3.0',
    'https://creativecommons.org/licenses/by-sa/3.0/',
  ),
};

export const ALL_CREDITS: Credit[] = Object.values(IMAGES);

/**
 * Places where no free, correctly-identified photograph could be found.
 * These render as pattern cards instead. Stated on the credits page rather
 * than papered over with a photograph of somewhere else.
 */
export const NO_PHOTOGRAPH: { place: string; reason: string }[] = [
  {
    place: 'Homs city',
    reason:
      'No free photograph of the city itself could be verified. The Homs card uses Krak des Chevaliers, an hour west, which is what travellers actually go there for.',
  },
];
