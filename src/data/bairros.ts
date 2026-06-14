export type RegiaoTipo = 'alto' | 'medio-alto' | 'classe-media'

export interface Bairro {
  slug: string
  nome: string
  regiao: RegiaoTipo
  destaque: string
}

export const bairros: Bairro[] = [
  // Alto padrão
  { slug: 'moveis-planejados-savassi',       nome: 'Savassi',        regiao: 'alto',        destaque: 'o principal bairro nobre de BH' },
  { slug: 'moveis-planejados-belvedere',     nome: 'Belvedere',      regiao: 'alto',        destaque: 'condomínios fechados e apartamentos de luxo' },
  { slug: 'moveis-planejados-lourdes',       nome: 'Lourdes',        regiao: 'alto',        destaque: 'residências sofisticadas e vida urbana de qualidade' },
  { slug: 'moveis-planejados-anchieta',      nome: 'Anchieta',       regiao: 'alto',        destaque: 'tranquilidade e alto padrão construtivo' },
  { slug: 'moveis-planejados-mangabeiras',   nome: 'Mangabeiras',    regiao: 'alto',        destaque: 'uma das regiões mais valorizadas da zona sul' },
  { slug: 'moveis-planejados-santo-agostinho', nome: 'Santo Agostinho', regiao: 'alto',     destaque: 'localização privilegiada no centro nobre de BH' },
  { slug: 'moveis-planejados-serra-bh',      nome: 'Serra',          regiao: 'alto',        destaque: 'bairro residencial de alto padrão com vista privilegiada' },
  { slug: 'moveis-planejados-sion-bh',       nome: 'Sion',           regiao: 'alto',        destaque: 'elegância e sofisticação no coração da zona sul' },
  { slug: 'moveis-planejados-cidade-jardim', nome: 'Cidade Jardim',  regiao: 'alto',        destaque: 'arborização e qualidade de vida incomparáveis' },
  { slug: 'moveis-planejados-carmo-bh',      nome: 'Carmo',          regiao: 'alto',        destaque: 'casas e apartamentos de alto padrão na zona sul' },
  { slug: 'moveis-planejados-santa-lucia',   nome: 'Santa Lúcia',    regiao: 'alto',        destaque: 'bairro nobre com infraestrutura completa' },
  { slug: 'moveis-planejados-luxemburgo',    nome: 'Luxemburgo',     regiao: 'alto',        destaque: 'residências exclusivas e perfil de alto padrão' },
  { slug: 'moveis-planejados-funcionarios',  nome: 'Funcionários',   regiao: 'alto',        destaque: 'um dos bairros mais desejados do centro nobre de BH' },
  { slug: 'moveis-planejados-cruzeiro-bh',   nome: 'Cruzeiro',       regiao: 'alto',        destaque: 'bairro tradicional e valorizado da zona sul' },
  { slug: 'moveis-planejados-pampulha',      nome: 'Pampulha',       regiao: 'alto',        destaque: 'ícone arquitetônico e zona residencial de prestígio' },

  // Médio-alto padrão
  { slug: 'moveis-planejados-buritis',       nome: 'Buritis',        regiao: 'medio-alto',  destaque: 'bairro planejado e moderno na zona oeste de BH' },
  { slug: 'moveis-planejados-gutierrez',     nome: 'Gutierrez',      regiao: 'medio-alto',  destaque: 'qualidade de vida e crescimento constante na zona oeste' },
  { slug: 'moveis-planejados-santo-antonio', nome: 'Santo Antônio',  regiao: 'medio-alto',  destaque: 'bairro tradicional e valorizado na zona sul' },
  { slug: 'moveis-planejados-sao-pedro-bh',  nome: 'São Pedro',      regiao: 'medio-alto',  destaque: 'residências de qualidade no centro-sul de BH' },
  { slug: 'moveis-planejados-castelo-bh',    nome: 'Castelo',        regiao: 'medio-alto',  destaque: 'bairro familiar com excelente infraestrutura' },
  { slug: 'moveis-planejados-estoril-bh',    nome: 'Estoril',        regiao: 'medio-alto',  destaque: 'perfil residencial tranquilo e valorizado' },
  { slug: 'moveis-planejados-ouro-preto-bh', nome: 'Ouro Preto',     regiao: 'medio-alto',  destaque: 'crescimento acelerado e infraestrutura completa' },
  { slug: 'moveis-planejados-dona-clara',    nome: 'Dona Clara',     regiao: 'medio-alto',  destaque: 'bairro residencial tranquilo próximo à Pampulha' },
  { slug: 'moveis-planejados-coracao-jesus', nome: 'Coração de Jesus', regiao: 'medio-alto', destaque: 'localização central com perfil residencial consolidado' },
  { slug: 'moveis-planejados-jardim-america', nome: 'Jardim América', regiao: 'medio-alto', destaque: 'bairro residencial bem estruturado na região oeste' },
  { slug: 'moveis-planejados-vila-paris',    nome: 'Vila Paris',     regiao: 'medio-alto',  destaque: 'charme e elegância em uma localização privilegiada' },
  { slug: 'moveis-planejados-sao-bento-bh',  nome: 'São Bento',      regiao: 'medio-alto',  destaque: 'bairro residencial com boa infraestrutura no centro-sul' },
  { slug: 'moveis-planejados-sao-luis-bh',   nome: 'São Luís',       regiao: 'medio-alto',  destaque: 'perfil familiar e qualidade de vida na zona sul' },
  { slug: 'moveis-planejados-liberdade-bh',  nome: 'Liberdade',      regiao: 'medio-alto',  destaque: 'bairro residencial com crescente valorização imobiliária' },

  // Classe média em crescimento
  { slug: 'moveis-planejados-palmeiras-bh',  nome: 'Palmeiras',      regiao: 'classe-media', destaque: 'bairro em crescimento com boa infraestrutura' },
  { slug: 'moveis-planejados-barroca-bh',    nome: 'Barroca',        regiao: 'classe-media', destaque: 'bairro residencial consolidado na zona oeste' },
  { slug: 'moveis-planejados-prado-bh',      nome: 'Prado',          regiao: 'classe-media', destaque: 'bairro familiar bem localizado na zona oeste' },
  { slug: 'moveis-planejados-floresta-bh',   nome: 'Floresta',       regiao: 'classe-media', destaque: 'bairro boêmio e criativo com crescente valorização' },
  { slug: 'moveis-planejados-sta-efigenia',  nome: 'Santa Efigênia', regiao: 'classe-media', destaque: 'bairro residencial próximo ao centro de BH' },
  { slug: 'moveis-planejados-grajau-bh',     nome: 'Grajaú',         regiao: 'classe-media', destaque: 'bairro tranquilo com infraestrutura completa' },
  { slug: 'moveis-planejados-bandeirantes',  nome: 'Bandeirantes',   regiao: 'classe-media', destaque: 'bairro residencial com boa qualidade de vida' },
  { slug: 'moveis-planejados-itapoa-bh',     nome: 'Itapoã',         regiao: 'classe-media', destaque: 'bairro próximo à Lagoa da Pampulha em crescimento' },
  { slug: 'moveis-planejados-santa-branca',  nome: 'Santa Branca',   regiao: 'classe-media', destaque: 'bairro residencial com perfil familiar em expansão' },

  // Mais bairros conhecidos — todas as faixas (incl. regiões populares)
  { slug: 'moveis-planejados-jaragua-bh',     nome: 'Jaraguá',        regiao: 'alto',         destaque: 'bairro arborizado e valorizado próximo à Pampulha' },
  { slug: 'moveis-planejados-centro-bh',      nome: 'Centro',         regiao: 'medio-alto',   destaque: 'coração comercial e residencial de Belo Horizonte' },
  { slug: 'moveis-planejados-santa-tereza-bh', nome: 'Santa Tereza',  regiao: 'medio-alto',   destaque: 'bairro boêmio e tradicional da região leste' },
  { slug: 'moveis-planejados-barro-preto',    nome: 'Barro Preto',    regiao: 'medio-alto',   destaque: 'polo de moda e bairro residencial central' },
  { slug: 'moveis-planejados-sagrada-familia', nome: 'Sagrada Família', regiao: 'medio-alto', destaque: 'bairro tradicional e valorizado da região leste' },
  { slug: 'moveis-planejados-cidade-nova-bh', nome: 'Cidade Nova',    regiao: 'medio-alto',   destaque: 'bairro residencial bem estruturado da região nordeste' },
  { slug: 'moveis-planejados-nova-suica',     nome: 'Nova Suíça',     regiao: 'medio-alto',   destaque: 'bairro residencial tranquilo da região oeste' },
  { slug: 'moveis-planejados-padre-eustaquio', nome: 'Padre Eustáquio', regiao: 'classe-media', destaque: 'bairro residencial consolidado da região noroeste' },
  { slug: 'moveis-planejados-santa-amelia',   nome: 'Santa Amélia',   regiao: 'classe-media', destaque: 'bairro familiar da região da Pampulha' },
  { slug: 'moveis-planejados-caicara',        nome: 'Caiçara',        regiao: 'classe-media', destaque: 'bairro tradicional e populoso da região noroeste' },
  { slug: 'moveis-planejados-carlos-prates',  nome: 'Carlos Prates',  regiao: 'classe-media', destaque: 'bairro residencial e comercial da região noroeste' },
  { slug: 'moveis-planejados-planalto-bh',    nome: 'Planalto',       regiao: 'classe-media', destaque: 'bairro residencial em crescimento da região norte' },
  { slug: 'moveis-planejados-venda-nova',     nome: 'Venda Nova',     regiao: 'classe-media', destaque: 'uma das maiores regiões residenciais de BH' },
  { slug: 'moveis-planejados-barreiro-bh',    nome: 'Barreiro',       regiao: 'classe-media', destaque: 'a maior região do Barreiro, com forte perfil residencial' },
]

export const regiaoLabel: Record<RegiaoTipo, string> = {
  'alto': 'Alto Padrão',
  'medio-alto': 'Médio-Alto Padrão',
  'classe-media': 'Classe Média em Crescimento',
}
