const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5531998156666'
const email = process.env.NEXT_PUBLIC_EMAIL ?? 'contato@primelineplanejados.com.br'
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM ?? '@primeline_planejados'

const whatsappUrl = `https://wa.me/${whatsapp}?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento.`

const services = [
  { icon: '🍳', title: 'Cozinhas Planejadas', desc: 'Ambientes funcionais e elegantes com aproveitamento máximo de espaço.' },
  { icon: '🛏️', title: 'Quartos e Closets', desc: 'Dormitórios e armários sob medida para o seu estilo de vida.' },
  { icon: '🛋️', title: 'Salas e Home Office', desc: 'Salas de estar, jantar e escritórios que unem conforto e praticidade.' },
  { icon: '🚿', title: 'Banheiros e Lavabos', desc: 'Banheiros planejados com acabamento de alto padrão.' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900">Prime Line</span>
            <span className="text-sm text-gray-500 block leading-none">Ambientes Planejados</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Ambientes Planejados<br />
            <span className="text-amber-600">sob medida para você</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Transformamos seu espaço com móveis planejados de alto padrão. Qualidade, elegância e funcionalidade em cada detalhe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-xl text-lg transition-colors"
            >
              <span>💬</span> Orçamento Gratuito
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-amber-500 text-gray-700 font-semibold px-8 py-3 rounded-xl text-lg transition-colors"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">O que fazemos</h2>
          <p className="text-center text-gray-500 mb-10">Soluções completas para cada cômodo da sua casa</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="text-center p-6 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pronto para transformar seu espaço?</h2>
          <p className="text-gray-600 mb-8">Entre em contato agora e receba um orçamento personalizado sem compromisso.</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors"
          >
            <span>💬</span> Solicitar Orçamento
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-16 px-4 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Fale conosco</h2>
          <div className="flex flex-col gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-colors">
              <span className="text-2xl">💬</span>
              <div className="text-left">
                <div className="text-sm text-gray-500">WhatsApp</div>
                <div className="font-semibold text-gray-900">{whatsapp.replace(/^55/, '+55 ').replace(/(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')}</div>
              </div>
            </a>
            <a href={`mailto:${email}`}
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-amber-300 hover:bg-amber-50 transition-colors">
              <span className="text-2xl">✉️</span>
              <div className="text-left">
                <div className="text-sm text-gray-500">E-mail</div>
                <div className="font-semibold text-gray-900">{email}</div>
              </div>
            </a>
            <a href={`https://instagram.com/${instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-pink-300 hover:bg-pink-50 transition-colors">
              <span className="text-2xl">📸</span>
              <div className="text-left">
                <div className="text-sm text-gray-500">Instagram</div>
                <div className="font-semibold text-gray-900">{instagram}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Prime Line Ambientes Planejados. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}
