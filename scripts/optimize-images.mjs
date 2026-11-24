// Generates smaller copies of every .webp in public/images (e.g. about.w480.webp, about.w800.webp)
// and writes src/image-widths.json, which the <Img> component uses to build `srcset`.
// Run with `npm run images` after adding or replacing photos. Existing copies are skipped.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dir = path.join(root, 'public', 'images')
const WIDTHS = [160, 320, 480, 800, 1200]
const VARIANT = /\.w\d+\.webp$/

const manifest = {}
for (const file of fs.readdirSync(dir).sort()) {
  if (!file.endsWith('.webp') || VARIANT.test(file)) continue
  const src = path.join(dir, file)
  const { width } = await sharp(src).metadata()
  const widths = []
  for (const w of WIDTHS) {
    if (w >= width * 0.9) break
    const out = path.join(dir, file.replace(/\.webp$/, `.w${w}.webp`))
    if (!fs.existsSync(out)) {
      await sharp(src).resize({ width: w }).webp({ quality: 72, effort: 6 }).toFile(out)
    }
    widths.push(w)
  }
  widths.push(width)
  manifest[`/images/${file}`] = widths
}

fs.writeFileSync(path.join(root, 'src', 'image-widths.json'), JSON.stringify(manifest, null, 2) + '\n')
console.log(`Image variants ready for ${Object.keys(manifest).length} images`)
