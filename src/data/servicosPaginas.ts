export interface ServicoPagina {
  slug: string
  metaTitle: string
  metaDescription: string
  titulo: string
  label: string
  subtitulo: string
  priceRange: string
  heroImagem: string
  heroAlt: string
  features: { icon: string; titulo: string; descricao: string }[]
  paragrafos: string[]
  imagens: { src: string; alt: string }[]
  faq: { pergunta: string; resposta: string }[]
  relacionados: { label: string; href: string }[]
}

export const servicosPaginas: ServicoPagina[] = [
  {
    slug: 'cozinha-planejada-belo-horizonte',
    metaTitle: 'Cozinha Planejada em BH | Prime Line — Orçamento Grátis',
    metaDescription: 'Cozinhas planejadas sob medida em Belo Horizonte. MDF premium, ferragens Blum, projeto 3D e visita técnica gratuita. Cozinhas a partir de R$ 6.000.',
    titulo: 'Cozinha Planejada em Belo Horizonte',
    label: 'Serviço especializado',
    subtitulo: 'Transformamos sua cozinha em um ambiente funcional e elegante — do projeto à entrega, tudo sob medida para o seu espaço.',
    priceRange: 'A partir de R$ 6.000',
    heroImagem: '/images/galeria/cozinha-gourmet-planejada-ilha-cooktop-coifa-teto-inox-bh.jpg',
    heroAlt: 'Cozinha gourmet planejada com ilha central, cooktop e coifa em inox — Prime Line BH',
    features: [
      { icon: 'ruler', titulo: 'Projeto sob medida', descricao: 'Cada detalhe projetado para o seu espaço, aproveitando ao máximo cada centímetro disponível.' },
      { icon: 'palette', titulo: 'Acabamentos premium', descricao: 'Laca, madeirado, espelhado e ripado com ferragens Blum e Grass importadas.' },
      { icon: 'cube', titulo: 'Projeto 3D gratuito', descricao: 'Visualize sua cozinha antes de assinar o contrato — sem surpresas no resultado final.' },
      { icon: 'shield', titulo: 'Garantia formal', descricao: 'Garantia contra defeitos de fabricação e instalação em todos os projetos entregues.' },
      { icon: 'clock', titulo: 'Entrega em 45–60 dias', descricao: 'Prazo médio desde a aprovação do projeto até a montagem técnica no local.' },
      { icon: 'star', titulo: 'Materiais certificados', descricao: 'MDF resistente à umidade (RU), ideal para o ambiente de cozinha.' },
    ],
    paragrafos: [
      'Uma cozinha planejada vai muito além da estética: ela precisa funcionar perfeitamente no dia a dia. Na Prime Line, desenvolvemos cada projeto com base na metragem exata do seu imóvel, no seu estilo de vida e nas suas rotinas de uso — seja uma cozinha compacta de apartamento ou uma cozinha gourmet com ilha e bancada de mármore.',
      'Trabalhamos com painéis MDF resistente à umidade (RU), acabamentos em laca, fórmica, madeirado e espelhado, além de ferragens importadas de marcas como Blum e Grass. O resultado é uma cozinha bonita, durável e altamente funcional — com gaveteiros de alta capacidade, prateleiras organizadas e tampo em medida exata.',
      'Atendemos toda Belo Horizonte e Região Metropolitana com visita técnica gratuita. Nossa equipe mede o ambiente, apresenta as possibilidades de projeto e elabora uma proposta detalhada sem compromisso. Do primeiro contato à entrega e montagem, você acompanha cada etapa com total transparência.',
    ],
    imagens: [
      { src: '/images/galeria/cozinha-planejada-cinza-granito-preto-pendentes-bh.jpg', alt: 'Cozinha planejada cinza com granito preto e pendentes — Prime Line BH' },
      { src: '/images/galeria/cozinha-planejada-branca-cinza-granito-preto-coifa-led-bh.jpg', alt: 'Cozinha planejada branca e cinza com granito preto e coifa LED — Prime Line BH' },
      { src: '/images/galeria/cozinha-planejada-grafite-bancada-branca-marmore-geladeira-inox-forno-bh.jpg', alt: 'Cozinha planejada grafite com bancada de mármore e geladeira inox — Prime Line BH' },
    ],
    faq: [
      { pergunta: 'Qual o valor de uma cozinha planejada em BH?', resposta: 'O investimento varia conforme metragem, materiais e acabamentos. Cozinhas compactas de apartamento partem de R$ 6.000, enquanto cozinhas gourmet com ilha e acabamentos premium chegam a R$ 60.000 ou mais. Oferecemos orçamento detalhado e gratuito após a visita técnica.' },
      { pergunta: 'Qual MDF é usado em cozinhas planejadas?', resposta: 'Utilizamos MDF Resistente à Umidade (RU) nas áreas de cozinha, garantindo durabilidade mesmo em ambientes com vapor e respingos de água. Os acabamentos são em laca ou fórmica de alta resistência.' },
      { pergunta: 'Quanto tempo leva para fazer uma cozinha planejada?', resposta: 'O prazo médio é de 45 a 60 dias após a aprovação do projeto e assinatura do contrato. Esse tempo inclui fabricação, transporte e montagem técnica com equipe especializada.' },
      { pergunta: 'A Prime Line faz cozinhas abertas integradas à sala?', resposta: 'Sim. Projetamos cozinhas americanas e ambientes integrados com ilha, balcão e bancada planejada, integrando harmoniosamente cozinha, sala de jantar e living em um único espaço.' },
    ],
    relacionados: [
      { label: 'Closet Planejado', href: '/servicos/closet-planejado-belo-horizonte' },
      { label: 'Quarto Planejado', href: '/servicos/quarto-planejado-belo-horizonte' },
      { label: 'Sala Planejada', href: '/servicos/sala-planejada-belo-horizonte' },
    ],
  },

  {
    slug: 'closet-planejado-belo-horizonte',
    metaTitle: 'Closet Planejado em BH | Prime Line — Orçamento Grátis',
    metaDescription: 'Closets e guarda-roupas planejados sob medida em Belo Horizonte. Projeto 3D gratuito, ferragens importadas e visita técnica. A partir de R$ 4.000.',
    titulo: 'Closet Planejado em Belo Horizonte',
    label: 'Serviço especializado',
    subtitulo: 'Closets sob medida que organizam seu guarda-roupa com elegância — iluminação embutida, divisórias internas e acabamento premium.',
    priceRange: 'A partir de R$ 4.000',
    heroImagem: '/images/galeria/guarda-roupa-deslizante-champanhe-interior-branco-nichos-gavetas-bh.jpg',
    heroAlt: 'Closet planejado champanhe com interior branco, nichos e gavetas — Prime Line BH',
    features: [
      { icon: 'ruler', titulo: 'Do piso ao teto', descricao: 'Aproveitamos toda a altura do ambiente — sem espaços perdidos acima do guarda-roupa.' },
      { icon: 'star', titulo: 'Iluminação embutida', descricao: 'LED interno em prateleiras e nichos para visibilidade total de cada peça do guarda-roupa.' },
      { icon: 'palette', titulo: 'Portas de correr ou abrir', descricao: 'Espelho, amadeirado, laca ou ripado — escolha o acabamento que combina com seu quarto.' },
      { icon: 'cube', titulo: 'Interior personalizado', descricao: 'Divisórias, gavetas, sapateiras, nichos e cabideiros projetados para a sua rotina.' },
      { icon: 'shield', titulo: 'Ferragens importadas', descricao: 'Trilhos e dobradiças Blum e Grass para fechamento suave e longa durabilidade.' },
      { icon: 'clock', titulo: 'Entrega em 45–60 dias', descricao: 'Prazo médio desde a aprovação até a instalação completa com equipe técnica.' },
    ],
    paragrafos: [
      'Um closet planejado transforma completamente a organização do seu quarto. Na Prime Line, projetamos cada detalhe do interior — compartimentos para roupas dobradas, cabideiros em alturas diferentes, sapateiras organizadas, nichos para acessórios e gavetas com profundidade ideal. O resultado é um espaço que funciona perfeitamente para a sua rotina.',
      'Trabalhamos com guarda-roupas de portas de correr ou abrir, em MDF com acabamentos em laca, amadeirado, espelhado e ripado. As portas de espelho ampliam o espaço visualmente e eliminam a necessidade de um espelho separado no quarto. Instalamos iluminação LED interna para que cada peça do guarda-roupa seja facilmente visível.',
      'Nossa equipe realiza a visita técnica gratuitamente, mede o ambiente e apresenta um projeto 3D detalhado antes de qualquer aprovação. Atendemos toda Belo Horizonte e Região Metropolitana, com prazo médio de entrega de 45 a 60 dias e garantia formal em todos os projetos.',
    ],
    imagens: [
      { src: '/images/galeria/guarda-roupa-correr-cinza-4-portas-frisos-dourados-piso-madeira-bh.jpg', alt: 'Guarda-roupa de correr cinza com 4 portas e frisos dourados — Prime Line BH' },
      { src: '/images/galeria/guarda-roupa-planejado-amadeirado-ripado-nichos-bh.jpg', alt: 'Guarda-roupa planejado amadeirado com ripado e nichos — Prime Line BH' },
      { src: '/images/galeria/dormitorio-guarda-roupa-canto-champanhe-nicho-amadeirado-lustre-dourado-bh.jpg', alt: 'Dormitório com guarda-roupa de canto champanhe e nicho amadeirado — Prime Line BH' },
    ],
    faq: [
      { pergunta: 'Qual o valor de um closet planejado em BH?', resposta: 'Guarda-roupas e closets planejados em BH partem de R$ 4.000 para modelos compactos e chegam a R$ 30.000 em closets amplos com iluminação embutida e acabamentos premium. O valor exato depende da metragem e dos materiais escolhidos.' },
      { pergunta: 'Qual a diferença entre guarda-roupa e closet planejado?', resposta: 'O guarda-roupa planejado é um móvel fechado com portas, enquanto o closet é um ambiente ou nicho dedicado ao vestuário, geralmente sem portas externas ou com entrada própria. Projetamos ambos sob medida, com organização interna personalizada.' },
      { pergunta: 'As portas de espelho são mais caras?', resposta: 'As portas de espelho têm um custo um pouco maior que as de laca ou amadeirado, mas eliminam a necessidade de um espelho separado no quarto. Além disso, ampliam visualmente o ambiente, sendo uma escolha muito popular em quartos menores.' },
      { pergunta: 'É possível ter iluminação LED no guarda-roupa?', resposta: 'Sim. Instalamos fitas LED ou spots embutidos nas prateleiras e nichos, com acionamento automático pela abertura das portas ou interruptor próprio. A iluminação interna facilita encontrar qualquer peça rapidamente.' },
    ],
    relacionados: [
      { label: 'Quarto Planejado', href: '/servicos/quarto-planejado-belo-horizonte' },
      { label: 'Cozinha Planejada', href: '/servicos/cozinha-planejada-belo-horizonte' },
      { label: 'Banheiro Planejado', href: '/servicos/banheiro-planejado-belo-horizonte' },
    ],
  },

  {
    slug: 'quarto-planejado-belo-horizonte',
    metaTitle: 'Quarto Planejado em BH | Prime Line — Orçamento Grátis',
    metaDescription: 'Dormitórios e quartos planejados sob medida em Belo Horizonte. Cabeceira, criado-mudo embutido e guarda-roupa integrado. Visita técnica gratuita.',
    titulo: 'Quarto Planejado em Belo Horizonte',
    label: 'Serviço especializado',
    subtitulo: 'Dormitórios completos com cabeceira planejada, criados-mudos embutidos, guarda-roupa integrado e iluminação de destaque.',
    priceRange: 'A partir de R$ 4.000',
    heroImagem: '/images/galeria/dormitorio-casal-luxo-cabeceira-acolchoada-guarda-roupa-fullwall-bege-led-bh.jpg',
    heroAlt: 'Dormitório de casal com cabeceira estofada, guarda-roupa full-wall bege e LED — Prime Line BH',
    features: [
      { icon: 'star', titulo: 'Cabeceira planejada', descricao: 'Cabeceiras estofadas, ripadas ou com painel integrado ao guarda-roupa para visual impecável.' },
      { icon: 'ruler', titulo: 'Guarda-roupa full-wall', descricao: 'Do piso ao teto, ocupando toda a parede para máximo aproveitamento de espaço.' },
      { icon: 'cube', titulo: 'Criado-mudo embutido', descricao: 'Criados-mudos planejados com gaveta e nicho, sem espaço perdido entre móvel e parede.' },
      { icon: 'palette', titulo: 'Iluminação de destaque', descricao: 'LED embutido na cabeceira e no guarda-roupa para criar a atmosfera ideal no quarto.' },
      { icon: 'shield', titulo: 'Projeto 3D gratuito', descricao: 'Visualize o quarto completo antes de aprovar — sem surpresas no resultado final.' },
      { icon: 'clock', titulo: 'Entrega em 45–60 dias', descricao: 'Do contrato à montagem técnica completa com equipe especializada.' },
    ],
    paragrafos: [
      'Um quarto planejado cria harmonia visual e funcionalidade que móveis soltos não conseguem oferecer. Na Prime Line, desenvolvemos o dormitório como um conjunto integrado — cabeceira, guarda-roupa, criados-mudos e painel — todos projetados para o mesmo espaço, com mesma linguagem de design e materiais.',
      'A cabeceira planejada é um dos grandes diferenciais dos projetos Prime Line. Ela pode ser ripada com iluminação embutida, estofada em capitonê, com nicho para livros ou integrada ao guarda-roupa em um painel contínuo do piso ao teto. O resultado é um quarto com identidade clara e acabamento de hotel.',
      'Atendemos toda Belo Horizonte com visita técnica gratuita. Nossa equipe mede o quarto, propõe soluções para o seu espaço e perfil e apresenta um projeto 3D detalhado antes de qualquer comprometimento financeiro. Trabalhamos com MDF de alta qualidade e ferragens importadas para durabilidade garantida.',
    ],
    imagens: [
      { src: '/images/galeria/dormitorio-planejado-guarda-roupa-cinza-cabeceira-amadeirada-led-bh.jpg', alt: 'Dormitório planejado com guarda-roupa cinza e cabeceira amadeirada com LED — Prime Line BH' },
      { src: '/images/galeria/dormitorio-casal-cabeceira-embutida-guarda-roupa-integrado-cinza-escuro-bh.jpg', alt: 'Dormitório casal com cabeceira embutida e guarda-roupa integrado cinza escuro — Prime Line BH' },
      { src: '/images/galeria/dormitorio-casal-cabeceira-rose-guarda-roupa-espelho-dourado-bh.jpg', alt: 'Dormitório casal com cabeceira rose e guarda-roupa espelho com frisos dourados — Prime Line BH' },
    ],
    faq: [
      { pergunta: 'Qual o valor de um quarto planejado em BH?', resposta: 'Dormitórios planejados em BH partem de R$ 4.000 para quartos compactos e chegam a R$ 30.000 em projetos completos com cabeceira, guarda-roupa full-wall, criados-mudos e iluminação. O valor depende da metragem e dos acabamentos escolhidos.' },
      { pergunta: 'Vale a pena planejar o quarto completo de uma vez?', resposta: 'Sim. Planejar o quarto completo de uma só vez garante harmonia visual entre cabeceira, guarda-roupa e criados-mudos, além de custo menor do que comprar os móveis separadamente. O resultado final é muito mais elegante e integrado.' },
      { pergunta: 'Vocês fazem quartos infantis e de teenager?', resposta: 'Sim. Projetamos quartos para todas as faixas etárias — desde nursery com berço integrado, passando por quartos infantis com beliche planejada e área de estudo, até quartos de teenager com setup gamer e muito armazenamento.' },
      { pergunta: 'É possível planejar um quarto pequeno de apartamento?', resposta: 'Definitivamente. Quartos compactos são nossa especialidade. Projetamos soluções como camas com baú, guarda-roupas de correr para ganhar espaço, criados-mudos suspensos e nichos embutidos na cabeceira para maximizar cada centímetro.' },
    ],
    relacionados: [
      { label: 'Closet Planejado', href: '/servicos/closet-planejado-belo-horizonte' },
      { label: 'Banheiro Planejado', href: '/servicos/banheiro-planejado-belo-horizonte' },
      { label: 'Home Office', href: '/servicos/home-office-planejado-bh' },
    ],
  },

  {
    slug: 'home-office-planejado-bh',
    metaTitle: 'Home Office Planejado em BH | Prime Line — Orçamento Grátis',
    metaDescription: 'Home offices planejados sob medida em Belo Horizonte. Bancadas ergonômicas, armários integrados e ripado iluminado. Visita técnica gratuita.',
    titulo: 'Home Office Planejado em Belo Horizonte',
    label: 'Serviço especializado',
    subtitulo: 'Escritórios domésticos que unem ergonomia, organização e estética — bancadas sob medida, armários integrados e iluminação planejada.',
    priceRange: 'A partir de R$ 3.000',
    heroImagem: '/images/galeria/home-office-escritorio-bancada-amadeirada-dupla-armarios-ripado-bh.jpg',
    heroAlt: 'Home office planejado com bancada amadeirada dupla, armários e ripado iluminado — Prime Line BH',
    features: [
      { icon: 'ruler', titulo: 'Bancada ergonômica', descricao: 'Altura e profundidade ideais para longas jornadas de trabalho, com suporte para monitor e organização de cabos.' },
      { icon: 'cube', titulo: 'Armários integrados', descricao: 'Armazenamento vertical com portas, prateleiras e nichos para manter o home office sempre organizado.' },
      { icon: 'palette', titulo: 'Ripado com iluminação', descricao: 'Painel ripado com LED embutido para o fundo da bancada — funcional e com visual profissional para chamadas de vídeo.' },
      { icon: 'star', titulo: 'Layout em L ou U', descricao: 'Aproveitamos cantos e paredes para criar bancadas em L ou U com múltiplos setores de trabalho.' },
      { icon: 'shield', titulo: 'Projeto 3D gratuito', descricao: 'Veja o home office montado virtualmente antes de aprovar — sem surpresas.' },
      { icon: 'clock', titulo: 'Entrega em 45–60 dias', descricao: 'Do projeto aprovado à montagem completa com equipe técnica especializada.' },
    ],
    paragrafos: [
      'Com o trabalho remoto consolidado, o home office deixou de ser improviso para se tornar um ambiente essencial. Na Prime Line, projetamos escritórios domésticos que funcionam como um escritório profissional — com bancada em altura ergonômica, tomadas e passagem de cabos integradas, armazenamento inteligente e visual que transmite credibilidade em chamadas de vídeo.',
      'Nossos projetos de home office incluem bancadas de madeira natural ou amadeirado, armários com portas e prateleiras abertas, nichos para livros e objetos pessoais, além de ripado com iluminação LED no fundo da bancada. Para quartos com espaço limitado, criamos soluções compactas que dobram como área de trabalho e área de descanso.',
      'Atendemos toda Belo Horizonte com visita técnica gratuita. Seja um home office em quarto de solteiro, uma sala de estudos ou um escritório dedicado, nossa equipe apresenta um projeto personalizado e um orçamento detalhado sem compromisso.',
    ],
    imagens: [
      { src: '/images/galeria/home-office-em-l-bancada-amadeirada-ripado-armarios-cinza-prateleiras-bh.jpg', alt: 'Home office em L com bancada amadeirada, ripado e armários cinza — Prime Line BH' },
      { src: '/images/galeria/home-office-planejado-em-l-bancada-amadeirada-armarios-cinza-ripado-bh.jpg', alt: 'Home office planejado em L com bancada amadeirada e ripado iluminado — Prime Line BH' },
      { src: '/images/galeria/escritorio-home-office-compacto-ripado-preto-bancada-amadeirada-em-l-bh.jpg', alt: 'Home office compacto com ripado preto e bancada amadeirada em L — Prime Line BH' },
    ],
    faq: [
      { pergunta: 'Qual o valor de um home office planejado em BH?', resposta: 'Home offices planejados em BH partem de R$ 3.000 para soluções compactas e chegam a R$ 25.000 em escritórios completos com bancada em L, armários, ripado e iluminação embutida. O valor depende da metragem e dos materiais.' },
      { pergunta: 'Qual altura ideal para a bancada do home office?', resposta: 'A altura padrão é entre 72 e 75 cm para trabalho sentado, mas projetamos conforme a estatura do usuário. Para quem usa monitor, recomendamos prateleira com braço regulável ou monitor fixo na parede, que o projeto já contempla.' },
      { pergunta: 'Vocês fazem home office em quarto pequeno?', resposta: 'Sim. Temos soluções muito inteligentes para espaços compactos — bancadas fixadas na parede que liberam espaço no piso, nichos suspensos, armários baixos que dobram como bancada e painéis que integram área de trabalho e área de descanso.' },
      { pergunta: 'É possível integrar o home office com a sala?', resposta: 'Sim. Projetamos cantinhos de trabalho integrados à sala, com ripado divisório entre as áreas, bancada planejada e armazenamento que não compromete a estética da sala. Uma solução muito popular em apartamentos.' },
    ],
    relacionados: [
      { label: 'Sala Planejada', href: '/servicos/sala-planejada-belo-horizonte' },
      { label: 'Quarto Planejado', href: '/servicos/quarto-planejado-belo-horizonte' },
      { label: 'Cozinha Planejada', href: '/servicos/cozinha-planejada-belo-horizonte' },
    ],
  },

  {
    slug: 'sala-planejada-belo-horizonte',
    metaTitle: 'Sala Planejada em BH | Prime Line — Orçamento Grátis',
    metaDescription: 'Salas planejadas sob medida em Belo Horizonte. Painéis de TV, estantes, cristaleiras e ripado com LED. Visita técnica gratuita. A partir de R$ 3.000.',
    titulo: 'Sala Planejada em Belo Horizonte',
    label: 'Serviço especializado',
    subtitulo: 'Painéis de TV, estantes e cristaleiras planejados que transformam a sala em um ambiente elegante e funcional para toda a família.',
    priceRange: 'A partir de R$ 3.000',
    heroImagem: '/images/galeria/sala-painel-tv-luxo-ripado-champanhe-branco-lacado-cristaleira-preta-led-bh.jpg',
    heroAlt: 'Sala planejada com painel de TV ripado champanhe, branco lacado e cristaleira preta com LED — Prime Line BH',
    features: [
      { icon: 'star', titulo: 'Painel de TV planejado', descricao: 'Painéis ripados, amadeirados ou lacados com rack embutido, passagem de cabos e LED de destaque.' },
      { icon: 'ruler', titulo: 'Estante full-wall', descricao: 'Estantes do piso ao teto com nichos, prateleiras e armários integrados para organização e decoração.' },
      { icon: 'palette', titulo: 'Cristaleira planejada', descricao: 'Cristaleiras com vidro, iluminação interna e acabamento premium — para expor sua coleção com elegância.' },
      { icon: 'cube', titulo: 'Rack com passagem de cabos', descricao: 'Sem fios à mostra — projetamos a passagem de todos os cabos internamente no painel.' },
      { icon: 'shield', titulo: 'Ripado com LED', descricao: 'O efeito ripado com iluminação embutida é tendência e valoriza qualquer sala de estar.' },
      { icon: 'clock', titulo: 'Entrega em 45–60 dias', descricao: 'Do projeto aprovado à instalação completa pela equipe técnica Prime Line.' },
    ],
    paragrafos: [
      'A sala é o cartão de visitas do lar. Um painel de TV planejado transforma completamente a estética do ambiente — com ripado em destaque, rack embutido sem fios à mostra, iluminação LED e acabamento que conversa com o restante da decoração. Na Prime Line, cada painel é projetado como uma peça única para o seu espaço.',
      'Além do painel de TV, projetamos estantes full-wall com nichos organizados, prateleiras para livros e objetos, armários para armazenamento e cristaleiras com iluminação interna. Para salas abertas integradas à cozinha ou jantar, criamos ambientes fluidos com o mesmo vocabulário de design em todos os elementos.',
      'Atendemos toda Belo Horizonte com visita técnica gratuita e projeto 3D antes da aprovação. Nossa equipe avalia o ambiente, sugere a melhor disposição do painel e estante, e apresenta um orçamento detalhado sem compromisso. Prazo médio de entrega: 45 a 60 dias.',
    ],
    imagens: [
      { src: '/images/galeria/sala-painel-tv-luxo-ripado-cinza-arandelas-cristaleira-dourada-led-bh.jpg', alt: 'Sala planejada com painel ripado cinza, arandelas e cristaleira dourada com LED — Prime Line BH' },
      { src: '/images/galeria/sala-integrada-painel-tv-amadeirado-nichos-iluminados-bh.jpg', alt: 'Sala integrada planejada com painel TV amadeirado e nichos iluminados — Prime Line BH' },
      { src: '/images/galeria/sala-tv-painel-amadeirado-rack-sofa-bege-piso-porcelanato-bh.jpg', alt: 'Sala planejada com painel amadeirado, rack e sofá bege em porcelanato — Prime Line BH' },
    ],
    faq: [
      { pergunta: 'Qual o valor de um painel de TV planejado em BH?', resposta: 'Painéis de TV planejados em BH partem de R$ 3.000 para modelos simples com rack e chegam a R$ 25.000 em painéis full-wall com estante, cristaleira e iluminação embutida. O valor depende da largura, altura e acabamentos.' },
      { pergunta: 'O painel de TV precisa de instalação elétrica especial?', resposta: 'Não necessariamente. Projetamos a passagem de cabos internamente ao painel e orientamos sobre os pontos elétricos necessários. Em projetos novos, recomendamos acertar a elétrica antes da instalação do móvel.' },
      { pergunta: 'Qual o efeito ripado e por que é tão popular?', resposta: 'O ripado é um revestimento com frisos verticais ou horizontais em MDF ou madeira, que cria textura, profundidade e sofisticação ao ambiente. Combinado com iluminação LED embutida, cria um efeito visual que transforma qualquer sala.' },
      { pergunta: 'Vocês fazem salas abertas integradas à cozinha?', resposta: 'Sim. Projetos de ambientes integrados são nosso forte. Criamos salas e cozinhas com a mesma linguagem de design — ripado, ilha planejada, estante e painel de TV — tudo integrado para um resultado coerente e sofisticado.' },
    ],
    relacionados: [
      { label: 'Cozinha Planejada', href: '/servicos/cozinha-planejada-belo-horizonte' },
      { label: 'Home Office', href: '/servicos/home-office-planejado-bh' },
      { label: 'Quarto Planejado', href: '/servicos/quarto-planejado-belo-horizonte' },
    ],
  },

  {
    slug: 'banheiro-planejado-belo-horizonte',
    metaTitle: 'Banheiro Planejado em BH | Prime Line — Orçamento Grátis',
    metaDescription: 'Banheiros e lavabos planejados sob medida em Belo Horizonte. Gabinetes, nichos e armários resistentes à umidade. Visita técnica gratuita.',
    titulo: 'Banheiro Planejado em Belo Horizonte',
    label: 'Serviço especializado',
    subtitulo: 'Gabinetes sob medida, nichos embutidos e armários de banheiro com materiais resistentes à umidade e acabamento refinado.',
    priceRange: 'A partir de R$ 1.500',
    heroImagem: '/images/galeria/banheiro-planejado-marmore-branco-bancada-embutida-box-vidro-nicho-bh.jpg',
    heroAlt: 'Banheiro planejado com mármore branco, bancada embutida, box de vidro e nicho — Prime Line BH',
    features: [
      { icon: 'shield', titulo: 'MDF resistente à umidade', descricao: 'Todo o MDF utilizado em banheiros é da linha RU (Resistente à Umidade), garantindo durabilidade em ambientes úmidos.' },
      { icon: 'ruler', titulo: 'Gabinete sob medida', descricao: 'Gabinetes com cuba embutida ou de apoio, na medida exata da sua bancada, sem cortes ou folgas visíveis.' },
      { icon: 'star', titulo: 'Nichos embutidos', descricao: 'Nichos no box e paredes para shampoo, sabonetes e acessórios — organizados e sem acumular umidade.' },
      { icon: 'palette', titulo: 'Acabamentos nobres', descricao: 'Laca, amadeirado, mármore e espelhado — acabamentos que transformam o banheiro em um espaço de bem-estar.' },
      { icon: 'cube', titulo: 'Armário de banheiro', descricao: 'Armários com espelho frontal e interior organizador para itens de higiene pessoal e produtos de limpeza.' },
      { icon: 'clock', titulo: 'Entrega em 45–60 dias', descricao: 'Do projeto aprovado à instalação completa com equipe técnica especializada.' },
    ],
    paragrafos: [
      'Um banheiro planejado vai muito além do gabinete — é a combinação de gabinete sob medida, nichos embutidos no box, armário com espelho e bancada em pedra natural que transforma um banheiro comum em um espaço de bem-estar. Na Prime Line, cada projeto é desenvolvido para aproveitar ao máximo o espaço disponível.',
      'Trabalhamos exclusivamente com MDF Resistente à Umidade (RU) no ambiente de banheiro, garantindo que os móveis não inchem ou se deformem ao longo dos anos. Os acabamentos incluem laca de alta resistência, revestimento amadeirado e espelhado, além de cubas embutidas, de apoio ou de semi-encaixe conforme o estilo do projeto.',
      'Nossa equipe realiza a visita técnica gratuitamente, mede o banheiro e apresenta um projeto com acabamentos sugeridos dentro do seu orçamento. Atendemos toda Belo Horizonte com prazo médio de entrega de 45 a 60 dias e garantia formal em todos os projetos.',
    ],
    imagens: [
      { src: '/images/galeria/banheiro-planejado-marmore-cinza-nicho-iluminado-box-vidro-bh.jpg', alt: 'Banheiro planejado com mármore cinza, nicho iluminado e box de vidro — Prime Line BH' },
      { src: '/images/galeria/banheiro-lavabo-espelho-led-bancada-branca-armario-amadeirado-bh.jpg', alt: 'Lavabo planejado com espelho LED, bancada branca e armário amadeirado — Prime Line BH' },
      { src: '/images/galeria/banheiro-cinza-box-vidro-preto-armario-espelho-bancada-branca-bh.jpg', alt: 'Banheiro planejado cinza com box preto, armário com espelho e bancada branca — Prime Line BH' },
    ],
    faq: [
      { pergunta: 'Qual o valor de um banheiro planejado em BH?', resposta: 'Banheiros planejados em BH partem de R$ 1.500 para gabinetes simples e chegam a R$ 12.000 em projetos completos com gabinete, nichos embutidos, armário e acabamentos nobres. O valor depende da quantidade de móveis e materiais escolhidos.' },
      { pergunta: 'É possível planejar um banheiro muito pequeno?', resposta: 'Sim, e é justamente onde o planejamento faz mais diferença. Para banheiros compactos, projetamos gabinetes suspensos (que liberam o piso e ampliam a percepção de espaço), nichos embutidos nas paredes e armários verticais para armazenamento eficiente.' },
      { pergunta: 'Vocês fazem lavabo planejado também?', resposta: 'Sim. Lavabos são uma de nossas especialidades — são ambientes menores onde o design faz toda a diferença. Projetamos bancadas com cubas de design, armários com espelho LED, nichos e revestimentos nobres como mármore e madeira.' },
      { pergunta: 'Quanto tempo dura um gabinete planejado?', resposta: 'Com MDF Resistente à Umidade (RU) e manutenção básica (não molhar diretamente as dobradiças, secar a bancada após uso), um gabinete planejado tem vida útil de 15 a 20 anos. Utilizamos ferragens de alta qualidade para garantir essa durabilidade.' },
    ],
    relacionados: [
      { label: 'Quarto Planejado', href: '/servicos/quarto-planejado-belo-horizonte' },
      { label: 'Closet Planejado', href: '/servicos/closet-planejado-belo-horizonte' },
      { label: 'Cozinha Planejada', href: '/servicos/cozinha-planejada-belo-horizonte' },
    ],
  },

  {
    slug: 'design-de-interiores-belo-horizonte',
    metaTitle: 'Design de Interiores em BH | Prime Line — Projeto Completo',
    metaDescription: 'Design de interiores em Belo Horizonte com projeto 3D, mood board e execução completa em marcenaria planejada. Visita técnica gratuita. Prime Line BH.',
    titulo: 'Design de Interiores em Belo Horizonte',
    label: 'Serviço especializado',
    subtitulo: 'Do conceito ao detalhe — criamos ambientes completos com identidade visual única, móveis planejados sob medida e materiais de alto padrão.',
    priceRange: 'Sob consulta',
    heroImagem: '/images/galeria/sala-painel-tv-luxo-ripado-champanhe-branco-lacado-cristaleira-preta-led-bh.jpg',
    heroAlt: 'Sala planejada com design de interiores completo — ripado champanhe, cristaleira e LED — Prime Line BH',
    features: [
      { icon: 'palette', titulo: 'Conceito e mood board', descricao: 'Definimos a identidade visual do ambiente — paleta de cores, texturas, materiais e estilo antes de qualquer execução.' },
      { icon: 'cube', titulo: 'Projeto 3D fotorrealista', descricao: 'Visualize cada ambiente com render de alta qualidade antes de aprovar — sem surpresas no resultado final.' },
      { icon: 'ruler', titulo: 'Móveis planejados sob medida', descricao: 'Toda a marcenaria é fabricada especificamente para o seu espaço — sem adaptações, sem folgas, sem improvisos.' },
      { icon: 'star', titulo: 'Curadoria de materiais', descricao: 'Selecionamos revestimentos, pedras naturais, ferragens e iluminação dentro do seu orçamento e estilo.' },
      { icon: 'shield', titulo: 'Execução e acompanhamento', descricao: 'A Prime Line não entrega só o projeto — executamos os móveis planejados com nossa própria equipe técnica.' },
      { icon: 'clock', titulo: 'Entrega completa em 60–90 dias', descricao: 'Do primeiro briefing à entrega do ambiente finalizado, com acompanhamento em cada etapa.' },
    ],
    paragrafos: [
      'Design de interiores não é apenas estética — é planejamento funcional, escolha inteligente de materiais e coerência visual entre todos os elementos do ambiente. Na Prime Line, integramos o serviço de design ao nosso expertise em marcenaria planejada, oferecendo uma solução completa: do conceito à entrega, tudo sob o mesmo teto.',
      'Nosso processo começa com um briefing detalhado para entender seu estilo, rotina e orçamento. A partir daí, desenvolvemos um mood board com direção visual, escolhemos materiais e acabamentos compatíveis e apresentamos um projeto 3D fotorrealista de cada ambiente. Só depois de sua aprovação iniciamos a fabricação dos móveis.',
      'Diferente de escritórios de design que terceirizam a execução, a Prime Line fabrica toda a marcenaria internamente com controle rigoroso de qualidade. Atendemos toda Belo Horizonte e Região Metropolitana com visita técnica gratuita e projeto sem compromisso — seja um dormitório completo, uma sala integrada ou um apartamento inteiro.',
    ],
    imagens: [
      { src: '/images/galeria/dormitorio-casal-luxo-cabeceira-acolchoada-guarda-roupa-fullwall-bege-led-bh.jpg', alt: 'Design de interiores — dormitório casal com cabeceira estofada e guarda-roupa full-wall — Prime Line BH' },
      { src: '/images/galeria/cozinha-gourmet-planejada-ilha-cooktop-coifa-teto-inox-bh.jpg', alt: 'Design de interiores — cozinha gourmet planejada com ilha e coifa em inox — Prime Line BH' },
      { src: '/images/galeria/sala-painel-tv-luxo-ripado-cinza-arandelas-cristaleira-dourada-led-bh.jpg', alt: 'Design de interiores — sala planejada com painel ripado cinza e cristaleira dourada — Prime Line BH' },
    ],
    faq: [
      { pergunta: 'A Prime Line faz design de interiores completo ou só marcenaria?', resposta: 'A Prime Line oferece os dois — marcenaria planejada avulsa ou um serviço completo de design de interiores que inclui conceito, mood board, projeto 3D e execução dos móveis. Para projetos completos, trabalhamos em parceria com o cliente desde o briefing inicial até a entrega do ambiente finalizado.' },
      { pergunta: 'Qual a diferença entre design de interiores e decoração?', resposta: 'O design de interiores é um projeto técnico que envolve planejamento funcional do espaço, definição de layout, especificação de móveis e materiais e coordenação da execução. A decoração atua sobre um ambiente já existente, adicionando objetos e têxteis. Oferecemos os dois, integrados à marcenaria planejada.' },
      { pergunta: 'Preciso de arquiteto para fazer design de interiores?', resposta: 'Para intervenções estruturais (abrir paredes, alterar hidráulica ou elétrica) sim. Para projetos de marcenaria, mobiliário e decoração em imóvel pronto, não é obrigatório. A Prime Line atua no escopo de marcenaria e interiores, sem interferências estruturais.' },
      { pergunta: 'Vocês atendem apartamentos em lançamento ou na planta?', resposta: 'Sim. Projetos em planta são ideais — trabalhamos com a planta do imóvel antes da entrega das chaves, desenvolvendo todo o projeto de marcenaria para que os móveis sejam instalados assim que o apartamento for entregue. É a melhor forma de garantir aproveitamento máximo do espaço.' },
    ],
    relacionados: [
      { label: 'Projeto 3D', href: '/servicos/projeto-3d-moveis-planejados-bh' },
      { label: 'Cozinha Planejada', href: '/servicos/cozinha-planejada-belo-horizonte' },
      { label: 'Quarto Planejado', href: '/servicos/quarto-planejado-belo-horizonte' },
    ],
  },

  {
    slug: 'projeto-3d-moveis-planejados-bh',
    metaTitle: 'Projeto 3D de Móveis Planejados em BH | Prime Line — Grátis',
    metaDescription: 'Projeto 3D gratuito de móveis planejados em Belo Horizonte. Visualize cozinha, quarto, closet e sala antes de assinar o contrato. Prime Line BH.',
    titulo: 'Projeto 3D de Móveis Planejados em Belo Horizonte',
    label: 'Serviço incluído em todos os projetos',
    subtitulo: 'Veja seus móveis planejados prontos — em alta resolução, com cores, texturas e iluminação reais — antes de aprovar qualquer projeto.',
    priceRange: 'Gratuito em todos os projetos',
    heroImagem: '/images/galeria/dormitorio-renderizado-guarda-roupa-madeira-escura-nichos-parede-cama-casal-bh.jpg',
    heroAlt: 'Projeto 3D renderizado de dormitório casal com guarda-roupa madeira escura e nichos — Prime Line BH',
    features: [
      { icon: 'cube', titulo: 'Render fotorrealista', descricao: 'Visualização em alta resolução com texturas, acabamentos, cores e iluminação fiéis ao resultado final.' },
      { icon: 'ruler', titulo: 'Medidas reais do ambiente', descricao: 'O projeto 3D é feito com as medidas exatas do seu espaço — sem distorções ou proporções genéricas.' },
      { icon: 'palette', titulo: 'Variações de acabamento', descricao: 'Veja o mesmo projeto com diferentes cores e materiais antes de decidir — sem custo adicional.' },
      { icon: 'star', titulo: 'Revisões ilimitadas', descricao: 'Ajustamos o projeto quantas vezes forem necessárias até que você esteja 100% satisfeito com o resultado.' },
      { icon: 'shield', titulo: 'Sem compromisso', descricao: 'O projeto 3D é apresentado antes da assinatura do contrato — você só aprova quando tiver certeza.' },
      { icon: 'clock', titulo: 'Pronto em até 5 dias úteis', descricao: 'Após a visita técnica, entregamos o projeto 3D completo em até 5 dias úteis para sua aprovação.' },
    ],
    paragrafos: [
      'Comprar móveis planejados sem ver o resultado antes é um risco desnecessário. Na Prime Line, todo projeto inclui visualização 3D fotorrealista sem custo adicional — você vê exatamente como ficarão seus móveis, com as cores, texturas e iluminação corretas, antes de assinar qualquer contrato.',
      'Nosso processo começa com a visita técnica gratuita, onde medimos o ambiente e fazemos o levantamento de todas as informações necessárias. Em até 5 dias úteis, entregamos o projeto 3D completo para sua avaliação. Você pode solicitar alterações de layout, acabamentos, cores e configuração interna sem custo até chegar ao projeto ideal.',
      'O projeto 3D é desenvolvido com software profissional de render que simula a iluminação natural e artificial do ambiente, os reflexos dos materiais e até a sombra projetada pelos móveis. O resultado é uma imagem tão realista que muitos clientes confundem com uma fotografia do ambiente já pronto. Atendemos toda Belo Horizonte e Região Metropolitana.',
    ],
    imagens: [
      { src: '/images/galeria/dormitorio-casal-luxo-cabeceira-acolchoada-guarda-roupa-fullwall-bege-led-bh.jpg', alt: 'Resultado final de projeto 3D executado — dormitório casal com guarda-roupa full-wall — Prime Line BH' },
      { src: '/images/galeria/cozinha-planejada-cinza-granito-preto-pendentes-bh.jpg', alt: 'Resultado final de projeto 3D executado — cozinha planejada cinza com granito preto — Prime Line BH' },
      { src: '/images/galeria/guarda-roupa-deslizante-champanhe-interior-branco-nichos-gavetas-bh.jpg', alt: 'Resultado final de projeto 3D executado — closet champanhe com interior branco — Prime Line BH' },
    ],
    faq: [
      { pergunta: 'O projeto 3D realmente é gratuito?', resposta: 'Sim, 100% gratuito. O projeto 3D faz parte do nosso processo padrão e está incluído em todos os orçamentos — não cobramos pelo projeto em separado. Só iniciamos a produção após sua aprovação completa do projeto.' },
      { pergunta: 'Posso pedir alterações no projeto 3D?', resposta: 'Sim, quantas alterações forem necessárias. Ajustamos layout, cores, acabamentos, divisórias internas e configuração dos módulos sem custo adicional. Nosso objetivo é que você chegue ao projeto ideal antes de aprovar a produção.' },
      { pergunta: 'Como funciona a visita técnica antes do projeto 3D?', resposta: 'Nossa equipe vai até o seu imóvel sem custo, mede todos os ambientes com precisão milimétrica, fotografa o espaço e faz um briefing detalhado sobre seu estilo, rotina e orçamento. Com essas informações, desenvolvemos o projeto 3D personalizado para o seu espaço.' },
      { pergunta: 'O projeto 3D garante que o móvel ficará exatamente igual?', resposta: 'O projeto 3D é uma representação fiel do que será produzido — mesmas proporções, cores e acabamentos. Eventuais diferenças ocorrem apenas em variações naturais de lote de cor nos painéis MDF, que são mínimas e dentro dos padrões do fabricante. O layout, medidas e configuração são garantidos.' },
    ],
    relacionados: [
      { label: 'Design de Interiores', href: '/servicos/design-de-interiores-belo-horizonte' },
      { label: 'Cozinha Planejada', href: '/servicos/cozinha-planejada-belo-horizonte' },
      { label: 'Quarto Planejado', href: '/servicos/quarto-planejado-belo-horizonte' },
    ],
  },
]
