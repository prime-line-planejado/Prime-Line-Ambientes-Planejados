'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { waUrl } from '@/lib/whatsapp'

const WA_URL = waUrl('flutuante')

const navLinks = [
  { label: 'Portfólio',  href: '/portfolio' },
  { label: 'Galeria',    href: '/galeria'   },
  { label: 'Serviços',   href: '/servicos'  },
  { label: 'Sobre',      href: '/sobre'     },
  { label: 'Blog',       href: '/blog'      },
  { label: 'Contato',    href: '/contato'   },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-brand-50 border-b border-brand-200">
      <div className="container flex items-center justify-between h-16 px-6">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
          <Image src="/logo.svg" alt="Prime Line Planejados" width={180} height={45} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`label-caps transition-colors duration-200 ${
                pathname.startsWith(href)
                  ? 'text-brand-900'
                  : 'text-brand-500 hover:text-brand-900'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-outline py-2.5 px-6"
        >
          Solicitar Orçamento
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-px bg-brand-800 transition-transform duration-200 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-px bg-brand-800 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-brand-800 transition-transform duration-200 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-brand-50 border-t border-brand-200 px-6 py-8 flex flex-col gap-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`label-caps ${pathname.startsWith(href) ? 'text-brand-900' : 'text-brand-500'}`}
            >
              {label}
            </Link>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-outline self-start mt-2"
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  )
}
