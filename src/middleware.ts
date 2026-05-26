import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL = 'primelineplanejados.com.br'
const REDIRECT_HOSTS = new Set([
  'prime-line-ambientes-planejados.vercel.app',
  `www.${CANONICAL}`,
])

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''

  if (REDIRECT_HOSTS.has(host)) {
    const url = request.nextUrl.clone()
    url.protocol = 'https:'
    url.host = CANONICAL
    url.port = ''
    return NextResponse.redirect(url, { status: 301 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon|.*\\.(?:png|jpg|jpeg|svg|ico|webp|avif)$).*)'],
}
