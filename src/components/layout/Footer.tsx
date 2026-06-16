import Image from 'next/image'
import Link from 'next/link'
import { waUrl, PHONE_DISPLAY } from '@/lib/whatsapp'
import { GOOGLE_MAPS_PROFILE, GOOGLE_REVIEW_URL } from '@/lib/google'

const WA_URL = waUrl('flutuante')

const email     = process.env.NEXT_PUBLIC_EMAIL     ?? 'contato@primelineplanejados.com.br'
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM ?? '@primeline_planejados'
const pinterest = process.env.NEXT_PUBLIC_PINTEREST ?? ''
const facebook  = process.env.NEXT_PUBLIC_FACEBOOK  ?? ''
const youtube   = process.env.NEXT_PUBLIC_YOUTUBE   ?? ''

const socials = [
  {
    label: 'Instagram',
    href: `https://instagram.com/${instagram.replace('@', '')}`,
    show: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'Pinterest',
    href: pinterest,
    show: !!pinterest,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: facebook,
    show: !!facebook,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: youtube,
    show: !!youtube,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
].filter(s => s.show)

const links = [
  { label: 'Portfólio', href: '/portfolio' },
  { label: 'Serviços',  href: '/servicos'  },
  { label: 'Comprar só o projeto', href: '/projeto-de-moveis-planejados' },
  { label: 'Bairros atendidos', href: '/bairros' },
  { label: 'Cidades da Grande BH', href: '/cidades' },
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
            <li className="flex items-center gap-3">
              <a href="tel:+5531998156666" className="hover:text-gold-light transition-colors">
                {PHONE_DISPLAY}
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-brand-500 hover:text-gold-light transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.318-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.37l-.36-.213-3.75.889.934-3.638-.236-.374A9.762 9.762 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="hover:text-gold-light transition-colors">{email}</a>
            </li>
            <li>
              <div className="flex items-center gap-4 pt-1">
                {socials.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-brand-400 hover:text-gold-light transition-colors"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </li>
            <li className="text-brand-500 pt-1 leading-relaxed">
              Rua David Maurílio Mourão, 113<br />
              Palmeiras — Belo Horizonte, MG<br />
              CEP 30575-340
            </li>
            <li className="pt-3">
              <a
                href={GOOGLE_MAPS_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-brand-700 hover:border-gold-dark bg-brand-900 hover:bg-brand-800 transition-colors duration-300"
                aria-label="Ver Prime Line no Google Maps"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-body text-xs text-brand-300">Ver no Google Maps</span>
              </a>
            </li>
            <li>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-brand-500 hover:text-gold-dark transition-colors"
                aria-label="Avaliar a Prime Line no Google"
              >
                ★ Avaliar no Google
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800 py-6 px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="font-body text-xs text-brand-700 tracking-wide">
          © {new Date().getFullYear()} Prime Line Ambientes Planejados — Todos os direitos reservados
        </p>
        <Link href="/politica-de-privacidade" className="font-body text-xs text-brand-600 hover:text-brand-400 transition-colors whitespace-nowrap">
          Política de Privacidade
        </Link>
      </div>
    </footer>
  )
}
