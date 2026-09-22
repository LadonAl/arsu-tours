import { PLACES } from '@/content/places';
import { JOURNEYS } from '@/content/journeys';
import { SITE } from '@/content/site';

/**
 * Sitemap.
 *
 * Written as a route handler rather than with Next's `app/sitemap.ts`
 * convention because that helper owns the serialisation, and this needs two
 * things it will not emit:
 *
 *   1. an `xml-stylesheet` processing instruction, so a browser renders the
 *      sitemap as a readable page instead of a wall of tags
 *   2. a small custom namespace carrying a human title and section for each
 *      URL, which the stylesheet turns into a real index
 *
 * The extra namespace is valid XML and crawlers ignore elements they do not
 * recognise, so the file is still a plain sitemap to anything that wants one.
 *
 * Entries are derived from the content modules, so adding a destination or a
 * journey updates this automatically rather than leaving it to rot.
 */

const BASE = `https://${SITE.domain}`;
const NS = 'https://arsu.tours/ns/sitemap';

type Entry = {
  path: string;
  title: string;
  section: string;
  priority: number;
  changefreq: 'weekly' | 'monthly' | 'yearly';
  note?: string;
};

function entries(): Entry[] {
  const out: Entry[] = [
    { path: '/', title: 'Home', section: 'Main', priority: 1.0, changefreq: 'weekly' },
    {
      path: '/regions',
      title: 'Where we go',
      section: 'Main',
      priority: 0.9,
      changefreq: 'monthly',
      note: 'Ten researched destinations',
    },
    {
      path: '/journeys',
      title: 'Journeys',
      section: 'Main',
      priority: 0.9,
      changefreq: 'monthly',
      note: 'Illustrative itineraries',
    },
    { path: '/about', title: 'About — why the name Arsu', section: 'Main', priority: 0.7, changefreq: 'yearly' },
    { path: '/ledger', title: 'The ledger', section: 'Main', priority: 0.7, changefreq: 'monthly' },
    {
      path: '/practicalities',
      title: 'Practicalities',
      section: 'Main',
      priority: 0.8,
      changefreq: 'weekly',
      note: 'Visas, advisories and money — dated',
    },
    { path: '/journal', title: 'Journal', section: 'Main', priority: 0.6, changefreq: 'weekly' },
    { path: '/plan', title: 'Plan a journey', section: 'Main', priority: 0.6, changefreq: 'yearly' },
  ];

  for (const p of PLACES) {
    out.push({
      path: `/regions/${p.slug}`,
      title: p.name,
      section: 'Regions',
      priority: 0.8,
      changefreq: 'monthly',
      note: p.oneLiner,
    });
  }

  for (const j of JOURNEYS) {
    out.push({
      path: `/journeys/${j.slug}`,
      title: j.title,
      section: 'Journeys',
      priority: 0.7,
      changefreq: 'monthly',
      note: j.meta,
    });
  }

  out.push(
    {
      path: '/credits',
      title: 'Photo credits',
      section: 'About this site',
      priority: 0.4,
      changefreq: 'monthly',
      note: 'Every photograph and its licence',
    },
    {
      path: '/demo',
      title: 'About this demo',
      section: 'About this site',
      priority: 0.5,
      changefreq: 'monthly',
      note: 'What is real here and what is invented',
    },
  );

  return out;
}

const escape = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const dynamic = 'force-static';

export function GET() {
  // One timestamp for the whole file: this is a static site built in one go,
  // and inventing differing per-page dates would be a lie a crawler acts on.
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = entries()
    .map((e) => {
      const note = e.note ? `\n    <arsu:note>${escape(e.note)}</arsu:note>` : '';
      return `  <url>
    <loc>${BASE}${e.path === '/' ? '/' : e.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(1)}</priority>
    <arsu:title>${escape(e.title)}</arsu:title>
    <arsu:section>${escape(e.section)}</arsu:section>${note}
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:arsu="${NS}">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
