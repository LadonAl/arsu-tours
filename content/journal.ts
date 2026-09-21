/**
 * Journal. Written for the demo — these are not dispatches from a real guide,
 * and the page says so. The underlying facts they lean on are real: the
 * Palmyra desert road, the state of the Aleppo souq restoration, the norias
 * at dusk. The voice and the events are invented.
 */

export type Post = {
  slug: string;
  date: string;
  place: string;
  ar: string;
  read: string;
  title: string;
  dek: string;
  image?: string;
  body?: string[];
  author?: string;
};

export const LEAD: Post = {
  slug: 'aleppo-soap-lane',
  date: 'September 2026',
  place: 'Aleppo',
  ar: 'حلب',
  read: '4 min',
  author: 'Written for the demo',
  title: 'The soap lane is roofed again, and the whole street smells of laurel',
  dek: 'Two winters of scaffolding came down in August. The lane is trading properly for the first time since we started bringing travellers here.',
  image: 'oldCityLane',
  body: [
    'What surprised me was the noise. For years you could hear your own footsteps in that stretch of Al-Madina; now it is boys with handcarts, a generator, someone arguing about the price of rope.',
    'We have moved the workshop afternoon out of the courtyard and into the lane itself, which means you will be in the way. Nobody minds. Being in the way of a street that works again is the entire point.',
    'The sections either side are still shut. That is worth saying plainly, because it would be easy to photograph the forty metres that are finished and let you assume the rest. Aleppo is being put back one roof at a time, and the honest version of a visit here includes the parts that have not had their turn.',
  ],
};

export const POSTS: Post[] = [
  {
    slug: 'palmyra-road',
    date: 'August 2026',
    place: 'Palmyra road',
    ar: 'تدمر',
    read: '3 min',
    title: 'We drove the desert road twice this month before saying yes',
    dek: 'The eastern route is open and the surface is better than last spring, but it is still a long day with one place to stop. Here is how we run it now, and when we would not.',
  },
  {
    slug: 'coast-kitchens',
    date: 'July 2026',
    place: 'Latakia',
    ar: 'اللاذقية',
    read: '5 min',
    title: 'Three village kitchens, one very long lunch',
    dek: 'Above the coast, lunch is not a meal but an afternoon. We added a second family to the coastal journey, which means smaller groups at each table.',
  },
  {
    slug: 'damascus-loom',
    date: 'June 2026',
    place: 'Damascus',
    ar: 'دمشق',
    read: '4 min',
    title: 'The loom in Souq al-Hamidiyya is running again',
    dek: 'Two weeks of a carpenter’s time, a box of cords, and a weaver who remembered the pattern. The brocade day on the seven-night journey is made here now.',
  },
  {
    slug: 'hama-dusk',
    date: 'May 2026',
    place: 'Hama',
    ar: 'حماة',
    read: '2 min',
    title: 'Why we stopped treating Hama as a lunch stop',
    dek: 'It took a traveller pointing out the obvious: the norias are best at dusk, and dusk is after lunch. One night here changed the shape of the whole route north.',
  },
  {
    slug: 'bosra-acoustics',
    date: 'April 2026',
    place: 'Bosra',
    ar: 'بصرى',
    read: '3 min',
    title: 'An empty Roman theatre and a man with an oud',
    dek: 'Bosra is a day trip from Damascus and almost nobody goes. That is the argument for going. On the acoustics: everything you have read is true.',
  },
];
