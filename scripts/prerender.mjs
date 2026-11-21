// Renders every route to static HTML with its own title, meta tags and structured data,
// then writes sitemap.xml. Runs after `vite build` and the SSR build.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const { render, getSeo, headTags, ROUTES, SITE_URL } = await import(
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

const today = new Date().toISOString().slice(0, 10)
const priority = (u) => (u === '/' ? '1.0' : u.split('/').length > 2 ? '0.6' : '0.8')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (u) =>
    `  <url><loc>${SITE_URL}${u === '/' ? '/' : u}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${priority(u)}</priority></url>`,
).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log(`Pre-rendered ${ROUTES.length} pages + 404.html and wrote sitemap.xml`)
