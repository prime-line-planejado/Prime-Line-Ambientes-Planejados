import type { NextConfig } from 'next'

const CANONICAL_DOMAIN = 'primelineplanejados.com.br'

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: `https://${CANONICAL_DOMAIN}`,
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
