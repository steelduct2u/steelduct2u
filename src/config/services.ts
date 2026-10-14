// Kandungan halaman servis (SEO) — satu keyword utama bagi satu URL.
// Teks diambil daripada kandungan sedia ada laman; jangan tambah dakwaan yang tidak benar.

export interface ServicePage {
  slug: string
  /** Pautan pendek untuk footer / pautan dalaman */
  label: string
  /** <title> — keyword utama di depan, ≤ ~60 aksara */
  metaTitle: string
  /** meta description — ≤ 155 aksara */
  metaDescription: string
  /** <h1> */
  h1: string
  keyword: string
  intro: string
  highlights: string[]
  suitableFor: string[]
  whatsappTopic: string
  faq: { q: string; a: string }[]
}

export const servicePages: ServicePage[] = [
  {
    slug: 'kitchen-hood-installation-malaysia',
    label: 'Kitchen Hood Installation',
    metaTitle: 'Kitchen Hood Installation Malaysia | NFPA 96 Contractor',
    metaDescription:
      'NFPA 96 kitchen hood installation in Malaysia. Grade 304 stainless steel hoods and liquid-tight welded grease ducts by a CIDB M01 contractor. Free site inspection.',
    h1: 'NFPA 96 Kitchen Hood Installation in Malaysia',
    keyword: 'kitchen hood installation Malaysia',
    intro:
      'We supply and install heavy-gauge Grade 304 stainless steel kitchen exhaust hoods with continuous liquid-tight welded grease ducting for restaurants, hotels and central kitchens. Each system is engineered to prevent grease leaks and to meet BOMBA and local council inspection requirements.',
    highlights: [
      'Continuous liquid-tight welded seams along the entire grease duct run',
      'Stainless steel baffle grease filters with built-in oil drainage troughs',
      'Flush-mounted high-temperature LED lighting and zero-clearance wall fitting',
      'Engineered airflow (CFM) to capture cooking heat, smoke and fumes',
      'Built to NFPA 96 and local council requirements',
    ],
    suitableFor: ['Restaurants', 'Hotel kitchens', 'Central kitchens', 'Cafes & food courts'],
    whatsappTopic: 'NFPA 96 Kitchen Hood Installation',
    faq: [
      {
        q: 'How long does a typical kitchen hood installation take?',
        a: 'Most commercial kitchen installations take 1 to 2 working days. Larger multi-level routing may need additional time for installation and airflow balancing.',
      },
      {
        q: 'What materials do you use for kitchen exhaust ductwork?',
        a: 'Heavy-gauge stainless steel (Grade 304) and galvanised iron with liquid-tight welded seams to prevent oil leakage and minimise fire risk.',
      },
    ],
  },
  {
    slug: 'steel-ductwork-fabrication-malaysia',
    label: 'Steel Ductwork Fabrication',
    metaTitle: 'Steel Ductwork Fabrication Malaysia | GI & Stainless Steel',
    metaDescription:
      'Custom steel ductwork fabrication in Malaysia: GI and Grade 304/316 stainless steel ducts, spiral ducting and grease ducts made in-house to your drawings.',
    h1: 'Steel & Sheet Metal Ductwork Fabrication in Malaysia',
    keyword: 'steel ductwork fabrication Malaysia',
    intro:
      'We fabricate and assemble steel ducting systems in-house to your architectural and mechanical drawings: rectangular TDF/TDC ducts, round spiral ducts and high-temperature welded grease ducts, in galvanised iron or Grade 304/316 stainless steel.',
    highlights: [
      'Galvanised iron (JIS G3302) with TDF/TDC airtight flange connections',
      'Grade 304 / 316 stainless steel for corrosive and high-heat grease runs',
      'Round spiral lockseam ducting for exposed ceilings and industrial plants',
      'Custom offsets, plenums, turning vanes and weather cowls',
      'Internal acoustic lining or external thermal insulation available',
    ],
    suitableFor: ['Commercial buildings', 'Factories', 'Restaurants', 'Exposed ceilings'],
    whatsappTopic: 'Custom Steel Duct Fabrication (GI and Stainless Steel)',
    faq: [
      {
        q: 'Which is better for ductwork, GI or stainless steel?',
        a: 'Galvanised iron suits central air-conditioning, fresh air and general exhaust. Stainless steel is the right choice for kitchen grease exhaust and corrosive or high-heat runs.',
      },
    ],
  },
  {
    slug: 'industrial-exhaust-fan-installation-malaysia',
    label: 'Industrial Exhaust Fans',
    metaTitle: 'Industrial Exhaust Fan Installation Malaysia | Steel Duct',
    metaDescription:
      'Industrial and commercial exhaust fan installation in Malaysia. Centrifugal blowers and inline fans with anti-vibration mounts and electrical commissioning.',
    h1: 'Industrial & Commercial Exhaust Fan Installation in Malaysia',
    keyword: 'industrial exhaust fan installation Malaysia',
    intro:
      'We supply, mount and commission heavy-duty centrifugal blowers and axial inline exhaust fans for kitchens, factories and car parks, fitted on vibration-isolation mounts for quiet, continuous ventilation.',
    highlights: [
      'Backward-curved centrifugal blowers with high static pressure for long duct runs',
      'Anti-vibration isolator mounts to reduce structural vibration and noise',
      'Weatherproof motor housings with safety isolator switches',
      'Electrical connections with thermal overload protection',
    ],
    suitableFor: ['Kitchen exhaust risers', 'Factory workshops', 'Basement car parks', 'Public facilities'],
    whatsappTopic: 'Industrial Exhaust Fan and Blower Systems',
    faq: [
      {
        q: 'Do you offer routine maintenance for exhaust systems?',
        a: 'Yes. Scheduled servicing includes fan impeller cleaning, motor inspection, belt adjustment, duct checks and airflow testing.',
      },
    ],
  },
  {
    slug: 'commercial-evaporative-air-cooler-malaysia',
    label: 'Commercial Air Coolers',
    metaTitle: 'Commercial Evaporative Air Cooler Malaysia | Steel Duct',
    metaDescription:
      'Commercial evaporative air cooler installation in Malaysia for factories, open kitchens and warehouses. Lower temperatures with far less electricity than air-conditioning.',
    h1: 'Commercial Evaporative Air Cooler Installation in Malaysia',
    keyword: 'commercial evaporative air cooler Malaysia',
    intro:
      'We install commercial evaporative cooling units paired with insulated sheet metal duct distributors. They lower indoor temperatures cost-effectively in open kitchens, factories and warehouses while using much less electricity than traditional air-conditioning.',
    highlights: [
      'High-density honeycomb cooling pads for continuous fresh, cool air',
      'Custom sheet metal duct drop distributors with adjustable louvres',
      'Automated water refill, filtration and drainage',
      'Reduces heat stress in open-air kitchens and manufacturing floors',
    ],
    suitableFor: ['Manufacturing plants', 'Open-air dining', 'Commercial kitchens', 'Warehouses'],
    whatsappTopic: 'Commercial Evaporative Air Cooler Systems',
    faq: [
      {
        q: 'Where do evaporative air coolers work best?',
        a: 'In open or well-ventilated spaces such as open kitchens, workshops and warehouses, where they lower ambient temperature cost-effectively.',
      },
    ],
  },
  {
    slug: 'kitchen-hood-cleaning-malaysia',
    label: 'Kitchen Hood Cleaning',
    metaTitle: 'Kitchen Hood Cleaning Malaysia | Grease Duct Servicing',
    metaDescription:
      'Kitchen hood and grease duct cleaning in Malaysia. Scheduled servicing of exhaust hoods, ducts and fans to reduce fire risk and keep your kitchen compliant.',
    h1: 'Kitchen Hood & Grease Duct Cleaning in Malaysia',
    keyword: 'kitchen hood cleaning Malaysia',
    intro:
      'Grease build-up in hoods and ducts is a fire risk. We provide scheduled cleaning and maintenance of kitchen hoods, grease ducts and exhaust fans so your system keeps performing and stays ready for inspection.',
    highlights: [
      'Hood, baffle filter and grease trough cleaning',
      'Grease duct access and cleaning via cleanout doors',
      'Fan impeller cleaning, motor inspection and belt adjustment',
      'Airflow testing after servicing',
    ],
    suitableFor: ['Restaurants', 'Hotel kitchens', 'Food courts', 'Central kitchens'],
    whatsappTopic: 'Kitchen Hood Cleaning and Maintenance Servicing',
    faq: [
      {
        q: 'Do you offer routine maintenance for exhaust systems?',
        a: 'Yes. Scheduled servicing includes fan impeller cleaning, motor inspection, belt adjustment, duct checks and airflow testing.',
      },
    ],
  },
  {
    slug: 'odour-control-esp-smoke-filter-malaysia',
    label: 'ESP Smoke & Odour Control',
    metaTitle: 'ESP Odour Control System Malaysia | Kitchen Smoke Filter',
    metaDescription:
      'ESP smoke and odour control systems in Malaysia. Electrostatic precipitators and activated carbon filters to remove cooking smoke, oil mist and food odours.',
    h1: 'ESP Smoke & Odour Control Systems in Malaysia',
    keyword: 'ESP odour control system Malaysia',
    intro:
      'We install two-stage exhaust air purification combining electrostatic precipitators (ESP) and activated carbon filter banks to remove cooking smoke, oil mist and stubborn food odours before air is discharged outside.',
    highlights: [
      'Dual-pass ESP cells that capture grease particulates, smoke and oil mist',
      'Activated carbon filter modules to neutralise cooking odours',
      'Helps protect nearby neighbours and meet local clean air requirements',
    ],
    suitableFor: ['Shopping mall outlets', 'Shoplots near residential areas', 'Central kitchens'],
    whatsappTopic: 'ESP Smoke Filter and Odour Control Systems',
    faq: [
      {
        q: 'How do deodorising systems improve workplace comfort?',
        a: 'Integrated deodorising systems reduce persistent cooking odours, while evaporative coolers lower temperatures in open kitchens and workshops.',
      },
    ],
  },
]

export const getServicePage = (slug: string) => servicePages.find((s) => s.slug === slug)
