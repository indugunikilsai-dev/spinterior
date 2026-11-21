<?xml version="1.0" encoding="UTF-8"?>
<!-- Styles sitemap.xml for people viewing it in a browser. Search engines ignore this file. -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, follow" />
        <title>XML Sitemap · SP Interior</title>
        <style>
          :root { --ivory:#f8f5f0; --sand:#efe8de; --stone:#d9cfc1; --ink:#1d1b19; --muted:#7a7168; --accent:#a8743f; }
          * { box-sizing: border-box; }
          body { margin: 0; font: 15px/1.6 'Inter', system-ui, 'Segoe UI', Roboto, sans-serif; color: var(--ink); background: var(--ivory); }
          header { background: var(--ink); color: #fff; padding: 48px 16px 40px; }
          .wrap { width: min(1100px, 100%); margin: 0 auto; padding: 0 16px; }
          header .wrap { padding: 0; }
          .eyebrow { font-size: 12px; font-weight: 600; letter-spacing: .22em; text-transform: uppercase; color: #e6c9a6; margin: 0 0 12px; }
          h1 { font: 500 clamp(28px, 5vw, 42px)/1.1 'Cormorant Garamond', Georgia, serif; margin: 0 0 12px; }
          header p { margin: 0; color: rgba(255,255,255,.72); max-width: 640px; }
          .stats { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }
          .stat { border: 1px solid rgba(255,255,255,.2); border-radius: 4px; padding: 10px 16px; }
          .stat b { display: block; font-size: 22px; color: #fff; }
          .stat span { font-size: 12px; color: rgba(255,255,255,.6); text-transform: uppercase; letter-spacing: .1em; }
          main { padding: 32px 0 64px; }
          .table { background: #fff; border: 1px solid var(--stone); border-radius: 4px; overflow-x: auto; }
          table { width: 100%; border-collapse: collapse; min-width: 640px; }
          th { text-align: left; font-size: 12px; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); background: var(--sand); padding: 12px 16px; }
          td { padding: 14px 16px; border-top: 1px solid var(--stone); vertical-align: top; }
          td a { color: var(--ink); text-decoration: none; border-bottom: 1px solid var(--accent); word-break: break-all; }
          td a:hover { color: var(--accent); }
          .num { color: var(--muted); width: 48px; }
          .pill { display: inline-block; padding: 2px 10px; border-radius: 999px; background: var(--sand); font-size: 13px; }
          .thumbs { display: flex; gap: 6px; margin-top: 10px; flex-wrap: wrap; }
          .thumbs img { width: 56px; height: 42px; object-fit: cover; border-radius: 3px; border: 1px solid var(--stone); }
          footer { text-align: center; color: var(--muted); font-size: 13px; padding-bottom: 40px; }
          footer a { color: var(--accent); }
        </style>
      </head>
      <body>
        <header>
          <div class="wrap">
            <p class="eyebrow">SP Interior Design and Studio</p>
            <h1>XML Sitemap</h1>
            <p>Every page of sp-interior.in, listed for search engines like Google and Bing. Each page also lists the photos shown on it.</p>
            <div class="stats">
              <div class="stat"><b><xsl:value-of select="count(s:urlset/s:url)" /></b><span>Pages</span></div>
              <div class="stat"><b><xsl:value-of select="count(s:urlset/s:url/image:image)" /></b><span>Images</span></div>
              <div class="stat"><b><xsl:value-of select="substring(s:urlset/s:url[1]/s:lastmod, 1, 10)" /></b><span>Last updated</span></div>
            </div>
          </div>
        </header>
        <main>
          <div class="wrap">
            <div class="table">
              <table>
                <thead>
                  <tr><th>#</th><th>Page</th><th>Priority</th><th>Updates</th><th>Images</th></tr>
                </thead>
                <tbody>
                  <xsl:for-each select="s:urlset/s:url">
                    <tr>
                      <td class="num"><xsl:value-of select="position()" /></td>
                      <td>
                        <a href="{s:loc}"><xsl:value-of select="s:loc" /></a>
                        <div class="thumbs">
                          <xsl:for-each select="image:image[position() &lt;= 6]">
                            <img src="{image:loc}" alt="" loading="lazy" />
                          </xsl:for-each>
                        </div>
                      </td>
                      <td><span class="pill"><xsl:value-of select="s:priority" /></span></td>
                      <td><xsl:value-of select="s:changefreq" /></td>
                      <td><xsl:value-of select="count(image:image)" /></td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <footer><a href="/">Back to sp-interior.in</a></footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
