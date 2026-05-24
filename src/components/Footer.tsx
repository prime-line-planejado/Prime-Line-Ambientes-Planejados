import Image from 'next/image'

const email     = process.env.NEXT_PUBLIC_EMAIL     ?? 'contato@primelineplanejados.com.br'
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM ?? '@primeline_planejados'
const whatsapp  = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5531998156666'
const whatsappUrl = `https://wa.me/5531998156666?text=Ol%C3%A1!%20Vi%20o%20trabalho%20de%20voc%C3%AAs%20%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%20Pode%20me%20contar%20como%20funciona%20o%20processo%3F`

const quickLinks = [
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Portfólio',    href: '#portfolio'    },
  { label: 'Depoimentos',  href: '#depoimentos'  },
  { label: 'Contato',      href: '#contato'      },
]

export function Footer() {
  return (
    <footer className="bg-brand-900 border-t border-brand-800">
      <div className="container-xl px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <Image src="/logo.svg" alt="Prime Line" width={150} height={40} className="mb-5" />
          <p className="font-sans font-light text-sm text-brand-400 leading-relaxed max-w-xs">
            Projetos exclusivos em marcenaria planejada, para quem valoriza cada detalhe do seu espaço.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="label-caps text-gold-500 mb-6">Navegação</p>
          <ul className="space-y-3">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="font-sans font-light text-sm text-brand-400 hover:text-gold-400 transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="label-caps text-gold-500 mb-6">Contato</p>
          <ul className="space-y-3 font-sans font-light text-sm text-brand-400">
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                 className="hover:text-gold-400 transition-colors">
                {whatsapp.replace(/^55(\d{2})(\d{5})(\d{4})$/, '+55 ($1) $2-$3')}
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="hover:text-gold-400 transition-colors">
                {email}
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400 transition-colors"
              >
                {instagram}
              </a>
            </li>
            <li className="text-brand-600">Belo Horizonte, MG</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800 py-6 px-6 text-center">
        <p className="font-sans text-xs text-brand-700 tracking-wide">
          © {new Date().getFullYear()} Prime Line Ambientes Planejados — Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
