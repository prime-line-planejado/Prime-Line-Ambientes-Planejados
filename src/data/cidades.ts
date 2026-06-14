export type CidadeTier = 'premium' | 'alto' | 'medio'

export interface Cidade {
  slug: string
  nome: string
  tier: CidadeTier
  /** Frase curta de destaque (usada em subtítulos e meta). */
  destaque: string
  /** Parágrafo ÚNICO sobre a cidade — evita conteúdo duplicado entre páginas. */
  intro: string
  /** Áreas/bairros notáveis da cidade, para long-tail e prova de cobertura local. */
  areas: string[]
}

// Cidades da Região Metropolitana de Belo Horizonte (RMBH) atendidas pela Prime Line.
// Cada cidade tem um `intro` próprio para que as páginas NÃO sejam conteúdo duplicado.
export const cidades: Cidade[] = [
  {
    slug: 'moveis-planejados-nova-lima',
    nome: 'Nova Lima',
    tier: 'premium',
    destaque: 'região dos condomínios de luxo da Grande BH',
    intro:
      'Nova Lima concentra alguns dos endereços mais valorizados de Minas Gerais — a Vila da Serra, o Vale do Sereno e o Alphaville Lagoa dos Ingleses, com apartamentos de alto padrão e casas em condomínios fechados. É um público exigente, que pede marcenaria à altura: acabamentos premium, projeto 3D fotorrealista e execução impecável em cada detalhe.',
    areas: ['Vila da Serra', 'Vale do Sereno', 'Alphaville', 'Jardim Canadá'],
  },
  {
    slug: 'moveis-planejados-lagoa-santa',
    nome: 'Lagoa Santa',
    tier: 'alto',
    destaque: 'cidade em expansão com condomínios de alto padrão',
    intro:
      'Lagoa Santa virou destino de quem busca qualidade de vida perto de Belo Horizonte — com clima ameno, casas amplas e condomínios fechados que crescem a cada ano. São imóveis que valorizam projetos de marcenaria sob medida, do home office à cozinha gourmet, aproveitando os espaços generosos das residências da região.',
    areas: ['Condomínios fechados', 'Centro', 'região da Lagoa', 'Várzea'],
  },
  {
    slug: 'moveis-planejados-contagem',
    nome: 'Contagem',
    tier: 'medio',
    destaque: 'a segunda maior cidade da Grande BH',
    intro:
      'Contagem é a segunda maior cidade da Região Metropolitana de Belo Horizonte, com forte perfil residencial em bairros como Eldorado, Industrial e Riacho das Pedras. A Prime Line atende toda Contagem com móveis planejados sob medida, unindo o mesmo padrão de acabamento dos projetos premium a um orçamento bem planejado.',
    areas: ['Eldorado', 'Industrial', 'Riacho das Pedras', 'Cidade Industrial'],
  },
  {
    slug: 'moveis-planejados-betim',
    nome: 'Betim',
    tier: 'medio',
    destaque: 'um dos maiores polos da Região Metropolitana',
    intro:
      'Betim cresce a cada ano com novos condomínios e bairros residenciais consolidados como Centro, Angola e Citrolândia. A Prime Line leva a Betim marcenaria planejada com fabricação própria — cozinhas, quartos, closets e salas sob medida — com visita técnica gratuita e projeto 3D antes de qualquer compromisso.',
    areas: ['Centro', 'Angola', 'Citrolândia'],
  },
  {
    slug: 'moveis-planejados-sabara',
    nome: 'Sabará',
    tier: 'medio',
    destaque: 'cidade histórica vizinha a Belo Horizonte',
    intro:
      'Sabará une patrimônio histórico e bairros residenciais em expansão na divisa com Belo Horizonte. As casas e apartamentos da cidade ganham muito com móveis planejados que aproveitam bem cada ambiente — e a Prime Line atende a região com a mesma qualidade dos projetos da capital.',
    areas: ['Centro', 'Borges', 'General Carneiro'],
  },
  {
    slug: 'moveis-planejados-santa-luzia',
    nome: 'Santa Luzia',
    tier: 'medio',
    destaque: 'cidade da Grande BH com forte perfil residencial',
    intro:
      'Santa Luzia tem um perfil fortemente residencial, com bairros populosos como São Benedito e a região central. A Prime Line atende Santa Luzia com móveis planejados sob medida e custo-benefício, do gabinete de banheiro ao projeto completo de cozinha e quarto, com fabricação própria e garantia formal.',
    areas: ['São Benedito', 'Centro', 'Bela Vista'],
  },
  {
    slug: 'moveis-planejados-ribeirao-das-neves',
    nome: 'Ribeirão das Neves',
    tier: 'medio',
    destaque: 'cidade em crescimento na Grande BH',
    intro:
      'Ribeirão das Neves é uma das cidades que mais cresceram na Região Metropolitana, com bairros residenciais como Justinópolis e a região central. A Prime Line atende Neves com marcenaria planejada acessível e bem executada, ajudando cada família a aproveitar melhor o espaço da casa com projeto sob medida.',
    areas: ['Justinópolis', 'Centro', 'Veneza'],
  },
  {
    slug: 'moveis-planejados-vespasiano',
    nome: 'Vespasiano',
    tier: 'medio',
    destaque: 'cidade da região norte da Grande BH',
    intro:
      'Vespasiano fica na região norte da Grande BH, próxima ao Aeroporto de Confins, com bairros residenciais em constante crescimento como Centro e Morro Alto. A Prime Line atende Vespasiano com móveis planejados sob medida, visita técnica gratuita e projeto 3D — do compacto ao completo, sempre com fabricação própria.',
    areas: ['Centro', 'Morro Alto', 'Caieiras'],
  },
]
