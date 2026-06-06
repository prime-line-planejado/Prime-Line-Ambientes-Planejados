import 'server-only'
import crypto from 'crypto'

// Meta Conversions API (CAPI) — envia eventos server-side direto pro Meta,
// recuperando conversões que o pixel do browser perde (ad-block, iOS/Safari ITP).
// Token é SECRET → vive só no env do Vercel (META_CAPI_ACCESS_TOKEN), nunca no repo.
// Se o token não existir, as funções viram no-op (não quebram o site).

const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '3194399230742680'
const TOKEN = process.env.META_CAPI_ACCESS_TOKEN || ''
const TEST_CODE = process.env.META_CAPI_TEST_CODE || '' // opcional: Test Events
const API = 'https://graph.facebook.com/v21.0'

function sha256(value?: string | null): string | undefined {
  if (!value) return undefined
  const v = value.trim().toLowerCase()
  if (!v) return undefined
  return crypto.createHash('sha256').update(v).digest('hex')
}

// Telefone: só dígitos, com código do país (BR = 55). Hash depois.
function hashPhone(phone?: string | null): string | undefined {
  if (!phone) return undefined
  let d = phone.replace(/\D/g, '')
  if (!d) return undefined
  if (d.length <= 11 && !d.startsWith('55')) d = '55' + d // assume Brasil
  return crypto.createHash('sha256').update(d).digest('hex')
}

export interface CapiEvent {
  eventName: 'Lead' | 'Contact' | 'CompleteRegistration' | string
  eventId: string // mesmo id do pixel no browser → deduplicação
  eventSourceUrl?: string
  email?: string | null
  phone?: string | null
  name?: string | null
  clientIp?: string | null
  userAgent?: string | null
  fbp?: string | null
  fbc?: string | null
  customData?: Record<string, unknown>
}

export async function sendCapiEvent(ev: CapiEvent): Promise<void> {
  if (!TOKEN) return // CAPI desligado sem token — no-op seguro

  const [firstName, ...rest] = (ev.name || '').trim().split(/\s+/)
  const lastName = rest.join(' ')

  const user_data: Record<string, unknown> = {}
  const em = sha256(ev.email);        if (em) user_data.em = [em]
  const ph = hashPhone(ev.phone);     if (ph) user_data.ph = [ph]
  const fn = sha256(firstName);       if (fn) user_data.fn = [fn]
  const ln = sha256(lastName);        if (ln) user_data.ln = [ln]
  if (ev.clientIp)  user_data.client_ip_address = ev.clientIp
  if (ev.userAgent) user_data.client_user_agent = ev.userAgent
  if (ev.fbp) user_data.fbp = ev.fbp
  if (ev.fbc) user_data.fbc = ev.fbc

  const body: Record<string, unknown> = {
    data: [
      {
        event_name: ev.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: ev.eventId,
        event_source_url: ev.eventSourceUrl,
        action_source: 'website',
        user_data,
        custom_data: ev.customData,
      },
    ],
  }
  if (TEST_CODE) body.test_event_code = TEST_CODE

  try {
    const res = await fetch(`${API}/${PIXEL_ID}/events?access_token=${TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (!res.ok) {
      console.error('[capi] erro', res.status, await res.text().catch(() => ''))
    }
  } catch (err) {
    console.error('[capi] falha no fetch', err)
  }
}
