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
  caption: 'Concept visual, not a Westend job.';
  sceneType: 'open-bay' | 'hoist' | 'tools' | 'night-facade' | 'diagnostics' | 'brakes' | 'undercarriage';
  imageUrl: string;
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
  conceptCaption: 'Concept visual, not a Westend job.' as const,
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

function createWorkshopSceneSvgDataUri(scene: GalleryItem['sceneType']): string {
  const svgs: Record<GalleryItem['sceneType'], string> = {
    'open-bay': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#121417"/>
          <stop offset="55%" stop-color="#1d2026"/>
          <stop offset="100%" stop-color="#141619"/>
        </linearGradient>
        <linearGradient id="sun" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.32"/>
          <stop offset="50%" stop-color="#c83e2b" stop-opacity="0.14"/>
          <stop offset="100%" stop-color="#141619" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#262930"/>
          <stop offset="100%" stop-color="#121316"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="675" fill="url(#bg)"/>
      <!-- Roof trusses -->
      <g stroke="#2c313a" stroke-width="3" fill="none">
        <line x1="0" y1="75" x2="1200" y2="75"/>
        <line x1="0" y1="135" x2="1200" y2="135"/>
        <path d="M0 135 L150 75 L300 135 L450 75 L600 135 L750 75 L900 135 L1050 75 L1200 135"/>
      </g>
      <!-- High bay lights -->
      <g fill="#f7e8c8" opacity="0.9">
        <rect x="240" y="82" width="90" height="10" rx="2"/>
        <rect x="555" y="82" width="90" height="10" rx="2"/>
        <rect x="870" y="82" width="90" height="10" rx="2"/>
      </g>
      <!-- Open roller door daylight -->
      <rect x="330" y="155" width="540" height="295" fill="#282d35" stroke="#3c424d" stroke-width="4"/>
      <rect x="342" y="165" width="516" height="285" fill="#d9cbb8" opacity="0.16"/>
      <polygon points="342,165 858,165 1040,675 160,675" fill="url(#sun)"/>
      <!-- Concrete floor -->
      <polygon points="0,450 1200,450 1200,675 0,675" fill="url(#floor)"/>
      <g stroke="#32363f" stroke-width="1.5" opacity="0.7">
        <line x1="600" y1="450" x2="600" y2="675"/>
        <line x1="420" y1="450" x2="210" y2="675"/>
        <line x1="780" y1="450" x2="990" y2="675"/>
        <line x1="0" y1="515" x2="1200" y2="515"/>
        <line x1="0" y1="590" x2="1200" y2="590"/>
      </g>
      <!-- Two-post hydraulic hoist columns in oxide red -->
      <rect x="365" y="175" width="38" height="315" fill="#c83e2b" stroke="#8f281a" stroke-width="2"/>
      <rect x="797" y="175" width="38" height="315" fill="#c83e2b" stroke="#8f281a" stroke-width="2"/>
      <rect x="350" y="482" width="68" height="14" fill="#4a505c"/>
      <rect x="782" y="482" width="68" height="14" fill="#4a505c"/>
      <!-- Hoist lift arms & raised vehicle silhouette -->
      <rect x="395" y="318" width="410" height="12" fill="#c83e2b"/>
      <path d="M435 312 L465 258 L735 258 L770 312 Z" fill="#1e2229" stroke="#5c6472" stroke-width="2.5"/>
      <rect x="415" y="294" width="370" height="34" rx="8" fill="#2b303a" stroke="#687080" stroke-width="2"/>
      <circle cx="485" cy="332" r="28" fill="#121417" stroke="#525866" stroke-width="6"/>
      <circle cx="715" cy="332" r="28" fill="#121417" stroke="#525866" stroke-width="6"/>
      <!-- Tool cabinets left and right -->
      <rect x="90" y="335" width="165" height="135" fill="#1f232a" stroke="#3d434f" stroke-width="2"/>
      <rect x="98" y="345" width="149" height="22" fill="#c83e2b"/>
      <rect x="98" y="375" width="149" height="22" fill="#2c313b"/>
      <rect x="98" y="405" width="149" height="22" fill="#2c313b"/>
      <rect x="945" y="350" width="150" height="120" fill="#1f232a" stroke="#3d434f" stroke-width="2"/>
      <line x1="0" y1="669" x2="1200" y2="669" stroke="#c83e2b" stroke-width="6"/>
    </svg>`,
    hoist: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <rect width="800" height="600" fill="#14161a"/>
      <polygon points="0,420 800,420 800,600 0,600" fill="#20242b"/>
      <!-- Grid lines -->
      <g stroke="#2d323b" stroke-width="2">
        <line x1="0" y1="45" x2="800" y2="45"/>
        <line x1="0" y1="95" x2="800" y2="95"/>
        <line x1="160" y1="0" x2="160" y2="420"/>
        <line x1="640" y1="0" x2="640" y2="420"/>
      </g>
      <!-- Hoist overhead beam -->
      <rect x="175" y="75" width="450" height="22" fill="#c83e2b"/>
      <!-- Left and right hoist columns -->
      <rect x="185" y="95" width="44" height="355" fill="#c83e2b"/>
      <rect x="571" y="95" width="44" height="355" fill="#c83e2b"/>
      <rect x="197" y="110" width="18" height="325" fill="#1b1e24"/>
      <rect x="585" y="110" width="18" height="325" fill="#1b1e24"/>
      <!-- Carriage & arms -->
      <rect x="225" y="255" width="350" height="16" fill="#525a68"/>
      <rect x="260" y="210" width="280" height="50" rx="6" fill="#2a2f38" stroke="#6c7585" stroke-width="2"/>
      <circle cx="315" cy="265" r="32" fill="#111317" stroke="#7a8291" stroke-width="6"/>
      <circle cx="485" cy="265" r="32" fill="#111317" stroke="#7a8291" stroke-width="6"/>
      <!-- Inspection light beam -->
      <polygon points="400,275 260,450 540,450" fill="#f59e0b" opacity="0.16"/>
      <rect x="165" y="446" width="84" height="16" fill="#434956"/>
      <rect x="551" y="446" width="84" height="16" fill="#434956"/>
    </svg>`,
    tools: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <rect width="800" height="600" fill="#16181d"/>
      <!-- Pegboard shadow wall -->
      <rect x="60" y="55" width="680" height="320" fill="#1f232b" stroke="#363c48" stroke-width="3"/>
      <!-- Wrench set in graduated sizes -->
      <g fill="#9aa3b2" stroke="#4f5666" stroke-width="1.5">
        <rect x="115" y="95" width="14" height="185" rx="5"/>
        <rect x="150" y="95" width="13" height="168" rx="5"/>
        <rect x="183" y="95" width="12" height="152" rx="5"/>
        <rect x="214" y="95" width="11" height="136" rx="5"/>
        <rect x="243" y="95" width="10" height="122" rx="5"/>
        <rect x="270" y="95" width="9" height="108" rx="4"/>
      </g>
      <!-- Socket rails -->
      <g fill="#c83e2b">
        <rect x="340" y="105" width="210" height="10" rx="2"/>
        <rect x="340" y="175" width="210" height="10" rx="2"/>
      </g>
      <g fill="#aeb7c6">
        <rect x="350" y="82" width="18" height="23" rx="2"/>
        <rect x="378" y="84" width="16" height="21" rx="2"/>
        <rect x="404" y="86" width="15" height="19" rx="2"/>
        <rect x="428" y="88" width="14" height="17" rx="2"/>
        <rect x="450" y="90" width="13" height="15" rx="2"/>
        <rect x="472" y="91" width="12" height="14" rx="2"/>
        <rect x="350" y="148" width="22" height="27" rx="2"/>
        <rect x="382" y="150" width="20" height="25" rx="2"/>
        <rect x="412" y="152" width="18" height="23" rx="2"/>
        <rect x="440" y="154" width="16" height="21" rx="2"/>
      </g>
      <!-- Diagnostic gauge -->
      <circle cx="635" cy="175" r="54" fill="#14171c" stroke="#c83e2b" stroke-width="6"/>
      <circle cx="635" cy="175" r="40" fill="#20242c" stroke="#6c7585" stroke-width="2"/>
      <line x1="635" y1="175" x2="662" y2="148" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
      <!-- Heavy steel workbench & drawer unit -->
      <rect x="40" y="385" width="720" height="24" fill="#525a68"/>
      <rect x="60" y="409" width="680" height="165" fill="#1c1f26" stroke="#343a46" stroke-width="2"/>
      <rect x="85" y="428" width="300" height="32" fill="#c83e2b"/>
      <rect x="85" y="472" width="300" height="32" fill="#282d37"/>
      <rect x="85" y="516" width="300" height="32" fill="#282d37"/>
      <rect x="415" y="428" width="300" height="120" fill="#232830" stroke="#39404d" stroke-width="2"/>
    </svg>`,
    'night-facade': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675">
      <defs>
        <linearGradient id="nightSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0b0d11"/>
          <stop offset="100%" stop-color="#1a1e26"/>
        </linearGradient>
        <radialGradient id="bayGlow" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.55"/>
          <stop offset="55%" stop-color="#c83e2b" stop-opacity="0.22"/>
          <stop offset="100%" stop-color="#111317" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="675" fill="url(#nightSky)"/>
      <!-- Gabled workshop building silhouette -->
      <polygon points="150,240 600,135 1050,240 1050,485 150,485" fill="#1e222a" stroke="#343a46" stroke-width="3"/>
      <!-- Corrugated cladding vertical lines -->
      <g stroke="#282d37" stroke-width="2">
        <line x1="220" y1="225" x2="220" y2="485"/>
        <line x1="290" y1="210" x2="290" y2="485"/>
        <line x1="910" y1="210" x2="910" y2="485"/>
        <line x1="980" y1="225" x2="980" y2="485"/>
      </g>
      <!-- Oxide fascia trim -->
      <polygon points="140,242 600,132 1060,242 1060,254 600,144 140,254" fill="#c83e2b"/>
      <!-- Two illuminated workshop bays -->
      <rect x="330" y="275" width="235" height="210" fill="#2c241d" stroke="#4f5666" stroke-width="4"/>
      <rect x="635" y="275" width="235" height="210" fill="#2c241d" stroke="#4f5666" stroke-width="4"/>
      <ellipse cx="447" cy="485" rx="280" ry="130" fill="url(#bayGlow)"/>
      <ellipse cx="752" cy="485" rx="280" ry="130" fill="url(#bayGlow)"/>
      <!-- Hoist silhouettes inside bays -->
      <rect x="365" y="305" width="18" height="180" fill="#c83e2b"/>
      <rect x="512" y="305" width="18" height="180" fill="#c83e2b"/>
      <rect x="670" y="305" width="18" height="180" fill="#c83e2b"/>
      <rect x="817" y="305" width="18" height="180" fill="#c83e2b"/>
      <!-- Forecourt apron -->
      <polygon points="0,485 1200,485 1200,675 0,675" fill="#13161b"/>
      <polygon points="330,485 565,485 640,675 210,675" fill="#f59e0b" opacity="0.14"/>
      <polygon points="635,485 870,485 990,675 560,675" fill="#f59e0b" opacity="0.14"/>
    </svg>`,
    diagnostics: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <rect width="800" height="600" fill="#14171c"/>
      <!-- Engine bay structural frame -->
      <rect x="80" y="70" width="640" height="460" rx="14" fill="#1e222a" stroke="#3c4352" stroke-width="4"/>
      <rect x="130" y="115" width="540" height="370" rx="8" fill="#15181e" stroke="#2e3440" stroke-width="2"/>
      <!-- Intake manifold & cylinder head cover -->
      <rect x="220" y="165" width="360" height="150" rx="10" fill="#282e38" stroke="#5c6475" stroke-width="3"/>
      <g stroke="#c83e2b" stroke-width="4">
        <line x1="255" y1="195" x2="545" y2="195"/>
        <line x1="255" y1="240" x2="545" y2="240"/>
        <line x1="255" y1="285" x2="545" y2="285"/>
      </g>
      <!-- Diagnostic leads & battery block -->
      <rect x="155" y="345" width="145" height="105" rx="6" fill="#232832" stroke="#4f5666" stroke-width="2"/>
      <rect x="175" y="360" width="24" height="16" fill="#c83e2b"/>
      <rect x="255" y="360" width="24" height="16" fill="#4b5563"/>
      <!-- Diagnostic voltage waveform screen overlay -->
      <rect x="340" y="340" width="300" height="115" rx="6" fill="#101318" stroke="#c83e2b" stroke-width="2"/>
      <polyline points="360,405 395,405 410,365 430,430 450,385 485,385 505,360 525,425 545,395 620,395" fill="none" stroke="#f59e0b" stroke-width="3"/>
    </svg>`,
    brakes: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <rect width="800" height="600" fill="#15171c"/>
      <!-- Ventilated disc rotor -->
      <circle cx="400" cy="300" r="215" fill="#282d36" stroke="#7a8394" stroke-width="8"/>
      <circle cx="400" cy="300" r="175" fill="none" stroke="#49505e" stroke-width="2" stroke-dasharray="12 8"/>
      <circle cx="400" cy="300" r="95" fill="#191c22" stroke="#5e6675" stroke-width="6"/>
      <!-- Wheel studs -->
      <g fill="#aeb7c6">
        <circle cx="400" cy="235" r="10"/>
        <circle cx="462" cy="280" r="10"/>
        <circle cx="438" cy="352" r="10"/>
        <circle cx="362" cy="352" r="10"/>
        <circle cx="338" cy="280" r="10"/>
      </g>
      <!-- Oxide red brake caliper -->
      <path d="M210 175 C250 120, 330 105, 375 135 L350 225 C315 210, 280 225, 260 265 Z" fill="#c83e2b" stroke="#8f281a" stroke-width="4"/>
      <circle cx="295" cy="175" r="8" fill="#d1d5db"/>
      <circle cx="335" cy="158" r="8" fill="#d1d5db"/>
    </svg>`,
    undercarriage: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <rect width="800" height="600" fill="#14161a"/>
      <!-- Subframe & control arms -->
      <rect x="140" y="265" width="520" height="70" rx="10" fill="#262b34" stroke="#555e6e" stroke-width="3"/>
      <!-- Coil springs left & right -->
      <g stroke="#c83e2b" stroke-width="10" stroke-linecap="round">
        <line x1="190" y1="140" x2="240" y2="155"/>
        <line x1="190" y1="175" x2="240" y2="190"/>
        <line x1="190" y1="210" x2="240" y2="225"/>
        <line x1="560" y1="140" x2="610" y2="155"/>
        <line x1="560" y1="175" x2="610" y2="190"/>
        <line x1="560" y1="210" x2="610" y2="225"/>
      </g>
      <!-- Shock absorber struts -->
      <rect x="203" y="110" width="24" height="360" fill="#687080"/>
      <rect x="573" y="110" width="24" height="360" fill="#687080"/>
      <!-- Exhaust & driveline center -->
      <line x1="400" y1="60" x2="400" y2="540" stroke="#8b94a5" stroke-width="18"/>
      <rect x="365" y="370" width="70" height="110" rx="14" fill="#3a404d" stroke="#7a8291" stroke-width="3"/>
    </svg>`,
  };

  return `data:image/svg+xml;utf8,${encodeURIComponent(svgs[scene])}`;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'bay-01',
    number: '01',
    title: 'Open Workshop Bay & Two-Post Hoist',
    category: 'Workshop Bay',
    aspect: 'wide',
    description:
      'Architectural study of a regional Australian independent mechanical bay with a heavy-duty two-post hydraulic hoist and morning daylight through open roller doors.',
    caption: 'Concept visual, not a Westend job.',
    sceneType: 'open-bay',
    imageUrl: createWorkshopSceneSvgDataUri('open-bay'),
  },
  {
    id: 'bay-02',
    number: '02',
    title: 'Hydraulic Hoist Service Inspection',
    category: 'Hoist & Equipment',
    aspect: 'standard',
    description:
      'Elevated service bay arrangement illustrating under-vehicle access and safety lock clearances typical of an independent repair shop.',
    caption: 'Concept visual, not a Westend job.',
    sceneType: 'hoist',
    imageUrl: createWorkshopSceneSvgDataUri('hoist'),
  },
  {
    id: 'bay-03',
    number: '03',
    title: 'Shadow Board & Mechanical Bench',
    category: 'Tools & Bench',
    aspect: 'standard',
    description:
      'Organized steel workbench, metric spanner shadow board, socket rails, and pressure testing gauge layout.',
    caption: 'Concept visual, not a Westend job.',
    sceneType: 'tools',
    imageUrl: createWorkshopSceneSvgDataUri('tools'),
  },
  {
    id: 'bay-04',
    number: '04',
    title: 'Twilight Workshop Facade & Service Apron',
    category: 'Exterior & Facade',
    aspect: 'wide',
    description:
      'Dusk architectural study of a Bathurst-style independent steel-and-brick workshop with warm bay lighting across the concrete apron.',
    caption: 'Concept visual, not a Westend job.',
    sceneType: 'night-facade',
    imageUrl: createWorkshopSceneSvgDataUri('night-facade'),
  },
  {
    id: 'bay-05',
    number: '05',
    title: 'Engine Bay & Electrical Testing Bench',
    category: 'Tools & Bench',
    aspect: 'standard',
    description:
      'Under-bonnet inspection layout showing intake assembly and diagnostic voltage waveform check.',
    caption: 'Concept visual, not a Westend job.',
    sceneType: 'diagnostics',
    imageUrl: createWorkshopSceneSvgDataUri('diagnostics'),
  },
  {
    id: 'bay-06',
    number: '06',
    title: 'Ventilated Disc Rotor & Caliper Assembly',
    category: 'Hoist & Equipment',
    aspect: 'standard',
    description:
      'Close mechanical study of a ventilated disc brake rotor, wheel hub studs, and caliper housing on the hoist.',
    caption: 'Concept visual, not a Westend job.',
    sceneType: 'brakes',
    imageUrl: createWorkshopSceneSvgDataUri('brakes'),
  },
  {
    id: 'bay-07',
    number: '07',
    title: 'Steering, Strut & Subframe Inspection',
    category: 'Workshop Bay',
    aspect: 'standard',
    description:
      'Underbody chassis study highlighting coil springs, damper struts, and subframe mounting points.',
    caption: 'Concept visual, not a Westend job.',
    sceneType: 'undercarriage',
    imageUrl: createWorkshopSceneSvgDataUri('undercarriage'),
  },
];
