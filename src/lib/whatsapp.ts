const NUMERO = '5531998156666'
export const PHONE_DISPLAY = '+55 (31) 9 9815-6666'

export function waUrl(origem: 'home' | 'servicos' | 'portfolio' | 'blog' | 'contato' | 'flutuante' | 'bairros', contexto?: string): string {
  const mensagens: Record<string, string> = {
    home: 'Olá! Vi o site da Prime Line e gostaria de solicitar um orçamento gratuito de móveis planejados. Podem me contar como funciona?',
    servicos: contexto
      ? `Olá! Vi a página de Serviços da Prime Line e tenho interesse em ${contexto}. Gostaria de agendar uma visita técnica gratuita.`
      : 'Olá! Vi a página de Serviços da Prime Line e gostaria de saber mais sobre os projetos. Podem me ajudar?',
    portfolio: 'Olá! Estava vendo o portfólio da Prime Line e gostaria de solicitar um orçamento. Tenho um projeto em mente.',
    blog: contexto
      ? `Olá! Li o artigo "${contexto}" no blog da Prime Line e gostaria de solicitar um orçamento. Podem me atender?`
      : 'Olá! Li um artigo no blog da Prime Line e gostaria de solicitar um orçamento de móveis planejados.',
    contato: 'Olá! Estou na página de Contato da Prime Line e gostaria de agendar uma visita técnica gratuita. Quando vocês podem me atender?',
    flutuante: 'Olá! Vim pelo site da Prime Line e gostaria de solicitar um orçamento de móveis planejados em BH.',
    bairros: contexto
      ? `Olá! Vi a página da Prime Line sobre ${contexto} e gostaria de agendar uma visita técnica gratuita. Podem me atender?`
      : 'Olá! Vi o site da Prime Line e gostaria de solicitar uma visita técnica gratuita para orçamento de móveis planejados.',
  }

  return `https://wa.me/${NUMERO}?text=${encodeURIComponent(mensagens[origem])}`
}
