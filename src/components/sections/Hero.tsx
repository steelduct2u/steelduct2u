'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { preload } from 'react-dom'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChefHat,
  Fan,
  Snowflake,
  Sparkles,
  Building2,
  Hammer,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import type { HeroSlide } from '@/types'
import { whatsappLink } from '@/config/site'

const slides: HeroSlide[] = [
  {
    id: 1,
    category: 'Engineering & Contracting',
    label: 'HVAC Contractor',
    line1: 'Kitchen Hood & Ductwork',
    line2: 'Installation Contractor',
    description:
      'Opening a restaurant, upgrading a kitchen or ventilating a factory? We supply and install kitchen exhaust hoods, steel ductwork and exhaust fans across Malaysia — starting with a free site inspection.',
    bgImage: '/images/hero/slide-1-hvac.webp',
    align: 'left',
    Icon: Building2,
    ctaLabel: 'Get a Free Quote',
    ctaHref:
      whatsappLink('Hello Steel Duct, I would like to request a quote for HVAC and ventilation services.'),
    secondaryLabel: 'View Services',
    secondaryHref: '#services',
  },
  {
    id: 2,
    category: 'Kitchen Hoods • NFPA 96 Compliant',
    label: 'Kitchen Hood Installation',
    line1: 'NFPA 96 Kitchen Hood',
    line2: 'Installation & Ductwork',
    description:
      'Certified HVAC supply and installation of commercial kitchen hood systems, continuous liquid-tight welded grease ductwork, and fire safety ventilation compliant with NFPA 96 standards.',
    bgImage: '/images/hero/slide-2-kitchen-hood.webp',
    align: 'right',
    Icon: ChefHat,
    ctaLabel: 'Get a Free Quote',
    ctaHref:
      whatsappLink('Hello Steel Duct, I would like to request a quote for NFPA 96 Kitchen Hood Installation.'),
    secondaryLabel: 'View Services',
    secondaryHref: '#services',
  },
  {
    id: 3,
    category: 'Airflow & Extraction',
    label: 'Exhaust Fan',
    line1: 'Industrial & Commercial',
    line2: 'Exhaust Fan Systems',
    description:
      'Supply and installation of industrial and residential exhaust fans for kitchens, bathrooms, and commercial facilities — engineered for quiet, continuous ventilation.',
    bgImage: '/images/hero/slide-3-exhaust-fan.webp',
    align: 'left',
    Icon: Fan,
    ctaLabel: 'Get a Free Quote',
    ctaHref:
      whatsappLink('Hello Steel Duct, I would like to request a quote for Exhaust Fan Systems.'),
    secondaryLabel: 'View Services',
    secondaryHref: '#services',
  },
  {
    id: 4,
    category: 'Temperature Control',
    label: 'Air Cooler',
    line1: 'Energy-Efficient',
    line2: 'Commercial Air Coolers',
    description:
      'Installation and servicing of evaporative and mechanical air cooling units suited for both open commercial areas, kitchens, and enclosed residential spaces.',
    bgImage: '/images/hero/slide-4-air-cooler.webp',
    align: 'right',
    Icon: Snowflake,
    ctaLabel: 'Get a Free Quote',
    ctaHref:
      whatsappLink('Hello Steel Duct, I would like to request a quote for Commercial Air Coolers.'),
    secondaryLabel: 'View Services',
    secondaryHref: '#services',
  },
  {
    id: 5,
    category: 'Air Quality & Deodorisation',
    label: 'Air Fresher',
    line1: 'Indoor Air Quality &',
    line2: 'Odour Control Systems',
    description:
      'Integrated air freshening and deodorizing systems designed to neutralize stubborn cooking odours, reduce airborne impurities, and maintain a cleaner indoor atmosphere.',
    bgImage: '/images/hero/slide-5-air-fresher.webp',
    align: 'left',
    Icon: Sparkles,
    ctaLabel: 'Get a Free Quote',
    ctaHref:
      whatsappLink('Hello Steel Duct, I would like to request a quote for Air Fresher and Odour Control.'),
    secondaryLabel: 'View Services',
    secondaryHref: '#services',
  },
  {
    id: 6,
    category: 'Ductwork Specialisation',
    label: 'Duct Steel',
    line1: 'Precision Steel',
    line2: 'Duct Installation',
    description:
      'Supply and installation of stainless steel grease ducts and galvanised iron HVAC ductwork — precisely fitted to your site drawings with full compliance to Malaysian fire safety and health codes.',
    bgImage: '/images/hero/slide-6-duct-steel.webp',
    align: 'right',
    Icon: Hammer,
    ctaLabel: 'Get a Free Quote',
    ctaHref:
      whatsappLink('Hello Steel Duct, I would like to request a quote for duct steel installation.'),
    secondaryLabel: 'View Services',
    secondaryHref: '#services',
  },
]

