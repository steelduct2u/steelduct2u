'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import LazySection from '@/components/ui/LazySection'
import SectionHeader from '@/components/ui/SectionHeader'
import type { FAQItem } from '@/types'

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'What is the difference between a standard aircond and a professional HVAC system?',
    answer:
      'A standard residential air conditioner only cools an individual room. A professional HVAC (Heating, Ventilation & Air Conditioning) system is a comprehensive, building-wide engineering solution that regulates temperature, fresh air intake, humidity, and indoor air quality simultaneously. HVAC systems are built for commercial, food & beverage, and industrial facilities requiring certified engineering contractors.',
  },
  {
    id: 2,
    question: 'Is Steel Duct CIDB certified for HVAC and ductwork in Malaysia?',
    answer:
      'Yes. Steel Duct is registered with the Construction Industry Development Board (CIDB) Malaysia under the M01 category (Air Conditioning and Ventilation Systems). All electrical and mechanical installations strictly comply with the Energy Commission of Malaysia (ST) and local fire authority standards.',
  },
  {
    id: 3,
    question: 'Why is NFPA 96 compliance essential for commercial kitchen hood installation?',
    answer:
      'Commercial kitchen exhaust hoods produce high-temperature grease, oil vapors, and heat. Standard ductwork is susceptible to grease leaks and severe fire hazards. As Certified HVAC contractors, we install NFPA 96 compliant heavy-gauge galvanised iron and grade 304/316 stainless steel ductwork with liquid-tight welded joints that meet strict BOMBA fire safety codes, NFPA 96 standards, and local health department requirements.',
  },
  {
    id: 4,
    question: 'How long does a commercial kitchen hood duct installation take?',
    answer:
      'A standard kitchen hood duct installation typically takes 1 to 2 working days. Larger commercial kitchens, multi-storey duct routing, or custom hood configurations may require 3 to 4 days including CFM airflow testing and commissioning. We conduct site measurements beforehand to ensure a fast, precise fit.',
  },
  {
    id: 5,
    question: 'Do you provide maintenance and servicing for exhaust fans and duct systems?',
    answer:
      'Yes. We provide scheduled preventative maintenance contracts covering exhaust fan impeller degreasing, motor and belt tension checks, duct grease inspection, vibration diagnostics, and CFM airflow balancing. Routine servicing prolongs equipment lifespan and prevents grease fire risks.',
  },
  {
    id: 6,
    question: 'Can your air cooling and air fresher systems improve Indoor Air Quality (IAQ)?',
    answer:
      'Yes. IAQ management is a core engineering specialty. We install evaporative air cooling and integrated deodorizing fresh-air filtration units that remove airborne particulates, effectively reduce persistent cooking odours, and supply positive fresh-air pressure in compliance with DOSH and ASHRAE IAQ guidelines.',
  },
]

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
