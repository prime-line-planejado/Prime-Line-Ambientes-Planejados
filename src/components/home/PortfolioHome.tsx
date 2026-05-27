import Image from 'next/image'
import Link from 'next/link'
import { projetos } from '@/data/projetos'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function PortfolioHome() {
  const destaques = projetos.filter(p => p.destaque).slice(0, 6)

  return (
    <section className="section bg-brand-50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16" data-animate>
          <SectionTitle label="Nosso trabalho" title="Portfólio de Projetos" />
          <Link href="/portfolio" className="btn-outline self-start md:self-auto">
            Ver todos os projetos
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {destaques.map((projeto, i) => (
            <Link key={projeto.id} href={`/portfolio/${projeto.id}`} data-animate data-delay={String(Math.min(i + 1, 4)) as '1'|'2'|'3'|'4'} className="project-card group">
              <Image
                src={projeto.imagem}
                alt={projeto.altText}
                fill
                sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/60 transition-colors duration-300" />
              <div className="absolute bottom-0 inset-x-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="label-caps text-gold-light mb-1">{projeto.categoria}</p>
                <h3 className="font-display font-light text-xl text-brand-50">{projeto.titulo}</h3>
                {projeto.local && <p className="font-body text-xs text-brand-300 mt-1">{projeto.local}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
