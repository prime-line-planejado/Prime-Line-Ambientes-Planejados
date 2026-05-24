'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Portfólio',    href: '#portfolio'    },
  { label: 'Depoimentos',  href: '#depoimentos'  },
  { label: 'Contato',      href: '#contato'      },
]

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5531998156666'
const whatsappUrl = `https://wa.me/${whatsapp}?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento.`

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-brand-900/95 backdrop-blur-sm border-b border-brand-800">
      <div className="container-xl flex items-center justify-between h-16 px-6">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.svg" alt="Prime Line Ambientes Planejados" width={160} height={43} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="label-caps text-brand-300 hover:text-gold-400 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-outline py-2.5 px-6"
        >
          Solicitar Orçamento
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-px bg-brand-200 transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-brand-200 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-brand-200 transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-900 border-t border-brand-800 px-6 py-6 flex flex-col gap-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="label-caps text-brand-300 hover:text-gold-400 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline self-start py-3"
            onClick={() => setOpen(false)}
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  )
}
