export type Category = 'Residential' | 'Commercial' | 'Kitchen & Bath'

export interface Project {
  id: string
  title: string
  category: Category
  location: string
  area: string
  year: number
  style: string
  summary: string
  scope: string[]
  images: string[]
}

export const projects: Project[] = [
  {
    id: 'banjara-residence',
    title: 'The Banjara Residence',
    category: 'Residential',
    location: 'Banjara Hills, Hyderabad',
    area: '4,200 sq ft',
    year: 2025,
    style: 'Warm Contemporary',
    summary:
      'A family home reworked around light and texture: a walnut feature wall anchors the open living room, which flows into a sunlit dining space and a glass-walled courtyard.',
    scope: ['Space planning', 'Custom joinery', 'Lighting design', 'Furniture curation'],
    images: ['/images/banjara-1.webp', '/images/banjara-2.webp', '/images/banjara-3.webp'],
  },
  {
    id: 'jubilee-villa',
    title: 'Jubilee Hills Villa',
    category: 'Residential',
    location: 'Jubilee Hills, Hyderabad',
    area: '6,800 sq ft',
    year: 2025,
    style: 'Modern Luxe',
    summary:
      'Hotel-grade master suites with deep charcoal walls, channel-tufted headboards and brass accents, finished with layered ambient lighting for calm evenings.',
    scope: ['Master suites', 'Upholstery', 'Wall finishes', 'Turnkey execution'],
    images: ['/images/villa-1.webp', '/images/villa-2.webp'],
  },
  {
    id: 'ember-dining',
    title: 'Ember Dining Lounge',
    category: 'Commercial',
    location: 'Hitech City, Hyderabad',
    area: '3,100 sq ft',
    year: 2024,
    style: 'Industrial Elegance',
    summary:
      'A 90-cover restaurant that balances intimacy and energy, with slatted timber screens, low pendant lighting and a material palette built to age gracefully.',
    scope: ['Concept & branding fit-out', 'Acoustic planning', 'Bar design', 'Site supervision'],
    images: ['/images/ember-1.webp', '/images/ember-2.webp'],
  },
  {
    id: 'kokapet-kitchen',
    title: 'Kokapet Modular Kitchen',
    category: 'Kitchen & Bath',
    location: 'Kokapet, Hyderabad',
    area: '220 sq ft',
    year: 2025,
    style: 'Soft Classic',
    summary:
      'Taupe shaker shutters, quartz counters and brushed brass hardware. Every drawer is planned around how the family actually cooks.',
    scope: ['Modular kitchen', 'Quartz countertops', 'Hardware & fittings', 'Appliance integration'],
    images: ['/images/kitchen-1.webp'],
  },
  {
    id: 'northwind-office',
    title: 'Northwind Tech Office',
    category: 'Commercial',
    location: 'Gachibowli, Hyderabad',
    area: '12,500 sq ft',
    year: 2024,
    style: 'Scandinavian Workplace',
    summary:
      'A 150-seat workplace with flexible lounges, glass meeting pods and a pantry street, designed for focus, collaboration and well-being.',
    scope: ['Workplace strategy', 'Glass partitions', 'Pantry & breakout', 'MEP coordination'],
    images: ['/images/office-1.webp', '/images/office-2.webp'],
  },
  {
    id: 'skyline-apartment',
    title: 'Skyline Apartment',
    category: 'Residential',
    location: 'Kondapur, Hyderabad',
    area: '1,850 sq ft',
    year: 2025,
    style: 'Mid-century Modern',
    summary:
      'A 3BHK apartment with a cognac leather lounge, sage accent wall and herringbone floors, made to feel open and personal.',
    scope: ['Full-home interiors', 'TV & storage units', 'Flooring', 'Décor styling'],
    images: ['/images/apartment-1.webp', '/images/apartment-2.webp', '/images/apartment-3.webp'],
  },
  {
    id: 'spa-bath',
    title: 'Spa Bath Suite',
    category: 'Kitchen & Bath',
    location: 'Manikonda, Hyderabad',
    area: '140 sq ft',
    year: 2024,
    style: 'Minimal Spa',
    summary:
      'A freestanding tub, frameless glass and matte-black fixtures turn an everyday bathroom into a quiet place to unwind.',
    scope: ['Bathroom remodel', 'Waterproofing', 'Sanitaryware', 'Vanity design'],
    images: ['/images/bath-1.webp', '/images/bath-2.webp', '/images/bath-3.webp'],
  },
  {
    id: 'lakeview-penthouse',
    title: 'Lakeview Penthouse',
    category: 'Residential',
    location: 'Narsingi, Hyderabad',
    area: '3,600 sq ft',
    year: 2023,
    style: 'Coastal Contemporary',
    summary:
      'Floor-to-ceiling glazing frames the lake. A soft neutral palette and low-slung seating keep the view in focus.',
    scope: ['Living & dining', 'Fireplace wall', 'Custom sofas', 'Window treatments'],
    images: ['/images/penthouse-1.webp', '/images/penthouse-2.webp'],
  },
  {
    id: 'green-study',
    title: 'The Green Study',
    category: 'Residential',
    location: 'Kompally, Hyderabad',
    area: '180 sq ft',
    year: 2024,
    style: 'Biophilic',
    summary:
      'A work-from-home study in deep forest green, with a reading nook, curated art wall and plants that soften the edges.',
    scope: ['Home office', 'Paint & finishes', 'Ergonomic furniture', 'Plant styling'],
    images: ['/images/study-1.webp'],
  },
  {
    id: 'garden-kids-room',
    title: 'Garden Kids’ Room',
    category: 'Residential',
    location: 'Miyapur, Hyderabad',
    area: '160 sq ft',
    year: 2025,
    style: 'Playful Boho',
    summary:
      'A bright, plant-filled bedroom with rattan lighting and a gallery wall, designed to grow with the child.',
    scope: ['Kids’ bedroom', 'Storage design', 'Soft furnishings', 'Lighting'],
    images: ['/images/kids-1.webp', '/images/kids-2.webp'],
  },
]

