'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import LazySection from '@/components/ui/LazySection'
import SectionHeader from '@/components/ui/SectionHeader'
import { faqs } from '@/config/faq'
import type { FAQItem } from '@/types'

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const panelId = `faq-panel-${item.id}`
  const buttonId = `faq-button-${item.id}`

  return (
    <div
      className={[
        'rounded-2xl border transition-colors duration-300',
        isOpen
          ? 'border-orange-500/50 bg-gradient-to-br from-orange-500/10 via-zinc-950 to-black'
          : 'border-white/10 bg-zinc-900/40 backdrop-blur-md hover:border-orange-500/30',
      ].join(' ')}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex items-center gap-4 p-4 sm:p-5 text-left cursor-pointer group"
        >
          <span
            aria-hidden="true"
            className={[
              'flex-shrink-0 text-sm font-black tabular-nums transition-colors',
              isOpen ? 'text-orange-500' : 'text-zinc-600 group-hover:text-zinc-400',
            ].join(' ')}
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className={[
              'flex-1 text-base sm:text-lg font-semibold leading-snug transition-colors duration-200',
              isOpen ? 'text-white' : 'text-zinc-200 group-hover:text-white',
            ].join(' ')}
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            {item.question}
          </span>
          <span
            aria-hidden="true"
            className={[
              'flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300',
              isOpen
                ? 'rotate-180 bg-orange-500 border-orange-500 text-black'
                : 'border-zinc-700 text-zinc-400 group-hover:border-orange-500/60 group-hover:text-orange-400',
            ].join(' ')}
          >
            <ChevronDown size={18} strokeWidth={2.5} />
          </span>
        </button>
      </h3>

      {/* grid-rows 0fr → 1fr: animasi tinggi sebenar, tiada had max-height */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={[
          'grid transition-[grid-template-rows] duration-300 ease-out',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        ].join(' ')}
      >
        <div className="overflow-hidden" inert={!isOpen}>
          <p
            className="px-4 sm:px-5 pb-5 sm:pl-[3.75rem] text-sm sm:text-base text-zinc-400 leading-relaxed"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1)

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faq" className="relative bg-zinc-950 py-16 sm:py-24 px-5 sm:px-6 overflow-hidden">
      {/* Top divider */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
      />

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(249,115,22,0.07) 0%, transparent 70%)',
        }}
      />

      <LazySection minHeight="500px">
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Clear Answers"
            title="Frequently Asked"
            accent="Questions"
          >
            Answers on licensing, commercial kitchen codes, duct materials and installation timelines in Malaysia.
          </SectionHeader>

          <div className="stagger flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                item={faq}
                index={index}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
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