const AUTOPLAY_INTERVAL = 7500

// Versi 768px untuk telefon, versi penuh (1376px) untuk tablet/desktop
const heroSrcSet = (src: string) => `${src.replace('.webp', '-768.webp')} 768w, ${src} 1376w`

export default function Hero() {
  // Preload gambar LCP (slide pertama) dengan saiz yang sesuai untuk peranti
  preload(slides[0].bgImage, {
    as: 'image',
    imageSrcSet: heroSrcSet(slides[0].bgImage),
    imageSizes: '100vw',
    fetchPriority: 'high',
  })

  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [animating, setAnimating] = useState(false)
  // animKey forces React to fully remount animated elements on every slide change,
  // which restarts CSS animations fresh — the industry-standard approach.
  const [animKey, setAnimKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [visits, setVisits] = useState<number[]>(() => slides.map(() => 0))

  // Lazy load slides: only the current slide plus the next one, so mobile
  // visitors don't download every slide image up front.
  const [loadedImages, setLoadedImages] = useState<number[]>([0])

  useEffect(() => {
    const upcoming = (current + 1) % slides.length
    const idleTimer = setTimeout(() => {
      setLoadedImages((prev) => (prev.includes(upcoming) ? prev : [...prev, upcoming]))
    }, 1500)
    return () => clearTimeout(idleTimer)
  }, [current])

  const goTo = useCallback(
    (index: number) => {
      if (animating) return
      setAnimating(true)
      setLoadedImages((prev) => (prev.includes(index) ? prev : [...prev, index]))
      setCurrent(index)
      setVisits((v) => v.map((n, i) => (i === index ? n + 1 : n)))
      setAnimKey((k) => k + 1) // bump key → remounts all animated children
      setTimeout(() => setAnimating(false), 350)
    },
    [animating],
  )

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    if (paused) return
    timerRef.current = setTimeout(next, AUTOPLAY_INTERVAL)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [current, paused, next])

  const slide = slides[current]
  const CurrentIcon = slide.Icon
  const isLeft = slide.align === 'left'

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-zinc-950 pt-28 pb-44 lg:pb-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* h1 tetap (keyword utama) — tajuk slide visual ialah <p> supaya h1 tidak bertukar */}
      <h1 className="sr-only">Kitchen Hood Installation Malaysia — NFPA 96 HVAC &amp; Steel Ductwork Contractor</h1>
      {/* ── Background Images Layer with Next.js Image Optimization & Priority Preload ── */}
      {slides.map((s, idx) => {
        const isCurrent = idx === current
        const isLoaded = loadedImages.includes(idx)
        if (!isLoaded && !isCurrent) return null

        return (
          <div
            key={s.bgImage}
            aria-hidden="true"
            className={[
              'absolute inset-0 transition-opacity duration-[400ms] ease-in-out',
              isCurrent ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none -z-10',
            ].join(' ')}
          >
            {/* Ken Burns: zoom perlahan; key berubah hanya bila slide ini diaktifkan semula */}
            <div
              key={`kb-${visits[idx]}`}
              className={[
                'absolute inset-0',
                idx % 2 === 0 ? 'hero-kenburns' : 'hero-kenburns-alt',
              ].join(' ')}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- static export: srcset manual */}
              <img
                src={s.bgImage}
                srcSet={heroSrcSet(s.bgImage)}
                sizes="100vw"
                alt={idx === 0 ? 'Kitchen hood and ductwork installation by Steel Duct in Malaysia' : ''}
                decoding="async"
                fetchPriority={idx === 0 ? 'high' : 'low'}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 h-full w-full object-cover object-center select-none pointer-events-none"
              />
            </div>
          </div>
        )
      })}

      {/* ── Dynamic Directional Dark Gradients for Text Legibility ── */}
      <div
        aria-hidden="true"
        className={[
          'pointer-events-none absolute inset-0 transition-all duration-[400ms] z-10',
          isLeft
            ? 'bg-gradient-to-r from-black/95 via-black/85 lg:via-black/75 to-black/50 lg:to-black/25'
            : 'bg-gradient-to-r lg:bg-gradient-to-l from-black/95 via-black/85 lg:via-black/75 to-black/50 lg:to-black/25',
        ].join(' ')}
      />

      {/* ── Top and Bottom Vignette Overlays ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 18%, transparent 80%, rgba(0,0,0,0.95) 100%)',
        }}
      />

      {/* ── Top accent border ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent z-20"
      />

      {/* ── Main Content Container with Left / Right Alternation on Desktop ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* Content Box: Strictly Alternating Left (1, 3, 5) / Right (2, 4, 6) on Desktop */}
        <div
          className={[
            'max-w-3xl',
            isLeft
              ? 'lg:mr-auto text-left items-start'
              : 'lg:ml-auto text-left lg:text-right items-start lg:items-end',
          ].join(' ')}
        >
          {/* ── Semua content fade up SERENTAK sebagai satu blok ── */}
          <div key={`content-${animKey}`} className={animKey > 0 ? 'hero-stagger' : undefined}>

            {/* Decorative Icon */}
            <div
              className={[
                'flex mb-5',
                isLeft ? 'justify-start' : 'justify-start lg:justify-end',
              ].join(' ')}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-orange-400 backdrop-blur-md shadow-lg shadow-black/50">
                <CurrentIcon size={26} strokeWidth={1.75} />
              </div>
            </div>

            {/* Category Eyebrow */}
            <div
              className={[
                'flex items-center gap-2.5 mb-4 min-h-[24px]',
                isLeft ? 'justify-start' : 'justify-start lg:justify-end',
              ].join(' ')}
            >
              <span className="h-px w-6 bg-orange-500" />
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                {slide.category}
              </span>
              <span className="h-px w-6 bg-orange-500" />
            </div>

            {/* Main Headline */}
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] font-extrabold leading-[1.18] tracking-tight text-white mb-6 drop-shadow-md"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              <span className="block text-white lg:whitespace-nowrap">{slide.line1}</span>
              <span className={['block text-orange-500 lg:whitespace-nowrap', animKey > 0 ? 'hero-reveal' : ''].join(' ')}>{slide.line2}</span>
              <span
                aria-hidden="true"
                className={[
                  'hero-underline block mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-300',
                  isLeft ? '' : 'lg:ml-auto hero-underline--right',
                ].join(' ')}
              />
            </p>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-zinc-200 leading-relaxed mb-8 drop-shadow"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              {slide.description}
            </p>

            {/* Call-To-Action Buttons */}
            <div
              className={[
                'flex flex-col sm:flex-row items-start gap-4',
                isLeft ? 'justify-start' : 'justify-start lg:justify-end',
              ].join(' ')}
            >
              <a
                href={slide.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={slide.ctaLabel}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md bg-[#25D366] hover:bg-[#20ba5a] text-zinc-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-[#25D366]/30 hover:-translate-y-px"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                <WhatsAppIcon size={18} />
                <span>{slide.ctaLabel}</span>
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
              <a
                href={slide.secondaryHref}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-black/50 backdrop-blur-md border border-zinc-700 hover:border-orange-500 text-zinc-200 hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                {slide.secondaryLabel}
              </a>
            </div>

            {/* Value & Guarantee Strip */}
            <div
              className={[
                'mt-7 pt-5 border-t border-white/10 flex flex-wrap items-center gap-2.5 sm:gap-3',
                isLeft ? 'justify-start' : 'justify-start lg:justify-end',
              ].join(' ')}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold backdrop-blur-md">
                <CheckCircle2 size={14} className="text-orange-500 flex-shrink-0" />
                <span>Free Site Inspection &amp; Advice</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-zinc-200 text-xs font-medium backdrop-blur-md">
                <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                <span>Transparent Itemised Quotation</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-zinc-200 text-xs font-medium backdrop-blur-md">
                <ShieldCheck size={14} className="text-orange-400 flex-shrink-0" />
                <span>Quality Within Budget. Guaranteed.</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Side Prev/Next Arrows (Desktop & Tablet — hidden on mobile to avoid overlapping text) ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-black/70 backdrop-blur-md border border-zinc-600 hover:border-orange-500 hover:bg-orange-500/20 text-white hover:text-orange-400 transition-all duration-200 cursor-pointer shadow-xl"
      >
        <ChevronLeft size={22} strokeWidth={2.5} />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 items-center justify-center w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-black/70 backdrop-blur-md border border-zinc-600 hover:border-orange-500 hover:bg-orange-500/20 text-white hover:text-orange-400 transition-all duration-200 cursor-pointer shadow-xl"
      >
        <ChevronRight size={22} strokeWidth={2.5} />
      </button>

      {/* ── Bottom Navigation Bar (Dots + Mobile Arrows integrated at bottom, 100% free of text overlap) ── */}
      <div
        className="absolute bottom-24 lg:bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-3 px-4"
      >
        {/* Mobile Prev Arrow */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-zinc-300 active:bg-orange-500 active:text-black transition-colors"
        >
          <ChevronLeft size={16} strokeWidth={2.5} />
        </button>

        {/* Slide counter */}
        <span
          aria-hidden="true"
          className="hidden md:inline text-xs font-bold tracking-[0.2em] text-zinc-400 tabular-nums mr-2"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
        >
          <span className="text-white">{String(current + 1).padStart(2, '0')}</span>
          {' / '}
          {String(slides.length).padStart(2, '0')}
        </span>

        {/* Dots Selection */}
        <div
          role="tablist"
          aria-label="Hero slide selection"
          className="flex items-center justify-center gap-2"
        >
          {slides.map((s, i) => (
            <button
              key={s.label}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}: ${s.label}`}
              onClick={() => goTo(i)}
              className="relative flex items-center justify-center cursor-pointer"
              style={{ width: '32px', height: '32px' }}
            >
              <span
                className="relative block overflow-hidden rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '28px' : '8px',
                  height: '8px',
                  backgroundColor: i === current ? 'rgb(75 85 99)' : 'rgb(156 163 175)',
                }}
              >
                {i === current && (
                  <span
                    key={`progress-${animKey}`}
                    className="hero-progress absolute inset-0 rounded-full bg-orange-500"
                    style={{
                      animationDuration: `${AUTOPLAY_INTERVAL}ms`,
                      animationPlayState: paused ? 'paused' : 'running',
                    }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Next Arrow */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-zinc-300 active:bg-orange-500 active:text-black transition-colors"
        >
          <ChevronRight size={16} strokeWidth={2.5} />
        </button>
      </div>

    </section>
  )
}
