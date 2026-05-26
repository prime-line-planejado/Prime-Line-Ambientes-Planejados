import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { Diferenciais } from '@/components/home/Diferenciais'
import { PortfolioHome } from '@/components/home/PortfolioHome'
import { Depoimentos } from '@/components/home/Depoimentos'
import { BlogPreview } from '@/components/home/BlogPreview'
import { FAQ } from '@/components/home/FAQ'
import { CtaContato } from '@/components/home/CtaContato'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

export const metadata: Metadata = {
  title: 'Móveis Planejados em Belo Horizonte | Prime Line Ambientes Planejados',
  description:
    'Cozinhas, closets, dormitórios e ambientes corporativos planejados sob medida em Belo Horizonte. Visita técnica gratuita, projeto 3D e orçamento sem compromisso. Ligue: (31) 9 9815-6666.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Móveis Planejados em Belo Horizonte | Prime Line — Visita Gratuita',
    description:
      'Cozinhas, closets e ambientes sob medida de alto padrão em BH. Visita técnica gratuita, projeto 3D personalizado e garantia formal. Solicite seu orçamento.',
    type: 'website',
    url: siteUrl,
    locale: 'pt_BR',
    siteName: 'Prime Line Ambientes Planejados',
    images: [
      {
        url: `${siteUrl}/images/raw/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: 'Prime Line Ambientes Planejados — Móveis Planejados de Alto Padrão em Belo Horizonte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Móveis Planejados em BH | Prime Line — Visita Gratuita',
    description: 'Cozinhas, closets e ambientes sob medida em Belo Horizonte. Projeto 3D, garantia formal e visita técnica gratuita.',
    images: [`${siteUrl}/images/raw/hero-bg.jpg`],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quanto tempo leva para entregar móveis planejados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O prazo médio é de 45 a 60 dias após a aprovação do projeto e assinatura do contrato. Esse tempo inclui a fabricação sob medida, transporte e montagem técnica no local.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funciona a visita técnica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A visita técnica é gratuita e sem compromisso. Um de nossos especialistas vai até o seu imóvel, mede os ambientes, entende o seu estilo de vida e apresenta as possibilidades de projeto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual é a área de atendimento da Prime Line?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atendemos toda a região de Belo Horizonte e municípios da Grande BH, incluindo bairros como Savassi, Belvedere, Lourdes, Funcionários, Buritis, Sion, Carmo, Mangabeiras e região.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais ambientes vocês projetam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Projetamos todos os ambientes residenciais e corporativos: cozinhas planejadas, closets, dormitórios, home offices, salas integradas, banheiros, lavanderias e escritórios completos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Os móveis têm garantia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Todos os projetos da Prime Line têm garantia formal contra defeitos de fabricação e instalação.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual é o investimento em móveis planejados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O investimento varia conforme o ambiente, a metragem e os materiais. Projetos residenciais partem de R$ 12.000 para ambientes menores e chegam a valores maiores em projetos completos. Oferecemos orçamento detalhado e gratuito após a visita técnica — sem surpresas no valor final.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vocês trabalham com financiamento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, oferecemos condições de parcelamento. Entre em contato pelo WhatsApp para conhecer as opções disponíveis.',
      },
    },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Prime Line Ambientes Planejados',
  description:
    'Projetos exclusivos em marcenaria planejada de alto padrão. Cozinhas, quartos, closets, escritórios e salas sob medida em Belo Horizonte.',
  url: siteUrl,
  telephone: '+5531998156666',
  email: 'contato@primelineplanejados.com.br',
  image: `${siteUrl}/images/raw/hero-bg.jpg`,
  logo: `${siteUrl}/logo.svg`,
  priceRange: '$$$',
  currenciesAccepted: 'BRL',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  foundingDate: '2014',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua David Maurílio Mourão, 113',
    addressLocality: 'Belo Horizonte',
    addressRegion: 'MG',
    postalCode: '30575-340',
    addressCountry: 'BR',
    addressNeighborhood: 'Palmeiras',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -19.9167,
    longitude: -43.9345,
  },
  hasMap: 'https://maps.google.com/?q=Rua+David+Maurilio+Mourão,+113,+Palmeiras,+Belo+Horizonte+MG+30575-340',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '13:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Belo Horizonte' },
    { '@type': 'City', name: 'Contagem' },
    { '@type': 'City', name: 'Nova Lima' },
    { '@type': 'City', name: 'Betim' },
  ],
  knowsAbout: [
    'Marcenaria planejada',
    'Móveis sob medida',
    'Cozinhas planejadas',
    'Closets planejados',
    'Dormitórios planejados',
    'Home office planejado',
    'Ambientes corporativos',
    'Design de interiores',
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cozinha Planejada em Belo Horizonte' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Closet Planejado em Belo Horizonte' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dormitório Planejado em Belo Horizonte' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Office Planejado em Belo Horizonte' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Escritório Corporativo Planejado em Belo Horizonte' } },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '3',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Fernanda Alvarenga' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'A Prime Line transformou completamente nossa cozinha. Cada detalhe foi pensado para o nosso jeito de viver. Qualidade impecável e equipe atenciosa do início ao fim.',
      name: 'Cozinha com Ilha Central',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Rodrigo e Camila Sousa' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Finalmente um projeto que realmente ouviu o que queríamos. O closet e a suíte ficaram além do que imaginávamos. Recomendamos sem hesitar.',
      name: 'Suíte Master com Closet',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Marcela Drummond' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody:
        'Profissionalismo em cada etapa. O prazo foi cumprido, a montagem foi limpa e o resultado é deslumbrante. Já indicamos para três amigos.',
      name: 'Sala Integrada e Home Office',
    },
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Prime Line Ambientes Planejados',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <Diferenciais />
      <PortfolioHome />
      <Depoimentos />
      <BlogPreview />
      <FAQ />
      <CtaContato />
    </>
  )
}
