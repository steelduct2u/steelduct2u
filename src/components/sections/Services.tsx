'use client'

import { useState } from 'react'
import {
  ChefHat,
  Fan,
  Snowflake,
  Sparkles,
  Hammer,
  Check,
  ArrowRight,
  ShieldCheck,
  Flame,
  Layers,
  Shield,
  CheckCircle2,
} from 'lucide-react'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import LazySection from '@/components/ui/LazySection'
import SectionHeader from '@/components/ui/SectionHeader'
import { whatsappLink } from '@/config/site'

// Bilangan spesifikasi yang ditunjuk di mobile sebelum butang "Show all"
const MOBILE_VISIBLE_SPECS = 0

interface UnifiedService {
  id: number
  badge: string
  title: string
  subtitle: string
  description: string
  highlights: string[]
  suitableFor: string[]
  Icon: typeof ChefHat
  ctaQuery: string
}

const mainServices: UnifiedService[] = [
  {
    id: 1,
    badge: 'NFPA 96 Fire Safety Standard',
    title: 'Commercial Kitchen Hood Installation',
    subtitle: 'NFPA 96 Compliant Grease Extraction & Ductwork',
    description:
      'Turnkey supply and installation of heavy-gauge Grade 304 stainless steel kitchen exhaust hoods and continuous liquid-tight welded grease ducting. Built to prevent grease leaks and meet BOMBA & local council inspection requirements.',
    highlights: [
      'Continuous liquid-tight welded seams along the entire grease duct run (built to prevent grease leaks)',
      'High-efficiency stainless steel baffle grease filters with built-in oil drainage troughs',
      'Flush-mounted high-temperature LED lighting & zero-clearance wall fitting',
      'Engineered airflow velocity (CFM) to capture cooking heat, smoke, and fumes',
      'Built to NFPA 96, BOMBA MS 1472 and local council requirements',
    ],
    suitableFor: ['Restaurants', 'Hotel Kitchens', 'Central Kitchens', 'Cafes & Food Courts'],
    Icon: ChefHat,
    ctaQuery: 'NFPA 96 Kitchen Hood Installation',
  },
  {
    id: 2,
    badge: 'In-House CNC Fabrication',
    title: 'Steel & Sheet Metal Ductwork Fabrication',
    subtitle: 'Galvanised Iron (GI) & Grade 304/316 Stainless Steel',
    description:
      'Custom in-house fabrication and on-site assembly of steel ducting systems built to exact architectural CAD drawings. We manufacture rectangular TDF/TDC ducts, round spiral ducts, and high-temperature welded grease ducts.',
    highlights: [
      'Galvanised Iron (JIS G3302) with TDF/TDC airtight flange connections and gasket seals',
      'Heavy-gauge Grade 304 / 316 Stainless Steel for corrosive and high-heat kitchen grease runs',
      'Round spiral lockseam ducting for modern exposed ceilings, gyms, and industrial plants',
      'Custom offsets, motor plenums, turning vanes, and weather cowls for tight ceiling spaces',
      'Available with internal acoustic lining or external thermal rockwool insulation',
    ],
    suitableFor: ['Commercial Buildings', 'Industrial Factories', 'Restaurants', 'Exposed Ceilings'],
    Icon: Hammer,
    ctaQuery: 'Custom Steel Duct Fabrication (GI and Stainless Steel)',
  },
  {
    id: 3,
    badge: 'Airflow & Extraction',
    title: 'Industrial & Commercial Exhaust Fan Systems',
    subtitle: 'High-Volume Centrifugal Blowers & Inline Fans',
    description:
      'Supply, mounting, and electrical commissioning of heavy-duty centrifugal blowers and axial inline exhaust fans. Fitted on vibration-isolation springs to ensure quiet, powerful, and uninterrupted 24/7 ventilation.',
    highlights: [
      'Centrifugal backward-curved blowers with high static pressure for long duct runs',
      'Open-spring anti-vibration isolator mounts preventing structural vibration and noise',
      'Weatherproof IP65 motor housings with emergency disconnect safety isolator switches',
      'Energy Commission compliant electrical connections with thermal overload protection',
    ],
    suitableFor: ['Kitchen Exhaust Risers', 'Factory Workshops', 'Basement Car Parks', 'Public Facilities'],
    Icon: Fan,
    ctaQuery: 'Industrial Exhaust Fan and Blower Systems',
  },
  {
    id: 4,
    badge: 'Energy-Efficient Cooling',
    title: 'Commercial Evaporative Air Coolers',
    subtitle: 'Cost-Effective Factory & Open-Area Temperature Control',
    description:
      'High-performance commercial evaporative cooling units paired with insulated sheet metal duct drop distributors. Helps lower indoor temperatures while using far less electricity than traditional air-conditioning.',
    highlights: [
      'High-density honeycomb evaporative cooling pads delivering continuous fresh, cool air',
      'Custom sheet metal duct drop distributors with 4-way adjustable directional louvres',
      'Automated water refill, filtration, and self-cleaning drainage system',
      'Drastically reduces workplace heat stress in open-air kitchens and manufacturing floors',
    ],
    suitableFor: ['Manufacturing Plants', 'Open-Air Dining & Mamak', 'Commercial Kitchens', 'Warehouses'],
    Icon: Snowflake,
    ctaQuery: 'Commercial Evaporative Air Cooler Systems',
  },
  {
    id: 5,
    badge: 'Clean Air & Deodorisation',
    title: 'Air Fresher, ESP & Odour Control Systems',
    subtitle: 'Electrostatic Smoke Precipitators & Active Carbon Filters',
    description:
      'Two-stage exhaust air purification combining high-voltage Electrostatic Precipitators (ESP) and activated carbon filter banks to eliminate dense cooking smoke, oil mist, and stubborn food odours before exterior discharge.',
    highlights: [
      'Dual-pass ESP cells that capture grease particulate, smoke, and oil mist',
      'Virgin coconut-shell activated carbon filter modules that neutralize intense cooking odours',
      'Complies with Department of Occupational Safety & Health (DOSH) IAQ guidelines',
      'Protects nearby commercial neighbours and complies with local council clean air bylaws',
    ],
    suitableFor: ['Shopping Mall Outlets', 'Shoplots near Residential Areas', 'High-Smell Cuisines', 'Central Kitchens'],
    Icon: Sparkles,
    ctaQuery: 'ESP Smoke Filter and Odour Control Systems',
  },
]

