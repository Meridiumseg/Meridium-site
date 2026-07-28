import { createClient } from "@/lib/supabase/server";
import CrudTable from "@/components/admin/CrudTable";
import type { Project } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function AdminPortfolioPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("projects").select("*").order("sort_order");
  const projects = (data ?? []) as Project[];

  return (
    <div>
      <p className="text-[0.84rem] mb-6" style={{ color: "var(--fg-dim)" }}>
        Para adicionar uma foto, envie o arquivo em Supabase → Storage → bucket <code>media</code>{" "}
        e cole a URL pública gerada no campo &quot;URL da imagem&quot;.
      </p>
      <CrudTable
        table="projects"
        title="Projetos do portfólio"
        addLabel="+ Novo projeto"
        items={projects}
        emptyRow={{ code: "", category: "Engenharia", title: "", description: "", image_url: "", sort_order: projects.length + 1 }}
        fields={[
          { key: "code", label: "Código (ex: SST-2026-020)" },
          { key: "category", label: "Categoria (Engenharia / Consultoria / Segurança / Tecnologia)" },
          { key: "title", label: "Título" },
          { key: "description", label: "Descrição", type: "textarea" },
          { key: "image_url", label: "URL da imagem" },
        ]}
        renderPreview={(p) => (
          <>
            <b className="block">{p.title}</b>
            <span style={{ color: "var(--fg-dim)" }}>{p.category} · {p.code}</span>
          </>
        )}
      />
    </div>
  );
}
