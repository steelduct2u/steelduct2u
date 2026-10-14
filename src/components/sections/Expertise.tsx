import { Wrench, CalendarClock, Zap, Wind, Check } from 'lucide-react'
import LazySection from '@/components/ui/LazySection'
import SectionHeader from '@/components/ui/SectionHeader'
import type { ExpertiseCard } from '@/types'

const items: ExpertiseCard[] = [
  {
    id: 1,
    step: '01',
    category: 'Fit-Out & Installation',
    title: 'Installation & Ductwork',
    shortDesc: 'Supply and complete installation of ventilation ductwork and systems.',
    points: [
      'NFPA 96 kitchen hood installation',
      'Certified HVAC ventilation systems',
      'Custom GI & stainless steel ducts',
    ],
    Icon: Wrench,
  },
  {
    id: 2,
    step: '02',
    category: 'Preventative Maintenance',
    title: 'Maintenance & Servicing',
    shortDesc: 'Scheduled cleaning and servicing to keep systems running smoothly and prevent unexpected downtime.',
    points: [
      'Exhaust fan & grease duct cleaning',
      'Motor & belt tensioning',
      'Airflow CFM rebalancing',
    ],
    Icon: CalendarClock,
  },
  {
    id: 3,
    step: '03',
    category: 'Diagnostics & Rapid Repair',
    title: 'Repair & Troubleshooting',
    shortDesc: 'Rapid on-site diagnosis and repair when fans break down or ducts leak.',
    points: [
      'Fast motor & fan replacement',
      'Duct leakage & vibration sealing',
      'Rapid technician dispatch',
    ],
    Icon: Zap,
  },
  {
    id: 4,
    step: '04',
    category: 'Safety & DOSH Standards',
    title: 'Air Quality & Compliance',
    shortDesc: 'Odour control and filtration engineered to meet DOSH and safety guidelines.',
    points: [
      'Activated carbon odour filtration',
      'Fresh air positive pressure',
      'Built to meet DOSH & local council codes',
    ],
    Icon: Wind,
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="relative bg-zinc-950 py-16 sm:py-24 px-5 sm:px-6 overflow-hidden">
      {/* Top divider */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
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

      <LazySection minHeight="450px">
        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="How We Work"
            title="From Installation to"
            accent="Ongoing Support"
          >
            New installation and fit-out, preventative servicing and emergency repairs — clear, reliable service at every stage.
          </SectionHeader>

          {/* ── DESKTOP TIMELINE WITH CARDS (lg screens and above) ── */}
          <div className="hidden lg:block relative">
            <div className="stagger grid grid-cols-4 gap-6 relative">
              {items.map(({ id, step, category, title, shortDesc, points, Icon }, index) => {
                const isLast = index === items.length - 1
                return (
                  <div key={id} className="flex flex-col relative group h-full">
                    {/* Timeline Node & Horizontal Connector Rail (Centered above card) */}
                    <div className="relative flex items-center justify-center w-full mb-6">
                      {/* Horizontal Connector Rail to next node */}
                      {!isLast && (
                        <div
                          aria-hidden="true"
                          className="absolute left-1/2 w-[calc(100%+1.5rem)] top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-orange-500 via-orange-500/75 to-orange-500/35 z-0 pointer-events-none"
                        >
                          {/* Directional indicator pulse dot */}
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-400 shadow-sm shadow-orange-400" />
                        </div>
                      )}

                      {/* Solid Centered Timeline Node (Masks rail underneath) */}
                      <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-950 border-2 border-orange-500 shadow-lg shadow-orange-500/15 text-orange-500 group-hover:bg-orange-500 group-hover:text-black group-hover:scale-110 transition-all duration-300">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                    </div>

                    {/* Timeline Card */}
                    <div className="flex-1 flex flex-col justify-between rounded-2xl p-6 card-lift">
                      <div>
                        {/* Header within card */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span
                            className="text-xs font-bold tracking-wider uppercase text-orange-400/90"
                            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                          >
                            {category}
                          </span>
                          <span
                            className="text-xs font-black tracking-widest text-orange-500 uppercase px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/25"
                            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                          >
                            STEP {step}
                          </span>
                        </div>

                        {/* Card Title */}
                        <h3
                          className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors leading-snug mb-2.5 min-h-[48px] flex items-center"
                          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                        >
                          {title}
                        </h3>

                        {/* Short Description */}
                        <p
                          className="text-sm text-zinc-300 leading-relaxed mb-5 min-h-[38px]"
                          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                        >
                          {shortDesc}
                        </p>
                      </div>

                      {/* 3 Bullet Points */}
                      <div className="pt-4 border-t border-white/10">
                        <ul className="flex flex-col gap-2">
                          {points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 text-sm text-zinc-300">
                              <Check size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                              <span className="leading-snug">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ── MOBILE & TABLET VERTICAL TIMELINE WITH CARDS (< lg screens) ── */}
          <div className="block lg:hidden relative pl-6 sm:pl-8">
            {/* Continuous Vertical Timeline Connector Rail */}
            <div
              aria-hidden="true"
              className="absolute left-6 sm:left-8 top-6 bottom-12 w-[2px] bg-gradient-to-b from-orange-500 via-orange-500/70 to-zinc-800 -translate-x-1/2 z-0"
            />

            <div className="stagger flex flex-col gap-8 sm:gap-10">
              {items.map(({ id, step, category, title, shortDesc, points, Icon }) => (
                <div key={id} className="relative flex items-start gap-4 sm:gap-6 group">
                  {/* Timeline Node on vertical rail */}
                  <div className="relative z-10 -ml-6 sm:-ml-8 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-950 border-2 border-orange-500 text-orange-500 shadow-lg shadow-orange-500/20 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  {/* Card next to vertical timeline rail */}
                  <div className="flex-1 card-lift rounded-2xl p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className="text-xs font-bold tracking-wider uppercase text-orange-400/90"
                        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                      >
                        {category}
                      </span>
                      <span
                        className="text-xs font-black tracking-widest text-orange-500 uppercase px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/25"
                        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                      >
                        STEP {step}
                      </span>
                    </div>

                    <h3
                      className="text-base sm:text-lg font-bold text-white group-hover:text-orange-400 transition-colors leading-snug mb-2"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      {title}
                    </h3>

                    <p
                      className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {shortDesc}
                    </p>

                    <div className="pt-3 border-t border-white/10">
                      <ul className="flex flex-col gap-2">
                        {points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-sm sm:text-base text-zinc-300">
                            <Check size={14} className="text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="leading-snug">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
