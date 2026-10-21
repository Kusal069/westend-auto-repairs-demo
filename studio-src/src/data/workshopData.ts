export type PageId = 'home' | 'services' | 'about' | 'gallery' | 'reviews' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  shortLabel: string;
  hash: string;
}

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  status: 'confirmed' | 'placeholder';
  statusLabel: string;
  summary: string;
  details: string[];
  disclaimer: string;
}

export interface GalleryItem {
  id: string;
  number: string;
  title: string;
  category: 'Workshop Bay' | 'Hoist & Equipment' | 'Tools & Bench' | 'Exterior & Facade';
  aspect: 'wide' | 'standard';
  description: string;
  caption: 'Google listing photo of this workshop.';
  imageUrl: string;
  sourceUrl: string;
}

export const VERIFIED_FACTS = {
  businessName: 'Westend Auto Repairs',
  category: 'Auto repairs',
  streetAddress: '2 Lambert St',
  suburbStatePostcode: 'Bathurst NSW 2795',
  fullAddress: '2 Lambert St, Bathurst NSW 2795',
  phoneDisplay: '+61 2 6331 2920',
  phoneHref: 'tel:+61263312920',
  mapsRating: '4.7',
  mapsReviewCount: 63,
  mapsSnapshotDate: '21 Oct 2026',
  mapsUrl:
    'https://www.google.com/maps/place/Westend+Auto+Repairs/data=!4m7!3m6!1s0x6b11e5cf1e9d2bf9:0x3c0bcd7954845210!8m2!3d-33.4290413!4d149.5797032!16s%2Fg%2F1tdkb6pp',
  facebookUrl: 'https://www.facebook.com/westendautorepairs/',
  demoNotice: 'Independent demo site. Not the official Westend Auto Repairs website.',
  callbackDemoMessage:
    'Demo only — this form does not send a message. Call +61 2 6331 2920.',
  conceptCaption: 'Google listing photo of this workshop.' as const,
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', shortLabel: 'Home', hash: '#home' },
  { id: 'services', label: 'Services', shortLabel: 'Services', hash: '#services' },
  { id: 'about', label: 'About', shortLabel: 'About', hash: '#about' },
  { id: 'gallery', label: 'Work / Gallery', shortLabel: 'Gallery', hash: '#gallery' },
  { id: 'reviews', label: 'Reviews', shortLabel: 'Reviews', hash: '#reviews' },
  { id: 'contact', label: 'Contact', shortLabel: 'Contact', hash: '#contact' },
];

export const TRUST_STRIP_ITEMS = [
  {
    id: 'workshop',
    metric: 'Bathurst Workshop',
    label: 'Independent Auto Repairs',
    detail: 'Confirmed category: Auto repairs',
  },
  {
    id: 'location',
    metric: '2 Lambert St',
    label: 'Bathurst NSW 2795',
    detail: 'Direct workshop drop-off & enquiries',
  },
  {
    id: 'rating',
    metric: '4.7 Google Maps',
    label: 'From 63 Google Reviews',
    detail: 'Rating snapshot recorded 21 Oct 2026',
  },
  {
    id: 'phone',
    metric: '+61 2 6331 2920',
    label: 'Direct Workshop Line',
    detail: 'Click-to-call to discuss your vehicle',
    href: 'tel:+61263312920',
  },
] as const;

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    number: '01',
    id: 'auto-repairs',
    title: 'Auto repairs',
    status: 'confirmed',
    statusLabel: 'Confirmed workshop service',
    summary:
      'General mechanical auto repairs carried out at 2 Lambert St, Bathurst NSW 2795. Call the workshop directly to discuss your vehicle make, symptoms, and booking availability.',
    details: [
      'Direct phone discussion before booking your vehicle in',
      'Independent Bathurst mechanical workshop at 2 Lambert St',
      'Confirm scope of repair directly by calling +61 2 6331 2920',
    ],
    disclaimer:
      'Confirmed business category from public workshop listing: Auto repairs.',
  },
  {
    number: '02',
    id: 'servicing',
    title: 'General & scheduled servicing',
    status: 'placeholder',
    statusLabel: 'Typical workshop work — confirm with the shop',
    summary:
      'Placeholder service card representing routine passenger and light commercial vehicle servicing. Specific service inclusions and oil/filter specifications must be confirmed directly with Westend Auto Repairs.',
    details: [
      'Routine fluid, oil, and filter inspection checks (unconfirmed placeholder)',
      'General safety inspection items — confirm availability by phone',
      'Placeholder entry until the workshop owner confirms exact scope',
    ],
    disclaimer:
      'Typical workshop work — confirm with the shop. Placeholder copy until the owner confirms.',
  },
  {
    number: '03',
    id: 'diagnostics',
    title: 'Mechanical & fault diagnostics',
    status: 'placeholder',
    statusLabel: 'Typical workshop work — confirm with the shop',
    summary:
      'Placeholder service card for investigating drivability issues, warning indicators, unusual noises, or starting faults. Contact the workshop to confirm diagnostic tooling for your vehicle model.',
    details: [
      'Engine and drivability fault investigation (unconfirmed placeholder)',
      'Electrical and warning indicator checks — confirm with the shop',
      'Placeholder entry until the workshop owner confirms exact scope',
    ],
    disclaimer:
      'Typical workshop work — confirm with the shop. Placeholder copy until the owner confirms.',
  },
  {
    number: '04',
    id: 'brakes',
    title: 'Brakes & stopping systems',
    status: 'placeholder',
    statusLabel: 'Typical workshop work — confirm with the shop',
    summary:
      'Placeholder service card covering typical brake pad, rotor, caliper, and hydraulic fluid checks. Call +61 2 6331 2920 to confirm parts availability and booking times.',
    details: [
      'Brake pad wear and disc rotor condition checks (unconfirmed placeholder)',
      'Brake pedal feel and hydraulic line inspection — confirm with the shop',
      'Placeholder entry until the workshop owner confirms exact scope',
    ],
    disclaimer:
      'Typical workshop work — confirm with the shop. Placeholder copy until the owner confirms.',
  },
  {
    number: '05',
    id: 'suspension',
    title: 'Steering & suspension checks',
    status: 'placeholder',
    statusLabel: 'Typical workshop work — confirm with the shop',
    summary:
      'Placeholder service card for typical shock absorber, strut, bush, and steering linkage inspections suited to regional NSW roads. Confirm specific work directly with the workshop.',
    details: [
      'Shock absorber, spring, and bushing inspection (unconfirmed placeholder)',
      'Steering rack, tie-rod, and wheel bearing checks — confirm with the shop',
      'Placeholder entry until the workshop owner confirms exact scope',
    ],
    disclaimer:
      'Typical workshop work — confirm with the shop. Placeholder copy until the owner confirms.',
  },
];

