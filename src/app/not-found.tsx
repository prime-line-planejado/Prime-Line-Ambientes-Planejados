import Link from 'next/link'
import { waUrl } from '@/lib/whatsapp'

export default function NotFound() {
  return (
    <section className="section section--dark min-h-[70vh] flex items-center">
      <div className="container text-center">
        <p className="font-display font-light text-8xl md:text-9xl text-brand-800 leading-none mb-6">404</p>
        <p className="label-caps text-gold-main mb-4">Página não encontrada</p>
        <h1 className="font-display font-light text-3xl md:text-4xl text-brand-50 leading-tight mb-4">
          Esta página não existe
        </h1>
        <p className="font-body font-light text-base text-brand-400 max-w-md mx-auto leading-relaxed mb-10">
          O endereço que você acessou pode ter sido removido ou digitado incorretamente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-solid">
            Voltar para o início
          </Link>
          <a
            href={waUrl('contato')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-semibold text-xs tracking-widest uppercase px-6 py-3 border border-brand-600 text-brand-300 hover:border-gold-main hover:text-gold-main transition-colors duration-200"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
