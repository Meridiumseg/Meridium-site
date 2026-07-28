import { createClient } from "@/lib/supabase/server";
import CrudTable from "@/components/admin/CrudTable";
import type { TeamMember } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function AdminTeamPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("team_members").select("*").order("sort_order");
  const team = (data ?? []) as TeamMember[];

  return (
    <div>
      <p className="text-[0.84rem] mb-6" style={{ color: "var(--fg-dim)" }}>
        Para trocar uma foto, envie o arquivo em Supabase &gt; Storage &gt; bucket <code>media</code> e
        cole a URL pública gerada no campo &quot;URL da foto&quot;.
      </p>
      <CrudTable
        table="team_members"
        title="Equipe técnica"
        addLabel="+ Novo colaborador"
        items={team}
        emptyRow={{ name: "", role: "", bio: "", photo_url: "", sort_order: team.length + 1 }}
        fields={[
          { key: "name", label: "Nome" },
          { key: "role", label: "Cargo" },
          { key: "bio", label: "Resumo profissional", type: "textarea" },
          { key: "photo_url", label: "URL da foto" },
        ]}
        renderPreview={(t) => (
          <>
            <b className="block">{t.name}</b>
            <span style={{ color: "var(--fg-dim)" }}>{t.role}</span>
          </>
        )}
      />
    </div>
  );
}
