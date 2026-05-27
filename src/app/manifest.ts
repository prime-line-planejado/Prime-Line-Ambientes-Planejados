import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Prime Line Ambientes Planejados',
    short_name: 'Prime Line',
    description: 'Projetos exclusivos em marcenaria planejada de alto padrão em Belo Horizonte.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1a1a18',
    theme_color: '#1a1a18',
    orientation: 'portrait',
    icons: [
      { src: '/favicon-32x32.png', sizes: '32x32',   type: 'image/png' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