const ductMaterialGuide = [
  {
    title: 'Grade 304 / 316 Stainless Steel Grease Ducts',
    tag: 'Kitchen Exhaust & High Heat',
    desc: 'Heavy-gauge stainless steel with continuous TIG/MIG liquid-tight welded seams. Completely fire-rated and grease-leak proof for commercial restaurant hoods.',
    Icon: Flame,
    specs: ['NFPA 96 & BOMBA MS 1472 compliant', 'Liquid-tight welded construction', 'Gasketed cleanout access doors'],
  },
  {
    title: 'Galvanised Iron (GI) Central HVAC Ducts',
    tag: 'Central Air-Cond & Fresh Air',
    desc: 'JIS G3302 zinc-coated steel rectangular ducts with TDF/TDC flange joints. Ideal for central air-conditioning, fresh air intake, and general building exhaust.',
    Icon: Layers,
    specs: ['Anti-corrosive zinc coating', 'Airtight TDC flange joints', 'Thermal & acoustic insulation options'],
  },
  {
    title: 'Spiral Round Ducting Systems',
    tag: 'Architectural Exposed Ceilings',
    desc: 'Round spiral lockseam ducting delivering low airflow friction and a modern industrial look. Highly popular for cafes, modern gyms, and open-ceiling offices.',
    Icon: Hammer,
    specs: ['Low static pressure loss', 'Aesthetic exposed look', 'Fast slip-fit airtight rubber gasket joints'],
  },
  {
    title: 'Fire Dampers, VCDs & Custom Metal Fittings',
    tag: 'Safety & Airflow Regulation',
    desc: 'Specialised ventilation fittings including fusible-link fire dampers (FD), volume control dampers (VCD), plenum boxes, transitions, and exterior rain louvres.',
    Icon: Shield,
    specs: ['Fusible-link heat closure dampers', 'Precision CFM airflow balancing', 'Weatherproof rainproof louvres'],
  },
]

