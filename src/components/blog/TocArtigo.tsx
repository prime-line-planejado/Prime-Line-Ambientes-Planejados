import type { Heading } from '@/lib/utils'

interface Props {
  headings: Heading[]
}

export function TocArtigo({ headings }: Props) {
  if (headings.length < 3) return null

  return (
    <nav
      aria-label="Sumário do artigo"
      className="mb-10 p-6 bg-brand-100 border-l-4 border-gold-main"
    >
      <p className="font-body font-semibold text-xs tracking-widest uppercase text-brand-500 mb-4">
        Neste artigo
      </p>
      <ol className="flex flex-col gap-2">
        {headings.map((h) => (
          <li
            key={h.id}
            className={h.level === 3 ? 'pl-4' : ''}
          >
            <a
              href={`#${h.id}`}
              className="font-body font-light text-sm text-brand-700 hover:text-gold-main transition-colors duration-200 leading-snug"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
