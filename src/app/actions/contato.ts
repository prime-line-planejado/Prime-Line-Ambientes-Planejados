'use server'

import { Resend } from 'resend'

const TO_EMAIL = process.env.CONTACT_EMAIL ?? 'contato@primelineplanejados.com.br'

export type ContatoState =
  | { status: 'idle' }
  | { status: 'ok' }
  | { status: 'error'; message: string }

export async function enviarContato(
  _prev: ContatoState,
  formData: FormData,
): Promise<ContatoState> {
  const nome     = (formData.get('nome')     as string | null)?.trim()
  const telefone = (formData.get('telefone') as string | null)?.trim()
  const ambiente = (formData.get('ambiente') as string | null)?.trim()
  const mensagem = (formData.get('mensagem') as string | null)?.trim()

  if (!nome || !telefone || !ambiente) {
    return { status: 'error', message: 'Preencha todos os campos obrigatórios.' }
  }

  if (!process.env.RESEND_API_KEY) {
    return { status: 'error', message: 'no_api_key' }
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Prime Line Site <onboarding@resend.dev>',
      to:   TO_EMAIL,
      replyTo: TO_EMAIL,
      subject: `Novo contato — ${ambiente} | ${nome}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:auto;color:#3a2f24">
          <h2 style="color:#a8905a;border-bottom:1px solid #e5ddd0;padding-bottom:12px">
            Novo contato via site
          </h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:600;width:140px">Nome</td><td>${nome}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600">Telefone</td><td>${telefone}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600">Ambiente</td><td>${ambiente}</td></tr>
            ${mensagem ? `<tr><td style="padding:8px 0;font-weight:600;vertical-align:top">Mensagem</td><td>${mensagem}</td></tr>` : ''}
          </table>
        </div>
      `,
    })
    return { status: 'ok' }
  } catch {
    return { status: 'error', message: 'Erro ao enviar. Tente pelo WhatsApp.' }
  }
}
