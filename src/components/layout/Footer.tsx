import Image from 'next/image'
import Link from 'next/link'
import { waUrl, PHONE_DISPLAY } from '@/lib/whatsapp'

const WA_URL = waUrl('flutuante')

const email     = process.env.NEXT_PUBLIC_EMAIL     ?? 'contato@primelineplanejados.com.br'
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM ?? '@primeline_planejados'

const links = [
  { label: 'Portfólio', href: '/portfolio' },
  { label: 'Galeria',   href: '/galeria'   },
  { label: 'Serviços',  href: '/servicos'  },
  { label: 'Sobre',     href: '/sobre'     },
  { label: 'Blog',      href: '/blog'      },
  { label: 'Contato',   href: '/contato'   },
]

export function Footer() {
  return (
    <footer className="section--dark">
      <div className="container px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <Image src="/logo-dark.svg" alt="Prime Line Planejados" width={180} height={45} className="mb-6" />
          <p className="font-body font-light text-sm text-brand-300 leading-relaxed max-w-xs">
            Projetos exclusivos em marcenaria planejada residencial e corporativa de alto padrão em Belo Horizonte.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <p className="label-caps text-gold-light mb-6">Navegação</p>
          <ul className="space-y-3">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="font-body font-light text-sm text-brand-300 hover:text-gold-light transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <p className="label-caps text-gold-light mb-6">Contato</p>
          <ul className="space-y-3 font-body font-light text-sm text-brand-300">
            <li>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="hover:text-gold-light transition-colors">{email}</a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-light transition-colors"
              >
                {instagram}
              </a>
            </li>
            <li className="text-brand-500 pt-1 leading-relaxed">
              Rua David Maurílio Mourão, 113<br />
              Palmeiras — Belo Horizonte, MG<br />
              CEP 30575-340
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800 py-6 px-6 text-center">
        <p className="font-body text-xs text-brand-700 tracking-wide">
          © {new Date().getFullYear()} Prime Line Ambientes Planejados — Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
