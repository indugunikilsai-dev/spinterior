const paths: Record<string, string> = {
  home: 'M3 10.5 12 3l9 7.5M5 9.5V20h5v-6h4v6h5V9.5',
  kitchen: 'M4 3h16v18H4zM4 9h16M8 6h.01M12 6h.01M9 13v4m6-4v4',
  wardrobe: 'M5 3h14v18H5zM12 3v18M9.5 11v2m5-2v2M5 18h14',
  office: 'M4 21V5l8-2v18M12 7h8v14M7 8h2m-2 4h2m-2 4h2m6-5h2m-2 4h2M2 21h20',
  renovate: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z',
  cube: 'M12 2 3 7v10l9 5 9-5V7zM3 7l9 5 9-5M12 12v10',
  saw: 'M3 14 14 3l7 7-11 11zM7 18l-2-2m5-1-2-2m5-1-2-2m5-1-2-2',
  bolt: 'M13 2 4 14h7l-1 8 9-12h-7z',
  drop: 'M12 3s-6 6.6-6 11a6 6 0 0 0 12 0c0-4.4-6-11-6-11zM9.5 15a2.5 2.5 0 0 0 2.5 2.5',
  brush: 'M4 3h13v6H4zM17 6h3v6h-8v3M10.5 15h3v6h-3z',
  tiles: 'M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z',
  ceiling: 'M2 4h20M4 4v4h16V4M7 8v3h10V8M9 11v2m6-2v2M8 17l-1 3m5-3v3m4-3 1 3',
  brick: 'M3 5h18v14H3zM3 9.7h18M3 14.3h18M9 5v4.7m6-4.7v4.7M12 9.7v4.6M6 9.7v4.6m12-4.6v4.6M9 14.3V19m6-4.7V19',
  shield: 'M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6zM9 12l2 2 4-4',
  window: 'M4 3h16v18H4zM12 3v18M4 12h16M7 6l2-2m3 5 3-3',
  grid: 'M4 21V7l8-4 8 4v14M4 11h16M4 16h16M8 7v14m4-17v17m4-14v14',
  drill: 'M3 7h11v6H3zM14 9h3m3 1h-3M7 13l-1.5 8h4L11 13M3 10h2',
  sparkle: 'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7z',
  whatsapp: 'M4 20l1.3-4A8 8 0 1 1 8 18.7zM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 1a4 4 0 0 1-2.5-2.5l1-1-1-2z',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  close: 'M6 6l12 12M18 6 6 18',
  menu: 'M4 7h16M4 12h16M4 17h16',
  left: 'M15 6l-6 6 6 6',
  right: 'M9 6l6 6-6 6',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2',
  mail: 'M3 5h18v14H3zM3 6l9 7 9-7',
  pin: 'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  quote: 'M9 7H5v6h4v-2c0 2-1 4-3 4m13-8h-4v6h4v-2c0 2-1 4-3 4',
  instagram: 'M4 4h16v16H4zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8M17 7h.01',
  facebook: 'M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z',
  pinterest: 'M12 3a9 9 0 0 0-3.3 17.4L10.5 13c-.3-.6-.4-1.2-.4-1.8 0-1.6 1-2.7 2.2-2.7 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.1.6 2 1.7 2 2 0 3.4-2.6 3.4-5.6 0-2.3-1.6-4-4.4-4a5 5 0 0 0-5.2 5c0 1 .3 1.6.7 2.1M12 21a9 9 0 1 0 0-18',
}

export default function Icon({ name, size = 22 }: { name: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}