export default function Services() {
  const [expanded, setExpanded] = useState<number[]>([])
  const toggle = (id: number) =>
    setExpanded((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  return (
    <section id="services" className="relative bg-black py-16 sm:py-24 px-5 sm:px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(circle at 50% 10%, rgba(249,115,22,0.08), transparent 70%)',
        }}
      />

      <LazySection minHeight="580px">
        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="What We Supply &amp; Install"
            title="Services for Your"
            accent="Kitchen, Factory or Building"
          >
            Tell us what you&apos;re building — a restaurant kitchen, a factory floor or a commercial unit. Our CIDB-registered team designs, fabricates and installs the right ventilation system, then services it after handover.
          </SectionHeader>

          {/* ── 5 Core Service Cards (Editorial Clean Grid) ── */}
          <div className="stagger grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 mb-12 sm:mb-20">
            {mainServices.map((service, index) => {
              const ServiceIcon = service.Icon
              const isFirst = index === 0

              return (
                <div
                  key={service.id}
                  className={[
                    'card-lift group relative flex flex-col justify-between p-5 sm:p-8 rounded-2xl bg-gray-950/80 border shadow-xl',
                    isFirst
                      ? 'lg:col-span-2 border-orange-500/50 bg-gradient-to-br from-gray-950 via-black to-gray-950 shadow-orange-500/10'
                      : 'border-gray-800/90 hover:border-orange-500/40 hover:bg-gray-900/40',
                  ].join(' ')}
                >
                  <div>
                    {/* Header: Badge & Icon */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-bold tracking-wider uppercase">
                        {service.badge}
                      </span>
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 group-hover:scale-105 transition-transform duration-300">
                        <ServiceIcon size={22} strokeWidth={1.75} />
                      </div>
                    </div>

                    {/* NFPA 96 Highlight for Card 1 */}
                    {isFirst && (
                      <div className="mb-4 p-3.5 rounded-xl bg-orange-500/10 border border-orange-500/40 flex items-start gap-3">
                        <ShieldCheck size={20} className="text-orange-400 mt-0.5 flex-shrink-0" />
                        <p className="text-xs sm:text-sm text-orange-200 leading-relaxed font-medium">
                          <strong className="text-white font-bold uppercase tracking-wider block mb-0.5">
                            Built for NFPA 96 Fire Safety
                          </strong>
                          Continuous welded grease ducts that help your kitchen meet BOMBA fire audits and council licensing requirements.
                        </p>
                      </div>
                    )}

                    {/* Title & Subtitle */}
                    <h3
                      className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors mb-1 tracking-tight"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-orange-400/90 tracking-wide uppercase mb-4">
                      {service.subtitle}
                    </p>

                    {/* Description */}
                    <p
                      className="max-w-3xl text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {service.description}
                    </p>

                    {/* Key Highlights Checklist */}
                    <div className="mb-4 sm:mb-6 pt-3 sm:pt-4 border-t border-gray-900">
                      <h4
                        className="hidden sm:block text-xs font-bold tracking-widest uppercase text-orange-400 mb-3"
                        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                      >
                        Engineering Scope &amp; Specifications:
                      </h4>
                      <ul id={`service-specs-${service.id}`} className="grid grid-cols-1 gap-2.5">
                        {service.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className={[
                              'items-start gap-2.5 text-sm text-gray-200',
                              idx >= MOBILE_VISIBLE_SPECS && !expanded.includes(service.id)
                                ? 'hidden sm:flex'
                                : 'flex',
                            ].join(' ')}
                          >
                            <Check size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {service.highlights.length > MOBILE_VISIBLE_SPECS && (
                        <button
                          type="button"
                          onClick={() => toggle(service.id)}
                          aria-expanded={expanded.includes(service.id)}
                          aria-controls={`service-specs-${service.id}`}
                          className="sm:hidden -mt-1 py-2 text-sm font-semibold text-orange-400 underline underline-offset-4"
                        >
                          {expanded.includes(service.id)
                            ? 'Show less'
                            : `View ${service.highlights.length} specifications`}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Bottom: Suitable Applications & WhatsApp CTA */}
                  <div className="pt-4 border-t border-gray-900 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs text-gray-400 mr-1 font-semibold">Suitable For:</span>
                      {service.suitableFor.map((app, aIdx) => (
                        <span
                          key={aIdx}
                          className="px-2.5 py-1 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-300"
                        >
                          {app}
                        </span>
                      ))}
                    </div>

                    <a
                      href={whatsappLink(
                        `Hello Steel Duct, I would like to request a quote for ${service.ctaQuery}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 py-2 text-sm font-bold text-orange-500 hover:text-orange-400 tracking-wider uppercase transition-colors"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      <span>Get a Quote for This</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── Duct Steel Material & Specification Guide Breakdown ── */}
          <div className="rounded-3xl bg-gray-950 border border-gray-800/90 p-5 sm:p-10 mb-12 sm:mb-16 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-8 pb-5 sm:pb-6 border-b border-gray-800">
              <div>
                <span
                  className="text-xs font-bold tracking-widest uppercase text-orange-400 block mb-1"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  Technical Specification Guide
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  Duct Steel Types &amp; Material Breakdown
                </h3>
              </div>
              <p className="text-sm text-gray-300 max-w-md">
                We manufacture and assemble all duct profiles in-house to match your mechanical drawings, velocity requirements, and local council standards.
              </p>
            </div>

            <div className="stagger grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {ductMaterialGuide.map((item, idx) => {
                const ItemIcon = item.Icon
                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-black border border-gray-800/80 hover:border-orange-500/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
                          <ItemIcon size={20} strokeWidth={1.75} />
                        </div>
                        <span className="hidden sm:inline text-xs font-bold text-orange-400 uppercase tracking-wider bg-gray-900 border border-gray-800 px-2.5 py-0.5 rounded">
                          {item.tag}
                        </span>
                      </div>

                      <h4
                        className="text-sm sm:text-base font-bold text-white sm:mb-2 leading-snug"
                        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                      >
                        {item.title}
                      </h4>

                      <p
                        className="hidden sm:block text-sm text-gray-300 leading-relaxed mb-4"
                        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                      >
                        {item.desc}
                      </p>
                    </div>

                    <div className="hidden sm:block pt-3 border-t border-gray-900">
                      <ul className="space-y-2">
                        {item.specs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-center gap-2 text-xs text-gray-200">
                            <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── Authority Compliance & Fast Quote Banner ── */}
          <div className="rounded-2xl bg-gradient-to-r from-gray-950 via-black to-gray-950 border border-orange-500/40 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-400 flex-shrink-0">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h4
                  className="text-lg sm:text-xl font-extrabold text-white mb-1"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  Not sure which system you need?
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                  Send us your site photos and location on WhatsApp. We&apos;ll arrange a free site inspection and send you an itemised quotation.
                </p>
              </div>
            </div>

            <a
              href={whatsappLink('Hello Steel Duct, I would like to request a free site inspection and quotation.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-gray-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#25D366]/25 hover:-translate-y-0.5"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              <WhatsAppIcon size={18} />
              <span>Get a Free Quote</span>
            </a>
          </div>
        </div>
      </LazySection>

      {/* Bottom divider */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"
      />
    </section>
  )
}
