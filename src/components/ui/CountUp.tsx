'use client'

import { useEffect, useRef, useState } from 'react'

const DURATION_MS = 1600

/**
 * Nombor mengira naik bila kelihatan. HTML awal (SSR) memaparkan nilai akhir,
 * jadi enjin carian dan pelayar tanpa JS tetap nampak nombor sebenar.
 */
export default function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1)
          const eased = 1 - Math.pow(1 - t, 3) // ease-out cubic
          setDisplay(Math.round(value * eased))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        setDisplay(0)
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return <span ref={ref}>{display.toLocaleString('en-MY')}</span>
}
