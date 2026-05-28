import type { Metadata } from 'next'
import { supabaseAdmin } from '@/lib/supabase-server'
import { WA_NUMBER } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Leads — Admin Prime Line',
  robots: { index: false, follow: false },
}

interface Lead {
  id: string
  nome: string
  email: string
  origem: string
  criado_em: string
}

interface Props {
  searchParams: Promise<{ p?: string }>
}

function formatData(iso: string) {
  return new Date(iso).toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

export default async function AdminLeadsPage({ searchParams }: Props) {
  const { p } = await searchParams
  const senhaCorreta = process.env.ADMIN_LEADS_PASSWORD

  if (!p || p !== senhaCorreta) {
    return (
      <div className="min-h-screen bg-brand-950 flex items-center justify-center">
        <div className="text-center p-8 border border-brand-800">
          <p className="font-display text-2xl text-brand-400 mb-2">Acesso restrito</p>
          <p className="font-body text-sm text-brand-600">
            Acesse com o parâmetro correto na URL
          </p>
        </div>
      </div>
    )
  }

  const { data: leads, error } = await supabaseAdmin
    .from('leads')
    .select('*')
    .order('criado_em', { ascending: false })

  const total = leads?.length ?? 0

  return (
    <div className="min-h-screen bg-brand-950 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <p className="label-caps text-gold-main mb-1">Admin</p>
            <h1 className="font-display font-light text-3xl text-brand-50">Leads do Site</h1>
          </div>
          <div className="text-right">
            <p className="font-body text-3xl font-semibold text-gold-main">{total}</p>
            <p className="font-body text-xs text-brand-500">leads cadastrados</p>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 border border-red-800 bg-red-950 text-red-400 font-body text-sm">
            Erro ao carregar leads: {error.message}
          </div>
        )}

        {total === 0 ? (
          <div className="text-center py-20 border border-brand-800">
            <p className="font-body text-brand-500">Nenhum lead cadastrado ainda.</p>
          </div>
        ) : (
          <div className="border border-brand-800 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-brand-800 bg-brand-900">
                  <th className="text-left px-5 py-3 label-caps text-brand-500">#</th>
                  <th className="text-left px-5 py-3 label-caps text-brand-500">Nome</th>
                  <th className="text-left px-5 py-3 label-caps text-brand-500">E-mail</th>
                  <th className="text-left px-5 py-3 label-caps text-brand-500">Origem</th>
                  <th className="text-left px-5 py-3 label-caps text-brand-500">Data</th>
                  <th className="text-left px-5 py-3 label-caps text-brand-500">Ações</th>
                </tr>
              </thead>
              <tbody>
                {(leads as Lead[]).map((lead, i) => {
                  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Olá ${lead.nome}, tudo bem? Vi que você se cadastrou no site da Prime Line Ambientes Planejados. Posso te ajudar a agendar uma visita técnica gratuita?`)}`
                  return (
                    <tr
                      key={lead.id}
                      className="border-b border-brand-800 hover:bg-brand-900/50 transition-colors"
                    >
                      <td className="px-5 py-4 font-body text-xs text-brand-600">{total - i}</td>
                      <td className="px-5 py-4 font-body text-sm text-brand-100">{lead.nome}</td>
                      <td className="px-5 py-4 font-body text-sm">
                        <a href={`mailto:${lead.email}`} className="text-gold-dark hover:text-gold-main transition-colors">
                          {lead.email}
                        </a>
                      </td>
                      <td className="px-5 py-4">
                        <span className="font-body text-xs text-brand-500 bg-brand-800 px-2 py-1">
                          {lead.origem}
                        </span>
                      </td>
                      <td className="px-5 py-4 font-body text-xs text-brand-500 whitespace-nowrap">
                        {formatData(lead.criado_em)}
                      </td>
                      <td className="px-5 py-4">
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-xs text-green-400 hover:text-green-300 transition-colors"
                        >
                          WhatsApp ↗
                        </a>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        <p className="mt-6 font-body text-xs text-brand-700 text-center">
          Prime Line Ambientes Planejados — área administrativa
        </p>
      </div>
    </div>
  )
}
