import { createClient } from "@/lib/supabase/server";
import CrudTable from "@/components/admin/CrudTable";
import type { LegislationItem } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function AdminLegislationPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("legislation").select("*").order("sort_order");
  const legislation = (data ?? []) as LegislationItem[];

  return (
    <CrudTable
      table="legislation"
      title="Legislação e normas"
      addLabel="+ Nova norma"
      items={legislation}
      emptyRow={{ name: "", sort_order: legislation.length + 1 }}
      fields={[{ key: "name", label: "Nome (ex: NR-10 · Eletricidade)" }]}
      renderPreview={(l) => <b>{l.name}</b>}
    />
  );
}
