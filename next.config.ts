import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://primelineplanejados.com.br',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
