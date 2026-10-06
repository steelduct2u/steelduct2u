'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

interface LazySectionProps {
  children: ReactNode
  minHeight?: string
  className?: string
  threshold?: number
  rootMargin?: string
}

/**
 * LazySection
 * Only mounts and displays cards & content when user scrolls to/near the section.
 * Features a smooth fade-and-slide entry animation.
 */
export default function LazySection({
  children,
  minHeight = '420px',
  className = '',
  threshold = 0.05,
  rootMargin = '140px 0px -40px 0px',
}: LazySectionProps) {
  const [isIntersected, setIsIntersected] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setIsIntersected(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true)
          observer.unobserve(el)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <div
      ref={containerRef}
      data-visible={isIntersected}
      className={`transition-all duration-700 ease-out ${
        isIntersected
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      } ${className}`}
      style={{
        minHeight: isIntersected ? undefined : minHeight,
      }}
    >
      {children}
    </div>
  )
}
