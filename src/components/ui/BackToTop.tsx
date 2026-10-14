'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const SHOW_AFTER_PX = 600
const RADIUS = 20
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setVisible(y > SHOW_AFTER_PX)
      setProgress(max > 0 ? Math.min(y / max, 1) : 0)
    }
    // rAF supaya kemas kini sekali setiap frame sahaja
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={[
        // Mobile: atas bar tindakan bawah. Desktop: atas butang WhatsApp terapung.
        'fixed z-40 right-4 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] lg:right-6 lg:bottom-24',
        'flex items-center justify-center w-12 h-12 rounded-full bg-zinc-950/90 backdrop-blur-md border border-white/10 text-white shadow-xl shadow-black/60',
        'transition-all duration-300 hover:border-orange-500 hover:text-orange-400',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
      ].join(' ')}
    >
      {/* Cincin progres skrol */}
      <svg aria-hidden="true" className="absolute inset-0 -rotate-90" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r={RADIUS} fill="none" stroke="rgb(249 115 22)" strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
        />
      </svg>
      <ArrowUp size={18} strokeWidth={2.5} />
    </button>
  )
}