const LISTING_CAPTION = 'Google listing photo of this workshop.' as const;
const MAPS_PHOTOS = 'https://www.google.com/maps/place/Westend+Auto+Repairs/data=!4m7!3m6!1s0x6b11e5cf1e9d2bf9:0x3c0bcd7954845210!8m2!3d-33.4290413!4d149.5797032!16s%2Fg%2F1tdkb6pp';
const img = (file: string) =>
  `${import.meta.env?.BASE_URL ?? '/westend-auto-repairs-demo/'}images/westend/${file}`;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'bay-01',
    number: '01',
    title: 'Workshop Apron & Three Service Bays',
    category: 'Exterior & Facade',
    aspect: 'wide',
    description:
      'Street-facing brick workshop at 2 Lambert St with the Westend Auto Repairs sign, vehicles on two-post hoists, and the apron in use.',
    caption: LISTING_CAPTION,
    imageUrl: img('work-01.jpg'),
    sourceUrl: MAPS_PHOTOS,
  },
  {
    id: 'bay-02',
    number: '02',
    title: 'Maserati on the Workshop Apron',
    category: 'Exterior & Facade',
    aspect: 'standard',
    description:
      'Customer vehicle on the Lambert Street apron in front of the signed bays, with a hoist visible inside the left door.',
    caption: LISTING_CAPTION,
    imageUrl: img('work-05.jpg'),
    sourceUrl: MAPS_PHOTOS,
  },
  {
    id: 'bay-03',
    number: '03',
    title: 'Open Bays, Hoists and Signage',
    category: 'Workshop Bay',
    aspect: 'wide',
    description:
      'Earlier Google listing photograph of the same brick bays, sign, and two-post hoists with vehicles in the workshop.',
    caption: LISTING_CAPTION,
    imageUrl: img('work-03.jpg'),
    sourceUrl: MAPS_PHOTOS,
  },
  {
    id: 'bay-04',
    number: '04',
    title: 'Four-Post Hoist and Service Floor',
    category: 'Hoist & Equipment',
    aspect: 'standard',
    description:
      'Inside the workshop: a vehicle on a four-post hoist, a car with the bonnet up, tool cabinets and inspection lighting.',
    caption: LISTING_CAPTION,
    imageUrl: img('work-04.jpg'),
    sourceUrl: MAPS_PHOTOS,
  },
  {
    id: 'bay-05',
    number: '05',
    title: 'Sports Car on the Hoist',
    category: 'Hoist & Equipment',
    aspect: 'standard',
    description:
      'A red sports car on the hoist with a front wheel removed, looking out through an open bay door to Lambert Street.',
    caption: LISTING_CAPTION,
    imageUrl: img('work-06.jpg'),
    sourceUrl: MAPS_PHOTOS,
  },
  {
    id: 'bay-06',
    number: '06',
    title: 'Brake Disc and Caliper Inspection',
    category: 'Hoist & Equipment',
    aspect: 'standard',
    description:
      'Close photograph of a brake disc, hub and caliper taken from the Westend Auto Repairs Google listing.',
    caption: LISTING_CAPTION,
    imageUrl: img('work-07.jpg'),
    sourceUrl: MAPS_PHOTOS,
  },
];
