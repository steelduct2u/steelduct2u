import type { LucideIcon } from 'lucide-react'

export interface ExpertiseCard {
  id: number
  step: string
  category: string
  title: string
  shortDesc: string
  points: string[]
  Icon: LucideIcon
}

export interface SectorItem {
  id: number
  title: string
  description: string
  Icon: LucideIcon
}

export interface FAQItem {
  id: number
  question: string
  answer: string
}

export interface StatFact {
  id: number
  value: number
  prefix?: string
  suffix?: string
  label: string
  sub: string
  Icon: LucideIcon
}

export interface HeroSlide {
  id: number
  category: string
  label: string
  line1: string
  line2: string
  description: string
  bgImage: string
  align: 'left' | 'right'
  Icon: LucideIcon
  ctaLabel: string
  ctaHref: string
  secondaryLabel: string
  secondaryHref: string
}

export interface GalleryItem {
  id: number
  title: string
  category: string
  categoryKey: string
  description: string
  location: string
  specifications: string[]
  image: string
  scope?: string
  compliance?: string
  leadTime?: string
}
