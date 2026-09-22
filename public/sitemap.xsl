<?xml version="1.0" encoding="UTF-8"?>
<!--
  Stylesheet for sitemap.xml.

  Browsers only implement XSLT 1.0, so: no xsl:for-each-group, no fn:*, and
  grouping is done the Muenchian way with a key. Everything is inlined because
  a stylesheet applied to an XML document cannot pull in external CSS.
-->
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:arsu="https://arsu.tours/ns/sitemap"
  exclude-result-prefixes="sm arsu">

  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>

  <!-- Muenchian grouping: index every url by its section -->
  <xsl:key name="by-section" match="sm:url" use="arsu:section"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap · Arsu Tours</title>
        <style>
          :root {
            --green: #0b3b2f;
            --gold: #c8a046;
            --ink-accent: #7a4a22;
            --bone: #e6e2d8;
            --paper: #faf8f3;
            --ink: #1a1e1c;
            --muted: #4a5450;
            --muted-soft: #5c6864;
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            background: #fff;
            color: var(--ink);
            font-family: Manrope, system-ui, -apple-system, "Segoe UI", sans-serif;
            -webkit-font-smoothing: antialiased;
          }
          .shell { max-width: 1240px; margin-inline: auto; padding-inline: 40px; }
          @media (max-width: 640px) { .shell { padding-inline: 20px; } }

          header { border-bottom: 1px solid var(--bone); }
          .bar {
            background: var(--ink-accent);
            color: #fff;
            font-size: 13px;
            font-weight: 600;
            text-align: center;
            padding: 10px 16px;
          }
          .bar a { color: #fff; text-underline-offset: 3px; }
          .brand { display: flex; align-items: center; gap: 14px; padding: 22px 0; }
          .brand img { display: block; height: 44px; width: auto; }

          .head { padding: 56px 0 30px; }
          .eyebrow {
            font-size: 11px; letter-spacing: 0.19em; text-transform: uppercase;
            font-weight: 700; color: var(--ink-accent); margin: 0;
          }
          h1 {
            font-size: clamp(36px, 5vw, 60px); line-height: 1.02; letter-spacing: -0.035em;
            font-weight: 700; color: var(--green); margin: 14px 0 0;
          }
          .lead { font-size: 18px; line-height: 30px; color: var(--muted); margin: 18px 0 0; max-width: 62ch; }
          .count { margin-top: 22px; font-size: 13px; color: var(--muted-soft); }
          .count strong { color: var(--green); font-size: 15px; }

          section { padding-bottom: 44px; }
          h2 {
            font-size: 24px; letter-spacing: -0.02em; font-weight: 700; color: var(--green);
            margin: 44px 0 0; display: flex; align-items: center; gap: 12px;
          }
          h2::after { content: ""; flex: 1; height: 1px; background: var(--bone); }

          table { width: 100%; border-collapse: collapse; margin-top: 18px; }
          th {
            text-align: left; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
            color: var(--muted-soft); font-weight: 700; padding: 10px 12px; border-bottom: 1px solid var(--bone);
          }
          td { padding: 14px 12px; border-bottom: 1px solid var(--bone); vertical-align: top; font-size: 14px; }
          tr:hover td { background: var(--paper); }
          td.t { width: 30%; }
          td.t a { color: var(--green); font-weight: 700; text-decoration: none; }
          td.t a:hover { color: var(--ink-accent); text-decoration: underline; text-underline-offset: 3px; }
          td.n { color: var(--muted); }
          td.u { color: var(--muted-soft); font-size: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
          td.m { white-space: nowrap; color: var(--muted-soft); font-size: 12px; }

          /* priority as a small bar, so the column reads at a glance */
          .p { display: flex; align-items: center; gap: 8px; }
          .track { width: 54px; height: 4px; background: var(--bone); position: relative; }
          .fill { position: absolute; inset: 0 auto 0 0; background: var(--gold); }

          footer { background: var(--green); color: #fff; margin-top: 40px; padding: 40px 0; }
          footer p { margin: 0; font-size: 13px; line-height: 21px; color: rgba(255,255,255,0.78); max-width: 74ch; }
          footer a { color: var(--gold); }
          footer .note { margin-top: 14px; }
          @media (max-width: 720px) {
            /* hide the URL, frequency and priority columns -- and the matching
               header cells, or the head keeps claiming five columns and the
               table overflows the viewport */
            td.u, td.m,
            th:nth-child(3), th:nth-child(4), th:nth-child(5) { display: none; }
            td.t { width: 42%; }
            td { padding: 12px 8px; font-size: 13px; }
            th { padding: 8px; }
          }
        </style>
      </head>
      <body>
        <div class="bar">
          Demo site — Arsu Tours is not a real company. Nothing here can be booked.
          <a href="/demo">What this is</a>
        </div>

        <header>
          <div class="shell brand">
            <a href="/"><img src="/brand/logo-lockup.svg" alt="Arsu Tours"/></a>
          </div>
        </header>

        <main class="shell">
          <div class="head">
            <p class="eyebrow">Sitemap</p>
            <h1>Every page, in one place.</h1>
            <p class="lead">
              This is <code>/sitemap.xml</code>. It is a normal XML sitemap — a crawler reads it
              as one — but it carries a stylesheet so that opening it in a browser gives you a
              readable index instead of a wall of tags.
            </p>
            <p class="count">
              <strong><xsl:value-of select="count(sm:urlset/sm:url)"/></strong> pages ·
              last updated <xsl:value-of select="sm:urlset/sm:url[1]/sm:lastmod"/>
            </p>
          </div>

          <!-- One block per distinct section, in document order -->
          <xsl:for-each select="sm:urlset/sm:url[generate-id() = generate-id(key('by-section', arsu:section)[1])]">
            <section>
              <h2><xsl:value-of select="arsu:section"/></h2>
              <table>
                <thead>
                  <tr>
                    <th>Page</th>
                    <th>What is on it</th>
                    <th>URL</th>
                    <th>Changes</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="key('by-section', arsu:section)">
                    <tr>
                      <td class="t">
                        <a href="{sm:loc}"><xsl:value-of select="arsu:title"/></a>
                      </td>
                      <td class="n"><xsl:value-of select="arsu:note"/></td>
                      <td class="u">
                        <!-- strip the host; the home page is left with nothing, so show / -->
                        <xsl:variable name="path" select="substring-after(substring-after(sm:loc, '//'), '/')"/>
                        <xsl:choose>
                          <xsl:when test="$path = ''">/</xsl:when>
                          <xsl:otherwise>/<xsl:value-of select="$path"/></xsl:otherwise>
                        </xsl:choose>
                      </td>
                      <td class="m"><xsl:value-of select="sm:changefreq"/></td>
                      <td class="m">
                        <span class="p">
                          <span class="track">
                            <span class="fill">
                              <xsl:attribute name="style">
                                width: <xsl:value-of select="sm:priority * 100"/>%
                              </xsl:attribute>
                            </span>
                          </span>
                          <xsl:value-of select="sm:priority"/>
                        </span>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </section>
          </xsl:for-each>
        </main>

        <footer>
          <div class="shell">
            <p>
              <strong style="color:#fff">Demonstration site. Not a real tour operator.</strong>
              Arsu Tours does not exist, sells nothing and takes no bookings. Destination
              information is researched and fact-checked; prices, departures, ledger figures and
              journal entries are invented for the demonstration.
            </p>
            <p class="note">
              The pages themselves carry <code>noindex</code>, so a demo does not compete for
              search traffic from people planning real travel. This sitemap exists to be a
              navigable index of the build — and because a crawler that is going to visit anyway
              should be told what is here. <a href="/demo">More about that</a>.
            </p>
          </div>
        </footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
