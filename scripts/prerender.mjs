// Renders every route to static HTML with its own title, meta tags and structured data,
// then writes sitemap.xml. Runs after `vite build` and the SSR build.
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const { render, getSeo, headTags, pageImages, ROUTES, SITE_URL } = await import(
  pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href
)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const page = (url) =>
  template
    .replace('<!--seo-->', headTags(getSeo(url)))
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`)

for (const url of ROUTES) {
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, url, 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, page(url))
}
fs.writeFileSync(path.join(dist, '404.html'), page('/404'))

// lastmod = date of the latest commit (when the site content actually changed), not the build time.
let lastmod
try {
  lastmod = execSync('git log -1 --format=%cI', { cwd: root }).toString().trim()
} catch {
  // no git available on the build machine
}
lastmod ||= new Date().toISOString()

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const loc = (u) => SITE_URL + (u === '/' ? '/' : u)
const priority = (u) => (u === '/' ? '1.0' : u === '/services' ? '0.9' : u.split('/').length > 2 ? '0.6' : '0.8')
const changefreq = (u) => (u === '/' || u === '/projects' ? 'weekly' : 'monthly')

const entries = ROUTES.map((u) => {
  const images = pageImages(u)
    .map((src) => `    <image:image><image:loc>${esc(SITE_URL + encodeURI(src))}</image:loc></image:image>`)
    .join('\n')
  return [
    '  <url>',
    `    <loc>${esc(loc(u))}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq(u)}</changefreq>`,
    `    <priority>${priority(u)}</priority>`,
    images,
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n')
})

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log(`Pre-rendered ${ROUTES.length} pages + 404.html and wrote sitemap.xml`)