export const services = [
  {
    title: 'Residential Interiors',
    text: 'Complete interiors for apartments, villas and independent homes, concept to handover.',
    icon: 'home',
    image: '/images/site-3.webp',
    points: ['Space planning & layouts', 'False ceilings & lighting', 'Furniture & soft furnishings', 'Décor & styling'],
  },
  {
    title: 'Modular Kitchens',
    text: 'Ergonomic kitchens with premium hardware, durable finishes and smart storage.',
    icon: 'kitchen',
    image: '/images/site-0.webp',
    points: ['L, U, parallel & island layouts', 'BWP plywood carcasses', 'Soft-close hardware', 'Quartz & granite counters'],
  },
  {
    title: 'Wardrobes & Storage',
    text: 'Sliding, hinged and walk-in wardrobes with tailored internals and soft-close fittings.',
    icon: 'wardrobe',
    image: '/images/site-1.webp',
    points: ['Walk-in closets', 'Sliding & hinged shutters', 'Lofts & overhead storage', 'Custom internals'],
  },
  {
    title: 'Commercial Spaces',
    text: 'Offices, restaurants, retail and clinics designed around your brand.',
    icon: 'office',
    image: '/images/office-1.webp',
    points: ['Offices & co-working', 'Restaurants & cafés', 'Retail & showrooms', 'Clinics & studios'],
  },
  {
    title: 'Renovation & Remodel',
    text: 'Bathroom, kitchen and full-home makeovers, with all civil work in-house.',
    icon: 'renovate',
    image: '/images/bath-1.webp',
    points: ['Bathroom remodelling', 'Flooring & tiling', 'Electrical & plumbing', 'Painting & wall finishes'],
  },
  {
    title: '3D Visualisation',
    text: 'Photo-realistic renders so you see every detail before work begins.',
    icon: 'cube',
    image: '/images/penthouse-1.webp',
    points: ['2D layouts & elevations', 'Photo-realistic renders', 'Material boards', 'Virtual walkthroughs'],
  },
]

