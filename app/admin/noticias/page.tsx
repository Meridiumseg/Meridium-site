import { createClient } from "@/lib/supabase/server";
import CrudTable from "@/components/admin/CrudTable";
import type { NewsPost } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function AdminNewsPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("news").select("*").order("sort_order");
  const news = (data ?? []) as NewsPost[];

  return (
    <CrudTable
      table="news"
      title="Notícias e atualizações"
      addLabel="+ Nova notícia"
      items={news}
      emptyRow={{ published_date: "", title: "", description: "", sort_order: news.length + 1 }}
      fields={[
        { key: "published_date", label: "Data (ex: 20 JUL 2026)" },
        { key: "title", label: "Título" },
        { key: "description", label: "Resumo", type: "textarea" },
      ]}
      renderPreview={(n) => (
        <>
          <b className="block">{n.title}</b>
          <span style={{ color: "var(--fg-dim)" }}>{n.published_date}</span>
        </>
      )}
    />
  );
}
