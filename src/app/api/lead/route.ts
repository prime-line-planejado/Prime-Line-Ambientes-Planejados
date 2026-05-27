import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabaseAdmin } from '@/lib/supabase-server'

const resend = new Resend(process.env.RESEND_API_KEY)
const EMPRESA_EMAIL = 'primelineambientesplanejados@gmail.com'

export async function POST(req: NextRequest) {
  try {
    const { nome, email, origem = 'exit-intent' } = await req.json()

    if (!nome?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'Nome e e-mail são obrigatórios' }, { status: 400 })
    }

    // Salva no Supabase
    const { error: dbError } = await supabaseAdmin
      .from('leads')
      .insert({ nome: nome.trim(), email: email.trim().toLowerCase(), origem })

    if (dbError) {
      console.error('[lead] Supabase error:', dbError.message)
    }

    // Envia e-mail de notificação
    const dataHora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    const waLink = `https://wa.me/5531998156666?text=${encodeURIComponent(`Olá ${nome}, vi que você se cadastrou no site da Prime Line! Posso ajudar a agendar sua visita técnica gratuita?`)}`

    await resend.emails.send({
      from: 'Prime Line Site <onboarding@resend.dev>',
      to: EMPRESA_EMAIL,
      subject: `🏠 Novo lead: ${nome}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;background:#f9f9f7;border:1px solid #e5e3dc">
          <h2 style="margin:0 0 16px;font-size:20px;color:#1a1a18">Novo lead capturado no site</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#6b6b5a;font-size:14px;width:80px">Nome</td>
              <td style="padding:8px 0;color:#1a1a18;font-size:14px;font-weight:600">${nome}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b6b5a;font-size:14px">E-mail</td>
              <td style="padding:8px 0;color:#1a1a18;font-size:14px"><a href="mailto:${email}" style="color:#b8924a">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b6b5a;font-size:14px">Origem</td>
              <td style="padding:8px 0;color:#1a1a18;font-size:14px">${origem}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b6b5a;font-size:14px">Data</td>
              <td style="padding:8px 0;color:#1a1a18;font-size:14px">${dataHora}</td>
            </tr>
          </table>
          <div style="margin-top:24px">
            <a href="${waLink}" style="display:inline-block;background:#25d366;color:#fff;text-decoration:none;padding:12px 20px;font-size:14px;font-weight:600;border-radius:4px">
              Contatar via WhatsApp
            </a>
          </div>
          <p style="margin-top:24px;font-size:12px;color:#9a9a88">
            Todos os leads ficam salvos em <a href="https://primelineplanejados.com.br/admin/leads?p=PrimeLine2025" style="color:#b8924a">primelineplanejados.com.br/admin/leads</a>
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[lead] Erro interno:', err)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