export const homeServices = [
  {
    title: 'Carpentry',
    icon: 'saw',
    text: 'Custom furniture, repairs and fittings by skilled carpenters.',
    tasks: ['Furniture making & repair', 'Door & window fixing', 'Shelves, beds & cots', 'Hinges, locks & handles'],
  },
  {
    title: 'Electrical',
    icon: 'bolt',
    text: 'Safe wiring, fittings and fault repairs by licensed electricians.',
    tasks: ['Wiring & rewiring', 'Switches, sockets & DBs', 'Lights & ceiling fans', 'Inverter & geyser fitting'],
  },
  {
    title: 'Plumbing',
    icon: 'drop',
    text: 'Leak repairs, new lines and bathroom fittings done right.',
    tasks: ['Leak & blockage repair', 'Tap & shower fitting', 'Water tank & motor work', 'Sanitaryware installation'],
  },
  {
    title: 'Painting',
    icon: 'brush',
    text: 'Interior and exterior painting with clean, dust-managed sites.',
    tasks: ['Interior & exterior paint', 'Texture & designer walls', 'Wood polish & lacquer', 'Wallpaper installation'],
  },
  {
    title: 'Tiling & Flooring',
    icon: 'tiles',
    text: 'Precise tile, marble and wooden flooring work.',
    tasks: ['Floor & wall tiling', 'Marble & granite laying', 'Wooden & vinyl floors', 'Grouting & tile repair'],
  },
  {
    title: 'False Ceiling',
    icon: 'ceiling',
    text: 'Gypsum, POP and PVC ceilings with integrated lighting.',
    tasks: ['Gypsum & POP ceilings', 'PVC & wooden panels', 'Cove & profile lighting', 'Ceiling repairs'],
  },
  {
    title: 'Civil & Masonry',
    icon: 'brick',
    text: 'Wall changes, plastering and structural repairs.',
    tasks: ['Brick & block work', 'Plastering & putty', 'Wall breaking & partitions', 'Crack & damage repair'],
  },
  {
    title: 'Waterproofing',
    icon: 'shield',
    text: 'Lasting protection for terraces, bathrooms and walls.',
    tasks: ['Terrace waterproofing', 'Bathroom & sunken areas', 'Damp & seepage treatment', 'Water tank sealing'],
  },
  {
    title: 'Glass & Aluminium',
    icon: 'window',
    text: 'Windows, partitions and shower enclosures made to measure.',
    tasks: ['Sliding windows', 'Glass partitions', 'Shower enclosures', 'Mosquito mesh & grills'],
  },
  {
    title: 'Fabrication & Welding',
    icon: 'grid',
    text: 'Gates, grills and railings in MS and stainless steel.',
    tasks: ['Gates & grills', 'Staircase railings', 'Balcony safety grills', 'Shed & frame work'],
  },
  {
    title: 'Installation & Fitting',
    icon: 'drill',
    text: 'Quick, tidy installation of everything you bring home.',
    tasks: ['TV & wall mounting', 'Curtain rods & blinds', 'Appliance installation', 'Mirrors & accessories'],
  },
  {
    title: 'Deep Cleaning',
    icon: 'sparkle',
    text: 'Post-construction and move-in cleaning, top to bottom.',
    tasks: ['Full-home deep clean', 'Kitchen & bathroom', 'Sofa & mattress', 'Post-renovation clean-up'],
  },
]

export const faqs = [
  {
    q: 'How long does a full home interior take?',
    a: 'A typical 2–3 BHK takes 45–60 days from design sign-off to handover. Villas and commercial projects are scheduled individually.',
  },
  {
    q: 'Is the first consultation really free?',
    a: 'Yes. We visit your space, understand your needs and share an initial concept and budget estimate at no cost.',
  },
  {
    q: 'Do you work within a fixed budget?',
    a: 'Absolutely. We design to the budget you set and show you itemised options so you can decide where to invest.',
  },
  {
    q: 'What warranty do you offer?',
    a: 'Modular kitchens and wardrobes carry up to a 10-year warranty, plus one year of free post-handover service.',
  },
  {
    q: 'How are payments structured?',
    a: 'Payments are milestone-based: booking, design sign-off, production and handover. No large payment upfront.',
  },
]

export const process = [
  { step: '01', title: 'Consultation', text: 'We visit your space, understand how you live and agree on budget and timeline.' },
  { step: '02', title: 'Concept & 3D Design', text: 'Mood boards, layouts and 3D renders, refined with you until they feel right.' },
  { step: '03', title: 'Materials & Quote', text: 'Transparent, itemised pricing with material samples you can see and touch.' },
  { step: '04', title: 'Execution', text: 'Our in-house team manufactures and installs, with weekly progress updates.' },
  { step: '05', title: 'Handover', text: 'Final styling, deep cleaning and a walkthrough, backed by our warranty.' },
]

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/process', label: 'Process' },
  { to: '/contact', label: 'Contact' },
]

export const CONTACT = {
  founder: 'Shekhar Pal',
  phone: '+91 80969 75820',
  phoneHref: 'tel:+918096975820',
  email: 'shekharpal809697@gmail.com',
  whatsappBase: 'https://wa.me/918096975820',
  whatsapp: 'https://wa.me/918096975820?text=' + encodeURIComponent('Hi SP Interior, I would like to know more about your interior services.'),
  address: 'Nethaji Nagar, Kistareddypet, Patancheru, Hyderabad, Telangana',
  shortAddress: 'Kistareddypet, Patancheru',
  mapLink: 'https://www.google.com/maps/place/Nethaji+nagar+kistareddypet+Patancheru/@17.5481758,78.2898909,17z/data=!4m6!3m5!1s0x3bcbf300711074d1:0x868766161627ad70!8m2!3d17.5481769!4d78.2898931!16s%2Fg%2F11vq9pfw2k?hl=en&entry=ttu&g_ep=EgoyMDI2MTExNy4wIKXMDSoASAFQAw%3D%3D',
  hours: 'Open 24/7 — all days',
}

export const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
