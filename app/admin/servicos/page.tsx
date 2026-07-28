import { createClient } from "@/lib/supabase/server";
import CrudTable from "@/components/admin/CrudTable";
import type { ServiceTier } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function AdminServicesPage() {
  const supabase = await createClient();
  const { data } = await supabase.from("services").select("*").order("sort_order");
  const services = (data ?? []) as ServiceTier[];

  return (
    <CrudTable
      table="services"
      title="Serviços (tiers)"
      addLabel="+ Novo tier"
      items={services}
      emptyRow={{ tier: "", title: "", items: "", featured: false, sort_order: services.length + 1 }}
      fields={[
        { key: "tier", label: "Rótulo (ex: TIER 01)" },
        { key: "title", label: "Nome do plano" },
        { key: "items", label: "Itens inclusos (um por linha)", type: "textarea" },
        { key: "featured", label: "Destacar este plano?", type: "checkbox" },
      ]}
      renderPreview={(s) => (
        <>
          <b className="block">{s.title}</b>
          <span style={{ color: "var(--fg-dim)" }}>{s.tier}</span>
        </>
      )}
    />
  );
}
