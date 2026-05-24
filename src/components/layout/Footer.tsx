import Image from 'next/image'
import Link from 'next/link'

const WA_URL = 'https://wa.me/5531998156666?text=Ol%C3%A1!%20Vi%20o%20trabalho%20de%20voc%C3%AAs%20%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%20Pode%20me%20contar%20como%20funciona%20o%20processo%3F'

const email     = process.env.NEXT_PUBLIC_EMAIL     ?? 'contato@primelineplanejados.com.br'
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM ?? '@primeline_planejados'

const links = [
  { label: 'Portfólio', href: '/portfolio' },
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
                +55 (31) 99815-6666
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
            <li className="text-brand-500 pt-1">Belo Horizonte, MG</li>
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
