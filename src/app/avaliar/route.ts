import { NextResponse } from 'next/server'

// Link curto e branded para pedir avaliações no Google:
//   primelineplanejados.com.br/avaliar  →  perfil da Prime Line no Google Maps
// (CID 1578239453291676779), onde o cliente toca em "Avaliar".
// Mais fácil de imprimir em QR code e mandar no WhatsApp do que o link longo do Maps.
const GOOGLE_REVIEW_URL = 'https://www.google.com/maps?cid=1578239453291676779'

export function GET() {
  return NextResponse.redirect(GOOGLE_REVIEW_URL, 307)
}
