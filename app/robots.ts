import type { MetadataRoute } from 'next';
import { SITE } from '@/content/site';

/**
 * robots.txt
 *
 * Crawling is allowed and indexing is refused, which sounds contradictory but
 * is the correct pairing: `noindex` lives in each page's meta tag, and a
 * crawler has to be able to fetch the page to see it. Disallowing here would
 * hide the very instruction that keeps a demo out of the results for people
 * searching for real travel to Syria.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `https://${SITE.domain}/sitemap.xml`,
    host: `https://${SITE.domain}`,
  };
}
