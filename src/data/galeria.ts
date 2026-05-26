export type CategoriaGaleria = 'Todos' | 'Cozinhas' | 'Dormitórios' | 'Salas & Painéis' | 'Home Office' | 'Banheiros' | 'Closets'

export type ItemGaleria = {
  arquivo: string
  titulo: string
  categoria: Exclude<CategoriaGaleria, 'Todos'>
}

export const categoriasGaleria: CategoriaGaleria[] = [
  'Todos',
  'Cozinhas',
  'Dormitórios',
  'Salas & Painéis',
  'Home Office',
  'Banheiros',
  'Closets',
]

export const galeria: ItemGaleria[] = [
  // ── Cozinhas ─────────────────────────────────────────────────────────────
  { arquivo: 'cozinha-balcao-branco-ripado-cinza-banquetas-pretas-bh.jpg',                          titulo: 'Cozinha com Balcão Ripado Cinza e Banquetas Pretas',          categoria: 'Cozinhas' },
  { arquivo: 'cozinha-balcao-ripado-amadeirado-banquetas-bancada-preta-bh.jpg',                     titulo: 'Cozinha com Balcão Ripado Amadeirado e Bancada Preta',         categoria: 'Cozinhas' },
  { arquivo: 'cozinha-balcao-ripado-cinza-pendentes-pretos-led-armarios-brancos-bh.jpg',            titulo: 'Cozinha com Ripado Cinza, Pendentes Pretos e Armários Brancos', categoria: 'Cozinhas' },
  { arquivo: 'cozinha-gourmet-planejada-ilha-cooktop-coifa-teto-inox-bh.jpg',                       titulo: 'Cozinha Gourmet com Ilha, Cooktop e Coifa em Inox',            categoria: 'Cozinhas' },
  { arquivo: 'cozinha-planejada-apartamento-cinza-branco-belo-horizonte.jpg',                       titulo: 'Cozinha Planejada de Apartamento Cinza e Branco',             categoria: 'Cozinhas' },
  { arquivo: 'cozinha-planejada-branca-cinza-granito-preto-coifa-led-bh.jpg',                       titulo: 'Cozinha Branca e Cinza com Granito Preto e LED',              categoria: 'Cozinhas' },
  { arquivo: 'cozinha-planejada-cinza-granito-preto-armarios-espelhados-bh.jpg',                    titulo: 'Cozinha Cinza com Granito Preto e Armários Espelhados',        categoria: 'Cozinhas' },
  { arquivo: 'cozinha-planejada-cinza-granito-preto-balcao-ripado-nicho-espelhado-bh.jpg',          titulo: 'Cozinha Cinza com Balcão Ripado e Nicho Espelhado',           categoria: 'Cozinhas' },
  { arquivo: 'cozinha-planejada-cinza-granito-preto-pendentes-bh.jpg',                              titulo: 'Cozinha Cinza com Granito Preto e Pendentes',                 categoria: 'Cozinhas' },
  { arquivo: 'cozinha-planejada-compacta-champanhe-espelhado-inox-bh.jpg',                          titulo: 'Cozinha Compacta Champanhe com Espelhado e Inox',             categoria: 'Cozinhas' },
  { arquivo: 'cozinha-planejada-grafite-bancada-branca-marmore-geladeira-inox-forno-bh.jpg',        titulo: 'Cozinha Grafite com Bancada em Mármore e Forno Embutido',     categoria: 'Cozinhas' },
  { arquivo: 'cozinha-planejada-madeira-escura-off-white-forno-embutido-bh.jpg',                    titulo: 'Cozinha Madeira Escura e Off-White com Forno Embutido',        categoria: 'Cozinhas' },
  { arquivo: 'cozinha-planejada-off-white-geladeira-inox-ambientes-planejados-bh.jpg',              titulo: 'Cozinha Off-White com Geladeira em Inox',                     categoria: 'Cozinhas' },

  // ── Dormitórios ──────────────────────────────────────────────────────────
  { arquivo: 'dormitorio-cama-embutida-parede-armarios-superiores-champanhe-amadeirado-led-bh.jpg', titulo: 'Dormitório com Cama Embutida na Parede e Armários Champanhe',  categoria: 'Dormitórios' },
  { arquivo: 'dormitorio-cama-guarda-roupa-superior-branco-cabeceira-acolchoada-led-bh.jpg',        titulo: 'Dormitório com Guarda-roupa Superior Branco e Cabeceira Acolchoada', categoria: 'Dormitórios' },
  { arquivo: 'dormitorio-cama-planejada-armarios-superiores-cinza-nichos-gavetas-bh.jpg',           titulo: 'Dormitório com Cama Planejada e Armários Superiores Cinza',   categoria: 'Dormitórios' },
  { arquivo: 'dormitorio-casal-cabeceira-embutida-guarda-roupa-integrado-cinza-escuro-bh.jpg',      titulo: 'Dormitório Casal com Cabeceira Embutida e Guarda-roupa Integrado', categoria: 'Dormitórios' },
  { arquivo: 'dormitorio-casal-cabeceira-rose-guarda-roupa-espelho-dourado-bh.jpg',                 titulo: 'Dormitório Casal com Cabeceira Rosê e Guarda-roupa Espelhado Dourado', categoria: 'Dormitórios' },
  { arquivo: 'dormitorio-casal-luxo-cabeceira-acolchoada-guarda-roupa-fullwall-bege-led-bh.jpg',    titulo: 'Dormitório Casal Luxo com Guarda-roupa Full-Wall Bege',        categoria: 'Dormitórios' },
  { arquivo: 'dormitorio-compacto-cama-bau-amadeirado-guarda-roupa-fullwall-champanhe-led-bh.jpg',  titulo: 'Dormitório Compacto com Cama Baú Amadeirada e Guarda-roupa Full-Wall', categoria: 'Dormitórios' },
  { arquivo: 'dormitorio-guarda-roupa-branco-fullwall-nicho-ripado-cinza-criado-mudo-bh.jpg',       titulo: 'Dormitório com Guarda-roupa Branco Full-Wall e Nicho Ripado',  categoria: 'Dormitórios' },
  { arquivo: 'dormitorio-guarda-roupa-canto-champanhe-nicho-amadeirado-lustre-dourado-bh.jpg',      titulo: 'Dormitório com Guarda-roupa de Canto Champanhe e Lustre Dourado', categoria: 'Dormitórios' },
  { arquivo: 'dormitorio-guarda-roupa-preto-deslizante-cama-piso-madeira-bh.jpg',                   titulo: 'Dormitório com Guarda-roupa Preto Deslizante e Piso de Madeira', categoria: 'Dormitórios' },
  { arquivo: 'dormitorio-luxo-cama-bau-champanhe-guarda-roupa-cabeceira-geometrica-preta-bh.jpg',   titulo: 'Dormitório Luxo com Cama Baú Champanhe e Cabeceira Geométrica', categoria: 'Dormitórios' },
  { arquivo: 'dormitorio-painel-tv-amadeirado-guarda-roupa-cinza-deslizante-bh.jpg',                titulo: 'Dormitório com Painel TV Amadeirado e Guarda-roupa Cinza',     categoria: 'Dormitórios' },
  { arquivo: 'dormitorio-planejado-guarda-roupa-cinza-cabeceira-amadeirada-led-bh.jpg',             titulo: 'Dormitório com Guarda-roupa Cinza e Cabeceira Amadeirada',    categoria: 'Dormitórios' },
  { arquivo: 'dormitorio-planejado-guarda-roupa-cinza-penteadeira-espelho-redondo-bh.jpg',          titulo: 'Dormitório com Guarda-roupa Cinza e Penteadeira Espelho Redondo', categoria: 'Dormitórios' },
  { arquivo: 'dormitorio-planejado-guarda-roupa-off-white-penteadeira-espelho-arco-bh.jpg',         titulo: 'Dormitório com Guarda-roupa Off-White e Penteadeira Espelho Arco', categoria: 'Dormitórios' },
  { arquivo: 'dormitorio-renderizado-guarda-roupa-madeira-escura-nichos-parede-cama-casal-bh.jpg',  titulo: 'Dormitório Casal com Guarda-roupa Madeira Escura e Nichos',    categoria: 'Dormitórios' },
  { arquivo: 'quarto-armarios-cinza-prateleiras-bancada-guarda-roupa-deslizante-bh.jpg',            titulo: 'Quarto com Armários Cinza, Prateleiras e Guarda-roupa Deslizante', categoria: 'Dormitórios' },
  { arquivo: 'quarto-escritorio-planejado-guarda-roupa-off-white-bancada-home-office-bh.jpg',       titulo: 'Quarto com Escritório Planejado e Guarda-roupa Off-White',     categoria: 'Dormitórios' },
  { arquivo: 'quarto-feminino-guarda-roupa-cinza-sage-cabeceira-amadeirada-bege-bh.jpg',            titulo: 'Quarto Feminino com Guarda-roupa Cinza Sage e Cabeceira Amadeirada', categoria: 'Dormitórios' },
  { arquivo: 'quarto-gamer-planejado-cimento-queimado-rgb-bh.jpg',                                  titulo: 'Quarto Gamer com Cimento Queimado e Iluminação RGB',           categoria: 'Dormitórios' },
  { arquivo: 'quarto-gamer-planejado-compacto-setup-ripado-bh.jpg',                                 titulo: 'Quarto Gamer Compacto com Setup e Ripado',                    categoria: 'Dormitórios' },
  { arquivo: 'quarto-home-office-bancada-amadeirada-armarios-brancos-nicho-led-bh.jpg',             titulo: 'Quarto Home Office com Bancada Amadeirada e Armários Brancos', categoria: 'Dormitórios' },
  { arquivo: 'quarto-home-office-gamer-armarios-cinza-bancada-madeira-bh.jpg',                      titulo: 'Quarto Gamer com Armários Cinza e Bancada de Madeira',         categoria: 'Dormitórios' },
  { arquivo: 'quarto-home-office-guarda-roupa-branco-bancada-amadeirada-ripado-bh.jpg',             titulo: 'Quarto com Home Office, Guarda-roupa Branco e Ripado',         categoria: 'Dormitórios' },
  { arquivo: 'quarto-home-office-guarda-roupa-cinza-bancada-ripado-verde-menta-bh.jpg',             titulo: 'Quarto com Home Office Verde Menta e Guarda-roupa Cinza',     categoria: 'Dormitórios' },
  { arquivo: 'quarto-infantil-guarda-roupa-deslizante-off-white-bancada-ripado-amadeirado-bh.jpg',  titulo: 'Quarto Infantil com Guarda-roupa Deslizante Off-White',        categoria: 'Dormitórios' },
  { arquivo: 'quarto-juvenil-ripado-cinza-bancada-amadeirada-tv-prateleiras-bh.jpg',                titulo: 'Quarto Juvenil com Ripado Cinza, Bancada e TV',               categoria: 'Dormitórios' },

  // ── Salas & Painéis ──────────────────────────────────────────────────────
  { arquivo: 'sala-apartamento-painel-tv-ripado-rack-mesa-jantar-bh.jpg',                           titulo: 'Sala de Apartamento com Painel TV Ripado e Mesa de Jantar',   categoria: 'Salas & Painéis' },
  { arquivo: 'sala-integrada-painel-tv-amadeirado-nichos-iluminados-bh.jpg',                        titulo: 'Sala Integrada com Painel TV Amadeirado e Nichos Iluminados',  categoria: 'Salas & Painéis' },
  { arquivo: 'sala-painel-tv-led-ambar-rack-branco-cortina-apartamento-bh.jpg',                     titulo: 'Sala com Painel TV, LED Âmbar e Rack Branco',                 categoria: 'Salas & Painéis' },
  { arquivo: 'sala-painel-tv-luxo-ripado-champanhe-branco-lacado-cristaleira-preta-led-bh.jpg',     titulo: 'Sala Luxo com Ripado Champanhe, Branco Lacado e Cristaleira Preta', categoria: 'Salas & Painéis' },
  { arquivo: 'sala-painel-tv-luxo-ripado-cinza-arandelas-cristaleira-dourada-led-bh.jpg',           titulo: 'Sala Luxo com Ripado Cinza, Arandelas e Cristaleira Dourada',  categoria: 'Salas & Painéis' },
  { arquivo: 'sala-painel-tv-ripado-iluminado-nichos-belo-horizonte.jpg',                           titulo: 'Sala com Painel TV Ripado Iluminado e Nichos',                categoria: 'Salas & Painéis' },
  { arquivo: 'sala-painel-tv-ripado-madeira-rack-flutuante-branco-bh.jpg',                          titulo: 'Sala com Painel TV Ripado Madeira e Rack Flutuante Branco',   categoria: 'Salas & Painéis' },
  { arquivo: 'sala-painel-tv-ripado-rack-branco-sofa-cinza-belo-horizonte.jpg',                     titulo: 'Sala com Painel TV Ripado, Rack Branco e Sofá Cinza',         categoria: 'Salas & Painéis' },
  { arquivo: 'sala-tv-minimalista-painel-amadeirado-rack-ripado-bh.jpg',                            titulo: 'Sala Minimalista com Painel Amadeirado e Rack Ripado',         categoria: 'Salas & Painéis' },
  { arquivo: 'sala-tv-painel-amadeirado-rack-sofa-bege-piso-porcelanato-bh.jpg',                    titulo: 'Sala TV com Painel Amadeirado, Rack e Sofá Bege',             categoria: 'Salas & Painéis' },
  { arquivo: 'painel-decorativo-ripado-off-white-led-ambar-rack-branco-flutuante-bh.jpg',           titulo: 'Painel Decorativo Ripado Off-White com LED Âmbar',            categoria: 'Salas & Painéis' },
  { arquivo: 'painel-tv-cinza-ripado-madeira-led-ambar-rack-flutuante-bh.jpg',                      titulo: 'Painel TV Cinza Ripado com LED Âmbar e Rack Flutuante',        categoria: 'Salas & Painéis' },
  { arquivo: 'painel-tv-cinza-ripado-madeira-led-branco-rack-planejado-bh.jpg',                     titulo: 'Painel TV Cinza Ripado com LED Branco e Rack Planejado',       categoria: 'Salas & Painéis' },
  { arquivo: 'painel-tv-dormitorio-ripado-cinza-nicho-amadeirado-rack-porta-deslizante-bh.jpg',     titulo: 'Painel TV Dormitório Ripado Cinza com Porta Deslizante',       categoria: 'Salas & Painéis' },
  { arquivo: 'painel-tv-marmore-branco-ripado-cinza-rack-flutuante-belo-horizonte.jpg',             titulo: 'Painel TV em Mármore Branco com Ripado Cinza',                categoria: 'Salas & Painéis' },
  { arquivo: 'painel-tv-planejado-ripado-amadeirado-nicho-iluminado-bh.jpg',                        titulo: 'Painel TV Planejado Ripado Amadeirado com Nicho Iluminado',   categoria: 'Salas & Painéis' },
  { arquivo: 'painel-tv-ripado-amadeirado-dourado-prateleira-metal-rack-branco-led-bh.jpg',         titulo: 'Painel TV Ripado Amadeirado Dourado com Prateleira de Metal',  categoria: 'Salas & Painéis' },
  { arquivo: 'painel-tv-ripado-amadeirado-escuro-fullwall-rack-branco-led-bh.jpg',                  titulo: 'Painel TV Full-Wall Ripado Amadeirado Escuro',                categoria: 'Salas & Painéis' },
  { arquivo: 'painel-tv-ripado-amadeirado-led-ambar-rack-branco-prateleira-bh.jpg',                 titulo: 'Painel TV Ripado Amadeirado com LED Âmbar e Prateleira',      categoria: 'Salas & Painéis' },
  { arquivo: 'painel-tv-ripado-cinza-led-ambar-rack-cristaleira-preta-bh.jpg',                      titulo: 'Painel TV Ripado Cinza com LED Âmbar e Cristaleira Preta',    categoria: 'Salas & Painéis' },
  { arquivo: 'painel-tv-ripado-cinza-rack-baixo-led-ambar-gesso-piso-madeira-bh.jpg',               titulo: 'Painel TV Ripado Cinza com Rack Baixo e LED Âmbar',           categoria: 'Salas & Painéis' },

  // ── Home Office ──────────────────────────────────────────────────────────
  { arquivo: 'bancada-home-office-planejada-cinza-amadeirada-armarios-superiores-bh.jpg',           titulo: 'Bancada Home Office Cinza Amadeirada com Armários Superiores', categoria: 'Home Office' },
  { arquivo: 'escritorio-gamer-bancada-amadeirada-ripado-iluminado-prateleiras-bh.jpg',             titulo: 'Escritório Gamer com Bancada Amadeirada e Ripado Iluminado',  categoria: 'Home Office' },
  { arquivo: 'escritorio-home-office-compacto-ripado-preto-bancada-amadeirada-em-l-bh.jpg',         titulo: 'Escritório Compacto em L com Ripado Preto e Bancada Amadeirada', categoria: 'Home Office' },
  { arquivo: 'escritorio-home-office-ripado-preto-amadeirado-escuro-bancada-nichos-led-bh.jpg',     titulo: 'Escritório com Ripado Preto, Amadeirado Escuro e Nichos LED',  categoria: 'Home Office' },
  { arquivo: 'home-office-bancada-amadeirada-armarios-verde-menta-nicho-painel-bh.jpg',             titulo: 'Home Office com Armários Verde Menta e Bancada Amadeirada',   categoria: 'Home Office' },
  { arquivo: 'home-office-compacto-em-l-bancada-amadeirada-ripado-cinza-armario-bh.jpg',            titulo: 'Home Office Compacto em L com Ripado Cinza',                  categoria: 'Home Office' },
  { arquivo: 'home-office-em-l-armarios-bege-bancada-amadeirada-prateleiras-bh.jpg',                titulo: 'Home Office em L com Armários Bege e Prateleiras',            categoria: 'Home Office' },
  { arquivo: 'home-office-em-l-bancada-amadeirada-ripado-armarios-cinza-prateleiras-bh.jpg',        titulo: 'Home Office em L com Ripado e Armários Cinza',                categoria: 'Home Office' },
  { arquivo: 'home-office-escritorio-bancada-amadeirada-dupla-armarios-ripado-bh.jpg',              titulo: 'Escritório com Bancada Amadeirada Dupla e Ripado',             categoria: 'Home Office' },
  { arquivo: 'home-office-planejado-azul-marinho-bancada-amadeirada-prateleiras-bh.jpg',            titulo: 'Home Office Azul Marinho com Bancada Amadeirada',             categoria: 'Home Office' },
  { arquivo: 'home-office-planejado-em-l-bancada-amadeirada-armarios-cinza-ripado-bh.jpg',          titulo: 'Home Office em L Amadeirado com Armários Cinza e Ripado',     categoria: 'Home Office' },
  { arquivo: 'studio-integrado-bancada-amadeirada-ripado-divisoria-armarios-cinza-bh.jpg',          titulo: 'Studio Integrado com Bancada Amadeirada e Divisória Ripada',  categoria: 'Home Office' },

  // ── Banheiros ────────────────────────────────────────────────────────────
  { arquivo: 'banheiro-cinza-box-vidro-preto-armario-espelho-bancada-branca-bh.jpg',                titulo: 'Banheiro Cinza com Box Vidro Preto e Armário Espelho',         categoria: 'Banheiros' },
  { arquivo: 'banheiro-cinza-escuro-box-preto-cuba-branca-bancada-marmore-prateleira-madeira-bh.jpg', titulo: 'Banheiro Cinza Escuro com Cuba Branca e Bancada em Mármore',  categoria: 'Banheiros' },
  { arquivo: 'banheiro-compacto-cinza-box-preto-cuba-apoio-branca-espelho-grande-bh.jpg',           titulo: 'Banheiro Compacto Cinza com Cuba de Apoio e Espelho Grande',   categoria: 'Banheiros' },
  { arquivo: 'banheiro-feminino-branco-box-vidro-armario-espelho-nicho-decoracao-rosa-bh.jpg',      titulo: 'Banheiro Feminino Branco com Nicho e Decoração Rosê',          categoria: 'Banheiros' },
  { arquivo: 'banheiro-lavabo-cinza-bege-espelho-grande-armario-planejado-bh.jpg',                  titulo: 'Lavabo Cinza Bege com Espelho Grande e Armário Planejado',    categoria: 'Banheiros' },
  { arquivo: 'banheiro-lavabo-espelho-led-bancada-branca-armario-amadeirado-bh.jpg',                titulo: 'Lavabo com Espelho LED e Armário Amadeirado',                  categoria: 'Banheiros' },
  { arquivo: 'banheiro-moderno-cinza-box-vidro-preto-cuba-preta-marmore-escuro-bh.jpg',             titulo: 'Banheiro Moderno Cinza com Cuba Preta e Mármore Escuro',       categoria: 'Banheiros' },
  { arquivo: 'banheiro-planejado-cinza-box-vidro-espelho-grande-nicho-bh.jpg',                      titulo: 'Banheiro Planejado Cinza com Box de Vidro e Nicho',            categoria: 'Banheiros' },
  { arquivo: 'banheiro-planejado-marmore-branco-bancada-embutida-box-vidro-nicho-bh.jpg',           titulo: 'Banheiro em Mármore Branco com Bancada Embutida e Nicho',      categoria: 'Banheiros' },
  { arquivo: 'banheiro-planejado-marmore-cinza-nicho-iluminado-box-vidro-bh.jpg',                   titulo: 'Banheiro em Mármore Cinza com Nicho Iluminado',               categoria: 'Banheiros' },

  // ── Closets ──────────────────────────────────────────────────────────────
  { arquivo: 'guarda-roupa-correr-cinza-4-portas-frisos-dourados-piso-madeira-bh.jpg',              titulo: 'Guarda-roupa de Correr Cinza com 4 Portas e Frisos Dourados',  categoria: 'Closets' },
  { arquivo: 'guarda-roupa-deslizante-champanhe-interior-branco-nichos-gavetas-bh.jpg',             titulo: 'Guarda-roupa Deslizante Champanhe com Interior Branco e Nichos', categoria: 'Closets' },
  { arquivo: 'guarda-roupa-planejado-amadeirado-ripado-nichos-bh.jpg',                              titulo: 'Guarda-roupa Amadeirado com Ripado e Nichos',                  categoria: 'Closets' },
]
