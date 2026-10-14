import { UtensilsCrossed, Factory, Building2, HeartPulse, ShoppingBag, Server } from 'lucide-react'
import LazySection from '@/components/ui/LazySection'
import SectionHeader from '@/components/ui/SectionHeader'
import type { SectorItem } from '@/types'

const sectors: SectorItem[] = [
  {
    id: 1,
    title: 'Commercial Kitchens & Restaurants',
    description:
      'NFPA 96 compliant kitchen hood installation, custom grease ductwork, and fire-safe exhaust systems engineered by certified HVAC specialists for restaurants, hotel galleys, and central kitchens.',
    Icon: UtensilsCrossed,
  },
  {
    id: 2,
    title: 'Factories & Industrial Warehouses',
    description:
      'Industrial-grade ventilation, high-volume exhaust fans, and custom duct steel fabrication for manufacturing facilities, workshops, and production cleanrooms.',
    Icon: Factory,
  },
  {
    id: 3,
    title: 'Corporate Office Towers',
    description:
      'Centralised HVAC systems, VRV/VRF ducting networks, and fresh air distribution ensuring consistent climate control and fresh air circulation across multi-storey buildings.',
    Icon: Building2,
  },
  {
    id: 4,
    title: 'Hospitals & Healthcare Clinics',
    description:
      'Critical air filtration, pressure-controlled HVAC installations, and clean ventilation ductwork preventing cross-contamination in line with health authority guidelines.',
    Icon: HeartPulse,
  },
  {
    id: 5,
    title: 'Shopping Malls & Retail Centres',
    description:
      'High-capacity central cooling and mechanical ventilation systems engineered to balance energy efficiency with maximum comfort for high-density public visitor traffic.',
    Icon: ShoppingBag,
  },
  {
    id: 6,
    title: 'Data Centres & Tech Facilities',
    description:
      'Precision cooling duct systems maintaining tight temperature and humidity control 24/7 to safeguard mission-critical server hardware from heat downtime.',
    Icon: Server,
  },
]

export default function Sectors() {
  return (
    <section id="sectors" className="relative bg-zinc-950 py-16 sm:py-24 px-5 sm:px-6">
      {/* Top divider */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
      />

      {/* Grid texture for background (kotak-kotak) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 10%, rgba(249,115,22,0.06), transparent 70%)',
        }}
      />

      <LazySection minHeight="520px">
        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Who We Work With"
            title="Built for"
            accent="Your Industry"
          >
            Whether you run a restaurant, a factory or a commercial building, we size the ductwork, fans and filters to suit your space and the regulations that apply to it.
          </SectionHeader>

          {/* Sectors Grid (6 items — Perfectly Balanced Heights & Baselines) */}
          <div className="stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {sectors.map(({ id, title, description, Icon }) => (
              <div
                key={id}
                className="card-lift group relative flex flex-col justify-between p-5 sm:p-7 rounded-2xl overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-500 mb-3 sm:mb-5 group-hover:scale-105 transition-transform duration-300">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3
                    className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors duration-200 mb-2.5 tracking-tight"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm text-zinc-400 group-hover:text-zinc-400 leading-relaxed transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Bottom divider */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
      />
    </section>
  )
}
