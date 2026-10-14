import type { ReactNode } from 'react'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  /** Bahagian tajuk yang ditonjolkan dengan gradient oren */
  accent: string
  children?: ReactNode
  /** Tajuk h2 diberi id supaya seksyen boleh dirujuk dengan aria-labelledby */
  id?: string
}

export default function SectionHeader({ eyebrow, title, accent, children, id }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4 mb-10 sm:mb-14">
      <span
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-xs font-semibold tracking-[0.2em] uppercase text-orange-400"
        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
      >
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_2px_rgba(249,115,22,0.6)]" />
        {eyebrow}
      </span>

      <h2
        id={id}
        className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
        style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
      >
        {title}{' '}
        <span className="text-gradient-orange">{accent}</span>
      </h2>

      {children && (
        <p
          className="max-w-2xl text-zinc-400 text-sm sm:text-base leading-relaxed"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          {children}
        </p>
      )}
    </div>
  )
}
