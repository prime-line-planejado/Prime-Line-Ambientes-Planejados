import type { NextConfig } from 'next'

const CANONICAL_DOMAIN = 'primelineplanejados.com.br'

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL:      `https://${CANONICAL_DOMAIN}`,
    NEXT_PUBLIC_WEB3FORMS_KEY: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '05982a1c-6b3b-4d87-b692-ebd98b2658df',
    NEXT_PUBLIC_GA_ID:         process.env.NEXT_PUBLIC_GA_ID ?? 'G-X8VVDT4J52',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Vercel subdomain → domínio canônico (301 permanente)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'prime-line-ambientes-planejados.vercel.app' }],
        destination: `https://${CANONICAL_DOMAIN}/:path*`,
        permanent: true,
      },
      // www → sem www (301 permanente)
      {
        source: '/:path*',
        has: [{ type: 'host', value: `www.${CANONICAL_DOMAIN}` }],
        destination: `https://${CANONICAL_DOMAIN}/:path*`,
        permanent: true,
      },
    ]
  },
}

export default nextConfig
