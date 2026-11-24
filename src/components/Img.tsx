import type { ImgHTMLAttributes } from 'react'
import widths from '../image-widths.json'

const WIDTHS: Record<string, number[]> = widths

// Resized copies made by scripts/optimize-images.mjs: /images/about.webp -> /images/about.w800.webp
const variant = (src: string, w: number) => src.replace(/\.webp$/, `.w${w}.webp`)

/** `srcset` for an image in public/images, or undefined if it has no resized copies. */
function srcSetFor(src: string) {
  const list = WIDTHS[src]
  if (!list || list.length < 2) return undefined
  const full = list[list.length - 1]
  return list.map((w) => `${encodeURI(w === full ? src : variant(src, w))} ${w}w`).join(', ')
}

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'sizes'> & {
  /** Unencoded path inside public/, e.g. "/images/about.webp". */
  src: string
  /** Rendered width of the image slot, so the browser downloads the smallest file that fits. */
  sizes: string
}

/** <img> that lets the browser pick a correctly sized copy of the photo. */
export default function Img({ src, sizes, alt = '', ...rest }: Props) {
  const srcSet = srcSetFor(src)
  return <img src={encodeURI(src)} srcSet={srcSet} sizes={srcSet ? sizes : undefined} alt={alt} {...rest} />
}
