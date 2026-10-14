'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import {
  Maximize2,
  X,
  MapPin,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Clock,
  Wrench,
} from 'lucide-react'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import LazySection from '@/components/ui/LazySection'
import SectionHeader from '@/components/ui/SectionHeader'
import { whatsappLink } from '@/config/site'
import type { GalleryItem } from '@/types'

const galleryCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'kitchen-hood', label: 'Kitchen Hood' },
  { key: 'ducting', label: 'Ducting Installation' },
  { key: 'make-up-air', label: 'Make-Up Air Balance' },
  { key: 'air-cleaner', label: 'Air Cleaner System' },
]

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Kitchen Hood Installation',
    category: 'Kitchen Hood',
    categoryKey: 'kitchen-hood',
    description:
      'Heavy-duty construction for lasting performance. Our kitchen hood ventilation systems are custom engineered and fabricated with high-grade stainless steel to withstand the demanding thermal and grease load of high-volume commercial kitchens.',
    location: 'Klang Valley, Selangor & KL',
    leadTime: '3 – 5 Working Days',
    scope: 'Custom 304 Stainless Steel Fabrication & Full Exhaust Duct Routing',
    compliance: 'CIDB M01 Certified • BOMBA Fire Safety Compliant',
    specifications: [
      'Heavy-duty grade 304 stainless steel hood & ductwork construction',
      'Engineered for high-volume commercial kitchens & heavy-duty cooking lines',
      'Custom fabrication tailored to exact on-site ceiling & kitchen layout',
      'Optimal exhaust airflow with high-efficiency grease extraction baffle filters',
    ],
    image: '/images/gallery/kitchen-hood-installation.webp',
  },
  {
    id: 2,
    title: 'Ducting Installation',
    category: 'Ducting Installation',
    categoryKey: 'ducting',
    description:
      'Engineered for tight spaces and optimal airflow. Our exterior and interior ductwork integrates flawlessly with building architecture, maximizing exhaust efficiency while minimizing backpressure and vibration.',
    location: 'Klang Valley, Selangor & KL',
    leadTime: '4 – 7 Working Days',
    scope: 'Exterior High-Rise Wall Risers, Fan Placement & Structural Bracing',
    compliance: 'CIDB Certified Engineering • Structural Wind Load Safe',
    specifications: [
      'Custom sheet metal & exterior high-rise duct routing with weatherproof seals',
      'Engineered for tight spaces & multi-storey exterior wall risers',
      'Balanced airflow dynamics with low static pressure drop and acoustic insulation',
      'Heavy-duty standoff brackets with safe boom-lift certified installation',
    ],
    image: '/images/gallery/ducting-installation.webp',
  },
  {
    id: 3,
    title: 'Make-Up Air Balance',
    category: 'Make-Up Air Balance',
    categoryKey: 'make-up-air',
    description:
      'Complete fresh air replacement and air balance system. Designed with evaporative cooling integration to maintain balanced static pressure, prevent kitchen odor migration, and keep ambient room temperatures comfortable for kitchen crew.',
    location: 'Klang Valley, Selangor & KL',
    leadTime: '3 – 6 Working Days',
    scope: 'Fresh Air Supply Diffusers, Make-Up Air Fans & Evaporative Cooling',
    compliance: 'ASHRAE Standards Compliant • Balanced Airflow Dynamics',
    specifications: [
      'Complete make-up air & exhaust ventilation static pressure balance',
      'Evaporative fresh air cooling integration for optimal temperature control',
      'Maintains comfortable kitchen room temperature & healthy indoor air quality',
      'Even air delivery through heavy-duty ceiling-mounted distribution diffusers',
    ],
    image: '/images/gallery/make-up-air-balance.webp',
  },
  {
    id: 4,
    title: 'Air Cleaner System',
    category: 'Air Cleaner System',
    categoryKey: 'air-cleaner',
    description:
      'High-performance electrostatic precipitator (ESP) oil and smoke filtration system. Effectively eliminates heavy cooking fumes, grease particles, and smoke before exhausting to the environment, ensuring full environmental compliance.',
    location: 'Klang Valley, Selangor & KL',
    leadTime: '2 – 4 Working Days',
    scope: 'Electrostatic Precipitator (ESP) Supply, Ceiling Rigging & Power Wiring',
    compliance: 'DOE (Jabatan Alam Sekitar) Compliant • Shopping Mall Standard',
    specifications: [
      'High-efficiency electrostatic oil & smoke precipitation (high efficiency)',
      'Removes strong cooking odours, grease haze, fine particulates & cooking fumes',
      'Essential compliance for shopping malls, shoplots & enclosed commercial venues',
      'Heavy-duty ceiling mount with accessible quick-release servicing panels',
    ],
    image: '/images/gallery/air-cleaner-system.webp',
  },
]

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredItems =
    activeTab === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.categoryKey === activeTab)

  const handleOpenModal = (item: GalleryItem) => {
    setSelectedItem(item)
  }

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null)
  }, [])

  const handleNextItem = useCallback(() => {
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedItem(filteredItems[nextIndex])
  }, [selectedItem, filteredItems])

  const handlePrevItem = useCallback(() => {
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedItem(filteredItems[prevIndex])
  }, [selectedItem, filteredItems])

  // Body scroll lock management
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedItem])

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return
      if (e.key === 'Escape') handleCloseModal()
      if (e.key === 'ArrowRight') handleNextItem()
      if (e.key === 'ArrowLeft') handlePrevItem()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedItem, handleCloseModal, handleNextItem, handlePrevItem])

  return (
    <section id="gallery" className="relative bg-zinc-950 py-16 sm:py-24 px-5 sm:px-6 overflow-hidden">
      {/* Top divider with warm gradient */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
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

      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 50% 20%, rgba(249,115,22,0.08), transparent 70%)',
        }}
      />

      <LazySection>
        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Project Showcase"
            title="Our Recent"
            accent="Installations"
          >
            Real on-site work: commercial kitchen exhaust hoods, custom ductwork, make-up air systems and electrostatic smoke cleaners.
          </SectionHeader>

          {/* ── Filter Tabs (Smooth horizontal swipe on mobile, centered on desktop) ── */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-3 sm:pb-0 sm:flex-wrap sm:justify-center -mx-2 px-2 sm:mx-0 sm:px-0 mb-10 sm:mb-12">
            {galleryCategories.map((cat) => {
              const isActive = activeTab === cat.key
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveTab(cat.key)}
                  className={[
                    'whitespace-nowrap flex-shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer',
                    isActive
                      ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/25 scale-100 sm:scale-105'
                      : 'bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 hover:border-zinc-700',
                  ].join(' ')}
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* ── Mobile: karusel leret · sm+: grid 2 / 4 kolum ── */}
          <div className="stagger snap-carousel flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible no-scrollbar -mx-5 px-5 scroll-px-5 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="card-lift group relative flex flex-col w-[82%] min-[480px]:w-[60%] sm:w-auto flex-shrink-0 rounded-3xl overflow-hidden text-left cursor-pointer"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className="inline-block px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-orange-500/40 text-orange-400 text-xs font-bold tracking-wider uppercase"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* View Details Icon */}
                  <div className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-zinc-300 group-hover:text-orange-400 group-hover:border-orange-500 transition-colors duration-200">
                    <Maximize2 size={14} />
                  </div>
                </div>

                {/* Content Box */}
                <div className="flex flex-col flex-grow p-5 justify-between bg-gradient-to-b from-zinc-950 to-black">
                  <div>
                    {/* Location tag */}
                    <div className="flex items-center gap-1 text-xs text-zinc-400 mb-2 font-medium">
                      <MapPin size={13} className="text-orange-500 flex-shrink-0" />
                      <span>{item.location}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className="tracking-tight text-lg font-extrabold text-white group-hover:text-orange-400 transition-colors duration-200 mb-2 leading-snug"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      {/* Butang meliputi seluruh kad (after:inset-0) — kad boleh diklik & difokus papan kekunci */}
                      <button
                        type="button"
                        onClick={() => handleOpenModal(item)}
                        className="text-left after:absolute after:inset-0 after:content-[''] after:rounded-3xl cursor-pointer"
                      >
                        {item.title}
                      </button>
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm sm:text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {item.description}
                    </p>

                    {/* Specifications List */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {item.specifications.slice(0, 2).map((spec, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm sm:text-xs text-zinc-200">
                            <CheckCircle2
                              size={15}
                              className="text-emerald-400 flex-shrink-0 mt-0.5"
                            />
                            <span className="line-clamp-1">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card bottom action */}
                  <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-500 group-hover:text-orange-400 tracking-wide uppercase transition-colors">
                      View Specifications
                    </span>
                    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 transition-all duration-200">
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p aria-hidden="true" className="leading-relaxed sm:hidden mt-3 text-center text-xs text-zinc-500">
            Swipe to see more projects →
          </p>
        </div>
      </LazySection>

      {/* ── Gallery Lightbox Modal (Portaled to document.body) ── */}
      {mounted &&
        selectedItem &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-md animate-hero-fade"
            onClick={handleCloseModal}
          >
            {/* Modal Card – muat satu skrin: mobile bertindan padat, desktop sebelah-menyebelah */}
            <div
              className="relative w-full max-w-4xl max-h-[calc(100dvh-24px)] md:max-h-[88dvh] rounded-2xl bg-[#0c0d12] border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col md:flex-row my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Gambar ── */}
              <div className="relative w-full md:w-5/12 h-36 min-[400px]:h-44 sm:h-56 md:h-auto md:min-h-[440px] bg-zinc-950 flex-shrink-0">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0c0d12] via-transparent to-black/40 pointer-events-none" />

                {/* Kategori */}
                <span
                  className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md border border-orange-500/60 text-orange-400 text-xs font-bold tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                >
                  {selectedItem.category}
                </span>

                {/* Tutup – atas gambar supaya tidak makan ruang kandungan */}
                <button
                  type="button"
                  autoFocus
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCloseModal()
                  }}
                  aria-label="Close popup"
                  className="absolute top-2.5 right-2.5 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-black/75 hover:bg-zinc-950 text-white border border-white/25 hover:border-orange-500 backdrop-blur-md active:scale-90 transition-all"
                >
                  <X size={20} strokeWidth={2.5} />
                </button>

                {/* Sebelum / Seterusnya */}
                {filteredItems.length > 1 && (
                  <div className="absolute inset-x-2.5 bottom-2.5 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20 flex items-center justify-between pointer-events-none">
                    {[
                      { label: 'Previous project', onClick: handlePrevItem, Icon: ChevronLeft },
                      { label: 'Next project', onClick: handleNextItem, Icon: ChevronRight },
                    ].map(({ label, onClick, Icon }) => (
                      <button
                        key={label}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          onClick()
                        }}
                        aria-label={label}
                        className="pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full bg-black/75 hover:bg-zinc-950 border border-white/25 text-white backdrop-blur-md active:scale-95 transition-all"
                      >
                        <Icon size={20} strokeWidth={2.5} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* ── Kandungan ── */}
              <div className="w-full md:w-7/12 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 overflow-y-auto overscroll-contain">
                {/* Tajuk + meta */}
                <div>
                  <h3
                    className="tracking-tight text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-tight"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    {selectedItem.title}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400">
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={13} className="text-orange-500" />
                      {selectedItem.location}
                    </span>
                    {selectedItem.leadTime && (
                      <span className="inline-flex items-center gap-1 text-orange-400 font-semibold">
                        <Clock size={13} />
                        {selectedItem.leadTime}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed line-clamp-3 md:line-clamp-none">
                  {selectedItem.description}
                </p>

                {/* Skop & pematuhan – baris ringkas */}
                {(selectedItem.scope || selectedItem.compliance) && (
                  <dl className="rounded-xl bg-white/[0.03] border border-white/10 divide-y divide-white/10 text-[13px] sm:text-sm">
                    {selectedItem.scope && (
                      <div className="flex items-start gap-2.5 px-3 py-2">
                        <Wrench size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
                        <dt className="sr-only">Scope</dt>
                        <dd className="text-zinc-200 leading-snug">{selectedItem.scope}</dd>
                      </div>
                    )}
                    {selectedItem.compliance && (
                      <div className="flex items-start gap-2.5 px-3 py-2">
                        <ShieldCheck size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                        <dt className="sr-only">Compliance</dt>
                        <dd className="text-zinc-200 leading-snug">{selectedItem.compliance}</dd>
                      </div>
                    )}
                  </dl>
                )}

                {/* Spesifikasi */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                  {selectedItem.specifications.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-zinc-300 leading-snug">
                      <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={whatsappLink(
                    `Hello Steel Duct, I am interested in a project similar to: ${selectedItem.title} (${selectedItem.location}).`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 h-12 flex-shrink-0 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-zinc-950 font-extrabold text-sm uppercase tracking-wider transition-all active:scale-[0.98] shadow-lg shadow-[#25D366]/25"
                  style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <WhatsAppIcon size={18} />
                  <span>Get a Quote Like This</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  )
}
