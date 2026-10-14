import {
  Award,
  Hammer,
  ChefHat,
  ShieldCheck,
} from 'lucide-react'
import CountUp from '@/components/ui/CountUp'
import type { StatFact } from '@/types'

// ── The 4 Best Engineering & Performance Facts for Steel Duct ──
const bestFacts: StatFact[] = [
  {
    id: 1,
    value: 10,
    suffix: '+ Years',
    label: 'CIDB M01 Contractor',
    sub: 'Certified HVAC Specialists',
    Icon: Award,
  },
  {
    id: 2,
    value: 1500,
    suffix: '+',
    label: 'Ducts Installed',
    sub: 'Nationwide Service',
    Icon: Hammer,
  },
  {
    id: 3,
    value: 500,
    suffix: '+',
    label: 'Kitchen Hoods Fitted',
    sub: 'NFPA 96 & Certified HVAC',
    Icon: ChefHat,
  },
  {
    id: 4,
    value: 100,
    suffix: '%',
    label: 'Safety Code Compliant',
    sub: 'BOMBA & ST Standards',
    Icon: ShieldCheck,
  },
]

export default function StatsBar() {


  return (
    <section
      aria-label="Verified engineering performance facts"
      className="relative z-30 translate-y-0 mt-6 sm:mt-0 sm:-translate-y-8 lg:-translate-y-1/2 mb-10 sm:-mb-10 lg:-mb-14 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl bg-zinc-950/95 backdrop-blur-xl border border-white/10 hover:border-zinc-700 transition-colors duration-300 shadow-2xl shadow-black/90 p-5 sm:p-6 lg:py-6 lg:px-8 overflow-hidden">

          {/* Background subtle radial gradient */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-500/[0.03] to-transparent"
          />

          {/* Top header status bar (Single set, no dots, pure balance) */}
          <div className="relative z-10 flex items-center justify-between gap-2 mb-5 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span
                className="text-xs font-semibold tracking-widest uppercase text-zinc-400"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                Service Verification &amp; Engineering Standards
              </span>
            </div>

            <span
              className="text-xs font-bold tracking-widest uppercase text-orange-500"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Malaysia Nationwide
            </span>
          </div>

          {/* 4 Balanced Number Fact Columns */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-zinc-800/80">
            {bestFacts.map(({ id, value, prefix, suffix, label, sub, Icon }) => (
              <div
                key={id}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3.5 sm:p-4 lg:p-0 lg:px-6 xl:px-7 first:lg:pl-2 last:lg:pr-2 rounded-xl lg:rounded-none bg-zinc-900/40 lg:bg-transparent border border-white/10 lg:border-0 hover:border-orange-500/30 transition-all duration-300 justify-start"
              >
                {/* Icon */}
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-500 group-hover:border-orange-500/60 group-hover:bg-orange-500/15 group-hover:scale-105 transition-all duration-300 shadow-sm">
                  <Icon size={22} strokeWidth={1.75} />
                </div>

                {/* Text Block with Continuous Looping Animated Number */}
                <div className="flex flex-col min-w-0">
                  <span
                    className="text-xl sm:text-3xl font-black text-white leading-none tracking-tight"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    {prefix}
                    <CountUp value={value} />
                    {suffix}
                  </span>
                  <span
                    className="text-xs font-bold tracking-wider uppercase text-orange-500 mt-1.5 leading-snug"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    {label}
                  </span>
                  <span
                    className="hidden sm:block text-sm text-zinc-400 mt-0.5 leading-snug"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
